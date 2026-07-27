---
created: 2026-07-27
type: reference
status: complete
class: 1
tags: [ostad, batch-02, workbook, principles, context-block, bangladesh, student-editable]
---

# BD Context Block

**What this file is for:** your default user, described once, so you stop describing them from scratch in every prompt.

**Why Claude needs it:** with nothing here, Claude designs for a generic user on a fast connection with a flagship phone. That user does not exist in your market.

**Which class:** Class 1, What Claude Is and Why This Matters Now. This is the first file you fill in and the thing you bring back to Class 2: your own context block.

<!--
COURSE NOTE for the student. This is not an instruction to Claude.

The block under the EXAMPLE heading is the instructor's version for EduBridge. It is six lines long on purpose. Short enough to paste at the top of any prompt, specific enough that Claude cannot fall back on defaults.

This is the smallest file in the workspace and it changes the output more than any other single thing you do in week one. That is the whole lesson of Class 1.
-->

---

## EXAMPLE: the instructor's context block (EduBridge, Bangladesh)

<!-- Read it, then write your own in YOUR TURN. Paste your version at the top of any prompt where the output is for your users. -->

```
Context for every output:
- Users are 18-45, mobile-first, often on 3G or 4G.
- Default device is a sub-15,000 taka Android with under 4GB RAM.
- Users expect bKash-style payment flows. Green is the trust color.
- Bangla and English mix is normal. Numbers are mostly English digits.
- Animations over 150ms feel laggy on common devices. Avoid them.
- Trust signals matter more than aesthetics. Show the policeman, not the gradient.
```

### How the example gets extended

Those six lines cover the average BD user. For a specific product category, the instructor adds lines:

- **Fintech**: payment-method preferences, KYC sensitivity, fraud awareness
- **Edtech**: parental decision-makers, after-school timing, Bengali-medium expectations
- **Commerce**: cash-on-delivery as default, return-on-doorstep workflows
- **Ride-share**: pillion seating, helmet stigma, weather assumptions

The point is to give Claude something specific to anchor on. Generic prompts produce generic output. The size of your context block is the size of your moat.

### When the block does not apply

When the output is not for a BD user. If the client is German, the BD assumptions are wrong. That client gets a different block, written once and reused.

---

## YOUR TURN

<!-- Answer each question in the space under it. Keep the finished block to six or seven lines so it is cheap to paste into every prompt. -->

**1. Rewrite the six-line block for the users you actually design for.** Change at least two lines. If all six survive unchanged, you copied instead of thinking.


**2. Add two lines specific to your product's category.** Fintech, edtech, commerce, ride-share, or whatever yours is. What does Claude get wrong about this category by default?


**3. Name your device floor.** The actual phone model and the actual connection you test on, not a range. "Redmi A3 on 3G in Mirpur" beats "low-end Android".


**4. What is the real language split in your interface?** Which parts are Bangla, which stay English, and what happens to numbers, dates and currency?


**5. When does your block stop applying, and what do you paste instead?** Name one client or market where these assumptions would be wrong.


<!-- COURSE SCAFFOLDING: delete everything above YOUR TURN once you have filled it in. This becomes your real working file. -->
