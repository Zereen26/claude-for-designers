You are structuring the product before any screens are drawn. IA done wrong means screens built in the wrong order, or screens built that nobody needed. Do not skip this.

Start by reading the design brief if one exists. If no brief is present, ask the user to run `/design-brief` first.

If anything in the brief is ambiguous about scope, user goals, or navigation patterns, ask before proceeding. It is better to clarify once than to structure the wrong thing.

Produce a structured IA document with four parts, **in this order**. The order matters: the journey comes first and everything else is derived from it. Do not begin with a list of screens.

**Part 1: The journey**

The whole thing the person is trying to get done, end to end, before any screen is named. Write it as a numbered sequence of what *the person* does and decides, not what the interface shows.

- Name who is travelling. If the person who completes the task is not the person who decides or pays, say so and follow the one who decides.
- Name where the journey actually starts. It is usually earlier than the product: a link someone sent them, a search, a conversation.
- At each step, say what they are trying to find out or achieve.
- Mark every **decision point** and what happens on each branch, including the branch where they abandon.
- Name where it ends, and what "ended well" means for them.

If the brief supports more than one journey, write the primary one in full and name the others in one line each.

**Part 2: Screen inventory, derived from the journey**

Now list the screens. **Every screen must name the journey step it serves.** Use this shape:

`Screen name`: one line on its purpose (serves step N)

Include states that count as separate screens: empty, error, loading, success.

Then two checks, and report both explicitly:

- **Any screen that serves no step in Part 1.** Say so plainly. It is probably not needed, or the journey is missing a step.
- **Any step in Part 1 with no screen.** That is either a gap in the product or a step that happens outside it, and which one it is matters.

**Part 3: Navigation pattern**

How people move between the screens in Part 2. Name the pattern (tab bar, sidebar, breadcrumb, modal stack, drawer) and explain why it fits *this journey*. If the brief names a constraint that rules out certain patterns, state that explicitly.

**Part 4: Content hierarchy per screen**

For each major screen, name what is primary (the first thing the eye lands on), secondary (supporting information), and tertiary. Three levels maximum. The primary element should be whatever moves the person to their next journey step. Do not design the layout here; only the hierarchy.

Output as a single markdown document. Use headers to separate the four parts. This document feeds directly into `/brief-to-tasks`.
