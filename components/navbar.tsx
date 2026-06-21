'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Visas', href: '#visas' },
  { label: 'Viajes', href: '#viajes' },
  { label: 'Precios', href: '#precios' },
  { label: 'Garantías', href: '#garantias' },
  { label: 'Evaluación gratuita', href: '#evaluacion' },
  { label: 'Contacto', href: '#contacto' },
]

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open
          ? 'bg-teal-deep/95 shadow-lg shadow-black/10 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3 text-offwhite"
          aria-label="Genius Visa Consultants y Genius VC Travel — inicio"
        >
          <img
            src="/images/logo-visa.webp"
            alt="Genius Visa Consultants"
            className="size-14 rounded-full md:size-16"
          />
          <span className="hidden flex-col leading-tight sm:flex">
  <span className="font-sans text-base font-semibold tracking-widest uppercase text-offwhite md:text-sm">
  Genius Visa Consultants
</span>
<span className="font-sans text-xs font-light tracking-widest uppercase text-gold">
  & Genius VC Travel
</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-offwhite/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="/en" className="hidden text-xs text-white/50 hover:text-white transition-colors sm:block mr-2">🇺🇸 English</a>
          <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="hidden rounded-full border border-gold px-5 py-2 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-teal-deep sm:inline-flex">Evalúa tu perfil</a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-offwhite lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-white/10 bg-teal-deep/98 backdrop-blur-md transition-[max-height] duration-500 lg:hidden',
          open ? 'max-h-[36rem]' : 'max-h-0',
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-offwhite/85 transition-colors hover:bg-white/5 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/en"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-3 text-base text-offwhite/60 transition-colors hover:bg-white/5 hover:text-offwhite"
          >
            🇺🇸 English
          </a>
          <a
            href={EVAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-teal-deep"
          >
            Evalúa tu perfil
          </a>
        </div>
      </div>
    </header>
  )
}
