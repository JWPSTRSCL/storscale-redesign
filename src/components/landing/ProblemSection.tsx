import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const stats = [
  { value: '42%', label: 'of storage facilities waste budget on ineffective marketing' },
  { value: '$2,400', label: 'average monthly spend on agencies that don\'t understand storage' },
  { value: '67%', label: 'of operators say marketing is their biggest operational headache' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

export function ProblemSection() {
  return (
    <section id="problem" className="py-32 md:py-40">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-14"
        >
          <p className="section-label mb-4">01 — The Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] max-w-2xl leading-[1.1] mb-4">
            Self-storage marketing is broken
          </h2>
          <p className="text-[#94A3B8] max-w-xl">
            Operators are overspending on generic agencies, underperforming campaigns, and tools that weren't built for storage.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={cardVariants}
              className="bg-gradient-to-r from-[#0D1220] to-[#0D1220]/60 border-l-4 border-l-[#F97316] rounded-xl p-8 shadow-lg shadow-black/20"
            >
              <p className="text-5xl font-bold text-[#F1F5F9] mb-3 leading-none">
                {stat.value}
              </p>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
