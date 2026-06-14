import { Reveal } from './reveal'

export function Mascot() {
  return (
    <section id="mascot" className="overflow-hidden bg-teal-darkest">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 md:grid-cols-2 md:gap-12 md:px-8 md:py-24">
        {/* Poster */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/viajero-genius-v2.png"
            alt="El Viajero Genius, una figura misteriosa con sombrero dorado y abrigo blanco"
            className="w-full max-w-sm rounded-2xl object-contain shadow-2xl ring-1 ring-gold/20"
          />
        </div>

        {/* Text */}
        <div className="flex items-center">
          <Reveal>
            <span className="text-sm tracking-wide text-gold">
              Nuestro símbolo
            </span>
            <h2 className="mt-3 font-heading text-4xl text-offwhite md:text-5xl">
              El Viajero Genius
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-offwhite/70">
              Símbolo de libertad, movilidad y éxito. Una figura misteriosa que
              ha cruzado fronteras, vivido culturas y entiende lo que significa
              moverse por el mundo con propósito.
            </p>
            <blockquote className="mt-8 border-l-2 border-gold pl-5">
              <p className="font-heading text-xl italic text-gold md:text-2xl">
                El mundo es tuyo. Nosotros te abrimos las puertas.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
