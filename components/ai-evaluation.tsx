import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'

export function AiEvaluation() {
  return (
    <section
      id="evaluacion"
      className="relative overflow-hidden bg-teal-deep py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 size-[32rem] -translate-x-1/2 rounded-full bg-teal/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <div className="mx-auto h-px w-16 bg-gold" />
          <h2 className="mt-7 text-balance font-heading text-4xl leading-tight text-offwhite md:text-5xl">
            ¿Tienes chances de obtener tu visa?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-offwhite/70">
            Nuestra herramienta de IA evalúa tu perfil en minutos y te da un
            diagnóstico real, sin costo.
          </p>
          <a
            href={EVAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-9 py-4 text-base font-semibold text-teal-deep transition-transform duration-300 hover:scale-[1.03]"
          >
            Iniciar evaluación gratuita
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-6 text-sm text-offwhite/50">
            Sin compromiso · Respuesta inmediata · 100% confidencial
          </p>
        </Reveal>
      </div>
    </section>
  )
}
