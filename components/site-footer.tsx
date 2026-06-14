import { MessageCircle, Facebook } from "lucide-react"
import { InstagramIcon } from "./icons"

const columns = [
  {
    title: "Servicios",
    links: [
      { label: "Visas de turismo", href: "#visas" },
      { label: "Visas de estudio", href: "#visas" },
      { label: "Visas de trabajo", href: "#visas" },
      { label: "Genius VC Travel", href: "#viajes" },
    ],
  },
  {
    title: "Paises",
    links: [
      { label: "Honduras", href: "#" },
      { label: "Colombia", href: "#" },
      { label: "Mexico", href: "#" },
      { label: "Ecuador", href: "#" },
      { label: "Espana", href: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre nosotros", href: "#nosotros" },
      { label: "El Viajero Genius", href: "#mascot" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Terminos", href: "/terminos" },
      { label: "Cookies", href: "/privacidad" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-teal-darkest pb-10 pt-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <img src="/images/logo-visa.webp" alt="Genius Visa Consultants" className="size-12 rounded-full" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-offwhite/55">
              Tu movilidad global, nuestra mision.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="https://instagram.com/geniusvisac" target="_blank" rel="noopener noreferrer" className="flex size-9 items-center justify-center rounded-full border border-white/15 text-offwhite/70 transition-colors hover:border-gold hover:text-gold"><InstagramIcon className="size-4" /></a>
<a href="https://www.facebook.com/share/1BfV3v4agj/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex size-9 items-center justify-center rounded-full border border-white/15 text-offwhite/70 transition-colors hover:border-gold hover:text-gold"><Facebook className="size-4" /></a>
<a href="https://wa.me/50497410936" target="_blank" rel="noopener noreferrer" className="flex size-9 items-center justify-center rounded-full border border-white/15 text-offwhite/70 transition-colors hover:border-gold hover:text-gold"><MessageCircle className="size-4" /></a>
              </a>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-offwhite">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-offwhite/55 transition-colors hover:text-gold">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-offwhite/45">
            2026 Genius Visa Consultants · Genius VC Travel. Tegucigalpa, Honduras.
          </p>
        </div>
      </div>
    </footer>
  )
}
