# Arogga Redesign

Personal redesign project. Nusrat is both the user reporting the problem and the designer solving it, based on real usage of the live Arogga app/website.

## Status

Brief, IA, and tokens are locked (see files below). First Figma draft is built and iterated — see [Figma file](https://www.figma.com/design/5RtYliDOkowaEuPkcN5h0u/Arogga---Redesign). Next: Nusrat review, then a second pass on any remaining polish (see Known limitations).

## Files

- `brief-v1-client.md`: the raw problem statement, in Nusrat's own words as a user. Kept as-is for the record — see the update note at the top; the real scope moved after screenshot research.
- `research-notes.md`: public-site + real-screenshot research. Documents that the original 3 reported problems already existed in the app, and identifies the real gap (discoverability/trust, not missing features).
- `design-brief.md`: single source of truth — project context, target user, emotional tone, functional requirements, constraints, success criteria.
- `information-architecture.md`: screen inventory, navigation pattern, content hierarchy, critical user flows.
- `tokens.md`: design tokens documented from Arogga's existing app (colors, type, spacing, radius, icon style) — approximated from screenshots, not color-picked from source.

## Figma build (3 screens, 393×852 mobile frames)

1. **Home** — status bar, bell icon with unread badge, "Your Running Order" card above "All You Need," full 12-category grid, bottom nav.
2. **Notification Detail Sheet** — bottom sheet over a dimmed Home backdrop, "Order Confirmed" (unread) + "Order Delivered" (read) cards, "View All Orders" link.
3. **Track Order** — simplified to 5 steps (Order Placed → Confirmed → Packed → Out for Delivery → Delivered) after the original 8-step version tested as too long/anxiety-inducing. "Out for Delivery" is tagged NEW since it's the step added to support the 5-7-hour pre-delivery notification.

All icons (bell, cart, nav bar, back chevron, checkmark, package) are custom-drawn shapes/vectors built in Figma — not emoji — so they take the brand color correctly and can be edited by hand.

### Known limitations (flagged, not fixed)

- Category tile backgrounds and the running-order thumbnail are solid-color placeholders, not real product photos — intentional, since fabricating fake product photography isn't appropriate; swap in real images from Arogga's CMS.
- The gray "Order Delivered" package icon is a simple abstract box shape, not a polished icon — lowest-priority item since it's the read/secondary notification, not the primary confirmed state.
- Exact colors/type are close approximations read off screenshots (see `tokens.md` confidence notes), not pixel-picked from Arogga's real design file.
