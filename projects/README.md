# Projects

This is where your design work lives. One folder per client, all siblings, never nested inside each other.

Three things live here:

| Folder | What it is |
|---|---|
| `_new-client/` | **The empty template. Copy this.** Six files, each carrying the questions it wants answered |
| `_brief-bank/` | Four practice briefs that are deliberately not EduBridge, for weeks when you have no live client |
| `edubridge/` | The course's client, fully filled in. The answer key. Read it, do not copy it |

## Start a new client

Copy the **template**, not EduBridge.

```bash
cp -r projects/_new-client projects/your-client
cd projects/your-client
```

Copying `edubridge/` drags one client's users, tokens, decisions and briefs into another client's folder, and then Claude answers about the wrong product. That is the single most expensive mistake you can make in this folder.

Then, in roughly this order:

1. `context.md`: who is on the other end of the screen. Overrides your root defaults.
2. `engagement.md`: what the job is, what is out, revisions, who signs off. **Before you quote a price.**
3. `brief-interrogated.md`: run `/design-brief` on everything you were sent, together in one session.
4. `critique-notes.md`: `/design-review` and `/heuristic-evaluation`, ending in a decision.
5. `tokens.md`: `/information-architecture` first, then `/design-tokens`.
6. `screen.html`: `/brief-to-tasks`, then `/frontend-design` on one task.

Only two orderings are load-bearing: `engagement.md` before you give a number, and `context.md` plus your `principles/` files before you run anything generative.

`_new-client/README.md` maps these onto a one-week engagement. The course spends eight classes teaching it; running it takes about a week.

## Naming convention

`kebab-case-with-context.md`. Examples:

- `acme-bank-app/`: internal project for Acme Bank
- `freelance-bakery-site/`: your friend's bakery
- `personal-portfolio-2026/`: your own portfolio

Avoid generic names (`project-1/`, `client/`, `work/`). Future-you needs to find this folder six months from now without thinking.

## What does NOT belong in a project folder

- Skills (those live in `skills/`)
- Principles (those live in `principles/`)
- Personal career stuff (that lives in `career-vault/`)
- Raw assets like Figma exports or photos: keep those in `assets/` inside the project folder, not at the top level

Keep project folders focused on the design artifacts: briefs, critique notes, tokens, screens.
