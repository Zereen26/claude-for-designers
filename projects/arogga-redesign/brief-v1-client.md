# Brief v1: Raw Problem Statement

Source: Nusrat, as a real Arogga user. Not a client brief — self-initiated redesign based on lived experience with the app.

> **Update, 2026-07-17:** After reviewing 26 real screenshots of the actual flow, all three problems below turned out to already be built into the app (confirmation screen, order list, and an 8-step timeline). Kept here as-is for the record. See `research-notes.md` → "Original assumptions overturned" and "Real opportunities found instead" for what's actually true and what the redesign should focus on now.

## Context for every output (BD)

- Users are 18-45, mobile-first, often on 3G or 4G.
- Default device is a sub-15,000 taka Android with under 4GB RAM.
- Users expect bKash-style payment flows. Green is the trust color.
- Bangla and English mix is normal. Numbers are mostly English digits.
- Animations over 150ms feel laggy on common devices. Avoid them.
- Trust signals matter more than aesthetics. Show the policeman, not the gradient.
- Product category adds: medicine/healthcare e-commerce. Trust and urgency both matter (some orders are medical necessities, not discretionary shopping).

## Problems reported

1. **No order confirmation after checkout.** After placing an order (medicine or product), the app gives no confirmation message or popup. The user has no way to know the order actually went through except by manually navigating to the Orders section to check.

2. **No dedicated "current/active orders" section.** There is no place that surfaces orders that are confirmed and in progress, separate from full order history. Referenced Sheba.xyz as a pattern worth comparing (home-services app with a similar order lifecycle).

3. **No order status timeline.** Arogga has no step-by-step delivery timeline. Requested pattern:

   Order Placed → Packed → Dispatched → Courier Picked → Out for Delivery → Delivered

## Why this matters (initial hypothesis, not yet confirmed)

- Medicine orders can be urgent. Not knowing if an order succeeded creates real anxiety, not just inconvenience.
- Arogga's own homepage copy claims users can "track dynamic medicine online check metrics... monitor your delivery courier in real time" — the marketing promise does not match the reported experience. Gap between claim and reality is worth confirming with screenshots.
- Users on 3G/4G with low patience for extra taps will abandon a check-in habit if the app doesn't tell them the order is safe.

## What we do NOT know yet (needs grill-me before design starts)

- Whether this is a bug (feature exists but broken/hidden) or a genuine feature gap.
- What the current post-checkout screen actually shows (need screenshot).
- What the current Orders section looks like today (need screenshot).
- Whether Arogga has any backend order-status data to power a timeline, or if this requires backend work outside design scope.
- Scale of the problem: is this Nusrat's individual experience, or confirmed across other users/reviews?
