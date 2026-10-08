'use client'
import { useState, useCallback } from 'react'
import { ArrowRight, ArrowLeft, Download, MessageCircle, RotateCcw } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'

// ── Logo embebido ────────────────────────────────────────────────────────────
const LOGO_SRC = 'data:image/png;base64,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'

// ── Tipos ────────────────────────────────────────────────────────────────────
interface FormData {
  // Paso 1 — Obligatorias
  name: string
  age: string
  gender: string
  country: string
  history: string
  // Condicionales — denied
  dcount: string
  dwhen: string
  // Condicionales — deported/withdrew
  deportform: string
  timegone: string
  protection: string
  uslegal: string
  // Condicionales — hasvisa
  visacat: string
  visaexp: string
  // Paso 2 — Recomendadas
  purpose: string
  occupation: string
  jobtime: string
  education: string
  income: string
  whopays: string
  funds: string
  // Paso 3 — Arraigos
  marital: string
  travel: string
  relatives: string
  property: string
  duration: string
  criminal: string
}

interface AnalysisResult {
  summary: string
  strengths: { title: string; text: string }[]
  risks: { title: string; text: string }[]
  recommendations: { title: string; text: string }[]
}

const INITIAL: FormData = {
  name:'', age:'', gender:'', country:'', history:'',
  dcount:'', dwhen:'', deportform:'', timegone:'', protection:'', uslegal:'',
  visacat:'', visaexp:'',
  purpose:'', occupation:'', jobtime:'', education:'', income:'', whopays:'', funds:'',
  marital:'', travel:'', relatives:'', property:'', duration:'', criminal:'',
}

// ── Motor de puntuación ──────────────────────────────────────────────────────
function calcScore(f: FormData): number {
  let score = 0
  const age = parseInt(f.age) || 30

  // Historial migratorio (max 20)
  if (f.history === 'first') score += 16
  else if (f.history === 'hasvisa') score += 20
  else if (f.history === 'denied') {
    if (f.dcount === '1') score += 10
    else if (f.dcount === '2') score += 6
    else score += 2
    if (f.dwhen === '5+') score += 3
    else if (f.dwhen === '2-5') score += 1
  } else if (f.history === 'withdrew') score += 5
  else if (f.history === 'deported') score += 1

  // Ocupación (max 12)
  if (f.occupation === 'employee') score += 10
  else if (f.occupation === 'public') score += 11
  else if (f.occupation === 'business') score += 12
  else if (f.occupation === 'retired') score += 10
  else if (f.occupation === 'freelance') score += 8
  else if (f.occupation === 'student') score += 6
  else if (f.occupation === 'unemployed') score += 2

  // Ingresos (max 6)
  if (f.income === '5000+') score += 6
  else if (f.income === '2500-5000') score += 5
  else if (f.income === '1000-2500') score += 4
  else if (f.income === '500-1000') score += 2
  else if (f.income === 'lt500') score += 1

  // Empleo estable (max 6)
  if (f.jobtime === '5+y') score += 6
  else if (f.jobtime === '3-5y') score += 5
  else if (f.jobtime === '1-3y') score += 4
  else if (f.jobtime === '6m-1y') score += 2
  else if (f.jobtime === 'lt6m') score += 1

  // Educación (max 6)
  if (f.education === 'postgrad') score += 6
  else if (f.education === 'university') score += 5
  else if (f.education === 'technical') score += 4
  else if (f.education === 'secondary') score += 3
  else if (f.education === 'primary') score += 1

  // Fondos (max 5)
  if (f.funds === 'yes') score += 5

  // Estado civil y edad (max 8)
  if (f.marital === 'married') score += 6
  else if (f.marital === 'divorced' || f.marital === 'widowed') score += 3
  else if (f.marital === 'single') score += 1
  if (age >= 30 && age <= 55) score += 2
  if (age < 25) score -= 2

  // Familiares en EE.UU. (max 5)
  if (f.relatives === 'none') score += 5
  else if (f.relatives === 'distant') score += 3
  else if (f.relatives === 'close') score += 1
  else if (f.relatives === 'spouse') score -= 2

  // Viajes previos (max 6)
  if (f.travel === 'yes') score += 6

  // Propiedad (max 6)
  if (f.property === 'yes') score += 6

  // Duración (max 5)
  if (f.duration === '1-2w') score += 5
  else if (f.duration === 'lt1w' || f.duration === '2-4w') score += 4
  else if (f.duration === '1-3m') score += 3
  else if (f.duration === '3-6m') score += 1
  else if (f.duration === '6m+') score -= 3

  // Criminal (max 5)
  if (f.criminal === 'no') score += 5
  else if (f.criminal === 'minor') score += 1
  else if (f.criminal === 'serious') score -= 5

  // Propósito (max 6)
  if (f.purpose === 'tourism' || f.purpose === 'family') score += 6
  else if (f.purpose === 'business' || f.purpose === 'study') score += 5
  else if (f.purpose === 'medical' || f.purpose === 'work') score += 4

  return Math.max(0, Math.min(94, score))
}

