import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'

export function AiEvaluation() {
  return (
    <section id="evaluacion" className="relative overflow-hidden bg-teal-deep py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 size-[32rem] -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <div className="mx-auto h-px w-16 bg-gold" />
          <h2 className="mt-7 text-balance font-heading text-4xl leading-tight text-offwhite md:text-5xl">
            ¿Tienes chances de obtener tu visa?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-offwhite/70">
            Nuestra herramienta de IA evalúa tu perfil en minutos y te da un diagnóstico real, sin costo.
          </p>

          {/* Etiqueta de urgencia */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-4 py-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A84C] opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#C9A84C]"></span>
            </span>
            <span className="text-xs font-semibold text-[#C9A84C] tracking-wide">Algoritmo actualizado con criterios consulares a Junio 2026</span>
          </div>

          <div className="mt-8">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-9 py-4 text-base font-semibold text-teal-deep transition-transform duration-300 hover:scale-[1.03]">
              Iniciar evaluación gratuita
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-6 text-sm text-offwhite/50">
            Sin compromiso · Respuesta inmediata · 100% confidencial
          </p>
        </Reveal>
      </div>
    </section>
  )
}
