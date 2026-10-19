'use client'
import { useEffect, useRef } from 'react'

/* ── Ajustes rápidos ─────────────────────────────────────────────────── */
// Escritorio: lienzo ancho. Celular: lienzo alto, con la ruta por la parte baja para no cruzar el texto.
const FLIGHT = {
  desktop: {
    viewBox: '0 0 1200 600',
    path: 'M -40 500 C 300 535 560 505 780 360 C 920 260 1090 120 1270 30',
    grad: { x1: 0, y1: 500, x2: 1270, y2: 30 },
  },
  mobile: {
    viewBox: '0 0 400 800',
    path: 'M -30 735 C 150 765 290 735 430 620',
    grad: { x1: -30, y1: 735, x2: 430, y2: 620 },
  },
}
const FLIGHT_DELAY_MS = 600
const FLIGHT_DURATION_MS = 3400
const PLANE_SCALE = 2.2 // tamaño del avión
const TRAIL_REST_OPACITY = 0 // 0 = la estela se desvanece; 0.25 = queda tenue

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

type HeroBackdropProps = {
  src: string
  alt: string
}

/**
 * Fondo del Hero de /viajes:
 * - La foto hace un acercamiento muy lento (efecto cinematográfico sutil).
 * - Un avión dorado cruza la pantalla una sola vez y dibuja su estela.
 * Todo respeta "reducir movimiento" y no bloquea clics.
 */
export function HeroBackdrop({ src, alt }: HeroBackdropProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const gradRef = useRef<SVGLinearGradientElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const trailRef = useRef<SVGPathElement>(null)
  const planeRef = useRef<SVGGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    const grad = gradRef.current
    const path = pathRef.current
    const trail = trailRef.current
    const plane = planeRef.current
    if (!svg || !grad || !path || !trail || !plane) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Elige la ruta según la forma de la pantalla: vertical (celular, tablet vertical) u horizontal
    const box = svg.getBoundingClientRect()
    const cfg = box.width / Math.max(box.height, 1) < 1 ? FLIGHT.mobile : FLIGHT.desktop
    svg.setAttribute('viewBox', cfg.viewBox)
    path.setAttribute('d', cfg.path)
    trail.setAttribute('d', cfg.path)
    grad.setAttribute('x1', String(cfg.grad.x1))
    grad.setAttribute('y1', String(cfg.grad.y1))
    grad.setAttribute('x2', String(cfg.grad.x2))
    grad.setAttribute('y2', String(cfg.grad.y2))

    const total = path.getTotalLength()
    trail.style.strokeDasharray = `${total}`
    trail.style.strokeDashoffset = `${total}`

    const place = (p: number) => {
      const len = total * p
      const a = path.getPointAtLength(len)
      const b = path.getPointAtLength(Math.min(len + 1, total))
      const angle = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI
      plane.setAttribute(
        'transform',
        `translate(${a.x} ${a.y}) rotate(${angle + 90}) scale(${PLANE_SCALE}) translate(-12 -12)`,
      )
      trail.style.strokeDashoffset = `${total * (1 - p)}`
    }

    let raf = 0
    let startTime: number | null = null

    const tick = (now: number) => {
      if (startTime === null) startTime = now
      const t = Math.min((now - startTime) / FLIGHT_DURATION_MS, 1)
      place(easeInOutCubic(t))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        plane.style.transition = 'opacity 0.5s ease'
        plane.style.opacity = '0'
        trail.style.transition = 'opacity 1.4s ease'
        trail.style.opacity = `${TRAIL_REST_OPACITY}`
      }
    }

    place(0)
    const timer = window.setTimeout(() => {
      plane.style.opacity = '1'
      raf = requestAnimationFrame(tick)
    }, FLIGHT_DELAY_MS)

    return () => {
      window.clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="absolute inset-0">
      <style>{`
        @keyframes hero-slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        .hero-slow-zoom {
          transform-origin: 60% 45%;
          animation: hero-slow-zoom 24s ease-out forwards;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-slow-zoom { animation: none; }
        }
      `}</style>

      <img src={src} alt={alt} className="hero-slow-zoom size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2222] via-[#1A3A3A]/70 to-[#1A3A3A]/30" />

      <svg
        ref={svgRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 size-full"
        viewBox={FLIGHT.desktop.viewBox}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            ref={gradRef}
            id="viajes-flight-trail"
            gradientUnits="userSpaceOnUse"
            x1={FLIGHT.desktop.grad.x1}
            y1={FLIGHT.desktop.grad.y1}
            x2={FLIGHT.desktop.grad.x2}
            y2={FLIGHT.desktop.grad.y2}
          >
            <stop offset="0" stopColor="#C9A84C" stopOpacity="0" />
            <stop offset="0.5" stopColor="#C9A84C" stopOpacity="0.7" />
            <stop offset="1" stopColor="#E3CD8B" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path ref={pathRef} d={FLIGHT.desktop.path} fill="none" stroke="none" />
        <path
          ref={trailRef}
          d={FLIGHT.desktop.path}
          fill="none"
          stroke="url(#viajes-flight-trail)"
          strokeWidth="1.6"
          strokeLinecap="round"
          style={{ strokeDasharray: 4000, strokeDashoffset: 4000 }}
        />
        <g ref={planeRef} style={{ opacity: 0 }}>
          <path
            d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
            fill="#C9A84C"
          />
        </g>
      </svg>
    </div>
  )
}
