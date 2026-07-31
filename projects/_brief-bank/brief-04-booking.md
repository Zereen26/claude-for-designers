---
created: 2026-07-31
type: brief
status: complete
tags: [brief-bank, booking, marketplace, gulf, rtl]
---

# Brief 4: home services booking app

**Composite. Not a real client.** Practice brief. Read it, do not edit it.

**Posted:** direct message from a returning client
**Budget:** "same as last time"
**Timeline:** 3 weeks

---

Hey, we have another project for you.

We are building a home services booking app for the UAE market. Think cleaning, AC servicing, handyman. Users book a slot, a vetted worker arrives, they pay in the app.

**What we need:** the booking flow. Service selection, time slot, address, payment, confirmation. Mobile app, iOS and Android, but design it once and we will adapt.

**Users:** residents in Dubai and Abu Dhabi. Mix of expats and locals. Fairly affluent, used to good apps, high expectations. They will uninstall if it feels cheap.

Arabic and English both needed.

Payment: cards mostly, plus Apple Pay. Some users will want cash on delivery.

We want it to feel premium. Reference: Careem, Talabat.

You know how we work, so just get started and send me something in a few days.

---

## Notes for the student

<details>
<summary>What is actually going on here (open after you try)</summary>

**This one looks like EduBridge and is not, in almost every dimension. That is why it is here.**

- **Arabic means RTL, and RTL is not a translation task.** The entire layout mirrors: navigation, icons with direction, progress indicators, form alignment, even which side the back arrow lives on. Numbers and currency usually stay left-to-right inside mirrored text. If you design in English and "add Arabic later", you will rebuild it. This is the highest-value thing you know that a cheaper bidder does not, and it belongs in your proposal's first paragraph.
- **Cash on delivery breaks the flow's shape**, and it is buried in one line. If cash is an option, the confirmation screen is no longer the end: the worker needs a mark-as-paid step, the user needs a receipt, and there is a dispute state nobody mentioned. Same lesson as mobile money in EduBridge, arriving in a different costume.
- **"Fairly affluent, high expectations, will uninstall if it feels cheap" is a genuinely different trust problem** from EduBridge's. There, trust had to be *earned* before money moved, with verification badges and qualifications. Here it is assumed on arrival and can only be *lost*, by slowness, jank or a cheap-looking detail. Opposite design consequence from a similar-sounding sentence.
- **"Design it once and we will adapt" for iOS and Android** means somebody is deciding platform conventions, and if it is not you it will be a developer at 11pm. Name it.
- **"Same as last time" and "just get started"** is the trap. A returning client with no written scope is how three weeks becomes six with no way to say no. This is exactly what `engagement.md` is for, and it is *harder* to ask a client you have a relationship with. Ask anyway.
- **What is missing:** who the worker is. Half of this product is a second app for the person who shows up, and the brief never mentions it.
</details>
