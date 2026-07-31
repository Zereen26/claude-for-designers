---
created: 2026-07-31
type: workbook
status: complete
tags: [ostad, career-vault, class-07, proposal, bidding, scope]
---

# The Proposal

**What this file is for:** the thing you send when you want the job. On a marketplace it is a bid. In an agency it is the scoping document somebody senior would otherwise write for you.

**Why Claude needs it:** because the proposal is assembled from work you already did. Your positioning, your case study, and the scope thinking from `engagement.md` are the raw material. This file is where they get pointed at one specific client.

**Which class:** Class 7. You are not learning a new skill here. You are repackaging four things you already have.

<!--
COURSE NOTE for the student. This is not an instruction to Claude.

Do not write this from scratch and do not let Claude write it for you.
Almost every line already exists somewhere in your workspace:

  who you help, what you solve      -> career-vault/01-positioning.md
  proof you can do it               -> career-vault/02-portfolio-story.md
  what is in and out, revisions     -> projects/<client>/engagement.md
  what you know they do not         -> projects/<client>/context.md

If those four are honest, this file is an hour of editing, not a day of writing.
-->

---

## Why most proposals lose

Not because the price is wrong. Because they are about the person writing them.

Read the two openings below. Same designer, same experience, same rate.

**Loses:**

> Hi, I'm a UI/UX designer with 4+ years of experience in Figma, Adobe XD and Sketch. I'm passionate about creating beautiful, user-centered designs that delight users. I have worked with startups and enterprises across many industries. I would love the opportunity to work on your project. Please check my portfolio. Looking forward to hearing from you.

**Wins:**

> Your brief says desktop-first and payment by card. If your users are in Bangladesh, both of those will cost you conversion, and the second one will cost you a rebuild. I have shipped this exact flow in this exact market. Three things I would want to settle before quoting: who signs off, whether the payment path can be more than one screen, and whether Bengali is in scope. Happy to walk through what I would change and why.

The second one is shorter and it does something the first cannot: **it demonstrates the work instead of describing the worker.** It also disqualifies itself from clients who do not want a designer with opinions, which is a feature.

You have exactly one advantage over a cheaper bidder in another country: you know something about this market that they do not. Lead with it or you are competing on price.

---

## EXAMPLE: the EduBridge proposal

Filled from the workspace. Notice how little of it is new writing.

### 1. The observation

> Your brief targets Bangladesh with a desktop-first design and a card checkout. Both of those are UK assumptions. Here, the parent pays, not the student, and most parents pay with bKash, which is not a card form with a different logo on it: it leaves your site, switches app, needs a PIN and an OTP, and comes back with a transaction ID the user types in by hand.

One paragraph, and it has already proved more market knowledge than a portfolio link would.

### 2. What I would do

> Four screens to high fidelity, mobile, with the states named: search results, tutor profile, booking request, payment. A tokenised Figma file your developer can receive without a handover call. One working HTML prototype of the booking flow so you can click it on a phone before anyone writes production code.

Deliverables. Not "UX design", not "wireframes and iterations".

### 3. What is not included

> Video calling, Bengali translation, tutor-side onboarding, and the full card-payment error handling. Any of those can be added; each gets its own estimate before it starts.

**Do not skip this section.** It is the one that protects you, and it makes you look more senior, not less accommodating.

### 4. How we work

> Two revision rounds per screen. A round is one consolidated set of comments delivered once, not messages across three days. One named approver. New scope gets a written estimate before work begins.

Straight out of `engagement.md`.

### 5. Why me

> I have designed a mobile-money checkout for this market, including the error states most briefs forget: wrong transaction ID, expired OTP, insufficient balance, duplicate payment, timeout. Case study here: [link]. I will also tell you when I think your brief is wrong, which is what you are actually paying for.

Three sentences. One piece of evidence, one link, one promise about how you behave.

### 6. Price and time

> [Amount] for the scope in section 2. Three weeks from brief sign-off. Payment in two parts: half at start, half at delivery.

No apology, no justification paragraph, no hedging. The scope section is the justification.

---

## Rate: how to answer "why so much?"

You do not defend a rate by listing your years or your software. You defend it by naming what the cheap option costs.

Three lines that work, in ascending order of confidence:

1. **The rework line.** "The card-only checkout would have looked finished and then failed on launch. Finding that in week one costs you three days. Finding it in production costs you the launch window."
2. **The scope line.** "This price is for a defined scope with two revision rounds. Cheaper quotes are usually for an undefined scope, which is where projects go to die."
3. **The judgment line.** "You can get screens drawn for less. What you are paying me for is the part where I tell you the brief is wrong before you build it."

And the one thing not to do: **never discount without removing scope.** If the price moves, something leaves section 2. Otherwise you have taught the client that your first number was invented.

---

## YOUR TURN

<!-- Pull from your own files. If you find yourself writing something new, check whether it already exists in 01-positioning.md, 02-portfolio-story.md, or your client's engagement.md. -->

Write this for one real client. A live listing you could bid on, a client you already have, or the last brief that came your way. Not a hypothetical.

### 1. What is your observation?

One paragraph about **their** brief or **their** product, naming something they got wrong or did not know. This is the hardest part and the only part that matters. If you cannot find anything, you have not read their material properly yet.

### 2. What would you do?

Named deliverables with numbers on them. Read it back and ask whether a client could tell when you are finished. If not, rewrite it.

### 3. What is explicitly not included?

At least three things. Pull them from your `engagement.md`. If you cannot name three, you have not thought about scope, you have agreed to everything.

### 4. How you work

Revision rounds, what counts as one, who approves, what happens with new scope. Four lines.

### 5. Why you

Three sentences maximum. One piece of real evidence, one link, one promise about behaviour. Delete every adjective about yourself.

### 6. Price and time

A number and a duration, with no apology attached. Then write the one sentence you will say when they ask why.

---

## Self-check before you send

1. Does my first paragraph talk about them, or about me?
2. Could a client tell from section 2 exactly when I am finished?
3. Did I name at least three things that are out of scope?
4. Is there a single adjective describing myself that I could delete? Delete it.
5. Would this proposal make sense to a client who has never heard of Claude? It should. **You are selling judgment, not tooling.**

That last one catches the most common mistake in this room. The AI is how you work, not what you sell.

<!-- DELETE EVERYTHING ABOVE YOUR TURN once your proposal is written.
     Claude reads this file on every task at this level. Teaching text
     left here costs you usage on every call and buries your own words. -->
