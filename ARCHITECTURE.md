# Architecture

## Concept

**Retro Game × Premium SaaS × Modern Frontend Engineering.**

The game reference shapes *interaction design and structural motifs* in
later phases (a "world" to move through, states to unlock, a HUD-like
precision to data) — it never makes the site look childish. Visually the
site should read like a premium developer-tool product (think the
polish of a modern SaaS marketing site) with a few deliberate, restrained
nods to arcade/terminal culture.

## Tech stack

- **React 18** + **JavaScript (ES6+)** + **JSX** — no TypeScript, no `.ts`/`.tsx` files anywhere.
- **Vite** — dev server and build tooling.
- **CSS Modules** — component-scoped styles, no CSS-in-JS runtime, no Tailwind.
- **Framer Motion** — reserved for restrained, deliberate motion (currently only the hero's page-load entrance).
- Plain **CSS custom properties** (`src/styles/tokens.css`) as the design-token system — framework-agnostic and easy to consume from any future tooling.

No backend, no CMS, no routing library yet — this is a single-page static
composition. If future phases need routing (e.g. a dedicated "Developer
World" route), introduce it deliberately then.

## Folder structure

```
src/
├── components/     Reusable, generic UI primitives (Button, Card, Badge,
│                   Container, Section, Navigation, Footer, Logo,
│                   AmbientBackground). Not page-specific.
├── sections/       Page-level content blocks composed from components +
│                   data (Hero, About, Skills, Experience, Projects,
│                   Contact). One folder per section, each with its own
│                   .jsx + .module.css.
├── features/       Reserved for larger, self-contained interactive
│                   features from future phases (skill tree, project
│                   explorer, command palette, "Developer World", easter
│                   eggs). Empty in Phase 1 by design.
├── hooks/          Reusable stateful logic (useMediaQuery,
│                   useReducedMotion, useScrollSpy).
├── utils/          Pure helper functions and constants (cn, SECTIONS,
│                   BREAKPOINTS).
├── animations/     Shared Framer Motion variants (variants.js).
├── data/           Portfolio content as plain JS modules (profile,
│                   skills, experience, projects) — kept fully separate
│                   from UI so content edits never touch components.
├── assets/         Static media (images, icons) referenced by data/
│                   components. Empty placeholder in Phase 1.
└── styles/         Global CSS: tokens.css (design tokens), global.css
                    (reset + utilities + signature "notch" motif),
                    typography.css (type roles).
```

## Component conventions

- One component per folder: `ComponentName.jsx` + `ComponentName.module.css`.
- Components accept a `className` prop and merge it via the `cn()` utility (`src/utils/cn.js`) so consumers can extend styling without overrides fighting specificity.
- Polymorphic `as` prop pattern (e.g. `<Button as="a" href="...">`) is used where a component's rendered tag needs to change without duplicating markup.
- Path alias `@` → `src/` is configured in `vite.config.js`, so imports read `@/components/Button/Button` instead of relative `../../../`.

## Design system

All design values live in `src/styles/tokens.css` as CSS custom
properties, grouped by category: color (background/surface, border,
text, accent), typography (families, fluid clamp-based scale, tracking,
weights), spacing (4px base scale), radius, shadows, motion
(easings/durations), layout (container width, section padding), and
z-index. Components consume tokens via `var(--token-name)` — no hard-coded
hex values or pixel sizes inside component CSS.

### Signature structural motif: `.notch`

A cut-corner clip-path utility (`.notch` / `.notch-sm` in `global.css`)
gives cards, the nav pill, and primary buttons an octagonal, game-dialog
silhouette, executed with flat colour and precise geometry rather than
literal pixel art — this is the throughline between "retro game" and
"premium SaaS."

### Ambient background

`components/AmbientBackground` is a fixed, pure-CSS layer (grid lines +
two slow-drifting radial glows + faint scanline texture + edge vignette).
No canvas, no particle engine — kept cheap to paint/scroll. All motion
is disabled under `prefers-reduced-motion`.

## Accessibility & performance defaults

- `:focus-visible` outlines are defined globally and never suppressed.
- `prefers-reduced-motion` is respected both in global CSS (transition/animation durations collapse) and in the two hooks/animation surfaces that use JS-driven motion.
- Background effects are CSS-only (no JS animation loop, no heavy libraries) to keep scroll performance smooth.
- Semantic HTML is used throughout sections (`<header>`, `<main>`, `<footer>`, `<nav>`, `<dl>`, heading hierarchy).

## What's intentionally NOT built yet

Per Phase 1 scope, the following are structural placeholders only —
content renders as simple static lists/grids, with no bespoke
interaction layer:

- Hero interactions (parallax, cursor effects, typing animations, etc.)
- "Developer World" concept
- Interactive skill tree (skills currently render as a static badge grid)
- Interactive project explorer (projects currently render as a static card grid)
- AI-driven features
- Command palette
- Easter eggs

These will live under `src/features/` when built.
