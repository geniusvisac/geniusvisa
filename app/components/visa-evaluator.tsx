'use client'
import { useState, useCallback, useEffect } from 'react'
import { ArrowRight, ArrowLeft, MessageCircle, RotateCcw, ShieldCheck, TriangleAlert, Lightbulb, Clock, Lock, FileText, Check, Sparkles, BadgeCheck, Download, LoaderCircle } from 'lucide-react'

const LOGO_SRC = 'data:image/png;base64,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'

interface FormData {
  name: string; age: string; gender: string; country: string; history: string; email: string; phone: string
  dcount: string; dwhen: string; deportform: string; timegone: string
  protection: string; uslegal: string; visacat: string; visaexp: string
  purpose: string; occupation: string; jobtime: string; education: string
  income: string; whopays: string; funds: string; marital: string
  travel: string; relatives: string; property: string; duration: string; criminal: string
}

interface AnalysisItem { title: string; text: string }
interface AnalysisResult {
  summary: string
  strengths: AnalysisItem[]
  risks: AnalysisItem[]
  recommendations: AnalysisItem[]
}

const INITIAL: FormData = {
  name:'',age:'',gender:'',country:'',history:'',email:'',phone:'',
  dcount:'',dwhen:'',deportform:'',timegone:'',protection:'',uslegal:'',
  visacat:'',visaexp:'',purpose:'',occupation:'',jobtime:'',education:'',
  income:'',whopays:'',funds:'',marital:'',travel:'',relatives:'',
  property:'',duration:'',criminal:''
}

function calcScore(f: FormData): number {
  let s = 0
  const age = parseInt(f.age) || 30
  if (f.history === 'first') s += 16
  else if (f.history === 'hasvisa') s += 20
  else if (f.history === 'denied') { if (f.dcount === '1') s += 10; else if (f.dcount === '2') s += 6; else s += 2; if (f.dwhen === '5+') s += 3; else if (f.dwhen === '2-5') s += 1 }
  else if (f.history === 'withdrew') s += 5
  else if (f.history === 'deported') s += 1
  if (f.occupation === 'employee') s += 10; else if (f.occupation === 'public') s += 11
  else if (f.occupation === 'business') s += 12; else if (f.occupation === 'retired') s += 10
  else if (f.occupation === 'freelance') s += 8; else if (f.occupation === 'student') s += 6
  else if (f.occupation === 'unemployed') s += 2
  if (f.income === '5000+') s += 6; else if (f.income === '2500-5000') s += 5
  else if (f.income === '1000-2500') s += 4; else if (f.income === '500-1000') s += 2; else if (f.income === 'lt500') s += 1
  if (f.jobtime === '5+y') s += 6; else if (f.jobtime === '3-5y') s += 5
  else if (f.jobtime === '1-3y') s += 4; else if (f.jobtime === '6m-1y') s += 2; else if (f.jobtime === 'lt6m') s += 1
  if (f.education === 'postgrad') s += 6; else if (f.education === 'university') s += 5
  else if (f.education === 'technical') s += 4; else if (f.education === 'secondary') s += 3; else if (f.education === 'primary') s += 1
  if (f.funds === 'yes') s += 5
  if (f.marital === 'married') s += 6; else if (f.marital === 'divorced' || f.marital === 'widowed') s += 3; else if (f.marital === 'single') s += 1
  if (age >= 30 && age <= 55) s += 2; if (age < 25) s -= 2
  if (f.relatives === 'none') s += 5; else if (f.relatives === 'distant') s += 3
  else if (f.relatives === 'close') s += 1; else if (f.relatives === 'spouse') s -= 2
  if (f.travel === 'yes') s += 6
  if (f.property === 'yes') s += 6
  if (f.duration === '1-2w') s += 5; else if (f.duration === 'lt1w' || f.duration === '2-4w') s += 4
  else if (f.duration === '1-3m') s += 3; else if (f.duration === '3-6m') s += 1; else if (f.duration === '6m+') s -= 3
  if (f.criminal === 'no') s += 5; else if (f.criminal === 'minor') s += 1; else if (f.criminal === 'serious') s -= 5
  if (f.purpose === 'tourism' || f.purpose === 'family') s += 6
  else if (f.purpose === 'business' || f.purpose === 'study') s += 5
  else if (f.purpose === 'medical' || f.purpose === 'work') s += 4
  return Math.max(0, Math.min(94, s))
}

type Lang = 'es' | 'en'
type Opt = { v: string; es: string; en: string }

