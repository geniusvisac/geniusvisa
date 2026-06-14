import { Reveal } from './reveal'

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'

const steps = [
  {
    number: '01',
    title: 'Diagnostico con IA',
    subtitle: '2 minutos',
    description: 'Evalua tu perfil gratis y descubre tu porcentaje real de aprobacion. Sin compromiso, sin costo, sin esperas.',
    showCta: true,
  },
  {
    number: '02',
    title: 'Estrategia Humana',
    subtitle: 'Asesoria personalizada',
    description: 'Un consultor experto con 15 anos de experiencia refina tu caso, prepara tus documentos y elimina los errores que causan el 80% de los rechazos.',
    showCta: false,
  },
  {
    number: '03',
    title: 'Tu Visa Aprobada',
    subtitle: 'Ve a tu entrevista como un ganador',
    description: 'Llega a la embajada con total seguridad. Nosotros te preparamos para cada pregunta, cada documento y cada detalle.',
    showCta: false,
  },
]

export function Steps() {
  return (
    <section id="pasos" className="bg-[#F8F6F1] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase mb-4">Como funciona</p>
            <h2 className="font-heading text-4xl text-[#1A3A3A] md:text-5xl">Tu camino al exito en 3 pasos</h2>
            <p className="mt-4 text-[#1A3A3A]/60 text-lg">Un proceso disenado para maximizar tus probabilidades de aprobacion.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#1A3A3A]/5 hover:shadow-md transition-shadow h-full flex flex-col">
                <span className="font-heading text-6xl font-bold text-[#1A3A3A]/10 leading-none mb-4 select-none">{step.number}</span>
                <span className="inline-block text-xs font-medium text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 rounded-full mb-3 w-fit">{step.subtitle}</span>
                <h3 className="font-heading text-2xl text-[#1A3A3A] mb-3">{step.title}</h3>
                <p className="text-[#1A3A3A]/60 leading-relaxed text-sm flex-1">{step.description}</p>
                {step.showCta && (
                  <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-[#C9A84C] text-[#1A3A3A] px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity w-fit">
                    Evaluar ahora
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
