// Arma el reporte para el cliente a partir de una evaluación guardada (Panel).
// Es el mismo formato que usa /reporte desde el evaluador: sin citas 9 FAM, sin datos internos.
import { OPTS, COUNTRIES, FACTORS, type FactorKey } from '@/lib/visa-model'

export type ReportLang = 'es' | 'en'

interface AItem { title: string; text: string; factor?: string }
export interface SavedEvaluation {
  name?: string; email?: string; phone?: string; age?: string
  country?: string; purpose?: string
  score: number; scoreMax?: number
  breakdown?: { key: string; points: number; max: number }[]
  level: string; confidence: number; timestamp?: string
  analysis?: { summary?: string; strengths?: AItem[]; risks?: AItem[]; recommendations?: AItem[]; interview?: AItem[] } | null
}

const HOW: Record<ReportLang, string> = {
  es: 'Seis factores suman 100 puntos. Los factores se basan en los criterios que los oficiales consulares consideran al evaluar una visa. Los antecedentes graves restan puntos dentro del historial migratorio y legal. No existe una fórmula oficial con puntos: los pesos son de Genius y el resultado es orientativo, no una probabilidad de aprobación.',
  en: 'Six factors add up to 100 points. The factors are based on the criteria consular officers consider when assessing a visa. Serious records subtract points within the immigration and legal history factor. There is no official points formula: the weights are Genius’s own and the result is indicative, not a probability of approval.',
}

// El idioma no se guarda con la evaluación: se deduce del texto del análisis (por defecto, español).
export function detectLang(a?: SavedEvaluation['analysis']): ReportLang {
  const t = ` ${a?.summary || ''} ${a?.strengths?.[0]?.text || ''} ${a?.risks?.[0]?.text || ''} `.toLowerCase()
  const en = (t.match(/\b(the|and|your|with|you|have|for)\b/g) || []).length
  const es = (t.match(/\b(el|la|los|las|de|que|y|con|su|para|una?)\b/g) || []).length
  return en > es ? 'en' : 'es'
}

const clean = (arr?: AItem[]) => (Array.isArray(arr) ? arr : []).filter(i => i && (i.title || i.text)).map(i => ({ title: String(i.title || ''), text: String(i.text || '') }))

export function buildReportPayload(d: SavedEvaluation, lang: ReportLang = detectLang(d.analysis)) {
  const purpose = OPTS.purpose.find(o => o.v === d.purpose)?.[lang] || d.purpose || ''
  const country = lang === 'en' ? (COUNTRIES.find(c => c.v === d.country)?.en || d.country || '') : (d.country || '')
  const a = d.analysis
  return {
    lang,
    date: d.timestamp || '',
    score: d.score,
    scoreMax: d.scoreMax || 94, // evaluaciones antiguas se calificaban sobre 94
    confidence: d.confidence,
    level: d.level,
    analysis: a ? { summary: a.summary || '', strengths: clean(a.strengths), risks: clean(a.risks), recommendations: clean(a.recommendations), interview: clean(a.interview) } : null,
    breakdown: (d.breakdown || []).filter(b => b && b.key in FACTORS && b.max > 0).map(b => ({ label: FACTORS[b.key as FactorKey][lang].label, points: b.points, max: b.max })),
    howText: HOW[lang],
    form: { name: d.name || '', email: d.email || '', phone: d.phone || '', age: d.age || '', country, purpose },
  }
}

// Abre el reporte en otra pestaña y lanza el cuadro de impresión (Guardar como PDF).
export function openClientReport(d: SavedEvaluation, lang?: ReportLang): boolean {
  try {
    sessionStorage.setItem('genius_report', JSON.stringify(buildReportPayload(d, lang)))
    const w = window.open('/reporte?print=1', '_blank')
    return !!w
  } catch { return false }
}
