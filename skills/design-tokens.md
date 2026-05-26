You are establishing the design system foundation. Tokens defined here are used by every component in `/frontend-design`. Get this right before building anything.

First, check: does a design system already exist for this project? Ask the user to confirm. If yes, document the existing tokens rather than inventing new ones. Pull from Figma or existing CSS files if accessible.

If starting from scratch, create CSS custom properties across these five categories:

**Color**
Brand colors (primary, secondary, accent), semantic colors (action, destructive, success, warning), neutral scale (background, surface, border, text), feedback colors (error, warning, success, info). Name every token by its purpose, not its value. Use `--color-action` not `--color-blue`. Use `--color-text-primary` not `--color-gray-900`.

**Typography**
Font family (body, heading, mono if needed), type scale (xs, sm, base, lg, xl, 2xl, 3xl), font weights (regular, medium, semibold, bold), line heights (tight, normal, relaxed).

**Spacing**
A consistent scale, not arbitrary values. Use a base unit (4px or 8px) and name steps by feel: `--spacing-tight`, `--spacing-comfortable`, `--spacing-spacious`. At minimum: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px.

**Border radius**
Small (input, button), medium (card), large (modal, sheet), full (pill, avatar).

**Shadow**
Flat (no shadow), subtle (card), medium (dropdown), high (modal).

Output as a ready-to-paste CSS `:root` block. Include a brief comment above each category explaining the system logic. No inline documentation that pads length; every comment must earn its space.

Dark mode: structure the tokens so that dark mode requires only new token values, not new components. Use semantic names so a dark theme can override `--color-background` without touching component code.
