import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export type Step = { title: string; desc: string }
export type Section = {
  h2: string
  lead?: string
  paragraphs?: string[]
  bullets?: string[]
  steps?: Step[]
  cards?: Step[]
  note?: string
}
export type Faq = { q: string; a: string }
export type Guide = {
  slug: string
  metaTitle: string
  title: string
  eyebrow: string
  description: string
  intro: string
  readMinutes: number
  quick: string[]
  sections: Section[]
  faqs: Faq[]
  sources: { label: string; url: string }[]
  related: string[]
  visaLinks: { label: string; href: string }[]
  ctaTitle: string
  ctaText: string
  help?: { title: string; intro: string; points: string[] }
}
export type GuideMeta = { slug: string; cardTitle: string; summary: string }

export const PUBLISHED = '2026-11-18'
export const UPDATED = '2026-11-18'

// Listado de las 10 guías (la guía "me-negaron-la-visa-americana" tiene su propia página).
export const guideList: GuideMeta[] = [
  { slug: 'como-sacar-visa-americana-honduras', cardTitle: '¿Cómo sacar la visa americana desde Honduras?', summary: 'El proceso completo: DS-160, pago, cita en la Embajada y entrevista, paso a paso.' },
  { slug: 'me-negaron-la-visa-americana', cardTitle: '¿Me negaron la visa americana? Qué hacer ahora', summary: 'Qué significan 214(b) y 221(g), si puedes volver a aplicar y qué errores evitar.' },
  { slug: 'documentos-visa-turista-b1-b2', cardTitle: '¿Qué documentos necesito para la visa de turista B1/B2?', summary: 'Documentos obligatorios y de respaldo, según si trabajas, tienes negocio o estudias.' },
  { slug: 'preguntas-entrevista-visa-americana', cardTitle: '¿Qué preguntas hacen en la entrevista de la visa?', summary: 'Las preguntas más comunes, cómo responder y los errores que más cuestan.' },
  { slug: 'costo-tiempo-visa-americana-honduras', cardTitle: '¿Cuánto cuesta y cuánto tarda la visa americana?', summary: 'Tarifas oficiales, cargos nuevos, tiempos de espera y cómo no pagar de más.' },
  { slug: 'visa-f1-estudiante-paso-a-paso', cardTitle: '¿Cómo obtener la visa F1 de estudiante?', summary: 'I-20, SEVIS, DS-160, fondos y entrevista: el camino completo para estudiar en EE. UU.' },
  { slug: 'visa-h1b-quien-puede-aplicar', cardTitle: '¿Cómo funciona la visa H1B y quién puede aplicar?', summary: 'Requisitos, patrocinio del empleador, cupo anual y los cambios recientes en costos.' },
  { slug: 'visa-familiares-como-pedirla', cardTitle: '¿Cómo pedir la visa para mis familiares en EE. UU.?', summary: 'Peticiones familiares, visitas y visas para acompañantes, con los cambios de 2026.' },
  { slug: 'como-elegir-asesor-de-visas', cardTitle: '¿Vale la pena contratar un asesor de visas?', summary: 'Cuándo conviene, señales de confianza, alertas de estafa y preguntas para hacer antes de pagar.' },
  { slug: 'riesgo-de-rechazo-visa-perfil', cardTitle: '¿Cómo saber si mi perfil tiene riesgo de rechazo?', summary: 'Qué mira el oficial y una autoevaluación para fortalecer tu perfil antes de aplicar.' },
]

