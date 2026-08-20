---
created: 2026-07-27
updated: 2026-08-20
type: reference
status: complete
class: 2
tags: [ostad, batch-03, workbook, edubridge, claude-contract, student-editable]
project: EduBridge Bangladesh
---

# Your Project Contract for EduBridge

**What this file is for:** it records what is true about this client, once, so Claude stops designing for a generic marketplace and starts designing for EduBridge.

**Why Claude needs it:** the root contract tells Claude who you are. Nothing in it tells Claude who this client is, what their users can afford, or what their decision-maker will reject on sight. That is this file.

**Which class:** Class 2, The Working Agreement. This is the second of the two copies you bring back. The root copy is at `principles/claude-contract.md`.

<!--
COURSE NOTE for the student. This is not an instruction to Claude.

Two files, same name, different jobs. Read this and then check yourself against it, because getting the split wrong is the most common mistake in this course.

`principles/claude-contract.md` at root holds what is true about YOU: your voice, your working style, your quality bar, what you refuse to delegate. It survives this client. You take it to your next job unchanged.

`projects/edubridge/claude-contract.md`, this file, holds what is true about THIS CLIENT: who they are, who their users are, what is already settled, what they reject on sight, and what finished looks like. When EduBridge ends, this file dies with it.

The test is one question. Would it still be true on your next job? Then it belongs at root, not here. "I refuse to hand over the first critique" is you. "The green is #00A651 because Jamie's team changed it" is EduBridge.

Five headings, and they are the five you saw in class:

  Who this client is    who is paying, who decides, how they work
  Who their users are   the person who pays and the person who uses
  Already settled       decisions Claude does not reopen
  Never here            what this client rejects on sight
  Done means            one sentence for finished

Same test as the root file. Every line has to be a thing Claude must do, or a
thing it must never do here. A line you would not notice being ignored is a
wish, and a wish cannot be broken.

`Never` is the only heading that appears in both files, and it says different
things in each. At root it is what you refuse for anyone. Here it is what this
client rejects. `Done means` has no twin at root at all, because done belongs
to a project, never to a career.

Everything under the EXAMPLE heading is the instructor's filled version. It shows shape and level of specificity. It is not yours and it is not meant to be kept.
-->

---

## EXAMPLE: the instructor's filled project contract (EduBridge)

<!-- Read it, then replace all of it with your own answers from YOUR TURN. -->

### Who this client is

EduBridge Ltd is a tutoring marketplace that already runs in the UK and Australia and is launching a Bangladesh version. The brief comes from Jamie Thornton, Product Lead, in London. The day-to-day contact is Rafi Hossain, PM, in Dhaka. Budget is 3 lakh taka for a three-week design sprint. They want to be live before the next academic year.

<!-- Why this paragraph matters: it tells Claude who is paying, who is deciding, and how much runway there is. A three-week sprint on a fixed budget is a different design problem from an open-ended one, and Claude cannot infer that. -->

Who decides, and how each one works:

- **Jamie (London, Product Lead)** writes documents and is confident in them. He does not know the BD market. Push back in writing, with a reason he can forward to his manager.
- **Rafi (Dhaka, PM)** works over WhatsApp, at night, in fragments, and forgets to tell you things. Assume every requirement he sends is real and undocumented. Get it into this file the same day.
- **Jamie's manager** is the invisible third party. "Strongly preferred" from him outranks "optional" from Jamie.

What actually moves them:

- **Jamie will take being told the brief is wrong** on the checkout and on desktop-first, if you show what breaks and what it costs. He has UK conversion data he trusts, so an assertion will not move him. A screen count and an error-state list will. Rafi already agrees on both.
- **Both will take scope being named and cut in writing.** Video calling arrived from a Preply demo, not from a user need.

<!-- Note what this section is doing. It is not gossip. Claude drafts your pushback email and your handoff notes, and it writes a different email for a confident document-writer in London than for a PM on WhatsApp in Dhaka. -->

### Who their users are

The brief says students aged 14 to 22 are primary. The PM thread says parents are the real decision-makers. Parents win, and that is a decision, not a compromise.

