'use client'
import { useEffect, useState } from 'react'

const messages = [
  'personas evaluaron su perfil hoy',
  'consultas atendidas esta semana',
  'perfiles evaluados este mes',
]

export function SocialProof() {
  const [count, setCount] = useState(0)
  const [msgIndex, setMsgIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Numero aleatorio entre 18 y 47
    setCount(Math.floor(Math.random() * 30) + 18)

    // Cambia el mensaje cada 5 segundos
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setMsgIndex((prev) => (prev + 1) % messages.length)
        setCount(Math.floor(Math.random() * 30) + 18)
        setVisible(true)
      }, 400)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-24 right-6 z-40 flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 shadow-xl border border-gray-100 transition-all duration-400">
      {/* Indicador verde */}
      <span className="relative flex size-2.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex size-2.5 rounded-full bg-green-500"></span>
      </span>
      {/* Texto */}
      <span
        className={`text-xs font-semibold text-[#1A3A3A] transition-opacity duration-400 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="text-[#C9A84C]">{count}</span> {messages[msgIndex]}
      </span>
    </div>
  )
}
