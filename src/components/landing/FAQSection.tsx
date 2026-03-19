import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const faqs = [
  { q: 'How quickly will I see results?', a: 'Most facilities see measurable improvement in occupancy and revenue within the first 30\u201360 days. Full results typically compound over the first 100 days as our AI gathers more data.' },
  { q: 'Do I need to do anything after signing up?', a: "Very little. You'll approve recommendations and join monthly clarity calls. We handle everything else \u2014 campaign setup, ad management, GMB updates, and more." },
  { q: 'What if I already have a marketing agency?', a: 'StorScale can replace or complement existing marketing. Many clients switch because they want execution included, not just strategy and reports.' },
  { q: 'Do you manage Google Ads directly?', a: 'Yes. We set up, manage, and optimize your Google Ads campaigns. You maintain ownership of your account \u2014 we just run it for you.' },
  { q: 'Is there a contract or lock-in period?', a: 'No long-term contracts. All plans are month-to-month with the option to cancel anytime. Annual plans are discounted but not required.' },
  { q: 'What makes StorScale different from other marketing tools?', a: 'We execute, not just advise. Most tools give you a dashboard. StorScale gives you a team that implements the recommendations for you.' },
  { q: 'Can I start on the free Passive plan?', a: "Yes. The Passive plan is completely free and gives you full access to AI-generated insights and recommendations. Upgrade when you're ready for execution." },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] leading-[1.1]">
            Questions & answers
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
              className="border-b border-[#1E2A42]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
              >
                <span className="text-sm font-medium text-[#F1F5F9] group-hover:text-white transition-colors pr-4">
                  {faq.q}
                </span>
                <span className="shrink-0 text-[#F97316]">
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                    <p className="text-sm text-[#94A3B8] leading-relaxed pb-5">{faq.a}</p>
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
          className="text-center mt-14"
        >
          <h3 className="text-2xl font-bold text-[#F1F5F9] mb-4">Still have questions?</h3>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors duration-200"
          >
            Talk to our team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
