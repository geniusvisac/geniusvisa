import { NextRequest, NextResponse } from 'next/server'
import { calcAssessment, parseAssessmentInput, FACTORS, FACTOR_ORDER, OPTS, type AssessmentInput, type FactorKey } from '@/lib/visa-model'
import { redisConfig } from '@/lib/panel-auth'

export const dynamic = 'force-dynamic'
export const maxDuration = 60 // el análisis con IA puede tardar más de 10 s

const MAX_PER_HOUR = 30
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

function profileText(i: AssessmentInput, country: string): string {
  const lines = [
    `País de origen: ${country || 'No indicado'}`,
    `Edad: ${i.age}`,
    `Propósito del viaje: ${label('purpose', i.purpose)}`,
    `Duración planificada en EE. UU.: ${label('duration', i.duration)}`,
    `Historial migratorio con EE. UU.: ${label('history', i.history)}`,
  ]
  if (i.history === 'denied') lines.push(`  · Veces rechazada: ${label('dcount', i.dcount)}; último rechazo: ${label('dwhen', i.dwhen)}`)
  if (i.history === 'deported' || i.history === 'withdrew') {
    if (i.history === 'deported') lines.push(`  · Tipo de remoción: ${label('deportform', i.deportform)}`)
    lines.push(`  · Tiempo desde que salió de EE. UU.: ${label('timegone', i.timegone)}; protección migratoria: ${label('protection', i.protection)}; problemas legales en EE. UU.: ${label('uslegal', i.uslegal)}`)
  }
  if (i.history === 'hasvisa') lines.push(`  · Visa anterior: ${label('visacat', i.visacat)}; vencimiento: ${label('visaexp', i.visaexp)}`)
  lines.push(
    `Ocupación: ${label('occupation', i.occupation)}; tiempo en el empleo: ${label('jobtime', i.jobtime)}`,
    `Educación: ${label('education', i.education)}`,
    `Ingresos mensuales (USD): ${label('income', i.income)}`,
    `Quién paga el viaje: ${label('whopays', i.whopays)}; fondos para el doble del costo: ${label('yesno', i.funds)}`,
    `Estado civil: ${label('marital', i.marital)}`,
    `Viajes al exterior en los últimos 3 años: ${label('yesno', i.travel)}`,
    `Familiares en EE. UU.: ${label('relatives', i.relatives)}`,
    `Propiedad: ${label('yesno', i.property)}`,
    `Procesos penales o judiciales: ${label('criminal', i.criminal)}`,
  )
  return lines.join('\n')
}

interface Item { title: string; text: string; factor?: FactorKey }
// Defensa adicional: un riesgo no puede apoyarse en detalles o documentos que el cuestionario nunca pregunta
const MISSING_DETAIL = /\b(no\s+(se\s+|est[aá]n?\s+)?(detall|especific|document|precis|aclar)|sin\s+(detalle|especific|document)|falta\s+de\s+(detalle|informaci|document|especific)|not\s+(specified|detailed|documented|provided|clear)|no\s+details?|lack\s+of\s+(detail|information|documentation|specif)|unspecified|undocumented)/i
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

