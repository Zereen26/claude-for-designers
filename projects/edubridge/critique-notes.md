---
project: EduBridge Bangladesh
status: complete
---

# EduBridge BD: Critique Notes (Class 4 output)

In Class 4 you generate a first-pass screen from the PM brief (the confused one). Then you critique it using the three forced-perspective prompts. Capture the output here.

The point of this file is to teach you that "what do you think" is a useless question, and that engineered critique surfaces real problems. Keep this file alive. Add to it whenever you critique any screen, not just EduBridge.

---

## Screen being critiqued

Booking request screen for EduBridge BD. Three different layout approaches were built in Figma for the same flow (Search, Tutor Profile, Booking Request, Payment), each shown as a mobile screen sized for Android 13.

- **Approach A, Low Friction:** Tutor name, subject, a single "Verified Tutor" badge, price, time, one CTA. Minimal fields.
- **Approach B2, Trust First:** Tutor profile, rating, a bio, language tags, a verification table naming three specific checks (NID Verification, Qualification Certificate, Background Check), a session counter, date and time, total cost, then the CTA.
- **Approach C, Order Summary:** Tutor profile, a step indicator, a cost breakdown table (subtotal, discount, total), a small verified tag below the pricing, then the CTA.

## Perspective 1: confused user on a 3G phone

```
You are a first-time user, age 35, on a sub-15K taka Android, 3G
connection, in Bangladesh. You opened this screen because someone
sent you a link. Tell me in three sentences what you think this
screen is asking you to do, and where you got confused. Do not be
polite.
```

**Approach A:** This screen shows a tutor named Rahim Uddin for Physics, a price of 500 taka an hour, and a green "Verified Tutor" tag. It does not say what was verified, so I do not know if the tag is real or just decoration. The large empty space before the button makes it look like the page did not load properly.

**Approach B2:** This screen has a photo, a bio, language tags, three verification lines, a plus and minus counter, and a date and time. By the time I reach the button, I have forgotten what I am confirming. The "Sessions" counter confused me because I thought I was requesting one booking, not several sessions in advance. I do trust "NID Verification" and "Background Check" written out more than just the word "Verified."

**Approach C:** The discount and total cost are clear. Five hundred taka minus fifty equals four hundred fifty, the clearest pricing of the three. But the "Verified Tutor" text sits below the price breakdown, small and easy to miss. Before sending my child to a stranger, I want trust information before the price, not after it.

## Perspective 2: engineer who has to ship this in 10 days

```
You are an engineer who has to ship this in 10 days. List three
things in this design that will be expensive to build and explain
why, in code terms. Be specific about which CSS or interaction is hard.
```

**Approach A:** The "Verified Tutor" badge is a static label with no real data behind it, and needs to be connected to an actual verification field before shipping. The empty space between the time and the button comes from a flexible spacer, and on a real device this needs a minimum height or the button will sit awkwardly on different screen sizes. The single time slot is shown as plain text, not a selectable control, so this section has to be rebuilt if multiple time options are needed.

**Approach B2:** The session stepper needs real state management, a minimum and maximum limit, and a price that updates when the count changes. The bio box uses auto height, so a longer real bio will push the button further down and needs testing with real content. There are three separate cards on this screen, each with its own background and corner radius, which means more spacing bugs to catch on smaller screens.

**Approach C:** The discount line implies a promotion system that is not scoped anywhere in this brief. The step indicator is static text right now, and a real version needs to track actual flow state or it will fall out of sync when the flow changes. This layout is the simplest of the three to build: one card, six label and value rows, no custom controls.

## Perspective 3: skeptical PM who has killed 20 launches

```
You are a skeptical PM who has killed 20 launches. Write three
reasons this design will fail in production. Each reason must
reference a real user behavior, not aesthetics.
```

**Approach A:** There is no loading state on the button, so a user on 3G may tap it twice and create duplicate requests. The price only shows "per hour" with no confirmation of whether this is one session or a recurring plan, which can cause billing confusion later. The trust signal is a single word, "Verified," with no explanation, and the brief says trust is the main thing for this client.

**Approach B2:** This screen has a session quantity stepper on a booking request screen, before the tutor has even accepted the request. A parent could request five sessions before knowing if the tutor is available for any of them. This is the heaviest of the three screens in content, and on 3G that means more load time and a higher chance someone leaves before reaching the button. That said, this is the only screen that names three specific trust checks instead of a generic badge.

**Approach C:** Showing a discount before confirming a discount program exists is risky. If this ships without real discount logic behind it, a parent could screenshot the page and hold the platform to a price it cannot support. Putting "Verified Tutor" below the price table means this design treats cost as more important than trust, but the brief and the PM thread both say trust is the main blocker for this audience.

## My synthesis

**Approach B2 wins.** The client brief and the PM thread both say trust is the main thing for this audience, and B2 is the only approach that names three specific verification checks (NID Verification, Qualification Certificate, Background Check) instead of one generic badge. Approach A reduces trust to a single word, "Verified," with no explanation behind it. Approach C pushes the verification signal below the price breakdown, which puts cost ahead of trust when the brief says the opposite should be true.

B2 has one real problem that needs fixing regardless of it winning: the session quantity stepper sits on a booking request screen, before the tutor has accepted anything. A parent should not be asked how many sessions they want before knowing the tutor is even available. This needs to be removed from this screen, or moved to a later screen, after the tutor confirms.

Priority changes for B2 before it moves forward:
1. Remove the session quantity stepper from the booking request screen. Session count belongs after the tutor accepts, not before.
2. Keep all three named verification checks (NID Verification, Qualification Certificate, Background Check). This is the strongest trust signal across all three approaches and directly answers the brief.
3. Watch the content weight on 3G. Test load time with the bio, verification card, and session card all present, and cut anything that is not essential if it is too heavy.

**Why the other two lost:**
- **Approach A** loses because its only trust signal is the word "Verified" with no explanation, which does not meet the bar the brief sets for this audience. Its empty middle section also reads as an unfinished or broken page rather than a deliberate layout.
- **Approach C** loses because it treats price transparency as more important than trust, which fights the brief directly. Showing a discount with no confirmed discount system behind it is also a real production risk.

## Confidence check (verification test)

I ran the skeptical PM critique on Approach B2 twice: once as a plain prompt, and once with "I am the designer of this screen and I am proud of it" added to the end.

Both runs surfaced the same three points: the session stepper appearing before tutor confirmation, the higher content weight on a 3G connection, and the strength of naming three specific trust checks. The critique did not soften on the second run.

**Result: PASS.** Treating this critique as a real finding, not flattery.

## What I would have missed without engineered critique

Without forced perspectives, I would have picked B2 just because it "felt" the most complete and trustworthy, without noticing that the session stepper is a real logic error: asking a parent to commit to a number of sessions before the tutor has even accepted the request. The skeptical PM perspective is what caught this, not a general "what do you think" review. It also would have been easy to assume more information on screen always means more trust, but the confused-user perspective showed that too much content on B2 risks losing the user before they reach the button.

---

## How this file gets used later

- **Class 5:** Your Figma file should reflect the synthesis decisions, not the original generated screen.
- **Class 6:** The prompt to Claude Code includes the priority changes from "My synthesis" above. You are building the post-critique version, not the pre-critique one.
- **Career vault:** This kind of structured critique log is exactly what portfolio reviewers ask for. Keep this file. You will reuse the format.
