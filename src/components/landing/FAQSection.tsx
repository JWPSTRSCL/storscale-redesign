import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

const faqs = [
  {
    q: 'How quickly will I see results?',
    a: 'Most facilities see measurable improvements within 30 days. Our intelligence engine needs 7-14 days of market data to calibrate, then optimization begins immediately. Significant revenue impact typically compounds by day 90.',
  },
  {
    q: 'Do I need to do anything after signing up?',
    a: "Very little. After a 30-minute onboarding call, our team handles everything \u2014 campaign setup, listing optimization, competitive monitoring. You review recommendations and approve strategy, we execute.",
  },
  {
    q: 'What if I already have a marketing agency?',
    a: 'StorScale complements existing agencies by adding the intelligence layer most agencies lack \u2014 real-time competitive data, dynamic pricing insights, and continuous performance optimization.',
  },
  {
    q: 'Do you manage Google Ads directly?',
    a: 'Yes. Our specialists manage your Google Ads with full transparency. Every bid, keyword, and budget decision is backed by market-specific data and competitive intelligence.',
  },
  {
    q: 'Is there a contract or lock-in period?',
    a: 'No long-term contracts. All plans are month-to-month with the option to cancel anytime. Annual plans offer a 20% discount but are never required.',
  },
  {
    q: 'What makes StorScale different from other marketing tools?',
    a: "We're purpose-built for self-storage revenue optimization. Unlike generic marketing tools, StorScale combines competitive rate intelligence, dynamic pricing, listing optimization, and precision marketing into one integrated platform \u2014 built by people who understand storage economics.",
  },
  {
    q: 'Can I start on the free Passive plan?',
    a: 'Absolutely. The Passive plan gives you access to our revenue intelligence dashboard and competitive monitoring \u2014 so you can see the opportunity before committing to optimization.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 md:py-40">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center"
        >
          <p className="text-[0.8125rem] font-medium tracking-[0.15em] uppercase text-[#F97316] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Questions & answers
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto mt-16">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
              className="border-b border-white/[0.04]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex justify-between items-center w-full text-left cursor-pointer py-5"
              >
                <span className="text-white text-[1.0625rem] font-medium pr-4">
                  {faq.q}
                </span>
                <span className="shrink-0 text-[#475569] transition-transform duration-300">
                  {open === i ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="text-[#94A3B8] text-[0.9375rem] leading-relaxed pb-5 mt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
          className="text-center mt-20"
        >
          <p className="text-lg font-semibold text-white mb-4">
            Still have questions?
          </p>
          <a
            href="#demo"
            className="inline-flex items-center px-7 py-3.5 rounded-xl text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA6C0E] transition-colors duration-200 cursor-pointer"
          >
            Talk to our team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
