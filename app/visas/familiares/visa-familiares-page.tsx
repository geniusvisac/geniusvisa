import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Visas Familiares H4, F2, J2 | Genius Visa Consultants',
  description: 'Reúnete con tu familia en Estados Unidos. Asesoría experta para visas familiares H4, F2 y J2. Evaluación gratuita con IA. Honduras y Latinoamérica.',
  keywords: 'visa familiar estados unidos, visa h4, visa f2, visa j2, reunificacion familiar usa, visa dependiente americana',
  alternates: { canonical: `${SITE_URL}/visas/familiares` },
  openGraph: { url: `${SITE_URL}/visas/familiares` },
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'
const ACCENT = '#5A9E6F'

const visas = [
  { code: 'H4', title: 'Visa H4 — Dependiente de H1B', desc: 'La visa H4 está diseñada para los cónyuges e hijos menores de 21 años de titulares de visa H1B que trabajan en Estados Unidos. En algunos casos, los titulares de H4 pueden solicitar autorización de empleo (EAD) si su cónyuge H1B tiene aprobada una petición de residencia permanente en etapa avanzada.' },
  { code: 'F2', title: 'Visa F2 — Dependiente de Estudiante F1', desc: 'La visa F2 permite a los cónyuges e hijos menores de 21 años de titulares de visa F1 acompañar o unirse al estudiante durante su programa académico. Los titulares de F2 no están autorizados a trabajar ni a estudiar a tiempo completo en Estados Unidos.' },
  { code: 'J2', title: 'Visa J2 — Dependiente de Intercambio J1', desc: 'La visa J2 está destinada a los cónyuges e hijos menores de 21 años de titulares de visa J1. A diferencia de otras visas de dependiente, los titulares de J2 pueden solicitar autorización de empleo independiente del titular J1, lo que la convierte en una de las visas de dependiente más flexibles.' },
]

const faqs = [
  { q: '¿Puedo trabajar con visa H4?', a: 'En algunos casos sí. Los titulares de H4 pueden solicitar una Autorización de Empleo (EAD) si su cónyuge H1B tiene aprobada una petición I-140 de residencia permanente. Sin embargo, este beneficio ha estado sujeto a cambios regulatorios — nuestros asesores pueden darte información actualizada sobre el estatus de esta política.' },
  { q: '¿Mis hijos pueden estudiar?', a: 'Sí. Los hijos con visa H4, F2 o J2 pueden asistir a escuelas primarias y secundarias en Estados Unidos. Para estudios universitarios a tiempo completo necesitarían cambiar a una visa F1. Los hijos menores pueden ir a la escuela sin restricciones adicionales.' },
  { q: '¿Qué pasa si el titular principal pierde su visa?', a: 'Si el titular principal pierde su estatus migratorio, los dependientes también lo pierden. Es fundamental actuar con rapidez — tienes opciones como cambiar de estatus, salir del país o buscar un nuevo patrocinador. Nuestros asesores pueden orientarte en este proceso de ser necesario.' },
  { q: '¿Cuánto tiempo tarda el proceso?', a: 'El proceso de visa de dependiente suele tramitarse en paralelo con la del titular principal. Si el titular ya tiene su visa aprobada, el proceso para dependientes puede tomar entre 4 y 12 semanas dependiendo del consulado y la carga de trabajo. Aplicar con anticipación es clave.' },
]

const crossLinks = [
  { label: 'Ver Visa H1B — para el titular principal', href: '/visas/h1b', color: '#C9A84C' },
  { label: 'Ver Visa F1 — estudiantes internacionales', href: '/visas/f1', color: '#4A7FC1' },
  { label: 'Ver Visa B1/B2 — turismo y negocios', href: '/visas/b1-b2', color: '#3DB89E' },
]

