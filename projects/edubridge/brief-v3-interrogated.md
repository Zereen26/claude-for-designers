---
project: EduBridge Bangladesh
brief-version: 3: interrogated synthesis
status: template: you fill this in during Class 3
---

# EduBridge BD: Interrogated Brief (Class 3 output)

This file is the synthesis you produce during Class 3. You write it. Claude does not.

After running `/grill-me` on the client brief (v1) and the PM thread (v2), you should have answers to the questions both briefs left open. Write them down here. This becomes the source of truth for Classes 4-6.

Fill in the sections below. Delete the prompts in italics when you have written your answer. Keep the headings.

---

## Who is actually using this

The primary user is a 46-year-old parent in or outside Dhaka, on a sub-15K taka Android. The secondary user is a 33-40-year-old parent in or outside Dhaka, using a desktop. Both use the product on home Wi-Fi in the evening or slow 4G/5G during the day. They are choosing a tutor for their 16-year-old preparing for HSC. They are afraid of being scammed by an unverified person who claims qualifications they do not have. They want to see proof of qualifications and verification before they will consider booking, and they want the total cost, including any discount or monthly payment option (BD users respond well to these), to be obvious before they commit.

## What the contradictions actually were

- **Desktop-first vs mobile-must:** Mobile-first. The client brief said desktop-first with responsive as a nice-to-have, but the PM thread confirmed mobile is a hard must. Sub-15K taka Android is the default device.
- **Stripe vs bKash:** bKash, likely with Nagad. Stripe does not operate in BD; the client brief assumed it without knowing this.
- **English vs Bengali:** Bilingual MVP. The client called Bengali optional, but the manager called it "strongly preferred," which functions as a soft must.
- **Students vs parents:** Parents. The client brief named students as primary, but the PM thread confirmed parents are the real financial decision-makers.
- **Timeline and budget vs. growing scope:** The current scope (mobile-must, dual payment gateways, possible second language, video-calling request) does not fit within a three-week timeline and a 3-lakh budget. I will treat the original MVP as the priority and move newly requested features, such as video calling, to a later phase unless the PM confirms otherwise.
  - Confidence: Confident
  - Gap: The brief never confirms whether the client has approved reducing the scope or extending the timeline.

## What I am building first

The tutor profile and booking request flow, parent-facing. The most meaningful success metric is successful bookings, not tutor signups alone. Since parents make the booking decision, I will prioritize the booking flow and trust-building screens before expanding other features.

- Confidence: Guess
- Gap: The brief does not define which KPI (signups, searches, or conversion) the client will actually use to evaluate the MVP after launch.

## What is out of scope

- Video calling in the booking flow. Separate epic after MVP launch; scope does not fit the current timeline and budget.
- Search and discovery. Different sprint.
- Tutor onboarding. Different sprint.
- Multilingual content management. Phase 2.

## Assumptions I am carrying forward

- I will display a verification badge on tutor profiles because trust is a key product goal. I am treating the badge as a visual placeholder until the verification process is confirmed by the client.
  - Confidence: Guess
  - Gap: The brief does not explain who verifies tutor documents, what documents are checked, or what requirements must be met before a tutor receives the badge.
- bKash and Nagad are both assumed relevant: verify priority with Rafi.
- Bengali support means UI strings, not user-generated content translation: verify with Jamie.

## Open questions for Rafi or Jamie

- Is the 3-lakh budget and three-week timeline firm given the scope has grown? If so, confirm video calling is cut from MVP in writing.
- Who issues the verification badge, and who actually checks the tutor documents?
- What does "trust is the main thing" mean to the client in practice: a badge, a video, a phone call, or all three?
- Is Nagad in MVP, or is bKash alone enough for launch?

---

## How this file gets used in later classes

- **Class 4:** When you critique a generated screen, you compare it against this file. Generated screens that don't match this brief are wrong, even if they look polished.
- **Class 5:** Your Figma file should be built from this brief, not the client brief.
- **Class 6:** Your prompt to Claude Code includes the constraints from this file. Specifically the user paragraph, the scope, and the assumptions.

---

## Appendix: raw grill-me notes (Skeptical PM, before synthesis)

Kept as a record of the questioning that led to the synthesis above. Not re-litigated here, just archived.

**First pass, 5 questions ordered by what kills fastest:**

1. Stripe for BD payments, does it actually work? Brief says Stripe, but Stripe does not support Bangladesh merchant accounts well. If tutors and parents cannot complete a payment, the 15% conversion metric is dead on day one. What is the real payment rail, bKash, Nagad, local gateway?
2. Desktop-first, for a market that is mobile-first? Brief says desktop-first, "mobile responsive is good to have." The working contract says sub-15K Android is the primary device. Which one is actually true for this audience?
3. English-only MVP, but parents decide the purchase? Parents hold the money and trust concerns but are named secondary. If a parent cannot read the tutor's qualifications or the payment screen, who is completing the booking?
4. How is a tutor actually verified, not just "has a profile"? Brief never says who checks the qualification. An unverified badge that looks verified is worse than no badge.
5. Who is the buyer between student and parent, for the booking flow itself? Does the student search and browse, then the parent approves and pays? If undefined, the booking-to-payment handoff gets guessed wrong.

**Second pass, what the brief closed and the PM thread reopened:**

1. Payment: brief closed Stripe, thread reopens bKash/Nagad with client saying "figure it out." Who decides, design or engineering?
2. Device priority: brief closed desktop-first, thread reopens mobile as "a must." Does the three-week timeline account for two real experiences instead of one plus a responsive pass?
3. Language scope: brief closed English-only, thread reopens Bengali as "strongly preferred." This is a scope decision, not a design decision, and it changes IA and content structure.
4. Primary user: brief closed students primary, thread reopens parents as the real decision-makers, without updating the brief.
5. Scope, video calling: brief closed MVP as search/profile/booking/payment, thread adds video calling after the client saw a competitor, told to design for it while engineering "figures out the build side."
6. Verification: never defined in the brief, thread adds "background verification visible, like a badge" without saying what it actually checks.
7. Timeline and budget vs. all of the above: three weeks, 3 lakh, no change despite mobile-must, dual payment gateways, a possible second language, and a new feature ask. Has anyone told the client the scope no longer fits, or is design expected to absorb the gap silently?

**Chosen 3 questions to answer directly:**

1. Timeline and budget vs. growing scope, the one that kills fastest.
2. What does the success metric actually mean, success metric-er mane ki (100 signup / 500 search / 15% conversion ashole design-e ki proman korbe), r shei onujayi ki age banaba.
3. Verification: what does the badge actually check.

Answers to these are folded into "What the contradictions actually were" and "Assumptions I am carrying forward" above.
