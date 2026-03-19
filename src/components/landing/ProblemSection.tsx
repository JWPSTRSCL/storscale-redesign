import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const stats = [
  { value: '42%', label: 'of storage operators are underpricing their units based on competitive data' },
  { value: '$2,400', label: 'average monthly revenue left on the table per facility through unoptimized listings and pricing' },
  { value: '67%', label: 'of operators lack real-time competitive rate intelligence' },
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

const insetShadow = '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 16px 48px -8px rgba(0,0,0,0.4)'

export function ProblemSection() {
  return (
    <section id="problem" className="py-32 md:py-40">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <p className="text-[0.8125rem] font-medium tracking-[0.15em] uppercase text-[#F97316] mb-4">
            THE PROBLEM
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-[1.1] mb-4">
            Self-storage marketing is broken
          </h2>
          <p className="text-[#94A3B8] max-w-xl">
            Operators are leaving revenue on the table through unoptimized pricing, poor listing visibility, and reactive marketing that can't keep pace with their market.
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
              className="bg-white/[0.03] rounded-2xl p-8"
              style={{ boxShadow: insetShadow }}
            >
              <div className="flex gap-5">
                <div className="w-1 rounded-full bg-[#F97316] shrink-0" />
                <div>
                  <p className="text-5xl font-extrabold text-white tracking-tight mb-3 leading-none">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
