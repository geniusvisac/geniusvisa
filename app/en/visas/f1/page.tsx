import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'F1 and M1 Student Visa | Genius Visa Consultants',
  description: 'Get your F1 or M1 student visa to study in the United States. Free AI evaluation. US visa experts. Honduras and Latin America.',
  keywords: 'F1 visa, M1 visa, US student visa, study in USA, student visa Honduras',
  alternates: { canonical: `${SITE_URL}/en/visas/f1` },
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'

const visas = [
  { code: 'F1', title: 'F1 Visa — Academic Student', desc: 'The F1 visa is the most common for international students and allows full-time enrollment in academic programs at universities, colleges, seminaries, conservatories, and academic institutes approved by SEVP. F1 holders can work up to 20 hours per week on campus during the academic period and full-time during vacations.' },
  { code: 'M1', title: 'M1 Visa — Vocational Student', desc: 'The M1 visa is designed for students who want to pursue vocational or non-academic technical training programs at SEVP-approved institutions in the United States. It is ideal for culinary, mechanics, cosmetology, aviation, fashion design, and other technical disciplines. Unlike F1, M1 holders cannot work during their studies.' },
]

export default function VisaF1EN() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Student Visa</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">Student Visas<br/>F1 · M1</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">Studying in the United States is one of the most important investments of your life. We accompany you every step of the way.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">Evaluate my profile for free</a>
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
              <div key={visa.code} className="rounded-2xl border border-[#1A3A3A]/10 bg-white p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center justify-center size-12 rounded-xl bg-[#1A3A3A] text-[#C9A84C] font-heading font-black text-lg">{visa.code}</span>
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
            {['Admission letter from SEVP-approved institution','I-20 form issued by the educational institution','Valid passport with at least 6 months of validity','DS-160 form completed correctly','SEVIS fee payment (I-901)','Proof of financial solvency to cover studies and expenses','Demonstration of ties to your home country','Program language proficiency or letter of acceptance with language requirement'].map((req) => (
              <div key={req} className="flex items-start gap-3 p-4 bg-[#F8F6F1] rounded-xl">
                <span className="text-[#C9A84C] font-bold mt-0.5">✓</span>
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
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm">
                <span className="font-heading text-4xl font-black text-[#C9A84C]">{step.num}</span>
                <h3 className="font-heading text-lg font-bold text-[#1A3A3A] mt-2 mb-3">{step.title}</h3>
                <p className="text-[#1A3A3A]/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A3A3A] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-white font-bold mb-4">Ready to study in the United States?</h2>
          <p className="text-white/60 mb-8">Start with a free evaluation and discover your approval probability in 2 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#C9A84C] text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">Evaluate my profile for free</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">WhatsApp: +504 9741-0936</a>
          </div>
        </div>
      </section>
      <div className="bg-[#0D2222] py-6 px-6 text-center">
        <a href="/en" className="text-[#C9A84C] text-sm hover:opacity-80 transition-opacity">Back to home</a>
        <p className="text-white/30 text-xs mt-2">2026 Genius Visa Consultants · Tegucigalpa, Honduras</p>
      </div>
    </main>
  )
}
