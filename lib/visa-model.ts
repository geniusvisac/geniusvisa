// ─────────────────────────────────────────────────────────────────────────────
// Modelo de evaluación de perfil · Genius Visa Consultants
//
// QUÉ ES: un modelo PROPIO y transparente que organiza el perfil en 6 factores
// (100 puntos en total) tomados de los criterios que el 9 FAM (Foreign Affairs
// Manual, Departamento de Estado) indica a los oficiales consulares: presunción
// de intención inmigrante (INA 214(b)), residencia en el exterior, estadía
// temporal y actividades ilícitas durante la visita.
//
// QUÉ NO ES: el 9 FAM NO define una fórmula con puntos; la decisión es del oficial.
// USO DE LAS CITAS: refsForFactor/guideForPurpose son SOLO para consulta interna del
// asesor (panel). No se muestran al cliente ni en el PDF.
// Los pesos son de Genius y el resultado es orientativo, NO una probabilidad.
//
// VERIFICACIÓN DE REFERENCIAS (18-oct-2026): los títulos de sección y las URL de
// abajo se confirmaron en las páginas de fam.state.gov (401.1, 402.2, 402.5,
// 403.10). El sitio bloquea la lectura automática: se verificaron títulos, no el
// texto completo. La relación factor → sección es interpretación de Genius.
// El FAM se actualiza: revisar estas referencias periódicamente.
// ─────────────────────────────────────────────────────────────────────────────

export type Lang = 'es' | 'en'
export type Opt = { v: string; es: string; en: string }

