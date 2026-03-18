import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Star, Users } from 'lucide-react'

const stats = [
  { value: '98%', label: 'Avg. Occupancy' },
  { value: '20%+', label: 'Revenue Uplift' },
  { value: '100+', label: 'Facilities Served' },
  { value: '3x', label: 'Lead Growth' },
]

const floatingCards = [
  { icon: TrendingUp, label: 'Occupancy Rate', value: '98.4%', color: '#10B981', bg: '#ECFDF5' },
  { icon: Star, label: 'Google Ranking', value: 'Top 3', color: '#F97316', bg: '#FFF7ED' },
  { icon: Users, label: 'New Leads / mo', value: '+142', color: '#6366F1', bg: '#EEF2FF' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24 pb-16">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FDBA74] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
              <span className="text-xs font-semibold text-[#EA580C] uppercase tracking-wide">
                AI-Powered Storage Marketing
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-[1.1] tracking-tight mb-6"
            >
              Stop leaving{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#F97316]">revenue</span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-[#FED7AA] -z-[1] rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
              {' '}on the table.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg"
            >
              StorScale combines AI-powered marketing with human expertise to fill your units, rank on Google, and grow your storage business on autopilot.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors duration-150 cursor-pointer shadow-lg shadow-orange-200"
              >
                Book a Free Demo
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#timeline"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-[#0F172A] border border-[#E2E8F0] hover:bg-slate-50 transition-colors duration-150 cursor-pointer"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-4 gap-4 pt-6 border-t border-[#E2E8F0]"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                >
                  <div className="text-2xl font-extrabold text-[#0F172A]">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Browser frame */}
            <div className="rounded-2xl border border-[#E2E8F0] shadow-2xl overflow-hidden bg-white">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F8FAFC] border-b border-[#E2E8F0]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="flex-1 mx-4 h-6 rounded-md bg-white border border-[#E2E8F0] flex items-center px-3">
                  <span className="text-xs text-slate-400">app.storscale.ai/dashboard</span>
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-5 bg-[#F8FAFC] space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">Storage Dashboard</div>
                    <div className="text-xs text-slate-400">Downtown Self-Storage</div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">Live</div>
                </div>
                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Occupancy', value: '98.4%', change: '+2.1%', up: true },
                    { label: 'Monthly Rev', value: '$24,800', change: '+18%', up: true },
                    { label: 'Leads', value: '142', change: '+3x', up: true },
                  ].map((m) => (
                    <div key={m.label} className="bg-white rounded-xl p-3 border border-[#E2E8F0]">
                      <div className="text-xs text-slate-500">{m.label}</div>
                      <div className="text-lg font-bold text-[#0F172A] mt-1">{m.value}</div>
                      <div className="text-xs text-green-600 font-medium">{m.change}</div>
                    </div>
                  ))}
                </div>
                {/* Occupancy bar chart */}
                <div className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
                  <div className="text-xs font-medium text-slate-600 mb-3">Occupancy Trend</div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[68, 72, 75, 80, 85, 88, 91, 93, 96, 97, 98, 98].map((v, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${v}%` }}
                        transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: 'easeOut' }}
                        className="flex-1 rounded-sm"
                        style={{ background: i >= 9 ? '#F97316' : '#E2E8F0' }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-2">
                    <span>Jan</span><span>Jun</span><span>Dec</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + i * 0.2 }}
                className={[
                  'absolute flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] shadow-lg bg-white',
                  i === 0 ? '-left-12 top-12' : i === 1 ? '-right-8 top-24' : '-left-8 bottom-16',
                ].join(' ')}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg" style={{ background: card.bg }}>
                  <card.icon className="size-4" style={{ color: card.color }} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500">{card.label}</div>
                  <div className="text-sm font-bold text-[#0F172A]">{card.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
