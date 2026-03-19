import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const insetShadow = '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 16px 48px -8px rgba(0,0,0,0.4)'

function AdCampaignMockup() {
  const campaigns = [
    { name: 'Storage Units Near Me', spend: '$340', roas: '4.2x', progress: 82 },
    { name: 'Climate Controlled Storage', spend: '$215', roas: '3.8x', progress: 68 },
    { name: 'Moving Storage Deals', spend: '$180', roas: '5.1x', progress: 91 },
  ]

  return (
    <div className="p-5 space-y-4">
      <p className="text-xs text-[#475569] uppercase tracking-widest">Campaign Performance</p>
      {campaigns.map((c) => (
        <div key={c.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-xs text-[#94A3B8]">{c.name}</p>
            <span className="text-xs font-semibold text-[#F97316]">{c.roas} ROAS</span>
          </div>
          <div className="w-full h-2 bg-white/[0.04] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#F97316] rounded-full"
              style={{ width: `${c.progress}%` }}
            />
          </div>
          <p className="text-[10px] text-[#475569]">Spend: {c.spend}/mo</p>
        </div>
      ))}
    </div>
  )
}

function SearchResultsMockup() {
  const results = [
    { position: '#1', term: 'storage units near me', badge: 'You', highlight: true },
    { position: '#2', term: 'storage units near me', badge: 'Competitor A', highlight: false },
    { position: '#3', term: 'storage units near me', badge: 'Competitor B', highlight: false },
  ]

  return (
    <div className="p-5 space-y-3">
      <p className="text-xs text-[#475569] uppercase tracking-widest">Local Search Results</p>
      <div className="bg-white/[0.03] rounded-lg p-3">
        <p className="text-[10px] text-[#475569] mb-2">storage units near me</p>
        {results.map((r) => (
          <div
            key={r.badge}
            className={`flex items-center justify-between py-2 px-3 rounded-md mb-1 last:mb-0 ${
              r.highlight ? 'bg-[#F97316]/10' : ''
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${r.highlight ? 'text-[#F97316]' : 'text-[#475569]'}`}>
                {r.position}
              </span>
              <span className={`text-xs ${r.highlight ? 'text-white font-medium' : 'text-[#94A3B8]'}`}>
                {r.badge}
              </span>
            </div>
            {r.highlight && (
              <span className="text-[10px] text-[#F97316] font-semibold">Your Facility</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function RevenueMockup() {
  const points = [20, 28, 25, 35, 32, 45, 42, 55, 60, 58, 68, 75]

  return (
    <div className="p-5 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs text-[#475569] uppercase tracking-widest">Revenue Trend</p>
        <span className="text-xs font-semibold text-green-400">+34% YoY</span>
      </div>
      <div className="relative h-28">
        <svg viewBox="0 0 220 80" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`M0,${80 - points[0]} ${points.map((p, i) => `L${(i * 220) / (points.length - 1)},${80 - p}`).join(' ')} L220,80 L0,80 Z`}
            fill="url(#revGrad)"
          />
          <polyline
            points={points.map((p, i) => `${(i * 220) / (points.length - 1)},${80 - p}`).join(' ')}
            fill="none"
            stroke="#F97316"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Occupancy', value: '94%' },
          { label: 'Rev/Unit', value: '$142' },
          { label: 'Avg Rate', value: '$128' },
        ].map((m) => (
          <div key={m.label} className="text-center">
            <p className="text-sm font-bold text-white">{m.value}</p>
            <p className="text-[10px] text-[#475569]">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function TaskListMockup() {
  const tasks = [
    { task: 'Respond to 12 new Google reviews', done: true },
    { task: 'Update competitor pricing analysis', done: true },
    { task: 'Optimize ad bids for weekend traffic', done: true },
    { task: 'Generate monthly performance report', done: false },
  ]

  return (
    <div className="p-5 space-y-3">
      <p className="text-xs text-[#475569] uppercase tracking-widest">Automated Tasks</p>
      {tasks.map((t) => (
        <div
          key={t.task}
          className="flex items-center gap-3 py-2 border-b border-white/[0.03] last:border-0"
        >
          <div
            className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
              t.done
                ? 'bg-[#F97316]/10'
                : 'bg-white/[0.03]'
            }`}
          >
            {t.done && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 6L5.5 8.5L9.5 3.5" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <p className={`text-xs ${t.done ? 'text-[#94A3B8]' : 'text-white'}`}>
            {t.task}
          </p>
        </div>
      ))}
    </div>
  )
}

const features = [
  {
    num: '01',
    title: 'AI-Powered Google Ads',
    description:
      'Our AI continuously optimizes your ad campaigns, adjusting bids, keywords, and targeting in real-time to maximize your ROI.',
    mockup: <AdCampaignMockup />,
  },
  {
    num: '02',
    title: 'Local SEO Domination',
    description:
      'Automated Google Business Profile optimization, review management, and local citation building across 50+ directories.',
    mockup: <SearchResultsMockup />,
  },
  {
    num: '03',
    title: 'Revenue Intelligence',
    description:
      'Real-time analytics dashboard tracking occupancy rates, revenue per unit, and competitive pricing across your market.',
    mockup: <RevenueMockup />,
  },
  {
    num: '04',
    title: 'Automated Operations',
    description:
      'From review responses to competitor monitoring, our AI agents handle the tasks that consume your team\'s time.',
    mockup: <TaskListMockup />,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 md:py-40">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-20"
        >
          <p className="text-[0.8125rem] font-medium tracking-[0.15em] uppercase text-[#F97316] mb-4">
            FEATURES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl leading-[1.1]">
            Everything you need to dominate your market
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {features.map((feature, i) => (
            <motion.div
              key={feature.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className={`flex flex-col lg:flex-row items-center gap-12 py-20 ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } ${i < features.length - 1 ? 'border-b border-white/[0.03]' : ''}`}
            >
              {/* Text side */}
              <div className="flex-1">
                <div className="w-10 h-10 rounded-full bg-[#F97316]/10 text-[#F97316] font-bold text-sm flex items-center justify-center">
                  {feature.num}
                </div>
                <h3 className="text-2xl font-bold text-white mt-4">
                  {feature.title}
                </h3>
                <p className="text-[#94A3B8] mt-3 max-w-md leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Visual side */}
              <div className="flex-1 w-full">
                <div
                  className="relative bg-[#0C1019] rounded-2xl p-6 w-full max-w-md mx-auto lg:mx-0 overflow-hidden"
                  style={{ boxShadow: insetShadow }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/20 to-transparent" />
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
