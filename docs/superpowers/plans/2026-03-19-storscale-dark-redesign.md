# StorScale Dark Premium Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild all 12 StorScale landing page components with the Bold Dark Premium aesthetic — deep navy-black backgrounds, Bricolage Grotesque typography, orange accents, grain texture, and framer-motion animations.

**Architecture:** Full in-place rebuild of every component file. No new npm packages. The design system lives in `src/index.css` (fonts, grain, keyframes). All color values are inline Tailwind arbitrary values — no CSS variable aliases.

**Tech Stack:** React 18, TypeScript, Tailwind CSS v4 (`@tailwindcss/vite`), framer-motion, lucide-react, @radix-ui/react-dialog (Sheet)

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/index.css` | Rewrite | Fonts, grain overlay, marquee keyframe, base styles |
| `src/App.tsx` | Edit | Remove `bg-background` class → `bg-[#070B14]` |
| `src/components/landing/Navbar.tsx` | Rewrite | Dark floating pill nav, scroll-triggered glass |
| `src/components/landing/Hero.tsx` | Rewrite | Full-screen dark hero, animated dashboard mockup |
| `src/components/landing/ProblemSection.tsx` | Rewrite | Dark stat cards with orange left-border |
| `src/components/landing/FeaturesSection.tsx` | Rewrite | Alternating left/right feature blocks |
| `src/components/landing/OutcomesSection.tsx` | Rewrite | 4-card outcomes grid |
| `src/components/landing/IntegrationsSection.tsx` | Rewrite | Dark marquee strip |
| `src/components/landing/TeamSection.tsx` | Rewrite | Service cards + task mockup |
| `src/components/landing/TimelineSection.tsx` | Rewrite | Centered vertical timeline |
| `src/components/landing/SocialProofSection.tsx` | Rewrite | Oversized stats + testimonials |
| `src/components/landing/PricingSection.tsx` | Rewrite | 4-tier dark cards, spring toggle |
| `src/components/landing/FAQSection.tsx` | Rewrite | Borderline accordion, no card backgrounds |
| `src/components/landing/Footer.tsx` | Rewrite | 3-column dark footer |

---

## Task 1: Rewrite index.css and update App.tsx

**Files:**
- Rewrite: `src/index.css`
- Edit: `src/App.tsx`

- [ ] **Step 1: Rewrite src/index.css**

Replace the entire file contents with:

```css
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600&display=swap');
@import "tailwindcss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'DM Sans', sans-serif;
  color: #F1F5F9;
  background-color: #070B14;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
  font-family: 'Bricolage Grotesque', sans-serif;
}

html {
  scroll-behavior: smooth;
}

/* Grain overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 128px 128px;
}

/* Hero underline sweep */
@keyframes underline-sweep {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

/* Marquee animation */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

/* Accordion animations (shadcn) */
@keyframes accordion-down {
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
}

@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
}

.animate-accordion-down {
  animation: accordion-down 0.2s ease-out;
}

.animate-accordion-up {
  animation: accordion-up 0.2s ease-out;
}
```

- [ ] **Step 2: Update App.tsx**

Change the wrapper div class from `bg-background` to `bg-[#070B14]`:

```tsx
export default function App() {
  return (
    <div className="min-h-screen bg-[#070B14]">
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <OutcomesSection />
      <IntegrationsSection />
      <TeamSection />
      <TimelineSection />
      <SocialProofSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
```

- [ ] **Step 3: Verify dev server starts**

Run: `npm run dev`
Expected: Server starts, page loads with dark background (`#070B14`), Bricolage Grotesque font loaded from Google Fonts, no console errors.

- [ ] **Step 4: Commit**

```bash
cd /Users/jakewombwell-povey/storscale-redesign
git add src/index.css src/App.tsx
git commit -m "feat: rewrite index.css with dark design system, update App.tsx base bg"
```

---

## Task 2: Navbar

**Files:**
- Rewrite: `src/components/landing/Navbar.tsx`

- [ ] **Step 1: Rewrite Navbar.tsx**

```tsx
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
          ? 'bg-[#0D1220]/90 backdrop-blur-xl border border-[#1E2A42]'
          : 'bg-transparent border border-[#1E2A42]/50',
      )}
    >
      <nav className="flex items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-2 cursor-pointer select-none">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F97316]">
            <WarehouseIcon className="size-4 text-white" />
          </div>
          <span className="text-lg font-bold text-[#F1F5F9]">StorScale</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E2A42]/50 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

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
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors cursor-pointer text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E2A42]/50"
                aria-label="Open menu"
              >
                <MenuIcon className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" showClose={false} className="bg-[#0D1220] border-r border-[#1E2A42]">
              <div className="flex items-center justify-between p-4 border-b border-[#1E2A42]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F97316]">
                    <WarehouseIcon className="size-4 text-white" />
                  </div>
                  <span className="text-lg font-bold text-[#F1F5F9]">StorScale</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[#1E2A42] transition-colors cursor-pointer text-[#94A3B8]"
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
                    className="px-4 py-3 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E2A42] transition-colors"
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
```

- [ ] **Step 2: Verify in browser**

Run: `npm run dev`
Expected: Floating pill nav visible at top, transparent with faint border against dark background. On scroll: gains `bg-[#0D1220]/90` glass effect. Orange "Book a Demo" button visible.

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/Navbar.tsx
git commit -m "feat: rebuild Navbar with dark glass floating pill design"
```

---

## Task 3: Hero

**Files:**
- Rewrite: `src/components/landing/Hero.tsx`

- [ ] **Step 1: Rewrite Hero.tsx**

```tsx
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Star } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const integrations = ['Google Ads', 'Meta', 'StorTrack', 'Yardi', 'SiteLink', 'DaVinci']