// ── Opciones: los valores (v) son los mismos códigos de siempre → el puntaje y el panel no cambian ──
export const OPTS: Record<string, Opt[]> = {
  gender: [{v:'M',es:'Masculino',en:'Male'},{v:'F',es:'Femenino',en:'Female'},{v:'NB',es:'No binario',en:'Non-binary'},{v:'NI',es:'Prefiero no indicar',en:'Prefer not to say'}],
  history: [{v:'first',es:'Es mi primera solicitud de visa',en:'This is my first visa application'},{v:'denied',es:'Mi solicitud fue rechazada previamente',en:'My application was previously denied'},{v:'deported',es:'Fui removido(a) del país',en:'I was removed from the country'},{v:'withdrew',es:'Me retiré por decisión propia de EE.UU.',en:'I left the U.S. voluntarily'},{v:'hasvisa',es:'Ya tuve o tengo una visa vigente',en:'I have had or currently have a valid visa'}],
  dcount: [{v:'1',es:'1 vez',en:'Once'},{v:'2',es:'2 veces',en:'Twice'},{v:'3',es:'3 veces',en:'3 times'},{v:'4+',es:'4 o más',en:'4 or more'}],
  dwhen: [{v:'lt1',es:'Hace menos de 1 año',en:'Less than 1 year ago'},{v:'1-2',es:'Hace 1 a 2 años',en:'1 to 2 years ago'},{v:'2-5',es:'Hace 2 a 5 años',en:'2 to 5 years ago'},{v:'5+',es:'Hace más de 5 años',en:'More than 5 years ago'}],
  deportform: [{v:'formal',es:'Deportación formal con orden',en:'Formal deportation with an order'},{v:'voluntary',es:'Salida voluntaria supervisada',en:'Supervised voluntary departure'},{v:'expedited',es:'Remoción expedita en frontera',en:'Expedited removal at the border'}],
  timegone: [{v:'lt1',es:'Menos de 1 año',en:'Less than 1 year'},{v:'1-3',es:'1 a 3 años',en:'1 to 3 years'},{v:'3-5',es:'3 a 5 años',en:'3 to 5 years'},{v:'5-10',es:'5 a 10 años',en:'5 to 10 years'},{v:'10+',es:'Más de 10 años',en:'More than 10 years'}],
  protection: [{v:'none',es:'No',en:'No'},{v:'tps',es:'TPS',en:'TPS'},{v:'asylum',es:'Asilo',en:'Asylum'},{v:'daca',es:'DACA',en:'DACA'},{v:'other',es:'Otro',en:'Other'}],
  uslegal: [{v:'no',es:'No',en:'No'},{v:'minor',es:'Sí, asunto menor',en:'Yes, a minor matter'},{v:'serious',es:'Sí, asunto serio',en:'Yes, a serious matter'}],
  visacat: [{v:'B1/B2',es:'B1/B2 Turismo/Negocios',en:'B1/B2 Tourism/Business'},{v:'F1',es:'F1 Estudiante',en:'F1 Student'},{v:'H1B',es:'H1B Trabajo',en:'H1B Work'},{v:'J1',es:'J1 Intercambio',en:'J1 Exchange'},{v:'other',es:'Otra',en:'Other'}],
  visaexp: [{v:'current',es:'Aún vigente',en:'Still valid'},{v:'lt1',es:'Hace menos de 1 año',en:'Less than 1 year ago'},{v:'1-3',es:'Hace 1 a 3 años',en:'1 to 3 years ago'},{v:'3-5',es:'Hace 3 a 5 años',en:'3 to 5 years ago'},{v:'5+',es:'Hace más de 5 años',en:'More than 5 years ago'}],
  purpose: [{v:'tourism',es:'Turismo / Vacaciones',en:'Tourism / Vacation'},{v:'family',es:'Visitar familia',en:'Visiting family'},{v:'business',es:'Negocios / Conferencias',en:'Business / Conferences'},{v:'medical',es:'Tratamiento médico',en:'Medical treatment'},{v:'study',es:'Estudios',en:'Studies'},{v:'work',es:'Trabajo',en:'Work'}],
  occupation: [{v:'employee',es:'Empleado(a) empresa privada',en:'Private sector employee'},{v:'public',es:'Empleado(a) público(a)',en:'Public sector employee'},{v:'business',es:'Dueño(a) de negocio',en:'Business owner'},{v:'freelance',es:'Independiente / Freelance',en:'Self-employed / Freelance'},{v:'retired',es:'Jubilado(a)',en:'Retired'},{v:'student',es:'Estudiante',en:'Student'},{v:'unemployed',es:'Sin empleo',en:'Unemployed'}],
  jobtime: [{v:'lt6m',es:'Menos de 6 meses',en:'Less than 6 months'},{v:'6m-1y',es:'6 meses a 1 año',en:'6 months to 1 year'},{v:'1-3y',es:'1 a 3 años',en:'1 to 3 years'},{v:'3-5y',es:'3 a 5 años',en:'3 to 5 years'},{v:'5+y',es:'Más de 5 años',en:'More than 5 years'}],
  education: [{v:'primary',es:'Primaria',en:'Primary school'},{v:'secondary',es:'Secundaria / Bachillerato',en:'High school'},{v:'technical',es:'Técnico / Vocacional',en:'Technical / Vocational'},{v:'university',es:'Universidad',en:'University'},{v:'postgrad',es:'Posgrado',en:'Postgraduate'}],
  income: [{v:'lt500',es:'Menos de $500',en:'Less than $500'},{v:'500-1000',es:'$500 - $1,000',en:'$500 - $1,000'},{v:'1000-2500',es:'$1,000 - $2,500',en:'$1,000 - $2,500'},{v:'2500-5000',es:'$2,500 - $5,000',en:'$2,500 - $5,000'},{v:'5000+',es:'Más de $5,000',en:'More than $5,000'}],
  whopays: [{v:'self',es:'Yo mismo(a)',en:'Myself'},{v:'sponsor',es:'Patrocinador EE.UU.',en:'U.S. sponsor'},{v:'company',es:'Mi empresa',en:'My company'},{v:'family',es:'Familiar',en:'A relative'}],
  yesno: [{v:'yes',es:'Sí',en:'Yes'},{v:'no',es:'No',en:'No'}],
  marital: [{v:'single',es:'Soltero(a)',en:'Single'},{v:'married',es:'Casado(a)',en:'Married'},{v:'divorced',es:'Divorciado(a)',en:'Divorced'},{v:'widowed',es:'Viudo(a)',en:'Widowed'}],
  relatives: [{v:'none',es:'No',en:'No'},{v:'distant',es:'Sí, familiares lejanos',en:'Yes, distant relatives'},{v:'close',es:'Sí, familiares cercanos',en:'Yes, close relatives'},{v:'spouse',es:'Sí, cónyuge o pareja',en:'Yes, spouse or partner'}],
  duration: [{v:'lt1w',es:'Menos de 1 semana',en:'Less than 1 week'},{v:'1-2w',es:'1 a 2 semanas',en:'1 to 2 weeks'},{v:'2-4w',es:'2 a 4 semanas',en:'2 to 4 weeks'},{v:'1-3m',es:'1 a 3 meses',en:'1 to 3 months'},{v:'3-6m',es:'3 a 6 meses',en:'3 to 6 months'},{v:'6m+',es:'Más de 6 meses',en:'More than 6 months'}],
  criminal: [{v:'no',es:'No',en:'No'},{v:'minor',es:'Sí, asunto menor resuelto',en:'Yes, a resolved minor matter'},{v:'serious',es:'Sí, asunto grave',en:'Yes, a serious matter'}],
}

