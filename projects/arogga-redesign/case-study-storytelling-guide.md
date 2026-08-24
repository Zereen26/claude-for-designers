---
created: 2026-08-24
type: guide
project: arogga-redesign
source: Case Study Club BD — Kowser Mamun's storytelling class (In Medias Res + Story Mountain)
---

# Case Study Storytelling Guide — applying it to Aroggo

Two things before the guide, both worth knowing now rather than after you go looking for the output:

1. **The book PDF** (`UX_Storytelling_Guide.pdf` in your Downloads) is a local file on your own PC. This session runs in a cloud container, not on your machine, so I cannot open a `file:///C:/...` path — I have no access to your filesystem. `uxstorytelling.io` is also blocked by this environment's network policy. Everything below is built from the three screenshots of the class (the In Medias Res template, the Story Mountain template, and the 7-step numbered list) plus what's already in your `arogga-redesign` folder. If the book has beats or examples your mentor added beyond what's in the slides, paste the relevant pages in and I'll fold them in.
2. **Where this file lives:** I can't write directly to `Documents\Claude for designer\project-aroggo` on your PC either, for the same reason. This file is saved inside your repo at `projects/arogga-redesign/case-study-storytelling-guide.md`, and I'm sending it to you directly so you have a local copy too. If you're running Claude Code from a folder on your PC that's a clone of this repo, a `git pull` on the `claude/case-study-writing-guide-4v0fv6` branch puts it there directly.

---

## 1. The two structures, as your mentor taught them

### In Medias Res — the opening only

Latin for "into the middle of things": you do not open a case study with "Hi, I'm Nusrat and this is my process." You open on the tension itself, already in progress. One slide, five fields:

- **Product Name**
- **Case Study Title:** `From [Frustration] To [Solution]` — phrased as a How Might We, not a feature name
- **Problem Statement:** one sentence, the gap, not the fix
- **Other Info:** Role, Year, Duration, Team, Deliverables
- **Visual:** a mockup of the single most important screen, ideally animated

This is the hook. It has to earn the next slide, not summarize the whole project.

### Story Mountain — every beat after that

The classic five-part arc (background → rising action → climax → falling action → resolution), but your mentor's template compresses it into one repeatable card, used once per beat of the process:

- **Title:** the key insight of this step, not the name of the step. Not "Competitor Analysis" — "Every competitor tracks stock, none tracks days remaining."
- **Brief:** 2–3 sentences, context and specifics
- **Quote:** something a real user or stakeholder actually said
- **Visual:** the mockup or artifact for this beat
- **Caption:** one line under the visual
- **Activities & Output:** what you did to move the problem forward, and what that produced

The template repeats, but the *content* has to climb: each card should raise the stakes or narrow the problem versus the one before it, the way a mountain has a single rising line, not a flat row of hills. A deck where every card is "here is a deliverable I made" with no rising tension is not Story Mountain, it is a portfolio checklist wearing a story template.

### The 7-step production order (from the numbered slide)

1. কি কি সেকশন/স্লাইড হবে — decide what sections/slides exist
2. কন্টেন্ট লিখলেন — write the content
3. ভিসুয়াল মুড বোর্ড — visual mood board
4. ফিগমা ডিজাইন — Figma design
5. কন্টেন্ট বসাবেন — place the content into the design
6. কালার এবং টাইপোগ্রাফি — color and typography
7. মকাপ ভিসুয়াল পলিস — final mockup visual polish

The order matters: **content before visuals, twice** (write it in step 2, place it in step 5). Visual polish is steps 6–7, last. If you start in Figma before the words exist, you end up writing captions to fit a layout instead of building a layout that carries the story.

---

## 2. Where `aroggo-case-study-draft.html` already matches this, and where it doesn't

Your 20-section draft is a different, older framework — the 12-case-study Behance research Nayem bhai walked through. It is not wrong, but it is an **audit structure**: one card per deliverable (competitor analysis, heuristic evaluation, IA, sketches, hi-fi), in production order. Story Mountain is a **tension structure**: one card per beat of a single rising problem. Right now your draft has the first without the second, and the two things it's missing are exactly what a flat checklist always misses.

