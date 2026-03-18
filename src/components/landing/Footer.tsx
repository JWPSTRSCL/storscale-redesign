import { ArrowRight, Send } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">Subscribe to our newsletter</h3>
            <p className="text-sm text-white/60">
              Get the latest self-storage marketing tips delivered to your inbox.
            </p>
          </div>
          <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2.5 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cta w-full md:w-64"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta hover:bg-cta-hover text-white text-sm font-semibold rounded-full transition-colors duration-200 cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-cta rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg">StorScale</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Built by people with over a decade of storage experience. Get the clarity
              you need to grow your business.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'About Us', href: '/about' },
                { label: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
                { label: 'AI Disclosure', href: '/ai-disclosure' },
                { label: 'Contact Us', href: 'mailto:hello@storscale.ai' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Get Started</h4>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta hover:bg-cta-hover text-white text-sm font-semibold rounded-full transition-colors duration-200 cursor-pointer"
            >
              Get Your Free Revenue Audit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; 2026 StorScale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
