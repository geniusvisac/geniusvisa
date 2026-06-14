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

const socialLinks = [
  {
    href: "https://instagram.com/geniusvisac",
    label: "Instagram",
    icon: "instagram",
  },
  {
    href: "https://www.facebook.com/share/1BfV3v4agj/",
    label: "Facebook",
    icon: "facebook",
  },
  {
    href: "https://wa.me/50497410936",
    label: "WhatsApp",
    icon: "whatsapp",
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
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/15 text-offwhite/70 transition-colors hover:border-gold hover:text-gold"
                >
                  {social.icon === "instagram" && <InstagramIcon className="size-4" />}
                  {social.icon === "facebook" && <Facebook className="size-4" />}
                  {social.icon === "whatsapp" && <MessageCircle className="size-4" />}
                </a>
              ))}
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