const SRC_VISAS = { label: 'Departamento de Estado de EE. UU. — Visas', url: 'https://travel.state.gov/content/travel/en/us-visas.html' }
const SRC_DENIALS = { label: 'Departamento de Estado de EE. UU. — Visa Denials', url: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-denials.html' }
const SRC_DS160 = { label: 'Formulario DS-160 (sistema CEAC)', url: 'https://ceac.state.gov/genniv/' }
const SRC_SEVIS = { label: 'Pago de la tarifa SEVIS I-901', url: 'https://www.fmjfee.com' }
const SRC_USCIS = { label: 'USCIS — Servicios de inmigración', url: 'https://www.uscis.gov' }

const ALL_VISAS = [
  { label: 'Visa de turista B1/B2', href: '/visas/b1-b2' },
  { label: 'Visa F1 de estudiante', href: '/visas/f1' },
  { label: 'Visa H1B de trabajo', href: '/visas/h1b' },
  { label: 'Visas familiares', href: '/visas/familiares' },
]

export const guides: Record<string, Guide> = {
  // ───────────────────────────────────────────── 1
  'como-sacar-visa-americana-honduras': {
    slug: 'como-sacar-visa-americana-honduras',
    metaTitle: 'Cómo sacar la visa americana en Honduras | Genius Visa',
    title: '¿Cómo sacar la visa americana desde Honduras? Guía paso a paso',
    eyebrow: 'Guía para hondureños',
    description: 'Guía paso a paso para sacar la visa americana desde Honduras: DS-160, pago, cita en la Embajada, entrevista y qué llevar. Datos de noviembre de 2026.',
    intro: 'Sacar la visa americana desde Honduras combina un trámite en línea y una entrevista presencial en la Embajada de Tegucigalpa. No es complicado, pero un dato mal escrito o un código que no coincide puede costarte meses. Aquí tienes el proceso completo, en orden.',
    readMinutes: 7,
    quick: [
      'Elige la visa según tu propósito: turismo y negocios (B1/B2), estudios (F1), trabajo (H1B) o familiares.',
      'Llena el formulario DS-160 en línea con datos exactos y guarda la hoja de confirmación con su código de barras.',
      'Registra tu perfil en el sistema de citas de la Embajada de EE. UU. en Honduras, paga la tarifa consular y agenda tu entrevista.',
      'Asiste a la entrevista en Tegucigalpa con tu pasaporte, la confirmación del DS-160, el comprobante de pago y los documentos que respalden tu historia.',
      'Si te aprueban, el consulado te indica cómo recibirás tu pasaporte con la visa. Si te niegan, recibes un papel que cita la razón.',
    ],
    sections: [
      {
        h2: 'Paso 1: elige la visa que corresponde a tu caso',
        lead: 'Pedir la visa equivocada es uno de los errores más caros, porque la tarifa no se devuelve. Define primero para qué vas a viajar.',
        cards: [
          { title: 'Turismo o negocios (B1/B2)', desc: 'Para pasear, visitar familiares, asistir a reuniones o ferias, sin trabajar para una empresa de EE. UU.' },
          { title: 'Estudios (F1)', desc: 'Para estudiar tiempo completo en una escuela o universidad aprobada. Empieza con la admisión y el documento I-20.' },
          { title: 'Trabajo (H1B)', desc: 'Para trabajar en EE. UU. con una empresa que te patrocine. Tú no puedes solicitarla por tu cuenta.' },
          { title: 'Familiares', desc: 'Peticiones de un familiar ciudadano o residente, o visas para acompañar a quien trabaja o estudia allá.' },
        ],
      },
      {
        h2: 'El proceso, paso a paso',
        steps: [
          { title: 'Llena el formulario DS-160', desc: 'Es la solicitud en línea del Departamento de Estado. Responde con datos exactos, tal como aparecen en tus documentos. Al terminar, guarda la hoja de confirmación: tiene un código de barras que vas a necesitar.' },
          { title: 'Crea tu perfil en el sistema de citas de la Embajada', desc: 'Con el número de tu DS-160 registras tu perfil. Verifica que el código de barras sea el mismo que programaste: la Embajada en Honduras anunció que no admite a la entrevista a quien agendó su cita con un número de DS-160 incompleto, incorrecto o ficticio.' },
          { title: 'Paga la tarifa consular', desc: 'Es el costo de la solicitud de visa. No se devuelve si te la niegan. Los montos y cargos adicionales cambian con frecuencia, así que confirma el valor vigente antes de pagar.' },
          { title: 'Agenda tu cita', desc: 'Elige la fecha disponible y revisa el calendario con frecuencia. Los tiempos de espera han variado mucho. Nadie puede venderte una cita garantizada: las citas se programan en el sistema oficial.' },
          { title: 'Prepara tus documentos y tu historia', desc: 'Reúne los documentos que respalden quién eres, a qué vas y por qué volverás a Honduras. Más importante que la cantidad es que todo cuente la misma historia que tu DS-160.' },
          { title: 'Asiste a la entrevista en la Embajada', desc: 'Llega con tiempo. La entrevista suele ser breve y el oficial decide con base en tus respuestas y en lo que ve en tu solicitud.' },
          { title: 'Recibe el resultado', desc: 'Si te aprueban, el consulado te indica cómo recibirás tu pasaporte. Si te niegan, recibes un papel con la sección de la ley que se aplicó. Si piden más documentos o revisión, tu caso queda pendiente.' },
        ],
      },
      {
        h2: 'Qué llevar a la entrevista',
        bullets: [
          'Pasaporte vigente.',
          'Hoja de confirmación del DS-160 con el código de barras.',
          'Confirmación o carta de tu cita.',
          'Comprobante de pago de la tarifa consular.',
          'Una fotografía reciente, si tu confirmación de cita lo indica.',
          'Documentos que respalden tu situación (trabajo, negocio, estudios, familia). Entrégalos solo si el oficial los pide.',
        ],
      },
      {
        h2: 'Cambios recientes que debes conocer',
        bullets: [
          'Entrevista presencial: desde septiembre de 2025 se redujeron mucho las exenciones de entrevista. En la práctica, la mayoría de solicitantes en Honduras debe presentarse. Confirma tu caso con la Embajada.',
          'El código de barras del DS-160 debe coincidir con el de tu perfil y tu cita.',
          'Redes sociales: el DS-160 pide los identificadores (nombres de usuario) de tus redes. Responde con honestidad y revisa lo que tienes publicado.',
          'Costos: además de la tarifa consular existe un cargo creado por ley en 2025 (visa integrity fee). Su aplicación ha sido gradual, así que verifica cuándo y cómo se paga.',
        ],
      },
      {
        h2: 'Errores que atrasan o complican tu trámite',
        bullets: [
          'Llenar el DS-160 con prisa, con fechas, empleos o viajes que no coinciden con tus documentos.',
          'Pagar a alguien que promete una visa o una cita asegurada.',
          'Comprar tiquetes u hoteles antes de tener la visa.',
          'Presentar documentos falsos, alterados o armados solo para la cita.',
          'Aplicar otra vez de inmediato después de una negativa, con la misma información.',
        ],
        note: 'Mentir en la solicitud o en la entrevista es lo único que realmente complica un caso a largo plazo.',
      },
    ],
    faqs: [
      { q: '¿Necesito un asesor para sacar la visa?', a: 'No es obligatorio. Puedes hacer todo el trámite tú mismo en los sitios oficiales. Un asesor sirve para ordenar tu historia, revisar tu formulario y prepararte para la entrevista, sobre todo si tu caso tiene complicaciones. Lo que ningún asesor puede hacer es garantizarte la visa.' },
      { q: '¿Puedo solicitar la visa en otro país?', a: 'Por lo general, las solicitudes de visa de no inmigrante se hacen en la embajada o el consulado del país donde resides o del que eres ciudadano. Confirma las reglas vigentes en el sitio de la Embajada antes de planear cualquier otra cosa.' },
      { q: '¿Cuánto tarda en salir la cita?', a: 'Depende de la demanda y cambia con el tiempo: en 2026 se han reportado esperas desde pocos meses hasta más de un año. Revisa el calendario del sistema de citas y la herramienta de tiempos de espera del Departamento de Estado.' },
      { q: '¿Cuánto cuesta la visa?', a: 'La tarifa consular de la visa de turista B1/B2 es de 185 dólares y no se devuelve si te la niegan. La ley también creó un cargo adicional de 250 dólares que se cobra cuando la visa se emite, y su aplicación ha sido gradual. Confirma los montos vigentes antes de pagar.' },
      { q: '¿Qué pasa si me niegan la visa?', a: 'No se puede apelar, pero sí puedes volver a aplicar con una solicitud nueva cuando tengas algo distinto y real que demostrar. Lee nuestra guía sobre qué hacer después de una negativa.' },
    ],
    sources: [SRC_VISAS, SRC_DS160],
    related: ['costo-tiempo-visa-americana-honduras', 'documentos-visa-turista-b1-b2', 'preguntas-entrevista-visa-americana', 'me-negaron-la-visa-americana', 'como-elegir-asesor-de-visas'],
    visaLinks: ALL_VISAS,
    ctaTitle: '¿Quieres empezar con el pie derecho?',
    ctaText: 'Nuestra evaluación gratuita te muestra qué tan sólido se ve hoy tu perfil y qué puntos conviene fortalecer antes de pagar.',
    help: {
      title: 'Haz el trámite con acompañamiento',
      intro: 'El proceso se puede hacer solo, pero cada paso tiene detalles donde se tropieza: el DS-160, el código de barras, el pago y la cita.',
      points: ['Revisamos tu perfil antes de que pagues la tarifa, para que decidas con información.', 'Te orientamos en el DS-160 para que tus datos coincidan con tus documentos.', 'Te ayudamos a organizar tu historia y tus documentos de respaldo.', 'Te preparamos para la entrevista en la Embajada de Tegucigalpa.'],
    },
  },

  // ───────────────────────────────────────────── 3
  'documentos-visa-turista-b1-b2': {
    slug: 'documentos-visa-turista-b1-b2',
    metaTitle: 'Documentos para la visa de turista B1/B2 | Genius Visa',
    title: '¿Qué documentos necesito para la visa de turista B1/B2?',
    eyebrow: 'Guía para hondureños',
    description: 'Lista de documentos obligatorios y de respaldo para la visa de turista B1/B2, según si trabajas, tienes negocio o estudias, y cómo organizarlos para la cita.',
    intro: 'No existe una lista oficial única de papeles que garantice la visa. Lo que sí hay son documentos obligatorios para tu cita y documentos de respaldo que ayudan a demostrar tu historia. La clave no es llevar muchos papeles, sino los correctos y coherentes con lo que declaraste.',
    readMinutes: 6,
    quick: [
      'Para la cita necesitas: pasaporte vigente, confirmación del DS-160 con código de barras, comprobante de pago y la confirmación de tu cita.',
      'Los documentos de respaldo (trabajo, negocio, estudios, familia, viajes) los llevas por si el oficial los pide; muchas veces no los revisa.',
      'Lo que más pesa es que tus respuestas, tu DS-160 y tus documentos cuenten la misma historia.',
      'Nunca presentes documentos falsos, alterados o armados solo para la cita.',
    ],
    sections: [
      {
        h2: 'Documentos obligatorios para tu cita',
        bullets: [
          'Pasaporte vigente.',
          'Hoja de confirmación del DS-160, con el código de barras que coincida con tu perfil de citas.',
          'Comprobante de pago de la tarifa consular.',
          'Confirmación o carta de tu cita.',
          'Una fotografía reciente, si la Embajada lo indica en tu confirmación.',
        ],
        note: 'Revisa siempre la confirmación de tu cita: ahí la Embajada indica qué debes presentar y qué objetos puedes ingresar.',
      },
      {
        h2: 'Documentos de respaldo según tu situación',
        lead: 'Sirven para respaldar lo que dices en la entrevista. No tienes que tener todo: cada persona tiene vínculos distintos con Honduras.',
        cards: [
          { title: 'Si trabajas en una empresa', desc: 'Constancia de trabajo con cargo, antigüedad y salario, y tus últimas boletas de pago. Si te dieron permiso para viajar, una carta de la empresa.' },
          { title: 'Si tienes un negocio propio', desc: 'Registro del negocio (RTN y permiso de operación), estados de cuenta del negocio y facturas o contratos recientes.' },
          { title: 'Si trabajas por tu cuenta', desc: 'Evidencia de tus clientes o ingresos, movimientos bancarios y constancias o contratos de trabajos recientes.' },
          { title: 'Si estudias', desc: 'Constancia de estudios y el calendario académico, para mostrar que tienes compromisos en Honduras.' },
          { title: 'Si no trabajas (ama de casa, jubilado)', desc: 'Documentos de quien te apoya económicamente, actas de matrimonio o nacimiento que muestren el vínculo, o constancia de pensión.' },
        ],
      },
      {
        h2: 'Documentos de dinero y de viaje',
        bullets: [
          'Estados de cuenta recientes con movimientos normales. Evita depósitos grandes de último momento que no puedas explicar.',
          'Un plan de viaje sencillo: fechas, lugares y dónde te quedarás. No necesitas comprar tiquetes ni reservar hoteles antes de tener la visa.',
          'Si visitas a alguien: su nombre, dirección y tu relación con esa persona. La carta de invitación no es obligatoria.',
          'Pasaportes anteriores o sellos que muestren tus viajes previos.',
        ],
      },
      {
        h2: 'Cómo organizar tu carpeta',
        steps: [
          { title: 'Separa en dos grupos', desc: 'Los documentos obligatorios en la mano; los de respaldo en una carpeta aparte.' },
          { title: 'Ordénalos por tema', desc: 'Trabajo o negocio, dinero, familia, viajes. Así encuentras lo que te pidan sin dudar.' },
          { title: 'Verifica la coherencia', desc: 'Nombres, fechas, cargos y montos deben coincidir con lo que escribiste en el DS-160.' },
          { title: 'Lleva originales y una copia', desc: 'Entrega solo lo que el oficial solicite, sin desplegar toda la carpeta.' },
        ],
      },
      {
        h2: 'Lo que no debes hacer con tus documentos',
        bullets: [
          'Presentar constancias falsas, alteradas o hechas solo para la cita.',
          'Depositar dinero prestado en tu cuenta para que se vea más saldo.',
          'Llevar cartas inventadas de “contactos” o recomendaciones sin sustento.',
          'Entregar una carpeta enorme sin que te la pidan.',
        ],
        note: 'Un documento falso puede convertir un caso corregible en uno con consecuencias serias y duraderas.',
      },
    ],
    faqs: [
      { q: '¿Necesito una carta de invitación?', a: 'No es obligatoria. Si visitas a un familiar o amigo, basta con que sepas explicar quién es, dónde vive y cuánto tiempo estarás. Una carta puede acompañar tu historia, pero no sustituye lo demás.' },
      { q: '¿Cuánto dinero debo mostrar?', a: 'No existe un monto oficial. Lo importante es que tus ingresos y ahorros tengan sentido para el viaje que describes y que puedas explicar de dónde vienen.' },
      { q: '¿Es obligatorio tener propiedades?', a: 'No. Los vínculos con tu país pueden ser trabajo, familia, estudios, negocio, bienes u otras responsabilidades. Cada persona tiene los suyos.' },
      { q: '¿Debo llevar todos los documentos de respaldo?', a: 'Llévalos organizados por si el oficial los pide, pero entrega solo lo que solicite. Muchas entrevistas se deciden sin revisar la carpeta.' },
      { q: '¿Qué pasa si me falta un documento obligatorio?', a: 'Podrían no admitirte a la entrevista o tendrías que reprogramar. Revisa tu confirmación de cita con anticipación y verifica el código de barras del DS-160.' },
    ],
    sources: [SRC_VISAS, SRC_DS160],
    related: ['como-sacar-visa-americana-honduras', 'preguntas-entrevista-visa-americana', 'riesgo-de-rechazo-visa-perfil', 'me-negaron-la-visa-americana'],
    visaLinks: ALL_VISAS,
    ctaTitle: '¿No sabes qué documentos te convienen?',
    ctaText: 'Haz la evaluación gratuita y un asesor te orienta sobre cómo respaldar tu caso con lo que sí tienes.',
    help: {
      title: 'No improvises tu carpeta',
      intro: 'Qué documentos te convienen depende de tu situación. Llevar los equivocados, o de más, puede debilitar tu caso.',
      points: ['Un asesor revisa tu situación (empleo, negocio, estudios o familia) y define qué respaldo tiene sentido.', 'Verificamos que tus documentos cuenten la misma historia que tu DS-160.', 'Te decimos con honestidad qué puntos conviene fortalecer antes de la cita.', 'Te enseñamos cuándo y cómo presentarlos, para no entregar de más.'],
    },
  },

  // ───────────────────────────────────────────── 4
  'preguntas-entrevista-visa-americana': {
    slug: 'preguntas-entrevista-visa-americana',
    metaTitle: 'Preguntas de la entrevista de visa americana | Genius Visa',
    title: '¿Qué preguntas hacen en la entrevista de la visa americana?',
    eyebrow: 'Guía para hondureños',
    description: 'Las preguntas más comunes de la entrevista de visa americana en la Embajada, cómo responder con claridad y los errores que más cuestan. Guía para hondureños.',
    intro: 'La entrevista consular es breve y decide mucho. No hay un guion fijo, pero las preguntas suelen girar alrededor de las mismas ideas: a qué vas, por cuánto tiempo, cómo lo pagas y por qué volverás. Prepararte bien no es memorizar respuestas, sino conocer tu propia historia.',
    readMinutes: 6,
    quick: [
      'La entrevista suele ser breve; el oficial decide con tus respuestas y con lo que ve en tu solicitud.',
      'Las preguntas giran en torno al propósito del viaje, el tiempo, el trabajo, el dinero, la familia y tus viajes anteriores.',
      'Responde corto, directo y con la verdad. No memorices discursos.',
      'Tus respuestas deben coincidir con tu DS-160 y con tus documentos.',
    ],
    sections: [
      {
        h2: 'Cómo es la entrevista',
        paragraphs: [
          'Se hace en una ventanilla de la sección consular, normalmente de pie y en pocos minutos. El oficial revisa tu solicitud, te hace preguntas y te toma las huellas digitales. Al terminar te informa el resultado.',
          'Con tantas personas atendidas cada día, el oficial se forma una idea rápida. Por eso la claridad y la coherencia de tus primeras respuestas importan tanto.',
        ],
      },
      {
        h2: 'Preguntas que suelen hacer',
        lead: 'No son un guion: el oficial puede preguntar otras cosas. Úsalas para practicar con tus propias respuestas.',
        cards: [
          { title: 'Propósito del viaje', desc: '¿A qué va a Estados Unidos? ¿A qué ciudad? ¿Cuánto tiempo piensa quedarse? ¿Con quién va?' },
          { title: 'Trabajo y dinero', desc: '¿A qué se dedica? ¿Cuánto tiempo lleva en ese trabajo o negocio? ¿Quién paga el viaje?' },
          { title: 'Familia y vínculos', desc: '¿Con quién vive? ¿Quién se queda en Honduras mientras usted viaja? ¿Tiene familiares en Estados Unidos?' },
          { title: 'Historial', desc: '¿Ha viajado antes? ¿A dónde? ¿Le han negado una visa alguna vez?' },
        ],
      },
      {
        h2: 'Cómo responder',
        steps: [
          { title: 'Escucha toda la pregunta', desc: 'Responde exactamente lo que te preguntan, sin adelantarte ni dar discursos.' },
          { title: 'Sé específico', desc: 'Usa nombres, lugares, tiempos y cifras reales. Las respuestas vagas generan más preguntas.' },
          { title: 'Di la verdad', desc: 'Aunque tu historia no sea perfecta, una respuesta honesta y sencilla funciona mejor que una invención que se contradice.' },
          { title: 'Mantén coherencia con tu DS-160', desc: 'Lo que dices en la ventanilla debe coincidir con lo que escribiste en el formulario y con tus documentos.' },
          { title: 'Si no entiendes, pide que lo repitan', desc: 'Es mejor aclarar que responder algo distinto a lo que te preguntaron.' },
          { title: 'Mantén la calma y la cortesía', desc: 'Los nervios son normales. Respira, habla con claridad y no discutas con el oficial.' },
        ],
      },
      {
        h2: 'Errores que cuestan caro',
        bullets: [
          'Respuestas memorizadas, largas o que suenan ensayadas.',
          'Entregar la carpeta de documentos sin que la pidan.',
          'Contradecir lo que escribiste en el DS-160.',
          'Inventar datos o exagerar tu situación.',
          'No poder explicar con claridad a qué vas y cuánto tiempo.',
          'Mencionar planes de trabajar o quedarte en un viaje de turismo.',
        ],
      },
      {
        h2: 'Antes del día de tu cita',
        bullets: [
          'Relee tu DS-160 completo y confirma que todo coincide con tus documentos.',
          'Practica en voz alta con alguien que te haga preguntas.',
          'Revisa en tu confirmación de cita las reglas de ingreso a la Embajada.',
          'Llega con tiempo y con tus documentos organizados.',
          'Revisa lo que tienes publicado en redes: el DS-160 pide tus identificadores.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuánto dura la entrevista?', a: 'Suele ser breve, de pocos minutos. Por eso conviene saber explicar tu caso en pocas frases y con claridad.' },
      { q: '¿Debo hablar inglés?', a: 'Responde en el idioma en que puedas ser claro y seguro. Si no entiendes una pregunta, pide que la repitan en lugar de adivinar la respuesta.' },
      { q: '¿Qué hago si me pongo muy nervioso?', a: 'Respira antes de contestar, responde despacio y con frases cortas. Haber practicado con preguntas reales ayuda más que memorizar un texto.' },
      { q: '¿Y si me equivoco en una respuesta?', a: 'Si te das cuenta, corrígelo en el momento con calma. Una corrección honesta es mejor que dejar pasar una contradicción.' },
      { q: '¿Revisan mis redes sociales?', a: 'El DS-160 pide los identificadores de tus redes y debes declararlos con honestidad. Conviene revisar lo que tienes publicado antes de tu cita.' },
    ],
    sources: [SRC_VISAS],
    related: ['documentos-visa-turista-b1-b2', 'me-negaron-la-visa-americana', 'riesgo-de-rechazo-visa-perfil', 'como-sacar-visa-americana-honduras'],
    visaLinks: ALL_VISAS,
    ctaTitle: '¿Quieres practicar antes de tu entrevista?',
    ctaText: 'Un asesor puede revisar tu caso contigo y prepararte para explicar tu historia con claridad. Empieza con la evaluación gratuita.',
    help: {
      title: 'Practica antes del día de tu cita',
      intro: 'Tienes pocos minutos para explicar tu caso. Practicar con alguien que conoce el proceso marca la diferencia.',
      points: ['Simulamos las preguntas más comunes según tu tipo de visa y tu situación.', 'Te ayudamos a explicar tu historia con claridad, sin memorizar ni ensayar discursos.', 'Detectamos respuestas que pueden generar dudas y las trabajamos contigo.', 'Llegas con más seguridad y sabiendo qué esperar.'],
    },
  },

  // ───────────────────────────────────────────── 5
  'costo-tiempo-visa-americana-honduras': {
    slug: 'costo-tiempo-visa-americana-honduras',
    metaTitle: 'Costo y tiempo de la visa americana | Genius Visa',
    title: '¿Cuánto cuesta y cuánto tarda la visa americana en Honduras?',
    eyebrow: 'Guía para hondureños',
    description: 'Cuánto cuesta la visa americana en 2026, qué cargos adicionales existen, cuánto tarda cada etapa y cómo evitar pagar de más. Información de noviembre de 2026.',
    intro: 'El costo y el tiempo de la visa americana cambian con frecuencia, y hay datos sueltos por todas partes. Aquí separamos lo que es oficial de lo que todavía está en movimiento, para que sepas qué esperar y no pagues de más.',
    readMinutes: 6,
    quick: [
      'La tarifa consular de una visa B1/B2 o F1 es de 185 dólares y no se devuelve aunque te la nieguen.',
      'La ley de 2025 creó un cargo de 250 dólares (visa integrity fee) que se paga cuando la visa se emite; su aplicación ha sido gradual, así que confirma si ya aplica a tu caso.',
      'La visa F1 tiene además la tarifa SEVIS de 350 dólares.',
      'La espera por la cita ha variado desde pocos meses hasta más de un año; revisa el calendario oficial con frecuencia.',
    ],
    sections: [
      {
        h2: 'Cuánto cuesta: las tarifas oficiales',
        lead: 'Estos son los montos de referencia a noviembre de 2026. Confirma siempre el valor vigente en los sitios oficiales antes de pagar.',
        cards: [
          { title: 'Tarifa consular (MRV): 185 dólares', desc: 'Es el costo de la solicitud en visas como B1/B2 y F1. Se paga antes de la entrevista y no se devuelve si te la niegan.' },
          { title: 'Cargo de integridad de visa: 250 dólares', desc: 'Creado por ley en 2025 para casi todas las visas de no inmigrante, incluidos los dependientes. Se cobra cuando la visa se emite. Su implementación ha sido gradual: verifica cuándo y cómo se paga.' },
          { title: 'Tarifa SEVIS: 350 dólares (solo F1)', desc: 'La pagan los estudiantes con visa F1 y M1 después de recibir su I-20 y antes de la entrevista.' },
          { title: 'Visas de trabajo: costos del empleador', desc: 'En visas como la H1B, el empleador presenta una petición con costos propios. Eso es distinto de la tarifa consular del solicitante.' },
        ],
        note: 'Con ambos cargos, una visa de turista podría llegar a 435 dólares por persona. Los menores también pagan.',
      },
      {
        h2: 'Costos que casi nadie cuenta',
        bullets: [
          'Pasaporte nuevo o renovación, si lo necesitas.',
          'Transporte y hospedaje a Tegucigalpa el día de la cita, si vives en otra ciudad.',
          'Asesoría, si decides contratarla: es un servicio aparte, nunca parte de las tarifas oficiales.',
          'Tiquetes y hospedaje del viaje, pero solo después de tener la visa.',
        ],
      },
      {
        h2: 'Cuánto tarda cada etapa',
        steps: [
          { title: 'Llenar el DS-160', desc: 'Puede tomarte una o dos horas si tienes tus datos a la mano. Revísalo con calma antes de enviarlo.' },
          { title: 'Esperar la cita', desc: 'Es la etapa más larga y variable. En 2026 se han reportado esperas desde algunos meses hasta más de un año. Usa el sistema de citas oficial y revisa el calendario con frecuencia.' },
          { title: 'La entrevista', desc: 'Suele durar pocos minutos. El oficial te informa el resultado al terminar.' },
          { title: 'Después de la entrevista', desc: 'Si te aprueban, el consulado te explica cómo y cuándo recibirás tu pasaporte. Si tu caso queda en revisión administrativa (221(g)), puede tardar semanas o más.' },
        ],
      },
      {
        h2: 'Cómo no pagar de más ni perder tiempo',
        bullets: [
          'Usa solo los sitios oficiales para el DS-160, el pago y la cita.',
          'Desconfía de quien venda citas o prometa adelantar tu turno.',
          'Revisa tu DS-160 antes de agendar: un código que no coincide te puede dejar fuera de la entrevista.',
          'Guarda todos los recibos y confirmaciones.',
          'No apliques de nuevo con la misma información después de una negativa: pagarías otra tarifa sin cambiar el resultado.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuánto cuesta la visa americana en lempiras?', a: 'Los montos oficiales se pagan en dólares. En lempiras el valor cambia con el tipo de cambio del día en que pagas.' },
      { q: '¿Me devuelven la tarifa si me niegan la visa?', a: 'No. La tarifa consular no se devuelve aunque la visa sea negada. Por eso conviene fortalecer tu perfil antes de aplicar.' },
      { q: '¿Cuánto cobra un asesor?', a: 'Varía según el servicio y el caso. La asesoría es independiente de las tarifas oficiales, que se pagan al gobierno de EE. UU. y no al asesor. Pide siempre el detalle por escrito.' },
      { q: '¿Los menores de edad también pagan?', a: 'Sí. La tarifa consular se paga por solicitante, y el cargo de integridad también aplica a dependientes.' },
      { q: '¿Cuánto tarda hoy una cita en Honduras?', a: 'Cambia constantemente. Consulta el calendario del sistema de citas de la Embajada y la herramienta de tiempos de espera del Departamento de Estado el mismo día que vayas a planear.' },
    ],
    sources: [SRC_VISAS, SRC_SEVIS],
    related: ['como-sacar-visa-americana-honduras', 'visa-f1-estudiante-paso-a-paso', 'visa-h1b-quien-puede-aplicar', 'como-elegir-asesor-de-visas'],
    visaLinks: ALL_VISAS,
    ctaTitle: 'Antes de pagar, revisa tu perfil',
    ctaText: 'La tarifa no se devuelve. Una evaluación gratuita te ayuda a decidir si tu perfil está listo o conviene fortalecerlo primero.',
    help: {
      title: 'Que no te cueste dos veces',
      intro: 'La tarifa consular no se devuelve. Aplicar bien desde el inicio es la forma más barata de hacerlo.',
      points: ['Evaluamos tu perfil sin costo antes de que pagues la tarifa.', 'Te explicamos qué pagas al gobierno y qué corresponde a nuestro servicio, por escrito.', 'Te orientamos para evitar errores que te dejen fuera de la entrevista.', 'Te ayudamos a decidir si conviene aplicar ya o fortalecer algo primero.'],
    },
  },

  // ───────────────────────────────────────────── 6
  'visa-f1-estudiante-paso-a-paso': {
    slug: 'visa-f1-estudiante-paso-a-paso',
    metaTitle: 'Visa F1 de estudiante paso a paso | Genius Visa',
    title: '¿Cómo obtener la visa F1 de estudiante paso a paso?',
    eyebrow: 'Guía para estudiantes',
    description: 'Cómo obtener la visa F1 para estudiar en EE. UU.: I-20, tarifa SEVIS, DS-160, fondos, entrevista y tiempos. Guía actualizada para hondureños, noviembre de 2026.',
    intro: 'La visa F1 es para quienes van a estudiar tiempo completo en una institución aprobada de Estados Unidos. El proceso empieza mucho antes de la entrevista: primero necesitas tu admisión y el documento I-20. Esta guía te lleva en orden, con los puntos donde más se tropieza.',
    readMinutes: 7,
    quick: [
      'Primero la admisión: una institución aprobada (SEVP) te emite el formulario I-20.',
      'Pagas la tarifa SEVIS de 350 dólares y la tarifa consular de 185 dólares.',
      'Llenas el DS-160, agendas y asistes a la entrevista con tu I-20 y tus pruebas de fondos.',
      'Puedes recibir la visa hasta 365 días antes del inicio del programa, pero solo entrar a EE. UU. hasta 30 días antes.',
    ],
    sections: [
      {
        h2: 'Antes de la visa: admisión e I-20',
        paragraphs: [
          'Tu primer paso no es el consulado, sino la escuela. Debes ser admitido por una institución certificada por el programa SEVP, que registra tu caso y te emite el formulario I-20.',
          'El I-20 no es una carta de admisión: es el documento que necesitas para pagar la tarifa SEVIS, llenar el DS-160 y presentarte a la entrevista. Revisa que tus datos estén correctos y fírmalo.',
        ],
      },
      {
        h2: 'El proceso, paso a paso',
        steps: [
          { title: 'Recibe tu I-20', desc: 'Con la admisión, la escuela te envía el I-20 con tu número SEVIS. Verifica nombre, fechas y costos del programa.' },
          { title: 'Paga la tarifa SEVIS I-901', desc: 'Son 350 dólares para estudiantes F1 y M1. Págala después de recibir tu I-20 y con anticipación a la entrevista (se recomienda al menos 3 días antes) y guarda el recibo.' },
          { title: 'Llena el DS-160', desc: 'Usa el mismo nombre y datos de tu I-20. El formulario pide los identificadores de tus redes sociales de los últimos años.' },
          { title: 'Paga la tarifa consular y agenda tu cita', desc: 'La tarifa es de 185 dólares y no se devuelve. Agenda lo antes posible: las esperas en Honduras han sido largas.' },
          { title: 'Prepara tus documentos', desc: 'I-20 firmado, pasaporte, confirmación del DS-160, recibos de pago, documentos académicos y pruebas de fondos.' },
          { title: 'Asiste a la entrevista', desc: 'El oficial evaluará tu plan de estudios, cómo lo vas a pagar y tu intención de regresar a Honduras al terminar.' },
          { title: 'Planea tu viaje', desc: 'La visa puede emitirse hasta 365 días antes del inicio del programa, pero solo puedes entrar a EE. UU. hasta 30 días antes de la fecha de inicio de tu I-20.' },
        ],
      },
      {
        h2: 'Dinero: cómo demostrar que puedes pagar tus estudios',
        bullets: [
          'Debes mostrar de dónde saldrá el dinero para estudios y vida: familia, ahorros, beca o patrocinio.',
          'Los montos deben ser coherentes con los costos que aparecen en tu I-20.',
          'Estados de cuenta recientes y cartas de patrocinio, con documentos de quien paga.',
          'Evita depósitos grandes de último momento que no puedas justificar.',
        ],
      },
      {
        h2: 'El punto más delicado: demostrar que volverás',
        paragraphs: [
          'La F1 es una visa temporal. Aunque vayas a estudiar varios años, el oficial necesita ver que tu plan incluye regresar a Honduras después de graduarte.',
        ],
        cards: [
          { title: 'Un plan claro', desc: 'Explica por qué esa carrera, por qué esa escuela y cómo piensas aplicar lo aprendido a tu regreso.' },
          { title: 'Vínculos con Honduras', desc: 'Familia, oportunidades profesionales, negocio familiar u otras razones reales que te traerán de vuelta.' },
        ],
      },
      {
        h2: 'Redes sociales: qué cambió',
        bullets: [
          'El DS-160 pide tus identificadores de redes sociales de los últimos años. Declara todos con honestidad.',
          'Para solicitantes F, M y J, el Departamento de Estado indica mantener los perfiles públicos. Confirma las instrucciones vigentes.',
          'Revisa lo que tienes publicado: debe ser coherente con lo que dices.',
        ],
      },
      {
        h2: 'Trabajo y familia con visa F1',
        bullets: [
          'Con F1 puedes trabajar hasta 20 horas semanales en el campus durante el semestre.',
          'El programa OPT permite trabajar en tu campo de estudio después de graduarte, con tiempos que dependen de tu carrera.',
          'Tu cónyuge e hijos menores pueden acompañarte con visa F2, que no permite trabajar.',
        ],
      },
    ],
    faqs: [
      { q: '¿Con cuánta anticipación puedo sacar la visa F1?', a: 'La visa puede emitirse hasta 365 días antes del inicio de tu programa. Agenda con mucha anticipación, porque las esperas por cita han sido largas.' },
      { q: '¿Cuándo puedo viajar a Estados Unidos?', a: 'No antes de 30 días previos a la fecha de inicio que aparece en tu I-20, aunque tu visa ya esté emitida.' },
      { q: '¿Cuánto cuesta en total?', a: 'La tarifa SEVIS (350 dólares) y la tarifa consular (185 dólares) suman 535 dólares. Además existe un cargo de integridad de visa de 250 dólares que se cobra cuando la visa se emite; confirma si ya aplica en tu caso.' },
      { q: '¿Necesito hablar inglés para la entrevista?', a: 'Los requisitos de idioma los fija cada institución. En la entrevista el oficial evalúa que entiendas lo que se te pregunta y que puedas explicar tu plan de estudios con claridad.' },
      { q: '¿Qué pasa si me niegan la visa F1?', a: 'No se apela, pero puedes volver a aplicar con una solicitud nueva si tienes algo distinto que mostrar. Lee nuestra guía sobre qué hacer después de una negativa.' },
    ],
    sources: [SRC_VISAS, SRC_SEVIS, SRC_DS160],
    related: ['costo-tiempo-visa-americana-honduras', 'preguntas-entrevista-visa-americana', 'riesgo-de-rechazo-visa-perfil', 'como-sacar-visa-americana-honduras'],
    visaLinks: [
      { label: 'Visa F1 de estudiante', href: '/visas/f1' },
      { label: 'Visas familiares', href: '/visas/familiares' },
      { label: 'Visa de turista B1/B2', href: '/visas/b1-b2' },
      { label: 'Visa H1B de trabajo', href: '/visas/h1b' },
    ],
    ctaTitle: '¿Listo para estudiar en Estados Unidos?',
    ctaText: 'Evalúa tu perfil gratis y un asesor te ayuda a preparar tu plan de estudios, tus fondos y tu entrevista.',
    help: {
      title: 'Estudia en EE. UU. con un plan sólido',
      intro: 'La visa F1 exige coordinar admisión, I-20, SEVIS, fondos y entrevista. Un paso mal hecho puede atrasar tu inicio de clases.',
      points: ['Revisamos tu plan de estudios y cómo demostrarás tus fondos.', 'Te orientamos con el DS-160 y los documentos académicos y económicos.', 'Te ayudamos a explicar por qué esa carrera, esa escuela y tu plan de regresar.', 'Te preparamos para la entrevista consular de estudiante.'],
    },
  },

  // ───────────────────────────────────────────── 7
  'visa-h1b-quien-puede-aplicar': {
    slug: 'visa-h1b-quien-puede-aplicar',
    metaTitle: 'Visa H1B: quién puede aplicar y cómo | Genius Visa',
    title: '¿Cómo funciona la visa H1B y quién puede aplicar?',
    eyebrow: 'Guía para profesionales',
    description: 'Qué es la visa H1B, quién puede aplicar, cómo funciona el patrocinio del empleador, el cupo anual y los cambios recientes en costos. Guía de noviembre de 2026.',
    intro: 'La H1B es una visa de trabajo temporal para ocupaciones especializadas. Tiene una particularidad que sorprende a muchos: no la solicitas tú, la solicita una empresa de Estados Unidos que decide patrocinarte. Aquí entenderás cómo funciona, quién puede aplicar y qué está cambiando en 2026.',
    readMinutes: 7,
    quick: [
      'La H1B la solicita un empleador de EE. UU. a tu nombre; no puedes pedirla por tu cuenta.',
      'Es para ocupaciones especializadas, que normalmente exigen un título universitario relacionado con el puesto.',
      'Existe un cupo anual y un proceso de registro y selección que suele hacerse en marzo.',
      'Hay una medida de 100,000 dólares para ciertas peticiones nuevas de personas fuera de EE. UU. que está en disputa judicial y cambia con frecuencia. Confirma con el empleador antes de decidir.',
    ],
    sections: [
      {
        h2: 'Qué es y quién puede obtenerla',
        bullets: [
          'Debes tener una oferta de trabajo de una empresa de EE. UU. dispuesta a patrocinarte.',
          'El puesto debe ser una ocupación especializada, que normalmente requiere un título universitario o equivalente.',
          'Debes cumplir los requisitos del puesto, con estudios y experiencia que lo respalden.',
          'La empresa paga salario según el nivel que exige la ley para ese puesto y lugar.',
        ],
        note: 'La H1B no se compra ni se consigue pagando a un intermediario. Quien te cobre por “darte” una visa de trabajo probablemente es una estafa.',
      },
      {
        h2: 'Cómo es el proceso',
        steps: [
          { title: 'Oferta de empleo', desc: 'Una empresa de EE. UU. decide contratarte y patrocinar tu visa.' },
          { title: 'Condiciones laborales aprobadas', desc: 'La empresa presenta una solicitud de condiciones laborales ante el Departamento de Trabajo para respaldar el puesto y el salario.' },
          { title: 'Registro y selección', desc: 'Para la mayoría de casos nuevos existe un cupo anual (65,000 más 20,000 para quienes tienen maestría o más de una universidad de EE. UU.). Las empresas registran candidatos, normalmente en marzo, y se seleccionan algunos.' },
          { title: 'Petición ante USCIS', desc: 'Si te seleccionan, la empresa presenta la petición formal. USCIS la revisa y puede aprobarla.' },
          { title: 'Visa en el consulado', desc: 'Si estás en Honduras, con la petición aprobada llenas el DS-160 y vas a entrevista en la Embajada para el sello de la visa.' },
          { title: 'Entrada y estatus', desc: 'Ya en EE. UU. empiezas a trabajar con tu empleador. El estatus suele otorgarse por periodos de hasta tres años, con posibilidad de prórroga.' },
        ],
      },
      {
        h2: 'Lo que está cambiando: costos y medidas en 2026',
        bullets: [
          'En septiembre de 2025 se impuso un pago de 100,000 dólares para ciertas peticiones nuevas de personas que están fuera de EE. UU. En septiembre de 2026 la medida se extendió hasta septiembre de 2027, y ha estado en disputa en los tribunales.',
          'La medida no se aplica de la misma forma a quienes ya están dentro de EE. UU. y cambian de estatus o renuevan.',
          'También hay propuestas de nuevas tarifas para peticiones sujetas al cupo anual.',
          'Por eso, antes de aceptar una oferta, confirma con el empleador y su abogado qué costos y reglas aplican a tu caso hoy.',
        ],
      },
      {
        h2: 'Tu familia: visa H4',
        bullets: [
          'Tu cónyuge y tus hijos solteros menores de 21 años pueden acompañarte con visa H4.',
          'Cada integrante hace su propia solicitud y entrevista.',
          'La H4 permite vivir y estudiar en EE. UU.; la autorización para trabajar depende de condiciones específicas.',
        ],
      },
      {
        h2: 'Cuidado con las ofertas falsas',
        bullets: [
          'Un empleador real paga los costos del patrocinio y no te cobra por la visa.',
          'Verifica que la empresa exista, que el contacto sea real y que la oferta llegue por canales formales.',
          'Desconfía de ofertas que prometen la visa a cambio de dinero o que presionan para pagar rápido.',
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo aplicar a la H1B por mi cuenta?', a: 'No. La petición la presenta un empleador de EE. UU. en tu nombre. Lo que tú haces es cumplir los requisitos del puesto y completar tu parte del trámite consular.' },
      { q: '¿Qué es la lotería de la H1B?', a: 'Es el proceso de selección del cupo anual. Como hay más registros que cupos, se selecciona una parte de los candidatos que las empresas registran, normalmente en marzo.' },
      { q: '¿Cuánto cuesta una visa H1B?', a: 'Casi todos los costos de la petición los paga el empleador. Además, existe una medida de 100,000 dólares para ciertas peticiones nuevas de personas fuera de EE. UU., en disputa judicial. Confirma lo vigente con la empresa.' },
      { q: '¿Cuánto dura la H1B?', a: 'Normalmente se otorga por hasta tres años y puede prorrogarse hasta un máximo general de seis, con excepciones.' },
      { q: '¿Genius Visa Consultants hace la petición?', a: 'No. La petición la presenta el empleador, normalmente con su abogado. Nosotros orientamos sobre el proceso consular y la preparación para la entrevista.' },
    ],
    sources: [SRC_USCIS, SRC_VISAS, SRC_DS160],
    related: ['costo-tiempo-visa-americana-honduras', 'visa-familiares-como-pedirla', 'como-elegir-asesor-de-visas', 'como-sacar-visa-americana-honduras'],
    visaLinks: [
      { label: 'Visa H1B de trabajo', href: '/visas/h1b' },
      { label: 'Visas familiares', href: '/visas/familiares' },
      { label: 'Visa de turista B1/B2', href: '/visas/b1-b2' },
      { label: 'Visa F1 de estudiante', href: '/visas/f1' },
    ],
    ctaTitle: '¿Tienes una oferta de trabajo en EE. UU.?',
    ctaText: 'Habla con un asesor para entender la parte consular y preparar tu entrevista. La petición legal la maneja el empleador.',
    help: {
      title: 'Prepara la parte consular con experiencia',
      intro: 'Tu empleador y su abogado manejan la petición. Tu entrevista y tu formulario los preparas tú, y ahí te acompañamos.',
      points: ['Te explicamos el proceso para que sepas qué esperar en cada etapa.', 'Te orientamos con el DS-160 y los documentos de tu perfil profesional.', 'Te preparamos para la entrevista de visa de trabajo en la Embajada.', 'Te ayudamos a evaluar ofertas y a detectar señales de fraude.'],
    },
  },

  // ───────────────────────────────────────────── 8
  'visa-familiares-como-pedirla': {
    slug: 'visa-familiares-como-pedirla',
    metaTitle: 'Cómo pedir visa para familiares en EE. UU. | Genius Visa',
    title: '¿Cómo pedir la visa para mis familiares en Estados Unidos?',
    eyebrow: 'Guía para familias',
    description: 'Cómo pedir visa para tus familiares: petición familiar, visitas y visas para acompañantes, con los cambios de 2026 para hondureños. Guía de noviembre de 2026.',
    intro: '“Visa para mi familia” puede significar cosas muy distintas: que vengan de visita, que vivan contigo en Estados Unidos o que te acompañen mientras trabajas o estudias. Cada una tiene un camino diferente, así que lo primero es definir cuál es el tuyo.',
    readMinutes: 7,
    quick: [
      'Para que un familiar viva en EE. UU., el ciudadano o residente presenta una petición familiar; no es lo mismo que una visa de turista.',
      'Para una visita se usa la visa de turista (B2), que sigue otro proceso y otros requisitos.',
      'Para acompañar a quien trabaja o estudia existen visas de dependiente (H4, F2).',
      'En 2026 hubo cambios importantes para visas de inmigrante: Honduras estuvo en una pausa que un tribunal anuló en agosto, aunque sigue en litigio.',
    ],
    sections: [
      {
        h2: 'Primero define qué necesitas',
        cards: [
          { title: 'Que vengan de visita', desc: 'Se usa la visa de turista B2. No permite quedarse a vivir ni trabajar, y no depende de que tú vivas en EE. UU.' },
          { title: 'Que vivan en EE. UU. contigo', desc: 'Requiere una petición familiar que presenta un ciudadano o residente permanente. Es un proceso de inmigración, con más pasos y más tiempo.' },
          { title: 'Que te acompañen (trabajo o estudios)', desc: 'El cónyuge e hijos de quien tiene visa H1B (H4) o F1 (F2) pueden acompañarlo con una visa de dependiente.' },
          { title: 'Que se casen contigo en EE. UU.', desc: 'La visa de prometido(a) K-1 es para quien se casará con un ciudadano estadounidense dentro de un plazo determinado.' },
        ],
      },
      {
        h2: 'Quién puede pedir a quién',
        bullets: [
          'Si eres ciudadano estadounidense: puedes pedir a tu cónyuge, a tus hijos solteros menores de 21 años y a tus padres (si eres mayor de 21). Son familiares inmediatos y no dependen de un cupo anual.',
          'También puedes pedir a hijos mayores o casados y a hermanos, pero entran en categorías de preferencia con listas de espera.',
          'Si eres residente permanente: puedes pedir a tu cónyuge e hijos solteros, también en categorías con espera.',
        ],
        note: 'Los tiempos de espera de las categorías de preferencia se publican cada mes en el boletín de visas del Departamento de Estado.',
      },
      {
        h2: 'Cómo es el proceso de una petición familiar',
        steps: [
          { title: 'Petición ante USCIS', desc: 'Tu familiar en EE. UU. presenta la petición I-130 para demostrar la relación familiar.' },
          { title: 'Aprobación y traslado', desc: 'Si se aprueba, el caso pasa al Centro Nacional de Visas, que reúne documentos y pagos.' },
          { title: 'Documentos y apoyo económico', desc: 'Se presentan documentos civiles y una declaración de apoyo económico del patrocinador.' },
          { title: 'Espera de turno', desc: 'En categorías con cupo, debes esperar a que tu fecha de prioridad esté vigente según el boletín de visas.' },
          { title: 'Examen médico y entrevista', desc: 'El solicitante se hace un examen médico y asiste a la entrevista de visa de inmigrante en Tegucigalpa.' },
          { title: 'Visa de inmigrante y entrada', desc: 'Si se aprueba, se emite la visa. Al ingresar a EE. UU. se obtiene la residencia permanente.' },
        ],
      },
      {
        h2: 'Lo que cambió en 2026',
        bullets: [
          'El 21 de enero de 2026, Estados Unidos pausó la emisión de visas de inmigrante para ciudadanos de 75 países, y Honduras estaba en la lista.',
          'El 21 de agosto de 2026 un tribunal federal anuló esa pausa y el Departamento de Estado informó que dejó de estar en vigor, aunque el caso sigue en litigio y los casos afectados avanzan lentamente.',
          'La pausa no cubría las visas de no inmigrante, como turismo, estudio o trabajo temporal.',
          'La revisión de si el solicitante podría depender de beneficios públicos se ha vuelto más estricta, por lo que el apoyo económico del patrocinador es clave.',
        ],
        note: 'Las reglas de inmigración cambian por decisiones del gobierno y de los tribunales. Confirma la situación actual de tu caso con un abogado de inmigración.',
      },
      {
        h2: 'Si solo quieren visitarte',
        paragraphs: [
          'Para una visita corta usan la visa de turista B2. No necesitan petición familiar, pero sí demostrar que tienen vínculos que los traerán de vuelta a Honduras. Si te preocupa preparar ese caso, revisa nuestra guía de documentos.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuánto tarda una petición familiar?', a: 'Depende del parentesco. Los familiares inmediatos de ciudadanos no tienen cupo anual, pero igual toma meses o años. En categorías de preferencia puede tomar muchos años, según el boletín de visas.' },
      { q: '¿Mis hijos pueden viajar conmigo?', a: 'Depende de tu visa. Si tienes H1B o F1, tus hijos menores de 21 años solteros pueden acompañarte con H4 o F2. Si es una petición de inmigración, se evalúa cada caso por su categoría.' },
      { q: '¿Necesito un abogado de inmigración?', a: 'Para peticiones familiares conviene un abogado de inmigración autorizado, porque son trámites legales con consecuencias importantes. Nosotros orientamos sobre el proceso consular y la preparación para la entrevista.' },
      { q: '¿Un familiar con visa de turista puede quedarse a vivir?', a: 'No. La visa de turista es temporal y no permite trabajar ni establecerse. Intentar quedarse cuando se vence el permiso puede causar problemas serios en futuras solicitudes.' },
      { q: '¿Qué pasó con la pausa de visas de inmigrante?', a: 'Se anuló por un tribunal en agosto de 2026, aunque el gobierno busca apelar. Consulta la situación vigente de tu caso, porque puede cambiar.' },
    ],
    sources: [SRC_USCIS, SRC_VISAS],
    related: ['como-sacar-visa-americana-honduras', 'visa-h1b-quien-puede-aplicar', 'documentos-visa-turista-b1-b2', 'como-elegir-asesor-de-visas'],
    visaLinks: [
      { label: 'Visas familiares', href: '/visas/familiares' },
      { label: 'Visa de turista B1/B2', href: '/visas/b1-b2' },
      { label: 'Visa H1B de trabajo', href: '/visas/h1b' },
      { label: 'Visa F1 de estudiante', href: '/visas/f1' },
    ],
    ctaTitle: '¿No sabes cuál es el camino para tu familia?',
    ctaText: 'Cuéntanos tu situación y un asesor te orienta sobre el proceso, antes de que inviertas tiempo y dinero.',
    help: {
      title: 'Elige bien el camino para tu familia',
      intro: 'Visita, dependiente o petición familiar son procesos distintos. Elegir mal significa perder tiempo y dinero.',
      points: ['Revisamos tu caso y te explicamos qué opción corresponde a tu familia.', 'Preparamos el caso de visita o de acompañante para la entrevista.', 'Te orientamos sobre documentos y el proceso consular.', 'Te indicamos cuándo conviene además un abogado de inmigración autorizado.'],
    },
  },

  // ───────────────────────────────────────────── 9
  'como-elegir-asesor-de-visas': {
    slug: 'como-elegir-asesor-de-visas',
    metaTitle: 'Asesor de visas en Honduras: cómo elegir | Genius Visa',
    title: '¿Vale la pena contratar un asesor de visas? Cómo elegir uno confiable',
    eyebrow: 'Guía para hondureños',
    description: 'Por qué conviene contar con un asesor de visas, cómo distinguir uno serio de una estafa y qué incluye trabajar con Genius Visa Consultants desde Honduras.',
    intro: 'Nadie está obligado a contratar un asesor para pedir la visa americana. Pero la tarifa consular no se devuelve si te la niegan, y un error en el formulario o en la entrevista puede costarte meses o un año de espera. Por eso mucha gente prefiere ir acompañada. Esta guía te muestra cuándo vale la pena, cómo reconocer a un asesor serio y cómo trabajamos nosotros.',
    readMinutes: 6,
    quick: [
      'No es obligatorio, pero la tarifa no se devuelve y repetir el trámite cuesta dinero y tiempo.',
      'Un asesor serio ordena tu historia, revisa tu formulario y documentos, y te prepara para la entrevista.',
      'Ningún asesor puede garantizar la visa ni tiene contactos en el consulado. Quien lo prometa, te miente.',
      'En Genius Visa Consultants empezamos con una evaluación gratuita de tu perfil, sin compromiso, y te decimos con honestidad cómo se ve tu caso.',
    ],
    sections: [
      {
        h2: 'Por qué conviene ir acompañado',
        paragraphs: [
          'Puedes hacer el trámite solo en los sitios oficiales, y muchas personas lo logran. El problema es lo que pasa cuando algo sale mal: la tarifa de 185 dólares no se devuelve, hay que esperar otra cita y cada solicitud queda en tu historial.',
          'La mayoría de las negativas no se deben a que la persona no merezca la visa, sino a que no supo presentar su caso: una historia confusa, un formulario con datos que no coinciden o respuestas que no transmiten con claridad a qué va y por qué volverá. Eso es justo lo que un buen asesor te ayuda a evitar.',
        ],
        cards: [
          { title: 'Antes de pagar', desc: 'Revisamos tu perfil con honestidad para decirte si conviene aplicar ya o fortalecer algo primero.' },
          { title: 'En el formulario', desc: 'Te orientamos para que tu DS-160 cuente la misma historia que tus documentos, sin contradicciones.' },
          { title: 'En tus documentos', desc: 'Te ayudamos a decidir qué respaldo tiene sentido en tu situación y a presentarlo con orden.' },
          { title: 'En la entrevista', desc: 'Te preparamos para explicar tu caso con claridad, con tus propias palabras y con la verdad.' },
        ],
      },
      {
        h2: 'Cómo reconocer a un asesor confiable',
        lead: 'Úsala como lista para comparar a cualquier asesor, incluidos nosotros.',
        bullets: [
          'Te dice con claridad que no puede garantizar la visa.',
          'Te entrega un acuerdo por escrito con servicios, costo y condiciones.',
          'Explica que las tarifas consulares se pagan al gobierno de EE. UU., no a él.',
          'Tú llenas el formulario con tus datos reales; él te orienta, no lo inventa por ti.',
          'Te prepara para la entrevista sin dictarte respuestas falsas.',
          'Tiene experiencia comprobable, datos de contacto reales y responde por escrito.',
        ],
      },
      {
        h2: 'Señales de alerta: huye si ves esto',
        bullets: [
          'Promete “visa garantizada” o “aprobación asegurada”.',
          'Dice tener contactos en la Embajada o en el consulado.',
          'Vende citas o promete adelantar tu turno. Las citas se programan en el sistema oficial.',
          'Te pide inventar datos, falsificar documentos o decir cosas que no son ciertas.',
          'Te presiona para pagar ya, no da recibos o te pide la contraseña de tu cuenta oficial.',
          'No tiene dirección ni perfil verificable, o todo es por mensajes sin respaldo.',
        ],
        note: 'Mentir para obtener una visa puede llevar a perderla y a no poder regresar a EE. UU. Un asesor que te lo sugiere te pone en riesgo.',
      },
      {
        h2: 'Cómo trabajamos en Genius Visa Consultants',
        lead: 'Así se ve acompañarte con nosotros, de principio a fin.',
        steps: [
          { title: 'Evaluación gratuita de tu perfil', desc: 'Respondes unas preguntas en línea y te mostramos qué se ve fuerte en tu caso y qué conviene fortalecer. Sin costo y sin compromiso.' },
          { title: 'Conversación con un asesor', desc: 'Revisamos tu situación real: trabajo o negocio, estudios, familia, viajes previos y cualquier negativa anterior.' },
          { title: 'Estrategia para tu caso', desc: 'Definimos qué visa corresponde, cuándo conviene aplicar y qué puntos fortalecer antes de pagar la tarifa.' },
          { title: 'Formulario y documentos', desc: 'Te orientamos para que tu solicitud sea coherente y esté bien respaldada. Tú siempre revisas y apruebas cada dato.' },
          { title: 'Preparación de la entrevista', desc: 'Practicamos contigo para que expliques tu historia con claridad, seguridad y honestidad.' },
        ],
        note: 'No garantizamos la aprobación: la decisión es siempre del oficial consular. Lo que sí hacemos es ayudarte a presentar tu caso real de la mejor manera posible.',
      },
      {
        h2: 'Por qué las personas nos eligen',
        bullets: [
          'Más de 15 años de experiencia orientando solicitantes.',
          'Clientes atendidos en más de 25 países de Latinoamérica, el Caribe y Europa.',
          'Un enfoque honesto: te decimos la verdad sobre tu perfil, aunque no sea lo que esperabas oír.',
          'Un acuerdo claro por escrito y tarifas oficiales que pagas directamente al gobierno, nunca a nosotros.',
          'Oficina en Tegucigalpa y atención en español e inglés.',
        ],
      },
    ],
    faqs: [
      { q: '¿Es obligatorio contratar un asesor de visas?', a: 'No. Puedes hacer el trámite por tu cuenta. Un asesor te ayuda a presentar mejor tu caso y a evitar errores que cuestan tiempo y dinero, sobre todo porque la tarifa consular no se devuelve.' },
      { q: '¿Cuánto cobra un asesor de visas?', a: 'Depende del servicio y de la complejidad de tu caso. Empieza con nuestra evaluación gratuita y un asesor te explica con claridad qué incluye cada servicio y cuánto cuesta, por escrito.' },
      { q: '¿Un asesor puede conseguirme una cita más rápido?', a: 'No. Las citas se programan en el sistema oficial de la Embajada. Quien venda citas o prometa adelantar tu turno no está actuando de forma confiable.' },
      { q: '¿Genius puede garantizarme la visa?', a: 'No, y desconfía de cualquiera que lo haga. La decisión es exclusivamente del oficial consular. Lo que hacemos es ayudarte a presentar tu caso real con claridad, orden y preparación.' },
      { q: '¿Qué pasa si ya me negaron la visa?', a: 'Una negativa no cierra el camino. Antes de volver a aplicar conviene entender qué ocurrió y qué ha cambiado en tu caso. Un asesor puede revisarlo contigo para que no pagues otra tarifa sin cambiar nada.' },
      { q: '¿Necesito un abogado en lugar de un asesor?', a: 'Para trámites legales de inmigración, como peticiones familiares o casos con historial migratorio complejo, conviene además un abogado de inmigración autorizado. Para visas de no inmigrante, como turismo y estudio, te orientamos nosotros.' },
    ],
    sources: [SRC_VISAS],
    related: ['riesgo-de-rechazo-visa-perfil', 'como-sacar-visa-americana-honduras', 'me-negaron-la-visa-americana', 'costo-tiempo-visa-americana-honduras'],
    visaLinks: ALL_VISAS,
    ctaTitle: 'Empieza hoy con tu evaluación gratuita',
    ctaText: 'En pocos minutos conoces el punto de partida de tu perfil y un asesor de Genius te orienta sobre los siguientes pasos. Sin compromiso.',
  },

  // ───────────────────────────────────────────── 10
  'riesgo-de-rechazo-visa-perfil': {
    slug: 'riesgo-de-rechazo-visa-perfil',
    metaTitle: 'Riesgo de rechazo de visa: revisa tu perfil | Genius Visa',
    title: '¿Cómo saber si mi perfil tiene riesgo de rechazo antes de la entrevista?',
    eyebrow: 'Guía para hondureños',
    description: 'Qué evalúa el oficial consular y una autoevaluación para detectar puntos débiles de tu perfil antes de aplicar a la visa americana. Guía de noviembre de 2026.',
    intro: 'Nadie puede predecir con certeza qué decidirá un oficial consular, pero sí se pueden detectar los puntos débiles más comunes antes de pagar la tarifa, que no se devuelve. Esta guía te da una autoevaluación honesta para revisar tu perfil con ojos de oficial.',
    readMinutes: 6,
    quick: [
      'No existe un puntaje oficial de riesgo: la decisión se toma en la entrevista.',
      'El oficial mira el propósito del viaje, tus vínculos con Honduras, la coherencia económica, tu historial y la consistencia de tu solicitud.',
      'Detectar puntos débiles antes de aplicar es más barato que aplicar y esperar otra cita.',
      'Fortalece lo que sea real; nunca inventes ni exageres.',
    ],
    sections: [
      {
        h2: 'Qué mira el oficial consular',
        cards: [
          { title: 'Propósito claro', desc: 'Que puedas explicar en pocas frases a qué vas, por cuánto tiempo y dónde te quedarás.' },
          { title: 'Vínculos con Honduras', desc: 'Trabajo, negocio, estudios, familia, bienes u otras responsabilidades que hagan creíble tu regreso.' },
          { title: 'Coherencia económica', desc: 'Que tus ingresos, ahorros y el costo del viaje tengan sentido juntos, y que quede claro quién paga.' },
          { title: 'Historial migratorio y de viajes', desc: 'Visas anteriores, viajes previos, estancias que respetaron el tiempo permitido y negativas anteriores.' },
          { title: 'Consistencia', desc: 'Que lo que dices coincida con tu DS-160 y tus documentos.' },
        ],
      },
      {
        h2: 'Autoevaluación: revisa tu perfil',
        lead: 'Responde con honestidad. Cada “no” es un punto para trabajar antes de la cita.',
        bullets: [
          '¿Puedo explicar a qué voy y cuánto tiempo en dos frases claras?',
          '¿Mi situación actual (empleo, negocio o estudios) es estable y puedo comprobarla?',
          '¿Mis ingresos y ahorros son coherentes con el viaje que describo?',
          '¿Sé explicar quién paga el viaje y con qué dinero?',
          '¿Mi DS-160 coincide con mis documentos y con lo que voy a decir?',
          '¿Respeté el tiempo permitido en mis viajes anteriores, si los hay?',
          '¿Sé qué decir si me preguntan por una negativa anterior?',
          '¿Revisé lo que tengo publicado en redes sociales?',
        ],
      },
      {
        h2: 'Señales que conviene corregir antes de aplicar',
        cards: [
          { title: 'Una historia que no se sostiene', desc: 'Si tus respuestas suenan ensayadas o cambian según quién pregunte, genera desconfianza.' },
          { title: 'Dinero que no cuadra', desc: 'Depósitos recientes sin explicación o un viaje que cuesta mucho más de lo que tus ingresos permiten.' },
          { title: 'Documentos que no se pueden verificar', desc: 'Constancias de dudosa procedencia o hechas solo para la cita.' },
          { title: 'Negativas o problemas previos', desc: 'Una negativa anterior, o haberte quedado más tiempo del permitido, exige preparar con más cuidado tu explicación.' },
        ],
      },
      {
        h2: 'Lo que no decide un caso por sí solo',
        paragraphs: [
          'No haber viajado antes, no tener propiedades o ser joven no te descalifican. Cada caso se evalúa de forma individual y ninguna de estas situaciones decide por sí sola. Lo que importa es el conjunto y que tu historia sea creíble y consistente.',
        ],
      },
      {
        h2: 'Qué hacer con lo que encuentres',
        steps: [
          { title: 'Prioriza los puntos débiles', desc: 'Empieza por lo que más pesa: propósito, vínculos y coherencia económica.' },
          { title: 'Fortalece solo lo que sea real', desc: 'Si tu empleo es reciente, junta evidencias de tu permanencia. No fabriques ni exageres nada.' },
          { title: 'Ordena tus documentos', desc: 'Que todo cuente la misma historia que tu DS-160.' },
          { title: 'Practica tus respuestas', desc: 'En voz alta y con alguien que te interrumpa y repregunte.' },
          { title: 'Pide ayuda si hay un caso complejo', desc: 'Con una negativa previa o un historial complicado, conviene que un asesor lo revise antes de pagar otra tarifa.' },
        ],
      },
      {
        h2: 'Cómo te ayuda la evaluación de Genius',
        paragraphs: [
          'Nuestro evaluador en línea revisa tu perfil y te muestra qué puntos conviene fortalecer antes de aplicar. Es una orientación para que decidas mejor: no es una predicción ni una garantía, porque la decisión final es siempre del oficial consular.',
        ],
      },
    ],
    faqs: [
      { q: '¿Existe un puntaje oficial de riesgo de rechazo?', a: 'No. El Departamento de Estado no publica un puntaje. La decisión se toma en la entrevista, y las herramientas de evaluación, incluida la nuestra, son solo orientativas.' },
      { q: '¿Qué tan confiable es una evaluación en línea?', a: 'Sirve para detectar puntos débiles y ordenar tus ideas antes de aplicar. No puede predecir la decisión del oficial, y nadie puede prometerte un resultado.' },
      { q: '¿Me conviene aplicar si veo varios puntos débiles?', a: 'Suele convenir fortalecerlos primero, porque la tarifa consular no se devuelve si te niegan la visa. Aplicar con una base más sólida suele ser mejor que repetir el trámite.' },
      { q: '¿Una negativa anterior me perjudica?', a: 'No te cierra el camino, pero debes declararla con honestidad y preparar con más cuidado qué ha cambiado desde entonces. Lee nuestra guía sobre qué hacer después de una negativa.' },
      { q: '¿Puedo mejorar mi perfil rápido?', a: 'Algunos puntos sí, como ordenar documentos y practicar tus respuestas. Otros, como la estabilidad laboral, toman tiempo. Lo importante es que lo que muestres sea real.' },
    ],
    sources: [SRC_VISAS, SRC_DENIALS],
    related: ['me-negaron-la-visa-americana', 'preguntas-entrevista-visa-americana', 'documentos-visa-turista-b1-b2', 'como-elegir-asesor-de-visas'],
    visaLinks: ALL_VISAS,
    ctaTitle: 'Evalúa tu perfil antes de aplicar',
    ctaText: 'Es gratis, en línea y te muestra qué puntos conviene fortalecer antes de pagar la tarifa.',
    help: {
      title: 'Convierte tus puntos débiles en un plan',
      intro: 'Detectar el riesgo es el primer paso. Saber qué hacer con él es lo que cambia el resultado.',
      points: ['Nuestra evaluación gratuita te muestra qué se ve fuerte y qué conviene fortalecer.', 'Un asesor revisa contigo tu caso real y te propone cómo presentarlo mejor.', 'Te ayudamos a ordenar tu historia, tus documentos y tus respuestas.', 'Evitas pagar una tarifa que no se devuelve sin haber preparado tu caso.'],
    },
  },
}

export function guideUrl(slug: string) {
  return `${SITE_URL}/guias/${slug}`
}

export function guideMetadata(slug: string): Metadata {
  const g = guides[slug]
  const url = guideUrl(slug)
  return {
    title: g.metaTitle,
    description: g.description,
    alternates: { canonical: url },
    twitter: {
      card: 'summary_large_image',
      title: g.title,
      description: g.description,
      images: [`${SITE_URL}/images/viajero-genius-v2.png`],
    },
    openGraph: {
      title: g.title,
      description: g.description,
      url,
      siteName: 'Genius Visa Consultants',
      locale: 'es_HN',
      type: 'article',
      images: [{ url: `${SITE_URL}/images/viajero-genius-v2.png`, width: 1200, height: 630, alt: 'Genius Visa Consultants - Tu Movilidad Global' }],
    },
  }
}