export default function VisasFamiliares() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">

      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#1A3A3A]/95 backdrop-blur-md shadow-lg">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo-visa.webp" alt="Genius Visa Consultants" className="size-10 rounded-full" />
            <span className="hidden text-sm font-semibold tracking-widest uppercase text-white sm:block">Genius Visa Consultants</span>
          </a>
          <a href="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">← Volver al inicio</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center size-20 rounded-2xl mb-6 mx-auto" style={{ backgroundColor: `${ACCENT}20`, border: `1px solid ${ACCENT}40` }}>
            <span className="text-4xl">👨‍👩‍👧‍👦</span>
          </div>
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Visas de Dependiente</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">Visas Familiares<br/>H4 · F2 · J2</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">Reunirse con la familia no debería ser complicado. Te acompañamos en cada paso para que tus seres queridos puedan estar contigo en Estados Unidos.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>Evaluar mi perfil gratis →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">Hablar con un asesor</a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">¿Qué son las visas de dependiente?</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-4">Las visas de dependiente permiten a los familiares directos de titulares de visas de trabajo, estudio o intercambio acompañar o reunirse con ellos en Estados Unidos. Están diseñadas específicamente para cónyuges e hijos menores de 21 años.</p>
          <p className="text-[#1A3A3A]/70 leading-relaxed">El proceso de solicitud está vinculado al estatus del titular principal. Por eso es fundamental contar con asesoría experta que garantice que toda la documentación esté correctamente preparada.</p>
        </div>
      </section>

      {/* TIPOS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-10">Tipos de visa familiar</h2>
          <div className="space-y-6">
            {visas.map((visa) => (
              <div key={visa.code} className="rounded-2xl border p-8 hover:shadow-md transition-shadow" style={{ borderColor: `${ACCENT}30` }}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center justify-center size-12 rounded-xl font-heading font-black text-lg text-white" style={{ backgroundColor: ACCENT }}>{visa.code}</span>
                  <h3 className="font-heading text-xl font-bold text-[#1A3A3A]">{visa.title}</h3>
                </div>
                <p className="text-[#1A3A3A]/65 leading-relaxed text-sm">{visa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUISITOS */}
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">Requisitos generales</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Pasaporte vigente del solicitante con mínimo 6 meses de validez','Visa o estatus válido del titular principal (H1B, F1 o J1)','Formulario DS-160 completado para cada solicitante','Acta de matrimonio (para cónyuges) apostillada','Acta de nacimiento (para hijos) apostillada','Evidencia del estatus migratorio del titular principal','Comprobante de relación familiar con el titular','Pago de tarifa consular MRV por cada solicitante'].map((req) => (
              <div key={req} className="flex items-start gap-3 p-4 bg-white rounded-xl">
                <span className="font-bold mt-0.5" style={{ color: ACCENT }}>✓</span>
                <p className="text-[#1A3A3A]/75 text-sm leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">El proceso con Genius</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Evaluación del caso', desc: 'Revisamos el estatus del titular principal y determinamos la visa correcta y el mejor momento para aplicar.' },
              { num: '02', title: 'Preparación de documentos', desc: 'Organizamos toda la documentación familiar requerida, incluyendo actas apostilladas y formularios oficiales.' },
              { num: '03', title: 'Acompañamiento consular', desc: 'Preparamos a cada miembro de la familia para la entrevista consular y los acompañamos en todo el proceso.' },
            ].map((step) => (
              <div key={step.num} className="bg-[#F8F6F1] rounded-2xl p-6 border-t-4" style={{ borderColor: ACCENT }}>
                <span className="font-heading text-4xl font-black" style={{ color: ACCENT }}>{step.num}</span>
                <h3 className="font-heading text-lg font-bold text-[#1A3A3A] mt-2 mb-3">{step.title}</h3>
                <p className="text-[#1A3A3A]/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#1A3A3A] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-white font-bold mb-10">Preguntas frecuentes — Visas Familiares</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/10 transition-colors">
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: ACCENT }}>{faq.q}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: ACCENT }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-white font-bold mb-4">¿Listo para reunir a tu familia?</h2>
          <p className="text-white/80 mb-8">Contáctanos ahora y un asesor experto revisará tu caso de forma personalizada y gratuita.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">Evaluar mi perfil gratis →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-white hover:text-[#1A3A3A] transition-colors">WhatsApp: +504 9741-0936</a>
          </div>
        </div>
      </section>

      {/* CROSS LINKS */}
      <section className="bg-[#0D2222] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/50 text-sm text-center mb-6 uppercase tracking-widest">También te puede interesar</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {crossLinks.map((link) => (
              <a key={link.href} href={link.href} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                <span className="size-2 rounded-full shrink-0" style={{ backgroundColor: link.color }} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="bg-[#0D2222] py-6 px-6 text-center border-t border-white/5">
        <a href="/" className="text-sm hover:opacity-80 transition-opacity" style={{ color: ACCENT }}>← Volver al inicio</a>
        <p className="text-white/30 text-xs mt-2">© 2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
      </div>
    </main>
  )
}
