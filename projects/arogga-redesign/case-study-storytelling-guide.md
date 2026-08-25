---
created: 2026-08-24
type: guide
project: arogga-redesign
source: Case Study Club BD — Kowser Mamun's storytelling class (In Medias Res + Story Mountain)
---

# Case Study Storytelling Guide — applying it to Aroggo

Two things before the guide, both worth knowing now rather than after you go looking for the output:

1. **The book PDF** (*UX Storytelling Guide* by Jeff White) has now been uploaded and read in full — Section 4 below covers it. Sections 1–3 were originally built from your three class screenshots alone, since `uxstorytelling.io` is blocked on this network and the PDF wasn't reachable yet at the time; that material stands as written.
2. **Where this file lives:** I can't write directly to `Documents\Claude for designer\project-aroggo` on your PC — this session runs in the cloud, with no access to your filesystem. This file is saved inside your repo at `projects/arogga-redesign/case-study-storytelling-guide.md`, and I'm sending it to you directly so you have a local copy too. If you're running Claude Code from a folder on your PC that's a clone of this repo, a `git pull` on the `claude/case-study-writing-guide-4v0fv6` branch puts it there directly.

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

## 4. Jeff White's *UX Storytelling Guide* — what it actually says

This is a different book than you might expect from the title. It is not another beat template to lay next to In Medias Res and Story Mountain. Jeff White spent 20 years as a UX designer (including presenting to Jeff Bezos roughly 30 times at Amazon) and later ran his own consultancy, Stepladder. His book is not about *structuring a case study document* — it's about the *live skill* of talking about your design to another person, in a meeting, a crit, a Slack message, or an interview. That's a different half of the same problem your mentor is teaching, and it's worth understanding as its own thing rather than folding it into the mountain metaphor.

### What the book actually covers

**Chapter 1, why he's worth listening to.** White opens by earning trust before teaching anything — his own advice in action. Seven promotions in thirteen years, three in five years at Amazon, a $6M-revenue consultancy with an 18-for-18 referral rate, and a specific result: a redesign for the eCommerce site Woot! that produced a 343% increase in conversion. He's not selling a framework he read about; he's reporting what worked over two decades of doing the job.

**Chapter 2, what storytelling actually is.** This is the part worth reading twice, because it deliberately deflates the term. He strips out the Hollywood language other UX-storytelling content leans on — Pixar's 22 rules, the hero's journey, "temporal sequence and causal connection" — and reduces it to one sentence: *storytelling is the act of telling someone why a design is good or bad.* It happens on a whiteboard with a teammate, in a two-line Slack message, in a daily PM check-in from your source file — not only in a polished deck. This matters for your work specifically, because it means the Story Mountain discipline your mentor taught isn't a special deck-only skill; the same "insight, not task name" habit should be how you talk about the Out-of-Stock decision out loud in a critique, not just how you write the slide.

**Chapter 3, why it matters to your career, not just your project.** White lists the career symptoms of *not* having this skill: stakeholders overriding your recommendations, being handed prescriptive requirements instead of being asked for judgment, watching engineering ship something that barely resembles what you designed, sitting out of key meetings other designers get invited to, making it through interview loops without landing the offer. His claim is that these aren't separate problems needing separate fixes — they're symptoms of the same missing skill, and storytelling is the lever for all of them at once. Worth sitting with, because it reframes today's assignment: this isn't a marketing-post exercise, it's practice at the actual skill that decides whether your recommendations get taken seriously later.

**Chapter 4, his 5-part approach.** This is the core of the book, and it's genuinely a different, complementary structure to your mentor's two templates:

