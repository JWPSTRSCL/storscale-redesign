import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FDBA74] text-xs font-semibold text-[#EA580C] uppercase tracking-wide mb-4">
            Your Marketing Command Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            One Dashboard — <span className="text-[#F97316]">Complete Clarity</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Stop piecing together reports from Google, Facebook, your PMS, and spreadsheets.
            See your entire marketing picture in one place, updated in real time.
          </p>
        </motion.div>

        {/* Dashboard overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-2 mb-14"
        >
          <div className="rounded-xl bg-white border border-[#E2E8F0] py-12 flex items-center justify-center">
            <div className="text-center px-8">
              <div className="flex items-center justify-center gap-8 mb-4">
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-[#0F172A]">247</p>
                  <p className="text-xs text-slate-500">Leads This Week</p>
                </div>
                <div className="w-px h-12 bg-[#E2E8F0]" />
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-green-600">4.2x</p>
                  <p className="text-xs text-slate-500">ROAS</p>
                </div>
                <div className="w-px h-12 bg-[#E2E8F0]" />
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-[#F97316]">92%</p>
                  <p className="text-xs text-slate-500">Occupancy</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">StorScale Dashboard — Weekly Performance Summary</p>
            </div>
          </div>
        </motion.div>

        {/* Feature rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Know what's working and what isn't
            </h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Every dollar you spend on marketing should be traceable to results. StorScale
              shows you which channels drive real move-ins, so you can double down on what
              works and cut what doesn't.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'See exactly where your leads come from',
                'Track which leads actually convert to move-ins',
                'Understand your true cost per acquisition',
                'Get clear recommendations on where to invest next',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#E2E8F0] text-[#0F172A] font-semibold rounded-xl hover:bg-[#F8FAFC] transition-colors duration-200 cursor-pointer text-sm"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 aspect-[4/3] flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="grid grid-cols-2 gap-3">
                {['Google Ads', 'Local SEO', 'Lead Tracking', 'Competitor Intel'].map((s) => (
                  <div key={s} className="bg-white rounded-lg px-3 py-2 border border-[#E2E8F0] text-sm text-[#0F172A] font-medium text-center">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 aspect-[4/3] flex items-center justify-center">
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {[
                { label: 'Google Ads', status: 'Managed' },
                { label: 'Local SEO', status: 'Optimized' },
                { label: 'Lead Sources', status: 'Tracked' },
                { label: 'Monthly Reviews', status: 'Reported' },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-[#E2E8F0] rounded-lg px-4 py-3">
                  <p className="text-xs text-[#F97316] font-semibold">{item.status}</p>
                  <p className="text-sm font-semibold text-[#0F172A]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              We handle execution — you see the results
            </h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              StorScale isn't just a reporting tool. Our team actively manages your campaigns
              (Google Ads, local SEO, social media, and more) so you don't need to become a
              marketing expert or hire one.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#timeline"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#E2E8F0] text-[#0F172A] font-semibold rounded-xl hover:bg-[#F8FAFC] transition-colors duration-200 cursor-pointer text-sm"
              >
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-xl transition-colors duration-200 cursor-pointer text-sm"
              >
                Get Started Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