export async function POST(req: NextRequest) {
  try {
    let body: unknown
    try { body = await req.json() } catch { return NextResponse.json({ error: 'Solicitud no válida' }, { status: 400, headers: NO_STORE }) }
    const b = (body && typeof body === 'object' ? body : {}) as Record<string, unknown>
    const lang = b.lang === 'en' ? 'en' : 'es'

    const parsed = parseAssessmentInput(b.formData)
    if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400, headers: NO_STORE })
    const { input, country } = parsed.value

    if (await rateLimited(req)) return NextResponse.json({ error: 'Demasiadas solicitudes' }, { status: 429, headers: NO_STORE })
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('Falta ANTHROPIC_API_KEY')
      return NextResponse.json({ error: 'Servicio no disponible' }, { status: 500, headers: NO_STORE })
    }

    // El puntaje se calcula aquí con el mismo modelo; no se confía en lo que envíe el navegador
    const a = calcAssessment(input)
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
- El cuestionario SOLO pregunta lo que aparece en el perfil. NO pregunta: la naturaleza, el valor ni la ubicación de la propiedad; el nombre o tipo de empresa; el salario exacto; el itinerario, las fechas ni el destino del viaje; con quién viaja; ni detalles de los familiares en EE. UU. NUNCA presentes como riesgo la falta de esos detalles ni de documentación, porque nunca se pidieron.
- Un riesgo solo puede basarse en una respuesta declarada que sea desfavorable o en un factor con puntaje bajo del desglose. Si la persona declaró algo favorable (por ejemplo, que tiene propiedad), preséntalo como fortaleza tal como lo declaró. Reunir documentos de respaldo va en Recomendaciones, nunca como riesgo.
- NO menciones puntos ni cálculos internos del puntaje. Explica los riesgos en términos del perfil (por ejemplo, «el rechazo reciente» o «el antecedente de deportación»), sin hablar de puntajes.
- Máximo 3 ítems por lista. Cada texto: 1 o 2 oraciones. El resumen: 3 oraciones.
- ${lang === 'en' ? 'IDIOMA: escribe TODOS los textos (summary, title y text) en INGLÉS (English). Las claves del JSON no cambian.' : 'IDIOMA: escribe todos los textos en español.'}

Responde SOLO con este formato:
{"summary":"...","strengths":[{"factor":"work","title":"...","text":"..."}],"risks":[{"factor":"family","title":"...","text":"..."}],"recommendations":[{"factor":"funding","title":"...","text":"..."}],"interview":[{"factor":"purpose","title":"...","text":"..."}]}`

    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 50_000)
    let response: Response
    try {
      response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        signal: ctrl.signal,
        headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({ model: 'claude-haiku-4-5', max_tokens: 2000, temperature: 0.4, messages: [{ role: 'user', content: prompt }] }),
      })
    } finally { clearTimeout(timer) }

    if (!response.ok) {
      console.error('Anthropic error:', response.status, await response.text())
      return NextResponse.json({ error: 'Servicio de IA no disponible' }, { status: 502, headers: NO_STORE })
    }

    const data = await response.json()
    const text: string = data.content?.[0]?.text || ''
    const start = text.indexOf('{'), end = text.lastIndexOf('}')
    if (start === -1 || end === -1) { console.error('Respuesta sin JSON:', text.slice(0, 300)); return NextResponse.json({ error: 'Respuesta no válida' }, { status: 502, headers: NO_STORE }) }

    let raw: Record<string, unknown>
    try { raw = JSON.parse(text.slice(start, end + 1)) } catch { console.error('JSON inválido:', text.slice(0, 300)); return NextResponse.json({ error: 'Respuesta no válida' }, { status: 502, headers: NO_STORE }) }

    const analysis = {
      summary: typeof raw.summary === 'string' ? raw.summary.trim().slice(0, 900) : '',
      strengths: cleanItems(raw.strengths, 4),
      risks: cleanItems(raw.risks, 8).filter(r => !MISSING_DETAIL.test(`${r.title} ${r.text}`)).slice(0, 4),
      recommendations: cleanItems(raw.recommendations, 4),
      interview: cleanItems(raw.interview, 4),
    }
    if (!analysis.summary || (!analysis.strengths.length && !analysis.risks.length)) {
      return NextResponse.json({ error: 'Respuesta incompleta' }, { status: 502, headers: NO_STORE })
    }
    return NextResponse.json({ analysis }, { headers: NO_STORE })
  } catch (error) {
    console.error('Route error:', error instanceof Error ? error.message : String(error))
    return NextResponse.json({ error: 'Error interno' }, { status: 500, headers: NO_STORE })
  }
}
