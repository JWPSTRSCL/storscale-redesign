import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const features = [
  {
    num: '01',
    title: 'AI-Powered Insights',
    description: 'Our AI analyzes your facility data, market trends, and competitor pricing to surface actionable recommendations every week — automatically.',
    mockup: (
      <div className="p-4">
        <p className="text-xs text-[#475569] mb-3 uppercase tracking-widest">Weekly Recommendations</p>
        {[
          { text: 'Increase 10\u00d710 outdoor rate by $8', impact: '+$1,200/mo', color: 'text-[#F97316]' },
          { text: 'Run Google Ads on "storage near me"', impact: '+38 leads', color: 'text-green-400' },
          { text: 'Update GMB with 6 new photos', impact: '+12% CTR', color: 'text-blue-400' },
        ].map((item) => (
          <div key={item.text} className="flex items-center justify-between py-2 border-b border-[#1E2A42] last:border-0">
            <p className="text-xs text-[#94A3B8]">{item.text}</p>
            <span className={`text-xs font-semibold ${item.color} shrink-0 ml-3`}>{item.impact}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '02',
    title: 'Local SEO Domination',
    description: 'We optimize your Google Business Profile, build local citations, and run geo-targeted campaigns to ensure you rank first when customers search nearby.',
    mockup: (
      <div className="p-4">
        <p className="text-xs text-[#475569] mb-3 uppercase tracking-widest">Search Rankings</p>
        {['storage units near me', 'self storage [city]', '10x10 storage unit'].map((term, i) => (
          <div key={term} className="flex items-center gap-3 py-2 border-b border-[#1E2A42] last:border-0">
            <span className="text-xs font-bold text-[#F97316] w-4">#1</span>
            <p className="text-xs text-[#94A3B8] flex-1">{term}</p>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 - i }).map((_, j) => (
                <div key={j} className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '03',
    title: 'We Execute Everything',
    description: 'Accept a recommendation and our specialists implement it for you. No logins to remember, no agencies to manage. One platform, one team, full execution.',
    mockup: (
      <div className="p-4">
        <p className="text-xs text-[#475569] mb-3 uppercase tracking-widest">Task Execution</p>
        {[
          { task: 'Google Ads campaign live', status: 'Done', color: 'bg-green-500/10 text-green-400' },
          { task: 'GMB photos uploaded', status: 'Done', color: 'bg-green-500/10 text-green-400' },
          { task: 'Rate optimization applied', status: 'In Progress', color: 'bg-[#F97316]/10 text-[#F97316]' },
        ].map((item) => (
          <div key={item.task} className="flex items-center justify-between py-2 border-b border-[#1E2A42] last:border-0">
            <p className="text-xs text-[#94A3B8]">{item.task}</p>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.color} shrink-0 ml-3`}>{item.status}</span>
          </div>
        ))}
      </div>
    ),
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] max-w-xl leading-[1.1]">
            Everything you need to fill your units
          </h2>
        </motion.div>

        <div className="flex flex-col gap-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="text-sm font-bold text-[#F97316] mb-3">{feature.num}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F1F5F9] mb-4 leading-[1.1]">
                  {feature.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">{feature.description}</p>
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-[#0D1220] border border-[#1E2A42] rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E2A42]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1E2A42]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1E2A42]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1E2A42]" />
                    </div>
                    <p className="text-xs text-[#475569] ml-2">StorScale Platform</p>
                  </div>
                  {feature.mockup}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
