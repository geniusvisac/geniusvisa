import { NextRequest, NextResponse } from 'next/server'
import { calcAssessment, calcCompleteness, parseAssessmentInput, parseContact, answerTone, FACTORS, FACTOR_ORDER, OPTS, type AssessmentInput, type FactorKey } from '@/lib/visa-model'
import { redisConfig } from '@/lib/panel-auth'
import { saveEvaluation } from '@/lib/evaluations-store'

export const dynamic = 'force-dynamic'
export const maxDuration = 60 // el análisis con IA puede tardar más de 10 s

const MAX_PER_HOUR = 30
const MAX_BODY = 20_000 // el cuestionario completo pesa ~1 KB: nada legítimo se acerca a esto
const NO_STORE = { 'Cache-Control': 'no-store' }

// Límite por conexión para proteger tu crédito de Anthropic. Si Redis falla, no se bloquea a nadie.
async function rateLimited(req: NextRequest): Promise<boolean> {
  const cfg = redisConfig()
  if (!cfg) return false
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'desconocida'
  const key = encodeURIComponent(`eval_rl:${ip}`)
  try {
    const r = await fetch(`${cfg.url}/incr/${key}`, { headers: cfg.headers, cache: 'no-store' })
    const n = Number((await r.json()).result)
    await fetch(`${cfg.url}/expire/${key}/3600`, { headers: cfg.headers, cache: 'no-store' })
    return n > MAX_PER_HOUR
  } catch { return false }
}

const label = (group: string, v: string): string => OPTS[group]?.find(o => o.v === v)?.es || 'No respondió'

// Cada respuesta lleva la etiqueta que le da el propio modelo, para que la IA no pueda invertir su sentido
function profileText(i: AssessmentInput, country: string): string {
  const row = (text: string, field: string, group: string): string => {
    const v = (i as unknown as Record<string, string>)[field]
    const tone = answerTone(field, v, i.purpose)
    return `${text}: ${label(group, v)}${tone ? ` [${tone}]` : ''}`
  }
  const lines = [
    `País de origen: ${country || 'No indicado'}`,
    `Edad: ${i.age}`,
    row('Propósito del viaje', 'purpose', 'purpose'),
    row('Duración planificada en EE. UU.', 'duration', 'duration'),
    row('Historial migratorio con EE. UU.', 'history', 'history'),
  ]
  if (i.history === 'denied') lines.push(`  · Veces rechazada: ${label('dcount', i.dcount)}; último rechazo: ${label('dwhen', i.dwhen)}`)
  if (i.history === 'deported' || i.history === 'withdrew') {
    if (i.history === 'deported') lines.push(`  · Tipo de remoción: ${label('deportform', i.deportform)}`)
    lines.push(`  · Tiempo desde que salió de EE. UU.: ${label('timegone', i.timegone)}; protección migratoria: ${label('protection', i.protection)}; problemas legales en EE. UU.: ${label('uslegal', i.uslegal)}`)
  }
  if (i.history === 'hasvisa') lines.push(`  · Visa anterior: ${label('visacat', i.visacat)}; vencimiento: ${label('visaexp', i.visaexp)}`)
  lines.push(
    row('Ocupación', 'occupation', 'occupation'),
    row('Tiempo en el empleo', 'jobtime', 'jobtime'),
    row('Educación', 'education', 'education'),
    row('Ingresos mensuales (USD)', 'income', 'income'),
    row('Quién paga el viaje', 'whopays', 'whopays'),
    row('Fondos para el doble del costo del viaje', 'funds', 'yesno'),
    row('Estado civil', 'marital', 'marital'),
    row('Viajes al exterior en los últimos 3 años', 'travel', 'yesno'),
    row('Familiares en EE. UU.', 'relatives', 'relatives'),
    row('Propiedad', 'property', 'yesno'),
    row('Procesos penales o judiciales', 'criminal', 'criminal'),
  )
  return lines.join('\n')
}

interface Item { title: string; text: string; factor?: FactorKey }
// Defensa adicional: un riesgo no puede apoyarse en detalles o documentos que el cuestionario nunca pregunta
const MISSING_DETAIL = /\b(no\s+(se\s+|est[aá]n?\s+)?(detall|especific|document|precis|aclar)|sin\s+(detalle|especific|document)|falta\s+de\s+(detalle|informaci|document|especific)|not\s+(specified|detailed|documented|provided|clear)|no\s+details?|lack\s+of\s+(detail|information|documentation|specif)|unspecified|undocumented)/i
// Defensa adicional: no tener familiares en EE. UU. nunca es un riesgo (es lo contrario: los familiares allá jalan a quedarse)
const NO_US_RELATIVES = /(no\s+(tiene|tienen|cuenta\s+con|posee|have|has)\s+(close\s+)?(familiares?|parientes|relatives|family)\s+(cercanos\s+|members\s+)?(en|in|dentro\s+de)\s+(ee|estados|e\.?u|the\s+u)|sin\s+(familiares?|parientes)\s+(cercanos\s+)?en\s+(ee|estados)|(ausencia|falta)\s+de\s+(arraigo\s+familiar|familiares?|v[ií]nculos?\s+familiares?)\s+en\s+(ee|estados)|(absence|lack)\s+of\s+(family|relatives)\s+(ties\s+)?in\s+the\s+u|without\s+(family|relatives)\s+in\s+the\s+u)/i
const isFactor = (v: unknown): v is FactorKey => typeof v === 'string' && (FACTOR_ORDER as string[]).includes(v)

