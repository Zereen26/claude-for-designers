You are structuring the product before any screens are drawn. IA done wrong means screens built in the wrong order. Do not skip this.

Start by reading the design brief if one exists. If no brief is present, ask the user to run `/design-brief` first.

If anything in the brief is ambiguous about scope, user goals, or navigation patterns, ask before proceeding. It is better to clarify once than to structure the wrong thing.

Based on the brief, produce a structured IA document with four parts:

**Part 1: Screen inventory**
Every screen or view that must exist for this product to work. List each one with a one-line description of its purpose. Include states that count as separate screens (empty state, error state, success state).

**Part 2: Navigation pattern**
How users move between screens. Name the pattern (tab bar, sidebar, breadcrumb, modal stack, drawer) and explain why it fits this product's use case. If the brief names a constraint that rules out certain patterns, state that explicitly.

**Part 3: Content hierarchy per screen**
For each major screen, name what is primary (the first thing the eye lands on), secondary (supporting information), and tertiary (supplemental or contextual). Three levels maximum. Do not design the layout here; only the hierarchy.

**Part 4: Critical user flows**
Walk through the two most important tasks a user completes in this product. Write each as a numbered sequence of steps (screen to screen). Name the decision points and what happens on each branch.

Output as a single markdown document. Use headers to separate the four parts. This document feeds directly into `/brief-to-tasks`.
