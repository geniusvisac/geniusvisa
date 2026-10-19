'use client'
import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const EVAL_URL = '/evaluacion'

const stats = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '25+', label: 'Países atendidos' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '500+', label: 'Familias asesoradas' },
]

/* ── Vuelo del avión (único momento de movimiento del Hero) ───────────── */
const FLIGHT_PATH = 'M -40 470 C 260 500 420 150 760 190 C 990 216 1100 100 1270 20'
const FLIGHT_DELAY_MS = 600
const FLIGHT_DURATION_MS = 3200
const TRAIL_REST_OPACITY = 0 // 0 = la estela se desvanece por completo; 0.25 = queda tenue

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export function Hero() {
  const pathRef = useRef<SVGPathElement>(null)
  const trailRef = useRef<SVGPathElement>(null)
  const planeRef = useRef<SVGGElement>(null)

  useEffect(() => {
    const path = pathRef.current
    const trail = trailRef.current
    const plane = planeRef.current
    if (!path || !trail || !plane) return
    // Respeta a quien pidió menos movimiento: no se anima nada
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

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
        `translate(${a.x} ${a.y}) rotate(${angle + 90}) scale(2.4) translate(-12 -12)`,
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
    <section
      id="inicio"
      className="relative flex min-h-[76vh] items-center overflow-hidden bg-teal-deep md:min-h-0"
    >
      {/* Dot grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #f8f6f1 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 size-[28rem] rounded-full bg-teal/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-6 pt-20 md:px-8 md:pb-6 md:pt-20">

        {/* TOP: 2 columnas — texto izquierda, imagen derecha */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT — text content */}
          <div className="pt-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-wide text-gold">
                Genius Visa Consultants · Genius VC Travel
              </span>
            </Reveal>
            <h1 className="mt-5 text-balance font-heading text-4xl leading-[1.05] text-offwhite md:text-5xl lg:text-6xl">
              Tu movilidad global, nuestra misión
            </h1>
            <Reveal delay={200}>
              <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-offwhite/70">
                Más de 15 años conectando personas con el mundo. Visas, viajes y libertad.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={EVAL_URL}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-teal-deep transition-transform duration-300 hover:scale-[1.03]"
                >
                  Evaluar mi perfil gratis
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#visas"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-offwhite/30 px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:border-offwhite/70"
                >
                  Conoce nuestros servicios
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — image */}
          <Reveal delay={150} className="hidden lg:block">
            <div className="relative w-full mt-2">
              <img
                src="/images/genius-vc-travel-lounge.png"
                alt="Consultor Genius VC Travel asesorando a una pareja en sala de reuniones de lujo"
                className="w-full rounded-2xl object-cover shadow-xl"
                loading="eager"
              />
            </div>
          </Reveal>

        </div>

        {/* BOTTOM: estadísticas en fila completa bajo las 2 columnas */}
        <Reveal delay={450}>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-2xl text-gold md:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-sm text-offwhite/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

      </div>

      {/* Vuelo del avión: capa decorativa por encima del contenido, sin bloquear clics */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="hero-flight-trail"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="470"
            x2="1270"
            y2="20"
          >
            <stop offset="0" stopColor="#C9A84C" stopOpacity="0" />
            <stop offset="0.5" stopColor="#C9A84C" stopOpacity="0.7" />
            <stop offset="1" stopColor="#E3CD8B" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path ref={pathRef} d={FLIGHT_PATH} fill="none" stroke="none" />
        <path
          ref={trailRef}
          d={FLIGHT_PATH}
          fill="none"
          stroke="url(#hero-flight-trail)"
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
    </section>
  )
}
