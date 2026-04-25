# 206 Candlewood — Brand & Design System

Reference document for designers and developers. All future pages on this site should match this aesthetic. When in doubt, refer here first.

---

## Brand Voice & Tone

**Feel:** Modern, warm, community-oriented, quietly inviting. Not flashy or corporate — this is a home, not a hotel.

**Personality:** Light and optimistic. Clean without being cold. The kind of building lobby that's bright, calm, and smells like fresh paint.

**Writing style:** Short sentences. Friendly but professional. First-person plural ("we're getting things ready") to feel like neighbours, not management. Never aggressive urgency — no "Act now!" energy.

**Examples:**
- ✅ "A great place to call home."
- ✅ "We're getting things ready for the residents of 206 Candlewood Cres."
- ❌ "Luxury living awaits you."
- ❌ "Sign up to be notified!"

---

## Color Palette

All colors are from the Tailwind CSS default palette or expressed as explicit hex values.

### Background Gradient

The page background is a three-stop diagonal gradient that slowly shifts position:

| Stop | Tailwind token | Hex |
|------|---------------|-----|
| From | `slate-50` | `#f8fafc` |
| Via  | `indigo-50` | `#eef2ff` |
| To   | `violet-50` | `#f5f3ff` |

Direction: `bg-gradient-to-br` (bottom-right diagonal)

### Ambient Blob Colors (decorative, blurred)

| Blob | Tailwind token | Hex | Opacity |
|------|---------------|-----|---------|
| Top-left | `indigo-200` | `#c7d2fe` | 40% (`/40`) |
| Bottom-right | `violet-200` | `#ddd6fe` | 40% (`/40`) |
| Centre-right | `sky-200` | `#bae6fd` | 30% (`/30`) |

### Glass Card

| Property | Value |
|----------|-------|
| Background | `white/70` → `rgba(255, 255, 255, 0.70)` |
| Border | `white/80` → `rgba(255, 255, 255, 0.80)` |
| Backdrop blur | `backdrop-blur-md` (12px) |
| Shadow | `shadow-2xl` |

### Text Colors

| Role | Tailwind token | Hex |
|------|---------------|-----|
| Primary heading | `gray-900` | `#111827` |
| Body / tagline | `gray-500` | `#6b7280` |
| Subtle / address | `gray-400` | `#9ca3af` |
| Divider line | `gray-200` | `#e5e7eb` |

### Accent Colors

| Role | Tailwind token | Hex |
|------|---------------|-----|
| Primary accent | `indigo-400` | `#818cf8` |
| Secondary accent | `violet-400` | `#a78bfa` |
| Nature accent | `emerald-400` | `#34d399` |
| Address pin icon | `indigo-300` | `#a5b4fc` |
| Floating icons | `indigo-400` | `#818cf8` |

### Shimmer Gradient (Coming Soon text)

A 5-stop horizontal sweep applied via `background-clip: text`:

```
#6366f1  0%    (indigo-500)
#a78bfa  30%   (violet-400)
#818cf8  50%   (indigo-400)
#a78bfa  70%   (violet-400)
#6366f1  100%  (indigo-500)
```

### Pulse Glow (card shadow)

| State | Value |
|-------|-------|
| Rest | `rgba(99, 102, 241, 0.15)` — indigo-500 at 15% |
| Peak | `rgba(99, 102, 241, 0.12)` spread 40px, blur 8px |

---

## Typography

### Font

| Property | Value |
|----------|-------|
| Family | **Geist Sans** (Google Fonts via `next/font/google`) |
| CSS variable | `--font-geist-sans` |
| Fallback | System sans-serif |
| Applied via | `className={geistSans.variable}` on `<html>` |

No monospace font is used on this site (Geist Mono was removed).

### Type Scale

| Element | Tailwind classes | Equivalent |
|---------|-----------------|------------|
| Main heading `<h1>` | `text-4xl sm:text-5xl font-bold tracking-tight` | 36px → 48px, 700 weight, tight tracking |
| Subheading / shimmer `<p>` | `text-2xl sm:text-3xl font-semibold` | 24px → 30px, 600 weight |
| Body tagline `<p>` | `text-base leading-relaxed` | 16px, 1.625 line height |
| Address `<span>` | `text-sm` | 14px |

### Anti-aliasing

`antialiased` is not set globally in this version — the body is bare. If adding it, apply on `<body>`.

---

## Animation System

All animations are defined as custom `@keyframes` in `globals.css` and applied via custom utility classes.

### Keyframes

#### `float-a` — gentle float with slight rotation
```css
@keyframes float-a {
  0%, 100% { transform: translateY(0px) rotate(0deg);   opacity: 0.18; }
  33%       { transform: translateY(-22px) rotate(6deg);  opacity: 0.28; }
  66%       { transform: translateY(-10px) rotate(-4deg); opacity: 0.22; }
}
```

