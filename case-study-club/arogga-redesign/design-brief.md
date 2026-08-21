# Design Brief: Arogga — Order Confirmation & Tracking Redesign

## 1. Project context

Arogga's order-confirmation and delivery-tracking features already exist technically (confirmed via 26 real screenshots — see `research-notes.md`), but they failed in practice: Nusrat, an experienced user of the app, still didn't know an order had gone through, and was caught off guard when a delivery man arrived with no warning that the order was even out for delivery. The gap is not missing functionality — it's that confirmation and status information live in places users don't naturally look (a one-time transient screen, a buried Inbox list, a tab they have to remember to open) instead of surfacing where the user already is. This redesign fixes that discoverability gap without touching Arogga's existing visual identity or backend.

## 2. Target user

Nusrat, and users like her: a regular Arogga customer ordering medicine or health/beauty products on a mid-range Android phone, checking the app occasionally rather than staring at it after ordering. She trusts the brand but has been burned by not knowing her order status at the moment it mattered (delivery arrival). She does not want to hunt through tabs to find out if something worked.

## 3. Emotional tone and design direction

**Reassurance, not celebration.** The existing "Congratulations!" screen already tries for delight, but delight isn't the problem — trust is. The feeling to design for is calm certainty: "I don't have to check, it'll tell me." Reference: how Pathao/food delivery apps push a persistent, low-friction status ping instead of relying on the user to reopen the app and dig — the notification does the remembering, not the user.

## 4. Functional requirements

1. Add a notification bell icon (with a red count badge) to the persistent top nav, surfacing order-status events without requiring a tab switch.
2. On tap, show a detail view/card per event: order confirmed, with Order ID, estimated delivery date, payment status (paid / cash-on-delivery pending), and total amount.
3. Add a "Your Running Order" (or equivalent) card section on the Home screen, positioned above "All You Need," visible any time there's an active order.
4. Send a proactive notification (push/SMS) at each major status change — specifically when the order is dispatched/out for delivery, not just at placement.
5. Send a second proactive notification 5-7 hours before estimated delivery, so the user can be ready to receive it.
6. Preserve the existing Track Order timeline concept, but make the post-packing steps granular enough to support the notification triggers above (a single "Delivering" bucket cannot power a "5-7 hours before" alert with any precision).

## 5. Constraints

- **Visual system:** must reuse Arogga's existing colors, type, spacing, icon style, and component shapes as documented in `tokens.md`. No rebrand.
- **Platform:** mobile only (this redesign does not cover desktop/web).
- **Scope:** UI/IA/interaction design only. Assumes backend order-status data already exists (proven by the current Track Order screen) — this is a presentation-layer and notification-trigger redesign, not new backend infrastructure.
- **BD context:** sub-15K taka Android, 3G/4G, animations under 150ms, trust signals over aesthetics (per `principles/bd-defaults.md`).
- **Open question, not blocking:** whether Arogga's app currently has a notification on/off setting is unconfirmed — Nusrat has not checked her Settings screen. Design should account for both a notifications-enabled state and a fallback (in-app bell badge still works even if push is disabled).
- **Timeline:** open-ended, portfolio-pace project, no external deadline.

## 6. Success criteria

- **Behavioral signal:** a user can state their order's current status without opening the Orders tab — either the Home card or a notification already told them.
- **Metric:** reduction in "is my order confirmed" support queries (Nusrat's own proxy signal, referenced in earlier discussion); qualitatively, no more "delivery man downstairs with no warning" moments.
