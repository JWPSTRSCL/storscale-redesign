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
    quote:
      'StorScale transformed our marketing. We went from 71% to 94% occupancy in 90 days.',
    name: 'Mike D.',
    role: 'Owner, Ridgetop Storage \u2014 Phoenix, AZ',
    initials: 'MD',
  },
  {
    quote:
      'I was skeptical at first but the results speak for themselves. $22k more per month with zero additional effort on my end.',
    name: 'Sarah K.',
    role: 'Operator, Coast Clear Storage \u2014 Tampa, FL',
    initials: 'SK',
  },
  {
    quote:
      'The AI recommendations are incredibly accurate. Our Google rankings went from page 3 to #1 within six weeks.',
    name: 'James T.',
    role: 'Owner, Blue Ridge Self Storage \u2014 Denver, CO',
    initials: 'JT',
  },
]

export function SocialProofSection() {
  return (
    <section className="relative z-10 py-24 bg-[#070B14]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">
            RESULTS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] leading-[1.1]">
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
              <p className="text-6xl md:text-7xl font-bold text-[#F1F5F9] leading-none">
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
              className="bg-[#0D1220] border border-[#1E2A42] rounded-xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4"
                    fill="#F97316"
                    stroke="#F97316"
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
                  <p className="text-[#F1F5F9] text-sm font-medium">
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
