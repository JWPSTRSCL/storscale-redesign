import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock, Shield, Globe, Sparkles } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

const outcomes = [
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    description:
      'Dynamic pricing and SpareFoot listing optimization working in tandem to capture more revenue from every available unit.',
  },
  {
    icon: Users,
    title: 'Occupancy Boost',
    description:
      'Demand forecasting and targeted tenant acquisition fill units faster and reduce vacancy loss across your portfolio.',
  },
  {
    icon: Clock,
    title: 'Operational Efficiency',
    description:
      'Free your team to focus on portfolio growth and acquisitions while always-on marketing and pricing run in the background.',
  },
  {
    icon: Shield,
    title: 'Data-Driven Decisions',
    description:
      'Every pricing and marketing decision backed by competitive rate intelligence — no more gut calls on street rates or ad spend.',
  },
  {
    icon: Globe,
    title: 'Market Intelligence',
    description:
      'Know your competitive position in real-time — rate changes, new supply, and demand shifts surfaced before they impact your revenue.',
  },
  {
    icon: Sparkles,
    title: 'Continuous Optimization',
    description:
      'Always improving, always learning from market signals — your marketing and pricing sharpen with every data point.',
  },
]

export function OutcomesSection() {
  return (
    <section id="outcomes" className="py-32 md:py-40">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center"
        >
          <p className="text-[0.8125rem] font-medium tracking-[0.15em] uppercase text-[#F97316] mb-4">
            IMPACT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Measurable impact on your bottom line
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto">
            Revenue growth, NOI improvement, and operational leverage — the metrics
            that drive portfolio value for storage operators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="bg-white/[0.03] rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300"
              style={{ boxShadow: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 16px 48px -8px rgba(0,0,0,0.4)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-[#F97316]" />
              </div>
              <h3 className="text-lg font-bold text-white mt-4">
                {item.title}
              </h3>
              <p className="text-sm text-[#94A3B8] mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
