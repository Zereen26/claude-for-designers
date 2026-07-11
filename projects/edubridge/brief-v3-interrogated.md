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
