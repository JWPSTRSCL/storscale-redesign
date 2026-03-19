import { WarehouseIcon } from 'lucide-react'

const productLinks = ['Features', 'How It Works', 'Pricing', 'Integrations']
const companyLinks = ['About', 'Blog', 'Careers', 'Contact']

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F97316]">
                <WarehouseIcon className="size-4 text-white" />
              </div>
              <span className="text-lg font-bold text-[#F1F5F9]">StorScale</span>
            </a>
            <p className="text-sm text-[#475569] leading-relaxed max-w-xs">
              AI-powered marketing for self-storage operators. Scale revenue, fill units, do less.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold text-[#F1F5F9] uppercase tracking-widest mb-4">Product</p>
              <ul className="space-y-3">
                {productLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-[#475569] hover:text-[#94A3B8] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#F1F5F9] uppercase tracking-widest mb-4">Company</p>
              <ul className="space-y-3">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-[#475569] hover:text-[#94A3B8] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#F1F5F9] mb-2">Ready to scale your revenue?</p>
            <p className="text-sm text-[#475569] mb-5">Book a free demo and see results within 30 days.</p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors duration-200"
            >
              Book a Demo
            </a>
          </div>
        </div>

        <div className="border-t border-[#1E2A42] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#475569]">&copy; 2026 StorScale. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-[#475569] hover:text-[#94A3B8] transition-colors">Privacy</a>
            <a href="#" className="text-xs text-[#475569] hover:text-[#94A3B8] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
