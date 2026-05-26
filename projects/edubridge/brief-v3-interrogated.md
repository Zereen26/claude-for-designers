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

*One paragraph. Primary user, with specifics: device, connection, language preference, what they are trying to accomplish, and what they are afraid of.*

> Example: "The primary user is a 42-year-old parent in Dhaka, on a sub-15K taka Android, evening hours on home Wi-Fi or slow 4G. Choosing a tutor for their 16-year-old preparing for HSC. Afraid of being scammed by an unverified person. Wants to see proof of qualifications before they consider booking."

## What the contradictions actually were

*List the conflicts between v1 and v2. For each, write your decision and why.*

> Example:
> - **Desktop-first vs mobile-must:** Mobile-first. Sub-15K taka Android is the default device. Desktop is the edge case.
> - **Stripe vs bKash:** bKash + Nagad. Stripe does not work in BD; pretending otherwise wastes the sprint.
> - **English vs Bengali:** Bilingual MVP. "Strongly preferred" from the client's manager is a soft must.
> - **Students vs parents:** Parents. They make the financial decision; they need the trust signal.

## What I am building first

*One sentence. The single screen or flow you will spend the next four weeks on.*

> Example: "The tutor booking request screen. Parent-facing. Shows tutor name, subject, verified badge, qualifications, hourly rate in BDT, and one CTA to send a booking request."

## What is out of scope

*What you are NOT building, even though the brief might suggest it.*

> Example:
> - Video calling in the booking flow. Will be a separate epic after MVP launch.
> - Search and discovery. Different sprint.
> - Tutor onboarding. Different sprint.
> - Multilingual content management. Phase 2.

## Assumptions I am carrying forward

*Things you are treating as true without confirmation. Flag them so you can verify later.*

> Example:
> - bKash and Nagad are equally important: verify with Rafi.
> - Tutors are willing to share documents for verification: verify before designing the verification flow.
> - Bengali support means UI strings, not user-generated content translation: verify with Jamie.

## Open questions for Rafi or Jamie

*Things that block design progress. Send these as a message before you go further.*

> Example:
> - Do we have a verified-badge issuer? Who verifies the tutor documents?
> - What does "trust is the main thing" mean to the client in practice: a badge, a video, a phone call, or all three?
> - Is 3 lakhs budget firm? If so, video calling is definitely out.

---

## How this file gets used in later classes

- **Class 4:** When you critique a generated screen, you compare it against this file. Generated screens that don't match this brief are wrong, even if they look polished.
- **Class 5:** Your Figma file should be built from this brief, not the client brief.
- **Class 6:** Your prompt to Claude Code includes the constraints from this file. Specifically the user paragraph, the scope, and the assumptions.
