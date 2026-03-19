import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const steps = [
  {
    day: 'Day 1',
    title: 'Onboarding & Audit',
    description:
      'We connect your accounts, audit your current marketing, and build your customized strategy. You approve the plan.',
  },
  {
    day: 'Day 7',
    title: 'Campaigns Go Live',
    description:
      'Your Google Ads, local SEO updates, and GMB optimizations are active. Our AI begins tracking performance.',
  },
  {
    day: 'Day 30',
    title: 'First Results Review',
    description:
      "Monthly clarity call with your specialist. Review wins, discuss insights, and approve next month's recommendations.",
  },
  {
    day: 'Day 100',
    title: 'Revenue Compounding',
    description:
      'With three months of data, our AI predictions sharpen. Most facilities see 25\u201340% revenue growth by this milestone.',
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
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">
            03 — HOW IT WORKS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] leading-[1.1]">
            From onboarding to results in 100 days
          </h2>
        </motion.div>

        {/* Desktop: alternating layout with centered line */}
        {/* Mobile: stacked with line on the left */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#F97316]/20 via-[#1E2A42] to-[#1E2A42]/20" />

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
                  {/* Node dot — positioned on mobile left line, desktop center */}
                  <div
                    className="absolute left-4 md:left-1/2 top-6 md:top-1/2 w-4 h-4 rounded-full bg-[#F97316] z-10 -translate-x-1/2 md:-translate-y-1/2"
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
                    <p className="text-2xl font-bold text-[#F97316] mb-2">
                      {step.day}
                    </p>
                    <div className="bg-[#0D1220]/80 shadow-lg shadow-black/20 rounded-xl p-6 max-w-sm">
                      <h3 className="font-bold text-[#F1F5F9] text-lg mb-2">
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
