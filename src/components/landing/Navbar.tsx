import { useState, useEffect } from 'react'
import { MenuIcon, WarehouseIcon, XIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const links = [
  { label: 'How It Works', href: '#timeline' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#team' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-4 left-0 right-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-6xl rounded-xl transition-all duration-300',
        scrolled
          ? 'bg-[#0F172A]/95 supports-[backdrop-filter]:bg-[#0F172A]/80 backdrop-blur-lg border border-white/10 shadow-lg'
          : 'bg-white/90 supports-[backdrop-filter]:bg-white/70 backdrop-blur-md border border-[#E2E8F0] shadow-sm',
      )}
    >
      <nav className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 cursor-pointer select-none">
          <div className={cn(
            'flex items-center justify-center w-8 h-8 rounded-lg',
            scrolled ? 'bg-[#F97316]' : 'bg-[#0F172A]',
          )}>
            <WarehouseIcon className="size-4 text-white" />
          </div>
          <span className={cn(
            'text-lg font-bold tracking-tight',
            scrolled ? 'text-white' : 'text-[#0F172A]',
          )}>
            StorScale
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                scrolled
                  ? 'text-white/80 hover:text-white hover:bg-white/10'
                  : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-2">
          <a
            href="#demo"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors duration-150 cursor-pointer"
          >
            Book a Demo
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  'lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors cursor-pointer',
                  scrolled ? 'text-white hover:bg-white/10' : 'text-[#0F172A] hover:bg-slate-100',
                )}
                aria-label="Open menu"
              >
                <MenuIcon className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" showClose={false}>
              <div className="flex items-center justify-between p-4 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0F172A]">
                    <WarehouseIcon className="size-4 text-white" />
                  </div>
                  <span className="text-lg font-bold text-[#0F172A]">StorScale</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <XIcon className="size-4" />
                </button>
              </div>
              <div className="flex flex-col gap-1 p-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:text-[#0F172A] hover:bg-slate-50 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <SheetFooter>
                <a
                  href="#demo"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-3 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors"
                >
                  Book a Free Demo
                </a>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
