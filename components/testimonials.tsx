import { Star } from 'lucide-react'
import { Reveal } from './reveal'

const testimonials = [
  {
    name: 'María Fernanda López',
    flag: '🇭🇳',
    country: 'Honduras',
    initials: 'ML',
    quote:
      'Me prepararon para mi entrevista con un detalle increíble. Salí con la visa B1/B2 aprobada a la primera. Totalmente recomendados.',
  },
  {
    name: 'Andrés Restrepo',
    flag: '🇨🇴',
    country: 'Colombia',
    initials: 'AR',
    quote:
      'La evaluación con IA me dio claridad desde el inicio. El acompañamiento fue cercano y profesional en cada paso del proceso.',
  },
  {
    name: 'Gabriela Sánchez',
    flag: '🇲🇽',
    country: 'México',
    initials: 'GS',
    quote:
      'Gestioné mi visa de estudio con ellos y todo fue impecable. Además organizaron mi viaje. Un servicio premium de verdad.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-4xl text-primary md:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} as="article">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/80">
                  {`"${t.quote}"`}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-teal-deep font-medium text-offwhite">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-primary">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {t.flag} {t.country}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
