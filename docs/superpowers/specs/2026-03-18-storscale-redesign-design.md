# StorScale Landing Page Redesign — Design Spec

**Date:** 2026-03-18
**Status:** Approved
**Reference inspiration:** thoughtmachine.net
**Design direction:** Bold Dark Premium (Direction A)

---

## Overview

Full visual redesign of the StorScale marketing landing page. The goal is a premium, enterprise-quality aesthetic — dark, architectural, typographically confident — that elevates brand perception from generic SaaS to authoritative industry leader. Section structure stays the same; this spec covers the complete design system and section-by-section visual treatment.

---

## Design System

### Color Tokens

All color values are used as inline Tailwind arbitrary values (e.g. `bg-[#070B14]`) — **no CSS variable system**. This avoids the Tailwind v4 token alias resolution issues that caused bugs in the previous build.

| Token name (reference only) | Value | Usage |
|-----------------------------|-------|-------|
| `bg-base` | `#070B14` | Site-wide base background |
| `bg-surface-1` | `#0D1220` | Cards, section fills |
| `bg-surface-2` | `#141A2E` | Inner card surfaces, inputs |
| `border` | `#1E2A42` | All dividers, card borders |
| `text-primary` | `#F1F5F9` | Headlines, key content |
| `text-body` | `#94A3B8` | Body copy, descriptions |
| `text-muted` | `#475569` | Labels, captions |
| `accent` | `#F97316` | CTAs, highlights, icon fills |
| `accent-glow` | `rgba(249,115,22,0.12)` | Orange aura behind key elements |

### Typography

- **Display / Headlines:** `Bricolage Grotesque` (Google Fonts, variable weight 400–800)
  - Used for all H1/H2 headings, hero text, oversized stats
  - Renders architectural and dramatic at large sizes
- **Body:** `DM Sans` (Google Fonts, 400–600)
  - Used for all body copy, nav links, labels, buttons, captions
