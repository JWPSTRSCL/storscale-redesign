import { motion } from 'framer-motion'
import {
  Megaphone,
  MapPin,
  Share2,
  BarChart3,
  Database,
  MessageSquare,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

interface Integration {
  name: string
  icon: LucideIcon
}

const integrations: Integration[] = [
  { name: 'Google Ads', icon: Megaphone },
  { name: 'Google Business', icon: MapPin },
  { name: 'Meta Ads', icon: Share2 },
  { name: 'StorTrack', icon: BarChart3 },
  { name: 'Airtable', icon: Database },
  { name: 'Yelp', icon: MessageSquare },
]

export function IntegrationsSection() {
  return (
    <section className="relative z-10 py-32 md:py-40 bg-[#070B14]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">
            INTEGRATIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] leading-[1.1]">
            Connects with your existing tools
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-md mx-auto text-sm">
            StorScale integrates seamlessly with the platforms you already use.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
              className="bg-[#0D1220]/40 border border-white/[0.04] rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-[#F97316]/30 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-[#141A2E] flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#F97316]" />
              </div>
              <span className="text-sm text-[#94A3B8] font-medium">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
