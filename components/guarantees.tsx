import { Reveal } from './reveal'

const faqs = [
  {
    icon: '🔒',
    question: '¿Mis datos están seguros?',
    answer: 'Sí. Utilizamos encriptación de nivel bancario para proteger toda tu información consular y personal. Nunca compartimos tus datos con terceros.',
  },
  {
    icon: '📊',
    question: '¿Qué pasa si mi perfil es bajo?',
    answer: 'Te conectamos con un asesor humano para armar una estrategia de mejora personalizada. No te dejamos solo — trabajamos contigo para fortalecer tu caso.',
  },
  {
    icon: '✅',
    question: '¿Garantizan la aprobación de la visa?',
    answer: 'Nadie puede garantizar la decisión de la embajada. Lo que sí garantizamos es prepararte con la estrategia más sólida posible para maximizar tus probabilidades.',
  },
  {
    icon: '🤖',
    question: '¿Qué tan precisa es la evaluación con IA?',
    answer: 'Nuestra herramienta analiza tu perfil con criterios consulares actualizados a 2026. Es una guía diagnóstica altamente confiable, respaldada por 15+ años de experiencia real.',
  },
  {
    icon: '💬',
    question: '¿Puedo hablar con un asesor humano?',
    answer: 'Siempre. Después de tu evaluación con IA, puedes agendar una consulta personalizada con uno de nuestros expertos vía WhatsApp o videollamada.',
  },
  {
    icon: '🌍',
    question: '¿Atienden mi país?',
    answer: 'Atendemos clientes en más de 25 países incluyendo Honduras, Colombia, México, Ecuador, Perú, España, Argentina, Chile, Guatemala y más.',
  },
]

export function Guarantees() {
  return (
    <section id="garantias" className="bg-[#1A3A3A] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Transparencia total</p>
            <h2 className="font-heading text-4xl text-white md:text-5xl font-bold">Tus preguntas, respondidas</h2>
            <p className="mt-4 text-white/60 text-lg">Sabemos que confiar en un servicio en línea requiere certeza. Aquí está todo lo que necesitas saber.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 80}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#C9A84C]/30 transition-all h-full flex flex-col">
                <span className="text-3xl mb-4">{faq.icon}</span>
                <h3 className="font-heading text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-white/65 leading-relaxed text-sm flex-1">{faq.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-14 text-center border-t border-white/10 pt-10">
            <p className="text-white/60 text-sm mb-4">¿Tienes otra pregunta? Escríbenos directamente.</p>
            <a href="https://wa.me/50497410936" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1A3A3A] px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
              Hablar con un asesor →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