// País: el valor guardado sigue siendo el nombre en español (como hoy), solo cambia lo que se muestra
export const COUNTRIES: { v: string; en: string }[] = [
  {v:'Honduras',en:'Honduras'},{v:'Guatemala',en:'Guatemala'},{v:'El Salvador',en:'El Salvador'},{v:'Nicaragua',en:'Nicaragua'},
  {v:'Costa Rica',en:'Costa Rica'},{v:'Panamá',en:'Panama'},{v:'México',en:'Mexico'},{v:'Colombia',en:'Colombia'},
  {v:'Venezuela',en:'Venezuela'},{v:'Ecuador',en:'Ecuador'},{v:'Perú',en:'Peru'},{v:'Bolivia',en:'Bolivia'},
  {v:'Argentina',en:'Argentina'},{v:'Chile',en:'Chile'},{v:'Brasil',en:'Brazil'},{v:'República Dominicana',en:'Dominican Republic'},
  {v:'Cuba',en:'Cuba'},{v:'Haití',en:'Haiti'},{v:'España',en:'Spain'},{v:'Otro',en:'Other'},
]

// ── Campo del formulario → grupo de opciones (para validar en el servidor) ──
export const FIELD_OPTS: Record<string, string> = {
  gender: 'gender', history: 'history', dcount: 'dcount', dwhen: 'dwhen', deportform: 'deportform',
  timegone: 'timegone', protection: 'protection', uslegal: 'uslegal', visacat: 'visacat', visaexp: 'visaexp',
  purpose: 'purpose', occupation: 'occupation', jobtime: 'jobtime', education: 'education', income: 'income',
  whopays: 'whopays', funds: 'yesno', marital: 'marital', travel: 'yesno', relatives: 'relatives',
  property: 'yesno', duration: 'duration', criminal: 'criminal',
}

export interface AssessmentInput {
  age: string; history: string; dcount: string; dwhen: string; deportform: string; timegone: string
  protection: string; uslegal: string; visacat: string; visaexp: string; purpose: string; occupation: string
  jobtime: string; education: string; income: string; whopays: string; funds: string; marital: string
  travel: string; relatives: string; property: string; duration: string; criminal: string
}

// ── Factores ──
export type FactorKey = 'purpose' | 'work' | 'family' | 'funding' | 'history' | 'travel'
export const FACTOR_ORDER: FactorKey[] = ['purpose', 'work', 'family', 'funding', 'history', 'travel']
export const SCORE_MAX = 100
export const LEVEL_HIGH = 75
export const LEVEL_MEDIUM = 50

interface FactorDef { max: number; es: { label: string; desc: string }; en: { label: string; desc: string } }
export const FACTORS: Record<FactorKey, FactorDef> = {
  purpose: { max: 14,
    es: { label: 'Propósito y duración del viaje', desc: 'Si el viaje es temporal, claro y de corta duración.' },
    en: { label: 'Purpose and length of the trip', desc: 'Whether the trip is temporary, clear and short.' } },
  work: { max: 28,
    es: { label: 'Arraigo laboral y económico', desc: 'Empleo, antigüedad, ingresos y formación que te vinculan a tu país.' },
    en: { label: 'Employment and economic ties', desc: 'Job, tenure, income and education that tie you to your home country.' } },
  family: { max: 25,
    es: { label: 'Arraigo familiar y patrimonial', desc: 'Estado civil, bienes, familiares en EE. UU. y edad.' },
    en: { label: 'Family and property ties', desc: 'Marital status, property, relatives in the U.S. and age.' } },
  funding: { max: 10,
    es: { label: 'Financiamiento del viaje', desc: 'Quién paga y si hay fondos suficientes para no depender de trabajar en EE. UU.' },
    en: { label: 'Trip funding', desc: 'Who pays and whether there are enough funds without needing to work in the U.S.' } },
  history: { max: 17,
    es: { label: 'Historial migratorio y legal', desc: 'Solicitudes previas, rechazos, salidas del país y antecedentes.' },
    en: { label: 'Immigration and legal history', desc: 'Previous applications, refusals, removals and records.' } },
  travel: { max: 6,
    es: { label: 'Historial de viajes', desc: 'Viajes internacionales recientes.' },
    en: { label: 'Travel history', desc: 'Recent international travel.' } },
}

