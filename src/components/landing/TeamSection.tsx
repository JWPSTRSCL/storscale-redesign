import { motion } from 'framer-motion'
import { Phone, Zap, Eye, HeadphonesIcon, CheckCircle2, Clock, CalendarClock } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const services = [
  { icon: Phone, title: 'Monthly Clarity Calls', description: 'Regular video calls to review your marketing performance, discuss insights, and plan next steps together.' },
  { icon: Zap, title: 'We Execute For You', description: 'Accept recommendations and our specialists implement the changes. No extra work on your end.' },
  { icon: Eye, title: 'Full Transparency', description: "See exactly what we're working on in real-time. Every task, every update, always visible in your dashboard." },
  { icon: HeadphonesIcon, title: 'Dedicated Support', description: "Your specialist is just a message away between calls. Real humans, real expertise, real results." },
]

const tasks = [
  { icon: CheckCircle2, title: 'Optimized Google Ads bid strategy', meta: 'Completed by Rachelle \u00b7 2 hours ago', status: 'Done', statusClass: 'bg-green-500/10 text-green-400' },
  { icon: Clock, title: 'Updating GMB listings with new photos', meta: 'In progress by Justin \u00b7 Started today', status: 'In Progress', statusClass: 'bg-[#F97316]/10 text-[#F97316]' },
  { icon: CalendarClock, title: 'Review monthly performance report', meta: 'Scheduled for next week', status: 'Upcoming', statusClass: 'bg-[#1E2A42] text-[#475569]' },
]

export function TeamSection() {
  return (
    <section id="team" className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">Your Team</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4 leading-[1.1]">
            Experienced specialists — scaled with AI
          </h2>
          <p className="text-[#94A3B8] text-lg">
            Every StorScale plan includes dedicated marketing experts who review your data, make recommendations, and execute changes on your behalf.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#0D1220] border border-[#1E2A42] rounded-xl p-5 hover:border-[#F97316]/30 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-[#F97316]/10 rounded-lg flex items-center justify-center mb-3">
                  <s.icon className="w-5 h-5 text-[#F97316]" />
                </div>
                <h3 className="font-semibold text-[#F1F5F9] text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="bg-[#0D1220] border border-[#1E2A42] rounded-xl overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-[#1E2A42] flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#F1F5F9] text-sm">Your Task Tab</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-xs text-[#475569]">Live — updated just now</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
            </div>
            <div>
              {tasks.map((task) => (
                <div key={task.title} className="px-5 py-4 flex items-start gap-3 border-b border-[#1E2A42] last:border-0">
                  <task.icon className="w-4 h-4 text-[#475569] mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#F1F5F9]">{task.title}</p>
                    <p className="text-xs text-[#475569] mt-0.5">{task.meta}</p>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${task.statusClass}`}>
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a href="#demo" className="inline-flex items-center justify-center px-7 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-xl transition-colors duration-200 text-sm">
            Meet your marketing team
          </a>
          <a href="#pricing" className="inline-flex items-center justify-center px-7 py-3.5 border border-[#1E2A42] text-[#F1F5F9] font-semibold rounded-xl hover:bg-[#0D1220] transition-colors duration-200 text-sm">
            View plans
          </a>
        </motion.div>
      </div>
    </section>
  )
}
