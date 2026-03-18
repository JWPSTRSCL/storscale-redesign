import { motion } from 'framer-motion'
import { DollarSign, Eye, Users, BarChart3 } from 'lucide-react'

const problems = [
  {
    icon: DollarSign,
    title: 'Underpriced Units',
    description:
      "Most facilities we audit are charging 15-25% below market rates on at least some unit types. That's thousands in monthly revenue left on the table.",
  },
  {
    icon: Eye,
    title: 'Invisible Online',
    description:
      "If you're not in the top 3 Google results for 'self storage near me,' you're losing leads to competitors every single day.",
  },
  {
    icon: Users,
    title: 'Leaking Leads',
    description:
      'Your website converts at 2%. Industry leaders convert at 5%+. That means half your potential customers are walking away.',
  },
  {
    icon: BarChart3,
    title: 'No Meaningful Data',
    description:
      "You're busy running a facility. Who has time to monitor competitor pricing, optimize Google Ads, and test landing pages?",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 px-4 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-semibold text-red-600 uppercase tracking-wide mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Why does revenue growth feel more like{' '}
            <span className="text-[#F97316]">hope than strategy?</span>
          </h2>
          <p className="text-slate-500 text-lg">
            The national chains have revenue management teams, pricing algorithms, and
            massive marketing budgets. You have a spreadsheet and a gut feeling.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-[#E2E8F0] hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-11 h-11 bg-[#0F172A]/5 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[#0F172A]" />
              </div>
              <h3 className="font-semibold text-[#0F172A] text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
