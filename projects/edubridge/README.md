# EduBridge Bangladesh: The Course Project

This is the project you carry from Class 2 through Class 6. It is also the example you point at for the rest of your career when someone asks what your design process looks like.

## What lives in this folder

| File | When you touch it | What it captures |
|---|---|---|
| `brief-v1-client.md` | Class 2 (read only) | The original client brief. Polished, generic, partly wrong. |
| `brief-v2-pm-thread.md` | Class 2 (read only) | The PM's follow-up thread. Contradicts the brief in 7 places. |
| `brief-v3-interrogated.md` | Class 3 (you write it) | Your synthesis after running `/grill-me` on both briefs. |
| `critique-notes.md` | Class 4 (you write it) | The output of the three forced-perspective prompts. |
| `tokens.md` | Class 5 (you write it) | Design tokens: color, type, spacing, motion. |
| `booking-screen.html` | Class 6 (Claude Code writes it) | The actual screen, built with the brief + tokens as input. |

## The arc

By the end of Class 6 this folder is your portfolio piece. Six files, one full design process: confused brief → interrogated brief → critique → system → built screen. Nothing missing. Nothing handwaved. You can show this folder to a reviewer and they can see exactly how you think.

## When you start your own project

Once the course is done, the workflow stays the same. Copy this folder, rename it, replace the briefs with your real client brief, and run the same files from interrogation to build:

```bash
cp -r projects/edubridge projects/my-real-project
cd projects/my-real-project
# Replace brief-v1-client.md with the actual brief you received
# Delete brief-v2-pm-thread.md or replace with your real PM thread
# Run /grill-me to populate brief-v3-interrogated.md
# Continue
```

The folder is the process, not just an output of the process.
