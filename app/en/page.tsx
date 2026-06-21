import { Metadata } from 'next'
import { ArrowRight, MessageCircle, Mail, Clock, Star, BookOpen, GraduationCap, Briefcase, Users, Globe, Sparkles } from 'lucide-react'
import { WhatsappButtonEn } from '@/components/whatsapp-button-en'
import { Reveal } from '@/components/reveal'

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

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Visas', href: '#visas' },
  { label: 'Travel', href: '#travel' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Guarantees', href: '#guarantees' },
  { label: 'Free assessment', href: '#evaluation' },
  { label: 'Contact', href: '#contact' },
]

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
            {NAV_LINKS.map((link) => {
              const isExternal = link.href.startsWith('http')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="text-sm text-white/80 transition-colors hover:text-[#C9A84C]"
                >
                  {link.label}
                </a>
              )
            })}
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="hidden text-xs text-white/50 hover:text-white transition-colors sm:block">Es Español</a>
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#C9A84C] px-5 py-2 text-sm font-medium text-[#C9A84C] transition-all hover:bg-[#C9A84C] hover:text-[#1A3A3A]">Evaluate my profile</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-[72vh] items-center overflow-hidden bg-[#1A3A3A] md:min-h-0 pt-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f8f6f1 1px, transparent 0)', backgroundSize: '22px 22px' }} />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-8 pt-16 md:px-8 md:pb-8 md:pt-16">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 px-4 py-1.5 text-xs tracking-wide text-[#C9A84C]">Genius Visa Consultants · Genius VC Travel</span>
            </Reveal>
            <h1 className="mt-4 font-heading text-3xl leading-[1.1] text-white md:text-4xl lg:text-5xl font-bold">Your global mobility, our mission</h1>
            <Reveal delay={200}>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">Over 15 years connecting people with the world. Visas, travel and freedom.</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-7 py-3.5 text-sm font-semibold text-[#1A3A3A] transition-transform duration-300 hover:scale-[1.03]">
                  Evaluate my profile for free <ArrowRight className="size-4" />
                </a>
                <a href="#visas" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/70">Our services</a>
              </div>
            </Reveal>
            <Reveal delay={450}>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-4 md:mt-6 md:grid-cols-4">
                {[
                  { value: '15+', label: 'Years of experience' },
                  { value: '25+', label: 'Countries served' },
                  { value: '98%', label: 'Satisfied clients' },
                  { value: '500+', label: 'Families assisted' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-heading text-2xl text-[#C9A84C] md:text-4xl">{stat.value}</dt>
                    <dd className="mt-1 text-sm text-white/60">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
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
                { name: 'Spain', code: 'es' }, { name: 'Canada', code: 'ca' },
                { name: 'Brazil', code: 'br' }, { name: 'UK', code: 'gb' },
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
          <Reveal className="max-w-2xl">
            <span className="text-sm font-medium tracking-wide text-[#3DB89E]">Genius Visa Consultants</span>
            <h2 className="mt-3 font-heading text-4xl text-[#1A3A3A] md:text-5xl font-bold">US Visa Experts</h2>
            <p className="mt-4 leading-relaxed text-[#1A3A3A]/60">Every case is unique. We guide you step by step so you arrive at your interview with the best preparation possible.</p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BookOpen, title: 'Tourist Visas', tag: 'B1 / B2', desc: 'Travel for business or pleasure with a clear and well-prepared process.', href: '/en/visas/b1-b2' },
              { icon: GraduationCap, title: 'Student Visas', tag: 'F1 / M1', desc: 'Study in the United States with a solid profile and full support.', href: '/en/visas/f1' },
              { icon: Briefcase, title: 'Work Visas', tag: 'H1B / H2B / J1', desc: 'Work opportunities and professional exchange programs.', href: '/en/visas/h1b' },
              { icon: Users, title: 'Family Visas', tag: 'H4 / F2 / J2', desc: 'Reunite with your family and travel together with your loved ones.', href: '/en/visas/familiares' },
              { icon: Globe, title: 'Special Cases', tag: 'Complex cases', desc: 'Tailored advisory for complex immigration processes.', href: '#contact' },
            ].map((service, i) => (
              <Reveal key={service.title} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3DB89E]/40 hover:shadow-xl">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-[#1A3A3A] text-white"><service.icon className="size-6" /></span>
                  <div className="mt-5 flex items-baseline gap-2">
                    <h3 className="font-heading text-xl text-[#1A3A3A]">{service.title}</h3>
                    <span className="text-xs text-[#C9A84C]">{service.tag}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#1A3A3A]/60">{service.desc}</p>
                  <a href={service.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A84C] transition-colors hover:text-[#1A3A3A]">Learn more <ArrowRight className="size-3.5" /></a>
                </div>
              </Reveal>
            ))}
            <Reveal delay={450}>
              <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col justify-between rounded-2xl border border-[#C9A84C]/50 bg-[#1A3A3A] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div>
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-[#C9A84C] text-[#1A3A3A]"><Sparkles className="size-6" /></span>
                  <h3 className="mt-5 font-heading text-xl text-white">Free AI Evaluation</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">Discover your real chances in minutes with our artificial intelligence tool.</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A84C]">Start now <ArrowRight className="size-3.5" /></span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 STEPS */}
      <section className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">How it works</p>
            <h2 className="font-heading text-4xl text-[#1A3A3A] md:text-5xl font-bold">Your path to success in 3 steps</h2>
            <p className="mt-4 text-[#1A3A3A] text-lg font-medium">A process designed to maximize your approval chances.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'AI Diagnosis', sub: '2 minutes', desc: 'Evaluate your profile for free and discover your real approval percentage. No commitment, no cost, no waiting.', cta: true },
              { num: '02', title: 'Human Strategy', sub: 'Personalized advisory', desc: 'An expert consultant with 15+ years of experience refines your case, prepares your documents and eliminates errors that cause 80% of rejections.', cta: false },
              { num: '03', title: 'Your Visa Approved', sub: 'Go to your interview as a winner', desc: 'Arrive at the embassy with total confidence. We prepare you for every question, every document and every detail.', cta: false },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 120}>
                <div className="bg-white rounded-2xl p-8 shadow-md border border-[#1A3A3A]/10 hover:shadow-xl transition-shadow h-full flex flex-col">
                  <span className="font-heading text-7xl font-black text-[#C9A84C] leading-none mb-4">{step.num}</span>
                  <span className="inline-block text-xs font-bold text-[#C9A84C] bg-[#C9A84C]/15 px-3 py-1 rounded-full mb-4 w-fit uppercase tracking-wider">{step.sub}</span>
                  <h3 className="font-heading text-2xl font-bold text-[#1A3A3A] mb-3">{step.title}</h3>
                  <p className="text-[#1A3A3A]/75 leading-relaxed text-sm flex-1 font-medium">{step.desc}</p>
                  {step.cta && <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-[#C9A84C] text-[#1A3A3A] px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 w-fit">Evaluate now</a>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI CTA */}
      <section id="evaluation" className="relative overflow-hidden bg-[#1A3A3A] py-24 md:py-32">
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
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
          </Reveal>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Full transparency</p>
            <h2 className="font-heading text-4xl text-[#1A3A3A] md:text-5xl font-bold">No surprises. No fine print.</h2>
            <p className="mt-4 text-[#1A3A3A]/60 text-lg">Start for free. Scale when you&apos;re ready.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                name: 'AI Evaluation',
                price: '$0',
                description: 'Discover your consular risk profile in 2 minutes.',
                badge: '100% Free',
                badgeColor: 'bg-[#3DB89E]/20 text-[#3DB89E]',
                features: [
                  'AI-powered profile diagnosis',
                  'Estimated approval percentage',
                  'Risk factor identification',
                  'Initial recommendations',
                ],
                cta: 'Evaluate my profile free',
                href: EVAL_URL,
                highlighted: false,
              },
              {
                name: 'Premium Advisory',
                price: 'Custom',
                description: 'Expert support from start to finish.',
                badge: 'Most popular',
                badgeColor: 'bg-[#C9A84C]/20 text-[#C9A84C]',
                features: [
                  'Everything in the free plan',
                  'Dedicated expert consultant',
                  'Document review and preparation',
                  'Consular interview preparation',
                  'Follow-up until the decision',
                  'Priority WhatsApp support',
                ],
                cta: 'Get a quote',
                href: WA_URL,
                highlighted: true,
              },
              {
                name: 'Genius VC Travel',
                price: 'Tailored',
                description: 'Premium trip planning once your visa is approved.',
                badge: 'New',
                badgeColor: 'bg-[#1A3A3A]/10 text-[#1A3A3A]/50',
                features: [
                  'Personalized itinerary',
                  'Luxury hotels and flights',
                  'Exclusive experiences',
                  '24/7 support during your trip',
                ],
                cta: 'Explore travel',
                href: WA_URL,
                highlighted: false,
              },
            ].map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <div className={`rounded-2xl p-8 h-full flex flex-col ${plan.highlighted ? 'bg-[#1A3A3A] shadow-2xl ring-2 ring-[#C9A84C]' : 'bg-white shadow-md border border-[#1A3A3A]/5'}`}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className={`font-heading text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#1A3A3A]'}`}>{plan.name}</h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${plan.badgeColor}`}>{plan.badge}</span>
                  </div>
                  <div className="mb-4">
                    <span className={`font-heading text-4xl font-black ${plan.highlighted ? 'text-[#C9A84C]' : 'text-[#1A3A3A]'}`}>{plan.price}</span>
                  </div>
                  <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/70' : 'text-[#1A3A3A]/60'}`}>{plan.description}</p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-[#C9A84C] mt-0.5 text-sm font-bold">✓</span>
                        <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-[#1A3A3A]/70'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={plan.href} target="_blank" rel="noopener noreferrer" className={`w-full text-center py-3 rounded-full text-sm font-bold transition-all hover:opacity-90 block ${plan.highlighted ? 'bg-[#C9A84C] text-[#1A3A3A]' : 'border-2 border-[#1A3A3A] text-[#1A3A3A] hover:bg-[#1A3A3A] hover:text-white'}`}>
                    {plan.cta} →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-center text-[#1A3A3A]/60 text-sm mt-10 font-medium">
              Advisory pricing is agreed individually based on case complexity. Contact us for a no-obligation quote.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRAVEL */}
      <section id="travel" className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-medium tracking-wide text-[#C9A84C]">Genius VC Travel</span>
            <h2 className="mt-3 font-heading text-4xl text-[#1A3A3A] md:text-5xl font-bold">Travel differently. Travel with Genius.</h2>
            <p className="mt-4 leading-relaxed text-[#1A3A3A]/60">A premium travel agency for those seeking more than a destination: an experience.</p>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { title: 'Luxury getaways', desc: 'Resorts and private villas in the world\u2019s most exclusive destinations.', image: '/images/escapadas-lujo.webp' },
              { title: 'Dream destinations', desc: 'Unforgettable landscapes and experiences tailored to you.', image: '/images/destinos-ensueno.webp' },
              { title: 'Unique experiences', desc: 'Travel first class with every detail taken care of by us.', image: '/images/experiencias-unicas.webp' },
            ].map((dest, i) => (
              <Reveal key={dest.title} delay={i * 90} as="article">
                <div className="group relative h-96 overflow-hidden rounded-2xl">
                  <img
                    src={dest.image || '/placeholder.svg'}
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
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A84C]">
                      Explore destinations
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section id="guarantees" className="bg-[#1A3A3A] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Full transparency</p>
            <h2 className="font-heading text-4xl text-white md:text-5xl font-bold">Your questions, answered</h2>
            <p className="mt-4 text-white/60 text-lg">We know that trusting an online service requires certainty. Here is everything you need to know.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔒', q: 'Is my data safe?', a: 'Yes. We use bank-level encryption to protect all your consular and personal information. We never share your data with third parties.' },
              { icon: '📊', q: 'What if my profile score is low?', a: 'We connect you with a human advisor to build a personalized improvement strategy. We do not leave you alone — we work with you to strengthen your case.' },
              { icon: '✅', q: 'Do you guarantee visa approval?', a: 'No one can guarantee the embassy decision. What we guarantee is preparing you with the strongest possible strategy to maximize your chances.' },
              { icon: '🤖', q: 'How accurate is the AI evaluation?', a: 'Our tool analyzes your profile with consular criteria updated to 2026. It is a highly reliable diagnostic guide, backed by 15+ years of real experience.' },
              { icon: '💬', q: 'Can I speak with a human advisor?', a: 'Always. After your AI evaluation, you can schedule a personalized consultation with one of our experts via WhatsApp or video call.' },
              { icon: '🌍', q: 'Do you serve my country?', a: 'We serve clients in more than 25 countries including Honduras, Colombia, Mexico, Ecuador, Peru, Spain, Argentina, Chile, Guatemala and more.' },
            ].map((faq, i) => (
              <Reveal key={faq.q} delay={i * 70}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#C9A84C]/30 transition-all h-full flex flex-col">
                  <span className="text-3xl mb-4">{faq.icon}</span>
                  <h3 className="font-heading text-lg font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-white/65 leading-relaxed text-sm flex-1">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-14 text-center border-t border-white/10 pt-10">
              <p className="text-white/60 text-sm mb-4">Have another question? Write to us directly.</p>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1A3A3A] px-8 py-3 rounded-full text-sm font-bold hover:opacity-90">Talk to an advisor</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="font-heading text-4xl text-[#1A3A3A] md:text-5xl font-bold">What our clients say</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { name: 'Maria Fernanda Lopez', flag: '🇭🇳', country: 'Honduras', initials: 'ML', quote: 'They prepared me for my interview with incredible detail. I got my B1/B2 visa approved on the first try. Totally recommended.' },
              { name: 'Andres Restrepo', flag: '🇨🇴', country: 'Colombia', initials: 'AR', quote: 'The AI evaluation gave me clarity from the start. The support was close and professional at every step of the process.' },
              { name: 'Gabriela Sanchez', flag: '🇲🇽', country: 'Mexico', initials: 'GS', quote: 'I managed my student visa with them and everything was flawless. They also organized my trip. A truly premium service.' },
            ].map((t, i) => (
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
      <section id="contact" className="bg-[#1A3A3A] py-24 md:py-32">
        <Reveal className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="font-heading text-4xl text-white md:text-5xl font-bold">Ready to take the next step?</h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-white/70">Let us talk about your case. We respond directly via WhatsApp.</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C9A84C] px-9 py-4 text-base font-semibold text-[#1A3A3A] transition-transform duration-300 hover:scale-[1.03]">
            <MessageCircle className="size-5" />
            Write to us on WhatsApp
          </a>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-sm text-white/75 sm:flex-row sm:gap-10">
            <a href="mailto:geniusvisac@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-[#C9A84C]"><Mail className="size-4 text-[#C9A84C]" />geniusvisac@gmail.com</a>
            <span className="inline-flex items-center gap-2"><Clock className="size-4 text-[#C9A84C]" />Mon-Fri 8am-6pm · Sat 9am-1pm</span>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D2222] py-8 px-6 text-center">
        <a href="/" className="text-[#C9A84C] text-sm hover:opacity-80 mr-6">ES Ver en Espanol</a>
        <p className="text-white/30 text-xs mt-3">2026 Genius Visa Consultants · Genius VC Travel · Tegucigalpa, Honduras</p>
        <div className="mt-2 flex justify-center gap-4 text-xs text-white/30">
          <a href="/privacidad" className="hover:text-white/60">Privacy Policy</a>
          <a href="/terminos" className="hover:text-white/60">Terms</a>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <WhatsappButtonEn />

    </main>
  )
}