export interface FactorResult { key: FactorKey; points: number; max: number }
export interface Assessment {
  score: number; max: number
  level: 'high' | 'medium' | 'low'
  /** Los puntos de los 6 factores SIEMPRE suman exactamente `score`. Historial puede ser negativo. */
  breakdown: FactorResult[]
}

const pick = (t: Record<string, number>, k: string): number => t[k] ?? 0
const clamp = (n: number, max: number): number => Math.max(0, Math.min(max, n))

// ── Puntos por respuesta: UNA sola fuente para el puntaje y para las etiquetas de la IA ──
interface Ctx { study: boolean; workPurpose: boolean }
interface FieldDef { max: number; pts: (v: string, c: Ctx) => number }
const T = (table: Record<string, number>, max: number): FieldDef => ({ max, pts: v => pick(table, v) })
const FIELD_POINTS: Record<string, FieldDef> = {
  purpose: T({ tourism: 8, family: 8, business: 7, medical: 6, study: 5, work: 4 }, 8),
  // En estudio y trabajo se espera una estadía larga: la duración es neutral
  duration: { max: 6, pts: (v, c) => (c.study || c.workPurpose) ? 4 : pick({ lt1w: 5, '1-2w': 6, '2-4w': 5, '1-3m': 3, '3-6m': 2, '6m+': 0 }, v) },
  // El 9 FAM reconoce que los estudiantes tienen vínculos limitados (402.5-5(E)(1))
  occupation: { max: 10, pts: (v, c) => (c.study && v === 'student') ? 8 : pick({ business: 10, public: 9, employee: 9, retired: 9, freelance: 7, student: 5, unemployed: 1 }, v) },
  jobtime: T({ '5+y': 7, '3-5y': 6, '1-3y': 4, '6m-1y': 2, lt6m: 1 }, 7),
  income: T({ '5000+': 6, '2500-5000': 5, '1000-2500': 4, '500-1000': 2, lt500: 1 }, 6),
  education: T({ postgrad: 5, university: 4, technical: 3, secondary: 2, primary: 1 }, 5),
  marital: { max: 7, pts: (v, c) => pick({ married: 7, divorced: 4, widowed: 4, single: c.study ? 4 : 2 }, v) },
  property: { max: 8, pts: (v, c) => v === 'yes' ? 8 : (v === 'no' && c.study ? 3 : 0) },
  // Familiares en EE. UU.: son un lazo que puede jalar a quedarse. NO tenerlos es lo más favorable.
  relatives: T({ none: 8, distant: 6, close: 3, spouse: 0 }, 8),
  funds: { max: 6, pts: v => v === 'yes' ? 6 : 0 },
  whopays: T({ self: 4, company: 4, family: 3, sponsor: 2 }, 4),
  travel: { max: 6, pts: v => v === 'yes' ? 6 : 0 },
  criminal: T({ no: 5, minor: 1, serious: 0 }, 5),
}
const ctxOf = (purpose: string): Ctx => ({ study: purpose === 'study', workPurpose: purpose === 'work' })

export type Tone = 'favorable' | 'intermedio' | 'desfavorable' | 'neutral'
/** Etiqueta de una respuesta según el propio modelo (la IA debe respetarla; evita que invierta el sentido). */
export function answerTone(field: string, value: string, purpose = ''): Tone | null {
  if (!value) return null
  if (field === 'history') return value === 'hasvisa' ? 'favorable' : value === 'first' ? 'neutral' : 'desfavorable'
  const c = ctxOf(purpose)
  if (field === 'duration' && (c.study || c.workPurpose)) return 'neutral'
  // Estudiantes: no tener propiedad, ser solteros o declararse estudiantes es lo esperado (402.5-5(E)(1)); no es una debilidad
  if (c.study && ((field === 'property' && value === 'no') || (field === 'occupation' && value === 'student') || (field === 'marital' && value === 'single'))) return 'neutral'
  const d = FIELD_POINTS[field]
  if (!d) return null
  const r = d.pts(value, c) / d.max
  return r >= 0.85 ? 'favorable' : r <= 0.4 ? 'desfavorable' : 'intermedio'
}

