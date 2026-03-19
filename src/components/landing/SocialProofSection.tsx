import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

const bigStats = [
  { value: '+32%', label: 'Average revenue increase per facility' },
  { value: '18%', label: 'Average occupancy improvement' },
  { value: '3\u00d7', label: 'Return on marketing investment' },
]

const testimonials = [
  {
    quote:
      'StorScale\'s market intelligence transformed our revenue strategy. We went from 71% to 94% occupancy in 90 days \u2014 and our rate per unit increased 15%.',
    name: 'Mike D.',
    role: 'Owner, Ridgetop Storage \u2014 Phoenix, AZ',
    initials: 'MD',
  },
  {
    quote:
      'The competitive pricing intelligence alone pays for itself. $22k more per month in revenue with better occupancy and higher rates.',
    name: 'Sarah K.',
    role: 'Operator, Coast Clear Storage \u2014 Tampa, FL',
    initials: 'SK',
  },
  {
    quote:
      'Finally, marketing that connects directly to revenue. Our local search rankings went from page 3 to #1, and our cost per acquisition dropped 40%.',
    name: 'James T.',
    role: 'Owner, Blue Ridge Self Storage \u2014 Denver, CO',
    initials: 'JT',
  },
]

export function SocialProofSection() {
  return (
    <section className="relative z-10 py-32 md:py-40 bg-[#070B14]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-[0.8125rem] font-medium tracking-[0.15em] uppercase text-[#F97316] mb-3">
            PROVEN RESULTS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-[1.1]">
            Proven results across 180+ facilities
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {bigStats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            >
              <p className="text-6xl md:text-7xl font-extrabold text-white tracking-tighter leading-none">
                {stat.value}
              </p>
              <p className="text-sm text-[#94A3B8] mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="bg-[#0C1019] rounded-2xl p-6"
              style={{ boxShadow: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 16px 48px -8px rgba(0,0,0,0.4)' }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-[#F97316] fill-[#F97316]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#94A3B8] text-sm italic mt-3 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-[#141A2E] flex items-center justify-center">
                  <span className="text-[#F97316] font-bold text-sm">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    {t.name}
                  </p>
                  <p className="text-[#475569] text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
