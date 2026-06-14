import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { VisaServices } from '@/components/visa-services'
import { AiEvaluation } from '@/components/ai-evaluation'
import { TravelSection } from '@/components/travel-section'
import { Mascot } from '@/components/mascot'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <VisaServices />
      <AiEvaluation />
      <TravelSection />
      <Mascot />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  )
}
