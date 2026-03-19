import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const integrations = ['Google Ads', 'Meta', 'StorTrack', 'Yardi', 'SiteLink', 'DaVinci']

const bars = [
  { height: 40, delay: 0.7 },
  { height: 65, delay: 0.8 },
  { height: 50, delay: 0.9 },
  { height: 80, delay: 1.0 },
  { height: 55, delay: 1.1 },
  { height: 90, delay: 1.2 },
  { height: 70, delay: 1.3 },
]

const miniStats = [
  { label: 'Avg Revenue Lift', value: '+32%' },
  { label: 'Active Facilities', value: '180+' },
  { label: 'Customer Rating', value: '4.9\u2605' },
]

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#070B14]"
      style={{
        backgroundImage: 'radial-gradient(circle, #1E2A42 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      {/* Orange glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#0D1220] border border-[#1E2A42] text-xs font-semibold text-[#F97316] mb-6">
              AI-Powered Self-Storage Marketing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
            className="text-5xl lg:text-[4.5rem] font-bold text-[#F1F5F9] leading-[1.05] tracking-tight mb-6"
          >
            Scale your storage{' '}
            <span className="relative inline-block">
              <span className="text-[#F97316]">revenue</span>
              <span
                className="absolute bottom-1 left-0 right-0 h-[3px] bg-[#F97316] rounded-full origin-left"
                style={{
                  animation: 'underline-sweep 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both',
                }}
              />
            </span>{' '}
            with expert marketing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: EASE }}
            className="text-lg text-[#94A3B8] max-w-md mb-8 leading-relaxed"
          >
            StorScale combines AI-driven insights with dedicated marketing specialists who execute everything for you — from Google Ads to local SEO.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: EASE }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors duration-150"
            >
              Book a Demo <ArrowRight className="size-4" />
            </a>
            <a
              href="#timeline"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-[#1E2A42] text-[#F1F5F9] hover:bg-[#0D1220] transition-colors duration-150"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          >
            <p className="text-xs text-[#475569] mb-3 uppercase tracking-widest font-semibold">Works with</p>
            <div
              className="flex flex-wrap gap-2"
              style={{ maskImage: 'linear-gradient(to right, black 80%, transparent)' }}
            >
              {integrations.map((name) => (
                <span
                  key={name}
                  className="px-3 py-1 rounded-md bg-[#0D1220] border border-[#1E2A42] text-[#475569] text-xs font-medium"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column: dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="relative hidden lg:block"
        >
          <div
            className="relative bg-[#0D1220] border border-[#1E2A42] rounded-2xl p-5 overflow-hidden"
            style={{ boxShadow: '0 0 80px rgba(249,115,22,0.08), 0 0 0 1px rgba(249,115,22,0.04)' }}
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-xs text-[#475569] font-medium uppercase tracking-widest">Performance Dashboard</p>
                <p className="text-sm font-semibold text-[#F1F5F9] mt-0.5">Revenue Overview</p>
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F97316]">
                <span className="text-white font-bold text-xs">S</span>
              </div>
            </div>

            {/* Bar chart */}
            <div className="flex items-end gap-2 h-28 mb-4">
              {bars.map((bar, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.height}%` }}
                  transition={{ duration: 0.6, delay: bar.delay, ease: EASE }}
                  className="flex-1 rounded-t-sm"
                  style={{
                    background: i === 5
                      ? 'linear-gradient(to top, #F97316, #FB923C)'
                      : '#1E2A42',
                  }}
                />
              ))}
            </div>

            {/* Mini stat chips */}
            <div className="grid grid-cols-3 gap-2">
              {miniStats.map((s) => (
                <div key={s.label} className="bg-[#141A2E] rounded-lg p-2.5">
                  <p className="text-xs text-[#475569] mb-1 leading-tight">{s.label}</p>
                  <p className="text-base font-bold text-[#F1F5F9]">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: EASE }}
            className="absolute -top-6 -right-4 bg-[#0D1220] border border-[#1E2A42] rounded-xl px-4 py-3 shadow-2xl"
          >
            <p className="text-xs text-[#475569]">Occupancy Rate</p>
            <p className="text-xl font-bold text-[#F97316]">94.2%</p>
          </motion.div>

          {/* Floating card 2 */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease: EASE }}
            className="absolute -bottom-6 -left-4 bg-[#0D1220] border border-[#1E2A42] rounded-xl px-4 py-3 shadow-2xl"
          >
            <p className="text-xs text-[#475569]">MoM Growth</p>
            <p className="text-xl font-bold text-[#F1F5F9]">+18%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
