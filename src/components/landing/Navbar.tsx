import { useState, useEffect } from 'react'
import { Menu, X, Warehouse } from 'lucide-react'

const links = [
  { label: 'How It Works', href: '#timeline' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#team' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-[1200px] rounded-xl transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D1220]/90 backdrop-blur-lg border border-white/[0.06]'
          : 'bg-transparent border border-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 cursor-pointer select-none">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F97316]">
            <Warehouse className="size-4 text-white" />
          </div>
          <span className="text-lg font-bold text-[#F1F5F9]">StorScale</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-[#F1F5F9] transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#demo"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA6C0E] transition-colors cursor-pointer"
          >
            Book a Demo
          </a>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E2A42]/50 transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-down panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-4 pb-4 border-t border-[#1E2A42]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E2A42]/50 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#demo"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center mt-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA6C0E] transition-colors cursor-pointer"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  )
}
