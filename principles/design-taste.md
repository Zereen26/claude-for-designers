# Design Taste

This file is what separates designers from people who can describe a screen. Claude will execute anything you ask. These principles tell you what to ask for, and what to refuse to ship.

Treat this as your taste compass. When Claude produces work that follows the brief but feels wrong, this file is usually why.

---

## Hierarchy before decoration

Every screen has one thing the user is supposed to do. Before any color, type, or spacing decision, name that thing. The rest of the screen exists to make that one thing obvious.

A signal you got this right: if you cover everything except the primary action, the user knows where to click. If you have to squint at the screen to find the CTA, the hierarchy failed regardless of how pretty the buttons are.

When Claude generates a screen with five "important" cards of equal weight, that is a hierarchy failure. Push back: "Which of these is the actual decision the user is making? Make that one obviously primary, demote the rest."

---

## Restraint is the discipline most juniors skip

The temptation is to fill the canvas. Borders, shadows, gradients, icons, decorative shapes, three call-outs where one would do. Restraint is removing one of those until the screen stops fighting itself.

Test: after Claude generates a screen, ask "what could I remove without losing meaning?" If the answer is "nothing," the screen is over-designed and Claude has not pushed back hard enough. Half the time, removing the gradient or the third icon makes the work look more expensive, not less.

The mature instinct: when in doubt, leave it out. You can always add later. Removing is harder once the client has seen it.

---

## Type discipline beats type variety

Three weights of one well-chosen typeface beats five weights of three trendy ones. Pick a stack, stick to it, vary by size and weight, not family.

For BD work specifically: your stack must render Bangla and English in the same hierarchy. Most Latin-first fonts fall apart in Bangla. Check Noto Sans Bengali or SolaimanLipi as fallbacks. Do not let Claude propose a type stack without confirming it has working Bangla coverage.

What looks like type variety in good work is actually scale variety: 12, 14, 16, 20, 32. Same font, different sizes, ruthless about the gaps between them.

---

## Color discipline: tokens, not vibes

Define your palette as tokens with names that describe role, not appearance:

- `bg.surface`, `bg.subtle`, `bg.inverse`
- `text.primary`, `text.secondary`, `text.muted`
- `border.default`, `border.strong`
- `accent.primary`, `accent.danger`, `accent.success`

When you ask Claude for a screen, give it the tokens, not "use a blue and yellow." Tokens mean the same color shows up in the right places across screens. Vibes mean every screen invents its own palette and the product looks like five products.

For BD trust contexts: green carries trust because of bKash. Use it deliberately. Random green for "make it feel friendly" is not deliberate.

---

## Motion budget

Animations under 150ms feel responsive. Animations over 300ms feel laggy on common BD devices, even when they render smoothly on your MacBook. There is no middle ground that works for both.

Default: 150ms ease-out for everything except critical feedback (button press, error appear). Critical feedback can be 80-100ms. Decorative motion (hero wipes, scroll reveals) does not belong on a Slow 3G product at all.

When Claude proposes "a smooth 400ms fade," push back. Ask for the same effect in 150ms or none at all.

---

## What "professional" actually means in design

Junior designers chase "professional" by adding shadows, gradients, glass effects, and tiny serifs in headers. Senior designers chase "professional" by removing decisions until the work cannot be misread.

Heuristic: if you handed your screen to a senior designer with their phone on Slow 3G, what is the first thing they would change? Make that change yourself before you ship. Claude will not catch it. Your taste has to.

---

## When to override these principles

Principles are heuristics, not rules. If the work calls for breaking one of them, break it consciously, not accidentally.

Conscious break: "I am using a 400ms transition here because the user is mid-payment and a slower confirmation reduces anxiety. This is worth the cost on 3G."

Accidental break: Claude added a 400ms transition because the default was 400ms and you did not notice.

The difference is whether you can defend the choice. That defensibility is the taste you are building.