#### `float-b` — deeper float, reversed rotation
```css
@keyframes float-b {
  0%, 100% { transform: translateY(0px) rotate(0deg);    opacity: 0.14; }
  40%       { transform: translateY(-30px) rotate(-8deg); opacity: 0.24; }
  70%       { transform: translateY(-14px) rotate(5deg);  opacity: 0.18; }
}
```

#### `float-c` — simple up-and-back float
```css
@keyframes float-c {
  0%, 100% { transform: translateY(0px) rotate(0deg);   opacity: 0.20; }
  50%       { transform: translateY(-18px) rotate(10deg); opacity: 0.30; }
}
```

#### `gradient-shift` — slow background position drift
```css
@keyframes gradient-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```
Background must be sized `300% 300%` to allow movement.

#### `pulse-glow` — soft box-shadow pulse on card
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.15); }
  50%       { box-shadow: 0 0 40px 8px rgba(99, 102, 241, 0.12); }
}
```

#### `blink` — cursor blink (step timing — hard on/off)
```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
```

#### `fade-up` — entrance reveal from below
```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

#### `shimmer` — horizontal gradient sweep
```css
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}
```
Background must be sized `200% auto`.

### Utility Classes

| Class | Animation | Duration | Easing | Fill |
|-------|-----------|----------|--------|------|
| `.animate-float-a` | `float-a` | `var(--dur, 6s)` | `ease-in-out` | `infinite` |
| `.animate-float-b` | `float-b` | `var(--dur, 8s)` | `ease-in-out` | `infinite` |
| `.animate-float-c` | `float-c` | `var(--dur, 7s)` | `ease-in-out` | `infinite` |
| `.animate-gradient` | `gradient-shift` | `12s` | `ease` | `infinite` |
| `.animate-pulse-glow` | `pulse-glow` | `3s` | `ease-in-out` | `infinite` |
| `.animate-fade-up` | `fade-up` | `0.8s` | `ease` | `both` |
| `.cursor-blink` | `blink` | `1s` | `step-end` | `infinite` |
| `.animate-shimmer` | `shimmer` | `4s` | `linear` | `infinite` |

### Duration Override — `--dur` CSS Variable

Floating icons use a `--dur` CSS custom property to vary their speed per-instance without extra classes:

```tsx
style={{ "--dur": "9s", animationDelay: "1.2s" } as React.CSSProperties}
```

This allows 12 icons to animate at different rhythms with one shared class.

### Staggered Entrance Delays (card elements)

Card children use `animationDelay` on `style` to stagger their `fade-up` entrance:

| Element | Delay |
|---------|-------|
| Icon cluster | `0.05s` |
| `<h1>` heading | `0.15s` |
| "Coming Soon" shimmer | `0.25s` |
| Tagline paragraph | `0.35s` |
| Divider line | `0.40s` |
| Address row | `0.45s` |

---

## Visual Effects

### Glass Morphism Card

The card is the primary UI surface. Recipe:

```
bg-white/70          → semi-transparent white fill
backdrop-blur-md     → 12px blur of content beneath
border border-white/80 → nearly-opaque white border (gives frosted edge)
shadow-2xl           → deep drop shadow for lift
rounded-3xl          → 24px corner radius
```

### Ambient Depth Blobs

Three `absolute` `rounded-full` divs behind everything, with `blur-3xl` (64px) and low opacity. They give the background a painterly softness. Sizes: 384px, 320px, 256px. Positioned to overflow edges slightly (negative top/left/right/bottom) so the blur spreads past the viewport edge.

### Floating Icon Layer

Icons sit in absolute positions across the full viewport, `z-index` below the card. They are:
- `pointer-events-none` and `select-none` — invisible to interaction
- `text-indigo-400` — soft indigo stroke
- `strokeWidth={1.4}` — thinner than Lucide's default 2.0; feels lighter, more ambient
- Opacity controlled within the keyframe animations (range ~0.14–0.30) rather than a static Tailwind opacity class

### Card Icon Cluster

Inside the card, three icons at `strokeWidth={1.6}` (slightly heavier than background icons for readability). Each has its own accent colour:
- `Building2` → `text-indigo-400`
- `HomeIcon` → `text-violet-400`
- `Trees` → `text-emerald-400`

---

## Iconography

