# Research Notes: Arogga vs Sheba.xyz

Scope: public marketing pages only, visited 2026-07-17. No login was used on either platform (no account access, no credentials entered). This means the actual post-checkout confirmation screen and order-tracking UI on both apps could NOT be directly observed. Treat everything below as either (a) verified from public copy, or (b) explicitly flagged as unverified.

## Arogga (arogga.com)

**Verified from homepage copy:**
- Positions itself as Bangladesh's most trusted online pharmacy, DGDA-licensed, 5,000+ SKUs, 1M+ users.
- Claims a 3-step order flow: Search → Upload Prescription (for Rx items) → Home Delivery.
- Claims same-day delivery in Dhaka for orders before 3 PM, 1-3 business days for other districts.
- Marketing copy explicitly claims: "track dynamic medicine online check metrics, verify pricing transparency... and monitor your delivery courier in real time."
- Payment: bKash, Nagad, cards, cash-on-delivery.

**Not verified (needs Nusrat's screenshots, since this requires being logged into a real account):**
- What the checkout confirmation screen currently shows (or doesn't show).
- What the "My Orders" list looks like today.
- Whether any tracking/timeline exists anywhere in the account area that's just hard to find, vs. genuinely absent.

**Gap flagged:** the claim of "real-time courier monitoring" on the homepage does not match Nusrat's reported experience of no confirmation and no timeline. Worth confirming whether this is a hidden/underused feature or simply doesn't exist, before assuming it's a from-scratch build.

## Sheba.xyz (sheba.xyz)

Sheba.xyz is a home-services marketplace (AC repair, cleaning, salon, shifting, etc.), not medicine e-commerce. Different order model: users pick a service + schedule, not a cart of physical goods. The comparison is about the *order lifecycle pattern*, not a like-for-like product.

**Verified from homepage copy:**
- Their stated flow: Select Service → Pick Schedule → Place Order & Relax ("we'll assign the expert service provider's schedule for you").
- No visible public detail on their post-booking confirmation screen or tracking UI without logging in.

**Not verified:** the actual timeline UI Nusrat referenced (Order Placed → Packed → Dispatched → Courier Picked → Out for Delivery → Delivered) could not be confirmed on Sheba.xyz's public pages. This pattern is common in BD delivery/logistics apps generally (Pathao, Foodpanda, Daraz use similar step trackers) — worth treating as an established BD user expectation rather than a Sheba-specific feature, unless Nusrat has a screenshot to confirm Sheba's exact version.

## Verified from Nusrat's screenshots (2026-07-17)

Screenshots covered: OTP login, empty cart, product browsing (Beauty category), product detail page, and the cart/checkout screen with shipping address filled in.

- **Add-to-cart confirmation exists.** Adding an item shows a toast: "Added successfully! — View Cart." This works and is distinct from the reported problem.
- **Checkout screen shows a "Place Order" button** with item count and total (e.g. "2 items, ৳231"), address block, coupon field, and subtotal/discount breakdown.
- **Not yet captured:** what happens immediately after tapping "Place Order" (the actual order-confirmation moment), and the My Orders / order history screen. These are the two screens that actually test the original complaint and are still needed before concluding anything.
- **Minor observation, not in scope yet:** on the category browse screen, the "Added successfully!" toast visually overlaps the product grid below it (partially covers a product card). Worth a note for later, not a priority now.

## Full flow reconstructed from Nusrat's real screenshots (2026-07-17, 26 screenshots reviewed)

The complete post-checkout flow, confirmed step by step:

1. **Add to Cart** → toast "Added successfully! — View Cart." Works.
2. **Shopping Cart** → address, coupon, subtotal, "Place Order" button.
3. **Payment screen** → immediately shows "Congratulations! Order placed successfully by 'Cash on Delivery'" with a green checkmark, a 2-step tracker (Order Placed → Pay Online), and an expandable "View Details" showing Total Order Amount, Order ID, Estimated Time, and the line: *"Confirmation will be sent to your Arogga App, SMS — Check your Arogga App Notification or Phone SMS."* A "Track Order" button sits below the payment options.
4. **Track Order → View Order (timeline)** → a full 8-step vertical stepper with timestamps: **Order Placed → Processing → Payment → Confirmed → Packing → Packed → Delivering → Delivered.** Each completed step has a green check and a one-line status description.
5. **Orders tab (list)** → each order card shows Order ID, a status badge (e.g. "Confirmed" in green), Amount Payable, and "Pay Online" / "Order Again" actions.
6. **View Order (detail)** → per-item status label ("Waiting"), address, Cancel Order, Order ID/date, price breakdown, Download Invoice.
7. **Inbox** → a separate notification list with cards like "Order Created!" and "Order Cancelled," timestamped.

## Original assumptions overturned

**All three original problems (`brief-v1-client.md`) turned out to be already built:**

1. ~~No order confirmation~~ → the "Congratulations! Order placed successfully" screen appears immediately after checkout (step 3 above).
2. ~~No active-orders section~~ → the Orders tab lists every order with a live status badge.
3. ~~No delivery timeline~~ → the Track Order stepper is a full 8-step timeline, arguably more detailed than the 6-step version Nusrat asked for.

Nusrat confirmed this directly after reviewing the screenshots: the original pain point was based on incomplete memory of the app, not a missing feature.

## Real opportunities found instead (from reviewing the same screenshots)

Since the feature exists but Nusrat — an experienced app user — still walked away thinking it didn't, that itself is the finding: **this is a discoverability/trust problem, not a missing-feature problem.** Concrete gaps worth considering as the actual redesign scope:

1. **The confirmation moment is easy to blink past.** The "Congratulations" screen is a single transient screen shown once, right after checkout. If the user taps back, switches apps, or the COD flow doesn't feel conclusive enough, there's no persistent trace of that success moment other than navigating into Orders manually afterward. This plausibly explains Nusrat's original complaint despite the screen existing.
2. **Order status is scattered across four separate surfaces** with overlapping but not identical information: the Payment/Congratulations screen, the Track Order timeline, the Orders list badge ("Confirmed"), and the View Order detail's per-item status ("Waiting"). A user checking two of these can see inconsistent-looking states (order "Confirmed" overall, but item still "Waiting") without an explanation of the difference.
3. **"Waiting" (item-level status) is unexplained.** It's unclear what the item is waiting for — pharmacist review, stock, dispatch — with no supporting text, unlike the timeline steps which each have a one-line explanation.
4. **No proactive surfacing on the Home tab.** None of the screenshots show an active-order banner/card on Home. A user has to remember to open the Orders tab to check anything — there's no equivalent of Sheba.xyz's pattern of surfacing an active order where the user already looks first.
5. **Timeline granularity is backwards for what users worry about.** Arogga's 8 steps are detailed pre-dispatch (Processing, Payment, Confirmed, Packing, Packed) but collapse everything post-packing into a single "Delivering" step. For medicine orders, what users actually worry about on delivery day (has the courier picked it up, are they nearby, will it arrive today) is exactly the part that's least detailed.

## Recommendation for next step

Before writing the interrogated brief or designing anything: get 2-3 real screenshots from Nusrat's own Arogga account —
1. The screen right after placing an order (to confirm what, if anything, shows).
2. The current Orders/My Orders section.
3. Any order detail page, if one exists.

This keeps the redesign grounded in the actual current state instead of assumptions.
