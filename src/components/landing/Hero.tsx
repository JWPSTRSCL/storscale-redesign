import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Star } from 'lucide-react'
import { Logo } from './Logo'

const EASE = [0.22, 1, 0.36, 1] as const
const transition = { duration: 0.7, ease: EASE }
const stagger = (i: number) => ({ ...transition, delay: 0.1 + i * 0.1 })

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* ── Atmospheric background ── */}
      {/* Primary warm glow behind dashboard area */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 45% 55% at 72% 45%, rgba(249,115,22,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 30% 40% at 25% 60%, rgba(30,42,66,0.3) 0%, transparent 70%)
          `,
        }}
      />
      {/* Subtle top edge fade for navbar blend */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#070B14] to-transparent pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 container-max w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-16 lg:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={stagger(0)}>
              <span className="inline-flex items-center gap-2.5 bg-[#F97316]/[0.08] text-[#F97316] rounded-full px-4 py-2 text-[0.8125rem] font-medium tracking-wide">
                <Logo size={18} />
                Revenue Intelligence for Self-Storage
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(1)}
              className="mt-8 text-[clamp(2.75rem,5.5vw,5rem)] font-extrabold text-white leading-[1.06] tracking-[-0.03em]"
            >
              Self-storage{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#F97316]">revenue</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.9, ease: EASE }}
                  className="absolute -bottom-0.5 left-0 right-0 h-[3px] bg-[#F97316]/40 rounded-full origin-left"
                />
              </span>
              <br />
              built on intelligence
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(2)}
              className="mt-7 text-lg text-[#94A3B8] leading-relaxed max-w-md"
            >
              Precision marketing, dynamic pricing, and competitive intelligence
              — the data-driven engine behind the fastest-growing storage portfolios.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(3)}
              className="mt-10 flex items-center gap-4"
            >
              <a
                href="#demo"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-[0.9375rem] font-semibold text-white bg-[#F97316] cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(249,115,22,0.35)]"
              >
                <span className="relative z-10">Book a Demo</span>
                <ArrowRight className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.12] to-transparent" />
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[0.9375rem] font-semibold text-[#94A3B8] hover:text-white transition-colors duration-300 cursor-pointer"
              >
                View Plans
              </a>
            </motion.div>

            {/* Social proof line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={stagger(4)}
              className="mt-14 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {['#F97316', '#3B82F6', '#10B981'].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#070B14] flex items-center justify-center text-[0.6875rem] font-bold text-white"
                    style={{ backgroundColor: c }}
                  >
                    {['JD', 'SK', 'MT'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#475569]">
                <span className="text-[#94A3B8] font-medium">Trusted by 180+ facilities</span>
              </p>
            </motion.div>
          </div>

          {/* ── Right: Dashboard Mockup ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className="relative"
          >
            {/* Ambient glow behind the card */}
            <div
              className="absolute -inset-8 rounded-3xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)',
              }}
            />

            {/* Dashboard card */}
            <div
              className="relative bg-[#0C1019] rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 32px 80px -12px rgba(0,0,0,0.6)',
              }}
            >
              {/* Fake title bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.04]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/60" />
                </div>
                <span className="ml-2 text-[0.6875rem] text-[#475569] font-medium">StorScale Dashboard</span>
              </div>

              {/* Dashboard content */}
              <div className="p-6">
                {/* Metric cards row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Revenue', value: '$48.2k', change: '+32%', up: true },
                    { label: 'Occupancy', value: '94.1%', change: '+18%', up: true },
                    { label: 'ROAS', value: '4.2×', change: '+0.8', up: true },
                  ].map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                      className="bg-white/[0.02] rounded-lg p-3.5"
                    >
                      <p className="text-[0.6875rem] text-[#475569] mb-1">{m.label}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-white tracking-tight">{m.value}</span>
                        <span className="text-[0.6875rem] font-medium text-emerald-400">{m.change}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="bg-white/[0.02] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[0.8125rem] font-semibold text-[#94A3B8]">Revenue Trend</span>
                    <span className="text-[0.6875rem] font-medium text-emerald-400">+34% YoY</span>
                  </div>

                  {/* SVG line chart */}
                  <div className="h-28 relative">
                    <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#F97316" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      {[25, 50, 75].map((y) => (
                        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      ))}
                      {/* Area fill */}
                      <motion.path
                        d="M0,85 C30,80 60,72 100,65 C140,58 180,50 220,42 C260,34 300,22 340,18 C370,15 390,12 400,10 L400,100 L0,100 Z"
                        fill="url(#chartFill)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                      />
                      {/* Line */}
                      <motion.path
                        d="M0,85 C30,80 60,72 100,65 C140,58 180,50 220,42 C260,34 300,22 340,18 C370,15 390,12 400,10"
                        fill="none"
                        stroke="#F97316"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
                      />
                      {/* End dot */}
                      <motion.circle
                        cx="400"
                        cy="10"
                        r="4"
                        fill="#F97316"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.8 }}
                      />
                      <motion.circle
                        cx="400"
                        cy="10"
                        r="8"
                        fill="none"
                        stroke="#F97316"
                        strokeWidth="1.5"
                        strokeOpacity="0.3"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.9 }}
                      />
                    </svg>
                  </div>

                  {/* X-axis labels */}
                  <div className="flex justify-between mt-2">
                    {['Jan', 'Apr', 'Jul', 'Oct', 'Now'].map((l) => (
                      <span key={l} className="text-[0.625rem] text-[#475569]">{l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4, ease: EASE }}
              className="absolute -left-6 top-1/3 bg-[#0C1019] rounded-xl px-4 py-3 flex items-center gap-3"
              style={{
                boxShadow: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 16px 48px -8px rgba(0,0,0,0.5)',
              }}
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp className="size-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-[0.8125rem] font-semibold text-white">+32% Revenue</p>
                <p className="text-[0.6875rem] text-[#475569]">vs last quarter</p>
              </div>
            </motion.div>

            {/* Floating rating card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6, ease: EASE }}
              className="absolute -right-4 bottom-16 bg-[#0C1019] rounded-xl px-4 py-3 flex items-center gap-3"
              style={{
                boxShadow: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 16px 48px -8px rgba(0,0,0,0.5)',
              }}
            >
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Star className="size-4 text-amber-400 fill-amber-400" />
              </div>
              <div>
                <p className="text-[0.8125rem] font-semibold text-white">4.9 Rating</p>
                <p className="text-[0.6875rem] text-[#475569]">180+ facilities</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Integration logos bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 border-t border-white/[0.04] py-10"
      >
        <div className="container-max">
          <p className="text-[0.6875rem] text-[#475569] uppercase tracking-[0.2em] font-medium text-center mb-6">
            Connected to your operations
          </p>
          <div className="flex items-center justify-center gap-10 sm:gap-14">
            {['Google Ads', 'Meta', 'Yelp', 'StorTrack', 'Airtable'].map((name) => (
              <span key={name} className="text-sm font-medium text-[#2A3550] hover:text-[#475569] transition-colors duration-300 cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
