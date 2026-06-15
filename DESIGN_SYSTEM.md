# XEqualTo — Design System & Build Spec

Foundation document derived from the homepage Figma. Defines fonts, color
scheme, typography/spacing scale, and folder structure. Code is built against
**Next.js 16.2.9 / React 19 / Tailwind CSS v4 / TypeScript**.

> Note: `AGENTS.md` warns this Next.js version has breaking changes. Before
> writing any component code, consult `node_modules/next/dist/docs/`.

---

## 1. Design analysis (homepage)

The page alternates between two moods:

- **Dark navy "depth" bands** — hero, mid-page CTA, and footer. A deep navy
  gradient overlaid with vertical pin-stripe / "curtain" texture and brighter
  blue highlights. Serif headlines in white.
- **Pale sky-blue "clarity" bands** — stats, "Why XEqualTo", and services.
  Calm light background, dark navy serif headings, muted slate body copy.

Page section order (top → bottom):

1. **Navbar** — floating centered pill, sits over the hero.
2. **Hero** — eyebrow `• POWERED BY AI`, serif headline *"Simplify Complexity.
   Scale Faster."*, supporting paragraph, white CTA button.
3. **Stats** — heading "Data that drives real results" + 3 stats
   (50+, 40%, 100%).
4. **Why XEqualTo** — image left, eyebrow + serif heading + paragraph + dark CTA.
5. **Our services** — serif heading + 3 image cards (Data Modernization,
   BI Migration, Cloud-Native Analytics).
6. **CTA banner** — dark band, "Ready to build something that scales?" + button.
7. **Footer** — dark gradient panel, logo + Services / Company / Socials columns
   + copyright.

---

## 2. Fonts

| Role | Font | Source | Usage |
|------|------|--------|-------|
| **Display / Headings** | **Gambarino** | Fontshare (local) | All serif headlines & section titles |
| **Body / UI** | **Inter** | `next/font/google` | Paragraphs, nav, buttons, labels, captions |

