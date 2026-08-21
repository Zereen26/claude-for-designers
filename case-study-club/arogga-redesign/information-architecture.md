# Information Architecture: Arogga — Order Confirmation & Tracking Redesign

Based on `design-brief.md`. Scope is additive to the existing app — most of Arogga's IA is untouched. Only the screens/components below are new or modified.

## Part 1: Screen inventory

| Screen/component | Status | Purpose |
|---|---|---|
| Top nav bar (global) | Modified | Add a notification bell icon with a red count badge, visible from Home and other primary tabs |
| Notification detail sheet | New | Opens on tapping the bell; lists status events (newest first): order confirmed, dispatched, out for delivery, delivered, cancelled |
| Notification detail sheet — empty state | New | "No new updates" state when there are no unread events |
| Home screen — "Your Running Order" section | New | Card(s) above "All You Need," shown only when ≥1 active (non-delivered, non-cancelled) order exists |
| Home screen — no active order | Existing behavior | Section is simply absent; Home reverts to current layout with nothing added |
| Track Order timeline | Modified | Same 8-step concept, but the post-"Packed" portion is split into more granular states (see flow below) instead of one "Delivering" bucket |
| Push notification / SMS content (3 variants) | New | (a) Order confirmed, (b) Order out for delivery, (c) "Arriving in ~5-7 hours" pre-delivery reminder |

## Part 2: Navigation pattern

**Bottom tab bar** (existing: Home, Orders, Categories, Inbox, More) stays as-is — no new tab is added, since the brief calls for surfacing status where users already are, not creating another place to check. The notification bell lives in the **top nav bar**, a persistent header element independent of which bottom tab is active, matching common patterns (e-commerce apps keep notifications in the header, not buried in a tab). This also explains why Inbox alone wasn't working today: it's a bottom-tab destination the user has to remember to visit, not an ambient signal.

The Notification detail sheet opens as a **modal/bottom sheet** over the current screen (not a full navigation push), so the user can dismiss and return to what they were doing.

## Part 3: Content hierarchy per screen

**Notification detail sheet**
- Primary: status headline ("Your order is confirmed" / "Out for delivery" / etc.) and Order ID
- Secondary: estimated delivery date, payment status, total amount
- Tertiary: timestamp of the event, link to full Track Order screen

**Home — "Your Running Order" card**
- Primary: current status label (e.g. "Packing," "Out for delivery") and a short human-readable line ("Arriving today, 2-4 PM")
- Secondary: Order ID, item thumbnail(s)
- Tertiary: "Track Order" link/button

**Track Order timeline (modified)**
- Primary: current active step, visually distinct from completed/pending steps
- Secondary: timestamps per completed step
- Tertiary: the one-line explanatory text per step (this already exists — extend the same treatment to the new granular post-packing steps so none of them are unexplained, unlike today's "Waiting" label)

## Part 4: Critical user flows

**Flow A: Placing an order and trusting it went through**
1. User completes checkout (existing flow, unchanged) → sees existing "Congratulations" screen.
2. New: a push/SMS notification fires immediately ("Order confirmed — #ID, arriving [date]").
3. New: notification bell badge increments; user can check it anytime, from anywhere in the app, not just right after checkout.
4. New: next time Home is opened, "Your Running Order" card is visible without navigating to Orders.
5. Branch — no active order: card is simply absent, no empty-state clutter on Home.

**Flow B: Knowing a delivery is imminent**
1. Order status backend-transitions through Packing → Packed (existing data, per brief's backend assumption).
2. New: when status reaches "Out for delivery," a push/SMS fires immediately.
3. New: a second notification fires 5-7 hours ahead of the estimated delivery window ("Arriving soon — be ready").
4. User opens Track Order (optional, not required) → sees the same granular step reflected in the timeline, matching what the notification said.
5. Branch — user has notifications disabled (open question in brief): the Home "Your Running Order" card still reflects the current step even without a push, so the information isn't push-notification-dependent only.