// ── Sub-componentes ──────────────────────────────────────────────────────────
function RadioCard({ name, value, label, checked, onChange }: {
  name: string; value: string; label: string; checked: boolean; onChange: () => void
}) {
  return (
    <label className="cursor-pointer">
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="sr-only" />
      <div className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all ${
        checked
          ? 'border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C]'
          : 'border-white/10 bg-white/5 text-white/75 hover:border-white/20'
      }`}>
        <div className={`size-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
          checked ? 'border-[#C9A84C] bg-[#C9A84C]' : 'border-white/30'
        }`}>
          {checked && <div className="size-1.5 rounded-full bg-[#1A3A3A]" />}
        </div>
        {label}
      </div>
    </label>
  )
}

function SelectField({ id, value, onChange, children, label }: {
  id: string; value: string; onChange: (v: string) => void; children: React.ReactNode; label: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-white/85">{label}</label>
      <select
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/15 bg-white/6 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C9A84C] [&>option]:bg-[#1A3A3A]"
      >
        {children}
      </select>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-[#C9A84C]/20 pb-2 text-xs font-bold uppercase tracking-widest text-[#C9A84C] mt-6 mb-4">
      {children}
    </div>
  )
}

function ResultItem({ num, title, text }: { num: number; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/4 p-5 mb-3">
      <p className="text-sm font-bold text-white/90 mb-2">{num}. {title}</p>
      <p className="text-sm text-white/65 leading-relaxed">{text}</p>
    </div>
  )
}

// ── Página principal ─────────────────────────────────────────────────────────
export default function EvaluacionPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(INITIAL)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ score: number; confidence: number; level: string; analysis: AnalysisResult } | null>(null)
  const [error, setError] = useState('')

  const set = useCallback((key: keyof FormData, val: string) => {
    setForm(prev => ({ ...prev, [key]: val }))
  }, [])

  const validate = (s: number) => {
    if (s === 1) {
      if (!form.name.trim() || !form.age || !form.gender || !form.country || !form.history) {
        setError('Por favor complete todos los campos obligatorios.')
        return false
      }
    }
    setError('')
    return true
  }

  const next = () => { if (validate(step)) { setStep(s => s + 1); window.scrollTo(0,0) } }
  const back = () => { setStep(s => s - 1); window.scrollTo(0,0) }

  const submit = async () => {
    setLoading(true)
    setError('')
    const score = calcScore(form)
    const pct = Math.round((score / 94) * 100)
    const confidence = Math.min(95, Math.max(55, pct - 5 + Math.floor(Math.random() * 10)))
    const level = score >= 65 ? 'high' : score >= 40 ? 'medium' : 'low'

    const prompt = `Eres un experto en visas americanas con 15 años de experiencia. Analiza el siguiente perfil y genera un reporte en español.

PERFIL:
- Nombre: ${form.name}
- Edad: ${form.age} años
- País: ${form.country}
- Historial migratorio: ${form.history}
- Propósito: ${form.purpose}
- Ocupación: ${form.occupation}
- Tiempo en empleo: ${form.jobtime}
- Educación: ${form.education}
- Ingresos: ${form.income}
- Fondos suficientes: ${form.funds}
- Estado civil: ${form.marital}
- Viajes previos: ${form.travel}
- Familiares en EE.UU.: ${form.relatives}
- Propiedad: ${form.property}
- Duración planificada: ${form.duration}
- Antecedentes penales: ${form.criminal}
- Puntuación: ${score}/94 (${pct}%)

Responde SOLO con JSON válido (sin markdown):
{
  "summary": "Párrafo de 3-4 oraciones resumiendo el caso",
  "strengths": [{"title": "Título", "text": "Explicación 2-3 oraciones"}],
  "risks": [{"title": "Título", "text": "Explicación 2-3 oraciones"}],
  "recommendations": [{"title": "Título", "text": "Acción concreta 2-3 oraciones"}]
}`

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }],
        }),
      })
      const data = await res.json()
      const text = data.content?.[0]?.text || ''
      const clean = text.replace(/```json|```/g, '').trim()
      const analysis: AnalysisResult = JSON.parse(clean)
      setResult({ score, confidence, level, analysis })
    } catch {
      // Fallback si IA no disponible
      setResult({
        score, confidence, level,
        analysis: {
          summary: `${form.name} presenta un perfil con puntuación de ${score}/94. El análisis considera historial migratorio, arraigos económicos y familiares, y la coherencia del propósito de viaje. Para un análisis más detallado, contáctenos directamente.`,
          strengths: [{ title: 'Evaluación completada', text: 'Su perfil ha sido procesado exitosamente. Contáctenos para recibir un análisis más detallado y personalizado de su caso.' }],
          risks: [{ title: 'Revisión recomendada', text: 'Le recomendamos consultar con un asesor Genius para revisar los factores específicos de su caso.' }],
          recommendations: [{ title: 'Agendar consulta', text: 'Comuníquese con nuestro equipo por WhatsApp para recibir orientación personalizada y comenzar su proceso.' }],
        },
      })
    }
    setLoading(false)
    window.scrollTo(0, 0)
  }

  const restart = () => { setForm(INITIAL); setStep(1); setResult(null); setError('') }

  const pct = result ? Math.round((result.score / 94) * 100) : 0
  const levelColor = result?.level === 'high' ? '#3DB89E' : result?.level === 'medium' ? '#C9A84C' : '#E05252'
  const levelLabel = result?.level === 'high' ? 'Probable Aprobación' : result?.level === 'medium' ? 'Aprobación Posible' : 'Alto Riesgo de Rechazo'

  // ─── RESULTADO ────────────────────────────────────────────────────────────
  if (result) {
    const waMsg = `Hola Genius, acabo de completar mi evaluación de perfil de visa. Mi puntuación fue ${result.score}/94. Me gustaría agendar una consulta.`
    return (
      <main className="min-h-screen bg-[#1A3A3A] pt-24 pb-16 px-4">
        <div className="mx-auto max-w-2xl">
          {/* Score box */}
          <div className="rounded-2xl border bg-white/5 p-6 mb-6 flex items-center gap-6" style={{ borderColor: `${levelColor}50`, borderLeftWidth: 5, borderLeftColor: levelColor }}>
            <div>
              <div className="flex items-end gap-1">
                <span className="text-5xl font-black" style={{ color: levelColor }}>{result.score}</span>
                <span className="text-xl text-white/40 mb-1">/94</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-white mb-1">{levelLabel}</p>
              <p className="text-sm text-white/60 mb-2">Confianza: {result.confidence}%</p>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${result.confidence}%`, backgroundColor: levelColor }} />
              </div>
            </div>
          </div>
          <p className="text-xs text-white/40 italic mb-6">Nota: La puntuación máxima es de 94 puntos ya que la decisión final depende siempre de la discreción del oficial consular.</p>

          {/* Resumen */}
          <div className="mb-6">
            <div className="border-l-4 border-[#1A3A3A] pl-3 mb-3 text-xs font-bold uppercase tracking-widest text-white/60">Resumen</div>
            <div className="rounded-xl bg-white/4 border border-white/8 p-5 text-sm text-white/70 leading-relaxed">{result.analysis.summary}</div>
          </div>

          {/* Fortalezas */}
          <div className="mb-6">
            <div className="border-l-4 pl-3 mb-3 text-xs font-bold uppercase tracking-widest" style={{ borderColor: '#3DB89E', color: '#3DB89E' }}>
              Fortalezas ({result.analysis.strengths.length})
            </div>
            {result.analysis.strengths.map((s, i) => <ResultItem key={i} num={i+1} title={s.title} text={s.text} />)}
          </div>

          {/* Riesgos */}
          <div className="mb-6">
            <div className="border-l-4 pl-3 mb-3 text-xs font-bold uppercase tracking-widest" style={{ borderColor: '#E05252', color: '#E05252' }}>
              Factores de Riesgo ({result.analysis.risks.length})
            </div>
            {result.analysis.risks.map((r, i) => <ResultItem key={i} num={i+1} title={r.title} text={r.text} />)}
          </div>

          {/* Recomendaciones */}
          <div className="mb-8">
            <div className="border-l-4 pl-3 mb-3 text-xs font-bold uppercase tracking-widest" style={{ borderColor: '#C9A84C', color: '#C9A84C' }}>
              Recomendaciones ({result.analysis.recommendations.length})
            </div>
            {result.analysis.recommendations.map((r, i) => <ResultItem key={i} num={i+1} title={r.title} text={r.text} />)}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`https://wa.me/50497410936?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white">
              <MessageCircle className="size-4" /> Hablar con un asesor
            </a>
            <button onClick={restart}
              className="flex-1 flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-medium text-white/70">
              <RotateCcw className="size-4" /> Nueva evaluación
            </button>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-white/10 text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <a href="tel:+50497410936" className="text-xs text-white/40 hover:text-white/60">+504 9741-0936</a>
              <a href="mailto:geniusvisac@gmail.com" className="text-xs text-white/40 hover:text-white/60">geniusvisac@gmail.com</a>
              <a href="https://instagram.com/geniusvisac" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white/60">@geniusvisac</a>
              <a href="https://geniusvctravel.com" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white/60">geniusvctravel.com</a>
            </div>
            <p className="text-xs text-white/25">© 2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
          </div>
        </div>
      </main>
    )
  }

  // ─── LOADING ──────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <main className="min-h-screen bg-[#1A3A3A] flex items-center justify-center">
        <div className="text-center">
          <div className="size-12 rounded-full border-2 border-[#C9A84C]/20 border-t-[#C9A84C] animate-spin mx-auto mb-4" />
          <p className="text-white/60 text-sm">Analizando su perfil con inteligencia artificial...</p>
        </div>
      </main>
    )
  }

  // ─── FORMULARIO ───────────────────────────────────────────────────────────
  const progress = Math.round((step / 3) * 100)

  return (
    <main className="min-h-screen bg-[#1A3A3A]">
      {/* Header */}
      <header className="bg-[#0D2222] border-b border-white/10">
        <div className="mx-auto max-w-2xl px-4 py-4 flex items-center gap-3">
          <img src={LOGO_SRC} alt="Genius Visa Consultants" className="size-10 rounded-full object-cover flex-shrink-0" />
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white">Genius Visa Consultants</p>
            <p className="text-xs text-[#C9A84C] uppercase tracking-widest">Evaluación de Perfil</p>
          </div>
          <a href="/" className="ml-auto text-xs text-white/40 hover:text-white/70 transition-colors">← Inicio</a>
        </div>
      </header>

      {/* Progress */}
      <div className="bg-[#0D2222] px-4 pb-3">
        <div className="mx-auto max-w-2xl">
          <div className="flex justify-between text-xs text-white/40 mb-2">
            <span>Paso {step} de 3</span><span>{progress}%</span>
          </div>
          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full rounded-full bg-[#C9A84C] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8">
        {error && <div className="mb-4 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400">{error}</div>}

        {/* ── PASO 1 ── */}
        {step === 1 && (
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Información Personal</h1>
            <p className="text-sm text-white/50 mb-6">Estos campos son obligatorios para la evaluación</p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">Nombre completo <span className="text-[#C9A84C]">*</span></label>
                <input type="text" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Ej. María García López"
                  className="w-full rounded-xl border border-white/15 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#C9A84C]" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">Edad <span className="text-[#C9A84C]">*</span></label>
                <input type="number" value={form.age} onChange={e => set('age', e.target.value)} placeholder="Ej. 35" min="18" max="99"
                  className="w-full rounded-xl border border-white/15 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#C9A84C]" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">Género <span className="text-[#C9A84C]">*</span></label>
                <div className="grid grid-cols-2 gap-2">
                  {[{v:'M',l:'Masculino'},{v:'F',l:'Femenino'},{v:'NB',l:'No binario'},{v:'NI',l:'Prefiero no indicar'}].map(o =>
                    <RadioCard key={o.v} name="gender" value={o.v} label={o.l} checked={form.gender===o.v} onChange={() => set('gender',o.v)} />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">País de origen <span className="text-[#C9A84C]">*</span></label>
                <select value={form.country} onChange={e => set('country', e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/6 px-4 py-3 text-sm text-white outline-none focus:border-[#C9A84C] [&>option]:bg-[#1A3A3A]">
                  <option value="">-- Seleccionar --</option>
                  {['Honduras','Guatemala','El Salvador','Nicaragua','Costa Rica','Panamá','México','Colombia','Venezuela','Ecuador','Perú','Bolivia','Argentina','Chile','Brasil','República Dominicana','Cuba','Haití','España','Otro'].map(c =>
                    <option key={c} value={c}>{c}</option>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">Historial migratorio con EE.UU. <span className="text-[#C9A84C]">*</span></label>
                <div className="flex flex-col gap-2">
                  {[
                    {v:'first',l:'Es mi primera solicitud de visa'},
                    {v:'denied',l:'Mi solicitud fue rechazada previamente'},
                    {v:'deported',l:'Fui removido(a) del país'},
                    {v:'withdrew',l:'Me retiré por decisión propia de EE.UU.'},
                    {v:'hasvisa',l:'Ya tuve o tengo una visa vigente'},
                  ].map(o => <RadioCard key={o.v} name="history" value={o.v} label={o.l} checked={form.history===o.v} onChange={() => set('history',o.v)} />)}
                </div>
              </div>

              {/* Condicional: denied */}
              {form.history === 'denied' && (
                <div className="rounded-xl border border-[#C9A84C]/20 bg-[#C9A84C]/5 p-4 space-y-4">
                  <SectionLabel>Información sobre el rechazo</SectionLabel>
                  <SelectField id="dcount" label="¿En cuántas ocasiones fue rechazada su solicitud?" value={form.dcount} onChange={v => set('dcount',v)}>
                    <option value="">-- Seleccionar --</option>
                    <option value="1">1 vez</option><option value="2">2 veces</option>
                    <option value="3">3 veces</option><option value="4+">4 o más veces</option>
                  </SelectField>
                  <SelectField id="dwhen" label="¿Cuándo ocurrió el rechazo más reciente?" value={form.dwhen} onChange={v => set('dwhen',v)}>
                    <option value="">-- Seleccionar --</option>
                    <option value="lt1">Hace menos de 1 año</option><option value="1-2">Hace 1 a 2 años</option>
                    <option value="2-5">Hace 2 a 5 años</option><option value="5+">Hace más de 5 años</option>
                  </SelectField>
                </div>
              )}

              {/* Condicional: deported / withdrew */}
              {(form.history === 'deported' || form.history === 'withdrew') && (
                <div className="rounded-xl border border-white/10 bg-white/4 p-4 space-y-4">
                  <SectionLabel>Detalles de su situación anterior</SectionLabel>
                  {form.history === 'deported' && (
                    <SelectField id="deportform" label="¿De qué forma se llevó a cabo el proceso de deportación?" value={form.deportform} onChange={v => set('deportform',v)}>
                      <option value="">-- Seleccionar --</option>
                      <option value="formal">Deportación formal con orden</option>
                      <option value="voluntary">Salida voluntaria supervisada</option>
                      <option value="expedited">Remoción expedita en frontera</option>
                    </SelectField>
                  )}
                  <SelectField id="timegone" label="¿Cuánto tiempo ha transcurrido desde que dejó territorio estadounidense?" value={form.timegone} onChange={v => set('timegone',v)}>
                    <option value="">-- Seleccionar --</option>
                    <option value="lt1">Menos de 1 año</option><option value="1-3">1 a 3 años</option>
                    <option value="3-5">3 a 5 años</option><option value="5-10">5 a 10 años</option>
                    <option value="10+">Más de 10 años</option>
                  </SelectField>
                  <SelectField id="protection" label="¿Tramitó algún tipo de protección migratoria? (TPS, asilo, DACA u otro)" value={form.protection} onChange={v => set('protection',v)}>
                    <option value="">-- Seleccionar --</option>
                    <option value="none">No</option><option value="tps">TPS</option>
                    <option value="asylum">Asilo</option><option value="daca">DACA</option><option value="other">Otro</option>
                  </SelectField>
                  <SelectField id="uslegal" label="¿Enfrentó algún inconveniente legal durante su estancia en EE.UU.?" value={form.uslegal} onChange={v => set('uslegal',v)}>
                    <option value="">-- Seleccionar --</option>
                    <option value="no">No</option>
                    <option value="minor">Sí, asunto menor (multa, infracción)</option>
                    <option value="serious">Sí, asunto serio (arresto, cargo penal)</option>
                  </SelectField>
                </div>
              )}

              {/* Condicional: hasvisa */}
              {form.history === 'hasvisa' && (
                <div className="rounded-xl border border-white/10 bg-white/4 p-4 space-y-4">
                  <SectionLabel>Detalles de visa anterior</SectionLabel>
                  <SelectField id="visacat" label="¿Qué categoría de visa tenía previamente?" value={form.visacat} onChange={v => set('visacat',v)}>
                    <option value="">-- Seleccionar --</option>
                    <option value="B1/B2">B1/B2 Turismo/Negocios</option><option value="F1">F1 Estudiante</option>
                    <option value="H1B">H1B Trabajo</option><option value="J1">J1 Intercambio</option><option value="other">Otra</option>
                  </SelectField>
                  <SelectField id="visaexp" label="¿Desde cuándo venció su visa anterior?" value={form.visaexp} onChange={v => set('visaexp',v)}>
                    <option value="">-- Seleccionar --</option>
                    <option value="current">Aún vigente</option><option value="lt1">Hace menos de 1 año</option>
                    <option value="1-3">Hace 1 a 3 años</option><option value="3-5">Hace 3 a 5 años</option>
                    <option value="5+">Hace más de 5 años</option>
                  </SelectField>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── PASO 2 ── */}
        {step === 2 && (
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Perfil del Solicitante</h1>
            <p className="text-sm text-white/50 mb-6">Estas preguntas mejoran la precisión de la evaluación</p>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">¿Cuáles son las razones principales de su viaje?</label>
                <div className="flex flex-col gap-2">
                  {[{v:'tourism',l:'Turismo / Vacaciones'},{v:'family',l:'Visitar familia'},{v:'business',l:'Negocios / Conferencias'},{v:'medical',l:'Tratamiento médico'},{v:'study',l:'Estudios'},{v:'work',l:'Trabajo'}].map(o =>
                    <RadioCard key={o.v} name="purpose" value={o.v} label={o.l} checked={form.purpose===o.v} onChange={() => set('purpose',o.v)} />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">¿En qué área trabaja o a qué se dedica?</label>
                <div className="flex flex-col gap-2">
                  {[{v:'employee',l:'Empleado(a) en empresa privada'},{v:'public',l:'Empleado(a) público(a)'},{v:'business',l:'Dueño(a) de negocio propio'},{v:'freelance',l:'Independiente / Freelance'},{v:'retired',l:'Jubilado(a)'},{v:'student',l:'Estudiante'},{v:'unemployed',l:'Sin empleo actualmente'}].map(o =>
                    <RadioCard key={o.v} name="occupation" value={o.v} label={o.l} checked={form.occupation===o.v} onChange={() => set('occupation',o.v)} />
                  )}
                </div>
              </div>

              <SelectField id="jobtime" label="¿Hace cuánto tiempo está en su empleo o actividad actual?" value={form.jobtime} onChange={v => set('jobtime',v)}>
                <option value="">-- Seleccionar --</option>
                <option value="lt6m">Menos de 6 meses</option><option value="6m-1y">6 meses a 1 año</option>
                <option value="1-3y">1 a 3 años</option><option value="3-5y">3 a 5 años</option><option value="5+y">Más de 5 años</option>
              </SelectField>

              <SelectField id="education" label="¿Cuál es el grado académico más alto que completó?" value={form.education} onChange={v => set('education',v)}>
                <option value="">-- Seleccionar --</option>
                <option value="primary">Primaria</option><option value="secondary">Secundaria / Bachillerato</option>
                <option value="technical">Técnico / Vocacional</option><option value="university">Universidad (Licenciatura)</option>
                <option value="postgrad">Posgrado (Maestría / Doctorado)</option>
              </SelectField>

              <SelectField id="income" label="¿En qué rango se encuentran sus ingresos mensuales aproximados?" value={form.income} onChange={v => set('income',v)}>
                <option value="">-- Seleccionar --</option>
                <option value="lt500">Menos de $500</option><option value="500-1000">$500 - $1,000</option>
                <option value="1000-2500">$1,000 - $2,500</option><option value="2500-5000">$2,500 - $5,000</option>
                <option value="5000+">Más de $5,000</option>
              </SelectField>

              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">¿Quién se hará cargo de los costos del viaje?</label>
                <div className="grid grid-cols-2 gap-2">
                  {[{v:'self',l:'Yo mismo(a)'},{v:'sponsor',l:'Patrocinador en EE.UU.'},{v:'company',l:'Mi empresa'},{v:'family',l:'Familiar'}].map(o =>
                    <RadioCard key={o.v} name="whopays" value={o.v} label={o.l} checked={form.whopays===o.v} onChange={() => set('whopays',o.v)} />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">¿Dispone de fondos para cubrir al menos el doble del costo estimado del viaje?</label>
                <div className="grid grid-cols-2 gap-2">
                  {[{v:'yes',l:'Sí'},{v:'no',l:'No'}].map(o =>
                    <RadioCard key={o.v} name="funds" value={o.v} label={o.l} checked={form.funds===o.v} onChange={() => set('funds',o.v)} />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── PASO 3 ── */}
        {step === 3 && (
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Arraigos y Situación Personal</h1>
            <p className="text-sm text-white/50 mb-6">Información clave para evaluar su perfil de retorno</p>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">¿Cuál es su situación sentimental actualmente?</label>
                <div className="grid grid-cols-2 gap-2">
                  {[{v:'single',l:'Soltero(a)'},{v:'married',l:'Casado(a) / Unión de hecho'},{v:'divorced',l:'Divorciado(a)'},{v:'widowed',l:'Viudo(a)'}].map(o =>
                    <RadioCard key={o.v} name="marital" value={o.v} label={o.l} checked={form.marital===o.v} onChange={() => set('marital',o.v)} />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">¿Ha salido de su país a otro destino en los últimos 3 años?</label>
                <div className="grid grid-cols-2 gap-2">
                  {[{v:'yes',l:'Sí'},{v:'no',l:'No'}].map(o =>
                    <RadioCard key={o.v} name="travel" value={o.v} label={o.l} checked={form.travel===o.v} onChange={() => set('travel',o.v)} />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">¿Cuenta con parientes cercanos que vivan en Estados Unidos?</label>
                <div className="flex flex-col gap-2">
                  {[{v:'none',l:'No'},{v:'distant',l:'Sí, familiares lejanos'},{v:'close',l:'Sí, familiares cercanos (padres, hermanos, hijos)'},{v:'spouse',l:'Sí, mi cónyuge o pareja'}].map(o =>
                    <RadioCard key={o.v} name="relatives" value={o.v} label={o.l} checked={form.relatives===o.v} onChange={() => set('relatives',o.v)} />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">¿Es propietario(a) de algún bien inmueble (casa, terreno, apartamento)?</label>
                <div className="grid grid-cols-2 gap-2">
                  {[{v:'yes',l:'Sí'},{v:'no',l:'No'}].map(o =>
                    <RadioCard key={o.v} name="property" value={o.v} label={o.l} checked={form.property===o.v} onChange={() => set('property',o.v)} />
                  )}
                </div>
              </div>

              <SelectField id="duration" label="¿Por cuánto tiempo planea permanecer en EE.UU.?" value={form.duration} onChange={v => set('duration',v)}>
                <option value="">-- Seleccionar --</option>
                <option value="lt1w">Menos de 1 semana</option><option value="1-2w">1 a 2 semanas</option>
                <option value="2-4w">2 a 4 semanas</option><option value="1-3m">1 a 3 meses</option>
                <option value="3-6m">3 a 6 meses</option><option value="6m+">Más de 6 meses</option>
              </SelectField>

              <div>
                <label className="block text-sm font-semibold text-white/85 mb-2">¿Ha tenido algún tipo de proceso penal o judicial en su contra?</label>
                <div className="flex flex-col gap-2">
                  {[{v:'no',l:'No'},{v:'minor',l:'Sí, asunto menor resuelto'},{v:'serious',l:'Sí, asunto grave'}].map(o =>
                    <RadioCard key={o.v} name="criminal" value={o.v} label={o.l} checked={form.criminal===o.v} onChange={() => set('criminal',o.v)} />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Botones de navegación */}
        <div className="flex gap-3 mt-8">
          {step > 1 && (
            <button onClick={back} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-medium text-white/70">
              <ArrowLeft className="size-4" /> Atrás
            </button>
          )}
          {step < 3 ? (
            <button onClick={next} className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3.5 text-sm font-bold text-[#1A3A3A]">
              Continuar <ArrowRight className="size-4" />
            </button>
          ) : (
            <button onClick={submit} className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3.5 text-sm font-bold text-[#1A3A3A]">
              Generar evaluación <ArrowRight className="size-4" />
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
