import { Warehouse } from 'lucide-react'

const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Integrations', href: '#integrations' },
]

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-max py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1: Logo + tagline */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4 cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F97316]">
                <Warehouse className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-[#F1F5F9]">StorScale</span>
            </a>
            <p className="text-sm text-[#475569] leading-relaxed max-w-xs">
              AI-powered marketing for self-storage operators. Scale revenue, fill
              units, do less.
            </p>
          </div>

          {/* Col 2: Product */}
          <div>
            <p className="text-xs text-[#475569] font-semibold tracking-wider uppercase mb-4">
              Product
            </p>
            <ul className="space-y-1">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-[#F1F5F9] transition-colors block py-1 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <p className="text-xs text-[#475569] font-semibold tracking-wider uppercase mb-4">
              Company
            </p>
            <ul className="space-y-1">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-[#F1F5F9] transition-colors block py-1 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: CTA */}
          <div>
            <p className="text-[#F1F5F9] font-semibold">
              Ready to scale your revenue?
            </p>
            <p className="text-sm text-[#94A3B8] mt-1">
              Book a free demo and see results within 90 days.
            </p>
            <a
              href="#demo"
              className="inline-flex items-center bg-[#F97316] text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-[#EA6C0E] transition-colors duration-200 mt-4 cursor-pointer"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#475569]">
            &copy; 2025 StorScale. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#privacy"
              className="text-xs text-[#475569] hover:text-[#94A3B8] transition-colors cursor-pointer"
            >
              Privacy
            </a>
            <span className="text-xs text-[#475569]">&middot;</span>
            <a
              href="#terms"
              className="text-xs text-[#475569] hover:text-[#94A3B8] transition-colors cursor-pointer"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