All icons are from [`lucide-react`](https://lucide.dev). Lucide uses a consistent geometric style (24×24 grid, 2px default stroke) which pairs well with the light, modern aesthetic.

### Background / Ambient Icons

These float freely across the page. Chosen for residential/community thematic relevance:

| Icon | Lucide name | Thematic meaning | Size | Delay |
|------|-------------|-----------------|------|-------|
| `Building2` | `Building2` | The building itself | 36px | 0s |
| `HomeIcon` | `Home` | Residence, warmth | 28px | 1.2s |
| `Trees` | `Trees` | Nature, greenery nearby | 32px | 0.4s |
| `Users` | `Users` | Community | 30px | 2.0s |
| `Star` | `Star` | Quality, aspiration | 22px | 0.8s |
| `Heart` | `Heart` | Care, belonging | 24px | 1.6s |
| `Sun` | `Sun` | Optimism, brightness | 26px | 3.0s |
| `Coffee` | `Coffee` | Everyday life, comfort | 22px | 0.6s |
| `Leaf` | `Leaf` | Nature, sustainability | 20px | 2.4s |
| `Mail` | `Mail` | Communication (newsletters) | 24px | 1.0s |
| `MapPin` | `MapPin` | Place, address | 26px | 1.8s |
| `Sparkles` | `Sparkles` | Energy, excitement | 20px | 0.2s |

### Card Icons

| Icon | Color | Role |
|------|-------|------|
| `Building2` | `indigo-400` | Primary building identity |
| `HomeIcon` | `violet-400` | Home / residence feel |
| `Trees` | `emerald-400` | Natural, welcoming contrast |

### Address Icon

`MapPin` at 14px, `strokeWidth={1.8}`, `text-indigo-300` — deliberately smaller and lighter than card icons, supporting role only.

### Usage Rules

- **Never use filled/solid icons.** Lucide is always outline/stroke only.
- **Default strokeWidth is 1.4 (ambient) or 1.6 (featured).** Never use the Lucide default of 2.0 on this site — it reads as too heavy.
- **Don't introduce icons outside the established palette** without considering thematic fit and color assignment.

---

## Layout Principles

### Full-Screen Centering

The root container is always `min-h-screen` with `flex items-center justify-center`. The page fills the viewport; content is centred both vertically and horizontally.

```html
<div class="relative min-h-screen overflow-hidden flex items-center justify-center ...">
```

`overflow-hidden` prevents ambient blobs from causing scrollbars.

### Card Constraints

```
max-w-lg    → 512px maximum width
w-full      → fills narrower viewports
mx-4        → 16px horizontal margin on mobile
px-8 py-14  → 32px / 56px padding (mobile)
sm:px-16    → 64px horizontal padding on sm+ (≥640px)
```

### Layering (z-index)

| Layer | z-index | Content |
|-------|---------|---------|
| Background gradient | — (document flow) | Animated gradient div |
| Ambient blobs | `absolute`, no z | Three blurred circles |
| Floating icons | `absolute`, no z | 12 lucide icons |
| Glass card | `relative z-10` | Main content |

### Responsive Breakpoints

Only `sm` (640px) breakpoints are used. The site scales down gracefully to 320px mobile without any additional breakpoints needed.

| Property | Mobile | `sm` (640px+) |
|----------|--------|--------------|
| `<h1>` size | `text-4xl` (36px) | `text-5xl` (48px) |
| Subheading | `text-2xl` (24px) | `text-3xl` (30px) |
| Card padding X | `px-8` (32px) | `sm:px-16` (64px) |

### No Navigation

The coming-soon page is intentionally navigation-free. The layout (`layout.tsx`) has no header or footer — just `<body>` wrapping `{children}`. Newsletter routes exist in the codebase but are not linked.

---

## File Reference

| File | Purpose |
|------|---------|
| `app/globals.css` | All custom keyframes and animation utility classes |
| `app/layout.tsx` | Root layout — loads Geist font, no nav |
| `app/page.tsx` | Coming soon landing page — all visual logic lives here |
| `app/newsletters/page.tsx` | Newsletter list (exists, not linked) |
| `app/newsletters/[slug]/page.tsx` | Newsletter detail (exists, not linked) |
| `lib/newsletters.ts` | Markdown newsletter utility (exists, not linked) |
| `content/newsletters/` | Markdown newsletter files |

---

## Quick-Reference Cheat Sheet

For copy/paste when building new elements that need to match the aesthetic:

```
Background:     bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50 animate-gradient
Card surface:   bg-white/70 backdrop-blur-md border border-white/80 shadow-2xl rounded-3xl
Primary text:   text-gray-900
Body text:      text-gray-500
Subtle text:    text-gray-400
Primary accent: text-indigo-400  (#818cf8)
Alt accent:     text-violet-400  (#a78bfa)
Nature accent:  text-emerald-400 (#34d399)
Entrance anim:  animate-fade-up  (add animationDelay via style prop)
Font:           var(--font-geist-sans) / Geist Sans
Icon stroke:    1.4 (ambient)  |  1.6 (featured)
```
