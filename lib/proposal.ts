// Propuesta de servicios para el cliente (se genera desde el Panel después de la evaluación).
// Aquí se arma TODO el contenido; la página /propuesta (PDF) y el Word usan exactamente lo mismo.
import { detectLang, type SavedEvaluation } from '@/lib/report-payload'

export interface ProposalOpts {
  people: number        // personas incluidas
  feePerPerson: number  // honorarios Genius por persona (L.)
  discountPct: number   // descuento sobre honorarios (0–100)
  consularFee: number   // tarifa consular por persona (US$)
  validDays: number     // vigencia en días hábiles
}
export interface ProposalRow { label: string; detail: string; total: string }
export interface ProposalData {
  clientName: string
  fileName: string
  title: string
  subtitle: string
  placeDate: string
  description: string
  evaluation: { intro: string; points: string[] } | null
  includes: string[]
  consular: ProposalRow & { note: string }
  fees: ProposalRow
  discount: ProposalRow | null
  final: ProposalRow
  investmentNotes: string[]
  payment: string[]
  documents: string[]
  documentsNote: string
  why: string[]
  validity: string
  hours: string
  terms: string[]
  acceptance: string
}

type Kind = 'tourism' | 'family' | 'business' | 'medical' | 'study' | 'work'
const KINDS: Kind[] = ['tourism', 'family', 'business', 'medical', 'study', 'work']

const VISA_NAME: Record<Kind, string> = {
  tourism: 'Visa Americana de Turismo B1/B2',
  family: 'Visa Americana B1/B2 · Visita a familiares',
  business: 'Visa Americana de Negocios B1/B2',
  medical: 'Visa Americana B1/B2 · Tratamiento médico',
  study: 'Visa Americana de Estudiante',
  work: 'Visa Americana de Trabajo',
}
const VISA_SHORT: Record<Kind, string> = {
  tourism: 'visa americana B1/B2 (Turismo y Negocios)',
  family: 'visa americana B1/B2 para visitar familiares',
  business: 'visa americana B1/B2 de negocios',
  medical: 'visa americana B1/B2 para tratamiento médico',
  study: 'visa americana de estudiante',
  work: 'visa americana de trabajo',
}