export function calcAssessment(f: AssessmentInput): Assessment {
  const c = ctxOf(f.purpose)
  const study = c.study
  const pt = (field: string, v: string): number => FIELD_POINTS[field].pts(v, c)
  const age = parseInt(f.age, 10)

  // 1 · Propósito y duración (14)
  const purpose = clamp(pt('purpose', f.purpose) + pt('duration', f.duration), 14)

  // 2 · Arraigo laboral y económico (28)
  const work = clamp(pt('occupation', f.occupation) + pt('jobtime', f.jobtime) + pt('income', f.income) + pt('education', f.education), 28)

  // 3 · Arraigo familiar y patrimonial (25)
  const agePts = Number.isNaN(age) ? 0 : (study ? 2 : (age >= 30 && age <= 55 ? 2 : (age >= 25 ? 1 : 0)))
  const family = clamp(pt('marital', f.marital) + pt('property', f.property) + agePts + pt('relatives', f.relatives), 25)

  // 4 · Financiamiento del viaje (10)
  const funding = clamp(pt('funds', f.funds) + pt('whopays', f.whopays), 10)

  // 5 · Historial migratorio y legal (17 de base; los antecedentes graves RESTAN dentro de este factor)
  let hist = 0
  if (f.history === 'hasvisa') hist = pick({ current: 12, lt1: 11, '1-3': 10, '3-5': 9, '5+': 8 }, f.visaexp) || 10
  else if (f.history === 'first') hist = 8
  else if (f.history === 'denied') hist = pick({ '1': 3, '2': 1, '3': 0, '4+': 0 }, f.dcount) + pick({ '5+': 4, '2-5': 3, '1-2': 1, lt1: 0 }, f.dwhen)
  else if (f.history === 'withdrew') hist = 5 + (f.timegone === '5-10' || f.timegone === '10+' ? 2 : 0)
  else if (f.history === 'deported') hist = 1 + pick({ '3-5': 1, '5-10': 2, '10+': 3 }, f.timegone)
  if (f.history === 'withdrew' || f.history === 'deported') hist -= pick({ minor: 1, serious: 2 }, f.uslegal)
  const baseHistory = clamp(clamp(hist, 12) + pt('criminal', f.criminal), 17)
  // Descuentos por antecedentes: se restan aquí y pueden dejar este factor por debajo de cero
  let deduction = 0
  if (f.history === 'deported') deduction += 50 // remoción o deportación
  if (f.criminal === 'serious') deduction += 50 // antecedente penal o judicial grave
  if (f.history === 'denied' && (f.dcount === '3' || f.dcount === '4+')) deduction += 45 // 3 o más rechazos
  if (f.history === 'denied' && (f.dwhen === 'lt1' || f.dwhen === '1-2')) deduction += 12 // rechazo de menos de 2 años

  // 6 · Historial de viajes (6)
  const travel = pt('travel', f.travel)

  // El total nunca baja de 0: el descuento solo puede restar lo que hay en los demás factores
  const others = purpose + work + family + funding + travel
  const history = Math.max(baseHistory - deduction, -others)

  const breakdown: FactorResult[] = [
    { key: 'purpose', points: purpose, max: 14 }, { key: 'work', points: work, max: 28 },
    { key: 'family', points: family, max: 25 }, { key: 'funding', points: funding, max: 10 },
    { key: 'history', points: history, max: 17 }, { key: 'travel', points: travel, max: 6 },
  ]
  const score = breakdown.reduce((sum, b) => sum + b.points, 0)
  const level = score >= LEVEL_HIGH ? 'high' : score >= LEVEL_MEDIUM ? 'medium' : 'low'
  return { score, max: SCORE_MAX, level, breakdown }
}

