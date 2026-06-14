'use client'
import { useState, useRef, useEffect } from 'react'
import { Reveal } from './reveal'

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'

const conversation = [
  { role: 'user', text: 'Tengo 28 años, soy ingeniero en Colombia y quiero visa B1/B2.', delay: 500 },
  { role: 'ai', text: 'Analizando tu perfil consular...', delay: 1800, isTyping: true },
  { role: 'ai', text: '✅ Perfil evaluado. Tu probabilidad estimada de aprobación es del 82%.', delay: 3200 },
  { role: 'ai', text: '📋 Factores positivos: empleo estable, sin viajes previos rechazados, ingresos consistentes.', delay: 4600 },
  { role: 'ai', text: '⚠️ Área de mejora: reforzar lazos de arraigo con carta laboral actualizada.', delay: 6000 },
  { role: 'ai', text: '¿Quieres que un asesor humano revise tu caso en detalle?', delay: 7400 },
]

type Message = { role: string; text: string; isTyping?: boolean }

export function AiMockup() {
  const [messages, setMessages] = useState<Message[]>([])
  const [running, setRunning] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    return () => timersRef.current.forEach(clearTimeout)
  }, [])

  // Solo hace scroll dentro del chat, no de la pagina
  useEffect(() => {
    if (messages.length > 0 && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  function startDemo() {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
    setMessages([])
    setRunning(true)

    conversation.forEach((msg) => {
      const t = setTimeout(() => {
        setMessages((prev) => {
          const filtered = prev.filter((m) => !m.isTyping)
          return [...filtered, msg]
        })
      }, msg.delay)
      timersRef.current.push(t)
    })

    const end = setTimeout(() => setRunning(false), 8000)
    timersRef.current.push(end)
  }

  return (
    <section className="bg-[#0D2222] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">IA Consular</p>
              <h2 className="font-heading text-4xl text-white md:text-5xl font-bold leading-tight">
                Ve la IA en acción antes de evaluar tu perfil
              </h2>
              <p className="mt-5 text-white/60 leading-relaxed">
                Nuestra inteligencia artificial analiza más de 40 variables consulares actualizadas a 2026 para darte un diagnóstico real en segundos.
              </p>
              <ul className="mt-8 space-y-3">
                {['Algoritmo entrenado con miles de casos reales', 'Criterios consulares actualizados a Junio 2026', 'Diagnóstico en menos de 2 minutos', '100% gratuito y confidencial'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="text-[#C9A84C] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-[#C9A84C] text-[#1A3A3A] px-8 py-4 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
                Evaluar mi perfil ahora →
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-[#1A3A3A] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-[#0D2222]">
                <div className="flex gap-1.5">
                  <span className="size-3 rounded-full bg-red-500/70"></span>
                  <span className="size-3 rounded-full bg-yellow-500/70"></span>
                  <span className="size-3 rounded-full bg-green-500/70"></span>
                </div>
                <div className="flex items-center gap-2 mx-auto">
                  <span className="size-2 rounded-full bg-[#C9A84C]"></span>
                  <span className="text-xs text-white/50 font-medium">Genius AI · Evaluación Consular</span>
                </div>
              </div>

              <div ref={chatRef} className="h-80 overflow-y-auto p-5 space-y-4">
                {messages.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full gap-3">
                    <span className="text-4xl">🤖</span>
                    <p className="text-white/40 text-sm text-center">Haz clic en "Ver demostración" para ver la IA en acción</p>
                  </div>
                )}
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'ai' && (
                      <span className="size-7 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center text-xs mr-2 mt-1 flex-shrink-0">G</span>
                    )}
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#C9A84C] text-[#1A3A3A] font-medium rounded-br-sm' : 'bg-white/10 text-white/85 rounded-bl-sm'}`}>
                      {msg.isTyping ? (
                        <span className="flex gap-1 items-center py-1">
                          <span className="size-1.5 rounded-full bg-white/50 animate-bounce" style={{animationDelay:'0ms'}}></span>
                          <span className="size-1.5 rounded-full bg-white/50 animate-bounce" style={{animationDelay:'150ms'}}></span>
                          <span className="size-1.5 rounded-full bg-white/50 animate-bounce" style={{animationDelay:'300ms'}}></span>
                        </span>
                      ) : msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-5 py-4 border-t border-white/10 bg-[#0D2222]">
                <button onClick={startDemo} disabled={running} className="w-full py-2.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-semibold hover:bg-[#C9A84C]/20 transition-colors disabled:opacity-50">
                  {running ? 'Analizando perfil...' : messages.length > 0 ? '↺ Ver de nuevo' : '▶ Ver demostración'}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
