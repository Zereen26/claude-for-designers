# Arogga Automatic Refill — "No More Medicine Panic"

Text record of the final case study PDF (`arogga case study.pdf`, live on Behance).
This markdown exists so the case study content is version-controlled and searchable.
The visual deliverable is the PDF / Behance page, not this file.

- **Project:** Arogga Automatic Refill (a.k.a. "Oshudh Shesh" — The Arogga Prescription Refill Reminder)
- **Tagline:** No More Medicine Panic. Automated monthly refills so your loved ones never miss a single dose.
- **Industry:** Healthcare & E-Pharmacy (Bangladesh)
- **Type:** Conceptual UX case study. Not officially affiliated with Arogga. Learning / portfolio only.
- **Team:** Spacing (CSCBD Batch 8 / Workshop 8.0), 5 members
- **Duration:** 4 weeks, start 26 July 2026
- **Tools:** Figma, FigJam, Google Docs, Claude, Gemini, Photoshop
- **Nusrat's role:** UI/UX Designer (one of 5)

## Team & mentors

- Sultan M. — Team Lead
- Sultana Ayrin Opi — Sr. UI/UX Designer
- Sourav Bhuiyan — Sr. UI/UX Designer
- Mostain Billah — UI/UX Designer
- Nusrat Zareen — UI/UX Designer
- Mentor: Kawsar Mamun
- Support mentor: Nayem Islam

## Problem

Many working professionals live far from aging parents and forget to reorder medicine on time.
Parents only report the problem when the last pill is already gone, causing skipped doses and
emergency panic. Supply tracking relies on memory and phone calls.

## Solution

Arogga scans the prescription, counts down remaining days per patient, and triggers a
ready-to-order cart 4 days before medicine runs out.

## The story / primary persona

**Atique, 29** — remote caregiver, businessman in Dhaka. Mother **Selina Begum, 58**, lives in
Rajshahi and takes 4 daily medicines for diabetes, blood pressure, and acid reflux.

- Goal: parents never run out of critical daily medication without repeated anxious phone calls.
- Frustrations: forgets reorder dates under office workload; parents call only after the last
  strip; guilt and stress when emergency orders are delayed.

## Design process (4 weeks)

1. Week 1 — Discovery & Research: interviews, survey, competitor analysis
2. Week 2 — Strategic Definition: HMW mapping, MoSCoW, user flow
3. Week 3 — UX Wireframes: lo-fi sketching, mid-fi
4. Week 4 — Interface Design + Final Refinement: light-mode system, component grid, hi-fi, polish

## Research

**User interviews — 13 interviewees.** Sample quotes:
- Jakir Hossain, elderly patient 70: "I don't really understand apps. My daughter orders for me,
  or I have to ask someone to bring my medicines."
- Atique Rahman, remote caregiver 29: "I got caught up in office work and completely forgot. My
  mother called to say the medicine was finished."
- Mahabubur Rahman, retired patient 60: "At the end of the month, I count leftover strips by
  hand. I have run out of medicine several times doing this."

**Survey — 43 responses (Google Forms):**
- 73.7% forgot to reorder before depletion
- 89.5% want proactive auto-refill alerts before medicines run out
- 63.2% ready for 1-tap refill / ready cart
- 100% confirmed managing distant family medication is challenging
- Key finding: people do not forget from lack of care; they forget because counting pills by
  hand every day is hard.

**Competitor analysis** — Arogga, Osudpotro, ePharma, DocTime. All focus on medicine delivery;
none solve daily tracking + proactive refill. Compared on: medication tracking, refill
reminders, prescription handling, delivery.

## User journey (5 stages of chronic medicine management)

1. Realize need (worried) — manual pill counting is easy to forget
2. Prepare list (confused) — doctor handwriting is hard to read
3. Buy (frustrated) — searching long medicine names one by one is slow
4. Receive (anxious) — delivery delays cause fear of missing doses
5. Take medicine (received) — hard to know from far away if parents took their pills

## How Might We → features

1. Warn users before medicine runs out → **Predictive Refill Reminders** (tracks daily intake,
   alerts 3-4 days before supplies finish)
2. Make remaining home stock easy to see → **Digital Medicine Box Dashboard** (daily countdown
   of leftover pills on main dashboard)
3. Help busy users reorder in seconds → **One-Click Automated Cart Refill** (past regular
   medicines assembled into an instant single-tap cart)
4. Assist elderly users who get stuck → **Direct Support Team Call System** (one tap to pharmacy
   support)
5. Manage medicine for multiple family members → **Multi-Patient Profile & Tagging** (separate
   profiles so doses never get mixed up)
6. Allow buying only needed strips → **Flexible Partial Purchase** (select specific strips / pack
   counts instead of full boxes)

Prioritised with MoSCoW + mind mapping. Workbook also lists 3 more: prescription update
workflow, generic alternative suggestions, medication adherence tracking for caregivers.

## Key screens (hi-fi core journey)

Onboarding → Add Patient → AI Prescription Scan → Review Scanned Details → Medicine Box /
Pill Box dashboard → Medicine Dashboard (low-stock "4 days of medicine in stock" → Order Now) →
Review Order (prepared cart, box/strip toggle) → Checkout (Cash on Delivery / Medicine Auto
Refill).

- AI Prescription Review: extracts medicine name, strength, duration, frequency, before/after
  meal, initial stock; flags unclear handwriting for verification; "Confirmed Match" state.
- Example extracted regimen for Selina Begum: Metformin 500mg 1+0+1, Atorvastatin 10mg 0+0+1,
  Amlodipine 5mg 1+0+0, Sergel 20mg 1+0+1.
- Pill Box shows per-medicine "30 Days Remaining (60 Tabs) / Good Stock / Low Stock" and
  "Next Refill: Sep 17, 2026".

## Design system

- Typeface: Inter (Regular, Medium, Semi Bold, Bold) — clean geometric structure, legible across
  dense medical lists, numbers, status badges.
- Colors: Primary `#0E7673`, Soft Mint `#E7F1F1`, Amber `#F59E0B`, White `#FFFFFF`.
- Light-mode system, component grid, follows Arogga branding.

## Expected impact (projected, not measured)

- 73.7% target reduction in emergency stockouts
- Reorder time 5 min → 10 sec
- 89.5% user demand for proactive reminders
- 100% of remote caregivers report anxiety this addresses
- Post-launch validation plan: track auto-refill opt-in rate, average stock-days-left at
  reorder, and emergency support calls over the first 60 days.

## Where AI was used

Claude and Gemini used for research synthesis support, IA sanity-check, flow logic, and
critique. Human owned interviews, survey, final structure, copy, and visual design.
