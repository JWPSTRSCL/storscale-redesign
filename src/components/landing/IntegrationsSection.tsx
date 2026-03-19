import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const integrations = [
  'Google Ads', 'Meta Ads', 'StorTrack', 'Yardi', 'SiteLink', 'DaVinci',
  'Google Business', 'CallRail', 'Mailchimp', 'Zapier', 'SpareFoot', 'Storage.com',
]

export function IntegrationsSection() {
  const doubled = [...integrations, ...integrations]

  return (
    <section className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">Integrations</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] leading-[1.1]">
            Connects with your existing tools
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-md mx-auto text-sm">
            StorScale plugs into the platforms you already use — no migration required.
          </p>
        </motion.div>

        <div
          className="overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="flex animate-marquee w-max gap-3">
            {doubled.map((name, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-lg bg-[#0D1220] border border-[#1E2A42] text-[#94A3B8] text-sm font-medium whitespace-nowrap flex-shrink-0"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
