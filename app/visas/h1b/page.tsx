import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Visas de Trabajo H1B, H2B y J1 | Genius Visa Consultants',
  description: 'Obtén tu visa de trabajo H1B, H2B o J1 para trabajar en Estados Unidos. Asesoría experta. Evaluación gratuita con IA. Honduras y Latinoamérica.',
  keywords: 'visa h1b, visa h2b, visa j1, visa trabajo estados unidos, visa profesional americana, trabajar en usa',
  alternates: { canonical: `${SITE_URL}/visas/h1b` },
  openGraph: { url: `${SITE_URL}/visas/h1b` },
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'
const ACCENT = '#C9A84C'

const visas = [
  { code: 'H1B', title: 'Visa H1B — Trabajador Especializado', desc: 'La visa H1B permite a profesionales en ocupaciones especializadas trabajar temporalmente en Estados Unidos para un empleador específico que los patrocina. Está dirigida a profesionales con título universitario en campos como tecnología, ingeniería, medicina, arquitectura y contabilidad. Tiene un límite anual de 85,000 visas nuevas asignadas mediante sorteo.' },
  { code: 'H2B', title: 'Visa H2B — Trabajador Temporal No Agrícola', desc: 'La visa H2B permite a empleadores estadounidenses contratar trabajadores extranjeros para empleos temporales no agrícolas cuando no hay suficientes trabajadores locales. Es común en hotelería, restaurantes, construcción, paisajismo y servicios de limpieza. Tiene un límite de 66,000 visas anuales divididas en dos períodos semestrales.' },
  { code: 'J1', title: 'Visa J1 — Intercambio Cultural y Profesional', desc: 'La visa J1 es una visa de intercambio que permite a extranjeros participar en programas educativos y culturales aprobados en Estados Unidos. Está disponible para au pairs, estudiantes, profesores, investigadores, médicos, trabajadores en campamentos de verano, trainees e interns. Muchos programas J1 tienen un requisito de residencia en el país de origen por dos años.' },
]

const faqs = [
  { q: '¿Qué es el sorteo H1B y cuándo es?', a: 'El sorteo H1B (lottery) ocurre cada año en abril. Las empresas registran a sus candidatos en marzo, y el USCIS selecciona aleatoriamente 85,000 solicitudes (65,000 del cap general + 20,000 para personas con maestría de universidades estadounidenses). Si no eres seleccionado, puedes volver a intentarlo el siguiente año.' },
  { q: '¿Puedo cambiar de empleador con H1B?', a: 'Sí. La visa H1B está atada a tu empleador, pero puedes transferirla a un nuevo empleador siempre que este presente una nueva petición H1B ante el USCIS. El proceso se llama "H1B Transfer" y puedes comenzar a trabajar para el nuevo empleador tan pronto como la petición sea recibida por el USCIS.' },
  { q: '¿Mi familia puede acompañarme?', a: 'Sí. Tu cónyuge e hijos menores de 21 años pueden solicitar la visa H4. En algunos casos, los titulares de H4 pueden solicitar autorización de empleo (EAD) si su cónyuge H1B tiene aprobada una petición de residencia permanente en etapa avanzada.' },
  { q: '¿Qué pasa si pierdo mi trabajo?', a: 'Si tu empleador cancela tu H1B o te despide, tienes un período de gracia de 60 días para encontrar un nuevo empleador que transfiera tu visa, cambiar a otro estatus migratorio válido o salir del país. Es fundamental actuar rápido — nuestros asesores pueden orientarte en este proceso.' },
]

const crossLinks = [
  { label: 'Lleva a tu familia — Ver Visas Familiares (H4)', href: '/visas/familiares', color: '#5A9E6F' },
  { label: '¿Visa aprobada? Planea tu viaje con Genius VC Travel', href: '/viajes', color: '#3DB89E' },
]

export default function VisasTrabajo() {
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
            <span className="text-4xl">💼</span>
          </div>
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Visas de Trabajo</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">Visas de Trabajo<br/>H1B · H2B · J1</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">Trabajar legalmente en Estados Unidos requiere la visa correcta y la preparación adecuada. Te guiamos en cada etapa del proceso para maximizar tus probabilidades de éxito.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-[#1A3A3A] hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>Evaluar mi perfil gratis →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">Hablar con un asesor</a>
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">Visas de trabajo disponibles</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-10">El tipo de visa que necesitas depende de tu perfil profesional, el tipo de empleo y la duración del contrato. Te ayudamos a identificar cuál es la mejor opción para tu caso.</p>
          <div className="space-y-6">
            {visas.map((visa) => (
              <div key={visa.code} className="rounded-2xl border bg-white p-8 hover:shadow-md transition-shadow" style={{ borderColor: `${ACCENT}30` }}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center justify-center size-12 rounded-xl font-heading font-black text-lg text-[#1A3A3A]" style={{ backgroundColor: ACCENT }}>{visa.code}</span>
                  <h3 className="font-heading text-xl font-bold text-[#1A3A3A]">{visa.title}</h3>
                </div>
                <p className="text-[#1A3A3A]/65 leading-relaxed text-sm">{visa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUISITOS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">Requisitos generales</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Oferta o contrato de trabajo de empleador o programa aprobado','Pasaporte vigente con mínimo 6 meses de validez','Formulario DS-160 completado correctamente','Petición aprobada por USCIS (según tipo de visa)','Comprobante de calificaciones académicas y experiencia','Certificado de elegibilidad del programa (para J1)','Evidencia de la naturaleza temporal del empleo (para H2B)','Carta de oferta de trabajo detallando cargo, duración y salario'].map((req) => (
              <div key={req} className="flex items-start gap-3 p-4 bg-[#F8F6F1] rounded-xl">
                <span className="font-bold mt-0.5" style={{ color: ACCENT }}>✓</span>
                <p className="text-[#1A3A3A]/75 text-sm leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">El proceso con Genius</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Identificación de visa', desc: 'Analizamos tu perfil profesional y el tipo de empleo para determinar qué visa se adapta mejor a tu situación.' },
              { num: '02', title: 'Preparación de documentos', desc: 'Coordinamos con tu empleador o programa patrocinador y preparamos toda la documentación requerida.' },
              { num: '03', title: 'Preparación consular', desc: 'Te preparamos para la entrevista consular con enfoque en demostrar tu calificación y la legitimidad del empleo.' },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border-t-4" style={{ borderColor: ACCENT }}>
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
          <h2 className="font-heading text-3xl text-white font-bold mb-10">Preguntas frecuentes — Visas de Trabajo</h2>
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
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-4">¿Listo para trabajar en Estados Unidos?</h2>
          <p className="text-[#1A3A3A]/70 mb-8">Contáctanos y un asesor especializado evaluará tu caso de forma personalizada y gratuita.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#1A3A3A] text-white px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">Evaluar mi perfil gratis →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-[#1A3A3A] text-[#1A3A3A] px-8 py-4 rounded-full font-medium text-sm hover:bg-[#1A3A3A] hover:text-white transition-colors">WhatsApp: +504 9741-0936</a>
          </div>
        </div>
      </section>

      {/* CROSS LINKS */}
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

      {/* FOOTER */}
      <div className="bg-[#0D2222] py-6 px-6 text-center border-t border-white/5">
        <a href="/" className="text-sm hover:opacity-80 transition-opacity" style={{ color: ACCENT }}>← Volver al inicio</a>
        <p className="text-white/30 text-xs mt-2">© 2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
      </div>
    </main>
  )
}
