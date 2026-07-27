---
created: 2026-07-27
type: reference
status: complete
class: 4
tags: [ostad, batch-02, workbook, principles, anti-ai-slop, student-editable]
---

# Anti-AI-Slop Rules

**What this file is for:** the list of things you refuse to ship, so you catch them before a client does.

**Why Claude needs it:** these patterns are Claude's defaults, because they are the most common patterns on the internet it learned from. Named in the folder, it avoids them. Unnamed, it produces them and waits for you to object.

**Which class:** Class 4, Claude as Critic. It runs alongside `design-taste.md` and the `/design-review` skill.

**`design-taste.md` says what good is. This file says what to refuse.** Together, filled in, they are the actual answer to "Sonnet produces bad design". The complaint is nearly always a folder with nothing in it about taste, not a model that cannot design. Same model, same prompt, these two files present: different output.

<!--
COURSE NOTE for the student. This is not an instruction to Claude.

Everything under the EXAMPLE heading is the instructor's list as of 2026. Read it, then extend it in YOUR TURN with the tells you see in your own work and your own feed.

A rule you copied is worth less than a rule you got burned by. The copied ones still work, so keep them, but the file only becomes yours once your own entries are in it.

The list is never finished. What reads as AI-slop in 2026 will read differently in 2027. Add entries as you find them. Junior designers who keep a personal anti-slop file build taste faster than the ones who do not.
-->

---

## EXAMPLE: the instructor's slop list (2026)

<!-- Read it, keep what applies to you, then add your own in YOUR TURN. -->

Some of these apply to UI Claude generates. Some apply to icons and decoration Claude might suggest. Some apply to copy. All of them are things to refuse to ship without a reason.

### Visual style slop

**Purple-to-pink gradients.** The default "AI app" aesthetic. If your screen has a gradient and you cannot defend the specific colors with a brand reason, change to a single brand color or remove.

**Generic "abstract tech" hero illustrations.** Floating geometric shapes, glowing orbs, low-poly heads, neural-network squiggles. If your hero needs an illustration, it should be specific to the product, not stock-AI-art that could illustrate any app.

**Glassmorphism on everything.** Frosted-blur cards on every container is the 2024 equivalent of drop-shadows-on-every-button. Use it once, deliberately, where it earns its complexity.

**Identical card grid.** Five cards in a 5x3 grid, each with identical heights, identical button placements, identical type weights. If everything is the same, nothing is important. Vary card size when card importance varies.

**Stock-photo-energy people.** Smiling diverse team in a meeting, hands typing on a laptop, lightbulb floating above a head. Either commission real photography or do not use photos of people at all.

**Random translucent dots and lines as decoration.** Particles in the background. Connector lines between concepts that mean nothing. Asymmetric "organic" shapes added for visual interest. Remove them.

### Layout slop

**Centered text where left-aligned would work.** Centered paragraphs are harder to read. Use center alignment only for hero text or single-line CTAs, never for body paragraphs.

**Three-up feature grid as default.** "Why us" sections with three identical cards and three identical icons. Either differentiate the three, or write one paragraph and skip the grid.

**Faux-3D buttons with multiple shadows.** Skeuomorphic buttons looked dated in 2018. If a button needs depth, one shadow at most. Modern buttons are flat or have a single subtle elevation.

**Hero with title plus subtitle plus CTA plus secondary CTA plus signup form plus social proof plus arrow pointing down.** Pick three of those. Heroes that try to do everything do nothing.

### Copy slop

**"Empower."** Banned. Nobody is empowered by your dashboard. They are using it because they have to.

**"Seamlessly."** If you have to say it, it isn't.

**"Leverage."** Use. People use tools. They do not leverage them outside of finance.

**"Robust."** Empty word. Tell me WHAT is robust about it. "Robust analytics" means nothing; "supports 50 concurrent connections" means something.

**"Intuitive."** This word is a confession that you have not tested with real users. Either it is intuitive (in which case the user finds out, you do not need to say so) or it isn't.

**"Delight."** When companies talk about delighting customers, they are usually annoying them. If your CTA says "delight your team," rewrite.

**Three-item lists where two would do.** "Fast, reliable, and scalable." Pick the two that are actually true. Faux parallelism is an AI tell.

### Component slop

**Toast notifications for everything.** "Item added to cart" toast every click. "Settings saved" toast every keystroke. Toasts are interruptions; use them for things the user genuinely needs to know about, not as positive reinforcement.

**Modals for things that should be a page.** If the content requires scrolling, it is not a modal. It is a page that should have a URL.

**Empty states that say "No data yet" with a sad cloud.** Empty states should explain why and offer the next action. "You have not made a booking yet. Browse tutors to get started." Not just "Nothing here."

**Loading spinners that show indefinitely.** If you do not know how long something will take, use a progress bar with vague stages, not a spinner. Spinners-of-unknown-duration are user-hostile.

**Generic error messages.** "Something went wrong" tells the user nothing. Either tell them WHAT went wrong and what to do, or do not show the error at all.

### The meta-rule

The strongest anti-slop signal is **specificity**. AI defaults to generic because generic gets approval from the widest audience. Your job is to make the work specific to a real product, a real user, a real market. The more specific you are, the less it looks AI-generated.

When Claude proposes something generic, ask: "What would change about this design if we knew the user is a 45-year-old auntie in Comilla checking her son's tutor at 9pm on a borrowed phone?" If nothing changes, the design is not specific enough.

---

## YOUR TURN

<!-- Answer each question in the space under it. Pull from real output, not from memory. This list only protects you if the entries are yours. -->

**1. Find one output Claude gave you that you would not show a client. Name the exact tell in one sentence.** Not "it looked AI." The specific element: which gradient, which grid, which sentence.


**2. Add three slop patterns of your own** that are not on the list above. Write the fix next to each one, not just the complaint.


**3. List five words you ban in your product copy.** If your interface is Bangla and English mixed, add the Bangla equivalents you are tired of seeing.


**4. Write your own version of the specificity test.** One sentence describing your real user, doing the real task, on their real phone. If a design does not change when you ask that question, it is not specific enough yet.


**5. Which rule on this list do you break on purpose, and what is your defense?** A rule you can defend breaking is taste. A rule you broke without noticing is slop.


<!-- COURSE SCAFFOLDING: delete everything above YOUR TURN once you have filled it in. This becomes your real working file. -->