function cleanItems(v: unknown, max: number): Item[] {
  if (!Array.isArray(v)) return []
  const out: Item[] = []
  for (const x of v) {
    if (!x || typeof x !== 'object') continue
    const o = x as Record<string, unknown>
    if (typeof o.title !== 'string' || typeof o.text !== 'string' || !o.title.trim() || !o.text.trim()) continue
    out.push({ title: o.title.trim().slice(0, 140), text: o.text.trim().slice(0, 700), ...(isFactor(o.factor) ? { factor: o.factor } : {}) })
    if (out.length >= max) break
  }
  return out
}

interface Analysis { summary: string; strengths: Item[]; risks: Item[]; recommendations: Item[]; interview: Item[] }
type Outcome = { ok: true; analysis: Analysis } | { ok: false; status: number; error: string }
const fail = (status: number, error: string): Outcome => ({ ok: false, status, error })

async function generateAnalysis(prompt: string): Promise<Outcome> {
  const key = process.env.ANTHROPIC_API_KEY
  if (!key) { console.error('Falta ANTHROPIC_API_KEY'); return fail(500, 'Servicio no disponible') }
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 50_000)
    let response: Response
    try {
      response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        signal: ctrl.signal,
        headers: { 'Content-Type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({ model: 'claude-haiku-4-5', max_tokens: 2000, temperature: 0.4, messages: [{ role: 'user', content: prompt }] }),
      })
    } catch (e) {
      console.error('Anthropic fetch error:', e instanceof Error ? e.message : String(e))
      return fail(502, 'Servicio de IA no disponible')
    } finally { clearTimeout(timer) }

    if (!response.ok) {
      console.error('Anthropic error:', response.status, await response.text())
      return fail(502, 'Servicio de IA no disponible')
    }

    const data = await response.json()
    const text: string = data.content?.[0]?.text || ''
    const start = text.indexOf('{'), end = text.lastIndexOf('}')
    if (start === -1 || end === -1) { console.error('Respuesta sin JSON:', text.slice(0, 300)); return fail(502, 'Respuesta no válida') }

    let raw: Record<string, unknown>
    try { raw = JSON.parse(text.slice(start, end + 1)) } catch { console.error('JSON inválido:', text.slice(0, 300)); return fail(502, 'Respuesta no válida') }

    const analysis = {
      summary: typeof raw.summary === 'string' ? raw.summary.trim().slice(0, 900) : '',
      strengths: cleanItems(raw.strengths, 4),
      risks: cleanItems(raw.risks, 8).filter(r => !MISSING_DETAIL.test(`${r.title} ${r.text}`) && !NO_US_RELATIVES.test(`${r.title} ${r.text}`)).slice(0, 4),
      recommendations: cleanItems(raw.recommendations, 4),
      interview: cleanItems(raw.interview, 4),
    }
    if (!analysis.summary || (!analysis.strengths.length && !analysis.risks.length)) {
      return fail(502, 'Respuesta incompleta')
    }
    return { ok: true, analysis }
}

