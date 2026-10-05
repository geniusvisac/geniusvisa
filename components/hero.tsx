'use client'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'
const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const stats = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '25+', label: 'Países atendidos' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '500+', label: 'Familias asesoradas' },
]
export function Hero() {
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

          {/* RIGHT — image */}
          <Reveal delay={150} className="hidden lg:block">
            <div className="relative w-full mt-2">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-3xl bg-gold/10 blur-2xl"
              />
              <img
                src="/images/genius-vc-travel-lounge.png"
                alt="Consultor Genius VC Travel asesorando a una pareja en sala de reuniones de lujo"
                className="relative w-full rounded-2xl object-cover shadow-2xl ring-1 ring-gold/20"
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
    </section>
  )
}
