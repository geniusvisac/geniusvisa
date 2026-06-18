import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'B1/B2 Tourist and Business Visa | Genius Visa Consultants',
  description: 'Get your US B1/B2 tourist and business visa with expert help. Free AI evaluation. Over 15 years of experience. Tegucigalpa, Honduras.',
  keywords: 'B1 B2 visa, US tourist visa, business visa USA, american visa Honduras',
  alternates: {
    canonical: 'https://genius-visa-and-travel.vercel.app/en/visas/b1-b2',
  },
}

const EVAL_URL = 'https://app.isavisa.com/consulta/genius-visa-consultant'
const WA_URL = 'https://wa.me/50497410936'

export default function VisaB1B2EN() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen">
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Non-Immigrant Visa</span>
          <h1 className="font-heading text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
            B1/B2 Visa<br/>Tourism and Business
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            The B1/B2 visa is the most requested for traveling to the United States for tourism, visiting family, attending business conferences, or receiving medical treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
              Evaluate my profile for free
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">
              Talk to an advisor
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-6">What is the B1/B2 visa?</h2>
          <p className="text-[#1A3A3A]/70 leading-relaxed mb-4">
            The B1/B2 visa is a temporary visitor visa that allows entry to the United States for tourism (B2) or business (B1) purposes. It is the most common visa and is generally granted for periods of up to 10 years with multiple entries.
          </p>
          <p className="text-[#1A3A3A]/70 leading-relaxed">
            With the B2 visa you can visit tourist destinations, visit relatives or friends, receive medical treatment, or participate in social events. With the B1 you can attend business meetings, conferences, negotiate contracts, or settle commercial matters, as long as you do not receive payment from a US source.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-[#1A3A3A] font-bold mb-8">Main requirements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Valid passport with at least 6 months of validity',
              'DS-160 form completed correctly',
              'Recent photo according to Department of State specifications',
              'Proof of payment of MRV consular fee',
              'Invitation letter or travel itinerary',
              'Bank statements from the last 3-6 months',
              'Employment letter or proof of income',
              'Documents demonstrating ties to your home country',
            ].map((req) => (
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
              { num: '01', title: 'Free evaluation', desc: 'We analyze your profile with AI and tell you your real probability of approval before you invest a single dollar.' },
              { num: '02', title: 'Complete preparation', desc: 'We review and prepare all your documentation, complete the DS-160, and prepare you for the consular interview.' },
              { num: '03', title: 'Full support', desc: 'We accompany you until the day of your interview and prepare you for every question the officer might ask.' },
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
          <h2 className="font-heading text-3xl text-white font-bold mb-4">Ready to get your B1/B2 visa?</h2>
          <p className="text-white/60 mb-8">Start with a free evaluation and discover your approval probability in 2 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#C9A84C] text-[#1A3A3A] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
              Evaluate my profile for free
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:border-white/70 transition-colors">
              WhatsApp: +504 9741-0936
            </a>
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
