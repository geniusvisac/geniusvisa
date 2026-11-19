import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

const PATH = '/guias/me-negaron-la-visa-americana'
const PAGE_URL = `${SITE_URL}${PATH}`
const TITLE = '¿Me negaron la visa americana? Qué significa y qué hacer ahora'
const DESCRIPTION =
  'Te negaron la visa americana: qué significan 214(b) y 221(g), si puedes volver a aplicar y qué errores evitar. Guía para hondureños.'

export const metadata: Metadata = {
  title: 'Me negaron la visa americana | Genius Visa Consultants',
  description: DESCRIPTION,
  keywords:
    'me negaron la visa americana, visa negada 214b, 221g visa, volver a aplicar visa americana, rechazo visa Honduras, qué hacer si me niegan la visa',
  alternates: {
    canonical: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/images/viajero-genius-v2.png`],
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Genius Visa Consultants',
    locale: 'es_HN',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/images/viajero-genius-v2.png`,
        width: 1200,
        height: 630,
        alt: 'Genius Visa Consultants - Tu Movilidad Global',
      },
    ],
  },
}

const EVAL_URL = '/evaluacion'
const WA_URL = 'https://wa.me/50497410936'
const ACCENT = '#C9A84C'
const OFFICIAL_DENIALS_URL =
  'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-denials.html'

const refusalTypes = [
  {
    code: '214(b)',
    title: 'No convencí al oficial de que volveré a mi país',
    desc: 'Es la negativa más común en visas de visitante. El oficial no quedó convencido de que tu viaje sería temporal, normalmente porque no vio lazos suficientemente sólidos con Honduras (trabajo, familia, negocio, estudios, bienes). No es una prohibición permanente: aplica únicamente a esa solicitud, y puedes volver a aplicar con una solicitud nueva.',
    tone: 'Se puede volver a intentar, pero con algo nuevo que mostrar.',
  },
  {
    code: '221(g)',
    title: 'Faltó información o documentos',
    desc: 'El oficial necesita más datos para decidir. Te entregan una carta que indica qué debes presentar o si tu caso pasa a revisión administrativa. No es un “no” definitivo: es un caso que quedó pendiente. Sigue al pie de la letra lo que pide la carta.',
    tone: 'Es un caso abierto, no cerrado. Entrega lo que piden y espera.',
  },
  {
    code: '212(a)',
    title: 'Otras causas de inadmisibilidad',
    desc: 'Incluye situaciones más serias: antecedentes, estancias irregulares anteriores en EE. UU. o información falsa en una solicitud previa. Estos casos tienen consecuencias distintas y requieren revisar tu historial completo antes de dar cualquier paso.',
    tone: 'Aquí no conviene improvisar: primero se analiza el caso completo.',
  },
]

const commonReasons = [
  `Lazos débiles o poco demostrables con Honduras: empleo reciente o informal, sin negocio registrado, sin bienes o sin responsabilidades familiares claras.`,
  `Propósito del viaje poco claro: no poder explicar en pocas palabras a qué vas, cuánto tiempo, dónde te quedas y quién paga.`,
  `Respuestas que no coinciden con el formulario DS-160 o con lo que dicen tus documentos.`,
  `Situación económica que no cuadra con el viaje: el costo del viaje, tus ingresos y tus ahorros no tienen coherencia.`,
  `Documentos que no se pueden verificar o que parecen armados solo para la cita.`,
  `Errores o contradicciones en el DS-160, como fechas, empleo o viajes anteriores mal declarados.`,
  `Nerviosismo que se confunde con inseguridad: respuestas memorizadas, demasiado largas o que parecen ensayadas.`,
]

