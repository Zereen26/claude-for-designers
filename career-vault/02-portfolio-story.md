# Portfolio Story Template

One project gets one story. The story is structured. You do not improvise.

Use this template for every project in `projects/`. The Class 7 version focuses on EduBridge. Once you have your own real projects, you fill in this template for each.

Copy this file when you start a new project's story:

```bash
cp career-vault/02-portfolio-story.md career-vault/portfolio-stories/{project-name}.md
```

---

## Project: [Name]

*Example: EduBridge Bangladesh: tutor booking screen*

---

## The brief I received (one paragraph)

*What you were asked to do, in plain language.*

> Example: "An offshore client asked us to localize their existing UK/AU tutoring marketplace for Bangladesh. Polished brief, three-week sprint, MVP scope."

## What was actually broken about the brief

*The contradictions, the assumptions, the missing pieces. This is the part most designers leave out and it is the most important part.*

> Example: "The brief said desktop-first; the local PM said mobile-must. It assumed Stripe; bKash is what BD users use. It positioned students as the primary user; parents are the actual decision-makers. The brief and the reality were two different projects."

## What I decided to do about it

*The decisions you made. Not Claude's decisions. Yours.*

> Example: "I rewrote the brief. Parent-first. Mobile-first. bKash and Nagad for payment. Trust signals over aesthetics. Bengali support as a hard requirement, not a phase-2. Three weeks meant booking-screen-only: search and onboarding were out."

## What I built (one specific screen or flow)

*A single screen or flow with a clear description. Not the whole product.*

> Example: "The tutor booking request screen. Parent-facing. Vertical layout, mobile-first, max-width 400px. Shows tutor name, photo (below the fold to save 3G bandwidth), explicit verified-document badges (NID, qualifications, background check), price in BDT, and one CTA: 'Send Booking Request.'"

## How I worked with Claude

*Be specific about what you delegated and what you kept. This is the heart of the story.*

> Example: "I used `/grill-me` to surface what the brief did not say. I used `/design-tokens` to lock the system before any screen got built. I used Claude Code to write the HTML/CSS once the tokens and brief were stable. Claude wrote the markup; I directed the structure, rejected the first generated CTA copy, and tested every screen on a sub-15K taka Android with throttled 3G. The decisions were mine. The keystrokes were Claude's."

## What I rejected

*The work Claude generated that you said no to. This proves you have taste.*

> Example: "Claude's first booking screen had a hero photo above the fold and a 400ms fade-in. I rejected both. The hero photo wastes 3G bandwidth and pushes the booking button below the fold. The fade-in feels broken on common BD devices. Both got cut before the screen was reviewable."

## What I would do differently

*The honesty section. Make this real.*

> Example: "I should have tested with a real parent earlier. I assumed parents wanted document-level verification visible; turns out three of the five parents I tested with were more reassured by a short tutor introduction video. I would build the video flow first next time."

## Outcome

*If the project shipped: what happened. If it didn't: what you learned.*

> Example: "Class project. Did not ship to real users. Got reviewed by [name], a senior product designer at [company], who flagged two more issues I had missed (no error state for the bKash failure, no offline fallback for the verified badges). Both went on my followup list."

---

## Three sentences for a recruiter (the short version)

When you have 60 seconds to describe this project on a call, this is what you say.

> Example: "I rebuilt the booking screen of a tutoring marketplace for the Bangladesh market. The client brief said desktop-first English-only; the actual users are parents on entry-level Android phones in Bangla and English. I redirected the brief, designed parent-first, and built one screen end-to-end including the HTML: verified-tutor signal, bKash payment path, sub-3G load profile. Reviewed by a senior at [company]."

Practice saying this aloud. If it does not sound like real spoken English, rewrite.
