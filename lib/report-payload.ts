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

export function buildReportPayload(d: SavedEvaluation, lang: ReportLang = detectLang(d.analysis), analysisOverride?: SavedEvaluation['analysis']) {
  const purpose = OPTS.purpose.find(o => o.v === d.purpose)?.[lang] || d.purpose || ''
  const country = lang === 'en' ? (COUNTRIES.find(c => c.v === d.country)?.en || d.country || '') : (d.country || '')
  const a = analysisOverride ?? d.analysis
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

const HANDOFF = 'genius_report_handoff'
const LOADING = (lang: ReportLang) => `<!doctype html><meta charset="utf-8"><title>Genius</title><body style="font-family:sans-serif;color:#1A3A3A;display:flex;align-items:center;justify-content:center;height:100vh;margin:0"><p>${lang === 'en' ? 'Translating the report to English…' : 'Traduciendo el reporte al español…'}</p></body>`

// Abre el reporte en otra pestaña y lanza el cuadro de impresión (Guardar como PDF).
// Si el idioma pedido es distinto al del análisis guardado, traduce el texto completo con IA
// (así el PDF no queda mitad en un idioma y mitad en otro).
export async function openClientReport(d: SavedEvaluation, lang: ReportLang | undefined, password: string): Promise<{ ok: boolean; error?: string }> {
  const target = lang ?? detectLang(d.analysis)
  const needsTranslation = !!d.analysis && detectLang(d.analysis) !== target
  try {
    if (!needsTranslation) {
      sessionStorage.setItem('genius_report', JSON.stringify(buildReportPayload(d, target)))
      return window.open('/reporte?print=1', '_blank') ? { ok: true } : { ok: false, error: 'popup' }
    }
    // La ventana se abre ya (con el clic) para que el navegador no la bloquee; se llena cuando llega la traducción
    const w = window.open('', '_blank')
    if (!w) return { ok: false, error: 'popup' }
    try { w.document.write(LOADING(target)); w.document.close() } catch {}
    let translated: SavedEvaluation['analysis']
    try {
      const res = await fetch('/api/translate-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-panel-password': encodeURIComponent(password) },
        body: JSON.stringify({ analysis: d.analysis, to: target }),
      })
      if (!res.ok) throw new Error(String(res.status))
      translated = (await res.json()).analysis
      if (!translated) throw new Error('vacío')
    } catch {
      try { w.close() } catch {}
      return { ok: false, error: 'translate' }
    }
    localStorage.setItem(HANDOFF, JSON.stringify(buildReportPayload(d, target, translated)))
    w.location.href = '/reporte?print=1'
    return { ok: true }
  } catch { return { ok: false, error: 'popup' } }
}