const bars = [
  { height: 40, delay: 0.7 },
  { height: 65, delay: 0.8 },
  { height: 50, delay: 0.9 },
  { height: 80, delay: 1.0 },
  { height: 55, delay: 1.1 },
  { height: 90, delay: 1.2 },
  { height: 70, delay: 1.3 },
]

const miniStats = [
  { label: 'Avg Revenue Lift', value: '+32%' },
  { label: 'Active Facilities', value: '180+' },
  { label: 'Customer Rating', value: '4.9★' },
]

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#070B14]"
      style={{
        backgroundImage: 'radial-gradient(circle, #1E2A42 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      {/* Orange glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#0D1220] border border-[#1E2A42] text-xs font-semibold text-[#F97316] mb-6">
              AI-Powered Self-Storage Marketing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
            className="text-5xl lg:text-[4.5rem] font-bold text-[#F1F5F9] leading-[1.05] tracking-tight mb-6"
          >
            Scale your storage{' '}
            <span className="relative inline-block">
              <span className="text-[#F97316]">revenue</span>
              <span
                className="absolute bottom-1 left-0 right-0 h-[3px] bg-[#F97316] rounded-full origin-left"
                style={{
                  animation: 'underline-sweep 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both',
                }}
              />
            </span>{' '}
            with expert marketing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: EASE }}
            className="text-lg text-[#94A3B8] max-w-md mb-8 leading-relaxed"
          >
            StorScale combines AI-driven insights with dedicated marketing specialists who execute everything for you — from Google Ads to local SEO.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: EASE }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors duration-150"
            >
              Book a Demo <ArrowRight className="size-4" />
            </a>
            <a
              href="#timeline"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-[#1E2A42] text-[#F1F5F9] hover:bg-[#0D1220] transition-colors duration-150"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          >
            <p className="text-xs text-[#475569] mb-3 uppercase tracking-widest font-semibold">Works with</p>
            <div
              className="flex flex-wrap gap-2"
              style={{ maskImage: 'linear-gradient(to right, black 80%, transparent)' }}
            >
              {integrations.map((name) => (
                <span
                  key={name}
                  className="px-3 py-1 rounded-md bg-[#0D1220] border border-[#1E2A42] text-[#475569] text-xs font-medium"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column: dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="relative hidden lg:block"
        >
          <div
            className="relative bg-[#0D1220] border border-[#1E2A42] rounded-2xl p-5 overflow-hidden"
            style={{ boxShadow: '0 0 80px rgba(249,115,22,0.08), 0 0 0 1px rgba(249,115,22,0.04)' }}
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-xs text-[#475569] font-medium uppercase tracking-widest">Performance Dashboard</p>
                <p className="text-sm font-semibold text-[#F1F5F9] mt-0.5">Revenue Overview</p>
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F97316]">
                <span className="text-white font-bold text-xs">S</span>
              </div>
            </div>

            {/* Bar chart */}
            <div className="flex items-end gap-2 h-28 mb-4">
              {bars.map((bar, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.height}%` }}
                  transition={{ duration: 0.6, delay: bar.delay, ease: EASE }}
                  className="flex-1 rounded-t-sm"
                  style={{
                    background: i === 5
                      ? 'linear-gradient(to top, #F97316, #FB923C)'
                      : '#1E2A42',
                  }}
                />
              ))}
            </div>

            {/* Mini stat chips */}
            <div className="grid grid-cols-3 gap-2">
              {miniStats.map((s) => (
                <div key={s.label} className="bg-[#141A2E] rounded-lg p-2.5">
                  <p className="text-xs text-[#475569] mb-1 leading-tight">{s.label}</p>
                  <p className="text-base font-bold text-[#F1F5F9]">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: EASE }}
            className="absolute -top-6 -right-4 bg-[#0D1220] border border-[#1E2A42] rounded-xl px-4 py-3 shadow-2xl"
          >
            <p className="text-xs text-[#475569]">Occupancy Rate</p>
            <p className="text-xl font-bold text-[#F97316]">94.2%</p>
          </motion.div>

          {/* Floating card 2 */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease: EASE }}
            className="absolute -bottom-6 -left-4 bg-[#0D1220] border border-[#1E2A42] rounded-xl px-4 py-3 shadow-2xl"
          >
            <p className="text-xs text-[#475569]">MoM Growth</p>
            <p className="text-xl font-bold text-[#F1F5F9]">+18%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify in browser**

Expected: Full dark hero, orange badge, large Bricolage Grotesque headline with animated orange underline, two CTAs, integration pills fading to right. On desktop: dashboard mockup card visible on right with bar chart animating on load and two floating stat cards.

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/Hero.tsx
git commit -m "feat: rebuild Hero with dark premium aesthetic and animated dashboard mockup"
```

---

## Task 4: ProblemSection

**Files:**
- Rewrite: `src/components/landing/ProblemSection.tsx`

- [ ] **Step 1: Rewrite ProblemSection.tsx**

```tsx
import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const stats = [
  { value: '42%', label: 'of storage facilities have no active digital marketing strategy' },
  { value: '3×', label: 'more revenue generated by facilities with automated pricing' },
  { value: '$180k', label: 'average annual revenue left on the table without optimization' },
]

export function ProblemSection() {
  return (
    <section className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] max-w-2xl leading-[1.1]">
            Most storage facilities are leaving revenue on the table
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="bg-[#0D1220] rounded-xl p-6 border border-[#1E2A42] pl-7"
              style={{ borderLeft: '2px solid #F97316' }}
            >
              <p className="text-6xl font-bold text-[#F1F5F9] mb-3 leading-none">{stat.value}</p>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify in browser**

Expected: Three dark cards with large stat numbers, orange left-border accent on each.

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/ProblemSection.tsx
git commit -m "feat: rebuild ProblemSection with dark stat cards"
```

---

## Task 5: FeaturesSection

**Files:**
- Rewrite: `src/components/landing/FeaturesSection.tsx`

- [ ] **Step 1: Rewrite FeaturesSection.tsx**

```tsx
import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const features = [
  {
    num: '01',
    title: 'AI-Powered Insights',
    description: 'Our AI analyzes your facility data, market trends, and competitor pricing to surface actionable recommendations every week — automatically.',
    mockup: (
      <div className="p-4">
        <p className="text-xs text-[#475569] mb-3 uppercase tracking-widest">Weekly Recommendations</p>
        {[
          { text: 'Increase 10×10 outdoor rate by $8', impact: '+$1,200/mo', color: 'text-[#F97316]' },
          { text: 'Run Google Ads on "storage near me"', impact: '+38 leads', color: 'text-green-400' },
          { text: 'Update GMB with 6 new photos', impact: '+12% CTR', color: 'text-blue-400' },
        ].map((item) => (
          <div key={item.text} className="flex items-center justify-between py-2 border-b border-[#1E2A42] last:border-0">
            <p className="text-xs text-[#94A3B8]">{item.text}</p>
            <span className={`text-xs font-semibold ${item.color} shrink-0 ml-3`}>{item.impact}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '02',
    title: 'Local SEO Domination',
    description: 'We optimize your Google Business Profile, build local citations, and run geo-targeted campaigns to ensure you rank first when customers search nearby.',
    mockup: (
      <div className="p-4">
        <p className="text-xs text-[#475569] mb-3 uppercase tracking-widest">Search Rankings</p>
        {['storage units near me', 'self storage [city]', '10x10 storage unit'].map((term, i) => (
          <div key={term} className="flex items-center gap-3 py-2 border-b border-[#1E2A42] last:border-0">
            <span className="text-xs font-bold text-[#F97316] w-4">#1</span>
            <p className="text-xs text-[#94A3B8] flex-1">{term}</p>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 - i }).map((_, j) => (
                <div key={j} className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '03',
    title: 'We Execute Everything',
    description: 'Accept a recommendation and our specialists implement it for you. No logins to remember, no agencies to manage. One platform, one team, full execution.',
    mockup: (
      <div className="p-4">
        <p className="text-xs text-[#475569] mb-3 uppercase tracking-widest">Task Execution</p>
        {[
          { task: 'Google Ads campaign live', status: 'Done', color: 'bg-green-500/10 text-green-400' },
          { task: 'GMB photos uploaded', status: 'Done', color: 'bg-green-500/10 text-green-400' },
          { task: 'Rate optimization applied', status: 'In Progress', color: 'bg-[#F97316]/10 text-[#F97316]' },
        ].map((item) => (
          <div key={item.task} className="flex items-center justify-between py-2 border-b border-[#1E2A42] last:border-0">
            <p className="text-xs text-[#94A3B8]">{item.task}</p>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.color} shrink-0 ml-3`}>{item.status}</span>
          </div>
        ))}
      </div>
    ),
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] max-w-xl leading-[1.1]">
            Everything you need to fill your units
          </h2>
        </motion.div>

        <div className="flex flex-col gap-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="text-sm font-bold text-[#F97316] mb-3">{feature.num}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F1F5F9] mb-4 leading-[1.1]">
                  {feature.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">{feature.description}</p>
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-[#0D1220] border border-[#1E2A42] rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E2A42]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1E2A42]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1E2A42]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1E2A42]" />
                    </div>
                    <p className="text-xs text-[#475569] ml-2">StorScale Platform</p>
                  </div>
                  {feature.mockup}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify in browser**

Expected: Three features in alternating left/right layout. Each has a dark browser-frame mockup on the opposite side. Orange numbered labels.

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/FeaturesSection.tsx
git commit -m "feat: rebuild FeaturesSection with alternating dark feature blocks"
```

---

## Task 6: OutcomesSection

**Files:**
- Rewrite: `src/components/landing/OutcomesSection.tsx`

- [ ] **Step 1: Rewrite OutcomesSection.tsx**

```tsx
import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Users, Star } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const outcomes = [
  { icon: TrendingUp, stat: '+32%', label: 'Average revenue increase in first 90 days' },
  { icon: DollarSign, stat: '$14k', label: 'Average additional monthly revenue per facility' },
  { icon: Users, stat: '180+', label: 'Active storage facilities trust StorScale' },
  { icon: Star, stat: '4.9★', label: 'Average customer satisfaction rating' },
]

export function OutcomesSection() {
  return (
    <section className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">Outcomes</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] leading-[1.1]">
            Real results for real operators
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="bg-[#0D1220] border border-[#1E2A42] rounded-xl p-6"
            >
              <div className="w-10 h-10 bg-[#F97316]/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[#F97316]" />
              </div>
              <p className="text-4xl font-bold text-[#F1F5F9] mb-2 leading-none">{item.stat}</p>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          className="text-center mt-10"
        >
          <a href="#timeline" className="text-sm font-semibold text-[#F97316] hover:text-[#EA580C] transition-colors">
            See how we achieve this →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/landing/OutcomesSection.tsx
git commit -m "feat: rebuild OutcomesSection with dark 4-card grid"
```

---

## Task 7: IntegrationsSection

**Files:**
- Rewrite: `src/components/landing/IntegrationsSection.tsx`

- [ ] **Step 1: Rewrite IntegrationsSection.tsx**

```tsx
import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const integrations = [
  'Google Ads', 'Meta Ads', 'StorTrack', 'Yardi', 'SiteLink', 'DaVinci',
  'Google Business', 'CallRail', 'Mailchimp', 'Zapier', 'SpareFoot', 'Storage.com',
]

export function IntegrationsSection() {
  const doubled = [...integrations, ...integrations]

  return (
    <section className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">Integrations</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] leading-[1.1]">
            Connects with your existing tools
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-md mx-auto text-sm">
            StorScale plugs into the platforms you already use — no migration required.
          </p>
        </motion.div>

        <div
          className="overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="flex animate-marquee w-max gap-3">
            {doubled.map((name, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-lg bg-[#0D1220] border border-[#1E2A42] text-[#94A3B8] text-sm font-medium whitespace-nowrap flex-shrink-0"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify in browser**

Expected: Dark integration pills scrolling left in a continuous marquee, fading out at left and right edges. Pauses on hover.

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/IntegrationsSection.tsx
git commit -m "feat: rebuild IntegrationsSection with dark marquee strip"
```

---

## Task 8: TeamSection

**Files:**
- Rewrite: `src/components/landing/TeamSection.tsx`

- [ ] **Step 1: Rewrite TeamSection.tsx**

```tsx
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
  { icon: CheckCircle2, title: 'Optimized Google Ads bid strategy', meta: 'Completed by Rachelle · 2 hours ago', status: 'Done', statusClass: 'bg-green-500/10 text-green-400' },
  { icon: Clock, title: 'Updating GMB listings with new photos', meta: 'In progress by Justin · Started today', status: 'In Progress', statusClass: 'bg-[#F97316]/10 text-[#F97316]' },
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/landing/TeamSection.tsx
git commit -m "feat: rebuild TeamSection with dark service cards and task mockup"
```

---

## Task 9: TimelineSection

**Files:**
- Rewrite: `src/components/landing/TimelineSection.tsx`

- [ ] **Step 1: Rewrite TimelineSection.tsx**

```tsx
import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const steps = [
  {
    day: 'Day 1',
    title: 'Onboarding & Audit',
    description: 'We connect your accounts, audit your current marketing, and build your customized strategy. You approve the plan.',
    side: 'right' as const,
  },
  {
    day: 'Day 7',
    title: 'Campaigns Go Live',
    description: 'Your Google Ads, local SEO updates, and GMB optimizations are active. Our AI begins tracking performance.',
    side: 'left' as const,
  },
  {
    day: 'Day 30',
    title: 'First Results Review',
    description: "Monthly clarity call with your specialist. Review wins, discuss insights, and approve next month's recommendations.",
    side: 'right' as const,
  },
  {
    day: 'Day 100',
    title: 'Revenue Compounding',
    description: 'With three months of data, our AI predictions sharpen. Most facilities see 25–40% revenue growth by this milestone.',
    side: 'left' as const,
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] leading-[1.1]">
            From onboarding to results in 100 days
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1E2A42] -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.day}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                className="relative grid grid-cols-2 gap-8 items-center"
              >
                {/* Node */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F97316] z-10"
                  style={{ boxShadow: '0 0 0 6px rgba(249,115,22,0.15)' }}
                />

                {step.side === 'right' ? (
                  <>
                    <div className="text-right pr-8">
                      <p className="text-5xl font-bold text-[#1E2A42] leading-none">{step.day}</p>
                    </div>
                    <div className="pl-8">
                      <div className="bg-[#0D1220] border border-[#1E2A42] rounded-xl p-5">
                        <h3 className="font-bold text-[#F1F5F9] mb-2">{step.title}</h3>
                        <p className="text-sm text-[#94A3B8] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pr-8">
                      <div className="bg-[#0D1220] border border-[#1E2A42] rounded-xl p-5">
                        <h3 className="font-bold text-[#F1F5F9] mb-2">{step.title}</h3>
                        <p className="text-sm text-[#94A3B8] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    <div className="pl-8">
                      <p className="text-5xl font-bold text-[#1E2A42] leading-none">{step.day}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/landing/TimelineSection.tsx
git commit -m "feat: rebuild TimelineSection with dark vertical timeline"
```

---

## Task 10: SocialProofSection

**Files:**
- Rewrite: `src/components/landing/SocialProofSection.tsx`

- [ ] **Step 1: Rewrite SocialProofSection.tsx**

```tsx
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const bigStats = [
  { value: '+32%', label: 'Average revenue increase' },
  { value: '18%', label: 'Avg occupancy improvement' },
  { value: '3×', label: 'Return on marketing spend' },
]

const testimonials = [
  {
    quote: "StorScale transformed our marketing. We went from 71% to 94% occupancy in 90 days. The team handles everything.",
    name: 'Mike D.',
    role: 'Owner, Ridgeline Storage — Phoenix, AZ',
    initials: 'MD',
  },
  {
    quote: "I was skeptical at first but the results speak for themselves. $22k more per month with zero additional effort on my end.",
    name: 'Sarah K.',
    role: 'Operator, Coast Clear Storage — Tampa, FL',
    initials: 'SK',
  },
  {
    quote: "The AI recommendations are incredibly accurate. Our Google rankings went from page 3 to #1 within six weeks.",
    name: 'James T.',
    role: 'Owner, Blue Ridge Self Storage — Denver, CO',
    initials: 'JT',
  },
]

export function SocialProofSection() {
  return (
    <section className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">Results</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] leading-[1.1]">
            Proven results across 180+ facilities
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 mb-16 text-center">
          {bigStats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            >
              <p className="text-7xl lg:text-8xl font-bold text-[#F1F5F9] leading-none">{stat.value}</p>
              <p className="text-sm text-[#94A3B8] mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="bg-[#0D1220] border border-[#1E2A42] rounded-xl p-6"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1E2A42] flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-[#94A3B8]">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F1F5F9]">{t.name}</p>
                  <p className="text-xs text-[#475569]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/landing/SocialProofSection.tsx
git commit -m "feat: rebuild SocialProofSection with oversized stats and dark testimonials"
```

---

## Task 11: PricingSection

**Files:**
- Rewrite: `src/components/landing/PricingSection.tsx`

- [ ] **Step 1: Rewrite PricingSection.tsx**

```tsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const tiers = [
  {
    name: 'Passive',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'AI insights with no commitment',
    features: ['AI recommendations dashboard', 'Weekly performance reports', 'Market trend analysis', 'Email support'],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Growth',
    monthlyPrice: 249,
    annualPrice: 199,
    description: 'For single-facility operators ready to grow',
    features: ['Everything in Passive', 'Specialist executes 5 tasks/mo', 'Monthly clarity call', 'Google Ads management', 'GMB optimization'],
    cta: 'Start Growing',
    popular: false,
  },
  {
    name: 'Scale',
    monthlyPrice: 449,
    annualPrice: 359,
    description: 'Our most popular plan for serious operators',
    features: ['Everything in Growth', 'Unlimited task execution', 'Local SEO campaigns', 'Review management', 'Priority support', 'Bi-weekly calls'],
    cta: 'Start Scaling',
    popular: true,
  },
  {
    name: 'Master',
    monthlyPrice: 799,
    annualPrice: 639,
    description: 'Full-service for multi-facility operators',
    features: ['Everything in Scale', 'Multi-location management', 'Dedicated account manager', 'Custom reporting', 'API access', 'Quarterly strategy sessions'],
    cta: 'Go Enterprise',
    popular: false,
  },
]

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-6 leading-[1.1]">
            Simple, transparent pricing
          </h2>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-[#0D1220] border border-[#1E2A42] rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${!annual ? 'text-white' : 'text-[#94A3B8] hover:text-[#F1F5F9]'}`}
            >
              {!annual && (
                <motion.div
                  layoutId="billing-pill"
                  className="absolute inset-0 bg-[#F97316] rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${annual ? 'text-white' : 'text-[#94A3B8] hover:text-[#F1F5F9]'}`}
            >
              {annual && (
                <motion.div
                  layoutId="billing-pill"
                  className="absolute inset-0 bg-[#F97316] rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                Annual <span className="text-xs opacity-75 ml-1">Save 20%</span>
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className={`relative bg-[#0D1220] rounded-xl p-6 flex flex-col ${
                tier.popular ? 'border border-[#F97316]' : 'border border-[#1E2A42]'
              }`}
              style={tier.popular ? { boxShadow: '0 0 40px rgba(249,115,22,0.08)' } : {}}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#F97316] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-bold text-[#F1F5F9] text-lg mb-1">{tier.name}</h3>
                <p className="text-xs text-[#475569]">{tier.description}</p>
              </div>

              <div className="mb-5">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={annual ? 'annual' : 'monthly'}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl font-bold text-[#F1F5F9]"
                  >
                    {tier.monthlyPrice === 0 ? 'Free' : `$${annual ? tier.annualPrice : tier.monthlyPrice}`}
                    {tier.monthlyPrice > 0 && (
                      <span className="text-base font-normal text-[#475569]">/mo</span>
                    )}
                  </motion.p>
                </AnimatePresence>
              </div>

              <ul className="flex-1 space-y-3 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#94A3B8]">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`flex items-center justify-center w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  tier.popular
                    ? 'bg-[#F97316] text-white hover:bg-[#EA580C]'
                    : 'border border-[#1E2A42] text-[#F1F5F9] hover:bg-[#141A2E]'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify in browser**

Expected: 4 dark tier cards. Scale tier has orange border and glow. Toggle animates the pill between Monthly/Annual with spring motion. Price animates on toggle switch.

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/PricingSection.tsx
git commit -m "feat: rebuild PricingSection with dark tier cards and spring billing toggle"
```

---

## Task 12: FAQSection

**Files:**
- Rewrite: `src/components/landing/FAQSection.tsx`

- [ ] **Step 1: Rewrite FAQSection.tsx**

```tsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const faqs = [
  { q: 'How quickly will I see results?', a: 'Most facilities see measurable improvement in occupancy and revenue within the first 30–60 days. Full results typically compound over the first 100 days as our AI gathers more data.' },
  { q: 'Do I need to do anything after signing up?', a: "Very little. You'll approve recommendations and join monthly clarity calls. We handle everything else — campaign setup, ad management, GMB updates, and more." },
  { q: 'What if I already have a marketing agency?', a: 'StorScale can replace or complement existing marketing. Many clients switch because they want execution included, not just strategy and reports.' },
  { q: 'Do you manage Google Ads directly?', a: 'Yes. We set up, manage, and optimize your Google Ads campaigns. You maintain ownership of your account — we just run it for you.' },
  { q: 'Is there a contract or lock-in period?', a: 'No long-term contracts. All plans are month-to-month with the option to cancel anytime. Annual plans are discounted but not required.' },
  { q: 'What makes StorScale different from other marketing tools?', a: 'We execute, not just advise. Most tools give you a dashboard. StorScale gives you a team that implements the recommendations for you.' },
  { q: 'Can I start on the free Passive plan?', a: "Yes. The Passive plan is completely free and gives you full access to AI-generated insights and recommendations. Upgrade when you're ready for execution." },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="relative z-10 py-24 px-4 bg-[#070B14] border-t border-[#1E2A42]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] leading-[1.1]">
            Questions & answers
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
              className="border-b border-[#1E2A42]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
              >
                <span className="text-sm font-medium text-[#F1F5F9] group-hover:text-white transition-colors pr-4">
                  {faq.q}
                </span>
                <span className="shrink-0 text-[#F97316]">
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="text-sm text-[#94A3B8] leading-relaxed pb-5">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
          className="text-center mt-14"
        >
          <h3 className="text-2xl font-bold text-[#F1F5F9] mb-4">Still have questions?</h3>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors duration-200"
          >
            Talk to our team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/landing/FAQSection.tsx
git commit -m "feat: rebuild FAQSection with dark accordion, borderline style"
```

---

## Task 13: Footer

**Files:**
- Rewrite: `src/components/landing/Footer.tsx`

- [ ] **Step 1: Rewrite Footer.tsx**

```tsx
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
          <p className="text-xs text-[#475569]">© 2026 StorScale. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-[#475569] hover:text-[#94A3B8] transition-colors">Privacy</a>
            <a href="#" className="text-xs text-[#475569] hover:text-[#94A3B8] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/landing/Footer.tsx
git commit -m "feat: rebuild Footer with dark 3-column layout"
```

---

## Task 14: Final Build, TypeScript Check, and Deploy

**Files:** All previously modified

- [ ] **Step 1: Run TypeScript build check**

```bash
cd /Users/jakewombwell-povey/storscale-redesign
npm run build
```

Expected: Build succeeds with no TypeScript errors and no Vite warnings. Output in `dist/`.

If TypeScript errors appear:
- `TS2322` (type mismatch): Check `as const` on `EASE` arrays — they need to be `const` or typed as `number[]`
- `TS2304` (not found): Verify all imports match lucide-react icon names exactly
- `TS6133` (unused): Remove any unused imports

- [ ] **Step 2: Full visual review in browser**

Run: `npm run dev`

Walk through each section and verify:
- [ ] Dark `#070B14` background throughout (no white sections bleeding through)
- [ ] Bricolage Grotesque loading on all headings
- [ ] Grain texture visible (subtle — zoom in at 200% to see it)
- [ ] Navbar pill visible, transitions on scroll
- [ ] Hero dashboard mockup + floating cards visible on desktop
- [ ] Hero underline sweep animation fires on load
- [ ] Integration logos fade-out at right edge
- [ ] All section labels in small orange caps
- [ ] Problem stats have orange left border
- [ ] Features alternate left/right layout correctly
- [ ] Integrations marquee scrolling, pauses on hover
- [ ] Team section task mockup green pulse dot visible
- [ ] Timeline vertical line + orange nodes with glow
- [ ] Social proof oversized stats display correctly
- [ ] Pricing popular card has orange border + glow
- [ ] Pricing toggle spring animation works
- [ ] FAQ accordion smooth height animation
- [ ] Footer 3-column layout on desktop

- [ ] **Step 3: Deploy to GitHub Pages**

```bash
cd /Users/jakewombwell-povey/storscale-redesign
git push origin main
```

Then trigger deployment:
```bash
gh workflow run deploy.yml
```

Monitor:
```bash
gh run list --workflow=deploy.yml --limit=3
```

Expected: Workflow completes with green status. Site live at https://jwpstrscl.github.io/storscale-redesign/

- [ ] **Step 4: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: resolve TypeScript errors from dark redesign rebuild"
```
