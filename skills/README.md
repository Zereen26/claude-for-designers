# Skills

The seven slash commands that drive the design process. Each one is a self-contained prompt template.

See the [top-level README](../README.md) for install instructions across Claude Code, Cowork, and Chat.

## The skills

| File | Slash command | What it does |
|---|---|---|
| `grill-me.md` | `/grill-me` | Stress-tests the brief before design starts. |
| `design-brief.md` | `/design-brief` | Turns the interrogated brief into a single source of truth. |
| `information-architecture.md` | `/information-architecture` | Maps screens and flows before any pixel is drawn. |
| `design-tokens.md` | `/design-tokens` | Establishes colors, typography, spacing as a system. |
| `brief-to-tasks.md` | `/brief-to-tasks` | Breaks the brief into time-boxed, executable work. |
| `frontend-design.md` | `/frontend-design` | Builds the interface using everything above as context. |
| `design-review.md` | `/design-review` | Critiques the output with the rigor you'd apply to someone else's work. |

## How they pair with `principles/`

Skills are verbs. Principles are constraints. Every skill in this folder assumes the files in `../principles/` are loaded: that's how Claude knows the voice, the taste rules, the BD defaults.

If you run a skill and the output feels generic, the principles probably aren't being read. Make sure they're in your project context.

## Modifying skills

These are starting points. As you do real work, you'll want to tune them. Edit the MD files directly. They take effect on the next conversation.

Common edits:
- Add a project-specific rule to `grill-me.md` if you keep getting briefs from the same kind of client.
- Tune the critique perspectives in `design-review.md` if your domain has specific failure modes (medical, legal, financial).
- Tighten `design-tokens.md` to match your team's naming conventions.

Fork the repo and PR back if your tunings are useful for everyone.
