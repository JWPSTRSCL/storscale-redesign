import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb } from 'lucide-react'

const steps = [
  {
    day: 'Day 1-7',
    num: '1',
    title: 'Discovery & Setup',
    description: 'Strategy call, account access, and initial audit',
  },
  {
    day: 'Day 8-30',
    num: '2',
    title: 'Build & Configure',
    description: 'Dashboard setup, tracking implementation, baseline metrics',
  },
  {
    day: 'Day 31-60',
    num: '3',
    title: 'Optimize & Learn',
    description: 'Data-driven adjustments, A/B testing, performance tuning',
  },
  {
    day: 'Day 61-100',
    num: '4',
    title: 'Scale & Succeed',
    description: 'Full visibility, clear ROI, confident growth decisions',
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 px-4 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FDBA74] text-xs font-semibold text-[#EA580C] uppercase tracking-wide mb-4">
            How we deliver results in 100 days
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Live in 24 hours — Positive ROI in less than 100 days
          </h2>
          <p className="text-slate-500 text-lg">
            No software to install. Just action from the second you sign up.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+28px)] right-[-28px] h-0.5 bg-[#E2E8F0] z-0" />
              )}
              <div className="bg-white rounded-xl p-6 border border-[#E2E8F0] text-center relative z-10 hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-[#F97316] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-md shadow-orange-100">
                  {step.num}
                </div>
                <p className="text-xs font-semibold text-[#F97316] mb-2 uppercase tracking-wide">{step.day}</p>
                <h3 className="font-semibold text-[#0F172A] mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-[#E2E8F0] rounded-xl px-8 py-6"
        >
          <div className="flex items-center gap-3">
            <Lightbulb className="w-5 h-5 text-[#F97316] shrink-0" />
            <p className="text-sm font-medium text-[#0F172A]">
              Most clients see measurable clarity by Day 30
            </p>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-xl transition-colors duration-200 cursor-pointer text-sm shrink-0"
          >
            Get Your Free Revenue Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
