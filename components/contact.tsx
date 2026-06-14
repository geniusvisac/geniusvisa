import { MessageCircle, Mail, Clock } from 'lucide-react'
import { InstagramIcon } from './icons'
import { Reveal } from './reveal'

const WHATSAPP_URL = 'https://wa.me/50497410936'

export function Contact() {
  return (
    <section id="contacto" className="bg-teal-deep py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="text-balance font-heading text-4xl text-offwhite md:text-5xl">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-offwhite/70">
            Conversemos sobre tu caso. Te respondemos directo por WhatsApp.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-9 py-4 text-base font-semibold text-teal-deep transition-transform duration-300 hover:scale-[1.03]"
          >
            <MessageCircle className="size-5" />
            Escríbenos por WhatsApp
          </a>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-sm text-offwhite/75 sm:flex-row sm:gap-10">
            <a
              href="mailto:geniusvisac@gmail.com"
              className="inline-flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Mail className="size-4 text-gold" />
              geniusvisac@gmail.com
            </a>
            <a
              href="https://instagram.com/geniusvisac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-gold"
            >
              <InstagramIcon className="size-4 text-gold" />
              @geniusvisac
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-gold" />
              Lun–Vie 8am–6pm · Sáb 9am–1pm
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
