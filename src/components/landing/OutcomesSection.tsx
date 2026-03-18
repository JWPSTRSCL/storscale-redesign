import { motion } from 'framer-motion'
import { Eye, Search, Shield, TrendingUp } from 'lucide-react'

const outcomes = [
  {
    icon: Eye,
    title: 'Customer Visibility',
    subtitle: 'See everything in one place',
    description:
      'Know exactly where your leads come from, what\'s converting, and where your budget is going without logging into five different platforms.',
    stat: '100%',
    statLabel: 'Lead source visibility',
  },
  {
    icon: Search,
    title: 'Capturing Interest',
    subtitle: 'Show up when renters are searching',
    description:
      'Dominate local search results and paid channels so customers find you first, before they see the national chain down the street.',
    stat: 'Top 3',
    statLabel: 'Local search ranking',
  },
  {
    icon: Shield,
    title: 'Protect Occupancy',
    subtitle: 'Respond before vacancies become a problem',
    description:
      'Get early warnings when lead flow drops so you can act quickly instead of reacting too late. Maintain healthy occupancy rates with proactive insights.',
    stat: '98%',
    statLabel: 'Occupancy protected',
  },
  {
    icon: TrendingUp,
    title: 'Price to Compete',
    subtitle: 'Understand which channels deliver the best ROI',
    description:
      'Invest strategically in the marketing channels that actually drive move-ins. Stop wasting budget on clicks that don\'t convert into paying customers.',
    stat: '20%+',
    statLabel: 'ROI improvement',
  },
]

export function OutcomesSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FDBA74] text-xs font-semibold text-[#EA580C] uppercase tracking-wide mb-4">
            Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            The outcomes that <span className="text-[#F97316]">actually matter</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Here's what StorScale actually delivers for your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-[#0F172A] text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.subtitle}</p>
                </div>
                <div className="w-10 h-10 bg-[#FFF7ED] rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#F97316]" />
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{item.description}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                <span className="text-2xl font-bold text-[#0F172A]">{item.stat}</span>
                <span className="text-sm text-slate-500">{item.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
