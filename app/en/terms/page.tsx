import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
export const metadata: Metadata = {
  title: 'Terms and Conditions | Genius Visa Consultants',
  description: 'Terms and conditions of use for Genius Visa Consultants and Genius VC Travel. Tegucigalpa, Honduras.',
  alternates: { canonical: `${SITE_URL}/en/terms` },
}
export default function Terms() {
  return (
    <main className="bg-[#1A3A3A] min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-4">Legal</p>
        <h1 className="text-4xl text-white mb-2">Terms and Conditions</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: June 2026</p>
        {[
          { title: "1. Purpose", body: "These terms govern the use of the website and the services offered by Genius Visa Consultants and Genius VC Travel." },
          { title: "2. Nature of the service", body: "Genius Visa Consultants is an immigration consulting firm. We are not immigration attorneys nor legal representatives before any government entity. Our services are guidance, preparation, and support oriented." },
          { title: "3. No guarantee of approval", body: "No contracted service guarantees visa approval. The final decision rests exclusively with the United States consular authorities." },
          { title: "4. AI-based assessment", body: "The profile assessment tool (ISAVISA) generates indicative results based on statistical data. It does not constitute legal advice and does not guarantee any outcome." },
          { title: "5. Payments and refunds", body: "Consulting fees are agreed upon individually. Once the process has begun, no refunds will be issued except for causes attributable to Genius." },
          { title: "6. Intellectual property", body: "All content on this site — text, images, brand, the mascot El Viajero Genius — is the property of Genius Visa Consultants. Reproduction without written authorization is prohibited." },
          { title: "7. Governing law", body: "These terms are governed by the laws of the Republic of Honduras." },
          { title: "8. Contact", body: "geniusvisac@gmail.com · +504 9741-0936 · Tegucigalpa, Honduras." },
        ].map((item) => (
          <div key={item.title} className="mb-10 border-t border-white/10 pt-8">
            <h2 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-3">{item.title}</h2>
            <p className="text-white/70 leading-relaxed text-sm">{item.body}</p>
          </div>
        ))}
        <div className="mt-16 text-center">
          <a href="/en" className="inline-block border border-[#C9A84C] text-[#C9A84C] px-8 py-3 rounded-full text-sm hover:bg-[#C9A84C] hover:text-[#1A3A3A] transition-colors">Back to home</a>
        </div>
      </div>
    </main>
  )
}
