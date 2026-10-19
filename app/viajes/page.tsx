'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Línea dorada que conecta los 3 pasos de "Cómo funciona".
 * Se dibuja una sola vez, cuando la sección entra en pantalla.
 * - Computador: línea horizontal sobre las tarjetas, con un punto por paso (ProcessTrack).
 * - Celular: pequeño conector vertical entre una tarjeta y la siguiente (ProcessConnector).
 * Es decorativa (aria-hidden) y no bloquea clics. Con "reducir movimiento" aparece sin animar.
 */

const GOLD_LINE = 'bg-[#C9A84C]/70'

function useSeen<T extends Element>(threshold: number) {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return { ref, seen }
}

const LINE_MS = 1400
const STEPS_COUNT = 3

/** Escritorio: línea horizontal con un punto sobre cada tarjeta. Va dentro del grid con `relative`. */
export function ProcessTrack() {
  const { ref, seen } = useSeen<HTMLDivElement>(0.5)

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -top-7 hidden h-3 md:block"
    >
      {/* Línea: del centro de la 1.ª tarjeta al centro de la 3.ª */}
      <div
        className={`absolute top-1/2 -mt-px h-px origin-left ease-linear transition-transform motion-reduce:transition-none ${GOLD_LINE}`}
        style={{
          left: 'calc((100% - 4rem) / 6)',
          right: 'calc((100% - 4rem) / 6)',
          transform: seen ? 'scaleX(1)' : 'scaleX(0)',
          transitionDuration: `${LINE_MS}ms`,
          transitionDelay: '150ms',
        }}
      />
      {/* Puntos: aparecen justo cuando la línea llega a cada tarjeta */}
      <div className="absolute inset-0 grid grid-cols-3 gap-8">
        {Array.from({ length: STEPS_COUNT }).map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <span
              className="block size-2.5 rounded-full bg-[#C9A84C] transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none"
              style={{
                transform: seen ? 'scale(1)' : 'scale(0)',
                opacity: seen ? 1 : 0,
                transitionDelay: `${150 + (i * LINE_MS) / (STEPS_COUNT - 1)}ms`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/** Celular: conector vertical bajo una tarjeta. Va dentro de la tarjeta (que debe ser `relative`). */
export function ProcessConnector() {
  const { ref, seen } = useSeen<HTMLDivElement>(0.6)

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-full h-8 w-px md:hidden"
    >
      <div
        className={`size-full origin-top transition-transform duration-700 ease-out motion-reduce:transition-none ${GOLD_LINE}`}
        style={{ transform: seen ? 'scaleY(1)' : 'scaleY(0)' }}
      />
    </div>
  )
}
