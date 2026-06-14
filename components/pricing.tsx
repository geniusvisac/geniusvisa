import { Reveal } from './reveal'

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'

const plans = [
  {
    name: 'Evaluación IA',
    price: '$0',
    description: 'Descubre tu perfil de riesgo consular en 2 minutos.',
    badge: '100% Gratis',
    badgeColor: 'bg-[#3DB89E]/20 text-[#3DB89E]',
    features: [
      'Diagnóstico de perfil con IA',
      'Porcentaje estimado de aprobación',
      'Identificación de factores de riesgo',
      'Recomendaciones iniciales',
    ],
    cta: 'Evaluar mi perfil gratis',
    href: EVAL_URL,
    highlighted: false,
  },
  {
    name: 'Asesoría Premium',
    price: 'Personalizado',
    description: 'Acompañamiento experto de principio a fin.',
    badge: 'Más popular',
    badgeColor: 'bg-[#C9A84C]/20 text-[#C9A84C]',
    features: [
      'Todo lo del plan gratuito',
      'Consultor experto dedicado',
      'Revisión y preparación de documentos',
      'Preparación para la entrevista consular',
      'Seguimiento hasta la decisión',
      'Atención por WhatsApp prioritaria',
    ],
    cta: 'Consultar precio',
    href: WA_URL,
    highlighted: true,
  },
  {
    name: 'Genius VC Travel',
    price: 'A medida',
    description: 'Planificación de viaje premium una vez aprobada tu visa.',
    badge: 'Nuevo',
    badgeColor: 'bg-[#1A3A3A]/10 text-[#1A3A3A]/50',
    features: [
      'Itinerario personalizado',
      'Hoteles y vuelos de lujo',
      'Experiencias exclusivas',
      'Atención 24/7 durante el viaje',
    ],
    cta: 'Explorar viajes',
    href: WA_URL,
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="precios" className="bg-[#F8F6F1] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Transparencia total</p>
            <h2 className="font-heading text-4xl text-[#1A3A3A] md:text-5xl font-bold">Sin sorpresas. Sin letra pequeña.</h2>
            <p className="mt-4 text-[#1A3A3A]/60 text-lg">Empieza gratis. Escala cuando estés listo.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div className={`rounded-2xl p-8 h-full flex flex-col ${plan.highlighted ? 'bg-[#1A3A3A] shadow-2xl ring-2 ring-[#C9A84C]' : 'bg-white shadow-md border border-[#1A3A3A]/5'}`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`font-heading text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#1A3A3A]'}`}>{plan.name}</h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${plan.badgeColor}`}>{plan.badge}</span>
                </div>
                <div className="mb-4">
                  <span className={`font-heading text-4xl font-black ${plan.highlighted ? 'text-[#C9A84C]' : 'text-[#1A3A3A]'}`}>{plan.price}</span>
                </div>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/70' : 'text-[#1A3A3A]/60'}`}>{plan.description}</p>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-0.5 text-sm font-bold">✓</span>
                      <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-[#1A3A3A]/70'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={plan.href} target="_blank" rel="noopener noreferrer" className={`w-full text-center py-3 rounded-full text-sm font-bold transition-all hover:opacity-90 block ${plan.highlighted ? 'bg-[#C9A84C] text-[#1A3A3A]' : 'border-2 border-[#1A3A3A] text-[#1A3A3A] hover:bg-[#1A3A3A] hover:text-white'}`}>
                  {plan.cta} →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="text-center text-[#1A3A3A]/60 text-sm mt-10 font-medium">
            Los precios de asesoría se acuerdan individualmente según la complejidad del caso. Contáctanos para un presupuesto sin compromiso.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
