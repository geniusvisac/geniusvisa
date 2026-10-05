import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Visas de Estudio F1 y M1 | Genius Visa Consultants',
  description: 'Obtén tu visa de estudiante F1 o M1 para estudiar en Estados Unidos. Evaluación gratuita con IA. Expertos en visas americanas. Honduras y Latinoamérica.',
  keywords: 'visa f1, visa m1, visa estudiante estados unidos, visa academica americana, estudiar en usa, visa f1 Honduras',
  alternates: { canonical: `${SITE_URL}/visas/f1` },
  openGraph: { url: `${SITE_URL}/visas/f1` },
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'
const ACCENT = '#4A7FC1'

const visas = [
  { code: 'F1', title: 'Visa F1 — Estudiante Académico', desc: 'La visa F1 es la más común para estudiantes internacionales y permite cursar un programa académico a tiempo completo en universidades, colegios, seminarios, conservatorios e institutos académicos aprobados por el SEVP. Los titulares de F1 pueden trabajar hasta 20 horas semanales dentro del campus durante el período académico y tiempo completo durante vacaciones.' },
  { code: 'M1', title: 'Visa M1 — Estudiante Vocacional', desc: 'La visa M1 está diseñada para estudiantes que desean cursar programas vocacionales o de formación técnica no académica en instituciones aprobadas por el SEVP. Es ideal para programas de cocina, mecánica, cosmetología, aviación y diseño de modas. A diferencia de la F1, los titulares de M1 no pueden trabajar durante sus estudios.' },
]

const faqs = [
  { q: '¿Necesito hablar inglés perfectamente?', a: 'No necesariamente. Muchas instituciones tienen requisitos de idioma propios — algunas aceptan estudiantes con nivel intermedio si el programa incluye clases de inglés intensivo. Lo importante es tener una carta de admisión válida de una institución aprobada por el SEVP.' },
  { q: '¿Puedo trabajar mientras estudio?', a: 'Con visa F1 puedes trabajar hasta 20 horas semanales dentro del campus durante el año académico y tiempo completo en vacaciones. También existe el programa OPT (Optional Practical Training) que te permite trabajar en tu campo de estudio por hasta 12 meses (o 36 meses para carreras STEM) después de graduarte.' },
  { q: '¿Qué pasa si cambio de universidad?', a: 'Puedes transferirte a otra institución aprobada por SEVP, pero debes notificar a tu universidad actual y asegurarte de que la nueva emita un nuevo formulario I-20 antes de iniciar clases. El proceso debe hacerse correctamente para no perder tu estatus F1.' },
  { q: '¿Puedo traer a mi familia?', a: 'Sí. Tu cónyuge e hijos menores de 21 años pueden solicitar la visa F2. Sin embargo, los titulares de F2 no pueden trabajar ni estudiar a tiempo completo en Estados Unidos. Nuestro equipo puede asesorarte para tramitar ambas visas en paralelo.' },
]

const crossLinks = [
  { label: 'Lleva a tu familia contigo — Ver Visas Familiares (F2)', href: '/visas/familiares', color: '#5A9E6F' },
  { label: '¿Después de graduarte? Conoce la Visa H1B', href: '/visas/h1b', color: '#C9A84C' },
]

export default function VisasEstudio() {
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
            <span className="text-4xl">🎓</span>
          </div>
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Visas de Estudiante</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">Visas de Estudio<br/>F1 · M1</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">Estudiar en Estados Unidos es una de las inversiones más importantes de tu vida. Te acompañamos en cada paso para que llegues con la mejor preparación posible.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>Evaluar mi perfil gratis →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">Hablar con un asesor</a>
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">Visas de estudiante disponibles</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-10">Estados Unidos ofrece dos tipos principales de visa para estudiantes internacionales. La diferencia clave está en el tipo de institución y programa — académico o vocacional.</p>
          <div className="space-y-6">
            {visas.map((visa) => (
              <div key={visa.code} className="rounded-2xl border bg-white p-8 hover:shadow-md transition-shadow" style={{ borderColor: `${ACCENT}30` }}>
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
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">Requisitos principales</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Carta de admisión de institución aprobada por SEVP','Formulario I-20 emitido por la institución educativa','Pasaporte vigente con mínimo 6 meses de validez','Formulario DS-160 completado correctamente','Pago de tarifa SEVIS (I-901)','Comprobante de solvencia económica para cubrir estudios y gastos','Demostración de lazos con tu país de origen','Dominio del idioma del programa o carta con requisito de idioma'].map((req) => (
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
              { num: '01', title: 'Evaluación gratuita', desc: 'Analizamos tu perfil académico y financiero con IA para determinar tu probabilidad de aprobación y qué visa aplica a tu caso.' },
              { num: '02', title: 'Preparación de documentos', desc: 'Te ayudamos a organizar toda la documentación requerida, incluyendo el DS-160, el I-20 y la evidencia de solvencia económica.' },
              { num: '03', title: 'Preparación para entrevista', desc: 'Te preparamos para responder las preguntas específicas de la visa de estudiante con confianza y claridad.' },
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
          <h2 className="font-heading text-3xl text-white font-bold mb-10">Preguntas frecuentes — Visa F1/M1</h2>
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
          <h2 className="font-heading text-3xl text-white font-bold mb-4">¿Listo para estudiar en Estados Unidos?</h2>
          <p className="text-white/80 mb-8">Empieza con una evaluación gratuita y descubre tu probabilidad de aprobación en 2 minutos.</p>
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
