import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const bigStats = [
  { value: '+32%', label: 'Average revenue increase' },
  { value: '18%', label: 'Avg occupancy improvement' },
  { value: '3\u00d7', label: 'Return on marketing spend' },
]

const testimonials = [
  {
    quote: "StorScale transformed our marketing. We went from 71% to 94% occupancy in 90 days. The team handles everything.",
    name: 'Mike D.',
    role: 'Owner, Ridgeline Storage \u2014 Phoenix, AZ',
    initials: 'MD',
  },
  {
    quote: "I was skeptical at first but the results speak for themselves. $22k more per month with zero additional effort on my end.",
    name: 'Sarah K.',
    role: 'Operator, Coast Clear Storage \u2014 Tampa, FL',
    initials: 'SK',
  },
  {
    quote: "The AI recommendations are incredibly accurate. Our Google rankings went from page 3 to #1 within six weeks.",
    name: 'James T.',
    role: 'Owner, Blue Ridge Self Storage \u2014 Denver, CO',
    initials: 'JT',
  },
]

export function SocialProofSection() {
  return (
    <section className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">Results</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] leading-[1.1]">
            Proven results across 180+ facilities
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 mb-16 text-center">
          {bigStats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            >
              <p className="text-7xl lg:text-8xl font-bold text-[#F1F5F9] leading-none">{stat.value}</p>
              <p className="text-sm text-[#94A3B8] mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="bg-[#0D1220] border border-[#1E2A42] rounded-xl p-6"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1E2A42] flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-[#94A3B8]">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F1F5F9]">{t.name}</p>
                  <p className="text-xs text-[#475569]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