- **Stats / Metrics:** `DM Sans` with `font-variant-numeric: tabular-nums` at heavy weight
- Both fonts loaded at the top of `src/index.css` via:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600&display=swap');
  ```
- Applied globally in `src/index.css`:
  ```css
  body { font-family: 'DM Sans', sans-serif; background-color: #070B14; }
  h1, h2, h3 { font-family: 'Bricolage Grotesque', sans-serif; }
  ```

### Atmosphere & Texture

- **Grain overlay:** Fixed `::before` pseudo-element on `body`. Uses inline SVG data URI with `feTurbulence` noise filter:
  ```css
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
  ```
- **Dot grid (hero only):** CSS `radial-gradient` dot pattern at `opacity: 0.06` as a background layer on the hero section element:
  ```css
  background-image: radial-gradient(circle, #1E2A42 1px, transparent 1px);
  background-size: 32px 32px;
  ```
- **Orange glow:** `radial-gradient` on the hero section and key CTA blocks:
  ```css
  background: radial-gradient(ellipse 60% 50% at 70% 50%, rgba(249,115,22,0.08) 0%, transparent 70%);
  ```
- **Section separation:** All sections use `#070B14` base — no alternating light/dark backgrounds. Sections separated by `border-t border-[#1E2A42]` only. No bottom padding variation as separator.
- **Section labels:** Small uppercase orange label above each H2. Class pattern: `text-xs font-semibold tracking-[0.15em] uppercase text-[#F97316] mb-3`.

### Motion

- **Entrance:** framer-motion `whileInView` — `initial={{ opacity: 0, y: 24 }}` → `animate={{ opacity: 1, y: 0 }}`, `transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}`, `viewport={{ once: true }}`
- **Stagger:** Child elements use `transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}`
- **Pricing toggle:** Spring animation `transition={{ type: 'spring', stiffness: 400, damping: 30 }}` on the indicator pill
- **FAQ accordion:** `AnimatePresence` + `motion.div` with `initial={{ height: 0 }}` / `animate={{ height: 'auto' }}` / `exit={{ height: 0 }}`, `overflow: hidden`
- **Underline sweep:** CSS `::after` pseudo-element on the hero accent word, `transform: scaleX(0 → 1)`, `transform-origin: left`, `transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s`
- **Marquee (IntegrationsSection):** CSS `@keyframes marquee` — `from { transform: translateX(0) }` to `{ transform: translateX(-50%) }`, `animation: marquee 30s linear infinite`. Defined in `index.css`.

---

## Component Designs

### Navbar

- `fixed top-4 left-0 right-0` floating pill, max-width `1152px`, `mx-auto`, `w-[calc(100%-2rem)]`, `rounded-xl`
- **Default (top of page):** `bg-transparent`, `border border-[#1E2A42]/50` (at 50% opacity — visible but subtle against dark hero), links `text-[#94A3B8]`
- **Scrolled:** `bg-[#0D1220]/90 backdrop-blur-xl border border-[#1E2A42]`, links `text-[#94A3B8]`
- Logo: orange warehouse icon + "StorScale" in Bricolage Grotesque bold `text-[#F1F5F9]`
- Desktop links: How It Works, Features, Pricing, About — hover `text-[#F1F5F9]`
- CTA: `bg-[#F97316] hover:bg-[#EA580C] text-white` pill button
- Mobile: Sheet drawer from left, `bg-[#0D1220]` background, same link styles

### Hero

- Full viewport height (`min-h-screen`), `pt-24 pb-16`, two-column grid on desktop (`lg:grid-cols-2`), vertically centered
- **Background layers (stacked):**
  1. Base: `bg-[#070B14]`
  2. Dot grid pattern (CSS background-image, see Texture section)
  3. Orange radial glow (positioned to right center)
- **Left column:**
  - Badge: `bg-[#0D1220] border border-[#1E2A42] text-[#F97316] text-xs font-semibold px-3 py-1 rounded-full` — "AI-Powered Self-Storage Marketing"
  - H1 in Bricolage Grotesque, `text-5xl lg:text-7xl font-bold text-[#F1F5F9] leading-[1.05]`, 2–3 lines. The word "revenue" (or equivalent key word) gets the orange CSS underline sweep.
  - Subheading: `text-lg text-[#94A3B8] max-w-md mt-4`
  - CTAs: `Book a Demo` (solid orange) + `See How It Works` (`border border-[#1E2A42] text-[#F1F5F9] hover:bg-[#0D1220]`)
  - Integration logos row: static row of 5–6 integration name pills/logos (`bg-[#0D1220] border border-[#1E2A42] text-[#475569] text-xs px-3 py-1 rounded-md`), preceded by "Works with" label. Soft fade using a `::after` pseudo or wrapper with `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)` — fade color must be `#070B14` not white.
- **Right column:**
  - Main dashboard card: `bg-[#0D1220] border border-[#1E2A42] rounded-2xl p-5`, with a faint `box-shadow: 0 0 60px rgba(249,115,22,0.08)` orange aura
  - Inside: header row (StorScale logo mark, "Performance Dashboard" label), animated bar chart (framer-motion bars animate from height 0 on mount), row of 3 mini metric chips
  - 2 floating metric cards positioned absolutely off the main card edges: `bg-[#0D1220] border border-[#1E2A42] rounded-xl px-4 py-3 shadow-xl`

### Problem Section

- Section label: `THE PROBLEM`
- H2 in Bricolage Grotesque: *"Most storage facilities are leaving revenue on the table"*
- Three stat cards in a row on `bg-[#0D1220] border border-[#1E2A42] rounded-xl p-6`:
  - Large number in Bricolage Grotesque ~`text-6xl font-bold text-[#F1F5F9]`
  - Short label in `text-sm text-[#94A3B8] mt-2`
  - Orange left border: `border-l-2 border-[#F97316] pl-4`

### Features Section

- Section label: `WHAT WE DO`
- Three features in alternating left/right layout (content left + mockup right, then mockup left + content right, etc.)
- Each block: orange number `01` / `02` / `03` in `text-sm font-bold text-[#F97316]` → H3 in Bricolage Grotesque `text-3xl text-[#F1F5F9]` → description `text-[#94A3B8]`
- Feature mockup cards: `bg-[#0D1220] border border-[#1E2A42] rounded-2xl` — styled dark UI mockup relevant to that feature

### Outcomes Section

- Section label: `OUTCOMES`
- 2×2 grid of outcome cards on `bg-[#0D1220] border border-[#1E2A42] rounded-xl p-6`
- Each card: orange icon (lucide) in `bg-[#F97316]/10 rounded-lg p-2` → H3 stat/metric in Bricolage Grotesque `text-4xl font-bold text-[#F1F5F9]` → outcome label `text-sm text-[#94A3B8]`
- Preserve existing 4 outcome items, dark-themed
- Bottom CTA: inline link "See how we achieve this →" in orange

### Integrations Section

- Section label: `INTEGRATIONS`
- H2: *"Connects with your existing tools"* (or existing copy)
- Marquee strip: two identical rows of integration logo pills, side by side in a `flex` container that is `2×` the viewport width. CSS `@keyframes marquee` translates the container left by 50% over 30s infinitely.
- Logo pills: `bg-[#0D1220] border border-[#1E2A42] text-[#94A3B8] text-sm px-4 py-2 rounded-lg flex items-center gap-2`
- Container wrapper: `overflow-hidden` with `mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent)` — fade color matched to `#070B14` base
- Section background: `bg-[#070B14]` (same as base)

### Timeline Section (How It Works)

- Section label: `HOW IT WORKS`
- Centered vertical timeline layout
- Connector: `2px` vertical line `bg-[#1E2A42]` running through node centers
- Node circles: `w-4 h-4 rounded-full bg-[#F97316]`, `box-shadow: 0 0 0 6px rgba(249,115,22,0.15)`
- Step cards float left/right alternating: `bg-[#0D1220] border border-[#1E2A42] rounded-xl p-6`
- Day labels: `text-5xl font-bold text-[#1E2A42]` behind card (large muted watermark style)

### Team Section

- Section label: `YOUR TEAM`
- Two-column layout:
  - Left: 2×2 grid of service cards `bg-[#0D1220] border border-[#1E2A42] rounded-xl p-5`; orange icon in `bg-[#F97316]/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3`
  - Right: Task Tab mockup — `bg-[#0D1220] border border-[#1E2A42] rounded-xl overflow-hidden`; header with live indicator dot (`w-2 h-2 rounded-full bg-green-400 animate-pulse`); task rows with `border-t border-[#1E2A42]`; status chips `bg-[#F97316]/10 text-[#F97316]` (done), `bg-blue-500/10 text-blue-400` (in progress), `bg-[#1E2A42] text-[#475569]` (upcoming)

### Social Proof Section

- Section label: `RESULTS`
- Three oversized stat blocks in a row: number in Bricolage Grotesque `text-7xl lg:text-8xl font-bold text-[#F1F5F9]`, label `text-sm text-[#94A3B8] mt-2`
- Below: 3 testimonial cards `bg-[#0D1220] border border-[#1E2A42] rounded-xl p-6`; quote `text-[#94A3B8]`; name `text-[#F1F5F9] font-semibold`; role `text-[#475569] text-sm`; star rating in `text-[#F97316]`

### Pricing Section

- Section label: `PRICING`
- Monthly/annual spring-animated toggle
- Four tier cards `bg-[#0D1220] border border-[#1E2A42] rounded-xl p-8`:
  - Passive (free), Growth, Scale (Most Popular), Master
  - Popular tier: `border-[#F97316]`, `box-shadow: 0 0 40px rgba(249,115,22,0.08)`, `Most Popular` badge `bg-[#F97316] text-white text-xs font-semibold px-3 py-1 rounded-full`
  - Orange checkmarks: `text-[#F97316]`
  - CTA button: orange on popular, `border border-[#1E2A42] text-[#F1F5F9]` on others

### FAQ Section

- Section label: `FAQ`
- Accordion items: `border-b border-[#1E2A42]` dividers only — no card backgrounds, no surface fill
- Question: `text-[#F1F5F9] font-medium py-5 flex items-center justify-between cursor-pointer`
- Answer: `text-[#94A3B8] text-sm pb-5` (AnimatePresence height transition)
- Plus/minus toggle icon: `text-[#F97316]`
- Bottom CTA block: H3 in Bricolage `text-[#F1F5F9]` + orange button

### Footer

- Layout: `grid lg:grid-cols-3` — logo+tagline left, nav columns center, CTA right
- Background: `bg-[#070B14]`, `border-t border-[#1E2A42]`
- Logo: same as navbar
- Nav link color: `text-[#475569] hover:text-[#94A3B8]`
- Bottom bar: `border-t border-[#1E2A42] mt-12 pt-6 flex justify-between` — copyright `text-[#475569] text-sm`, social icon links `text-[#475569] hover:text-[#F1F5F9]`

---

## Implementation Notes

- **Color strategy:** All colors as inline Tailwind arbitrary values (e.g. `bg-[#070B14]`). No CSS variables. This avoids Tailwind v4 token alias resolution issues.
- **Font loading:** Add Google Fonts `@import` as the very first line of `src/index.css`, before `@import "tailwindcss"`. Apply globally by replacing (not appending to) the existing `body` rule with one that sets `font-family: 'DM Sans', sans-serif` and `background-color: #070B14`.
- **index.css rewrite required:** The existing `index.css` contains a `@theme` block with old color tokens and a `:root` block with shadcn HSL variables. The existing `body` rule sets `background-color: var(--color-background)` (white). These must be **removed** when rewriting `index.css`, not appended to. Leaving the old `body` rule creates a specificity conflict that will render the background white despite the new rule.
- **Grain + keyframes:** The rewritten `index.css` must include the `body::before` grain rule and `@keyframes marquee` for the integrations strip.
- **mask-image fades:** Use inline `style` prop consistently for both the Hero logo row and IntegrationsSection marquee wrapper: `style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}`. Tailwind v4 has no built-in `mask-image` utility.
- **All existing component files rebuilt in-place** — same filenames, same exports, fully replaced content.
- **No new npm packages** — framer-motion, lucide-react, and @radix-ui already installed.
- **z-index layering:** Grain overlay `body::before` at `z-index: 0`. All section wrapper root elements must have `relative z-10` (or higher) to ensure they render above the grain layer. Navbar at `z-50`.
