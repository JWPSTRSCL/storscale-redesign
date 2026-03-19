import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const faqs = [
  {
    q: 'How quickly will I see results?',
    a: 'Most facilities see measurable improvements within the first 30 days. Our AI begins optimizing your campaigns immediately, and results compound over the first 90 days as the system gathers more performance data.',
  },
  {
    q: 'Do I need to do anything after signing up?',
    a: "Very little. After a 30-minute onboarding call, our team handles everything \u2014 campaign setup, ad management, GMB updates, and ongoing optimization. You just approve recommendations and join your scheduled calls.",
  },
  {
    q: 'What if I already have a marketing agency?',
    a: 'StorScale can work alongside your existing agency or replace them entirely. Many operators switch because they want execution included, not just strategy decks and monthly reports.',
  },
  {
    q: 'Do you manage Google Ads directly?',
    a: 'Yes. Our AI agents have direct access to your Google Ads account and manage campaigns in real-time. You maintain full ownership of your account \u2014 we just run it better.',
  },
  {
    q: 'Is there a contract or lock-in period?',
    a: 'No long-term contracts. All plans are month-to-month with the option to cancel anytime. Annual plans offer a 20% discount but are never required.',
  },
  {
    q: 'What makes StorScale different from other marketing tools?',
    a: "We're purpose-built for self-storage. Unlike generic marketing platforms, every algorithm, benchmark, and strategy is tuned specifically for the storage industry. Plus, we execute \u2014 not just advise.",
  },
  {
    q: 'Can I start on the free Passive plan?',
    a: 'Absolutely. The Passive plan gives you access to our AI recommendations dashboard, weekly performance reports, and market trend analysis \u2014 completely free. Upgrade whenever you want execution.',
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
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] text-center">
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
              className="border-b border-white/[0.06]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex justify-between items-center w-full text-left cursor-pointer py-5"
              >
                <span className="text-[#F1F5F9] text-base font-medium pr-4">
                  {faq.q}
                </span>
                <span className="shrink-0 text-[#F97316] transition-transform duration-300">
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
                    <p className="text-[#94A3B8] text-sm leading-relaxed pb-5 mt-3">
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
          <p className="text-lg font-semibold text-[#F1F5F9] mb-4">
            Still have questions?
          </p>
          <a
            href="#demo"
            className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA6C0E] transition-colors duration-200 cursor-pointer"
          >
            Talk to our team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