- **The person who pays:** a parent, usually on a sub-15,000 taka Android over 3G or 4G, in the evening, wary of paying a stranger for tuition.
- **The person who searches:** a student preparing for SSC, HSC or university entrance, looking by subject, location and price.
- **The job to be done:** get from "I need a tutor for this subject" to a booking request they trust enough to pay for, in one mobile session.

### Already settled

Claude does not reopen any of these. Some came from the client, some came from the market, and in a working session you cite them the same way, so they sit in one list.

- **Parents are the primary user.** The brief says students. The PM thread says parents pay. Parents win.
- **Payment here is a different flow shape, not a different button.** Cards exist via SSLCOMMERZ but most users do not have one, so both paths are needed: SSLCOMMERZ for the card minority, bKash or Nagad for everyone else. The mobile-money path leaves the site, needs an app switch, a PIN, an OTP and a hand-typed transaction ID, then waits for async verification. That is three or four extra screens and at least five error states the brief never mentions. Design it as a multi-screen path, never as one card screen with a new logo.
- **Mobile is the product, not a responsive afterthought.** The brief says desktop-first. Design the phone screen first, sub-15K taka Android, 3G floor, and treat desktop as the adaptation.
- **The green is `#00A651`,** from the updated brand guidelines, not the `#1DB954` in the brief. Navy is `#0A2540`.
- **Bengali is coming.** English MVP is fine, but no hardcoded string lengths and no layouts that break when the text gets longer.
- **Verification is visible on the profile.** The client's own words: trust is the main thing. A badge is the minimum.
- **One task per screen.** Search, profile, booking request and payment stay separate.
- **Video calling is out of the MVP,** and the reason is written in `brief-v3-interrogated.md`.

<!--
This list is the answer to "why did Claude change my payment method halfway
through the project." Because you never wrote it down.

The old file split this in two, market constraints in one section and client
decisions in another. In practice you never cite them differently, so they are
one heading now. If you want to keep track of where a line came from, put the
source in the line.
-->

### Never here

- **Never drop payment from the MVP.** Payment conversion above 15 percent is one of their three success metrics.
- **Never redesign their brand.** The colors are set. Argue about usage, not about the palette.
- **Never let the timeline slip without flagging it early.** Three weeks was decided before you were asked.

<!--
Two files have a Never heading, and they hold different things.

Root Never is what you refuse for any client: dark patterns, em dashes,
marketing words. It travels.

Never here is what THIS client rejects on sight. It dies with the project.
Same one-question test decides which file a line goes in: would it still be
true on your next job?
-->

### Done means

A parent can complete a booking and pay for it on a 15,000 taka Android, over evening 4G, without phoning the tutor first.

<!--
One sentence, and it has to be testable on a device someone in the room owns.

This heading has no twin in the root file. Done belongs to a project, not to a
career, so writing it at root would be writing it about nothing.

"Launch the MVP" is not a Done means. It names a date, not a thing a user did.
-->

---

<!-- YOUR TURN. Five headings, five answers, about your own client, or about EduBridge if
     you are using the course project. Keep them short and specific.

     One test for every line you write: would it still be true on your next job, for a
     different client? If yes, it is in the wrong file. Move it to the root contract.

     WHEN YOU ARE DONE: delete everything between the title at the top of this file and
     this comment. What is left is your real project contract. -->

## Who this client is

<!-- What do they sell, who is asking for the work, who is your day-to-day contact, what is
     the budget and deadline? Then name each decision-maker, how their requirements reach
     you, and what moves them. -->

## Who their users are

<!-- Name the person who pays and the person who uses, separately, and say which one wins
     when they conflict. -->

## Already settled

<!-- What does Claude not get to reopen? Include the market constraints this client keeps
     getting wrong: payment, device, connection, language. -->

## Never here

<!-- What will this client reject on sight? At least two, concrete. Include the one thing you
     already know they are wrong about. -->

## Done means

<!-- One sentence. What can a real user do, on a real device, when this project is finished? -->
