---
created: 2026-07-27
type: brief
status: complete
tags: [edubridge, class-3, reference, brief]
project: EduBridge Bangladesh
brief-version: "1: client"
source: Jamie Thornton, Product Lead, EduBridge Ltd
received: 10:42 AM London time
---

# EduBridge BD: Design Brief v1.0

**Reference, not homework.** This is the brief as the client sent it. You read it, you do not edit it. It is polished, confident, and wrong in several places, which is exactly why it is here. Your work for Class 3 goes in `brief-v3-interrogated.md`.

**From:** Jamie Thornton, Product Lead, EduBridge Ltd
**To:** [Your agency]
**Subject:** EduBridge BD: Design Brief v1.0

---

Hi team,

Thanks for jumping on the call last week. Attaching the design brief for EduBridge Bangladesh. Excited to move fast on this: we want to be live before the next academic year.

**Project overview**

EduBridge is a tutoring marketplace connecting students with qualified tutors. The platform already operates in the UK and Australia, and this year we are opening three new markets at once: **Bangladesh, the UAE, and Germany**. You have Bangladesh. The BD market is a natural fit given the high demand for private tuition and the growing middle class.

One thing to flag up front, because it shapes everything else. We run **one platform across all markets**. Three regional forks would triple our engineering cost and we would be maintaining three products by Christmas, so the default answer to "can we do it differently in this market" is no, unless you can show me why the market makes it impossible. That is not me being difficult, it is the only way five markets stay shippable with the team we have.

**What we are building**

A web platform where:
- Students and parents can search for tutors by subject, location, and price
- Tutors can create verified profiles with qualifications and reviews
- Payments are handled in-platform. Our existing checkout is card-based (Stripe) and it is live in the UK and Australia; we are extending the same flow to all three new markets

MVP scope: search, tutor profile, booking request, and payment.

**Target audience**

- Primary: students aged 14-22 preparing for SSC, HSC, or university entrance exams
- Secondary: parents making decisions on behalf of younger students

**Design requirements**

- Clean, trustworthy, modern. Think LinkedIn meets Airbnb.
- Desktop-first. Mobile responsive is good to have.
- Language: English. We may add Bengali later but not for MVP.
- Our brand colors are navy `#0A2540` and green `#1DB954`. White backgrounds. Use these.
- **Keep it consistent with the existing product.** A user who has seen EduBridge UK should recognise EduBridge BD. Same components, same checkout, same patterns. Germany and the UAE are getting the same instruction.

**Success metrics**

100 tutor signups in the first 30 days. 500 student searches. Payment conversion above 15%.

For reference, UK payment conversion sits at 19% and Australia at 17% on this same checkout, so 15% felt conservative.

Let me know if you have questions. Happy to jump on another call.

Jamie

---

## How this file is used in the course

- **Class 3:** you read this and `brief-v2-pm-thread.md` together, then run `/design-brief` over both. Your decisions land in `brief-v3-interrogated.md`.
- **Classes 4 to 6:** this stays as the record of the original ask. `brief-v3-interrogated.md` is the brief you actually design from.
