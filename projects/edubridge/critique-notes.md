---
project: EduBridge Bangladesh
status: template: you fill this in during Class 4
---

# EduBridge BD: Critique Notes (Class 4 output)

In Class 4 you generate a first-pass screen from the PM brief (the confused one). Then you critique it using the three forced-perspective prompts. Capture the output here.

The point of this file is to teach you that "what do you think" is a useless question, and that engineered critique surfaces real problems. Keep this file alive. Add to it whenever you critique any screen, not just EduBridge.

---

## Screen being critiqued

*Paste a screenshot or describe the screen.*

> Example: "Tutor booking request screen, v0.1. Generated from the confused PM brief. Shows tutor name, photo, hourly rate, a generic 'verified' label, and a Book Now button."

## Perspective 1: confused user on a 3G phone

*Prompt Claude with this perspective. Paste the output.*

```
You are a first-time user, age 35, on a sub-15K taka Android, 3G
connection, in Bangladesh. You opened this screen because someone
sent you a link. Tell me in three sentences what you think this
screen is asking you to do, and where you got confused. Do not be
polite.
```

> Paste Claude's response here.

## Perspective 2: engineer who has to ship this in 10 days

*Prompt Claude with this perspective. Paste the output.*

```
You are an engineer who has to ship this in 10 days. List three
things in this design that will be expensive to build and explain
why, in code terms. Be specific about which CSS or interaction is hard.
```

> Paste Claude's response here.

## Perspective 3: skeptical PM who has killed 20 launches

*Prompt Claude with this perspective. Paste the output.*

```
You are a skeptical PM who has killed 20 launches. Write three
reasons this design will fail in production. Each reason must
reference a real user behavior, not aesthetics.
```

> Paste Claude's response here.

## My synthesis

*After reading all three responses, what are you actually going to change? List the changes in priority order.*

> Example:
> 1. Replace generic 'verified' label with explicit badge + document type (NID, qualifications, background check). Trust is the main thing per the brief.
> 2. Drop the photo above the fold. Loads slow on 3G. Keep it lower in the page where the user has already committed.
> 3. Rename "Book Now" to something less commercial. "Send Booking Request": implies the request goes to a human, not a vending machine.

## What I would have missed without engineered critique

*One paragraph. What did the perspectives surface that you would not have caught on your own?*

> This is the meta-lesson of Class 4. Write it down so you remember next time.

---

## How this file gets used later

- **Class 5:** Your Figma file should reflect the synthesis decisions, not the original generated screen.
- **Class 6:** The prompt to Claude Code includes the priority changes from "My synthesis" above. You are building the post-critique version, not the pre-critique one.
- **Career vault:** This kind of structured critique log is exactly what portfolio reviewers ask for. Keep this file. You will reuse the format.
