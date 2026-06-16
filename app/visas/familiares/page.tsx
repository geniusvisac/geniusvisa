import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visas Familiares H4, F2, J2 | Genius Visa Consultants',
  description: 'Reúnete con tu familia en Estados Unidos. Asesoría experta para visas familiares H4, F2 y J2. Evaluación gratuita con IA. Honduras y Latinoamérica.',
  keywords: 'visa familiar estados unidos, visa h4, visa f2, visa j2, reunificacion familiar usa, visa dependiente americana',
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'

const visas = [
  {
    code: 'H4',
    title: 'Visa H4 — Dependiente de H1B',
    desc: 'La visa H4 está diseñada para los cónyuges e hijos menores de 21 años de titulares de visa H1B que trabajan en Estados Unidos. Permite vivir en el país durante el período de validez de la visa H1B del familiar principal. En algunos casos, los titulares de H4 pueden solicitar autorización de empleo (EAD) si su cónyuge H1B tiene aprobada una petición de residencia permanente en etapa avanzada.',
  },
  {
    code: 'F2',
    title: 'Visa F2 — Dependiente de Estudiante F1',
    desc: 'La visa F2 permite a los cónyuges e hijos menores de 21 años de titulares de visa F1 acompañar o unirse al estudiante durante su programa académico en Estados Unidos. Los titulares de F2 pueden vivir en el país mientras el estudiante principal mantenga su estatus F1 activo. Es importante destacar que los titulares de F2 no están autorizados a trabajar ni a estudiar a tiempo completo.',
  },
  {
    code: 'J2',
    title: 'Visa J2 — Dependiente de Intercambio J1',
    desc: 'La visa J2 está destinada a los cónyuges e hijos menores de 21 años de titulares de visa J1 que participan en programas de intercambio en Estados Unidos. A diferencia de otras visas de dependiente, los titulares de J2 pueden solicitar autorización de empleo independiente del titular J1, lo que la convierte en una de las visas de dependiente más flexibles disponibles.',
  },
]

export default function VisasFamiliares() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      {/* Hero */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Visas de Dependiente</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
            Visas Familiares<br/>H4 · F2 · J2
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Reunirse con la familia no debería ser complicado. Te acompañamos en cada paso para que tus seres queridos puedan estar contigo en Estados Unidos.
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

      {/* Intro */}
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">¿Qué son las visas de dependiente?</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-4">
            Las visas de dependiente permiten a los familiares directos de titulares de visas de trabajo, estudio o intercambio acompañar o reunirse con ellos en Estados Unidos. Están diseñadas específicamente para cónyuges e hijos menores de 21 años que no son ciudadanos ni residentes permanentes de Estados Unidos.
          </p>
          <p className="text-[#1A3A3A]/70 leading-relaxed">
            El proceso de solicitud de estas visas está vinculado al estatus del titular principal. Por eso es fundamental contar con asesoría experta que garantice que toda la documentación esté correctamente preparada y que el proceso se realice en los tiempos adecuados.
          </p>
        </div>
      </section>

      {/* Tipos de visa */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-10">Tipos de visa familiar</h2>
          <div className="space-y-6">
            {visas.map((visa) => (
              <div key={visa.code} className="rounded-2xl border border-[#1A3A3A]/10 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center justify-center size-12 rounded-xl bg-[#1A3A3A] text-[#C9A84C] font-heading font-black text-lg">
                    {visa.code}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#1A3A3A]">{visa.title}</h3>
                </div>
                <p className="text-[#1A3A3A]/65 leading-relaxed text-sm">{visa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">Requisitos generales</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Pasaporte vigente del solicitante con mínimo 6 meses de validez',
              'Visa o estatus válido del titular principal (H1B, F1 o J1)',
              'Formulario DS-160 completado para cada solicitante',
              'Acta de matrimonio (para cónyuges) apostillada',
              'Acta de nacimiento (para hijos) apostillada',
              'Evidencia del estatus migratorio del titular principal',
              'Comprobante de relación familiar con el titular',
              'Pago de tarifa consular MRV por cada solicitante',
            ].map((req) => (
              <div key={req} className="flex items-start gap-3 p-4 bg-white rounded-xl">
                <span className="text-[#C9A84C] font-bold mt-0.5">✓</span>
                <p className="text-[#1A3A3A]/75 text-sm leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">El proceso con Genius</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Evaluación del caso', desc: 'Revisamos el estatus del titular principal y determinamos la visa correcta y el mejor momento para aplicar.' },
              { num: '02', title: 'Preparación de documentos', desc: 'Organizamos toda la documentación familiar requerida, incluyendo actas apostilladas y formularios oficiales.' },
              { num: '03', title: 'Acompañamiento consular', desc: 'Preparamos a cada miembro de la familia para la entrevista consular y los acompañamos en todo el proceso.' },
            ].map((step) => (
              <div key={step.num} className="bg-[#F8F6F1] rounded-2xl p-6">
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
          <h2 className="font-heading text-3xl text-white font-bold mb-4">¿Listo para reunir a tu familia?</h2>
          <p className="text-white/60 mb-8">Contáctanos ahora y un asesor experto revisará tu caso de forma personalizada y gratuita.</p>
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
