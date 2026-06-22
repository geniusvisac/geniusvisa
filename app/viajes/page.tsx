import { Metadata } from 'next'
import { ArrowRight, MessageCircle, Mail, Clock, Star, Plane, Heart, Users, Sparkles, ShieldCheck, Headset, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { WhatsappButton } from '@/components/whatsapp-button'

export const metadata: Metadata = {
  title: 'Genius VC Travel | Viajes de Lujo a tu Medida · Honduras',
  description: 'Agencia de viajes premium en Tegucigalpa. Escapadas de lujo, lunas de miel y experiencias VIP diseñadas a tu medida, con la confianza de Genius Visa Consultants.',
  keywords: 'Genius VC Travel, agencia de viajes de lujo Honduras, viajes premium, luna de miel, escapadas de lujo, Tegucigalpa',
  alternates: {
    canonical: 'https://genius-visa-and-travel.vercel.app/viajes',
  },
}

const WA_TRAVEL_URL = 'https://wa.me/50497410936?text=Hola%20Genius%20VC%20Travel%2C%20me%20interesa%20planear%20un%20viaje.'

const CATEGORIES = [
  {
    icon: Sparkles,
    title: 'Escapadas de lujo',
    desc: 'Resorts y villas privadas en los destinos más exclusivos del mundo, seleccionados uno por uno.',
  },
  {
    icon: Heart,
    title: 'Luna de miel',
    desc: 'El inicio de una nueva vida merece un escenario perfecto. Diseñamos cada detalle para que solo disfruten.',
  },
  {
    icon: Users,
    title: 'Viajes en familia',
    desc: 'Itinerarios pensados para todas las edades, sin renunciar a la comodidad ni al buen gusto.',
  },
  {
    icon: Plane,
    title: 'Experiencias VIP',
    desc: 'Acceso prioritario, traslados privados y atención personalizada de principio a fin.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Conversamos contigo',
    desc: 'Entendemos tu visión: destino soñado, presupuesto, ocasión especial y el estilo de viaje que buscas.',
  },
  {
    num: '02',
    title: 'Diseñamos tu itinerario',
    desc: 'Curamos cada hotel, traslado y experiencia, con opciones claras y sin sorpresas en el presupuesto.',
  },
  {
    num: '03',
    title: 'Viajas sin preocupaciones',
    desc: 'Acompañamiento 24/7 durante tu viaje. Nosotros resolvemos, tú solo disfrutas.',
  },
]

const GALLERY = [
  {
    title: 'Villas sobre el agua, Maldivas',
    desc: 'Atardeceres privados frente al océano Índico.',
    image: 'https://images.pexels.com/photos/30037393/pexels-photo-30037393.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Bungalows de autor',
    desc: 'Arquitectura tropical de lujo, pensada para la calma.',
    image: 'https://images.pexels.com/photos/28843966/pexels-photo-28843966.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Atardeceres inolvidables',
    desc: 'El cierre perfecto para cada día de tu escapada.',
    image: 'https://images.pexels.com/photos/28843927/pexels-photo-28843927.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: 'Respaldo de 15+ años',
    desc: 'La misma confianza de Genius Visa Consultants, ahora aplicada a tus viajes.',
  },
  {
    icon: Headset,
    title: 'Atención 24/7',
    desc: 'Un asesor real, disponible durante todo tu viaje, no un chatbot.',
  },
  {
    icon: MapPin,
    title: 'Curaduría personal',
    desc: 'Cada destino y hotel es verificado antes de recomendártelo.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Carla Mendoza',
    flag: '🇭🇳',
    country: 'Honduras',
    initials: 'CM',
    quote: 'Nuestra luna de miel fue exactamente como la imaginamos. Genius VC Travel se encargó de absolutamente todo.',
  },
  {
    name: 'Roberto Aguilar',
    flag: '🇭🇳',
    country: 'Honduras',
    initials: 'RA',
    quote: 'El nivel de detalle y atención fue impecable. Sentí que viajaba con un equipo personal, no una agencia más.',
  },
]

export default function ViajesPage() {
  return (
    <main className="bg-[#1A3A3A]">

      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#1A3A3A]/95 backdrop-blur-md shadow-lg">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <a href="/viajes" className="flex items-center gap-3">
            <img src="/images/logo-visa.webp" alt="Genius VC Travel" className="size-12 rounded-full" />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-sans text-sm font-semibold tracking-widest uppercase text-white">Genius VC Travel</span>
              <span className="font-sans text-xs font-light tracking-widest uppercase text-[#C9A84C]">by Genius Visa Consultants</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {[
              { label: 'Inicio', href: '#hero' },
              { label: 'Experiencias', href: '#categorias' },
              { label: 'Cómo funciona', href: '#proceso' },
              { label: 'Destinos', href: '#destinos' },
              { label: 'Nosotros', href: '#nosotros' },
              { label: 'Contacto', href: '#contacto' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/80 transition-colors hover:text-[#C9A84C]">{link.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="hidden text-xs text-white/50 hover:text-white transition-colors sm:block">Genius Visa Consultants</a>
            <a href={WA_TRAVEL_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#C9A84C] px-5 py-2 text-sm font-medium text-[#C9A84C] transition-all hover:bg-[#C9A84C] hover:text-[#1A3A3A]">Planear mi viaje</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#1A3A3A] pt-20 md:min-h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/30037393/pexels-photo-30037393.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Villas de lujo sobre el agua al atardecer"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2222] via-[#1A3A3A]/70 to-[#1A3A3A]/30" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-16 md:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 bg-[#1A3A3A]/40 px-4 py-1.5 text-xs tracking-wide text-[#C9A84C] backdrop-blur-sm">Genius VC Travel</span>
            </Reveal>
            <h1 className="mt-6 font-heading text-4xl leading-[1.05] text-white md:text-6xl font-bold">Viaja diferente. Viaja con Genius.</h1>
            <Reveal delay={200}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">Una agencia de viajes premium para quienes buscan algo más que un destino: una experiencia diseñada a su medida.</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={WA_TRAVEL_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-7 py-3.5 text-sm font-semibold text-[#1A3A3A] transition-transform duration-300 hover:scale-[1.03]">
                  Planear mi viaje <ArrowRight className="size-4" />
                </a>
                <a href="#categorias" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/80">Ver experiencias</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categorias" className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-medium tracking-wide text-[#C9A84C]">Experiencias</span>
            <h2 className="mt-3 font-heading text-4xl text-[#1A3A3A] md:text-5xl font-bold">Cada viaje cuenta una historia distinta</h2>
            <p className="mt-4 leading-relaxed text-[#1A3A3A]/60">Elige el tipo de experiencia que buscas. Nosotros nos encargamos del resto.</p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-[#1A3A3A]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C9A84C]/40 hover:shadow-xl">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-[#1A3A3A] text-[#C9A84C]"><cat.icon className="size-6" /></span>
                  <h3 className="mt-5 font-heading text-xl text-[#1A3A3A]">{cat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1A3A3A]/60">{cat.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="proceso" className="bg-[#1A3A3A] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Cómo funciona</p>
            <h2 className="font-heading text-4xl text-white md:text-5xl font-bold">Tu viaje, en 3 pasos</h2>
            <p className="mt-4 text-white/60 text-lg">Simple, transparente y sin sorpresas.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 120}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col">
                  <span className="font-heading text-6xl font-black text-[#C9A84C] leading-none mb-4">{step.num}</span>
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm flex-1">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY / DESTINATIONS */}
      <section id="destinos" className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-medium tracking-wide text-[#C9A84C]">Destinos destacados</span>
            <h2 className="mt-3 font-heading text-4xl text-[#1A3A3A] md:text-5xl font-bold">Lugares que se quedan contigo</h2>
            <p className="mt-4 leading-relaxed text-[#1A3A3A]/60">Una muestra de lo que diseñamos para nuestros viajeros.</p>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {GALLERY.map((dest, i) => (
              <Reveal key={dest.title} delay={i * 90} as="article">
                <div className="group relative h-96 overflow-hidden rounded-2xl">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0D2222] via-[#1A3A3A]/40 to-transparent transition-opacity duration-500 group-hover:from-[#0D2222]/95"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <h3 className="font-heading text-2xl text-white">{dest.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">{dest.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-center text-sm text-[#1A3A3A]/50">
              Fotos de referencia. Cada itinerario se diseña según el destino que elijas.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MASCOT / WHY US */}
      <section id="nosotros" className="overflow-hidden bg-[#0D2222]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 md:grid-cols-2 md:gap-12 md:px-8 md:py-24">
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/viajero-genius-v2.webp"
              alt="El Viajero Genius, figura misteriosa con sombrero dorado y abrigo blanco"
              width={588}
              height={880}
              loading="lazy"
              className="w-full max-w-sm rounded-2xl object-contain shadow-2xl ring-1 ring-[#C9A84C]/20"
            />
          </div>
          <div>
            <Reveal>
              <span className="text-sm tracking-wide text-[#C9A84C]">Por qué Genius VC Travel</span>
              <h2 className="mt-3 font-heading text-4xl text-white md:text-5xl font-bold">El mismo viajero que te abre las puertas del mundo</h2>
              <p className="mt-5 max-w-md leading-relaxed text-white/70">El Viajero Genius es nuestro símbolo: libertad, movilidad y buen criterio en cada decisión.</p>
              <div className="mt-8 space-y-5">
                {DIFFERENTIATORS.map((d) => (
                  <div key={d.title} className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/15 text-[#C9A84C]"><d.icon className="size-5" /></span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-white">{d.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="font-heading text-4xl text-[#1A3A3A] md:text-5xl font-bold">Lo que dicen nuestros viajeros</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7">
                  <div className="flex items-center gap-1 text-[#C9A84C]">
                    {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="size-4 fill-[#C9A84C]" />)}
                  </div>
                  <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-[#1A3A3A]/80">{`"${t.quote}"`}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5">
                    <span className="flex size-11 items-center justify-center rounded-full bg-[#1A3A3A] font-medium text-white">{t.initials}</span>
                    <span>
                      <span className="block text-sm font-medium text-[#1A3A3A]">{t.name}</span>
                      <span className="block text-xs text-gray-500">{t.flag} {t.country}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="bg-[#1A3A3A] py-24 md:py-32">
        <Reveal className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="font-heading text-4xl text-white md:text-5xl font-bold">¿Listo para tu próximo viaje?</h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-white/70">Cuéntanos qué tienes en mente. Diseñamos tu itinerario sin compromiso.</p>
          <a href={WA_TRAVEL_URL} target="_blank" rel="noopener noreferrer" className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C9A84C] px-9 py-4 text-base font-semibold text-[#1A3A3A] transition-transform duration-300 hover:scale-[1.03]">
            <MessageCircle className="size-5" />
            Escribir por WhatsApp
          </a>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-sm text-white/75 sm:flex-row sm:gap-10">
            <a href="mailto:geniusvisac@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-[#C9A84C]"><Mail className="size-4 text-[#C9A84C]" />geniusvisac@gmail.com</a>
            <span className="inline-flex items-center gap-2"><Clock className="size-4 text-[#C9A84C]" />Lun-Vie 8am-6pm · Sáb 9am-1pm</span>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D2222] py-8 px-6 text-center">
        <a href="/" className="text-[#C9A84C] text-sm hover:opacity-80 mr-6">Genius Visa Consultants</a>
        <p className="text-white/30 text-xs mt-3">2026 Genius Visa Consultants · Genius VC Travel · Tegucigalpa, Honduras</p>
        <div className="mt-2 flex justify-center gap-4 text-xs text-white/30">
          <a href="/privacidad" className="hover:text-white/60">Política de Privacidad</a>
          <a href="/terminos" className="hover:text-white/60">Términos</a>
        </div>
      </footer>

      <WhatsappButton />

    </main>
  )
}
