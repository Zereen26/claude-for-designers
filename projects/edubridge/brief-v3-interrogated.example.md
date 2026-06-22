---
created: 2026-06-22
type: brief
status: complete
tags: [edubridge, class-3, class-6, reference, example]
project: EduBridge Bangladesh
brief-version: 3: interrogated synthesis (reference example)
---

# EduBridge BD: Interrogated Brief (reference example)

This is a populated "what good looks like" version of `brief-v3-interrogated.md`, for the teacher to use in the Class 6 live demo. The real `brief-v3-interrogated.md` ships as an empty worksheet because students fill it in during Class 3. Use this file when you need a worked brief Claude Code can read in the demo (for example, to answer "what does this brief say about the primary user?") without depending on a student's own incomplete file.

The decisions below match the Class 3 interrogation outcome carried through the end-to-end worked example: parent as primary user, mobile-first on sub-15K taka Android, bKash payment, no video calling in MVP, trust signals via verification badge.

---

## Who is actually using this

The primary user is a 42-year-old parent in Dhaka, on a sub-15K taka Android, on home Wi-Fi in the evening or slow 4G during the day. They are choosing a tutor for their 16-year-old preparing for HSC. They are afraid of being scammed by an unverified person who claims qualifications they do not have. They want to see proof of qualifications and verification before they will consider booking, and they want the total cost to be obvious before they commit.

## What the contradictions actually were

- **Desktop-first vs mobile-must:** Mobile-first. The client brief said desktop-first with responsive as a nice-to-have, but the PM thread confirmed mobile is a hard must. The sub-15K taka Android is the default device for this audience; desktop is the edge case.
- **Stripe vs bKash:** bKash, with Nagad as a likely second. Stripe does not operate in BD; the client brief assumed it because Jamie's team did not know. Designing for Stripe would waste the sprint.
- **English vs Bengali:** Bilingual MVP (Bangla + English). The client called Bengali optional, but the client's manager called it "strongly preferred," which is a soft must. Plan for Bengali UI strings now rather than retrofitting later.
- **Students vs parents:** Parents. The client brief named students aged 14-22 as primary, but the PM thread confirmed parents are the real financial decision-makers. The trust signals and the booking decision are designed for the parent.
- **Video calling in MVP vs not:** Out of MVP. The client pushed for video calling in the booking flow after seeing Preply, but with a 3-lakh budget and a three-week sprint it does not fit. Flag it as a fast-follow epic.

## What I am building first

The tutor booking request screen, parent-facing: tutor name, subject, a document-verified badge, qualifications, hourly rate in BDT, and one CTA to send a booking request.

## What is out of scope

- Video calling in the booking flow. Separate epic after MVP launch.
- Search and discovery. Different sprint.
- Tutor onboarding and the verification submission flow. Different sprint.
- Multilingual user-generated content (tutor bios, reviews) translation. Phase 2. MVP covers UI strings only.
- Stripe and any non-bKash payment method.

## Assumptions I am carrying forward

- bKash and Nagad are both required, with bKash first. Verify the priority and whether Nagad is in MVP scope with Rafi.
- Tutors are willing to share documents (NID, qualifications) for verification. Verify before the verification flow is designed in a later sprint.
- Bengali support means UI strings, not translation of user-generated content. Verify with Jamie.
- The 3-lakh budget is firm and covers revisions. Verify with Rafi, because if it is firm, video calling is definitely out.

## Open questions for Rafi or Jamie

- Who issues the verified badge, and who actually checks the tutor documents? Without an issuer, the badge is decorative.
- What does "trust is the main thing" mean to the client in practice: a badge, a video, a phone call, or all three? The answer changes the profile and booking screens.
- Is the 3-lakh budget firm? If so, confirm video calling is cut from MVP in writing.
- Is Nagad in MVP, or is bKash alone enough for launch?

---

## How this file gets used in later classes

- **Class 4:** When you critique a generated screen, you compare it against this file. Generated screens that don't match this brief are wrong, even if they look polished.
- **Class 5:** Your Figma file should be built from this brief, not the client brief.
- **Class 6:** Your prompt to Claude Code includes the constraints from this file. Specifically the user paragraph, the scope, and the assumptions. The teacher can point Claude Code at this reference version during the live demo.
