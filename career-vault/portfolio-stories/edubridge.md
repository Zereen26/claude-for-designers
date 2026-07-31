## Project: EduBridge Bangladesh — tutor booking screen

---

## The brief I received (one paragraph)

An offshore client (EduBridge Ltd, UK/AU tutoring marketplace) asked for a Bangladesh-specific version of their platform. Polished brief, three-week sprint, MVP scope: search, tutor profile, booking request, payment.

## What was actually broken about the brief

The brief said desktop-first; the PM thread confirmed mobile is a hard must. It assumed Stripe; Stripe doesn't operate in Bangladesh — bKash/Nagad is the real payment layer. It named students aged 14-22 as the primary user; the PM thread confirmed parents hold the money and make the actual booking decision. It called Bengali optional; the PM called it "strongly preferred," which functions as a soft requirement. The brief and the reality were two different products.

## What I decided to do about it

Rewrote the brief via `/grill-me`: mobile-first, parent-facing, bKash/Nagad payment, bilingual MVP, trust signals prioritized over aesthetics. Scoped down to booking-request-only for the three-week timeline — video calling and search moved to a later phase.

## What I built (one specific screen or flow)

The tutor booking request screen. Parent-facing, mobile-first, max-width 400px. Tutor name and subject, a verification card naming three specific checks (NID, qualification certificate, background check — not one decorative badge), a schedule card (date/time), total cost in BDT, and one CTA: "Send Booking Request."

## How I worked with Claude

Ran `/grill-me` to surface what the brief didn't say. Ran `/design-tokens` to lock a real token set (colors including the bKash green, type scale, spacing, radius) before any screen got built — confirmed wired by changing the primary color token once and watching the button, checkmarks, and price all repaint together. Used Claude Code to write the HTML once the brief and tokens were stable, then directed two specific fixes rather than "make it better." The decisions were mine; the keystrokes were Claude's.

## What I rejected

Two competing layouts, both generated and critiqued in Class 4. One used a single undifferentiated "Verified Tutor" badge with no explanation — rejected because the brief is explicit that trust is the blocker for this audience, and a single word doesn't build it. The other showed a discount line before any discount program was confirmed to exist, and buried the verification signal below the price table — rejected because it puts cost ahead of trust, the opposite of what the brief says this audience needs. I also cut a piece of the layout I kept: a session-quantity stepper that let a parent commit to a number of sessions before the tutor had even accepted the booking request — a real logic error, caught by the skeptical-PM critique, not a taste call.

## What I would do differently

I'd test the verification-card approach with real parents before assuming document-level checks (NID, qualification, background) are the trust signal that actually lands — right now that decision is backed by a forced-perspective AI critique, not a real interview. I'd also catch the CTA dead-space layout bug earlier: pinning the button to the bottom of the viewport with a flex auto-margin looked fine in the editor and broke visually once real content height was in play.

## Outcome

Course project — did not ship to real users. What's real: a working, tokenized HTML prototype at actual phone width (375×812), with every design decision traceable to a specific brief contradiction or critique finding, not a guess. Two directed fixes and one heuristic-evaluation catch were applied and verified before this was called done.

---

## Three sentences for a recruiter (the short version)

> I rebuilt the booking screen of a tutoring marketplace for the Bangladesh market. The client brief said desktop-first, English-only, student-targeted; brief interrogation found the PM thread actually confirmed mobile-must, bilingual, and parent-targeted — five contradictions in total. I redirected the brief, rejected two AI-generated layouts for weak or misplaced trust signals, and built one screen end-to-end including the HTML: named verification checks, bKash-pattern payment note, sub-3G-conscious layout.