1. **Know the audience.** Before you decide what to show, decide *who's in the room* — a design crit, an informal PM check-in, a room with your CEO in it, a hiring manager, someone reading a Slack message. He gives six questions to ask yourself first: who's the audience, what do they already know, what do they care about, what language will land, what's worked with this group before, and what do you want to be true after the conversation ends. His sharpest line here: strip jargon for a business audience — nobody in a stakeholder meeting wants you to "geek out on design process" or say "lo-fi wireframes."
2. **Establish trust**, especially with people who haven't worked with you before. A concrete four-item checklist: be ready (loaded and set up before you start presenting, not fumbling live), remove distractions (single tab, full screen, notifications off), have a plan (never open with "well I guess I could show you..."), and communicate the plan up front in one line or one outline slide.
3. **Use a story structure** — his version is the *Tell 'em method*: tell them what you're going to tell them, tell them, tell them what you told them (intro → body → summary). Borrowed from how academic papers are taught to be structured, and it's the load-bearing idea in the whole book. Two things sit underneath it: present more than one option rather than a single "right" answer (a lone option invites resistance and second-guessing; multiple options with visible trade-offs invite agreement), and *ground every option in why, not what* — describe the goal and the user's problem before you describe the interface, never the reverse.
4. **Make recommendations.** He calls out a specific failure mode: designers who present a range of options and then go quiet while stakeholders pick one. That silence is exactly what makes a designer read as "just hands," not a decision-maker. After you've built trust, given context, shown options, and laid out pros and cons, the job isn't done until you say which one you recommend and why. He frames the two possible outcomes — the room agrees with you, or they push back and you learn something that improves the work — as both being wins, which is a useful thing to actually believe rather than dread.
5. **Use high-quality visuals**, broken into three concrete presentation modes with different rules for each: a formal slide deck (one idea per slide, minimal text, no fade transitions, real stock photography, actual visual-design fundamentals — consistency, hierarchy, alignment, contrast, white space), an informal walkthrough from your source file (pull relevant frames into their own page so you're not hunting live, zoom to one frame at a time instead of panning around, take notes inside the file as feedback happens), and a portfolio presentation for an interview specifically (never walk through your live portfolio site — build a private deck; strip even more text than a normal deck; use presenter notes instead of on-slide bullets; and — his clearest, most quotable advice — lean into imperfection rather than hiding it, because a hiring team already knows no project shipped perfectly and wants to see how you handled the mess, not a version where you pretend there wasn't one).

**Chapter 5, the close.** He recaps the five parts and signs off without padding it further.

### Quotes worth keeping, and why each one is useful

- *"UX storytelling is the act of telling someone why a design is good or bad."* — the single sentence that defuses the intimidation around the word "storytelling." Good to open a post or a talk with, because it immediately tells a skeptical reader this isn't going to be Hollywood-framework cosplay.
- *"Ground each design option you present in why, not what."* — the single most reusable line from the whole book. It's the same instinct as your mentor's Story Mountain rule (card title = the insight, not the task name), stated as a design-presentation habit instead of a slide-writing one. Worth quoting directly if you want to show the two frameworks agree independently.
- *"If your audience only sees one option they tend to resist it and question your process."* — a specific, falsifiable claim, not a platitude, and it explains *why* Case Study Club's insistence on showing rejected options (your own Section 19, the missing Out-of-Stock pass) isn't just honesty theater — it's what actually gets a room to agree with you.
- *"Design good stuff. Convince other people it's good."* — his two-part definition of the whole job. Useful as a thesis line: it names the exact gap a lot of design education leaves — you can be taught #1 for years and never once be taught #2.
- *"Lean into imperfection and be positive... this isn't only normal, it's good. The hiring team wants to see how you deal with challenging situations."* — directly validates the "Failure & Redesign Journey" instinct already in your draft (Section 19). If you want one sentence that argues *why* a failure slide belongs in a portfolio case study, at all, this is it.
- *"Never underestimate the importance of visual design. It matters when you're presenting from Figma to your PM, or from a 100 slide presentation deck to your CEO."* — useful if your post needs a line about why polish matters even in daily, informal design conversations, not just in the final deck.

### How this connects back to your mentor's teaching

Your mentor gave you the shape of a case-study *document*: In Medias Res for the open, Story Mountain for the climb. White's book is the shape of the *conversation* around that document — how you'd walk a stakeholder or interviewer through it live, and how you'd behave in the rooms where a case study doesn't exist yet (a daily check-in, a whiteboard, a Slack thread). They reinforce each other in one specific, checkable way: his "ground it in why, not what" and the Tell 'em method's insistence on options-plus-analysis are the same discipline as "the card title is the insight, not the task name" from Story Mountain. Two independent sources, arrived at from different careers, landing on the same rule, is worth saying out loud if you reference the book in your post — it's a stronger claim than either source alone.

---

## Your turn

I haven't written the hero line, the quotes, or rewritten any card copy — that's your call, not mine to draft for you, especially the quote fields, which need to be things a real person actually said (a mentor, a test participant, even yourself catching the Out-of-Stock gap). Two decisions worth making before you touch Figma:

1. Do you want to restructure `aroggo-case-study-draft.html` itself into this order, or keep it as your evidence archive and build a second, shorter Story Mountain deck (5–7 slides) for the actual presentation? Most Case Study Club decks I'd expect your mentor to want are the second — the archive supports it, but nobody presents 20 audit cards.
2. Section 17's tap-count target (4 vs. ~14) is still unmeasured. The resolution card is weaker without a real number. Worth 20 minutes on the real Aroggo app before you lock the deck.
