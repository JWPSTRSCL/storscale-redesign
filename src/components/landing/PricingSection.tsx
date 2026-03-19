import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const tiers = [
  {
    name: 'Passive',
    monthlyPrice: 0,
    annualPrice: 0,
    subtitle: 'Insights with no commitment',
    features: [
      'AI recommendations dashboard',
      'Weekly performance reports',
      'Market trend analysis',
      'Email support',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Growth',
    monthlyPrice: 249,
    annualPrice: 199,
    subtitle: 'For single-facility operators ready to grow',
    features: [
      'Everything in Passive',
      'Specialist executes 3 tasks/mo',
      'Monthly clarity call',
      'Google Ads management',
      'GMB optimization',
    ],
    cta: 'Start Growing',
    popular: false,
  },
  {
    name: 'Scale',
    monthlyPrice: 449,
    annualPrice: 359,
    subtitle: 'Our most popular plan for serious operators',
    features: [
      'Everything in Growth',
      'Unlimited task execution',
      'Local SEO campaigns',
      'Revenue management',
      'Priority support',
      'Bi-weekly calls',
    ],
    cta: 'Start Scaling',
    popular: true,
  },
  {
    name: 'Master',
    monthlyPrice: 799,
    annualPrice: 639,
    subtitle: 'Full-service for multi-facility operators',
    features: [
      'Everything in Scale',
      'Multi-location management',
      'Dedicated account manager',
      'Custom reporting',
      'API access',
      'Quarterly strategy sessions',
    ],
    cta: 'Go Enterprise',
    popular: false,
  },
]

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-32 md:py-40">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">
            PRICING
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] text-center">
            Simple, transparent pricing
          </h2>

          {/* Billing toggle */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center bg-[#0D1220]/60 border border-white/[0.06] rounded-full p-1">
              <button
                onClick={() => setAnnual(false)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200 ${
                  !annual ? 'text-white' : 'text-[#94A3B8] hover:text-[#F1F5F9]'
                }`}
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
                className={`relative px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200 ${
                  annual ? 'text-white' : 'text-[#94A3B8] hover:text-[#F1F5F9]'
                }`}
              >
                {annual && (
                  <motion.div
                    layoutId="billing-pill"
                    className="absolute inset-0 bg-[#F97316] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  Annual
                  <span className="bg-[#F97316]/20 text-[#F97316] text-xs font-semibold px-2 py-0.5 rounded-full">
                    Save 20%
                  </span>
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className={`relative rounded-xl p-8 flex flex-col ${
                tier.popular
                  ? 'bg-[#0D1220] border-2 border-[#F97316]'
                  : 'bg-[#0D1220]/80 shadow-lg shadow-black/20'
              }`}
              style={
                tier.popular
                  ? { boxShadow: '0 0 30px rgba(249,115,22,0.15)' }
                  : {}
              }
            >
              {tier.popular && (
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0">
                  <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#F1F5F9]">{tier.name}</h3>
                <p className="text-sm text-[#94A3B8] mt-1">{tier.subtitle}</p>
              </div>

              <div className="mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={annual ? 'annual' : 'monthly'}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-4xl font-bold text-[#F1F5F9]">
                      {tier.monthlyPrice === 0
                        ? 'Free'
                        : `$${annual ? tier.annualPrice : tier.monthlyPrice}`}
                    </span>
                    {tier.monthlyPrice > 0 && (
                      <span className="text-base font-normal text-[#475569] ml-1">
                        /mo
                      </span>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <a
                href="#demo"
                className={`flex items-center justify-center w-full rounded-lg py-3 text-sm font-semibold cursor-pointer transition-colors duration-200 mb-8 ${
                  tier.popular
                    ? 'bg-[#F97316] text-white hover:bg-[#EA6C0E]'
                    : 'bg-white/[0.06] text-[#F1F5F9] hover:bg-white/[0.1]'
                }`}
              >
                {tier.cta}
              </a>

              <ul className="flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#F97316] shrink-0" />
                    <span className="text-sm text-[#94A3B8]">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
