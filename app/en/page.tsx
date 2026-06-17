import { Metadata } from 'next'
import { ArrowRight, MessageCircle, Mail, Clock, Star, BookOpen, GraduationCap, Briefcase, Users, Globe, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Genius Visa Consultants | US Visa Experts · Honduras',
  description: 'Over 15 years helping people obtain US visas B1/B2, F1, H1B and more. Free AI evaluation. Service in 25+ countries. Tegucigalpa, Honduras.',
  keywords: 'US visa consultant Honduras, american visa help, B1 B2 visa, F1 visa, H1B visa, visa consultant Latin America',
  alternates: {
    canonical: 'https://genius-visa-and-travel.vercel.app/en',
    languages: {
      'es': 'https://genius-visa-and-travel.vercel.app',
      'en': 'https://genius-visa-and-travel.vercel.app/en',
    },
  },
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'

export default function EnglishPage() {
  return (
    <main className="bg-[#1A3A3A]">

      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#1A3A3A]/95 backdrop-blur-md shadow-lg">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <a href="/en" className="flex items-center gap-3">
            <img src="/images/logo-visa.webp" alt="Genius Visa Consultants" className="size-12 rounded-full" />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-sans text-sm font-semibold tracking-widest uppercase text-white">Genius Visa Consultants</span>
              <span className="font-sans text-xs font-light tracking-widest uppercase text-[#C9A84C]">& Genius VC Travel</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Visas', href: '#visas' },
              { label: 'Travel', href: '#travel' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/80 transition-colors hover:text-[#C9A84C]">{link.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="hidden text-xs text-white/50 hover:text-white transition-colors sm:block">🇪🇸 Español</a>
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#C9A84C] px-5 py-2 text-sm font-medium text-[#C9A84C] transition-all hover:bg-[#C9A84C] hover:text-[#1A3A3A]">
              Evaluate my profile
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#1A3A3A] pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f8f6f1 1px, transparent 0)', backgroundSize: '22px 22px' }} />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 px-4 py-1.5 text-xs tracking-wide text-[#C9A84C]">
              Genius Visa Consultants · Genius VC Travel
            </span>
            <h1 className="mt-6 font-heading text-5xl leading-[1.05] text-white md:text-7xl font-bold">
              Your global mobility, our mission
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              Over 15 years connecting people with the world. Visas, travel and freedom.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-7 py-3.5 text-sm font-semibold text-[#1A3A3A] transition-transform duration-300 hover:scale-[1.03]">
                Evaluate my profile for free
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#visas" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/70">
                Our services
              </a>
            </div>
            <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 md:mt-24 md:grid-cols-4">
              {[
                { value: '15+', label: 'Years of experience' },
                { value: '25+', label: 'Countries served' },
                { value: '98%', label: 'Satisfied clients' },
                { value: '500+', label: 'Families assisted' },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="font-heading text-3xl text-[#C9A84C] md:text-4xl">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-white/60">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="overflow-hidden border-y border-white/10 bg-[#0D2222] py-6">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((group) => (
            <ul key={group} className="flex shrink-0 items-center gap-12 px-6" aria-hidden={group === 1}>
              {[
                { name: 'Colombia', code: 'co' }, { name: 'Mexico', code: 'mx' },
                { name: 'Ecuador', code: 'ec' }, { name: 'Honduras', code: 'hn' },
                { name: 'Peru', code: 'pe' }, { name: 'Dom. Republic', code: 'do' },
                { name: 'Argentina', code: 'ar' }, { name: 'Chile', code: 'cl' },
                { name: 'Guatemala', code: 'gt' }, { name: 'Bolivia', code: 'bo' },
                { name: 'Spain', code: 'es' }, { name: 'Canada', code: 'ca' },
                { name: 'Brazil', code: 'br' }, { name: 'Portugal', code: 'pt' },
                { name: 'Italy', code: 'it' }, { name: 'UK', code: 'gb' },
                { name: 'Venezuela', code: 've' }, { name: 'Costa Rica', code: 'cr' },
              ].map((country) => (
                <li key={`${group}-${country.code}`} className="flex items-center gap-3 whitespace-nowrap text-sm tracking-wide text-white/70">
                  <img src={`https://flagcdn.com/w40/${country.code}.png`} alt={country.name} width={28} height={21} loading="lazy" className="h-5 w-7 shrink-0 rounded-sm object-cover ring-1 ring-white/15" />
                  {country.name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* VISA SERVICES */}
      <section id="visas" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-medium tracking-wide text-[#3DB89E]">Genius Visa Consultants</span>
            <h2 className="mt-3 font-heading text-4xl text-[#1A3A3A] md:text-5xl font-bold">US Visa Experts</h2>
            <p className="mt-4 leading-relaxed text-[#1A3A3A]/60">Every case is unique. We guide you step by step so you arrive at your interview with the best preparation possible.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BookOpen, title: 'Tourist Visas', tag: 'B1 / B2', desc: 'Travel for business or pleasure with a clear and well-prepared process.', href: '/visas/b1-b2' },
              { icon: GraduationCap, title: 'Student Visas', tag: 'F1 / M1', desc: 'Study in the United States with a solid profile and full support.', href: '/visas/f1' },
              { icon: Briefcase, title: 'Work Visas', tag: 'H1B / H2B / J1', desc: 'Work opportunities and professional exchange programs.', href: '/visas/h1b' },
              { icon: Users, title: 'Family Visas', tag: 'H4 / F2 / J2', desc: 'Reunite with your family and travel together with your loved ones.', href: '/visas/familiares' },
              { icon: Globe, title: 'Special Cases', tag: 'Complex cases', desc: 'Tailored advisory for complex immigration processes.', href: '#contact' },
            ].map((service, i) => (
              <div key={service.title} className="group h-full rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3DB89E]/40 hover:shadow-xl">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-[#1A3A3A] text-white">
                  <service.icon className="size-6" />
                </span>
                <div className="mt-5 flex items-baseline gap-2">
                  <h3 className="font-heading text-xl text-[#1A3A3A]">{service.title}</h3>
                  <span className="text-xs text-[#C9A84C]">{service.tag}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#1A3A3A]/60">{service.desc}</p>
                <a href={service.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A84C] transition-colors hover:text-[#1A3A3A]">
                  Learn more <ArrowRight className="size-3.5" />
                </a>
              </div>
            ))}
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col justify-between rounded-2xl border border-[#C9A84C]/50 bg-[#1A3A3A] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div>
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-[#C9A84C] text-[#1A3A3A]"><Sparkles className="size-6" /></span>
                <h3 className="mt-5 font-heading text-xl text-white">Free AI Evaluation</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">Discover your real chances in minutes with our artificial intelligence tool.</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A84C]">Start now <ArrowRight className="size-3.5" /></span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 STEPS */}
      <section className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">How it works</p>
            <h2 className="font-heading text-4xl text-[#1A3A3A] md:text-5xl font-bold">Your path to success in 3 steps</h2>
            <p className="mt-4 text-[#1A3A3A] text-lg font-medium">A process designed to maximize your approval chances.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'AI Diagnosis', sub: '2 minutes', desc: 'Evaluate your profile for free and discover your real approval percentage. No commitment, no cost, no waiting.', cta: true },
              { num: '02', title: 'Human Strategy', sub: 'Personalized advisory', desc: 'An expert consultant with 15+ years of experience refines your case, prepares your documents and eliminates errors that cause 80% of rejections.', cta: false },
              { num: '03', title: 'Your Visa Approved', sub: 'Go to your interview as a winner', desc: 'Arrive at the embassy with total confidence. We prepare you for every question, every document and every detail.', cta: false },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-8 shadow-md border border-[#1A3A3A]/10 hover:shadow-xl transition-shadow h-full flex flex-col">
                <span className="font-heading text-7xl font-black text-[#C9A84C] leading-none mb-4">{step.num}</span>
                <span className="inline-block text-xs font-bold text-[#C9A84C] bg-[#C9A84C]/15 px-3 py-1 rounded-full mb-4 w-fit uppercase tracking-wider">{step.sub}</span>
                <h3 className="font-heading text-2xl font-bold text-[#1A3A3A] mb-3">{step.title}</h3>
                <p className="text-[#1A3A3A]/75 leading-relaxed text-sm flex-1 font-medium">{step.desc}</p>
                {step.cta && <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-[#C9A84C] text-[#1A3A3A] px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 w-fit">Evaluate now →</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI CTA */}
      <section className="relative overflow-hidden bg-[#1A3A3A] py-24 md:py-32">
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <div className="mx-auto h-px w-16 bg-[#C9A84C]" />
          <h2 className="mt-7 font-heading text-4xl leading-tight text-white md:text-5xl font-bold">Do you have chances of getting your visa?</h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/70">Our AI tool evaluates your profile in minutes and gives you a real diagnosis, at no cost.</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-4 py-2">
            <span className="relative flex size-2"><span className="absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75"></span><span className="relative inline-flex size-2 rounded-full bg-[#C9A84C]"></span></span>
            <span className="text-xs font-semibold text-[#C9A84C] tracking-wide">Algorithm updated with June 2026 consular criteria</span>
          </div>
          <div className="mt-8">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-9 py-4 text-base font-semibold text-[#1A3A3A] transition-transform duration-300 hover:scale-[1.03]">
              Start free evaluation <ArrowRight className="size-5" />
            </a>
          </div>
          <p className="mt-6 text-sm text-white/50">No commitment · Immediate response · 100% confidential</p>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="bg-[#1A3A3A] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Full transparency</p>
            <h2 className="font-heading text-4xl text-white md:text-5xl font-bold">Your questions, answered</h2>
            <p className="mt-4 text-white/60 text-lg">We know that trusting an online service requires certainty. Here is everything you need to know.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔒', q: 'Is my data safe?', a: 'Yes. We use bank-level encryption to protect all your consular and personal information. We never share your data with third parties.' },
              { icon: '📊', q: 'What if my profile score is low?', a: 'We connect you with a human advisor to build a personalized improvement strategy. We do not leave you alone — we work with you to strengthen your case.' },
              { icon: '✅', q: 'Do you guarantee visa approval?', a: 'No one can guarantee the embassy\'s decision. What we guarantee is preparing you with the strongest possible strategy to maximize your chances.' },
              { icon: '🤖', q: 'How accurate is the AI evaluation?', a: 'Our tool analyzes your profile with consular criteria updated to 2026. It is a highly reliable diagnostic guide, backed by 15+ years of real experience.' },
              { icon: '💬', q: 'Can I speak with a human advisor?', a: 'Always. After your AI evaluation, you can schedule a personalized consultation with one of our experts via WhatsApp or video call.' },
              { icon: '🌍', q: 'Do you serve my country?', a: 'We serve clients in more than 25 countries including Honduras, Colombia, Mexico, Ecuador, Peru, Spain, Argentina, Chile, Guatemala and more.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#C9A84C]/30 transition-all h-full flex flex-col">
                <span className="text-3xl mb-4">{faq.icon}</span>
                <h3 className="font-heading text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-white/65 leading-relaxed text-sm flex-1">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center border-t border-white/10 pt-10">
            <p className="text-white/60 text-sm mb-4">Have another question? Write to us directly.</p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:scale-105 transition-transform">
  <svg viewBox="0 0 24 24" className="size-7 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="font-heading text-4xl text-[#1A3A3A] md:text-5xl font-bold">What our clients say</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { name: 'Maria Fernanda Lopez', flag: '🇭🇳', country: 'Honduras', initials: 'ML', quote: 'They prepared me for my interview with incredible detail. I got my B1/B2 visa approved on the first try. Totally recommended.' },
              { name: 'Andres Restrepo', flag: '🇨🇴', country: 'Colombia', initials: 'AR', quote: 'The AI evaluation gave me clarity from the start. The support was close and professional at every step of the process.' },
              { name: 'Gabriela Sanchez', flag: '🇲🇽', country: 'Mexico', initials: 'GS', quote: 'I managed my student visa with them and everything was flawless. They also organized my trip. A truly premium service.' },
            ].map((t) => (
              <figure key={t.name} className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7">
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
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#1A3A3A] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="font-heading text-4xl text-white md:text-5xl font-bold">Ready to take the next step?</h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-white/70">Let us talk about your case. We respond directly via WhatsApp.</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C9A84C] px-9 py-4 text-base font-semibold text-[#1A3A3A] transition-transform duration-300 hover:scale-[1.03]">
            <MessageCircle className="size-5" />
            Write to us on WhatsApp
          </a>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-sm text-white/75 sm:flex-row sm:gap-10">
            <a href="mailto:geniusvisac@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-[#C9A84C]"><Mail className="size-4 text-[#C9A84C]" />geniusvisac@gmail.com</a>
            <span className="inline-flex items-center gap-2"><Clock className="size-4 text-[#C9A84C]" />Mon–Fri 8am–6pm · Sat 9am–1pm</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D2222] py-8 px-6 text-center">
        <a href="/" className="text-[#C9A84C] text-sm hover:opacity-80 mr-6">🇪🇸 Ver en Español</a>
        <p className="text-white/30 text-xs mt-3">© 2026 Genius Visa Consultants · Genius VC Travel · Tegucigalpa, Honduras</p>
        <div className="mt-2 flex justify-center gap-4 text-xs text-white/30">
          <a href="/privacidad" className="hover:text-white/60">Privacy Policy</a>
          <a href="/terminos" className="hover:text-white/60">Terms</a>
        </div>
      </footer>

    </main>
  )
}