// Tarifa consular (MRV) que el panel propone según el tipo de visa. Se puede cambiar en cada propuesta.
export function defaultConsularFee(purpose?: string): number {
  return purpose === 'work' ? 205 : 185
}
export const DEFAULT_FEE_PER_PERSON = 3500
export const DEFAULT_DISCOUNT_PCT = 10
export const DEFAULT_VALID_DAYS = 10

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const r2 = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100
const num = (n: number) => r2(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const L = (n: number) => `L. ${num(n)}`
const USD = (n: number) => `US$ ${num(n)}`
const clamp = (v: unknown, min: number, max: number, dflt: number) => {
  const n = Number(v)
  return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : dflt
}
const plural = (n: number, one: string, many: string) => (n === 1 ? `${n} ${one}` : `${n} ${many}`)

export function normalizeOpts(o: Partial<ProposalOpts>, purpose?: string): ProposalOpts {
  return {
    people: Math.round(clamp(o.people, 1, 20, 1)),
    feePerPerson: r2(clamp(o.feePerPerson, 0, 1_000_000, DEFAULT_FEE_PER_PERSON)),
    discountPct: r2(clamp(o.discountPct, 0, 100, DEFAULT_DISCOUNT_PCT)),
    consularFee: r2(clamp(o.consularFee, 0, 10_000, defaultConsularFee(purpose))),
    validDays: Math.round(clamp(o.validDays, 1, 90, DEFAULT_VALID_DAYS)),
  }
}

const TERMS: string[] = [
  'Naturaleza del servicio: Genius Visa Consultants es una firma de consultoría y asesoría migratoria. No somos abogados de inmigración ni representantes legales ante ninguna entidad gubernamental. Nuestros servicios son de preparación, orientación y acompañamiento documental.',
  'Gestión de visa, aprobación o negación: Ningún servicio contratado, de ningún asesor, garantiza la aprobación de la visa solicitada. La decisión final corresponde única y exclusivamente a las autoridades consulares y de inmigración de los Estados Unidos de América. Nuestra misión es preparar, orientar y asegurar que el cliente esté muy bien preparado, procurando que presente una solicitud completa y correctamente documentada, así como brindarle la preparación necesaria para responder de manera clara, veraz y segura a las preguntas que puedan formularle durante su entrevista en la embajada de Estados Unidos en Tegucigalpa.',
  'Responsabilidad del cliente: El cliente es responsable de la veracidad y exactitud de la información y documentos entregados a Genius Visa Consultants. Cualquier inconsistencia, omisión o falsedad documental es responsabilidad exclusiva del solicitante.',
  'Pagos y reembolsos: Los honorarios de asesoría y las tarifas gubernamentales del gobierno de Estados Unidos son descritos en la sección de inversión de este documento y son pactados de forma individual. Una vez iniciado el trámite ante el portal de Estados Unidos, no se realizan reembolsos.',
  'Tarifas gubernamentales de Estados Unidos: Las tarifas de procesamiento de visa son fijadas por el Gobierno de Estados Unidos y están sujetas a cambio sin previo aviso.',
  'Propiedad intelectual: Este documento y su formato son propiedad de Genius Visa Consultants. Prohibida su reproducción o distribución sin autorización escrita.',
  'Ley aplicable: Estos términos se rigen por las leyes de la República de Honduras.',
  'Contacto: geniusvisac@gmail.com · +504 9741-0936 · Tegucigalpa, Honduras.',
]

const WHY = [
  'Más de 15 años de experiencia',
  'Gestión completa de citas consulares',
  'Especialistas en visas americanas',
  'Preparación para entrevista incluida',
  'Atención personalizada 1 a 1',
  'Clientes en 25+ países atendidos',
  'Proceso 100% transparente',
  'Seguimiento hasta obtener resultado',
]

export function buildProposal(d: SavedEvaluation & { history?: string }, optsIn: Partial<ProposalOpts> = {}, now: Date = new Date()): ProposalData {
  const kind: Kind = KINDS.includes(d.purpose as Kind) ? (d.purpose as Kind) : 'tourism'
  const o = normalizeOpts(optsIn, d.purpose)
  const name = (d.name || 'Cliente').trim()
  const group = o.people > 1
  const who = plural(o.people, 'persona', 'personas')

  // Resumen de la evaluación: sin puntaje, sin promesas y sin detalles internos
  const lowOrSpecial = d.level === 'low' || d.history === 'denied' || d.history === 'deported' || d.history === 'withdrew'
  const intro =
    d.level === 'high'
      ? `${name} completó la evaluación de perfil de Genius. Su perfil muestra bases sólidas; aun así, ningún servicio garantiza la aprobación y la decisión final es del oficial consular.`
      : lowOrSpecial
        ? `${name} completó la evaluación de perfil de Genius. Su caso requiere atención personalizada: un asesor revisará su situación en detalle para preparar la solicitud con el mayor cuidado.`
        : `${name} completó la evaluación de perfil de Genius. Su perfil tiene aspectos que podemos fortalecer antes de la entrevista consular.`
  // Los puntos salen de las recomendaciones del análisis (solo si están en español, para no mezclar idiomas)
  const recs = detectLang(d.analysis) === 'es' ? (d.analysis?.recommendations || []).map(r => (r.title || '').trim()).filter(Boolean).slice(0, 3) : []
  const evaluation = d.level ? { intro, points: recs } : null

  const includes = [
    `Evaluación inicial del perfil migratorio de ${plural(o.people, 'solicitante', 'solicitantes')}.`,
    'Orientación personalizada sobre requisitos y documentación.',
    ...(kind === 'business' ? ['Orientación para documentar el propósito comercial del viaje (carta de invitación y agenda de reuniones).'] : []),
    ...(kind === 'medical' ? ['Orientación para documentar el tratamiento médico (carta del médico u hospital en Estados Unidos y presupuesto).'] : []),
    ...(kind === 'family' ? ['Orientación para documentar la visita (datos del familiar en Estados Unidos y plan de viaje).'] : []),
    ...(kind === 'study' ? ['Orientación sobre el formulario I-20, el pago de la tarifa SEVIS y la documentación de fondos.'] : []),
    ...(kind === 'work' ? ['Orientación sobre la petición del empleador y la documentación de la oferta de trabajo.'] : []),
    group ? 'Revisión y organización completa del expediente de cada solicitante.' : 'Revisión y organización completa del expediente.',
    `Llenado y revisión del formulario DS-160 (por persona, ${plural(o.people, 'formulario', 'formularios')}).`,
    kind === 'study'
      ? 'Preparación para la entrevista consular de estudiante (plan de estudios, fondos y vínculos con su país).'
      : 'Preparación para la entrevista consular (preguntas frecuentes y estrategia).',
    'Seguimiento del caso durante todo el proceso.',
    'Atención personalizada vía WhatsApp, correo y videollamada.',
    'Gestión y adelanto de las citas consulares en la Embajada Americana (*costo adicional).',
  ]

  const regular = r2(o.feePerPerson * o.people)
  const discountAmt = r2(regular * (o.discountPct / 100))
  const final = r2(regular - discountAmt)
  const half = r2(final / 2)
  const consularTotal = r2(o.consularFee * o.people)

  const investmentNotes = [
    ...(kind === 'study' ? ['La tarifa SEVIS I-901 se paga directamente al Gobierno de Estados Unidos y no forma parte de los honorarios de Genius; su monto vigente se confirma al iniciar el trámite.'] : []),
    'Las tarifas del Gobierno de Estados Unidos están sujetas a cambio sin previo aviso; cualquier otro cargo gubernamental vigente se confirmará al iniciar el trámite.',
  ]

  const docs = [
    'Pasaportes vigentes con mínimo 6 meses de vigencia',
    group ? 'Fotografía reciente (fondo blanco, tipo pasaporte) de cada aplicante' : 'Fotografía reciente (fondo blanco, tipo pasaporte)',
    'Formulario DS-160 completado',
    group ? `Comprobante de pago de tarifa MRV (${USD(o.consularFee)}) de cada aplicante` : `Comprobante de pago de tarifa MRV (${USD(o.consularFee)})`,
    ...(kind === 'business' ? ['Carta de invitación de la empresa o del evento (si aplica)'] : []),
    ...(kind === 'medical' ? ['Carta o cita del médico u hospital en Estados Unidos'] : []),
    ...(kind === 'family' ? ['Datos del familiar en Estados Unidos (nombre, dirección y teléfono)'] : []),
    ...(kind === 'study' ? ['Formulario I-20 emitido por la institución', 'Comprobante de pago de la tarifa SEVIS I-901', 'Carta de aceptación de la institución'] : []),
    ...(kind === 'work' ? ['Petición aprobada del empleador (I-797) o carta de oferta de trabajo'] : []),
  ]

  const cleanName = name.replace(/[^\p{L}\p{N}]+/gu, '_').replace(/^_+|_+$/g, '') || 'Cliente'
  return {
    clientName: name,
    fileName: `Propuesta_Servicios_${cleanName}`,
    title: VISA_NAME[kind],
    subtitle: group ? `Grupo familiar de ${name} — ${who}` : `Propuesta para ${name} — ${who}`,
    placeDate: `Tegucigalpa, Honduras — ${now.getDate()} de ${MONTHS[now.getMonth()]} de ${now.getFullYear()}`,
    description: `Genius Visa Consultants le ofrece asesoría migratoria integral para la obtención de la ${VISA_SHORT[kind]} para ${who}. Nuestro equipo le acompañará en cada etapa del proceso, desde la preparación del expediente hasta la entrevista consular.`,
    evaluation,
    includes,
    consular: {
      label: 'Tarifa consular — Embajada Americana (MRV Fee)',
      detail: `${USD(o.consularFee)} × ${plural(o.people, 'persona', 'personas')}`,
      total: USD(consularTotal),
      note: 'Esta tarifa es cobrada directamente por la Embajada Americana y es pagada por el cliente en la plataforma de la embajada al momento de agendar cada cita. No forma parte de los honorarios de Genius.',
    },
    fees: { label: `Honorarios profesionales Genius Visa Consultants (${who})`, detail: 'Precio regular', total: L(regular) },
    discount: o.discountPct > 0 ? { label: `Descuento especial referenciado (${num(o.discountPct).replace(/\.00$/, '')}%)`, detail: 'Ahorro', total: `- ${L(discountAmt)}` } : null,
    final: { label: o.discountPct > 0 ? 'HONORARIOS CON DESCUENTO' : 'HONORARIOS', detail: 'Precio final', total: L(final) },
    investmentNotes,
    payment: [
      `50% de anticipo al confirmar el servicio para iniciar el proceso (${L(half)})`,
      `50% restante al momento de agendar las citas consulares (${L(r2(final - half))})`,
      'Link de pago, transferencia bancaria, depósito o pago en efectivo',
    ],
    documents: docs,
    documentsNote: 'Documentos de apoyo complementario: la lista se entrega una vez contratados los servicios de asesoría.',
    why: WHY,
    validity: `Propuesta válida por ${o.validDays} días hábiles`,
    hours: 'Lunes a viernes 8am – 6pm | sábados 9am – 1pm | Tegucigalpa, Honduras',
    terms: TERMS,
    acceptance:
      'Declaro que he leído, entendido y aceptado en su totalidad los Términos y Condiciones descritos en la sección anterior, así como el resumen de honorarios y pagos gubernamentales detallado en la sección de inversión de este documento, incluyendo la tarifa de procesamiento de visa y la tarifa de asesoría de Genius Visa Consultants. Me comprometo a cubrir la totalidad de dichas tarifas en los plazos acordados con mi asesor.',
  }
}
