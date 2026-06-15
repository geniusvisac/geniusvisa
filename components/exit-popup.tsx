'use client'
import { useEffect, useState } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/mvzndjar'

export function ExitPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        setVisible(true)
      }
    }

    const mobileTimer = setTimeout(() => {
      if (window.innerWidth < 768) setVisible(true)
    }, 30000)

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(mobileTimer)
    }
  }, [dismissed])

  function handleClose() {
    setVisible(false)
    setDismissed(true)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)

    try {
      await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          mensaje: 'Solicitud de guia gratuita desde el popup de salida',
          fuente: 'Exit Popup - genius-visa-and-travel.vercel.app',
        }),
      })
      setSent(true)
      setTimeout(() => {
        setVisible(false)
        setDismissed(true)
      }, 3000)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-[#1A3A3A] p-8 shadow-2xl ring-1 ring-white/10">
        <button onClick={handleClose} className="absolute right-4 top-4 text-white/40 hover:text-white transition-colors text-xl font-light">
          x
        </button>

        {!sent ? (
          <>
            <div className="text-center mb-6">
              <span className="text-4xl">📋</span>
              <h2 className="mt-3 font-heading text-2xl font-bold text-white">
                No te vayas con la duda
              </h2>
              <p className="mt-2 text-white/60 text-sm leading-relaxed">
                Descarga gratis nuestra guia:
              </p>
              <p className="mt-1 text-[#C9A84C] font-semibold text-sm">
                Los 5 errores que causan el rechazo de la visa americana en 2026
              </p>
            </div>

            <ul className="space-y-2 mb-6">
              {[
                'Errores documentales que debes evitar',
                'Que NO decir en la entrevista consular',
                'Como mejorar tu perfil antes de aplicar',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-white/70 text-sm">
                  <span className="text-[#C9A84C] font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electronico"
                required
                className="w-full rounded-full bg-white/10 border border-white/20 px-5 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-[#C9A84C] transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#C9A84C] py-3 text-sm font-bold text-[#1A3A3A] hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {loading ? 'Enviando...' : 'Quiero la guia gratis'}
              </button>
            </form>

            <p className="text-center text-white/30 text-xs mt-4">
              Sin spam. Puedes darte de baja cuando quieras.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <span className="text-5xl">🎉</span>
            <h3 className="mt-4 font-heading text-2xl text-white font-bold">Listo!</h3>
            <p className="mt-2 text-white/60 text-sm">
              Recibimos tu solicitud. Te contactamos a <span className="text-[#C9A84C]">{email}</span> en breve.
            </p>
            <p className="mt-1 text-white/40 text-xs">
              Revisa tu bandeja de entrada y spam.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