// ── Referencias al 9 FAM (títulos y direcciones verificados; ver nota arriba) ──
export interface FamRef { code: string; title: string; url: string }
const U = (chapter: string) => `https://fam.state.gov/FAM/09FAM/09FAM0${chapter}.html`
const R = {
  r401_1: { code: '9 FAM 401.1', title: 'Introduction to Nonimmigrant Visas and Status', url: U('40101') },
  r401_1_3E: { code: '9 FAM 401.1-3(E)', title: 'Residence Abroad', url: U('40101') },
  r402_2: { code: '9 FAM 402.2', title: 'Tourists and Business Visitors and Mexican Border Crossing Cards – B Visas and BCCs', url: U('40202') },
  r402_2_2B: { code: '9 FAM 402.2-2(B)', title: 'Temporary Visitors', url: U('40202') },
  r402_2_2C: { code: '9 FAM 402.2-2(C)', title: 'Residence Abroad', url: U('40202') },
  r402_2_2D: { code: '9 FAM 402.2-2(D)', title: 'Temporary Period of Stay', url: U('40202') },
  r402_2_2E: { code: '9 FAM 402.2-2(E)', title: 'Unlawful Activity While in Visitor Status', url: U('40202') },
  r402_2_3: { code: '9 FAM 402.2-3', title: 'Categories of B Visas', url: U('40202') },
  r402_2_4: { code: '9 FAM 402.2-4', title: 'Tourist Visas (B-2) – Applicants coming to the United States as Visitors for Pleasure', url: U('40202') },
  r402_5_5: { code: '9 FAM 402.5-5', title: 'Students: Academic and NonAcademic – F and M Visas', url: U('40205') },
  r402_5_5E1: { code: '9 FAM 402.5-5(E)(1)', title: 'Residence Abroad Required', url: U('40205') },
  r403_10: { code: '9 FAM 403.10', title: 'NIV Refusals', url: U('40310') },
  r306_2_2B: { code: '9 FAM 306.2-2(B)', title: 'Change of Circumstances', url: U('30602') },
} satisfies Record<string, FamRef>

type PurposeGroup = 'visitor' | 'student' | 'other'
export const purposeGroup = (purpose: string): PurposeGroup =>
  purpose === 'study' ? 'student' : (purpose === 'work' ? 'other' : 'visitor')

/** Secciones del 9 FAM que respaldan cada factor (según el propósito del viaje). */
export function refsForFactor(key: FactorKey, purpose: string, history = ''): FamRef[] {
  const g = purposeGroup(purpose)
  switch (key) {
    case 'purpose':
      if (g === 'student') return [R.r402_5_5]
      if (g === 'other') return []
      return purpose === 'business'
        ? [R.r402_2_2B, R.r402_2_2D, R.r402_2_3]
        : purpose === 'medical' ? [R.r402_2_2B, R.r402_2_2D] : [R.r402_2_2B, R.r402_2_2D, R.r402_2_4]
    case 'work':
    case 'family':
      if (g === 'student') return [R.r402_5_5E1, R.r401_1_3E]
      if (g === 'other') return [R.r401_1_3E]
      return [R.r401_1_3E, R.r402_2_2C]
    case 'funding':
      return g === 'visitor' ? [R.r402_2_2E] : []
    case 'history':
      return history === 'denied' ? [R.r403_10, R.r306_2_2B] : [R.r403_10]
    default:
      return [] // el historial de viajes no se liga a una sección verificada
  }
}

/** Capítulos consultados, para el listado «Guía oficial consultada». */
export function guideForPurpose(purpose: string, history = ''): FamRef[] {
  const g = purposeGroup(purpose)
  return [R.r401_1, ...(g === 'visitor' ? [R.r402_2] : []), ...(g === 'student' ? [R.r402_5_5] : []), R.r403_10, ...(history === 'denied' ? [R.r306_2_2B] : [])]
}

// ── Validación de datos recibidos por el servidor ──
export interface ParsedInput { input: AssessmentInput; country: string }
export type ParseResult = { ok: true; value: ParsedInput } | { ok: false; error: string }

export function parseAssessmentInput(raw: unknown): ParseResult {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return { ok: false, error: 'formData inválido' }
  const r = raw as Record<string, unknown>
  const out: Record<string, string> = {}
  for (const [field, group] of Object.entries(FIELD_OPTS)) {
    const v = r[field]
    if (v === undefined || v === null || v === '') { out[field] = ''; continue }
    if (typeof v !== 'string' || !OPTS[group].some(o => o.v === v)) return { ok: false, error: `Valor no válido en ${field}` }
    out[field] = v
  }
  const ageRaw = typeof r.age === 'string' || typeof r.age === 'number' ? String(r.age).trim() : ''
  if (!/^\d{1,3}$/.test(ageRaw) || Number(ageRaw) > 120) return { ok: false, error: 'Edad no válida' }
  out.age = String(Number(ageRaw))
  if (!out.history) return { ok: false, error: 'Falta el historial migratorio' }
  const countryRaw = typeof r.country === 'string' ? r.country : ''
  const country = COUNTRIES.some(c => c.v === countryRaw) ? countryRaw : ''
  return { ok: true, value: { input: out as unknown as AssessmentInput, country } }
}
