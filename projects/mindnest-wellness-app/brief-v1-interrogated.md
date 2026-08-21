---
project: MindNest (Mental Wellness Companion)
brief-version: 1: interrogated (condensed grill-me, workshop context)
status: locked for Workshop 8.0 deliverable
---

# MindNest: Interrogated Brief

## Context: what this brief is for

This is **not** a full product brief. It supports a specific, time-boxed deliverable: Ostad Workshop 8.0, a Behance case study Hero + Overview section, 1:30 hr, exported at 1920px frame width.

The source material is Nusrat's own primary research doc (`Mental_Wellness_Companion_Product_Discovery.html`), which scoped a full 15-screen app. That doc is the product vision. This brief narrows it down to what the workshop deliverable actually needs.

## Product

- **Name:** MindNest
- **One-line vision:** Help people feel better before they feel worse.
- **Category:** Mobile app (mental wellness / stress management)

## Audience

**BD-focused.** Primary user: working professional, 22-35, Dhaka or similar city, sub-15K taka Android, 3G/4G. Secondary: university students. This is a deliberate choice over a generic global-Behance audience — it lets the case study carry specific BD context (bKash-style trust patterns, Bangla/English mix in UI copy) instead of reading like a template any studio could ship.

## Problem

Users don't know their stress level, don't know whether meditation, yoga, or therapy fits their situation, lose consistency, and delay seeking professional help. The app doesn't diagnose — it recommends a psychologist only when multiple wellness signals point to ongoing stress.

## What this deliverable actually needs (not the full 15-screen IA)

Per the workshop brief, Hero needs a device mockup; Overview needs a project summary and quick facts. Building all 15 screens from the discovery doc would blow the 1:30 hr timebox for no payoff — the case study only shows 1-2 screens as hero art.

**Screens being designed for the hero visual:**
1. **Home/Dashboard** — mood check-in + today's recommendation. Chosen because it shows the core value prop (personalized daily plan) in one glance.
2. **Guided session screen** (meditation/breathing) — chosen because it's the most visually calm, emotionally on-brand screen, strongest single image for a hero.

Out of scope for this deliverable: onboarding, goal selection, journal, progress dashboard, therapist booking/payment flow. These exist in the discovery doc for a future full build, not for this case study.

## Case study meta (for Overview "quick facts")

- **Role:** Solo UX/UI Designer
- **Duration:** 3-day sprint (concept project)
- **Platform:** Mobile app (Android-first)
- **Team:** Solo

## Confirmed constraints

- BD-focused audience — copy can mix Bangla/English in UI, sub-15K Android is the target device even though this is a portfolio mockup (keeps it defensible, not generic).
- Animations, if shown/implied in the case study, stay under 150ms per house rule.
- Green accent ties to bKash-style trust association — deliberate choice, not decoration (see `principles/design-taste.md`).

## Assumptions carried forward

- No real client, no real therapist-verification backend — the "verified psychologist" feature from the discovery doc is referenced in Overview copy only as vision, not shown as a built screen.
- Case study language: professional English, not Banglish (per `claude-contract.md` — Banglish is for our working conversation, not for shipped deliverables).

## Next steps

1. Lock design tokens (`tokens.md`).
2. Build Home/Dashboard and Guided Session screens in Figma.
3. Build Hero + Overview case study sections referencing those screens.
