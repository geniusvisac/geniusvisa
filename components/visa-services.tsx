import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Users,
  Globe,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from './reveal'

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'

const services = [
  {
    icon: BookOpen,
    title: 'Visas de turismo',
    tag: 'B1 / B2',
    desc: 'Viaja por negocios o placer con un proceso claro y bien preparado.',
    href: '/visas/b1-b2',
  },
  {
    icon: GraduationCap,
    title: 'Visas de estudio',
    tag: 'F1 / M1',
    desc: 'Estudia en Estados Unidos con un perfil sólido y acompañamiento total.',
    href: '/visas/f1',
  },
  {
    icon: Briefcase,
    title: 'Visas de trabajo',
    tag: 'H1B / H2B / J1',
    desc: 'Oportunidades laborales y programas de intercambio profesional.',
    href: '/visas/h1b',
  },
  {
    icon: Users,
    title: 'Visas familiares',
    tag: 'H4 / F2 / J2',
    desc: 'Reúnete con tu familia y viaja acompañado de tus seres queridos.',
    href: '/visas/familiares',
  },
  {
    icon: Globe,
    title: 'Reagrupación y otros',
    tag: 'Casos especiales',
    desc: 'Asesoría a la medida para procesos migratorios complejos.',
    href: '#contacto',
  },
]
export function VisaServices() {
  return (
    <section id="visas" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-medium tracking-wide text-teal">
            Genius Visa Consultants
          </span>
          <h2 className="mt-3 text-balance font-heading text-4xl text-primary md:text-5xl">
            Expertos en visas americanas
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Cada caso es único. Te guiamos paso a paso para que llegues a tu
            entrevista con la mejor preparación posible.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 70} as="article">
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-xl hover:shadow-teal-deep/5">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-teal-deep text-offwhite transition-colors group-hover:bg-teal">
                  <service.icon className="size-6" aria-hidden="true" />
                </span>
                <div className="mt-5 flex items-baseline gap-2">
                  <h3 className="font-heading text-xl text-primary">
                    {service.title}
                  </h3>
                  <span className="text-xs text-gold">{service.tag}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
                <a
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-teal-deep"
                >
                  Saber más
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </Reveal>
          ))}

          {/* Featured AI card */}
          <Reveal delay={350} as="article">
            <a
              href={EVAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-2xl border border-gold/50 bg-teal-deep p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-deep/20"
            >
              <div>
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gold text-teal-deep">
                  <Sparkles className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-xl text-offwhite">
                  Evaluación con IA gratis
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-offwhite/70">
                  Descubre tus posibilidades reales en minutos con nuestra
                  herramienta de inteligencia artificial.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                Empezar ahora
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
