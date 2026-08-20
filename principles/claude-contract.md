---
created: 2026-07-27
updated: 2026-08-20
type: reference
status: complete
class: 2
tags: [ostad, batch-03, workbook, principles, claude-contract, student-editable]
---

# Your Working Contract with Claude

**What this file is for:** it records how you work, once, so you stop re-explaining yourself at the start of every session.

**Why Claude needs it:** Claude opens every session knowing nothing about you. This file is the memory it does not have.

**Which class:** Class 2, The Working Agreement. You bring back two copies, one at the root of your folder and one inside the project folder.

<!--
COURSE NOTE for the student. This is not an instruction to Claude.

This is the most important file in the workspace. The skills do not work without it. The projects do not work without it. The career vault does not work without it.

Five headings, and they are the five you saw in class:

  Who I am           the paragraph Claude reads before anything else, plus
                     your defaults: your clients, your market, your surface
  How to talk to me  the shape of the reply
  Always             things Claude must do every time
  Never              things Claude must not do, ever
  Mine to decide     work that never gets handed over

Why those five. Class 2 teaches one test: every line has to be a thing Claude
must do, or a thing it must never do. A line you would not notice being
ignored is a wish, and a wish cannot be broken, so it cannot be followed
either. `Always` and `Never` say that out loud, which is why they are headings
and not advice.

Only `Never` appears in both this file and the project file. The other four
headings are how you can tell which file you have open.

`Who I am` is doing two jobs and that is deliberate. It says who you are, and
it says what you assume when a brief tells you nothing: the clients who keep
finding you, what outsiders get wrong about your market, the device you design
down to. Those are your defaults, and they are what Claude falls back on when a
brief arrives empty. Batch 2 kept them in a second root file called
`context-block.md`. Two root files that both sounded like "context about me" is
one file too many, so there is one now.

The root-versus-project split is one question: would this still be true on
your next job, for a different client, in a different market? Yes, it lives
here. No, it lives in `projects/<client>/claude-contract.md`.

You will refine this file over months. It compounds. The version you hold six months from now will be worth ten times what you write in Class 2.

Everything under the EXAMPLE heading below is the instructor's filled version for the EduBridge project. It is there to show shape and level of specificity. It is not yours and it is not meant to be kept.
-->

---

## EXAMPLE: the instructor's filled contract (EduBridge)

<!-- Read it, then replace all of it with your own answers from YOUR TURN. -->

### Who I am

I am a design partner for BD-focused digital products. My clients are early-stage startups and agencies in Dhaka building fintech, e-commerce, and healthtech products.

**My defaults, when a brief tells me nothing:**

- Most of my work arrives from offshore clients who have never used their own product in my market.
- I do best on flows where trust has to be earned before money moves. I struggle with brand and marketing pages.
- Outsiders assume a card is the default payment method here. It is not, and the flow shape changes because of that.
- My floor is a Redmi A3 on 3G, unless the brief says desktop, and then it is Chrome at 1366px on a five-year-old laptop.
- With no research in the brief I assume the buyer and the user are different people. I am right about two thirds of the time.

<!-- Why this paragraph matters: Claude does not know you. Every prompt is a cold start. This is the first thing you paste at the top of any non-trivial work, so Claude is briefing the right person and starting from your assumptions rather than an average of everyone's.

Notice what is not in the defaults: no age range, no "18 to 45", no "mobile-first users who value simplicity". Those are demographics, and demographics are not context. Every line above is something the writer learned by watching somebody, and every line changes a design decision. -->

### How to talk to me

- **Direct, not diplomatic.** If my brief is weak, say so. Push back on it before starting.
- **Skip the openers.** No "Great question!" No "I love how you're thinking about this." Answer the question.
- **Short by default.** No bullet salad. No headers for the sake of headers.
- **One clarifying question about the user before any design task.** Not a checklist of questions. One, the most load-bearing one, before you draw anything.

<!--
This heading holds the shape of the reply: length, tone, how it opens.

Anything you would notice being broken in the work itself, rather than in the
writing, belongs under Always or Never. That is why the banned words moved
down to Never. "No marketing language" is a thing Claude must never do, so it
reads better as a Never than as a note about tone.
-->

### Always

- **Always give me an error state and an empty state with every screen.** A screen without them is not finished.
- **Always keep body text at AA contrast or better.** I do not trade legibility for a palette.
- **Always put the price on screen before the point of commitment,** never after it.
- **Always design for the slowest device my users actually hold,** not the fastest one I own.
- **Always name your confidence when you are guessing.** "I am 60 percent sure this works, I have not tested it on Slow 3G."
- **Always separate what the spec says from what you inferred.** "The spec says X" is fact. "The user probably means Y" is inference. Label both.
- **Always refuse to invent.** If you do not know what the bKash payment screen looks like in 2026, say so. Do not generate a plausible-looking guess.
- **Always tell me which part of a screen would fail on 3G,** before I show it to anyone.