export async function POST(req: NextRequest) {
  try {
    let body: unknown
    const rawBody = await req.text()
    if (rawBody.length > MAX_BODY) return NextResponse.json({ error: 'Solicitud demasiado grande' }, { status: 413, headers: NO_STORE })
    try { body = JSON.parse(rawBody) } catch { return NextResponse.json({ error: 'Solicitud no válida' }, { status: 400, headers: NO_STORE }) }
    const b = (body && typeof body === 'object' ? body : {}) as Record<string, unknown>
    const lang = b.lang === 'en' ? 'en' : 'es'

    const parsed = parseAssessmentInput(b.formData)
    if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400, headers: NO_STORE })
    const { input, country, gender } = parsed.value
    const contact = parseContact(b.formData)
    if (!contact.ok) return NextResponse.json({ error: contact.error }, { status: 400, headers: NO_STORE })

    if (await rateLimited(req)) return NextResponse.json({ error: 'Demasiadas solicitudes' }, { status: 429, headers: NO_STORE })

    // El puntaje se calcula aquí con el mismo modelo; no se confía en lo que envíe el navegador
    const a = calcAssessment(input)
    // Registro que verá el panel: todo calculado aquí (puntaje, nivel, desglose, completitud); nada viene del navegador
    const { name, email, phone } = contact.value
    const record = {
      name, email, phone, age: input.age, country, history: input.history, purpose: input.purpose, occupation: input.occupation,
      score: a.score, scoreMax: a.max, breakdown: a.breakdown, level: a.level,
      confidence: calcCompleteness({ ...input, gender, country, name, email, phone }),
    }
    const breakdown = a.breakdown.map(x => `- ${FACTORS[x.key].es.label} (clave: ${x.key}): ${x.points}/${x.max}`).join('\n')

    const prompt = `Eres un asesor experto en visas de no inmigrante de EE. UU. Analizas el perfil con base en los factores que el Departamento de Estado indica a los oficiales consulares en su manual (9 FAM): la presunción de intención inmigrante (INA 214(b)), la residencia en el exterior y los arraigos, la estadía temporal, las actividades no permitidas durante la visita y el historial de solicitudes y rechazos.

Responde ÚNICAMENTE con un objeto JSON válido, sin texto antes ni después y sin comillas de código.

PERFIL (datos declarados por la persona):
${profileText(input, country)}

PUNTAJE DEL MODELO: ${a.score}/100
DESGLOSE POR FACTOR (un valor negativo en el historial significa que antecedentes graves restaron puntos):
${breakdown}

REGLAS:
- Basa cada punto SOLO en las respuestas del perfil y en el desglose. No inventes datos ni hechos que no estén arriba.
- No prometas ni predigas la aprobación y no des porcentajes de probabilidad.
- NO cites números de sección del 9 FAM ni de leyes: el sistema agrega las referencias oficiales por su cuenta.
- Cada ítem lleva "factor": una de estas claves exactas: purpose, work, family, funding, history, travel (el factor al que pertenece el punto).
- Fortalezas: factores con buen puntaje. Riesgos: factores con puntaje bajo o antecedentes que el oficial podría cuestionar.
- Recomendaciones: acciones concretas y realistas (por ejemplo, qué documentos reunir).
- Consejos de entrevista: honestos y prácticos. Nunca sugieras ocultar ni alterar información.
- Cada dato del perfil lleva una etiqueta calculada por el modelo: [favorable], [intermedio], [desfavorable] o [neutral]. RESPÉTALA. Un riesgo solo puede basarse en un dato [desfavorable] (o [intermedio] si su factor tiene puntaje bajo en el desglose). Un dato [favorable] o [neutral] NUNCA es un riesgo ni una debilidad.
- La AUSENCIA de algo negativo es favorable: no tener familiares en EE. UU., no tener rechazos, no tener antecedentes. Los familiares en EE. UU. pesan EN CONTRA de la persona, porque son un lazo que la puede jalar a quedarse; no tenerlos NUNCA es un riesgo ni una debilidad (si acaso, preséntalo como fortaleza).
- El cuestionario SOLO pregunta lo que aparece en el perfil. NO pregunta: la naturaleza, el valor ni la ubicación de la propiedad; el nombre o tipo de empresa; el salario exacto; el itinerario, las fechas ni el destino del viaje; con quién viaja; ni detalles de los familiares en EE. UU. NUNCA presentes como riesgo la falta de esos detalles ni de documentación, porque nunca se pidieron.
- Un riesgo solo puede basarse en una respuesta declarada que sea desfavorable o en un factor con puntaje bajo del desglose. Si la persona declaró algo favorable (por ejemplo, que tiene propiedad), preséntalo como fortaleza tal como lo declaró. Reunir documentos de respaldo va en Recomendaciones, nunca como riesgo.
- NO menciones puntos ni cálculos internos del puntaje. Explica los riesgos en términos del perfil (por ejemplo, «el rechazo reciente» o «el antecedente de deportación»), sin hablar de puntajes.
- Máximo 3 ítems por lista. Cada texto: 1 o 2 oraciones. El resumen: 3 oraciones.
- ${lang === 'en' ? 'IDIOMA: escribe TODOS los textos (summary, title y text) en INGLÉS (English). Las claves del JSON no cambian.' : 'IDIOMA: escribe todos los textos en español.'}

Responde SOLO con este formato:
{"summary":"...","strengths":[{"factor":"work","title":"...","text":"..."}],"risks":[{"factor":"family","title":"...","text":"..."}],"recommendations":[{"factor":"funding","title":"...","text":"..."}],"interview":[{"factor":"purpose","title":"...","text":"..."}]}`

    // La evaluación la guarda el SERVIDOR, aunque la IA falle (el contacto del cliente nunca se pierde)
    const outcome = await generateAnalysis(prompt)
    await saveEvaluation({ ...record, timestamp: new Date().toISOString(), analysis: outcome.ok ? outcome.analysis : null })
    if (!outcome.ok) return NextResponse.json({ error: outcome.error }, { status: outcome.status, headers: NO_STORE })
    return NextResponse.json({ analysis: outcome.analysis }, { headers: NO_STORE })
  } catch (error) {
    console.error('Route error:', error instanceof Error ? error.message : String(error))
    return NextResponse.json({ error: 'Error interno' }, { status: 500, headers: NO_STORE })
  }
}
