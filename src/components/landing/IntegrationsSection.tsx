import { motion } from 'framer-motion'

const integrations = [
  'Google Ads',
  'Google My Business',
  'Tenant Inc',
  'Storable',
  'SiteLink',
  'Semrush',
  'Ahrefs',
  'Google Analytics',
]

export function IntegrationsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Works with what you <span className="text-[#F97316]">already use</span>
          </h2>
          <p className="text-slate-500 text-lg">
            We connect to your existing tools. No migration, no disruption.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden py-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap">
            {[...integrations, ...integrations].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="inline-flex items-center gap-3 mx-4 px-5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl"
              >
                <div className="w-7 h-7 bg-[#0F172A]/5 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-[#0F172A]">
                    {name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-[#0F172A] whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
