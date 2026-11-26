import { NextRequest, NextResponse } from 'next/server'
import { checkPanelAuth } from '@/lib/panel-auth'

export const dynamic = 'force-dynamic'
export const maxDuration = 60
const NO_STORE = { 'Cache-Control': 'no-store' }
const SECTIONS = ['strengths', 'risks', 'recommendations', 'interview'] as const
type Item = { title: string; text: string }

const fail = (status: number, error: string) => NextResponse.json({ error }, { status, headers: NO_STORE })
const asItems = (v: unknown): Item[] =>
  Array.isArray(v) ? v.slice(0, 10).filter(i => i && typeof i === 'object').map(i => ({ title: String((i as Item).title || '').slice(0, 300), text: String((i as Item).text || '').slice(0, 1500) })) : []

// Traduce el análisis de una evaluación guardada (solo para el panel, con contraseña) al otro idioma.
export async function POST(req: NextRequest) {
  const auth = await checkPanelAuth(req)
  if (!auth.ok) return fail(auth.status, auth.error)

  let body: { analysis?: Record<string, unknown>; to?: string }
  try { body = await req.json() } catch { return fail(400, 'Solicitud no válida') }
  if ((body.to !== 'en' && body.to !== 'es') || !body.analysis || typeof body.analysis !== 'object') return fail(400, 'Solicitud no válida')

  const src: Record<string, unknown> = { summary: String(body.analysis.summary || '').slice(0, 1500) }
  for (const s of SECTIONS) src[s] = asItems(body.analysis[s])

  const key = process.env.ANTHROPIC_API_KEY
  if (!key) { console.error('Falta ANTHROPIC_API_KEY'); return fail(500, 'Servicio no disponible') }

  const target = body.to === 'en' ? 'English' : 'Spanish (neutral, Latin America)'
  const prompt = `Translate the following visa pre-qualification analysis into ${target}.
Rules: keep the exact same JSON structure, the same keys and the same number of items in each list; translate only the values of "summary", "title" and "text"; keep the meaning, a professional and warm tone, and any names, numbers and document names. Do not add, remove or soften anything. Reply with ONLY the JSON, no code fences.

${JSON.stringify(src)}`

  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 45_000)
  let response: Response
  try {
    response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      signal: ctrl.signal,
      headers: { 'Content-Type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-haiku-4-5', max_tokens: 4000, temperature: 0.2, messages: [{ role: 'user', content: prompt }] }),
    })
  } catch (e) {
    console.error('Translate fetch error:', e instanceof Error ? e.message : String(e))
    return fail(502, 'Servicio de IA no disponible')
  } finally { clearTimeout(timer) }
  if (!response.ok) { console.error('Translate error:', response.status, await response.text()); return fail(502, 'Servicio de IA no disponible') }

  const data = await response.json()
  const text: string = data.content?.[0]?.text || ''
  const a = text.indexOf('{'), b = text.lastIndexOf('}')
  let raw: Record<string, unknown>
  try { raw = JSON.parse(text.slice(a, b + 1)) } catch { console.error('Traducción sin JSON válido:', text.slice(0, 200)); return fail(502, 'Respuesta no válida') }

  const out: Record<string, unknown> = { summary: typeof raw.summary === 'string' ? raw.summary.trim() : '' }
  for (const s of SECTIONS) {
    const t = asItems(raw[s])
    const n = (src[s] as Item[]).length
    // Si la IA devolvió otra cantidad de elementos, la traducción no es confiable: mejor fallar que mezclar idiomas
    if (t.length !== n || t.some(i => !i.title && !i.text)) { console.error('Traducción con estructura distinta en', s); return fail(502, 'Respuesta no válida') }
    out[s] = t
  }
  if (!out.summary && src.summary) return fail(502, 'Respuesta no válida')
  return NextResponse.json({ analysis: out }, { headers: NO_STORE })
}