const nextSteps = [
  { title: 'Guarda el papel que te dieron', desc: 'Ahí aparece la sección de la ley por la que te negaron. Es la pista más importante para decidir qué hacer. No lo pierdas ni lo tires.' },
  { title: 'Anota lo que pasó en la entrevista, hoy mismo', desc: 'Escribe las preguntas que te hicieron, cómo respondiste y en qué momento cambió el tono. Con el tiempo se olvida, y esos detalles ayudan a entender qué no quedó claro.' },
  { title: 'No vuelvas a aplicar de inmediato con lo mismo', desc: 'Repetir la solicitud con la misma información y los mismos documentos rara vez cambia el resultado. Antes de pagar otra vez, necesitas saber qué vas a mostrar distinto.' },
  { title: 'Identifica qué cambió o qué puedes demostrar mejor', desc: 'Un empleo estable con constancia laboral, un negocio formalizado, estudios en curso, propiedades, historial de viajes a otros países o un propósito de viaje mejor planificado. Lo importante es que sea real y comprobable.' },
  { title: 'Revisa tu DS-160 completo', desc: 'Cualquier dato que no coincida con lo que dijiste en la entrevista puede pesar. Si encuentras un error, corrígelo en la nueva solicitud y no lo repitas.' },
  { title: 'Practica la entrevista', desc: 'No se trata de memorizar respuestas, sino de explicar con claridad quién eres, a qué vas, cuánto tiempo y por qué volverás. Practicar en voz alta, con alguien que te haga preguntas, marca la diferencia.' },
  { title: 'Presenta una solicitud nueva', desc: 'Para volver a aplicar necesitas llenar un nuevo formulario, pagar la tarifa consular otra vez y agendar una nueva cita. Revisa siempre los montos y requisitos vigentes en el sitio oficial de la Embajada.' },
]

const mistakes = [
  { t: 'Mentir o presentar documentos falsos', d: 'Es lo que más daño hace. Una negativa por falta de lazos se puede superar; una por información falsa puede traer consecuencias muy serias y duraderas.' },
  { t: 'Pagarle a alguien que te “garantiza” la visa', d: 'Nadie puede garantizar una visa: la decisión es solo del oficial consular. Desconfía de quien lo prometa o te pida dinero para “mover” tu caso.' },
  { t: 'Comprar tiquetes y hoteles antes de tener la visa', d: 'Si la visa no sale, ese dinero se pierde. No son un requisito para aplicar.' },
  { t: 'Cambiar tu historia para “sonar mejor”', d: 'Si en la segunda cita tus respuestas contradicen la primera, el oficial lo nota. Ten tu historia real, bien organizada y demostrable.' },
  { t: 'Aplicar una y otra vez sin analizar qué falló', d: 'Cada solicitud cuesta dinero y deja un historial. Conviene aplicar cuando haya algo nuevo que mostrar, no por insistir.' },
]

const faqs = [
  {
    q: '¿Puedo apelar si me negaron la visa americana?',
    a: 'No existe una apelación en el proceso de visa de visitante. La negativa corresponde a esa solicitud específica. Lo que sí puedes hacer es volver a aplicar con una solicitud nueva cuando tengas información o documentos distintos que demostrar.',
  },
  {
    q: '¿Cuánto tiempo debo esperar para volver a aplicar?',
    a: 'En una negativa por 214(b) no hay un plazo fijo establecido por la ley. Lo importante no es el tiempo, sino que hayan cambiado tus circunstancias de forma significativa o que puedas presentar evidencia nueva. Aplicar de nuevo con la misma información casi nunca cambia el resultado.',
  },
  {
    q: '¿Tengo que pagar de nuevo si vuelvo a aplicar?',
    a: 'Sí. Según el Departamento de Estado, si vuelves a aplicar después de una negativa debes llenar una nueva solicitud, pagar la tarifa consular otra vez y agendar una nueva entrevista. La excepción son los casos 221(g), donde se completa la documentación pedida sobre la misma solicitud. Revisa los montos vigentes en el sitio oficial, porque las tarifas cambian.',
  },
  {
    q: '¿Una negativa me impide viajar a Estados Unidos para siempre?',
    a: 'Una negativa 214(b) no es una prohibición permanente. Es distinto si hubo información falsa o violaciones migratorias anteriores, que pueden tener consecuencias más largas. Por eso es importante conocer el motivo exacto antes de decidir.',
  },
  {
    q: '¿Debo declarar en mi nueva solicitud que me negaron la visa antes?',
    a: 'Sí. Siempre responde con la verdad. El formulario pregunta por negativas anteriores y el consulado tiene tu historial. Ocultarlo es un error grave que puede convertir un problema solucionable en uno mucho más difícil.',
  },
  {
    q: '¿Qué hago si me dieron una carta 221(g)?',
    a: 'Lee con atención qué documentos o pasos te piden y cumple exactamente con eso, siguiendo las instrucciones de la carta. Puedes consultar el estado de tu caso en el sistema oficial del Departamento de Estado (CEAC) con tu número de caso. Los tiempos varían según cada situación.',
  },
  {
    q: '¿Puede Genius Visa Consultants garantizar que me aprueben la visa?',
    a: 'No. Ninguna empresa puede garantizarlo, porque la decisión es exclusivamente del oficial consular. Lo que hacemos es revisar tu caso con honestidad, ayudarte a ordenar tu historia y tus documentos, y prepararte para que presentes tu perfil real de la mejor manera posible.',
  },
]

