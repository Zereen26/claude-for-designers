---
created: 2026-07-31
type: reference
status: complete
tags: [edubridge, reference, background, story]
project: EduBridge Bangladesh
---

# Background: who these people are and how you ended up here

**Reference, not homework.** Read this once, before the briefs. You do not fill anything in and you do not edit it.

This file exists because you cannot interrogate a brief properly without knowing who sent it, what they are measured on, and what they are not allowed to change. `PRODUCT.md` beside it is written for Claude. This one is written for you.

---

## The company

EduBridge Ltd is a tutoring marketplace, founded in London seven years ago, now about 60 people. Students search for tutors, read verified profiles, send a booking request, and pay in the platform. It works. The UK is profitable and Australia broke even last year.

That is the whole company: one product, two markets, one codebase.

## Why Bangladesh, and why now

The board wants growth that does not come from spending more on UK ads, where they are already paying too much per signup. So the plan for this year is three new markets at once: **Bangladesh, the UAE, and Germany.**

You have Bangladesh. Somebody else has each of the others, and all three of you were given the same instruction.

The reasoning for BD is not stupid: enormous private-tuition demand, a growing middle class, a young population, and English widely used in education. The reasoning is also shallow, because nobody at EduBridge has lived here.

The deadline is the next academic year. That is not a made-up urgency, it is the only moment in the calendar when parents are actively looking for tutors. Miss it and the launch waits a year.

---

## The cast

### Jamie Thornton, Product Lead, London

Your client. Sent the brief. Seven years at EduBridge, ran the Australia launch, which went well and is where most of his confidence comes from.

**What he wants:** three markets live before the academic year, on one codebase, without the product fragmenting.

**What he is measured on:** signups and payment conversion per market, and engineering cost. Both of those matter for what he can say yes to.

**What he genuinely cannot know:** what it is like to pay for something in Bangladesh. He has UK conversion data showing his checkout works at 19%, and Australia at 17%, so when you tell him it will not work here you are arguing against numbers he trusts with an experience he has never had. **He is not ignorant, he is un-lived.** Those need different arguments.

**The thing to understand about him:** "we run one platform" is not stubbornness. Three regional forks really would become three products to maintain. When he resists you, he is protecting something real. Your job is not to prove him wrong, it is to show him the one place where the market makes his default impossible, and what it costs either way.

### Rafi Hossain, PM, Dhaka

Not your client. The person between you and your client, and the reason you know anything useful at all.

Local, knows the market, and communicates in fragments over WhatsApp at 7pm because he is on calls all day and firefighting the rest of the time. Everything he tells you is correct and almost none of it is written down anywhere official.

**What he wants:** the launch not to be embarrassing, and not to be the person who has to explain to Dhaka why the product asks for a card.

**What he cannot do:** change the brief. He has told you several times that "the client agrees but didn't update the brief," and that gap is yours to close, not his.

**Why he matters to you:** his messages are the only place the real constraints appear. Treat that thread as primary source material, not as noise.

### You

The agency, or the freelancer. You were on a call last week and the brief arrived a few days later.

You are the only person on this project who has actually paid for something with bKash, waited for an OTP, and retyped a transaction ID with the app still open in the background. **That is your entire value here, and it is worth more than your Figma skills on this particular job.**

---

## What happened before the brief reached you

1. The board approved three simultaneous market launches.
2. Jamie's team wrote one brief and adapted it lightly per market. Yours still carries UK assumptions, including desktop-first, which is why it argues with itself.
3. There was a call. You were on it. Mobile came up **after** you dropped off, so it is a hard requirement that does not appear in the document.
4. Jamie's team sent brand guidelines, then sent updated ones the next morning with a different green.
5. Somebody showed the client Preply, and video calling entered the conversation.
6. Rafi's internal sync surfaced the payment problem, the real users being parents, and the Bengali question. None of it reached the brief.

So by the time you read the brief, it is already out of date, and the corrections live in a WhatsApp thread. This is normal. It is what most briefs look like when they reach a local team.

---

## What is locked, and what is actually open

Getting this wrong wastes your interrogation on things nobody can change. Ask about the open column.

| Locked, and why | Open, and yours to decide |
|---|---|
| One codebase across five markets. Real engineering cost. | The **shape** of the payment flow here, if you can show why |
| The academic-year deadline. Calendar, not preference. | Who the flow is designed around: student or parent |
| Brand navy and green. Guidelines exist. | How trust is expressed on screen, and where |
| Card checkout stays for the markets it works in | Whether BD needs a second path, and which |
| Three weeks and 3 lakhs, unless renegotiated | What fits in three weeks, and what does not |

The last row is the one students miss. The budget is locked **until you make a case**, and making that case is part of the job. It is not the same as being fixed.

---

## The commercial frame

**3 lakhs BDT for the full design sprint. Roughly three weeks of your time. The client believes that covers everything, including revisions.**

Nobody has said how many revision rounds. Nobody has said who signs off, Jamie or his manager. Video calling arrived after the number was agreed. Bengali may or may not be in scope depending on which of two people you believe.

None of that is a design problem, and all of it decides whether this project is worth doing. It goes in `engagement.md`.

---

## How this file is used in the course

- **Class 2:** you read it, and it is where `engagement.md` gets introduced as an idea.
- **Class 3:** you interrogate the briefs against it. The locked-versus-open table is what stops you asking Jamie for things he cannot give.
- **Classes 7 and 8:** the cast and the constraints are what make your case study and your interview answers specific. "I disagreed with a stakeholder" is weak. "I had to argue against a client's own conversion data using an experience he had never had" is the answer that gets remembered.
