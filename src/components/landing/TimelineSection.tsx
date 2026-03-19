import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    day: 'Day 1',
    title: 'Onboarding & Audit',
    description:
      'We connect to your systems, analyze your market position, audit your current marketing performance, and build a data-driven strategy tailored to your facilities.',
  },
  {
    day: 'Day 7',
    title: 'Campaigns Go Live',
    description:
      'Your precision marketing campaigns, listing optimizations, and competitive monitoring activate. Real-time performance tracking begins from day one.',
  },
  {
    day: 'Day 30',
    title: 'First Results Review',
    description:
      'Your dedicated specialist walks through early wins, market insights, and strategic recommendations. You stay in control of every decision.',
  },
  {
    day: 'Day 100',
    title: 'Revenue Compounding',
    description:
      'With three months of market data, your intelligence engine sharpens. Most facilities see 25\u201340% revenue growth as pricing, marketing, and operations compound.',
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="relative z-10 py-32 md:py-40 bg-[#070B14]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-20"
        >
          <p className="text-[0.8125rem] font-medium tracking-[0.15em] uppercase text-[#F97316] mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-[1.1]">
            From onboarding to results in 100 days
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line — gradient from orange to transparent */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#F97316] via-[#F97316]/30 to-transparent" />

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={step.day}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: EASE }}
                  className={`relative flex items-start md:items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline node */}
                  <div
                    className="absolute left-4 md:left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-[#F97316] z-10 -translate-x-1/2 md:-translate-y-1/2"
                    style={{ boxShadow: '0 0 12px rgba(249,115,22,0.4)' }}
                  />

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      isLeft ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <p className="text-[#F97316] text-lg font-bold mb-2">
                      {step.day}
                    </p>
                    <div
                      className="bg-[#0C1019] rounded-2xl p-6 max-w-sm"
                      style={{ boxShadow: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 16px 48px -8px rgba(0,0,0,0.4)' }}
                    >
                      <h3 className="font-bold text-white text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
