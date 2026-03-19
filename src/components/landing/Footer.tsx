import { Logo } from './Logo'

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
    <footer className="border-t border-white/[0.04]">
      <div className="container-max py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1: Logo + tagline */}
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-4 cursor-pointer">
              <Logo size={28} />
              <span className="text-lg font-bold text-white">StorScale</span>
            </a>
            <p className="text-sm text-[#475569] leading-relaxed max-w-xs">
              AI-powered marketing for self-storage operators. Scale revenue, fill
              units, do less.
            </p>
          </div>

          {/* Col 2: Product */}
          <div>
            <p className="text-[0.6875rem] text-[#475569] font-semibold tracking-[0.15em] uppercase mb-4">
              Product
            </p>
            <ul className="space-y-1">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.875rem] text-[#475569] hover:text-[#94A3B8] transition-colors block py-1 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <p className="text-[0.6875rem] text-[#475569] font-semibold tracking-[0.15em] uppercase mb-4">
              Company
            </p>
            <ul className="space-y-1">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.875rem] text-[#475569] hover:text-[#94A3B8] transition-colors block py-1 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: CTA */}
          <div>
            <p className="text-white font-semibold">
              Ready to scale your revenue?
            </p>
            <p className="text-sm text-[#94A3B8] mt-1">
              Book a free demo and see results within 90 days.
            </p>
            <a
              href="#demo"
              className="inline-flex items-center bg-[#F97316] text-white rounded-xl px-7 py-3.5 text-sm font-semibold hover:bg-[#EA6C0E] transition-colors duration-200 mt-4 cursor-pointer"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
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
