import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'F1 and M1 Student Visa | Genius Visa Consultants',
  description: 'Get your F1 or M1 student visa to study in the United States. Free AI evaluation. US visa experts. Honduras and Latin America.',
  keywords: 'F1 visa, M1 visa, US student visa, study in USA, student visa Honduras',
  alternates: { canonical: `${SITE_URL}/en/visas/f1` },
  openGraph: { url: `${SITE_URL}/en/visas/f1` },
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'
const ACCENT = '#4A7FC1'

const visas = [
  { code: 'F1', title: 'F1 Visa — Academic Student', desc: 'The F1 visa is the most common for international students and allows full-time enrollment in academic programs at universities, colleges, seminaries, conservatories, and SEVP-approved academic institutes. F1 holders can work up to 20 hours per week on campus during the academic period and full-time during vacations.' },
  { code: 'M1', title: 'M1 Visa — Vocational Student', desc: 'The M1 visa is designed for students who want to pursue vocational or non-academic technical training programs at SEVP-approved institutions. It is ideal for culinary, mechanics, cosmetology, aviation, and fashion design programs. Unlike F1, M1 holders cannot work during their studies.' },
]

const faqs = [
  { q: 'Do I need to speak English perfectly?', a: 'Not necessarily. Many institutions have their own language requirements — some accept students with intermediate level if the program includes intensive English classes. The important thing is to have a valid admission letter from an SEVP-approved institution.' },
  { q: 'Can I work while studying?', a: 'With an F1 visa you can work up to 20 hours per week on campus during the academic year and full-time during vacations. The OPT (Optional Practical Training) program also allows you to work in your field of study for up to 12 months (or 36 months for STEM careers) after graduating.' },
  { q: 'What happens if I change universities?', a: 'You can transfer to another SEVP-approved institution, but you must notify your current university and ensure the new one issues a new I-20 form before starting classes. The process must be done correctly to avoid losing your F1 status.' },
  { q: 'Can I bring my family?', a: 'Yes. Your spouse and children under 21 can apply for the F2 visa. However, F2 holders cannot work or study full-time in the United States. Our team can advise you on processing both visas in parallel.' },
]

const crossLinks = [
  { label: 'Bring your family — See Family Visas (F2)', href: '/en/visas/familiares', color: '#5A9E6F' },
  { label: 'After graduating? See H1B Work Visa', href: '/en/visas/h1b', color: '#C9A84C' },
]

export default function VisaF1EN() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 bg-[#1A3A3A]/95 backdrop-blur-md shadow-lg">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="/en" className="flex items-center gap-3">
            <img src="/images/logo-visa.webp" alt="Genius Visa Consultants" className="size-10 rounded-full" />
            <span className="hidden text-sm font-semibold tracking-widest uppercase text-white sm:block">Genius Visa Consultants</span>
          </a>
          <a href="/en" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">← Back to home</a>
        </nav>
      </header>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center size-20 rounded-2xl mb-6 mx-auto" style={{ backgroundColor: `${ACCENT}20`, border: `1px solid ${ACCENT}40` }}><span className="text-4xl">🎓</span></div>
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Student Visa</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">Student Visas<br/>F1 · M1</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">Studying in the United States is one of the most important investments of your life. We accompany you every step of the way.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: ACCENT }}>Evaluate my profile for free →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">Talk to an advisor</a>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">Available student visas</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-10">The United States offers two main types of visas for international students depending on the type of academic program they wish to pursue.</p>
          <div className="space-y-6">
            {visas.map((visa) => (
              <div key={visa.code} className="rounded-2xl border bg-white p-8 hover:shadow-md transition-shadow" style={{ borderColor: `${ACCENT}30` }}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center justify-center size-12 rounded-xl font-heading font-black text-lg text-white" style={{ backgroundColor: ACCENT }}>{visa.code}</span>
                  <h3 className="font-heading text-xl font-bold text-[#1A3A3A]">{visa.title}</h3>
                </div>
                <p className="text-[#1A3A3A]/65 leading-relaxed text-sm">{visa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">Main requirements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Admission letter from SEVP-approved institution','I-20 form issued by the educational institution','Valid passport with at least 6 months of validity','DS-160 form completed correctly','SEVIS fee payment (I-901)','Proof of financial solvency to cover studies and expenses','Demonstration of ties to your home country','Program language proficiency or acceptance letter with language requirement'].map((req) => (
              <div key={req} className="flex items-start gap-3 p-4 bg-[#F8F6F1] rounded-xl">
                <span className="font-bold mt-0.5" style={{ color: ACCENT }}>✓</span>
                <p className="text-[#1A3A3A]/75 text-sm leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">The Genius process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Free evaluation', desc: 'We analyze your academic and financial profile with AI to determine your probability of approval.' },
              { num: '02', title: 'Document preparation', desc: 'We help you organize all required documentation, including the DS-160, I-20, and proof of financial solvency.' },
              { num: '03', title: 'Interview preparation', desc: 'We prepare you to answer student visa specific questions with confidence and clarity.' },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border-t-4" style={{ borderColor: ACCENT }}>
                <span className="font-heading text-4xl font-black" style={{ color: ACCENT }}>{step.num}</span>
                <h3 className="font-heading text-lg font-bold text-[#1A3A3A] mt-2 mb-3">{step.title}</h3>
                <p className="text-[#1A3A3A]/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A3A3A] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-white font-bold mb-10">Frequently asked questions — F1/M1 Visa</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/10 transition-colors">
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: ACCENT }}>{faq.q}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6" style={{ backgroundColor: ACCENT }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-white font-bold mb-4">Ready to study in the United States?</h2>
          <p className="text-white/80 mb-8">Start with a free evaluation and discover your approval probability in 2 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">Evaluate my profile for free →</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-white hover:text-[#1A3A3A] transition-colors">WhatsApp: +504 9741-0936</a>
          </div>
        </div>
      </section>
      <section className="bg-[#0D2222] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/50 text-sm text-center mb-6 uppercase tracking-widest">You might also be interested in</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {crossLinks.map((link) => (
              <a key={link.href} href={link.href} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                <span className="size-2 rounded-full shrink-0" style={{ backgroundColor: link.color }} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-[#0D2222] py-6 px-6 text-center border-t border-white/5">
        <a href="/en" className="text-sm hover:opacity-80 transition-opacity" style={{ color: ACCENT }}>← Back to home</a>
        <p className="text-white/30 text-xs mt-2">© 2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
      </div>
    </main>
  )
}
