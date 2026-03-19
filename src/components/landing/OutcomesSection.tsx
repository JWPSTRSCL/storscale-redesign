import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Users, Star } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const outcomes = [
  { icon: TrendingUp, stat: '+32%', label: 'Average revenue increase in first 90 days' },
  { icon: DollarSign, stat: '$14k', label: 'Average additional monthly revenue per facility' },
  { icon: Users, stat: '180+', label: 'Active storage facilities trust StorScale' },
  { icon: Star, stat: '4.9\u2605', label: 'Average customer satisfaction rating' },
]

export function OutcomesSection() {
  return (
    <section className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">Outcomes</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] leading-[1.1]">
            Real results for real operators
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="bg-[#0D1220] border border-[#1E2A42] rounded-xl p-6"
            >
              <div className="w-10 h-10 bg-[#F97316]/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[#F97316]" />
              </div>
              <p className="text-4xl font-bold text-[#F1F5F9] mb-2 leading-none">{item.stat}</p>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          className="text-center mt-10"
        >
          <a href="#timeline" className="text-sm font-semibold text-[#F97316] hover:text-[#EA580C] transition-colors">
            See how we achieve this →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
