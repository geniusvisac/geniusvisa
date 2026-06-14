import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { VisaServices } from '@/components/visa-services'
import { Steps } from '@/components/steps'
import { AiEvaluation } from '@/components/ai-evaluation'
import { Pricing } from '@/components/pricing'
import { Guarantees } from '@/components/guarantees'
import { TravelSection } from '@/components/travel-section'
import { Mascot } from '@/components/mascot'
import { Testimonials } from '@/components/testimonials'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <VisaServices />
      <Steps />
      <AiEvaluation />
      <Pricing />
      <Guarantees />
      <TravelSection />
      <Mascot />
      <Testimonials />
      <About />
      <Contact />
      <SiteFooter />
    </main>
  )
}
