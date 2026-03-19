import { Navbar } from '@/components/landing/Navbar'
import { Hero } from '@/components/landing/Hero'
import { ProblemSection } from '@/components/landing/ProblemSection'
import { FeaturesSection } from '@/components/landing/FeaturesSection'
import { OutcomesSection } from '@/components/landing/OutcomesSection'
import { IntegrationsSection } from '@/components/landing/IntegrationsSection'
import { TeamSection } from '@/components/landing/TeamSection'
import { TimelineSection } from '@/components/landing/TimelineSection'
import { SocialProofSection } from '@/components/landing/SocialProofSection'
import { PricingSection } from '@/components/landing/PricingSection'
import { FAQSection } from '@/components/landing/FAQSection'
import { Footer } from '@/components/landing/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#070B14] overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <OutcomesSection />
      <IntegrationsSection />
      <TeamSection />
      <TimelineSection />
      <SocialProofSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
