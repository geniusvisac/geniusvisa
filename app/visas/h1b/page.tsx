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

const visas = [
  { code: 'H1B', title: 'Visa H1B — Trabajador Especializado', desc: 'La visa H1B permite a profesionales en ocupaciones especializadas trabajar temporalmente en Estados Unidos para un empleador específico que los patrocina. Está dirigida a profesionales con título universitario o equivalente en campos como tecnología, ingeniería, medicina, arquitectura, contabilidad y otros. El empleador debe demostrar que no encontró trabajadores calificados locales y debe pagar el salario prevaleciente del mercado. La visa H1B tiene un límite anual de 85,000 visas nuevas y su asignación se realiza mediante un sorteo.' },
  { code: 'H2B', title: 'Visa H2B — Trabajador Temporal No Agrícola', desc: 'La visa H2B permite a empleadores estadounidenses contratar trabajadores extranjeros para empleos temporales no agrícolas cuando no hay suficientes trabajadores locales disponibles. Es común en sectores como hotelería, restaurantes, construcción, paisajismo, transporte y servicios de limpieza. El empleador debe demostrar la necesidad temporal del trabajo ya sea por demanda pico, necesidad de una sola vez, trabajo estacional o trabajo intermitente. Tiene un límite de 66,000 visas anuales divididas en dos períodos semestrales.' },
  { code: 'J1', title: 'Visa J1 — Intercambio Cultural y Profesional', desc: 'La visa J1 es una visa de intercambio que permite a extranjeros participar en programas educativos y culturales aprobados en Estados Unidos. Está disponible para una amplia variedad de categorías incluyendo au pairs, estudiantes, profesores, investigadores, médicos, trabajadores en campamentos de verano, trainees (practicantes) e interns (internos). Muchos programas J1 tienen un requisito de residencia en el país de origen por dos años después de completar el programa antes de poder cambiar a otro estatus migratorio.' },
]

export default function VisasTrabajo() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Visas de Trabajo</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">Visas de Trabajo<br/>H1B · H2B · J1</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">Trabajar legalmente en Estados Unidos requiere la visa correcta y la preparación adecuada. Te guiamos en cada etapa del proceso para maximizar tus probabilidades de éxito.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">Evaluar mi perfil gratis →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">Hablar con un asesor</a>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">Visas de trabajo disponibles</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-10">El tipo de visa de trabajo que necesitas depende de tu perfil profesional, el tipo de empleo y la duración del contrato. Te ayudamos a identificar cuál es la mejor opción para tu caso específico.</p>
          <div className="space-y-6">
            {visas.map((visa) => (
              <div key={visa.code} className="rounded-2xl border border-[#1A3A3A]/10 bg-white p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center justify-center size-12 rounded-xl bg-[#1A3A3A] text-[#C9A84C] font-heading font-black text-lg">{visa.code}</span>
                  <h3 className="font-heading text-xl font-bold text-[#1A3A3A]">{visa.title}</h3>
                </div>
                <p className="text-[#1A3A3A]/65 leading-relaxed text-sm">{visa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">Requisitos generales</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Oferta o contrato de trabajo de empleador o programa aprobado','Pasaporte vigente con mínimo 6 meses de validez','Formulario DS-160 completado correctamente','Petición aprobada por USCIS (según tipo de visa)','Comprobante de calificaciones académicas y experiencia','Certificado de elegibilidad del programa (para J1)','Evidencia de la naturaleza temporal del empleo (para H2B)','Carta de oferta de trabajo detallando cargo, duración y salario'].map((req) => (
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
              { num: '01', title: 'Identificación de visa', desc: 'Analizamos tu perfil profesional y el tipo de empleo para determinar qué visa se adapta mejor a tu situación.' },
              { num: '02', title: 'Preparación de documentos', desc: 'Coordinamos con tu empleador o programa patrocinador y preparamos toda la documentación requerida.' },
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
          <p className="text-white/60 mb-8">Contáctanos y un asesor especializado evaluará tu caso de forma personalizada y gratuita.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#C9A84C] text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">Evaluar mi perfil gratis →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">WhatsApp: +504 9741-0936</a>
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
