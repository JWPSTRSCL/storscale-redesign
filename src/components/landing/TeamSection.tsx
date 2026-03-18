import { motion } from 'framer-motion'
import { Phone, Zap, Eye as EyeIcon, HeadphonesIcon, CheckCircle2, Clock, CalendarClock } from 'lucide-react'

const services = [
  {
    icon: Phone,
    title: 'Monthly Clarity Calls',
    description: 'Regular video calls to review your marketing performance, discuss insights, and plan next steps together.',
  },
  {
    icon: Zap,
    title: 'We Execute Your Recommendations',
    description: 'Accept the recommendations and our specialists implement the changes for you. No extra work on your end.',
  },
  {
    icon: EyeIcon,
    title: 'Full Transparency in Your Task Tab',
    description: "See exactly what we're working on in real-time. Every task, every update, always visible in your dashboard.",
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: "Questions between calls? Your specialist is just a message away. Real humans, real expertise, real results.",
  },
]

const taskItems = [
  {
    title: 'Optimized Google Ads bid strategy',
    meta: 'Completed by Rachelle · 2 hours ago',
    status: 'Done',
    statusColor: 'bg-green-100 text-green-700',
    icon: CheckCircle2,
  },
  {
    title: 'Updating GMB listings with new photos',
    meta: 'In progress by Justin · Started today',
    status: 'In Progress',
    statusColor: 'bg-blue-100 text-blue-700',
    icon: Clock,
  },
  {
    title: 'Review monthly performance report',
    meta: 'Scheduled for next week',
    status: 'Upcoming',
    statusColor: 'bg-slate-100 text-slate-600',
    icon: CalendarClock,
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 px-4 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FDBA74] text-xs font-semibold text-[#EA580C] uppercase tracking-wide mb-4">
            Your Marketing Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Experienced industry specialists — scaled with AI
          </h2>
          <p className="text-slate-500 text-lg">
            Every StorScale plan includes access to dedicated marketing experts who review
            your data, make recommendations, and execute changes on your behalf.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Service cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-5 border border-[#E2E8F0] hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-10 h-10 bg-[#FFF7ED] rounded-lg flex items-center justify-center mb-3">
                  <s.icon className="w-5 h-5 text-[#F97316]" />
                </div>
                <h3 className="font-semibold text-[#0F172A] text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Task tab mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm"
          >
            <div className="px-5 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#0F172A] text-sm">Your Task Tab</p>
                <p className="text-xs text-slate-400">Updated just now</p>
              </div>
              <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
            </div>
            <div className="divide-y divide-[#F1F5F9]">
              {taskItems.map((task) => (
                <div key={task.title} className="px-5 py-4 flex items-start gap-3">
                  <task.icon className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#0F172A]">{task.title}</p>
                    <p className="text-xs text-slate-400">{task.meta}</p>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${task.statusColor}`}>
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-xl transition-colors duration-200 cursor-pointer text-sm"
          >
            Meet your marketing team
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#E2E8F0] text-[#0F172A] font-semibold rounded-xl hover:bg-white transition-colors duration-200 cursor-pointer text-sm"
          >
            View plans
          </a>
        </motion.div>
      </div>
    </section>
  )
}
