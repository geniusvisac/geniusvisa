import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visa F1 de Estudiante | Genius Visa Consultants',
  description: 'Obtén tu visa de estudiante F1 para estudiar en Estados Unidos. Evaluación gratuita con IA. Expertos en visas americanas. Honduras y Latinoamérica.',
  keywords: 'visa f1, visa estudiante estados unidos, visa academica americana, estudiar en usa, visa f1 Honduras',
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'

export default function VisaF1() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Visa de Estudiante</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
            Visa F1<br/>Estudiante Académico
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            La visa F1 te permite estudiar a tiempo completo en universidades, colegios, seminarios, conservatorios, institutos académicos y escuelas de idiomas certificadas en Estados Unidos.
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
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">¿Qué es la visa F1?</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-4">
            La visa F1 es una visa de no inmigrante para estudiantes internacionales que desean cursar un programa académico a tiempo completo en una institución educativa aprobada por el SEVP (Student and Exchange Visitor Program) en Estados Unidos.
          </p>
          <p className="text-[#1A3A3A]/70 leading-relaxed">
            Para obtener la visa F1, primero debes ser admitido por una institución aprobada y recibir el formulario I-20. Una vez admitido, puedes solicitar la visa en la embajada o consulado de Estados Unidos más cercano.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">Requisitos principales</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Carta de admisión de institución aprobada por SEVP',
              'Formulario I-20 emitido por la institución educativa',
              'Pasaporte vigente con mínimo 6 meses de validez',
              'Formulario DS-160 completado correctamente',
              'Pago de tarifa SEVIS (I-901)',
              'Comprobante de solvencia económica para cubrir estudios y gastos',
              'Demostración de lazos con tu país de origen',
              'Dominio del idioma inglés o carta de programa en español',
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
              { num: '01', title: 'Evaluación gratuita', desc: 'Analizamos tu perfil académico y financiero con IA para determinar tu probabilidad de aprobación.' },
              { num: '02', title: 'Preparación de documentos', desc: 'Te ayudamos a organizar toda la documentación requerida, incluyendo el DS-160 y la evidencia de solvencia económica.' },
              { num: '03', title: 'Preparación para entrevista', desc: 'Te preparamos para responder las preguntas específicas de la visa F1 con confianza y claridad.' },
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
          <h2 className="font-heading text-3xl text-white font-bold mb-4">¿Listo para estudiar en Estados Unidos?</h2>
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

      <div className="bg-[#0D2222] py-6 px-6 text-center">
        <a href="/" className="text-[#C9A84C] text-sm hover:opacity-80 transition-opacity">← Volver al inicio</a>
        <p className="text-white/30 text-xs mt-2">© 2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
      </div>
    </main>
  )
}
