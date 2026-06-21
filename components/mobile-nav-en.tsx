'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Visas', href: '#visas' },
  { label: 'Travel', href: '#travel' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Guarantees', href: '#guarantees' },
  { label: 'Free assessment', href: '#evaluation' },
  { label: 'Contact', href: '#contact' },
]

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'

export function MobileNavEn() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-white lg:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      <div
        className={`fixed inset-x-0 top-16 z-40 overflow-hidden border-t border-white/10 bg-[#1A3A3A]/98 backdrop-blur-md transition-[max-height] duration-500 md:top-20 lg:hidden ${
          open ? 'max-h-[32rem]' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-white/85 transition-colors hover:bg-white/5 hover:text-[#C9A84C]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-3 text-base text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            🇭🇳 Es Español
          </a>
          <a
            href={EVAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-[#C9A84C] px-5 py-3 text-center text-sm font-semibold text-[#1A3A3A]"
          >
            Evaluate my profile
          </a>
        </div>
      </div>
    </>
  )
}
