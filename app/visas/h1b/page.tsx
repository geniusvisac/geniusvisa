import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visa H1B de Trabajo | Genius Visa Consultants',
  description: 'Obtén tu visa de trabajo H1B para trabajar en Estados Unidos. Asesoría especializada para profesionales. Evaluación gratuita. Honduras y Latinoamérica.',
  keywords: 'visa h1b, visa trabajo estados unidos, visa profesional americana, trabajar en usa, visa h1b Honduras',
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'

export default function VisaH1B() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Visa de Trabajo</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
            Visa H1B<br/>Trabajador Especializado
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            La visa H1B permite a profesionales en ocupaciones especializadas trabajar temporalmente en Estados Unidos para un empleador específico que los patrocina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
              Evaluar mi perfil gratis →
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">
              Hablar con un asesor
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">¿Qué es la visa H1B?</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-4">
            La visa H1B es una visa de no inmigrante para trabajadores en ocupaciones que requieren conocimientos teóricos y prácticos especializados, generalmente con un título universitario o equivalente. Es una de las vías más comunes para que profesionales internacionales trabajen legalmente en Estados Unidos.
          </p>
          <p className="text-[#1A3A3A]/70 leading-relaxed">
            A diferencia de otras visas, la H1B requiere que un empleador estadounidense te patrocine. El empleador debe demostrar que no encontró trabajadores calificados locales y debe pagar el salario prevaleciente del mercado para el puesto.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">Requisitos principales</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Oferta de trabajo de un empleador estadounidense patrocinador',
              'Título universitario o equivalente en el campo especializado',
              'Petición I-129 aprobada por USCIS',
              'Pasaporte vigente con mínimo 6 meses de validez',
              'Formulario DS-160 completado',
              'Comprobante de calificaciones académicas y experiencia',
              'Carta de oferta de trabajo detallando cargo y salario',
              'Evidencia de que el puesto requiere especialización',
            ].map((req) => (
              <div key={req} className="flex items-start gap-3 p-4 bg-[#F8F6F1] rounded-xl">
                <span className="text-[#C9A84C] font-bold mt-0.5">✓</span>
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
              { num: '01', title: 'Evaluación de perfil', desc: 'Analizamos tu perfil profesional y académico para determinar tu elegibilidad y estrategia óptima.' },
              { num: '02', title: 'Coordinación con empleador', desc: 'Te asesoramos en la comunicación con tu empleador patrocinador y en la preparación de la petición I-129.' },
              { num: '03', title: 'Preparación consular', desc: 'Te preparamos para la entrevista consular con enfoque en demostrar tu calificación y la legitimidad del empleo.' },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm">
                <span className="font-heading text-4xl font-black text-[#C9A84C]">{step.num}</span>
                <h3 className="font-heading text-lg font-bold text-[#1A3A3A] mt-2 mb-3">{step.title}</h3>
                <p className="text-[#1A3A3A]/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A3A3A] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-white font-bold mb-4">¿Listo para trabajar en Estados Unidos?</h2>
          <p className="text-white/60 mb-8">Contáctanos y un asesor especializado evaluará tu caso de forma personalizada.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#C9A84C] text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
              Evaluar mi perfil gratis →
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">
              WhatsApp: +504 9741-0936
            </a>
          </div>
        </div>
      </section>

      <div className="bg-[#0D2222] py-6 px-6 text-center">
        <a href="/" className="text-[#C9A84C] text-sm hover:opacity-80 transition-opacity">← Volver al inicio</a>
        <p className="text-white/30 text-xs mt-2">© 2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
      </div>
    </main>
  )
}
