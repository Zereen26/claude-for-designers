# Anti-AI-Slop Rules

What NOT to ship. These are the patterns that scream "AI generated this and the designer did not notice." Every one of them is a tell that lowers the perceived value of your work.

Some of these apply to UI Claude generates. Some apply to images, icons, and decoration Claude might suggest. Some apply to copy. All of them are things you should refuse to ship without thinking about why.

---

## Visual style slop

**Purple-to-pink gradients.** The default "AI app" aesthetic. If your screen has a gradient and you cannot defend the specific colors with a brand reason, change to a single brand color or remove.

**Generic "abstract tech" hero illustrations.** Floating geometric shapes, glowing orbs, low-poly heads, neural-network squiggles. If your hero needs an illustration, it should be specific to the product, not stock-AI-art that could illustrate any app.

**Glassmorphism on everything.** Frosted-blur cards on every container is the 2024 equivalent of drop-shadows-on-every-button. Use it once, deliberately, where it earns its complexity.

**Identical card grid.** Five cards in a 5x3 grid, each with identical heights, identical button placements, identical type weights. If everything is the same, nothing is important. Vary card size when card importance varies.

**Stock-photo-energy people.** Smiling diverse team in a meeting, hands typing on a laptop, lightbulb floating above a head. Either commission real photography or do not use photos of people at all.

**Random translucent dots and lines as decoration.** Particles in the background. Connector lines between concepts that mean nothing. Asymmetric "organic" shapes added for visual interest. Remove them.

---

## Layout slop

**Centered text where left-aligned would work.** Centered paragraphs are harder to read. Use center alignment only for hero text or single-line CTAs, never for body paragraphs.

**Three-up feature grid as default.** "Why us" sections with three identical cards and three identical icons. Either differentiate the three, or write one paragraph and skip the grid.

**Faux-3D buttons with multiple shadows.** Skeuomorphic buttons looked dated in 2018. If a button needs depth, one shadow at most. Modern buttons are flat or have a single subtle elevation.

**Hero with title + subtitle + CTA + secondary CTA + signup form + social proof + arrow pointing down.** Pick three of those. Heroes that try to do everything do nothing.

---

## Copy slop

**"Empower."** Banned. Nobody is empowered by your dashboard. They are using it because they have to.

**"Seamlessly."** If you have to say it, it isn't.

**"Leverage."** Use. People use tools. They do not leverage them outside of finance.

**"Robust."** Empty word. Tell me WHAT is robust about it. "Robust analytics" means nothing; "supports 50 concurrent connections" means something.

**"Intuitive."** This word is a confession that you have not tested with real users. Either it is intuitive (in which case the user finds out, you do not need to say so) or it isn't.

**"Delight."** When companies talk about delighting customers, they are usually annoying them. If your CTA says "delight your team," rewrite.

**Three-item lists where two would do.** "Fast, reliable, and scalable." Pick the two that are actually true. Faux parallelism is an AI tell.

---

## Component slop

**Toast notifications for everything.** "Item added to cart" toast every click. "Settings saved" toast every keystroke. Toasts are interruptions; use them for things the user genuinely needs to know about, not as positive reinforcement.

**Modals for things that should be a page.** If the content requires scrolling, it is not a modal. It is a page that should have a URL.

**Empty states that say "No data yet" with a sad cloud.** Empty states should explain why and offer the next action. "You have not made a booking yet. Browse tutors to get started." Not just "Nothing here."

**Loading spinners that show indefinitely.** If you do not know how long something will take, use a progress bar with vague stages, not a spinner. Spinners-of-unknown-duration are user-hostile.

**Generic error messages.** "Something went wrong" tells the user nothing. Either tell them WHAT went wrong and what to do, or do not show the error at all.

---

## The meta-rule

The strongest anti-slop signal is **specificity**. AI defaults to generic because generic gets approval from the widest audience. Your job is to make the work specific to a real product, a real user, a real market. The more specific you are, the less it looks AI-generated.

When Claude proposes something generic, ask: "What would change about this design if we knew the user is a 45-year-old auntie in Comilla checking her son's tutor at 9pm on a borrowed phone?" If nothing changes, the design is not specific enough.

---

## What this list is missing

This is a starting set. Add your own as you find them. Things that read as AI-slop in 2026 will be different in 2027. Keep this file alive. Junior designers who maintain a personal anti-slop file develop taste faster than ones who do not.
