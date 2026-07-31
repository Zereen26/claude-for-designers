---
project: EduBridge Bangladesh
assignment: "Class 8: The Interview Kit (capstone)"
status: STAR bank and pack ready. Recording and rehearsal still needed from you.
---

# EduBridge Interview Kit

Case study: `assignment-7-submission/EduBridge-Case-Study.pdf`
Portfolio: https://www.behance.net/nusratzereen

---

## 5 STAR answers

Each one names a decision, not a tool. Every Action section has three parts: what I directed, what I rejected, what I decided that Claude could not have decided for me.

### 1. Tell me about a time you solved a problem with AI.

**Situation:** EduBridge, a UK-based tutoring marketplace, was launching a Bangladesh-specific version of their platform.

**Task:** The client brief asked for desktop-first design, Stripe payments, English-only copy, and students as the primary user.

**Action:**
- Directed: ran the client brief and the PM's follow-up thread through a structured interrogation instead of designing straight from the brief.
- Rejected: the Stripe-based payment assumption entirely. Stripe does not operate in Bangladesh.
- Decided: rebuilt the payment note around bKash, the wallet BD users actually trust, and flagged Nagad as a secondary option to confirm with the client.

**Result:** The interrogated brief documented five real contradictions before a single screen was drawn, so the Class 5 and 6 build never had to be reworked for a payment method that does not exist in this market.

### 2. Walk me through your design process.

**Situation:** Same project, before any screen was drawn.

**Task:** Design a tutor booking screen from a polished but partly wrong client brief.

**Action:**
- Directed: had Claude run the brief and the PM thread through a structured interrogation instead of sketching from the brief as written.
- Rejected: the brief's own framing of "students" as the primary user, once the PM thread confirmed parents hold the payment method and the decision.
- Decided: scoped the MVP down to the booking-request screen only. Video calling and search moved to a later phase, because the timeline and budget did not support the scope the brief had quietly grown to.

**Result:** Five real contradictions were resolved before critique started, so critique time went into UI trust signals, not re-litigating who the user was.

### 3. Tell me about a time your design failed.

**Situation:** EduBridge booking screen, built in Claude Code.

**Task:** Ship a working booking screen with a CTA reachable at the bottom of a mobile viewport.

**Action:**
- Directed: built the screen with the CTA pinned to the bottom of the viewport using a flex auto-margin, a standard thumb-reach mobile pattern.
- Rejected: that pattern, once I saw it rendered. It created a large dead-space gap on this screen's actual content height: the same failure mode a rejected earlier layout got flagged for ("looks like the page did not load").
- Decided: let the CTA flow naturally after the content instead of forcing it to the bottom, and set a rule for myself: only pin a CTA to the viewport bottom when the content reliably fills the screen.

**Result:** Verified the fix at real phone width, 375 by 812. The reusable pattern is now written into the case study, not just fixed on this one screen.

### 4. Describe a project where AI made a mistake. How did you catch it and what did you do?

**Situation:** Class 4 critique of three competing booking-screen layouts for EduBridge.

**Task:** Pick the strongest layout for a Bangladeshi parent deciding whether to trust a tutor with their child.

**Action:**
- Directed: ran three forced-perspective critiques (confused user, engineer, skeptical PM) against all three generated layouts instead of picking on visual preference.
- Rejected: a generated layout whose only trust signal was the single word "Verified," with no explanation. The brief is explicit that BD parents need to know what was verified, not just that something was.
- Decided: kept the layout with three named verification checks (NID, qualification, background check), but also cut a session-quantity stepper it shipped with, because it let a parent commit to a session count before the tutor had even accepted the booking. A real logic error, not a taste call.

**Result:** The skeptical-PM critique caught the stepper issue on the first pass. It never reached Figma.

### 5. Tell me about a design decision you made that went against what AI suggested. Why?

**Situation:** Three competing EduBridge booking-screen layouts, generated for Class 4 critique.

**Task:** Decide which trust-versus-price hierarchy to ship.

**Action:**
- Directed: had three layout approaches generated and critiqued in parallel.
- Rejected: one generated layout that placed the verification badge below a cost breakdown table, following a generic price-first pattern.
- Decided: went with the layout that puts verification ahead of price. The brief is explicit that trust, not cost, is the blocker for this audience, and a Dhaka parent needs to see who they are trusting before what it costs.

**Result:** The shipped screen reflects this ordering: name and subject, then verification, then schedule, then price. Consistent since Class 4, never quietly slid back to a price-first default.

---

## Cheating-objection answer: the leverage frame

Chosen because it matches how the work actually happened: brief interrogation that would take a full day by hand took twenty minutes with Claude directing the questions, and the time saved went into judgment calls, not faster shipping.

> "If AI replaced my judgment, it would be cheating. What it actually does is let me execute decisions faster, so I can make more of them. On EduBridge, interrogating the brief and the PM thread caught the Stripe problem, the students-versus-parents problem, and the desktop-versus-mobile problem before a single screen was drawn. Claude surfaced the questions. I decided which contradictions mattered, which layout to keep, and where trust needed to sit on the screen. The judgment is still mine. AI just moved my time from typing to thinking."

**Practice note (for you):** read this out loud until it does not sound read. Swap in your own rhythm where it feels stiff. The evidence stays the same either way.

---

## What is still yours to do

This kit has the STAR bank and the objection answer ready and evidence-backed. Three things only you can do:

1. **Rehearse the objection answer out loud** until it comes without effort.
2. **Record yourself answering one of the five questions above, on camera, for two minutes.**
3. **Watch it back once** and write one honest sentence here: did you name a decision, or did you name a tool?

> Your honest note: _______________________________________________
