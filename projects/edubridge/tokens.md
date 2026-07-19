---
project: EduBridge Bangladesh
status: complete
---

# EduBridge BD: Design Tokens (Class 5 output)

Tokens are how you stop describing colors and sizes in every prompt. Define them once, reference them by name. Then Claude reads "primary brand color" and knows you mean `#00A651`.

Source file: [Figma — EduBridge, Approach B2 AFTER (clean system)](https://www.figma.com/design/UKrHagmQWWdBAWUH0geIr3/Edubridge?node-id=5-3). Values below are pulled directly from that frame, not guessed. Use this file as the reference for any Claude Code prompt in Class 6.

---

## Color

| Token | Value | Use for | Wired? |
|---|---|---|---|
| `accent.primary` | `#00A651` | Primary CTA, verified checkmarks, total cost value (bKash green) | ✅ Figma Variable — bound to `primary-button` fill, `check-icon` fill, `verify-row` status text, `total-cost-row` value |
| `bg.surface` | `#FFFFFF` | Default screen background, cards | not yet wired |
| `bg.subtle` | `#F5F5F5` | Bio card background | not yet wired |
| `bg.success-subtle` | `#EDF7F0` | Verification card background | not yet wired |
| `bg.neutral-subtle` | `#F7F7F7` | Schedule card background | not yet wired |
| `text.primary` | `#0D0D0D` | Screen title, status bar | not yet wired |
| `text.secondary` | `#4D4D4D` | Bio label, verification label | not yet wired |
| `text.muted` | `#666666` / `#808080` | Subject line, payment note | not yet wired |
| `accent.warning` | `#BF800D` | "Next available" availability text | not yet wired |
| `border.default` | `#D9D9D9` | Divider above total cost | not yet wired |
| `border.success` | `#D9EBDB` | Verification card border | not yet wired |

> Only `accent.primary` is a live Figma Variable right now — that's the one the assignment requires you to wire ("buttons read from it, not a hard-coded hex"), and it's confirmed: change the variable, the button, checkmarks, and price all repaint together. The rest of the palette above is applied consistently across the file but as hard-coded hex, not Variables yet. Worth wiring in a later pass, not blocking for this submission.

## Type

**Family:** Inter (no Bangla fallback set yet — add Noto Sans Bengali when Bangla copy is introduced)

| Token | Size | Weight | Use for |
|---|---|---|---|
| `text.title` | 18px | 700 | Tutor name, total cost value |
| `text.heading` | 17px | 700 | Screen title ("Booking Request") |
| `text.body` | 16px | 700 | Button label |
| `text.body.default` | 15px | 700 | Total cost label |
| `text.body.small` | 14px | 400 | Subject line, back nav |
| `text.label` | 13px | 400/700 | Bio title, field labels, verification rows |
| `text.caption` | 12px | 400/700 | Bio text, availability, PM suffix |
| `text.micro` | 11px | 400 | Payment note |

## Spacing

Pulled from actual gaps/padding in the AFTER frame. Not a clean 4px multiple everywhere — flagged where it drifts.

| Token | Value | Use for |
|---|---|---|
| `space.1` | 4px | field-row internal padding |
| `space.2` | 6px | verify-row padding/gap, status icon gap |
| `space.2b` | 8px | verification-card internal gap |
| `space.3` | 10px | schedule-card internal gap |
| `space.3b` | 14px | tutor-summary gap, bio-card padding *(off-scale — round to 12 or 16 next pass)* |
| `space.4` | 16px | schedule-card padding |
| `space.5` | 20px | content column gap *(off-scale — round to 16 or 24 next pass)* |
| `space.6` | 24px | content horizontal padding |

## Radius

| Token | Value | Use for | Wired? |
|---|---|---|---|
| `radius.sm` | 4px | field-icon | not yet wired |
| `radius.md` | 6px | field-row, verify-row | not yet wired |
| `radius.lg` | 12px | primary-button, verification-card, schedule-card | ✅ Figma Variable — bound to `primary-button` corner radius |
| `radius.full` | 9px on 18px box | check-icon (circle) | not yet wired |

## Motion

| Token | Duration | Easing | Use for |
|---|---|---|---|
| `motion.fast` | 80ms | ease-out | Button press, micro-feedback |
| `motion.default` | 150ms | ease-out | Most transitions |
| `motion.slow` | 220ms | ease-out | Page-level changes, large surfaces |

> Anything over 220ms is too slow for this product. If a transition needs more time, redesign it.

## Trust signals

Not a token strictly, but a design rule worth writing down here so Claude sees it: anywhere a tutor's verified status is shown, use `accent.primary` (the green) at full weight, paired with a check or shield icon. Verified badge is `space.6` tall, never decorative, always meaningful.

## Components

Built as real Figma components with variants, not flat copy-pasted shapes:

| Component | Variants | Where used |
|---|---|---|
| `primary-button` | `State=Default`, `State=Disabled` | Send Booking Request CTA |
| `field-row` | `Type=Date`, `Type=Time` | Schedule card (2 instances) |
| `verify-row` | single, reused as 3 instances | NID Verification, Qualification Certificate, Background Check |
| `check-icon` | — | nested inside each `verify-row` instance |

## Before / after

Layer hygiene pass on Approach B2 (the winner from [critique-notes.md](critique-notes.md)). Also removes the session-quantity stepper the Class 4 synthesis flagged as a logic error (asking for session count before the tutor accepts).

- Before: [assignment-5-submission/before.png](assignment-5-submission/before.png) — unnamed layers (`Frame`, `Frame`...), session stepper still present
- After: [assignment-5-submission/after.png](assignment-5-submission/after.png) — readable layer tree, session stepper removed, back nav added

Everything you need to submit — the Figma link, both screenshots, and a copy-pasteable token summary — is gathered in [assignment-5-submission/README.md](assignment-5-submission/README.md).

---

## How this file gets used in Class 6

Paste this entire file at the top of any Claude Code prompt that builds a screen. Claude Code now has your design system as input. Generated HTML uses `var(--accent-primary)` or `#00A651`, not "use a nice green."
