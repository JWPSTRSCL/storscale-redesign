import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const steps = [
  {
    day: 'Day 1',
    title: 'Onboarding & Audit',
    description: 'We connect your accounts, audit your current marketing, and build your customized strategy. You approve the plan.',
    side: 'right' as const,
  },
  {
    day: 'Day 7',
    title: 'Campaigns Go Live',
    description: 'Your Google Ads, local SEO updates, and GMB optimizations are active. Our AI begins tracking performance.',
    side: 'left' as const,
  },
  {
    day: 'Day 30',
    title: 'First Results Review',
    description: "Monthly clarity call with your specialist. Review wins, discuss insights, and approve next month's recommendations.",
    side: 'right' as const,
  },
  {
    day: 'Day 100',
    title: 'Revenue Compounding',
    description: 'With three months of data, our AI predictions sharpen. Most facilities see 25\u201340% revenue growth by this milestone.',
    side: 'left' as const,
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] leading-[1.1]">
            From onboarding to results in 100 days
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1E2A42] -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.day}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                className="relative grid grid-cols-2 gap-8 items-center"
              >
                {/* Node */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F97316] z-10"
                  style={{ boxShadow: '0 0 0 6px rgba(249,115,22,0.15)' }}
                />

                {step.side === 'right' ? (
                  <>
                    <div className="text-right pr-8">
                      <p className="text-5xl font-bold text-[#1E2A42] leading-none">{step.day}</p>
                    </div>
                    <div className="pl-8">
                      <div className="bg-[#0D1220] border border-[#1E2A42] rounded-xl p-5">
                        <h3 className="font-bold text-[#F1F5F9] mb-2">{step.title}</h3>
                        <p className="text-sm text-[#94A3B8] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pr-8">
                      <div className="bg-[#0D1220] border border-[#1E2A42] rounded-xl p-5">
                        <h3 className="font-bold text-[#F1F5F9] mb-2">{step.title}</h3>
                        <p className="text-sm text-[#94A3B8] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    <div className="pl-8">
                      <p className="text-5xl font-bold text-[#1E2A42] leading-none">{step.day}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
