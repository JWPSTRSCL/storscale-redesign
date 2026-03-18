import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How quickly will I see results?',
    answer: 'Most facilities see measurable improvements within 30 days — higher Google rankings, more leads, and increased call volume. Full occupancy impact typically takes 60–90 days as SEO compounds and your ad campaigns optimize.',
  },
  {
    question: 'Do I need to sign a long-term contract?',
    answer: 'No contracts required. All plans are month-to-month and you can cancel anytime. We earn your business by delivering results, not by locking you in.',
  },
  {
    question: "What makes StorScale different from other marketing agencies?",
    answer: "We specialize exclusively in self-storage — no generalist agencies trying to figure out your industry. Our team has managed $2M+ in storage ad spend and our AI tools are built specifically for the self-storage market.",
  },
  {
    question: 'What integrations do you support?',
    answer: 'We integrate with all major property management systems including SiteLink, Storable, Tenant Inc., and others. We also connect with Google Ads, Google My Business, SEMrush, and your existing CRM.',
  },
  {
    question: 'How does the AI-powered pricing work?',
    answer: 'Our AI monitors competitor pricing, local demand signals, and your occupancy rate in real-time, then recommends optimal unit prices. Available on Scale and Master plans.',
  },
  {
    question: 'What if I have multiple locations?',
    answer: 'The Scale and Master plans are built for multi-location operators. We manage each location individually while giving you a unified dashboard view across your entire portfolio.',
  },
  {
    question: "Is there a setup fee?",
    answer: 'No setup fees. We get started immediately after onboarding, which typically takes less than a week. You only pay the monthly plan rate.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FDBA74] text-xs font-semibold text-[#EA580C] uppercase tracking-wide mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Frequently asked questions
          </h2>
          <p className="text-slate-500">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={[
                  'rounded-xl border transition-colors duration-200',
                  isOpen ? 'border-[#F97316]/40 bg-[#FFF7ED]/30' : 'border-[#E2E8F0] bg-white hover:border-[#CBD5E1]',
                ].join(' ')}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full px-5 py-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={['text-sm font-semibold', isOpen ? 'text-[#0F172A]' : 'text-[#0F172A]'].join(' ')}>
                    {faq.question}
                  </span>
                  <div className={[
                    'flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 ml-4 transition-colors',
                    isOpen ? 'bg-[#F97316]' : 'bg-[#F1F5F9]',
                  ].join(' ')}>
                    {isOpen
                      ? <Minus className="size-3 text-white" />
                      : <Plus className="size-3 text-slate-500" />
                    }
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* CTA below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 p-8 rounded-2xl bg-[#0F172A]"
        >
          <p className="text-white font-semibold mb-1">Still have questions?</p>
          <p className="text-white/60 text-sm mb-5">
            Book a free 30-minute strategy call and we'll answer everything.
          </p>
          <a
            href="#demo"
            className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors cursor-pointer"
          >
            Book a Free Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
