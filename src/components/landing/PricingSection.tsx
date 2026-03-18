import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Passive',
    price: 0,
    yearlyPrice: 0,
    description: 'Get listed and found online.',
    buttonText: 'Get Started Free',
    features: [
      'Google My Business optimization',
      'Basic local SEO setup',
      'Monthly performance report',
      'Storage directory listings',
    ],
  },
  {
    name: 'Growth',
    price: 249,
    yearlyPrice: 199,
    description: 'Drive consistent leads and fill units.',
    buttonText: 'Start Growing',
    features: [
      'Everything in Passive',
      'Google Ads management',
      'SEO content & blog posts',
      'Lead capture & CRM integration',
      'Bi-weekly strategy calls',
      'Competitor monitoring',
    ],
  },
  {
    name: 'Scale',
    price: 449,
    yearlyPrice: 359,
    description: 'Dominate your market.',
    buttonText: 'Start Scaling',
    isPopular: true,
    features: [
      'Everything in Growth',
      'Multi-location management',
      'AI-powered dynamic pricing',
      'Retargeting campaigns',
      'Review generation system',
      'Weekly strategy calls',
      'Dedicated account manager',
    ],
  },
  {
    name: 'Master',
    price: 799,
    yearlyPrice: 639,
    description: 'Full-service growth partner.',
    buttonText: 'Talk to Us',
    features: [
      'Everything in Scale',
      'Custom integrations (PMS/CRM)',
      'White-glove onboarding',
      'Priority 24/7 support',
      'Executive business reviews',
      'Unlimited locations',
      'Custom reporting dashboard',
    ],
  },
]

export function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true)

  return (
    <section id="pricing" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FDBA74] text-xs font-semibold text-[#EA580C] uppercase tracking-wide mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Choose the plan that fits your facility. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="relative flex items-center p-1 rounded-full bg-white border border-[#E2E8F0] shadow-sm">
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-[#0F172A]"
              animate={{
                left: isMonthly ? '4px' : '50%',
                right: isMonthly ? '50%' : '4px',
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 40 }}
            />
            <button
              onClick={() => setIsMonthly(true)}
              className={cn(
                'relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer',
                isMonthly ? 'text-white' : 'text-slate-500 hover:text-[#0F172A]',
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={cn(
                'relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer',
                !isMonthly ? 'text-white' : 'text-slate-500 hover:text-[#0F172A]',
              )}
            >
              Annual <span className={cn('text-xs', !isMonthly ? 'text-white/70' : 'text-green-600')}>(Save 20%)</span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: plan.isPopular ? -8 : 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                'relative flex flex-col rounded-2xl p-6',
                plan.isPopular
                  ? 'bg-[#0F172A] text-white border-2 border-[#F97316] shadow-xl'
                  : 'bg-white border border-[#E2E8F0] shadow-sm',
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F97316] text-white text-xs font-semibold shadow">
                    <Star className="size-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-5">
                <h3 className={cn('text-lg font-bold mb-1', plan.isPopular ? 'text-white' : 'text-[#0F172A]')}>
                  {plan.name}
                </h3>
                <p className={cn('text-sm', plan.isPopular ? 'text-white/60' : 'text-slate-500')}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-5">
                <div className="flex items-baseline gap-1">
                  <span className={cn('text-4xl font-extrabold', plan.isPopular ? 'text-white' : 'text-[#0F172A]')}>
                    {plan.price === 0 ? 'Free' : `$${isMonthly ? plan.price : plan.yearlyPrice}`}
                  </span>
                  {plan.price > 0 && (
                    <span className={cn('text-sm', plan.isPopular ? 'text-white/50' : 'text-slate-400')}>
                      /mo
                    </span>
                  )}
                </div>
                {plan.price > 0 && !isMonthly && (
                  <div className="text-xs text-green-400 font-medium mt-1">
                    Save ${(plan.price - plan.yearlyPrice) * 12}/yr
                  </div>
                )}
              </div>

              <ul className="flex-1 space-y-2.5 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <div className={cn(
                      'flex items-center justify-center w-4 h-4 rounded-full mt-0.5 flex-shrink-0',
                      plan.isPopular ? 'bg-[#F97316]' : 'bg-[#0F172A]',
                    )}>
                      <Check className="size-2.5 text-white" />
                    </div>
                    <span className={plan.isPopular ? 'text-white/80' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={cn(
                  'flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer',
                  plan.isPopular
                    ? 'bg-[#F97316] text-white hover:bg-[#EA580C]'
                    : 'bg-[#0F172A] text-white hover:bg-[#1E293B]',
                )}
              >
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center text-sm text-slate-400 mt-8"
        >
          30-day money-back guarantee · No contracts · Cancel anytime
        </motion.p>
      </div>
    </section>
  )
}
