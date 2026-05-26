---
project: EduBridge Bangladesh
status: template: you fill this in during Class 5
---

# EduBridge BD: Design Tokens (Class 5 output)

Tokens are how you stop describing colors and sizes in every prompt. Define them once, reference them by name. Then Claude reads "primary brand color" and knows you mean `#00A651`.

Fill this file in during Class 5 after your hygiene passes. Use it as the reference for any Claude Code prompt in Class 6.

---

## Color

| Token | Value | Use for |
|---|---|---|
| `bg.surface` | `#FFFFFF` | Default screen background |
| `bg.subtle` | `#F9FAFB` | Cards, secondary surfaces |
| `bg.inverse` | `#0A2540` | Dark sections, headers |
| `text.primary` | `#0A2540` | Body text on light surfaces |
| `text.secondary` | `#4F5868` | Captions, supporting text |
| `text.muted` | `#9AA0A6` | Tertiary text, metadata |
| `text.inverse` | `#FFFFFF` | Text on dark surfaces |
| `accent.primary` | `#00A651` | Primary CTA, success states |
| `accent.danger` | `#C53030` | Errors, destructive actions |
| `accent.warning` | `#F59E0B` | Warnings, pending states |
| `border.default` | `#E5E7EB` | Card borders, dividers |
| `border.strong` | `#D1D5DB` | Inputs, emphasized borders |

> Adjust these based on your Class 4 critique. Names stay; values change.

## Type

**Family:** [pick one. Recommend Inter + Noto Sans Bengali for the Bangla fallback]

| Token | Size | Weight | Line height | Use for |
|---|---|---|---|---|
| `text.display` | 32px | 700 | 1.2 | Page title |
| `text.heading` | 22px | 600 | 1.3 | Section heading |
| `text.body` | 16px | 400 | 1.5 | Body text |
| `text.body.small` | 14px | 400 | 1.45 | Captions, metadata |
| `text.label` | 12px | 600 | 1.4 | Form labels, badges, eyebrows |

## Spacing

Multiples of 4. Pick a base of 4, then `4, 8, 12, 16, 24, 32, 48, 64`. No values outside this scale.

| Token | Value |
|---|---|
| `space.1` | 4px |
| `space.2` | 8px |
| `space.3` | 12px |
| `space.4` | 16px |
| `space.6` | 24px |
| `space.8` | 32px |
| `space.12` | 48px |
| `space.16` | 64px |

## Radius

| Token | Value |
|---|---|
| `radius.sm` | 4px |
| `radius.md` | 8px |
| `radius.lg` | 12px |
| `radius.full` | 999px (pills, avatars) |

## Motion

| Token | Duration | Easing | Use for |
|---|---|---|---|
| `motion.fast` | 80ms | ease-out | Button press, micro-feedback |
| `motion.default` | 150ms | ease-out | Most transitions |
| `motion.slow` | 220ms | ease-out | Page-level changes, large surfaces |

> Anything over 220ms is too slow for this product. If a transition needs more time, redesign it.

## Trust signals

Not a token strictly, but a design rule worth writing down here so Claude sees it: anywhere a tutor's verified status is shown, use `accent.primary` (the green) at full weight, paired with a check or shield icon. Verified badge is `space.6` tall, never decorative, always meaningful.

---

## How this file gets used in Class 6

Paste this entire file at the top of any Claude Code prompt that builds a screen. Claude Code now has your design system as input. Generated HTML uses `var(--accent-primary)` or `#00A651`, not "use a nice green."
