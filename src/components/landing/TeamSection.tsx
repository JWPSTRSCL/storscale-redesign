import { motion } from 'framer-motion'
import { Target, Search, BarChart3, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

interface ServiceCard {
  icon: LucideIcon
  title: string
  description: string
}

const cards: ServiceCard[] = [
  {
    icon: Target,
    title: 'Paid Ads Specialist',
    description:
      'Data-driven campaign management with continuous bid optimization, keyword refinement, and market-specific targeting.',
  },
  {
    icon: Search,
    title: 'SEO Strategist',
    description:
      'Local search dominance through GBP optimization, citation management, and review strategy that builds trust and visibility.',
  },
  {
    icon: BarChart3,
    title: 'Revenue Analyst',
    description:
      'Competitive rate intelligence, dynamic pricing recommendations, and occupancy forecasting to maximize revenue per unit.',
  },
  {
    icon: Zap,
    title: 'Operations Manager',
    description:
      'Proactive monitoring, performance reporting, and continuous optimization — your operations always running at peak.',
  },
]

export function TeamSection() {
  return (
    <section id="team" className="relative z-10 py-32 md:py-40 bg-[#070B14]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[0.8125rem] font-medium tracking-[0.15em] uppercase text-[#F97316] mb-4">
            YOUR TEAM
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-[1.1]">
            Your dedicated revenue and marketing team
          </h2>
          <p className="text-[#94A3B8] text-lg">
            Specialist expertise across every discipline that drives storage
            revenue &mdash; backed by proprietary intelligence technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="bg-[#0C1019] rounded-2xl p-8 hover:bg-[#0E1320] transition-all duration-300"
              style={{ boxShadow: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 16px 48px -8px rgba(0,0,0,0.4)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
                <card.icon className="w-6 h-6 text-[#F97316]" />
              </div>
              <h3 className="text-xl font-bold text-white mt-4">
                {card.title}
              </h3>
              <p className="text-[#94A3B8] mt-2 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
