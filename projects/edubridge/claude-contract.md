---
created: 2026-07-27
type: reference
status: complete
class: 2
tags: [ostad, batch-02, workbook, edubridge, claude-contract, student-editable]
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

`projects/edubridge/claude-contract.md`, this file, holds what is true about THIS CLIENT: who they are, who their users actually are, the market constraints, what they will and will not accept, and how the decision-maker works. When EduBridge ends, this file dies with it.

The test is one question. Would it still be true on your next job? Then it belongs at root, not here. "I refuse to hand over the first critique" is you. "The green is #00A651 because Jamie's team changed it" is EduBridge.

Everything under the EXAMPLE heading is the instructor's filled version. It shows shape and level of specificity. It is not yours and it is not meant to be kept.
-->

---

## EXAMPLE: the instructor's filled project contract (EduBridge)

<!-- Read it, then replace all of it with your own answers from YOUR TURN. -->

### Who this client is, in one paragraph

EduBridge Ltd is a tutoring marketplace that already runs in the UK and Australia and is launching a Bangladesh version. The brief comes from Jamie Thornton, Product Lead, in London. The day-to-day contact is Rafi Hossain, PM, in Dhaka. Budget is 3 lakh taka for a three-week design sprint. They want to be live before the next academic year.

<!-- Why this paragraph matters: it tells Claude who is paying, who is deciding, and how much runway there is. A three-week sprint on a fixed budget is a different design problem from an open-ended one, and Claude cannot infer that. -->

### Who their users actually are

The brief says students aged 14 to 22 are primary. The PM thread says parents are the real decision-makers. Parents win, and that is a decision, not a compromise.

- **The person who pays:** a parent, usually on a sub-15,000 taka Android over 3G or 4G, in the evening, wary of paying a stranger for tuition.
- **The person who searches:** a student preparing for SSC, HSC or university entrance, looking by subject, location and price.
- **The job to be done:** get from "I need a tutor for this subject" to a booking request they trust enough to pay for, in one mobile session.

### The market constraints that are not negotiable

These come from the market, not from the client, which is why the client keeps getting them wrong.

- **Payment here is a different flow shape, not a different button.** Cards exist via SSLCOMMERZ but most users do not have one, so realistically both paths are needed: SSLCOMMERZ for the card minority, bKash or Nagad for everyone else. The mobile-money path leaves the site, needs an app switch, a PIN, an OTP and a hand-typed transaction ID, then waits for async verification. That is three or four extra screens and at least five error states the brief never mentions. The brief assumes one instant card screen because that is what works in the UK.
- **Mobile is the product, not a responsive afterthought.** The brief says desktop-first. Design the phone screen first and treat desktop as the adaptation.
- **The green is `#00A651`,** from the updated brand guidelines, not the `#1DB954` in the brief. Navy is `#0A2540`.
- **Bengali is coming.** English MVP is fine, but no hardcoded string lengths and no layouts that break when the text gets longer.
- **Verification has to be visible.** The client's own words: trust is the main thing. A badge on the profile is the minimum.

### What this client will and will not accept

- **Will accept:** being told the brief is wrong on the checkout and on desktop-first, if you show what breaks and what it costs. Jamie has UK conversion data he trusts, so an assertion will not move him; a screen count and an error-state list will. Rafi already agrees on both.
- **Will accept:** scope being named and cut in writing. Video calling arrived from a Preply demo, not from a user need.
- **Will not accept:** a design that drops payment from the MVP. Payment conversion above 15 percent is one of their three success metrics.
- **Will not accept:** a redesign of their brand. The colors are set. Argue about usage, not about the palette.
- **Will not accept:** a timeline slip without a flag early. Three weeks was decided before you were asked.

### How the decision-maker works

- **Jamie (London, Product Lead)** writes documents and is confident in them. He does not know the BD market. Push back in writing, with a reason he can forward to his manager.
- **Rafi (Dhaka, PM)** works over WhatsApp, at night, in fragments, and forgets to tell you things. Assume every requirement he sends is real and undocumented. Get it into this file the same day.
- **Jamie's manager** is the invisible third party. "Strongly preferred" from him outranks "optional" from Jamie.

<!-- Note what this section is doing. It is not gossip. Claude drafts your pushback email and your handoff notes, and it writes a different email for a confident document-writer in London than for a PM on WhatsApp in Dhaka. -->

### What is decided, and does not get reopened every session

- Parents are the primary user.
- Mobile-first, sub-15K taka Android, 3G floor.
- bKash or Nagad for most users, SSLCOMMERZ for the card minority. Design the mobile-money flow as a multi-screen path, never as one card screen with a new logo.
- One task per screen. Search, profile, booking request and payment stay separate.
- Video calling is out of the MVP and the reason is written in `brief-v3-interrogated.md`.

<!-- This list is the answer to "why did Claude change my payment method halfway through the project." Because you never wrote it down. -->

---

## YOUR TURN

<!-- Answer each question in the space under it, about your own client or about EduBridge if you are using the course project. Keep the answers short and specific. If an answer would still be true on your next job, it is in the wrong file; move it to the root contract. -->

**1. Who is this client, in one paragraph?** What do they sell, who is asking for the work, who is your day-to-day contact, and what is the budget and deadline?


**2. Who are their users actually?** Name the person who pays and the person who uses, separately, and say which one wins when they conflict.


**3. What market constraints does this client keep getting wrong?** Payment, device, connection, language, anything the brief assumes that does not hold here.


**4. What will this client accept, and what will they reject on sight?** Two of each, concrete. Include the one thing you already know they are wrong about.


**5. Who decides, and how do they work?** Name each decision-maker, how the requirements reach you, and what Claude should assume when it drafts something for them.


<!-- COURSE SCAFFOLDING: delete everything above YOUR TURN once you have filled it in. This becomes your real working file. -->
