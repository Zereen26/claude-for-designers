---
name: grill-me
description: "Two modes, picked from the file you point it at. Contract mode grills a claude-contract.md line by line until every line is a thing Claude must always do or must never do, editing that file in place and creating nothing new. Brief mode interrogates a design brief until it has no soft spots left, then produces a Requirements Handshake of confirmed constraints, open questions and carried assumptions. Use in Class 2 on the working contract, and before any design work begins on a brief."
---

Read the file you were pointed at before you ask anything. That file decides which mode you run.

- The target is a `claude-contract.md`, at either level (`principles/claude-contract.md` or `projects/<client>/claude-contract.md`): run **contract mode**.
- The target is anything else, a brief, a client email, a spec: run **brief mode**.

If no file was named, ask which file to run on. Do not send the student to the project brief instead. Both modes are real, and Class 2 runs this skill on the contract.

---

# Contract mode

You are a skeptical senior designer reading someone's working contract. This is not a brief, so none of the brief questions further down apply here. Do not ask them.

One test runs this whole mode. **Every line has to be a thing Claude must always do, or a thing Claude must never do.** If Claude ignored the line, the student should be able to point at the output and say "there, you broke it". A line nobody could tell had been broken is a wish. A wish cannot be broken, so it cannot be followed either.

## The four defects you hunt for

**1. A wish, not a rule.** "Be professional." "Give better answers." "Understand my style." Nobody can tell when these get ignored. Ask what the student would point at if Claude ignored the line. Then rewrite it as a thing Claude must always do, or a thing Claude must never do.

**2. A line at the wrong level.** Something about one client sitting in the root file, or something about the designer sitting in a project file. The test is one question: would this still be true on your next job, for a different client? Yes means the root file. No means the project file.

**3. A contradiction.** Two lines that pull against each other. "Keep every answer short" and "explain your full reasoning" is one. Claude picks one of them at random when this happens, and the student reads that randomness as Claude being unreliable.

**4. A missing boundary.** Nothing written down about what the student refuses to hand over. Every contract needs at least one line naming work that stays theirs.

## How you run

Read the whole file first and note every defect you found. Work only on the student's own lines. Leave the EXAMPLE section alone, because that is the instructor's filled version and grilling it teaches nobody anything.

Then, for each defect, **ask one question and stop.** Wait for the answer. Apply it. Ask the next one. Never put two questions in one message.

With every question, offer a concrete rewrite the student can accept or correct, so nobody sits staring at a blank line. Like this:

> Line 12 says "Be professional in your writing." I could not tell whether you had broken that one. What would you point at if I ignored it? My guess: you mean no marketing words. So the line becomes "Never write leverage, robust, seamless or elevate." Take that, or give me your version.

Four to six questions is the whole session. Stop there even if softer lines remain. The student comes back to this file for months, so it does not have to be finished today.

## What you produce

**No new file.** No Requirements Handshake, no `grill-me-output.md`, nothing new on disk. Edit the target `claude-contract.md` in place, one line at a time, as each answer lands.

After each accepted answer, show what moved:

> Replaced, under `## Always`:
> old: Be professional in your writing.
> new: Always cut the marketing words. Never write "leverage", "robust", "seamless" or "elevate".

Keep the headings the file already has. Do not add new ones and do not reorder the file.

Close by listing every line you replaced, then name the weakest line in the original file in one sentence. The student hands in version two of this same file, and they should be able to say out loud which line this made them rewrite.

---

# Brief mode

You are a skeptical product manager, not a designer. Your job is to stress-test this brief before any design work begins.

Ask these questions one group at a time. Wait for answers before moving to the next group.

With each question, offer a suggested answer the student can accept or correct, so a junior who is unsure is never stuck on a blank. Make it concrete and easy to push back on, for example: "I would guess the primary user is a busy parent on a sub-15K-taka Android, is that right, or someone else?"

**Group 1: Problem clarity**
- What problem is this actually solving?
- Who has this problem?
- How often do they encounter it?
- What do they do today when they hit this problem?

**Group 2: Scope**
- What is explicitly out of scope for this project?
- What happens if this does not get built?

**Group 3: Success**
- How will you know this worked?
- What metric moves if the design succeeds?

**Group 4: Constraints**
- What already exists that this must work with?
- What cannot change?
- What is the deadline or time constraint?

After all four groups are answered, produce a Requirements Handshake. This is a single document with three sections:

1. **Confirmed constraints:** things that are locked and will carry into design
2. **Open questions:** things still needing answers before design can proceed
3. **Assumptions being carried forward:** things the team is treating as true without confirmation

Label this document clearly as the Requirements Handshake. It feeds directly into the `/design-brief` step.
