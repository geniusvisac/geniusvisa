import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const destinations = [
  {
    title: 'Escapadas de lujo',
    desc: 'Resorts y villas privadas en los destinos más exclusivos del mundo.',
    image: '/images/escapadas-lujo.webp',
  },
  {
    title: 'Destinos de ensueño',
    desc: 'Paisajes inolvidables y experiencias diseñadas a tu medida.',
    image: '/images/destinos-ensueno.webp',
  },
  {
    title: 'Experiencias únicas',
    desc: 'Viaja en primera clase con cada detalle cuidado por nosotros.',
    image: '/images/experiencias-unicas.webp',
  },
]
export function TravelSection() {
  return (
    <section id="viajes" className="bg-offwhite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-medium tracking-wide text-gold">
            Genius VC Travel
          </span>
          <h2 className="mt-3 text-balance font-heading text-4xl text-primary md:text-5xl">
            Viaja diferente. Viaja con Genius.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Una agencia de viajes premium para quienes buscan algo más que un
            destino: una experiencia.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {destinations.map((dest, i) => (
            <Reveal key={dest.title} delay={i * 90} as="article">
              <div className="group relative h-96 overflow-hidden rounded-2xl">
                <img
                  src={dest.image || '/placeholder.svg'}
                  alt={dest.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-teal-darkest via-teal-deep/40 to-transparent transition-opacity duration-500 group-hover:from-teal-darkest/95"
                />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-heading text-2xl text-offwhite">
                    {dest.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-offwhite/80">
                    {dest.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    Explorar destinos
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