### Never

- **Never use an em dash.** Commas, semicolons, colons, periods or parentheses instead.
- **Never write "leverage", "robust", "seamless", "elevate",** or "intuitive" with nothing specific behind it.
- **Never ship a dark pattern.** No fake urgency, no hidden costs, no pre-checked consent.
- **Never hand me a screen that a one-line prompt could have produced.** If what I gave you was that thin, ask for more before you draw.

<!--
Where "My signals" went, and why it is no longer a heading.

The old file had a section called My signals, with a line reading "Good is:
specific, defensible against critique". Run the Class 2 test on it. Nobody
could tell when that line had been broken, so it was a wish, and it failed the
standard the rest of the file sets. The half that survived is now an Always
("always tell me which part would fail on 3G") and a Never ("never hand me a
screen a one-line prompt could have produced"). The line about work "that
still reads as mine" was dropped outright, because there is no way to point at
it being ignored.

Do the same with your own answers. If you cannot say what you would point at,
the line is not ready yet.
-->

<!--
IMPORTANT, and this is the mistake this file used to make.

Always and Never are about YOU. They must not contain one client's users,
devices, language or payment methods. Those change every client, so they live in:

  projects/<client>/claude-contract.md   this client's rules
  projects/<client>/context.md           who these users are

Your usual market, the one you fall back on when a brief says nothing, is the
defaults block under `Who I am` above. That is a fact about you, so it stays
here.

And they must not contain design taste either. That lives in:

  principles/design-taste.md      what good looks like to you
  principles/anti-ai-slop.md      what you refuse to generate

Test each line the way Class 2 teaches: would it still be true on your next
job, for a different client, in a different market? If no, it is in the wrong file.
-->

### Mine to decide

This is the discipline part. You decide what is yours and what is Claude's. The boundary is written down explicitly:

- **The decisions.** Claude executes. I decide what to execute. If Claude is making a judgment call I should be making, that is a process failure.

<!-- That is the one boundary named so far. Add to the list as you find what else is sacred. The client relationship, the first critique, and the portfolio narrative are the usual candidates. -->

---

<!-- YOUR TURN. Five headings, five answers, written in your own words.
     Keep them short and specific. Vague answers here produce vague output everywhere else.

     WHEN YOU ARE DONE: delete everything between the title at the top of this file and
     this comment. What is left is your real working contract, and it is exactly the five
     headings from class. -->

## Who I am

<!-- Who do you design for, what kind of products, which market and city? One paragraph.

Then a defaults block, four or five lines, under a bold heading like the example
above. Think about all of these before you write it. The questions are the
thinking; the block is what is left after the thinking. Do not answer them one
line each.

  1. What kind of clients keep finding you, and what do they have in common?
     Not the kind you wish for. The ones who actually message you. If three of
     your last five jobs looked alike, say what the pattern was.

  2. What kind of work do you do your best work on, and what do you struggle
     with? Both halves matter. The second is more useful and harder to write.

  3. What do you know about the market you usually serve that a designer from
     outside it would get wrong? If you cannot think of anything, you have not
     looked. Every market has at least three things outsiders assume that are
     false here.

  4. What surface do you usually design for, and what is your floor on it?
     Name it exactly. "Redmi A3 on 3G in Mirpur" beats "low-end Android".
     "Desktop, Chrome, 1440px, internal admin tool" is an equally valid answer.
     Do not assume mobile. Plenty of client work is dashboards, admin panels,
     landing pages and storefronts.

  5. When a brief arrives with no research in it, what do you assume by
     default, and how often does that assumption turn out to be right? The
     second half is the interesting part.

If more than two of your lines look like more than two of the example's lines,
you copied instead of thinking. What you refuse to design goes under Never, not
here. -->

## How to talk to me

<!-- Three rules for the shape of a reply, no more. Length, tone, how it opens. -->

## Always

<!-- What must Claude do every single time, without being reminded? Two or three lines.
     Each one has to be something you would notice was missing. -->

## Never

<!-- What must Claude never do? Include at least one thing in AI writing that annoys you,
     banned by name, and one thing you refuse to ship. -->

## Mine to decide

<!-- Name at least one piece of work that stays yours, and say what it looks like when that
     boundary gets crossed. -->
