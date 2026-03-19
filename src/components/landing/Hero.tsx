import { motion } from 'framer-motion'
import { TrendingUp, Star, Users, ArrowRight } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const bars = [
  { height: 45, delay: 0.8 },
  { height: 70, delay: 0.9 },
  { height: 55, delay: 1.0 },
  { height: 85, delay: 1.1 },
]

const floatingCards = [
  { icon: TrendingUp, label: '+32% Revenue', delay: 1.0, position: '-top-5 -right-5' },
  { icon: Star, label: '4.9 Rating', delay: 1.15, position: 'top-1/2 -left-5 -translate-y-1/2' },
  { icon: Users, label: '180+ Facilities', delay: 1.3, position: '-bottom-5 right-8' },
]

const integrations = ['Google', 'Meta', 'Yelp', 'StorTrack', 'Airtable']

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#070B14]">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #1E2A42 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Orange radial glow from center-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container-max w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <span className="inline-flex items-center border border-[#1E2A42] bg-[#0D1220] rounded-full px-4 py-1.5 text-xs text-[#94A3B8] font-medium mb-6">
                AI-Powered Self-Storage Marketing
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F1F5F9] leading-[1.05] tracking-tight mb-6"
            >
              Self-storage marketing
              <br />
              built to scale
              <br />
              your{' '}
              <span className="relative inline-block">
                <span className="relative z-10">revenue</span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-[3px] bg-[#F97316] rounded-full origin-left"
                  style={{
                    animation:
                      'underline-sweep 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both',
                  }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: EASE }}
              className="text-lg text-[#94A3B8] max-w-lg mb-8 leading-relaxed"
            >
              AI agents that manage your Google Ads, SEO, and operations — so you can
              focus on growing your portfolio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: EASE }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA6C0E] transition-colors cursor-pointer"
              >
                Book a Demo
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-[#1E2A42] text-[#F1F5F9] hover:bg-[#0D1220] transition-colors cursor-pointer"
              >
                View Plans
              </a>
            </motion.div>
          </div>

          {/* Right column — dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="relative"
          >
            {/* Dashboard card */}
            <div className="bg-[#0D1220] border border-[#1E2A42] rounded-xl p-6">
              <p className="text-sm font-semibold text-[#F1F5F9] mb-4">Revenue Overview</p>

              {/* Bar chart */}
              <div className="flex items-end gap-3 h-36 mb-5">
                {bars.map((bar, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${bar.height}%` }}
                    transition={{ duration: 0.6, delay: bar.delay, ease: EASE }}
                    className="flex-1 rounded-t-md"
                    style={{
                      background:
                        i === bars.length - 1
                          ? 'linear-gradient(to top, #F97316, #FB923C)'
                          : '#1E2A42',
                    }}
                  />
                ))}
              </div>

              {/* Chart labels */}
              <div className="flex gap-3">
                {['Jan', 'Feb', 'Mar', 'Apr'].map((month) => (
                  <span
                    key={month}
                    className="flex-1 text-center text-xs text-[#475569]"
                  >
                    {month}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating stat cards */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.delay, ease: EASE }}
                className={`absolute ${card.position} bg-[#0D1220]/80 backdrop-blur border border-[#1E2A42] rounded-lg p-3 flex items-center gap-2.5 animate-float`}
                style={{
                  animationDelay: `${card.delay}s`,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[#141A2E]">
                  <card.icon className="size-4 text-[#F97316]" />
                </div>
                <span className="text-sm font-semibold text-[#F1F5F9] whitespace-nowrap">
                  {card.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Integration logos bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
        className="relative z-10 border-t border-[#1E2A42] py-8"
      >
        <div className="container-max">
          <p className="text-xs text-[#475569] uppercase tracking-widest font-semibold text-center mb-5">
            Integrates with your stack
          </p>
          <div
            className="flex items-center justify-center gap-8 sm:gap-12"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            }}
          >
            {integrations.map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-[#475569] whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
