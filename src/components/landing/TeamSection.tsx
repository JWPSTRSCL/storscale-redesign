import { motion } from 'framer-motion'
import { Target, Search, BarChart3, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

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
      'AI-managed Google Ads campaigns with continuous bid optimization and keyword discovery.',
  },
  {
    icon: Search,
    title: 'SEO Strategist',
    description:
      'Local SEO, GBP optimization, citation building, and review management on autopilot.',
  },
  {
    icon: BarChart3,
    title: 'Revenue Analyst',
    description:
      'Real-time market intelligence, competitor tracking, and pricing recommendations.',
  },
  {
    icon: Zap,
    title: 'Operations Manager',
    description:
      'Automated task execution, performance reporting, and proactive alerts.',
  },
]

export function TeamSection() {
  return (
    <section id="team" className="relative z-10 py-24 bg-[#070B14]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">
            04 — YOUR TEAM
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4 leading-[1.1]">
            A full marketing team, powered by AI
          </h2>
          <p className="text-[#94A3B8] text-lg">
            Every role you need to dominate local search and fill your units
            &mdash; without hiring a single person.
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
              className="bg-[#0D1220] border border-[#1E2A42] rounded-xl p-8 hover:border-[#F97316]/30 transition-colors"
            >
              <card.icon className="w-6 h-6 text-[#F97316]" />
              <h3 className="text-xl font-bold text-[#F1F5F9] mt-4">
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