// ── Opciones: los valores (v) son los mismos códigos de siempre → el puntaje y el panel no cambian ──
const OPTS: Record<string, Opt[]> = {
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
const COUNTRIES: { v: string; en: string }[] = [
  {v:'Honduras',en:'Honduras'},{v:'Guatemala',en:'Guatemala'},{v:'El Salvador',en:'El Salvador'},{v:'Nicaragua',en:'Nicaragua'},
  {v:'Costa Rica',en:'Costa Rica'},{v:'Panamá',en:'Panama'},{v:'México',en:'Mexico'},{v:'Colombia',en:'Colombia'},
  {v:'Venezuela',en:'Venezuela'},{v:'Ecuador',en:'Ecuador'},{v:'Perú',en:'Peru'},{v:'Bolivia',en:'Bolivia'},
  {v:'Argentina',en:'Argentina'},{v:'Chile',en:'Chile'},{v:'Brasil',en:'Brazil'},{v:'República Dominicana',en:'Dominican Republic'},
  {v:'Cuba',en:'Cuba'},{v:'Haití',en:'Haiti'},{v:'España',en:'Spain'},{v:'Otro',en:'Other'},
]

const T = {
  es: {
    brand: 'Evaluación de Perfil', home: '← Inicio', homeHref: '/', select: '-- Seleccionar --',
    wTitle: 'Descubre qué tan sólido es tu perfil para la visa americana',
    wSub: 'Responde unas preguntas y recibe un diagnóstico personalizado, analizado con inteligencia artificial y respaldado por más de 15 años de experiencia.',
    wTrust: ['2 minutos', '100% confidencial', 'Gratis y sin compromiso'],
    wGetTitle: 'Al finalizar recibirás',
    wGet: ['Tu puntaje de perfil de 0 a 94', 'Tus fortalezas y factores de riesgo', 'Recomendaciones concretas', 'Reporte descargable en PDF'],
    wCta: 'Comenzar evaluación',
    wNote: 'Resultado orientativo. Ninguna evaluación garantiza la aprobación: la decisión final es del oficial consular.',
    steps: ['Información personal', 'Perfil', 'Arraigos'], stepOf: (s: number) => `Paso ${s} de 3`,
    s1Title: 'Información Personal', s1Sub: 'Estos campos son obligatorios para la evaluación',
    s2Title: 'Perfil del Solicitante', s2Sub: 'Estas preguntas mejoran la precisión de la evaluación',
    s3Title: 'Arraigos y Situación Personal', s3Sub: 'Información clave para evaluar su perfil de retorno',
    name: 'Nombre completo', namePh: 'Ej. María García López', age: 'Edad', agePh: 'Ej. 35', gender: 'Género',
    country: 'País de origen', history: 'Historial migratorio con EE.UU.',
    deniedBox: 'Información sobre el rechazo', dcount: '¿Cuántas veces fue rechazada?', dwhen: '¿Cuándo fue el rechazo más reciente?',
    prevBox: 'Detalles de su situación anterior', deportform: '¿Cómo fue la deportación?', timegone: '¿Cuánto tiempo desde que dejó EE.UU.?',
    protection: '¿Tramitó protección migratoria?', uslegal: '¿Tuvo inconvenientes legales en EE.UU.?',
    visaBox: 'Detalles de visa anterior', visacat: '¿Qué categoría de visa tenía?', visaexp: '¿Cuándo venció su visa anterior?',
    purpose: 'Razón principal del viaje', occupation: 'Ocupación actual', jobtime: 'Tiempo en su empleo actual',
    education: 'Grado académico más alto', income: 'Ingresos mensuales aproximados', whopays: '¿Quién paga el viaje?',
    funds: '¿Tiene fondos para el doble del costo del viaje?', marital: 'Estado civil',
    travel: '¿Ha viajado al exterior en los últimos 3 años?', relatives: '¿Tiene familiares cercanos en EE.UU.?',
    property: '¿Es propietario(a) de bienes inmuebles?', email: 'Email', emailPh: 'correo@ejemplo.com',
    phone: 'Teléfono / WhatsApp', duration: 'Duración planificada en EE.UU.', criminal: '¿Ha tenido procesos penales o judiciales?',
    back: 'Atrás', next: 'Continuar', submit: 'Generar evaluación',
    err1: 'Por favor complete todos los campos obligatorios.', err3: 'Por favor ingrese su email y teléfono.',
    loadTitle: 'Analizando su perfil',
    loadSteps: ['Revisando historial migratorio', 'Evaluando arraigos y situación económica', 'Analizando su perfil con inteligencia artificial', 'Generando recomendaciones personalizadas'],
    levels: { high: 'Probable Aprobación', medium: 'Aprobación Posible', low: 'Alto Riesgo de Rechazo' } as Record<string,string>,
    completeness: 'Perfil completado', completenessHint: 'Mientras más preguntas responda, más precisa es la evaluación.',
    note: 'Nota: Puntuación máxima 94 puntos. Resultado orientativo; la decisión final depende de la discreción del oficial consular.',
    summary: 'Resumen', strengths: 'Fortalezas', risks: 'Factores de Riesgo', recs: 'Recomendaciones',
    wa: 'Agendar consulta', pdf: 'Descargar PDF', restart: 'Nueva evaluación',
    waMsg: (s: number) => `Hola Genius, completé mi evaluación de perfil. Puntuación: ${s}/94. Me gustaría agendar una consulta.`,
    fbSummary: (n: string, s: number, p: number) => `${n} presenta un perfil con puntuación de ${s}/94 (${p}%). Para un análisis detallado contáctenos directamente.`,
    fbS: { title: 'Evaluación completada', text: 'Su perfil ha sido procesado. Contáctenos para un análisis más detallado y personalizado.' },
    fbR: { title: 'Revisión recomendada', text: 'Consulte con un asesor Genius para revisar los factores específicos de su caso.' },
    fbRec: { title: 'Agendar consulta', text: 'Comuníquese por WhatsApp para recibir orientación personalizada y comenzar su proceso.' },
    rTitle: 'Reporte de PreCalificación', rApplicant: 'Solicitante', rName: 'Nombre', rCountry: 'País', rPhone: 'Teléfono',
    rAge: 'Edad', rYears: 'años', rPurpose: 'Propósito', locale: 'es-HN',
  },
  en: {
    brand: 'Profile Assessment', home: '← Home', homeHref: '/en', select: '-- Select --',
    wTitle: 'Find out how strong your U.S. visa profile is',
    wSub: 'Answer a few questions and get a personalized assessment, analyzed with artificial intelligence and backed by over 15 years of experience.',
    wTrust: ['2 minutes', '100% confidential', 'Free, no commitment'],
    wGetTitle: 'When you finish you will receive',
    wGet: ['Your profile score from 0 to 94', 'Your strengths and risk factors', 'Concrete recommendations', 'A downloadable PDF report'],
    wCta: 'Start assessment',
    wNote: 'Indicative result. No assessment guarantees approval: the final decision rests with the consular officer.',
    steps: ['Personal information', 'Profile', 'Ties'], stepOf: (s: number) => `Step ${s} of 3`,
    s1Title: 'Personal Information', s1Sub: 'These fields are required for the assessment',
    s2Title: 'Applicant Profile', s2Sub: 'These questions improve the accuracy of the assessment',
    s3Title: 'Ties and Personal Situation', s3Sub: 'Key information to assess your likelihood of returning home',
    name: 'Full name', namePh: 'E.g. Maria Garcia Lopez', age: 'Age', agePh: 'E.g. 35', gender: 'Gender',
    country: 'Country of origin', history: 'U.S. immigration history',
    deniedBox: 'About the denial', dcount: 'How many times was it denied?', dwhen: 'When was the most recent denial?',
    prevBox: 'Details of your previous situation', deportform: 'How did the removal take place?', timegone: 'How long since you left the U.S.?',
    protection: 'Did you apply for immigration protection?', uslegal: 'Did you have legal issues in the U.S.?',
    visaBox: 'Previous visa details', visacat: 'What visa category did you have?', visaexp: 'When did your previous visa expire?',
    purpose: 'Main purpose of the trip', occupation: 'Current occupation', jobtime: 'Time at your current job',
    education: 'Highest level of education', income: 'Approximate monthly income', whopays: 'Who is paying for the trip?',
    funds: 'Do you have funds for twice the cost of the trip?', marital: 'Marital status',
    travel: 'Have you traveled abroad in the last 3 years?', relatives: 'Do you have close relatives in the U.S.?',
    property: 'Do you own real estate?', email: 'Email', emailPh: 'email@example.com',
    phone: 'Phone / WhatsApp', duration: 'Planned length of stay in the U.S.', criminal: 'Have you had any criminal or legal proceedings?',
    back: 'Back', next: 'Continue', submit: 'Generate assessment',
    err1: 'Please complete all required fields.', err3: 'Please enter your email and phone number.',
    loadTitle: 'Analyzing your profile',
    loadSteps: ['Reviewing immigration history', 'Assessing ties and financial situation', 'Analyzing your profile with artificial intelligence', 'Generating personalized recommendations'],
    levels: { high: 'Likely Approval', medium: 'Possible Approval', low: 'High Risk of Denial' } as Record<string,string>,
    completeness: 'Profile completeness', completenessHint: 'The more questions you answer, the more accurate the assessment.',
    note: 'Note: Maximum score is 94 points. Indicative result; the final decision rests with the consular officer.',
    summary: 'Summary', strengths: 'Strengths', risks: 'Risk Factors', recs: 'Recommendations',
    wa: 'Book a consultation', pdf: 'Download PDF', restart: 'New assessment',
    waMsg: (s: number) => `Hello Genius, I completed my profile assessment. Score: ${s}/94. I would like to book a consultation.`,
    fbSummary: (n: string, s: number, p: number) => `${n} has a profile score of ${s}/94 (${p}%). For a detailed analysis, please contact us directly.`,
    fbS: { title: 'Assessment completed', text: 'Your profile has been processed. Contact us for a more detailed, personalized analysis.' },
    fbR: { title: 'Review recommended', text: 'Talk to a Genius advisor to review the specific factors of your case.' },
    fbRec: { title: 'Book a consultation', text: 'Reach out on WhatsApp for personalized guidance and to start your process.' },
    rTitle: 'Pre-Qualification Report', rApplicant: 'Applicant', rName: 'Name', rCountry: 'Country', rPhone: 'Phone',
    rAge: 'Age', rYears: 'years old', rPurpose: 'Purpose', locale: 'en-US',
  },
}

// "Perfil completado": % real de preguntas respondidas (reemplaza al antiguo número aleatorio)
function calcCompleteness(f: FormData): number {
  const fields: (keyof FormData)[] = ['name','age','gender','country','history','email','phone','purpose','occupation','jobtime','education','income','whopays','funds','marital','travel','relatives','property','duration','criminal']
  if (f.history === 'denied') fields.push('dcount','dwhen')
  if (f.history === 'deported') fields.push('deportform','timegone','protection','uslegal')
  if (f.history === 'withdrew') fields.push('timegone','protection','uslegal')
  if (f.history === 'hasvisa') fields.push('visacat','visaexp')
  const filled = fields.filter(k => String(f[k]).trim() !== '').length
  return Math.round((filled / fields.length) * 100)
}

const inputCls = 'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#C9A84C]'
const labelCls = 'block text-sm font-semibold text-white/85 mb-2'

function RC({name,value,label,checked,onChange}:{name:string;value:string;label:string;checked:boolean;onChange:()=>void}) {
  return (
    <label className="cursor-pointer">
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="sr-only" />
      <div className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all ${checked?'border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C]':'border-white/10 bg-white/5 text-white/75 hover:border-white/20'}`}>
        <div className={`size-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${checked?'border-[#C9A84C] bg-[#C9A84C]':'border-white/30'}`}>
          {checked && <div className="size-1.5 rounded-full bg-[#1A3A3A]" />}
        </div>
        {label}
      </div>
    </label>
  )
}

function SL({id,value,onChange,label,children}:{id:string;value:string;onChange:(v:string)=>void;label:string;children:React.ReactNode}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-white/85">{label}</label>
      <select id={id} value={value} onChange={e=>onChange(e.target.value)} className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#C9A84C] [&>option]:bg-[#1A3A3A]">{children}</select>
    </div>
  )
}

function ScoreRing({ score, color }: { score: number; color: string }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setN(score); return }
    let raf = 0; const start = performance.now(); const dur = 1400
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round(score * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [score])
  const r = 68, c = 2 * Math.PI * r
  return (
    <div className="relative size-40 shrink-0">
      <svg viewBox="0 0 160 160" className="size-40 -rotate-90" aria-hidden="true">
        <circle cx="80" cy="80" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
        <circle cx="80" cy="80" r={r} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - n / 94)} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-heading text-5xl font-bold leading-none" style={{ color }}>{n}</span>
        <span className="mt-1 text-xs tracking-widest text-white/40">/ 94</span>
      </div>
    </div>
  )
}

function Section({ icon: Icon, color, title, items }: { icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string; title: string; items: AnalysisItem[] }) {
  return (
    <div className="mb-7">
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex size-8 items-center justify-center rounded-lg" style={{ backgroundColor: color + '1A' }}><Icon className="size-4" style={{ color }} /></span>
        <h2 className="font-heading text-lg font-bold text-white">{title} <span className="text-sm font-normal text-white/40">({items.length})</span></h2>
      </div>
      {items.map((it, i) => (
        <div key={i} className="mb-3 rounded-xl border border-white/8 bg-white/4 p-5" style={{ borderLeft: `3px solid ${color}` }}>
          <p className="mb-2 text-sm font-bold text-white/90">{i + 1}. {it.title}</p>
          <p className="text-sm leading-relaxed text-white/65">{it.text}</p>
        </div>
      ))}
    </div>
  )
}

export function VisaEvaluator({ initialLang = 'es' }: { initialLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  const [step, setStep] = useState(0) // 0 = bienvenida
  const [form, setForm] = useState<FormData>(INITIAL)
  const [loading, setLoading] = useState(false)
  const [loadStage, setLoadStage] = useState(0)
  const [result, setResult] = useState<{score:number;confidence:number;level:string;analysis:AnalysisResult}|null>(null)
  const [error, setError] = useState<'' | 'err1' | 'err3'>('')
  const t = T[lang]

  const set = useCallback((key: keyof FormData, val: string) => { setForm(prev => ({...prev,[key]:val})); setError('') }, [])
  const opt = (key: string) => OPTS[key].map(o => ({ v: o.v, l: o[lang] }))
  const options = (key: string) => [<option key="" value="">{t.select}</option>, ...opt(key).map(o => <option key={o.v} value={o.v}>{o.l}</option>)]
  const radios = (key: keyof FormData, optKey: string, cols: 'grid' | 'list') => (
    <div className={cols === 'grid' ? 'grid grid-cols-2 gap-2' : 'flex flex-col gap-2'}>
      {opt(optKey).map(o => <RC key={o.v} name={key} value={o.v} label={o.l} checked={form[key]===o.v} onChange={()=>set(key,o.v)} />)}
    </div>
  )

  useEffect(() => {
    if (!loading) { setLoadStage(0); return }
    const id = setInterval(() => setLoadStage(s => Math.min(s + 1, T.es.loadSteps.length - 1)), 1400)
    return () => clearInterval(id)
  }, [loading])

  const validate = (s: number) => {
    if (s===1 && (!form.name.trim()||!form.age||!form.gender||!form.country||!form.history)) { setError('err1'); return false }
    if (s===3 && (!form.email.trim()||!form.phone.trim())) { setError('err3'); return false }
    setError(''); return true
  }

  const next = () => { if (validate(step)) { setStep(s=>s+1); window.scrollTo(0,0) } }
  const back = () => { setError(''); setStep(s=>s-1); window.scrollTo(0,0) }
  const start = () => { setStep(1); window.scrollTo(0,0) }

  const submit = async () => {
    if (!validate(3)) return
    setLoading(true); setError('')
    const score = calcScore(form)
    const pct = Math.round((score/94)*100)
    const confidence = calcCompleteness(form)
    const level = score>=65?'high':score>=40?'medium':'low'
    try {
      const res = await fetch('/api/evaluate',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({formData:form,score,pct,lang}),
      })
      if (!res.ok) throw new Error('API error')
      const data = await res.json()
      setResult({score,confidence,level,analysis:data.analysis})
      try {
        await fetch('/api/save-evaluation', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: form.name, email: form.email, phone: form.phone,
            age: form.age, country: form.country, history: form.history,
            purpose: form.purpose, occupation: form.occupation,
            score, level, confidence, analysis: data.analysis,
            timestamp: new Date().toISOString()
          })
        })
      } catch { /* silent fail - don't block result */ }
    } catch {
      setResult({
        score,confidence,level,
        analysis:{ summary: t.fbSummary(form.name, score, pct), strengths:[t.fbS], risks:[t.fbR], recommendations:[t.fbRec] },
      })
    }
    setLoading(false); window.scrollTo(0,0)
  }

  const purposeLabel = (v: string) => OPTS.purpose.find(o => o.v === v)?.[lang] || v
  const countryLabel = (v: string) => lang === 'en' ? (COUNTRIES.find(c => c.v === v)?.en || v) : v

  const downloadPDF = () => {
    if (!result) return
    try {
      sessionStorage.setItem('genius_report', JSON.stringify({
        lang,
        score: result.score, confidence: result.confidence, level: result.level, analysis: result.analysis,
        form: { name: form.name, email: form.email, phone: form.phone, age: form.age, country: countryLabel(form.country), purpose: purposeLabel(form.purpose) },
      }))
      window.open('/reporte', '_blank')
      return
    } catch {}
    // Respaldo si sessionStorage falla
    const lc = result.level==='high'?'#3DB89E':result.level==='medium'?'#C9A84C':'#E05252'
    const ll = t.levels[result.level]
    const date = new Date().toLocaleDateString(t.locale,{year:'numeric',month:'long',day:'numeric'})
    const items = (arr: AnalysisItem[]) => arr.map((it,i)=>`<div style="background:rgba(0,0,0,0.04);border-radius:8px;padding:12px 14px;margin-bottom:8px"><p style="font-weight:700;margin-bottom:4px">${i+1}. ${it.title}</p><p style="color:#555;font-size:13px;line-height:1.5">${it.text}</p></div>`).join('')
    const sec = (title: string, color: string, arr: AnalysisItem[]) => `<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;border-left:4px solid ${color};color:${color};padding-left:8px;margin:16px 0 8px">${title} (${arr.length})</div>${items(arr)}`
    const html = `<!DOCTYPE html><html lang="${lang}"><head><meta charset="UTF-8"><title>${t.rTitle} - ${form.name}</title></head><body style="font-family:Arial,sans-serif;margin:0;color:#1A3A3A">
    <div style="background:#1A3A3A;color:white;padding:20px 30px;display:flex;align-items:center;gap:16px"><img src="${LOGO_SRC}" style="width:52px;height:52px;border-radius:50%"><div><div style="font-size:20px;font-weight:700;text-transform:uppercase">Genius Visa Consultants</div><div style="font-size:11px;color:#C9A84C;text-transform:uppercase;letter-spacing:.1em">${t.rTitle}</div></div><div style="margin-left:auto;font-size:12px;text-align:right"><div style="color:#C9A84C">${date}</div><div>${t.rApplicant}: ${form.name}</div></div></div>
    <div style="padding:24px 30px">
      <div style="border-left:5px solid ${lc};border-radius:8px;padding:16px 20px;margin-bottom:16px;background:rgba(0,0,0,0.02)"><span style="font-size:48px;font-weight:900;color:${lc}">${result.score}</span><span style="color:#888"> /94</span><div style="font-size:18px;font-weight:700">${ll}</div><div style="font-size:12px;color:#888">${t.completeness}: ${result.confidence}%</div></div>
      <p style="font-size:11px;color:#888;font-style:italic">${t.note}</p>
      <div style="font-size:12px;background:#f5f5f5;border-radius:8px;padding:12px;margin-bottom:16px"><b>${t.rName}:</b> ${form.name} · <b>${t.rCountry}:</b> ${countryLabel(form.country)} · <b>Email:</b> ${form.email} · <b>${t.rPhone}:</b> ${form.phone} · <b>${t.rAge}:</b> ${form.age} ${t.rYears} · <b>${t.rPurpose}:</b> ${purposeLabel(form.purpose)}</div>
      <div style="background:#f5f5f5;border-radius:8px;padding:14px;font-size:13px;color:#555;line-height:1.6">${result.analysis.summary}</div>
      ${sec(t.strengths,'#3DB89E',result.analysis.strengths)}${sec(t.risks,'#E05252',result.analysis.risks)}${sec(t.recs,'#C9A84C',result.analysis.recommendations)}
    </div>
    <div style="background:#0D2222;color:#888;font-size:10px;padding:10px 30px">+504 9741-0936 | geniusvisac@gmail.com | @geniusvisac | geniusvctravel.com</div></body></html>`
    const a = document.createElement('a')
    a.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(html)
    a.target = '_blank'; a.rel = 'noopener'
    document.body.appendChild(a); a.click(); document.body.removeChild(a)
  }

  const restart = () => { setForm(INITIAL); setStep(1); setResult(null); setError(''); window.scrollTo(0,0) }

  const langToggle = (
    <div className="flex items-center gap-2">
      {(['es','en'] as Lang[]).map(l => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang===l} className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${lang===l?'border-[#C9A84C] text-[#C9A84C]':'border-white/20 text-white/50 hover:text-white/80'}`}>{l.toUpperCase()}</button>
      ))}
    </div>
  )

  const header = (
    <header className="bg-[#0D2222] border-b border-white/10">
      <div className="mx-auto max-w-2xl px-4 py-4 flex items-center gap-3">
        <img src={LOGO_SRC} alt="Genius" className="size-10 rounded-full object-cover flex-shrink-0" />
        <div className="min-w-0"><p className="text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest text-white truncate">Genius Visa Consultants</p><p className="text-xs text-[#C9A84C] uppercase tracking-widest">{t.brand}</p></div>
        <div className="ml-auto flex items-center gap-3">
          {!result && !loading && langToggle}
          <a href={t.homeHref} className="hidden sm:inline text-xs text-white/40 hover:text-white/70">{t.home}</a>
        </div>
      </div>
    </header>
  )

  const footer = (
    <div className="mt-12 pt-6 border-t border-white/10 text-center">
      <div className="flex flex-wrap justify-center gap-4 mb-3">
        <a href="tel:+50497410936" className="text-xs text-white/40 hover:text-white/60">+504 9741-0936</a>
        <a href="mailto:geniusvisac@gmail.com" className="text-xs text-white/40 hover:text-white/60">geniusvisac@gmail.com</a>
        <a href="https://instagram.com/geniusvisac" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white/60">@geniusvisac</a>
      </div>
      <p className="text-xs text-white/25">© 2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
    </div>
  )

  // ── Carga por etapas ──
  if (loading) return (
    <main className="min-h-screen bg-[#1A3A3A]">
      {header}
      <div className="mx-auto max-w-md px-6 pt-20 pb-16 animate-in fade-in duration-500">
        <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-[#C9A84C]/10"><Sparkles className="size-6 text-[#C9A84C]" /></div>
        <h1 className="font-heading text-2xl font-bold text-white text-center mb-8">{t.loadTitle}</h1>
        <ul className="space-y-4" aria-live="polite">
          {t.loadSteps.map((s, i) => (
            <li key={i} className={`flex items-center gap-3 text-sm transition-opacity duration-500 ${i<=loadStage?'opacity-100':'opacity-30'}`}>
              {i < loadStage
                ? <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#3DB89E]/15"><Check className="size-3.5 text-[#3DB89E]" /></span>
                : i === loadStage
                  ? <LoaderCircle className="size-6 animate-spin text-[#C9A84C]" />
                  : <span className="inline-flex size-6 rounded-full border border-white/20" />}
              <span className={i<=loadStage?'text-white/85':'text-white/50'}>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )

  // ── Resultados ──
  if (result) {
    const lc = result.level==='high'?'#3DB89E':result.level==='medium'?'#C9A84C':'#E05252'
    const ll = t.levels[result.level]
    return (
      <main className="min-h-screen bg-[#1A3A3A]">
        {header}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 mb-4 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <ScoreRing score={result.score} color={lc} />
            <div className="flex-1 w-full text-center sm:text-left">
              <p className="font-heading text-2xl font-bold mb-4" style={{color:lc}}>{ll}</p>
              <div className="flex justify-between text-xs text-white/60 mb-2"><span>{t.completeness}</span><span>{result.confidence}%</span></div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden"><div className="h-full rounded-full bg-white/60 transition-all duration-1000" style={{width:`${result.confidence}%`}} /></div>
              <p className="mt-2 text-xs text-white/40">{t.completenessHint}</p>
            </div>
          </div>
          <p className="text-xs text-white/40 italic mb-8">{t.note}</p>

          <div className="mb-7">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-white/10"><FileText className="size-4 text-white/80" /></span>
              <h2 className="font-heading text-lg font-bold text-white">{t.summary}</h2>
            </div>
            <div className="rounded-xl bg-white/4 border border-white/8 p-5 text-sm text-white/70 leading-relaxed">{result.analysis.summary}</div>
          </div>
          <Section icon={ShieldCheck} color="#3DB89E" title={t.strengths} items={result.analysis.strengths} />
          <Section icon={TriangleAlert} color="#E05252" title={t.risks} items={result.analysis.risks} />
          <Section icon={Lightbulb} color="#C9A84C" title={t.recs} items={result.analysis.recommendations} />

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a href={`https://wa.me/50497410936?text=${encodeURIComponent(t.waMsg(result.score))}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white hover:opacity-90"><MessageCircle className="size-4" />{t.wa}</a>
            <button onClick={downloadPDF} className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3.5 text-sm font-bold text-[#1A3A3A] hover:opacity-90"><Download className="size-4" />{t.pdf}</button>
            <button onClick={restart} className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-medium text-white/70 hover:text-white"><RotateCcw className="size-4" />{t.restart}</button>
          </div>
          {footer}
        </div>
      </main>
    )
  }

  // ── Bienvenida ──
  if (step === 0) return (
    <main className="min-h-screen bg-[#1A3A3A]">
      {header}
      <div className="mx-auto max-w-2xl px-4 pt-12 pb-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
        <div className="mx-auto mb-6 h-px w-14 bg-[#C9A84C]" />
        <h1 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-white text-center">{t.wTitle}</h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-white/65 leading-relaxed">{t.wSub}</p>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {[Clock, Lock, BadgeCheck].map((Icon, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center">
              <Icon className="mx-auto mb-2 size-5 text-[#C9A84C]" />
              <p className="text-xs sm:text-sm font-medium text-white/80">{t.wTrust[i]}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C9A84C]">{t.wGetTitle}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {t.wGet.map(g => (
              <li key={g} className="flex items-start gap-2.5 text-sm text-white/75"><Check className="mt-0.5 size-4 shrink-0 text-[#3DB89E]" />{g}</li>
            ))}
          </ul>
        </div>
        <button onClick={start} className="mt-8 w-full flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 py-4 text-sm font-bold text-[#1A3A3A] transition-transform duration-300 hover:scale-[1.02]">{t.wCta} <ArrowRight className="size-4" /></button>
        <p className="mt-4 text-center text-xs text-white/40">{t.wNote}</p>
        {footer}
      </div>
    </main>
  )

  // ── Formulario (pasos 1-3) ──
  return (
    <main className="min-h-screen bg-[#1A3A3A]">
      {header}
      <div className="bg-[#0D2222] px-4 pt-4 pb-4">
        <div className="mx-auto max-w-2xl">
          <ol className="flex items-center">
            {t.steps.map((label, i) => {
              const n = i + 1, done = step > n, active = step === n
              return (
                <li key={label} className={`flex items-center ${i < 2 ? 'flex-1' : ''}`}>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-500 ${done?'bg-[#3DB89E] text-[#0D2222]':active?'bg-[#C9A84C] text-[#1A3A3A]':'border border-white/20 text-white/40'}`}>
                      {done ? <Check className="size-3.5" /> : n}
                    </span>
                    <span className={`hidden sm:inline text-xs font-medium ${active?'text-white':done?'text-white/70':'text-white/40'}`}>{label}</span>
                  </div>
                  {i < 2 && <div className={`mx-3 h-px flex-1 transition-colors duration-500 ${done?'bg-[#3DB89E]/60':'bg-white/10'}`} />}
                </li>
              )
            })}
          </ol>
          <p className="mt-3 text-xs text-white/40 sm:hidden">{t.stepOf(step)} · {t.steps[step-1]}</p>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-8">
        {error && <div className="mb-4 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400">{t[error]}</div>}

        <div key={step} className="animate-in fade-in slide-in-from-right-4 duration-500">
        {step===1 && (
          <div>
            <h1 className="font-heading text-2xl font-bold text-white mb-1">{t.s1Title}</h1>
            <p className="text-sm text-white/50 mb-6">{t.s1Sub}</p>
            <div className="space-y-5">
              <div><label className={labelCls}>{t.name} <span className="text-[#C9A84C]">*</span></label><input type="text" value={form.name} onChange={e=>set('name',e.target.value)} placeholder={t.namePh} className={inputCls} /></div>
              <div><label className={labelCls}>{t.age} <span className="text-[#C9A84C]">*</span></label><input type="number" value={form.age} onChange={e=>set('age',e.target.value)} placeholder={t.agePh} min="18" max="99" className={inputCls} /></div>
              <div><label className={labelCls}>{t.gender} <span className="text-[#C9A84C]">*</span></label>{radios('gender','gender','grid')}</div>
              <div><label className={labelCls}>{t.country} <span className="text-[#C9A84C]">*</span></label><select value={form.country} onChange={e=>set('country',e.target.value)} className={inputCls + ' [&>option]:bg-[#1A3A3A]'}><option value="">{t.select}</option>{COUNTRIES.map(c=><option key={c.v} value={c.v}>{lang==='en'?c.en:c.v}</option>)}</select></div>
              <div><label className={labelCls}>{t.history} <span className="text-[#C9A84C]">*</span></label>{radios('history','history','list')}</div>
              {form.history==='denied'&&<div className="rounded-xl border border-[#C9A84C]/20 bg-[#C9A84C]/5 p-4 space-y-4 animate-in fade-in duration-300"><p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] border-b border-[#C9A84C]/20 pb-2 mb-2">{t.deniedBox}</p><SL id="dcount" label={t.dcount} value={form.dcount} onChange={v=>set('dcount',v)}>{options('dcount')}</SL><SL id="dwhen" label={t.dwhen} value={form.dwhen} onChange={v=>set('dwhen',v)}>{options('dwhen')}</SL></div>}
              {(form.history==='deported'||form.history==='withdrew')&&<div className="rounded-xl border border-white/10 bg-white/4 p-4 space-y-4 animate-in fade-in duration-300"><p className="text-xs font-bold uppercase tracking-widest text-white/60 border-b border-white/10 pb-2 mb-2">{t.prevBox}</p>{form.history==='deported'&&<SL id="deportform" label={t.deportform} value={form.deportform} onChange={v=>set('deportform',v)}>{options('deportform')}</SL>}<SL id="timegone" label={t.timegone} value={form.timegone} onChange={v=>set('timegone',v)}>{options('timegone')}</SL><SL id="protection" label={t.protection} value={form.protection} onChange={v=>set('protection',v)}>{options('protection')}</SL><SL id="uslegal" label={t.uslegal} value={form.uslegal} onChange={v=>set('uslegal',v)}>{options('uslegal')}</SL></div>}
              {form.history==='hasvisa'&&<div className="rounded-xl border border-white/10 bg-white/4 p-4 space-y-4 animate-in fade-in duration-300"><p className="text-xs font-bold uppercase tracking-widest text-white/60 border-b border-white/10 pb-2 mb-2">{t.visaBox}</p><SL id="visacat" label={t.visacat} value={form.visacat} onChange={v=>set('visacat',v)}>{options('visacat')}</SL><SL id="visaexp" label={t.visaexp} value={form.visaexp} onChange={v=>set('visaexp',v)}>{options('visaexp')}</SL></div>}
            </div>
          </div>
        )}

        {step===2&&(
          <div>
            <h1 className="font-heading text-2xl font-bold text-white mb-1">{t.s2Title}</h1>
            <p className="text-sm text-white/50 mb-6">{t.s2Sub}</p>
            <div className="space-y-5">
              <div><label className={labelCls}>{t.purpose}</label>{radios('purpose','purpose','list')}</div>
              <div><label className={labelCls}>{t.occupation}</label>{radios('occupation','occupation','list')}</div>
              <SL id="jobtime" label={t.jobtime} value={form.jobtime} onChange={v=>set('jobtime',v)}>{options('jobtime')}</SL>
              <SL id="education" label={t.education} value={form.education} onChange={v=>set('education',v)}>{options('education')}</SL>
              <SL id="income" label={t.income} value={form.income} onChange={v=>set('income',v)}>{options('income')}</SL>
              <div><label className={labelCls}>{t.whopays}</label>{radios('whopays','whopays','grid')}</div>
              <div><label className={labelCls}>{t.funds}</label>{radios('funds','yesno','grid')}</div>
            </div>
          </div>
        )}

        {step===3&&(
          <div>
            <h1 className="font-heading text-2xl font-bold text-white mb-1">{t.s3Title}</h1>
            <p className="text-sm text-white/50 mb-6">{t.s3Sub}</p>
            <div className="space-y-5">
              <div><label className={labelCls}>{t.marital}</label>{radios('marital','marital','grid')}</div>
              <div><label className={labelCls}>{t.travel}</label>{radios('travel','yesno','grid')}</div>
              <div><label className={labelCls}>{t.relatives}</label>{radios('relatives','relatives','list')}</div>
              <div><label className={labelCls}>{t.property}</label>{radios('property','yesno','grid')}</div>
              <div><label className={labelCls}>{t.email} <span className="text-[#C9A84C]">*</span></label><input type="email" value={form.email} onChange={e=>set('email',e.target.value)} placeholder={t.emailPh} className={inputCls} /></div>
              <div><label className={labelCls}>{t.phone} <span className="text-[#C9A84C]">*</span></label><input type="tel" value={form.phone} onChange={e=>set('phone',e.target.value)} placeholder="+504 XXXX-XXXX" className={inputCls} /></div>
              <SL id="duration" label={t.duration} value={form.duration} onChange={v=>set('duration',v)}>{options('duration')}</SL>
              <div><label className={labelCls}>{t.criminal}</label>{radios('criminal','criminal','list')}</div>
            </div>
          </div>
        )}
        </div>

        <div className="flex gap-3 mt-8">
          <button onClick={step>1?back:()=>{setError('');setStep(0);window.scrollTo(0,0)}} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white/70 hover:text-white"><ArrowLeft className="size-4" /> {t.back}</button>
          {step<3
            ?<button onClick={next} className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3.5 text-sm font-bold text-[#1A3A3A] hover:opacity-90">{t.next} <ArrowRight className="size-4" /></button>
            :<button onClick={submit} className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3.5 text-sm font-bold text-[#1A3A3A] hover:opacity-90">{t.submit} <ArrowRight className="size-4" /></button>
          }
        </div>
      </div>
    </main>
  )
}