**What's already doing In Medias Res correctly:** Section 01 (Thumbnail & Hero) has the right bones — a "Never Run Out" title and a named-person subline (Abdur Rahman, Metformin). That's the frustration-to-solution hook. Finish it: right now the hero line and the persona quote are still placeholders.

**What's flattening the climb, specifically:**

- Sections 04–16 (Audit Goals through Hi-Fi) read as thirteen separate deliverables in a row, each with its own heading, none building on the last. A reader can drop in at section 10 and lose nothing. In a Story Mountain, dropping into the middle should cost you context.
- Section 19, "Failure & Redesign Journey" — the missing Out-of-Stock flow, caught late, fixed with the three-equal-buttons rule — is the strongest material in the whole draft, and it is buried second-to-last, after the reader has already seen the finished Out-of-Stock screen four sections earlier (section 06's heuristic fix, section 17's before/after table). By the time the failure shows up, the "fix" has already been spoiled. That is the climax of your story and it is currently positioned as an appendix.
- The two personas (Abdur Rahman, Nusrat the caregiver) appear once in section 08 and never return. A Story Mountain keeps one throughline character in view; right now the persona is introduced and then the case study stops being about a person and becomes about a feature set.

---

## 3. A Story Mountain pass for the Aroggo case study

This is not a replacement for your 20-section draft — that content stays, most of it becomes the "Activities & Output" line inside a Story Mountain card. This is the climbing order the beats should tell the story in, using material you already have:

| Beat | Card title (the insight, not the task) | Draws from |
|---|---|---|
| **In Medias Res (open)** | "Never Run Out" — Abdur Rahman forgets Metformin every month, until it's already gone | Section 01, finish the placeholder |
| **Background** | The real Aroggo app has a "Patients" and "Prescriptions" menu already — and nobody uses it, because nothing tells you when to reorder | Section 03 (Problem) |
| **Rising action 1** | Every competitor we checked tracks stock. None of them show days remaining — they make the user do the subtraction | Section 05 (Competitor Analysis) + Goal 2 from section 04 |
| **Rising action 2** | The real app has no visible refill status anywhere — Nielsen's Visibility of System Status, broken on the one screen that matters most | Section 06 (Heuristic Evaluation) |
| **Climax** | The first wireframe pass shipped with no Out-of-Stock flow at all — an "in-stock" assumption baked into the design, caught only when the brief was checked against the actual screens | Section 19, moved up |
| **Falling action** | The fix: three equal alternatives, none pre-selected, no dark pattern — because a forced substitution on a chronic-medicine app breaks the trust the whole feature depends on | Section 19's fix-box, section 06's "Auto-Refill trust gate" |
| **Resolution** | 4 taps against a ~14-tap baseline (target, not yet measured), a countdown ring instead of a menu nobody opens, two gaps still open | Section 17 (Breakdown Banner) — keep the "needs real measurement" honesty, don't round it up |

Sections 07, 09–16 (timeline, design system, color, IA, sketch, mid-fi, hi-fi) aren't beats of the story — they're your evidence trail. In a presentation, they become an appendix or a "process" section after the Story Mountain arc closes, the way your existing "Design Process & Timeline" card already gestures at. Section 18 ("Where AI Was Used") is honest and worth keeping, but it's method disclosure, not story — same treatment, after the arc, not inside it.

---

## Your turn

I haven't written the hero line, the quotes, or rewritten any card copy — that's your call, not mine to draft for you, especially the quote fields, which need to be things a real person actually said (a mentor, a test participant, even yourself catching the Out-of-Stock gap). Two decisions worth making before you touch Figma:

1. Do you want to restructure `aroggo-case-study-draft.html` itself into this order, or keep it as your evidence archive and build a second, shorter Story Mountain deck (5–7 slides) for the actual presentation? Most Case Study Club decks I'd expect your mentor to want are the second — the archive supports it, but nobody presents 20 audit cards.
2. Section 17's tap-count target (4 vs. ~14) is still unmeasured. The resolution card is weaker without a real number. Worth 20 minutes on the real Aroggo app before you lock the deck.