const crossLinks = [
  { label: 'Visa de turista B1/B2: requisitos y proceso', href: '/visas/b1-b2', color: '#3DB89E' },
  { label: 'Visa F1 de estudiante', href: '/visas/f1', color: '#C9A84C' },
  { label: 'Visa H1B de trabajo', href: '/visas/h1b', color: '#3DB89E' },
  { label: 'Visas familiares', href: '/visas/familiares', color: '#C9A84C' },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${PAGE_URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      inLanguage: 'es',
      datePublished: '2026-11-18',
      dateModified: '2026-11-18',
      mainEntityOfPage: PAGE_URL,
      image: `${SITE_URL}/images/viajero-genius-v2.png`,
      author: { '@type': 'Organization', name: 'Genius Visa Consultants', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'Genius Visa Consultants',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo-visa.png` },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Me negaron la visa americana', item: PAGE_URL },
      ],
    },
  ],
}

export default function MeNegaronLaVisa() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />

      <header className="fixed inset-x-0 top-0 z-50 bg-[#1A3A3A]/95 backdrop-blur-md shadow-lg">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo-visa.webp" alt="Genius Visa Consultants" className="size-10 rounded-full" />
            <span className="hidden text-sm font-semibold tracking-widest uppercase text-white sm:block">Genius Visa Consultants</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm text-white/70 hover:text-white transition-colors">← Inicio</a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Guía para hondureños</span>
          <h1 className="font-heading text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
            ¿Me negaron la visa americana? Qué significa y qué hacer ahora
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Respira. Una negativa no es el fin del camino. No se puede apelar, pero sí puedes volver a aplicar con una solicitud nueva, siempre que tengas algo distinto y real que demostrar.
          </p>
          <p className="text-white/40 text-xs">Actualizado: noviembre de 2026 · Lectura de 6 minutos</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-7 border-l-4 bg-[#F8F6F1]" style={{ borderColor: ACCENT }}>
            <h2 className="font-heading text-2xl text-[#1A3A3A] font-bold mb-4">Respuesta rápida</h2>
            <ul className="space-y-3 text-[#1A3A3A]/80 leading-relaxed">
              <li><strong>1.</strong> Lee el papel que te dieron: la sección de la ley (por ejemplo, 214(b) o 221(g)) te dice qué pasó.</li>
              <li><strong>2.</strong> Si fue 214(b), no es una prohibición permanente. Significa que no se demostraron suficientes lazos con tu país.</li>
              <li><strong>3.</strong> Si fue 221(g), tu caso sigue abierto: entrega lo que te piden en la carta.</li>
              <li><strong>4.</strong> Para volver a aplicar necesitas una solicitud nueva, otra tarifa y otra cita. Hazlo cuando tengas algo nuevo que mostrar, no antes.</li>
              <li><strong>5.</strong> Nunca mientas ni presentes documentos falsos. Es lo único que realmente complica un caso.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-3">Primero, entiende qué dice tu negativa</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-10 max-w-3xl">
            Al terminar tu entrevista, el oficial consular te entrega un papel que cita una sección de la ley de inmigración. Estos son los tres casos que más se ven.
          </p>
          <div className="space-y-6">
            {refusalTypes.map((r) => (
              <div key={r.code} className="bg-white rounded-2xl p-7 shadow-sm border-t-4" style={{ borderColor: ACCENT }}>
                <span className="font-heading text-3xl font-black" style={{ color: ACCENT }}>{r.code}</span>
                <h3 className="font-heading text-xl font-bold text-[#1A3A3A] mt-2 mb-3">{r.title}</h3>
                <p className="text-[#1A3A3A]/70 leading-relaxed text-sm mb-3">{r.desc}</p>
                <p className="text-[#1A3A3A] text-sm font-semibold">{r.tone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-3">Por qué suelen negar una visa de turista</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-8 max-w-3xl">
            Cada caso es distinto y el oficial decide en pocos minutos, pero estas son las situaciones que más se repiten.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {commonReasons.map((reason) => (
              <div key={reason} className="flex items-start gap-3 p-4 bg-[#F8F6F1] rounded-xl">
                <span className="font-bold mt-0.5" style={{ color: ACCENT }}>•</span>
                <p className="text-[#1A3A3A]/75 text-sm leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-10">Qué hacer ahora, paso a paso</h2>
          <div className="space-y-5">
            {nextSteps.map((s, i) => (
              <div key={s.title} className="flex gap-5 bg-white rounded-2xl p-6 shadow-sm">
                <span className="font-heading text-4xl font-black shrink-0" style={{ color: ACCENT }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#1A3A3A] mb-2">{s.title}</h3>
                  <p className="text-[#1A3A3A]/65 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-3">¿Cuándo conviene volver a aplicar?</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-4 max-w-3xl">
            En una negativa 214(b) no hay un tiempo mínimo de espera fijado por la ley. Lo que cuenta es que tu situación sea realmente distinta o que tengas evidencia nueva de tus lazos con Honduras. El Departamento de Estado indica que quien vuelve a aplicar después de una negativa debe presentar una solicitud nueva y pagar de nuevo la tarifa.
          </p>
          <p className="text-[#1A3A3A]/70 leading-relaxed max-w-3xl">
            Un buen momento para volver a intentar es cuando puedes responder “sí” a esta pregunta: <strong className="text-[#1A3A3A]">¿hay algo importante que el oficial no sabía o no pudo comprobar la vez anterior?</strong> Si la respuesta es no, vale más esperar y fortalecer tu perfil antes de gastar otra tarifa.
          </p>
        </div>
      </section>

      <section className="bg-[#1A3A3A] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-white font-bold mb-10">Errores que complican tu caso</h2>
          <div className="space-y-5">
            {mistakes.map((m) => (
              <div key={m.t} className="rounded-2xl bg-white/5 border border-white/10 p-7">
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: ACCENT }}>{m.t}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-10">Preguntas frecuentes sobre una visa negada</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-[#1A3A3A] mb-3">{faq.q}</h3>
                <p className="text-[#1A3A3A]/70 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ backgroundColor: ACCENT }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-4">Antes de volver a aplicar, revisemos tu perfil</h2>
          <p className="text-[#1A3A3A]/70 mb-8">
            Nuestra evaluación gratuita te muestra qué tan sólido se ve hoy tu perfil y qué puntos conviene fortalecer. Si tu caso es complejo, un asesor lo revisa contigo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} className="inline-flex items-center justify-center bg-[#1A3A3A] text-white px-8 py-4 rounded-full font-bold text-sm hover:opacity-90">Evaluar mi perfil gratis →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-[#1A3A3A] text-[#1A3A3A] px-8 py-4 rounded-full font-medium text-sm hover:bg-[#1A3A3A] hover:text-white transition-colors">Hablar con un asesor</a>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2222] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/50 text-sm text-center mb-6 uppercase tracking-widest">También te puede interesar</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {crossLinks.map((link) => (
              <a key={link.href} href={link.href} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                <span className="size-2 rounded-full shrink-0" style={{ backgroundColor: link.color }} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2222] pb-12 px-6">
        <div className="max-w-3xl mx-auto border-t border-white/10 pt-8">
          <p className="text-white/50 text-xs leading-relaxed">
            <strong className="text-white/70">Fuentes oficiales:</strong>{' '}
            <a href={OFFICIAL_DENIALS_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80">Departamento de Estado de EE. UU. — Visa Denials</a>
            .{' '}Los requisitos, tarifas y procedimientos cambian: confirma siempre la información vigente en el sitio oficial del Departamento de Estado y en el de la Embajada de EE. UU. en Honduras.
          </p>
          <p className="text-white/40 text-xs leading-relaxed mt-3">
            Genius Visa Consultants es una empresa de asesoría. No somos el consulado ni una entidad del gobierno de EE. UU., y no garantizamos la aprobación de ninguna visa: la decisión final corresponde siempre a las autoridades consulares. Esta guía es informativa y no sustituye la revisión de tu caso particular.
          </p>
        </div>
      </section>

      <div className="bg-[#0D2222] py-6 px-6 text-center border-t border-white/5">
        <a href="/" className="text-sm hover:opacity-80 transition-opacity" style={{ color: ACCENT }}>← Volver al inicio</a>
        <p className="text-white/30 text-xs mt-2">© 2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
      </div>
    </main>
  )
}
