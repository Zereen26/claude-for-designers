# Design Tokens: MindNest

Confirmed with Nusrat: sage green accent, calm/off-white background, single clean sans. Locked before any screen work per `principles/design-taste.md` (tokens, not vibes).

```css
:root {
  /* Color — brand / accent */
  --accent-primary: #7A9B76;      /* primary buttons, active states, mood-check highlight */
  --accent-primary-dark: #5C7A58; /* pressed state, dark-mode equivalent */
  --accent-primary-bg: #E8EFE6;   /* soft tint behind accent elements, tags */

  /* Color — semantic */
  --color-success: #7A9B76;       /* reuses accent — same trust-green logic as bKash */
  --color-warning: #D9A24B;       /* streak-at-risk, gentle nudge states */
  --color-danger: #C75C4A;        /* warm red, not alarming — wellness context */

  /* Color — neutrals */
  --bg-surface: #FAF9F6;          /* screen background, soft off-white not pure white */
  --bg-subtle: #F0EFE9;           /* card backgrounds */
  --bg-inverse: #2C2C2C;          /* dark cards, e.g. sleep/night mode module */
  --text-primary: #2C2C2C;
  --text-secondary: #6B6B6B;
  --text-muted: #9B9B94;
  --border-default: #E0DED8;

  /* Typography */
  --font-family-base: 'Inter', 'Noto Sans Bengali', sans-serif; /* Bengali fallback confirmed per design-taste.md */
  --font-size-caption: 12px;
  --font-size-body: 14px;
  --font-size-body-lg: 16px;
  --font-size-title: 20px;
  --font-size-hero: 28-32px;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 600;

  /* Spacing (4px base) */
  --spacing-screen-edge: 16px;
  --spacing-card-gap: 12px;
  --spacing-card-padding: 16px;

  /* Radius */
  --radius-card: 16px;
  --radius-button: 12px;
  --radius-pill: 999px;           /* mood tags, streak badges */

  /* Shadow */
  --shadow-card: 0 1px 3px rgba(0,0,0,0.06); /* flat, minimal — no glassmorphism */

  /* Motion */
  --motion-default: 120ms ease-out; /* under 150ms budget, per bd-defaults.md */
}
```

## Icon style

Outline icons, single accent fill max. No gradients, no glowing orbs, no abstract wellness clip-art (anti-slop rule). If illustration is needed for the hero, keep it specific to MindNest's actual features (a mood scale, a breathing circle) not generic floating shapes.

## What this rules out

- No purple-to-pink gradient hero.
- No glassmorphism cards.
- No stock "meditating person on a mountain" photography.
- No three-item feature grid with identical icons unless the three are genuinely differentiated.
