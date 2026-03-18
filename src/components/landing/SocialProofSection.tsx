import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

const stats = [
  { value: '32%', label: 'Average occupancy increase in 90 days' },
  { value: '18%', label: 'Reduction in cost per lead' },
  { value: '3x', label: 'Average lead volume growth' },
]

const testimonials = [
  {
    name: 'Michael Torres',
    role: 'Owner, Sunbelt Storage',
    location: 'Phoenix, AZ',
    rating: 5,
    quote: "We went from 74% to 97% occupancy in under 60 days. The Google ranking improvements alone paid for the service ten times over. StorScale is the real deal.",
    initials: 'MT',
    color: '#6366F1',
  },
  {
    name: 'Lisa Hammond',
    role: 'Operations Director, SafeKeep Storage',
    location: 'Austin, TX',
    rating: 5,
    quote: "I've worked with three marketing agencies over the years. StorScale is the first that actually understands the self-storage business. Our phone rings every day now.",
    initials: 'LH',
    color: '#10B981',
  },
  {
    name: 'David Park',
    role: 'Portfolio Manager, Park Storage Group',
    location: 'Denver, CO',
    rating: 5,
    quote: "Managing 6 locations used to be a nightmare from a marketing perspective. StorScale's unified dashboard and AI pricing changed everything — revenue is up 22% this quarter.",
    initials: 'DP',
    color: '#F97316',
  },
]

export function SocialProofSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FDBA74] text-xs font-semibold text-[#EA580C] uppercase tracking-wide mb-4">
            Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Real results from real operators
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Facilities across the country trust StorScale to grow their business.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm"
            >
              <div className="text-5xl font-extrabold text-[#0F172A] mb-2">{s.value}</div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-200">
                <CardHeader className="pb-3">
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="size-4 fill-[#F97316] text-[#F97316]" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "{t.quote}"
                  </p>
                </CardContent>
                <CardFooter className="border-t border-[#F1F5F9] pt-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-full text-white text-sm font-bold flex-shrink-0"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role} · {t.location}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
