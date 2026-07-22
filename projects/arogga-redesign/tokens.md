# Design Tokens: Arogga (documented from existing app, not invented)

Per `/design-tokens`: a design system already exists — this is Arogga's live app. These tokens are **read visually off Nusrat's real screenshots** (compressed JPEGs), not color-picked from source files or Figma. Confidence is noted per value. This redesign must use these, not invent a new palette — the whole point is staying inside Arogga's existing visual system.

```css
:root {
  /* Color — brand */
  --color-brand-primary: #0E8074;      /* logo text, primary buttons, active nav icon, links — confidence: medium */

  /* Color — semantic / feedback */
  --color-success: #1AAE4A;            /* checkmarks, "Confirmed" badge, completed timeline steps — medium */
  --color-warning: #F5A855;            /* "Waiting" item-status pill text — medium */
  --color-warning-bg: #FCEEDD;         /* "Waiting" pill background — medium */
  --color-danger: #E0483E;             /* "Cancelled" icon, discount tags — medium */

  /* Color — neutrals */
  --color-bg-page: #FFFFFF;            /* screen background — high */
  --color-bg-tile: #FCF3D9;            /* category icon tile background — medium */
  --color-bg-header: #D8F3EC;          /* home header gradient start (fades to white) — low, guessed stop */
  --color-text-primary: #1A1A1A;       /* headings, product names, prices — high */
  --color-text-secondary: #7A7A7A;     /* meta text, timestamps — high */
  --color-border: #E5E5E5;             /* card borders/dividers — medium */

  /* Typography */
  --font-family-base: system sans-serif; /* exact family unconfirmed — likely Inter/Poppins-class geometric sans */
  --font-size-title: 18-20px;          /* screen titles: "Shopping Cart", "View Order" */
  --font-size-body-bold: 15-16px;      /* product names, prices */
  --font-size-caption: 12-13px;        /* meta text, quantity, pack size */
  --font-weight-price: bold;
  --font-weight-caption: regular;

  /* Spacing (base unit ~4px, matches BD-defaults mobile-first scale) */
  --spacing-screen-edge: 16px;
  --spacing-card-gap: 12px;
  --spacing-card-padding: 12-16px;

  /* Border radius */
  --radius-card: 10-12px;
  --radius-button: 8px;                /* rounded rectangle, NOT pill */
  --radius-sheet-top: 16-20px;         /* toasts/bottom sheets, top corners only */
  --radius-pill: 999px;                /* status badges: Waiting / Confirmed / Cancelled */

  /* Shadow */
  --shadow-flat: none;                 /* page background */
  --shadow-card: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-sheet: 0 -2px 12px rgba(0,0,0,0.12); /* bottom sheets/toasts */
}
```

## Icon style

Outline/line icons, at most two-tone (line + one accent fill). Never heavy solid icons. Circular colored backgrounds for status indicators (green circle + check, red circle + X). Bottom nav: 5 items (Home, Orders, Categories, Inbox, More), icon-over-label, active item tinted `--color-brand-primary`.

## Component reuse pattern

Cart/checkout screens use a persistent bottom action bar (e.g. "2 items · ৳231 · Place Order") that stays above the nav bar. Reuse this same sticky-bottom-bar pattern for anything that needs a standing CTA, so it reads as "native" to the app rather than a bolted-on addition.

## Build note

Build every new component in Figma as an auto-layout frame, using these values as local styles/variables where the Figma plugin supports it, so Nusrat can adjust spacing or color by hand afterward without re-deriving the layout logic.
