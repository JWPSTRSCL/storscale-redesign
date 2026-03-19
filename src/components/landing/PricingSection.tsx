import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const tiers = [
  {
    name: 'Passive',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'AI insights with no commitment',
    features: ['AI recommendations dashboard', 'Weekly performance reports', 'Market trend analysis', 'Email support'],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Growth',
    monthlyPrice: 249,
    annualPrice: 199,
    description: 'For single-facility operators ready to grow',
    features: ['Everything in Passive', 'Specialist executes 5 tasks/mo', 'Monthly clarity call', 'Google Ads management', 'GMB optimization'],
    cta: 'Start Growing',
    popular: false,
  },
  {
    name: 'Scale',
    monthlyPrice: 449,
    annualPrice: 359,
    description: 'Our most popular plan for serious operators',
    features: ['Everything in Growth', 'Unlimited task execution', 'Local SEO campaigns', 'Review management', 'Priority support', 'Bi-weekly calls'],
    cta: 'Start Scaling',
    popular: true,
  },
  {
    name: 'Master',
    monthlyPrice: 799,
    annualPrice: 639,
    description: 'Full-service for multi-facility operators',
    features: ['Everything in Scale', 'Multi-location management', 'Dedicated account manager', 'Custom reporting', 'API access', 'Quarterly strategy sessions'],
    cta: 'Go Enterprise',
    popular: false,
  },
]

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-6 leading-[1.1]">
            Simple, transparent pricing
          </h2>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-[#0D1220] border border-[#1E2A42] rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer ${!annual ? 'text-white' : 'text-[#94A3B8] hover:text-[#F1F5F9]'}`}
            >
              {!annual && (
                <motion.div
                  layoutId="billing-pill"
                  className="absolute inset-0 bg-[#F97316] rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer ${annual ? 'text-white' : 'text-[#94A3B8] hover:text-[#F1F5F9]'}`}
            >
              {annual && (
                <motion.div
                  layoutId="billing-pill"
                  className="absolute inset-0 bg-[#F97316] rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                Annual <span className="text-xs opacity-75 ml-1">Save 20%</span>
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className={`relative bg-[#0D1220] rounded-xl p-6 flex flex-col ${
                tier.popular ? 'border border-[#F97316]' : 'border border-[#1E2A42]'
              }`}
              style={tier.popular ? { boxShadow: '0 0 40px rgba(249,115,22,0.08)' } : {}}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#F97316] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-bold text-[#F1F5F9] text-lg mb-1">{tier.name}</h3>
                <p className="text-xs text-[#475569]">{tier.description}</p>
              </div>

              <div className="mb-5">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={annual ? 'annual' : 'monthly'}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl font-bold text-[#F1F5F9]"
                  >
                    {tier.monthlyPrice === 0 ? 'Free' : `$${annual ? tier.annualPrice : tier.monthlyPrice}`}
                    {tier.monthlyPrice > 0 && (
                      <span className="text-base font-normal text-[#475569]">/mo</span>
                    )}
                  </motion.p>
                </AnimatePresence>
              </div>

              <ul className="flex-1 space-y-3 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#94A3B8]">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`flex items-center justify-center w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  tier.popular
                    ? 'bg-[#F97316] text-white hover:bg-[#EA580C]'
                    : 'border border-[#1E2A42] text-[#F1F5F9] hover:bg-[#141A2E]'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
