# Projects

This is where your design work lives. One folder per project. Each project follows the same structure as `edubridge/` so Claude knows what to expect when you open a project folder.

## Start a new project

```bash
cp -r projects/edubridge projects/your-new-project
cd projects/your-new-project
```

Then:

1. Open `brief-v1-client.md`. Replace the EduBridge content with the actual brief you received.
2. Delete or rewrite `brief-v2-pm-thread.md` with your real PM follow-ups, if any.
3. Run `/grill-me` to populate `brief-v3-interrogated.md`.
4. Run `/design-brief`, `/information-architecture`, `/design-tokens` to populate the rest.
5. Build the first screen with `/frontend-design` once the brief, tokens, and IA are locked.
6. Critique with `/design-review` before you ship.

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
