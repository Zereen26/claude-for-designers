---
project: EduBridge Bangladesh
assignment: "Class 7: Package the Case Study"
status: ready to submit
---

# EduBridge BD: Tutor Booking Flow Case Study

I rewrote a desktop-first, Stripe-based, student-targeted brief into a mobile-first, bKash-based, parent-targeted booking screen, after the brief's own contradictions showed the client had described the wrong product for this market.

---

## 1. The brief and what I knew

The client brief ([brief-v1-client.md](../brief-v1-client.md)) came from Jamie Thornton, EduBridge's UK/AU product lead: desktop-first, English-only, Stripe payments, students aged 14-22 as the primary user, brand colors locked to navy and green. Polished. Confident. Written by someone who had never shipped a product to a Bangladeshi user.

Before touching the brief, I ran the Class 1 context-moat exercise on a comparable BD product prompt (FitBondhu, a fitness app) to see exactly what a generic AI output misses without local context: no bKash-pattern login, no BDT pricing, no Bangla, no trust badges, no diet/habit framing. A product built for anywhere, meaning nowhere. That exercise is what told me not to trust a polished-sounding brief on face value.

Running `/grill-me` against the client brief and the PM's follow-up thread ([brief-v3-interrogated.md](../brief-v3-interrogated.md)) surfaced five direct contradictions between what the client said and what the PM actually confirmed:

| Brief said | Reality | I decided |
|---|---|---|
| Desktop-first | PM: mobile is a hard must | Mobile-first, sub-15K taka Android is the default device |
| Stripe | Stripe does not operate in BD | bKash, likely with Nagad |
| English-only | PM: Bengali "strongly preferred" | Bilingual MVP |
| Students are primary user | PM: parents hold the money and the decision | Parent-facing, not student-facing |
| 3-week timeline, fixed scope | Scope had grown (dual gateways, second language, video calling) | Kept original MVP scope, pushed new asks to a later phase |

## 2. What I directed Claude to do

I didn't ask for a screen. I asked for a brief interrogation first, then a critique of what came out of it, then a build against what survived. Specific things I directed:

- Ran the three forced-perspective critique prompts against three competing Figma layouts in Class 4, verbatim. Example: "You are a first-time user, age 35, on a sub-15K taka Android, 3G connection, in Bangladesh. Tell me in three sentences what you think this screen is asking you to do, and where you got confused. Do not be polite." Not "what do you think," which produces nothing usable.
- Directed the Class 6 build with a scoped prompt: single HTML file, inline CSS, mobile-first, max-width 400px, one screen, sourced from `brief-v3-interrogated.md` and `tokens.md`. Not "build me a booking app."
- After the first build, gave two specific, reasoned fix instructions rather than "make it better" (below).

## 3. What I rejected and why: this is the strongest part

Three competing layouts went through the forced-perspective critique in Class 4 ([critique-notes.md](../critique-notes.md)): a low-friction version with one generic "Verified Tutor" badge, a trust-first version naming three specific checks, and an order-summary version leading with a cost breakdown.

**I rejected the low-friction version.** Its only trust signal was the single word "Verified," with no explanation behind it, and the brief is explicit that trust, not speed, is the blocker for this audience. A parent on a 3G connection deciding whether to trust a stranger with their child needs to know *what* was verified, not just that something was.

**I rejected the order-summary version.** It showed a price breakdown with a discount line before any discount program was confirmed to exist, and it placed the verification badge below the pricing table. That puts cost ahead of trust, directly contradicting what the brief says this audience actually needs.

**I also rejected a piece of the version I kept.** The trust-first layout won, but it shipped with a session-quantity stepper on the booking-request screen: letting a parent commit to a number of sessions before the tutor has even accepted the request. The skeptical-PM critique caught this as a real logic error, not a taste complaint. A parent could request five sessions before knowing the tutor is even available for one. I cut it before it reached Figma.

## 4. What I kept and rebuilt

**Figma hygiene (Class 5):** Took the winning layout and applied Level-1 hygiene. Renamed the layer tree to names a stranger could read (`status-bar`, `tutor-summary`, `verification-card`, `schedule-card`), built `primary-button` as a real component with `Default`/`Disabled` variants instead of a flat shape, and wired the bKash-green color token (`accent.primary`, `#00A651`) as a live Figma Variable to the button, the verification checkmarks, and the total-cost value. Confirmed by changing the variable once and watching all three repaint together.

**Working prototype (Class 6):** Built `booking-screen.html` in Claude Code directly from `brief-v3-interrogated.md` and `tokens.md`: a real file in a browser, not a Figma simulation. Then ran the fix loop and made two directed changes, each tied to a documented reason rather than a preference:

1. The CTA button was pinned to the bottom of the screen with `margin-top: auto`, which left a large dead-space gap above it on this screen's actual content height. Same failure mode flagged against the rejected low-friction layout back in Class 4 ("looks like the page did not load properly"). Removed the forced push; the button now sits naturally after the content.
2. The button had no loading state, so a parent on 3G could tap it twice and create a duplicate booking request: a risk named explicitly in the Class 4 critique. Tapping it now disables the button, changes the label to "Sending request...", and tells the user not to tap again.

I then ran a heuristics pass (the course references `/impeccable`, which doesn't exist in this repo; substituted the repo's own `/heuristic-evaluation` skill) and caught one more issue: the date/time fields in the schedule card looked like static labels with no signal they were tappable. Fixed with a small edit icon.

## 5. The outcome

This is a course project. It did not ship to real users, so I'm not going to invent a conversion metric. What actually happened: a working, tokenized, mobile-width HTML prototype that carries every trust decision from the interrogated brief through to the built screen, with each design change traceable to a specific, named reason instead of a guess. Verified at 375x812 (real phone width), not just on a desktop browser window narrowed down.

---

## Honest failure

**What I tried first:** Pinning the CTA button to the bottom of the viewport using `margin-top: auto` inside a `min-height: 100vh` flex column: a standard "keep the CTA in thumb reach" mobile pattern.

**Why it broke:** On this screen's actual content height, the pattern didn't just anchor the button. It stretched a large, unstyled dead-space gap between the last content block and the CTA. Visually, it read as a broken or unfinished page, which is the exact trust failure the brief is trying to avoid.

**What I changed:** Let the CTA flow naturally right after the content instead of forcing it to the bottom of the viewport.

**The reusable pattern (not "be more careful"):** A bottom-pinned CTA only works when you can guarantee the content reliably fills the viewport. For variable-height content, anchor the CTA to the content, not the screen. Use `position: sticky` for scroll behavior only, never a flex-auto-margin push as a layout anchor. I'll check this before using the pattern again on any screen with content whose length isn't fixed.
