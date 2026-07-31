---
created: 2026-07-27
type: reference
status: complete
tags: [edubridge, reference, product-context]
project: EduBridge Bangladesh
---

# Product

**Reference, not homework.** This is the standing product context for EduBridge: who the users are, what the product is for, how the brand behaves, and the design principles that hold across every screen. Claude reads it on every task in this folder, which is why it is written for Claude and not for a slide.

You read this file. You do not fill it in. Nothing here is an assignment. The files you fill in are `claude-contract.md` (Class 2), `brief-v3-interrogated.md` and `engagement.md` (Class 3), `critique-notes.md` (Class 4), `tokens.md` (Class 5) and `my-booking-screen.html` (Class 6, a new file you create; `booking-screen.html` beside it is read-only reference).

Two companion files sit beside this one and do different jobs. `BACKGROUND.md` is the story, written for you: the company, the cast, what is locked and what is open. `context.md` is the filled user context for this client. This file is the standing product context, written for Claude.

When you swap EduBridge for a real product of your own from Class 4 onward, this is the file you rewrite first, because everything downstream reads it.

## Register

product

## Users

Primary: students aged 14-22 in Bangladesh preparing for SSC, HSC, or university entrance exams, searching for tutors by subject, location, and price. Secondary: parents making the booking and payment decision on behalf of younger students, often on a sub-15K taka Android device over 3G/4G, evening hours, wary of being scammed by an unverified tutor.

Job to be done: go from "I need a tutor for this subject" to a sent booking request they trust enough to pay for, in a single mobile session, without needing to trust a stranger's word for their qualifications.

## Product Purpose

EduBridge BD is one of three simultaneous market launches (Bangladesh, the UAE, Germany) of an existing UK/Australia tutoring marketplace: search tutors, view verified profiles, send a booking request, pay in-platform. One codebase serves every market, which is why the client resists forking anything and why any localisation has to be argued for rather than assumed. MVP scope is search, tutor profile, booking request, and payment. Success is measured in signups and conversion (100 tutor signups in 30 days, 500 student searches, >15% payment conversion), which means every screen has to carry its own weight toward "will a wary parent actually complete this booking."

## Brand Personality

Clean, trustworthy, modern (the client's own words), "LinkedIn meets Airbnb." Confidence without slickness: this is a marketplace where the product has to visibly earn trust (verification, qualifications, reviews) before it asks for money, not a lifestyle brand selling a feeling.

## Anti-references

Generic fintech/SaaS cliches: cream/sand body backgrounds, hero-metric tiles, gradient text, tiny uppercase eyebrows, numbered-step scaffolding by reflex. Nothing EduBridge-specific beyond Impeccable's standard bans. The brief's own "LinkedIn meets Airbnb" is the actual reference, not a category default.

## Design Principles

- Trust is the primary conversion lever, not aesthetics. Verification and qualifications outrank visual polish on every screen in this flow.
- Design for the sub-15K taka Android on 3G/4G first. Desktop-responsive is secondary despite the brief's "desktop-first" framing. The real target user is the parent on a slow evening connection.
- One task per screen. Search, profile, booking request, and payment are distinct decisions; don't collapse them to save screens.
- Show the human, not the vendor. "Send Booking Request" reads as reaching a person; anything that reads as a vending-machine transaction undermines trust.
- English MVP, Bengali-ready. Don't hardcode string lengths or layouts that would break under Bengali text later.
- **Payment is a multi-screen path, not a button.** Two paths are needed: a card gateway (SSLCOMMERZ) for the minority who have cards, and mobile money (bKash, Nagad) for everyone else. The mobile-money path leaves the site: app switch, PIN, OTP, a transaction ID typed back in by hand, then asynchronous verification. Design the extra screens and the five error states that go with them (wrong TrxID, expired OTP, insufficient balance, duplicate payment, timeout). A single instant card screen is the UK flow and it does not transfer.

## Accessibility & Inclusion

WCAG AA minimum. Given the low-end Android / 3G context and an older parent-user segment: body text contrast held to AA (4.5:1) even under bright outdoor screen glare conditions, no interaction gated on hover-only affordances, tap targets sized for imprecise touch on cheap screens.