**Gambarino is not on Google Fonts** — it's a free font from
[Fontshare](https://www.fontshare.com/fonts/gambarino) (Indian Type Foundry).
It must be self-hosted via `next/font/local`.

**Required file:** download Gambarino from Fontshare and place the web font at
`public/fonts/Gambarino-Regular.woff2` (the family ships a single Regular
weight). Then:

```ts
// app/layout.tsx
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const gambarino = localFont({
  src: "../public/fonts/Gambarino-Regular.woff2",
  variable: "--font-gambarino",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
// <html className={`${gambarino.variable} ${inter.variable}`}>
// globals.css maps: --font-serif → --font-gambarino, --font-sans → --font-inter
```

> Body font defaulted to **Inter** (the design uses a clean neutral grotesque
> for body/UI). Tell me if Figma specifies a different body face.

Font weights observed:
- Headlines: 400 (regular) — the serif is *not* bold; size carries the weight.
- Body: 400 regular, 500 for nav/buttons.
- Labels (e.g. `DATA PROJECTS DELIVERED`): 500, uppercase, wide letter-spacing.

---

## 3. Color scheme

Hex values are eyedropper estimates from the mock — adjust against final Figma.

### Core palette

| Token | Hex | Where |
|-------|-----|-------|
| `navy-950` | `#0A1B33` | Darkest base of hero/CTA/footer gradient |
| `navy-900` | `#0D2547` | Gradient mid, primary dark button fill |
| `navy-800` | `#133460` | Gradient highlight base |
| `navy-700` | `#1C497F` | Brighter pin-stripe highlights |
| `navy-600` | `#2A5C9B` | Brightest stripe / accent |
| `sky-50`   | `#E2F0FA` | Lightest tint |
| `sky-100`  | `#CDE5F6` | Light section background |
| `sky-200`  | `#B8D7EE` | Light section subtle borders/dividers |
| `ink`      | `#0A1A2F` | Headings & text on light bg |
| `slate`    | `#3F4E60` | Muted body copy on light bg |
| `white`    | `#FFFFFF` | Text on dark, white CTA fill |
| `mist`     | `#C7D4E3` | Muted text on dark bg (footer links, sub-copy) |

> ✅ These tokens are live in [`app/globals.css`](app/globals.css) under
> `@theme`. Values are eyedropper estimates from the mock — paste exact Figma
> hex codes to fine-tune.

### Semantic mapping

| Semantic | Light bands | Dark bands |
|----------|-------------|------------|
| Background | `sky-100` | `navy-950 → navy-800` gradient |
| Heading text | `ink` | `white` |
| Body text | `slate` | `mist` |
| Primary button | fill `navy-900`, text `white` | fill `white`, text `navy-900` |
| Eyebrow label | `slate` | `mist` |

### Tailwind v4 theme tokens

Tailwind v4 is config-less — tokens are declared in `globals.css` under
`@theme`. Replace the current starter contents with:

```css
@import "tailwindcss";

@theme {
  /* fonts (vars from next/font in app/layout.tsx) */
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --font-serif: var(--font-gambarino), ui-serif, Georgia, serif;

  /* brand colors */
  --color-navy-950: #0a1b33;
  --color-navy-900: #0d2547;
  --color-navy-800: #133460;
  --color-navy-700: #1c497f;
  --color-navy-600: #2a5c9b;
  --color-sky-50: #e2f0fa;
  --color-sky-100: #cde5f6;
  --color-sky-200: #b8d7ee;
  --color-ink: #0a1a2f;
  --color-slate: #3f4e60;
  --color-mist: #c7d4e3;
}
```

Usage examples: `bg-sky-100`, `text-ink`, `font-serif`, `text-mist`,
`bg-navy-900`. The dark gradient: `bg-gradient-to-b from-navy-950 to-navy-800`
with the pin-stripe added as a repeating background image / SVG overlay layer.

---

## 4. Typography scale

| Element | Font | Size (desktop) | Weight | Notes |
|---------|------|----------------|--------|-------|
| Hero H1 | serif | `text-6xl` (~60px) | 400 | tight leading, two lines |
| Section H2 | serif | `text-4xl/5xl` (~40–48px) | 400 | |
| Card title | serif | `text-xl` (~20px) | 400 | |
| Stat number | serif | `text-4xl` (~36px) | 400 | |
| Eyebrow | sans | `text-xs` | 500 | uppercase, `tracking-widest` |
| Body | sans | `text-sm/base` | 400 | `leading-relaxed`, muted color |
| Nav / button | sans | `text-sm` | 500 | |
| Stat caption | sans | `text-xs` | 500 | uppercase, `tracking-wide` |

Use a fluid step-down on mobile (e.g. hero `text-4xl md:text-6xl`).

---

## 5. Layout & spacing

- **Container:** max width ~`1200px`, centered, horizontal padding
  `px-6 md:px-8`.
- **Section vertical rhythm:** `py-20 md:py-28`.
- **Grid:** stats = 4 columns (label + 3 figures); services = 3 columns
  (`grid md:grid-cols-3 gap-6`). Both stack to 1 column on mobile.
- **Navbar:** fixed/floating, centered pill with border, `rounded-full`,
  semi-transparent dark fill, backdrop blur.
- **Buttons:** `rounded-md`, label + up-right arrow icon (`↗`), small inner
  icon box. Two variants: `light` (white fill) and `dark` (navy fill).
- **Cards:** image with subtle rounded corners, title below, divider line,
  description; one corner of the image is notched in the mock (optional flourish).
- **Radii:** pill nav `9999px`; buttons/cards `~6–8px`.

---

## 6. Folder structure

Respecting the existing `app/src/components` and `app/src/pages` folders you
created. Routes stay in the app-router convention at `app/`; reusable UI lives
under `app/src/`.

```
app/
├─ layout.tsx                 # root layout: fonts, metadata, <Navbar/> + <Footer/>
├─ page.tsx                   # home route — composes section components
├─ globals.css                # Tailwind import + @theme tokens (section 3)
├─ favicon.ico
└─ src/
   ├─ components/
   │  ├─ layout/
   │  │  ├─ Navbar.tsx        # floating pill nav (shared component)
   │  │  └─ Footer.tsx        # dark footer panel (shared component)
   │  ├─ ui/
   │  │  ├─ Button.tsx        # variant: "light" | "dark", arrow icon
   │  │  ├─ Container.tsx     # max-width wrapper
   │  │  ├─ SectionHeading.tsx
   │  │  ├─ Eyebrow.tsx       # • LABEL uppercase
   │  │  ├─ StatItem.tsx
   │  │  └─ ServiceCard.tsx
   │  └─ sections/            # homepage section blocks
   │     ├─ Hero.tsx
   │     ├─ Stats.tsx
   │     ├─ WhyXequalto.tsx
   │     ├─ Services.tsx
   │     └─ CtaBanner.tsx
   ├─ pages/                  # per-route content modules (About, Contact, …)
   │  └─ HomePage.tsx         # optional: composes sections, imported by app/page.tsx
   └─ lib/
      ├─ content.ts           # nav links, stats, services, footer data (typed)
      └─ types.ts
public/
├─ fonts/                     # only if switching to next/font/local
└─ images/                    # hero, why, and service-card photos
```

Future routes follow the same pattern, e.g. `app/about/page.tsx` importing
`src/pages/AboutPage.tsx`.

### Shared vs. page-specific
- **Navbar** and **Footer** → `components/layout/`, rendered once in
  `app/layout.tsx` so every page gets them.
- **Hero / Stats / Services / CTA** → `components/sections/`, composed by the
  home page.
- All copy, links, and lists → `src/lib/content.ts` so the markup stays clean
  and content is editable in one place.

---

## 7. Next steps (after this spec is approved)

1. Wire fonts in `app/layout.tsx` + tokens in `globals.css`.
2. Add `Navbar` + `Footer` to the root layout.
3. Build `ui/` primitives (Button, Container, headings).
4. Build the 5 homepage sections and compose them in `app/page.tsx`.
5. Drop real images into `public/images/` and replace placeholders.
