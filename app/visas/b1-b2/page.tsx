import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visa B1/B2 de Turismo y Negocios | Genius Visa Consultants',
  description: 'Obtén tu visa americana B1/B2 de turismo y negocios con ayuda de expertos. Evaluación gratuita con IA. Más de 15 años de experiencia. Tegucigalpa, Honduras.',
  keywords: 'visa b1 b2, visa turismo americana, visa negocios estados unidos, visa americana Honduras',
  alternates: {
    canonical: 'https://genius-visa-and-travel.vercel.app/visas/b1-b2',
  },
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'

export default function VisaB1B2() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      {/* Hero */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Visa de No Inmigrante</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
            Visa B1/B2<br/>Turismo y Negocios
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            La visa B1/B2 es la más solicitada para viajar a Estados Unidos por turismo, visitar familia, asistir a conferencias de negocios o recibir tratamiento médico.
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

      {/* Que es */}
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">¿Qué es la visa B1/B2?</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-4">
            La visa B1/B2 es una visa de visitante temporal que permite ingresar a Estados Unidos por razones de turismo (B2) o negocios (B1). Es la visa más común y generalmente se otorga por períodos de hasta 10 años con múltiples entradas.
          </p>
          <p className="text-[#1A3A3A]/70 leading-relaxed">
            Con la visa B2 puedes visitar lugares turísticos, visitar familiares o amigos, recibir tratamiento médico o participar en eventos sociales. Con la B1 puedes asistir a reuniones de negocios, conferencias, negociar contratos o resolver asuntos comerciales, siempre que no recibas pago de una fuente estadounidense.
          </p>
        </div>
      </section>

      {/* Requisitos */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">Requisitos principales</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Pasaporte vigente con mínimo 6 meses de validez',
              'Formulario DS-160 completado correctamente',
              'Foto reciente según especificaciones del Departamento de Estado',
              'Comprobante de pago de tarifa consular MRV',
              'Carta de invitación o itinerario de viaje',
              'Estados de cuenta bancarios de los últimos 3-6 meses',
              'Carta laboral o comprobante de ingresos',
              'Documentos que demuestren lazos de arraigo al país',
            ].map((req) => (
              <div key={req} className="flex items-start gap-3 p-4 bg-[#F8F6F1] rounded-xl">
                <span className="text-[#C9A84C] font-bold mt-0.5">✓</span>
                <p className="text-[#1A3A3A]/75 text-sm leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">El proceso con Genius</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Evaluación gratuita', desc: 'Analizamos tu perfil con IA y te decimos tu probabilidad real de aprobación antes de invertir un centavo.' },
              { num: '02', title: 'Preparación completa', desc: 'Revisamos y preparamos toda tu documentación, llenamos el DS-160 y te preparamos para la entrevista consular.' },
              { num: '03', title: 'Acompañamiento total', desc: 'Te acompañamos hasta el día de tu entrevista y te preparamos para cada pregunta que el oficial podría hacerte.' },
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

      {/* CTA */}
      <section className="bg-[#1A3A3A] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-white font-bold mb-4">¿Listo para obtener tu visa B1/B2?</h2>
          <p className="text-white/60 mb-8">Empieza con una evaluación gratuita y descubre tu probabilidad de aprobación en 2 minutos.</p>
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

      {/* Footer simple */}
      <div className="bg-[#0D2222] py-6 px-6 text-center">
        <a href="/" className="text-[#C9A84C] text-sm hover:opacity-80 transition-opacity">← Volver al inicio</a>
        <p className="text-white/30 text-xs mt-2">© 2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
      </div>
    </main>
  )
}
