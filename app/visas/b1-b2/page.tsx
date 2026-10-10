import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Visa B1/B2 de Turismo y Negocios | Genius Visa Consultants',
  description: 'Obtén tu visa americana B1/B2 con ayuda de expertos. Evaluación gratuita con IA. Más de 15 años de experiencia. Tegucigalpa, Honduras.',
  keywords: 'visa b1 b2, visa turismo americana, visa negocios estados unidos',
  alternates: {
    canonical: `${SITE_URL}/visas/b1-b2`,
    languages: {
      'es-HN': `${SITE_URL}/visas/b1-b2`,
      'en': `${SITE_URL}/en/visas/b1-b2`,
      'x-default': `${SITE_URL}/visas/b1-b2`,
    },
  },
  openGraph: {
    title: 'Visa B1/B2 de Turismo y Negocios | Genius Visa Consultants',
    description: 'Obtén tu visa americana B1/B2 con ayuda de expertos. Evaluación gratuita con IA. Más de 15 años de experiencia. Tegucigalpa, Honduras.',
    url: `${SITE_URL}/visas/b1-b2`,
    siteName: 'Genius Visa Consultants',
    locale: 'es_HN',
    type: 'website',
  },
}

const EVAL_URL = '/evaluacion'
const WA_URL = 'https://wa.me/50497410936'
const ACCENT = '#3DB89E'

const faqs = [
  { q: `¿Cuánto tiempo tarda el proceso?`, a: `En promedio, desde que solicitas la cita hasta la entrevista puede tomar entre 2 y 8 semanas en Honduras.` },
  { q: `¿Puedo trabajar con visa B1/B2?`, a: `No. La visa B1/B2 no autoriza empleo remunerado. Si tu objetivo es trabajar, necesitas una visa H1B, H2B o J1.` },
  { q: `¿Qué pasa si me niegan la visa?`, a: `Una negativa no es definitiva. En Genius analizamos el motivo y construimos una estrategia de reingreso.` },
  { q: `¿Puedo renovar sin entrevista?`, a: `En algunos casos sí, mediante el programa Interview Waiver. Tu asesor Genius puede evaluar si calificas.` },
]

const crossLinks = [
  { label: '¿Visa aprobada? Planea tu viaje con Genius VC Travel', href: '/viajes', color: '#3DB89E' },
  { label: '¿Tu familia quiere acompañarte? Ver Visas Familiares', href: '/visas/familiares', color: '#C9A84C' },
]

export default function VisaB1B2() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 bg-[#1A3A3A]/95 backdrop-blur-md shadow-lg">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo-visa.webp" alt="Genius Visa Consultants" className="size-10 rounded-full" />
            <span className="hidden text-sm font-semibold tracking-widest uppercase text-white sm:block">Genius Visa Consultants</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/en/visas/b1-b2" className="text-xs text-white/40 hover:text-white/70 transition-colors">🇺🇸 English</a>
            <a href="/" className="text-sm text-white/70 hover:text-white transition-colors">← Inicio</a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center size-20 rounded-2xl mb-6 mx-auto" style={{ backgroundColor: ACCENT + '20', border: '1px solid ' + ACCENT + '40' }}>
            <span className="text-4xl">🛂</span>
          </div>
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Visa de No Inmigrante</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">Visa B1/B2<br/>Turismo y Negocios</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">La visa más solicitada para viajar a Estados Unidos por turismo, visitar familia o recibir tratamiento médico.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-[#1A3A3A] hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>Evaluar mi perfil gratis →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">Hablar con un asesor</a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">Requisitos principales</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[`Pasaporte vigente con mínimo 6 meses de validez`, `Formulario DS-160 completado correctamente`, `Foto reciente según especificaciones`, `Comprobante de pago de tarifa consular MRV`, `Carta de invitación o itinerario de viaje`, `Estados de cuenta bancarios de los últimos 3-6 meses`, `Carta laboral o comprobante de ingresos`, `Documentos que demuestren lazos de arraigo al país`].map((req) => (
              <div key={req} className="flex items-start gap-3 p-4 bg-[#F8F6F1] rounded-xl">
                <span className="font-bold mt-0.5" style={{ color: ACCENT }}>✓</span>
                <p className="text-[#1A3A3A]/75 text-sm leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">El proceso con Genius</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
            { num: '01', title: 'Evaluación gratuita', desc: 'Analizamos tu perfil con IA y te decimos tu probabilidad real de aprobación.' },
            { num: '02', title: 'Preparación completa', desc: 'Revisamos toda tu documentación, llenamos el DS-160 y te preparamos para la entrevista.' },
            { num: '03', title: 'Acompañamiento total', desc: 'Te acompañamos hasta el día de tu entrevista y te preparamos para cada pregunta.' },
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

      <section className="bg-[#1A3A3A] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-white font-bold mb-10">Preguntas frecuentes — Visa B1/B2</h2>
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

      <section className="py-20 px-6" style={{ backgroundColor: ACCENT }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-4">¿Listo para obtener tu visa B1/B2?</h2>
          <p className="text-[#1A3A3A]/70 mb-8">Empieza con una evaluación gratuita y descubre tu probabilidad de aprobación en 2 minutos.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} className="inline-flex items-center justify-center bg-[#1A3A3A] text-white px-8 py-4 rounded-full font-bold text-sm hover:opacity-90">Evaluar mi perfil gratis →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-[#1A3A3A] text-[#1A3A3A] px-8 py-4 rounded-full font-medium text-sm hover:bg-[#1A3A3A] hover:text-white transition-colors">WhatsApp: +504 9741-0936</a>
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

      <div className="bg-[#0D2222] py-6 px-6 text-center border-t border-white/5">
        <a href="/" className="text-sm hover:opacity-80 transition-opacity" style={{ color: ACCENT }}>← Volver al inicio</a>
        <p className="text-white/30 text-xs mt-2">© 2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
      </div>
    </main>
  )
}
