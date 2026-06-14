'use client'

import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'

const stats = [
  { value: '15+', label: 'Años' },
  { value: '25+', label: 'Países' },
  { value: 'Miles', label: 'De visas aprobadas' },
  { value: '1 a 1', label: 'Atención personalizada' },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-teal-deep"
    >
      {/* Subtle world map texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #f8f6f1 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 size-[28rem] rounded-full bg-teal/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-wide text-gold">
              Genius Visa Consultants · Genius VC Travel
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-balance font-heading text-5xl leading-[1.05] text-offwhite md:text-7xl">
              Tu movilidad global, nuestra misión
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-offwhite/70 md:text-xl">
              Más de 15 años conectando personas con el mundo. Visas, viajes y
              libertad.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={EVAL_URL}
                target="_blank"
                rel="noopener noreferrer"
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

        {/* Floating stats row */}
        <Reveal delay={450}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 md:mt-24 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-3xl text-gold md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-offwhite/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-12 w-px overflow-hidden bg-white/10">
          <div className="h-full w-full animate-scroll-line bg-gold" />
        </div>
      </div>
    </section>
  )
}
