---
created: 2026-07-27
type: reference
status: template
tags: [edubridge, class-5, workbook, design-tokens]
project: EduBridge Bangladesh
---

# EduBridge BD: Design Tokens

**What this file is for:** the named values your design is made of, written once so you stop retyping hex codes into every prompt and every Figma layer.

**Why Claude needs it:** without it, "use a nice green" produces a different green every session. With it, Claude writes `#00A651` because you told it what `accent.primary` means, and your Figma variables and your built screen finally agree.

**Which class:** Class 5. Class 6 pastes this file into the prompt that builds the screen.

## Screens and flows

**Where the `/information-architecture` output goes.** Run the skill before `/design-tokens`. Tokens laid on a broken structure only make the mess consistent. Paste all four parts here, in order, and keep the diagram the skill writes beside this file as `ia-map.html`. This section is the source of truth, because `/brief-to-tasks` reads it in Class 6. The diagram is how you show the same thing to a client.

### Example: the instructor's IA for the booking flow

Labelled as the example. Drawn in `ia-map.html` beside this file. Sources: `PRODUCT.md`, `brief-v3-interrogated.md`, `critique-notes.md`, `booking-screen.html`.

#### Part 1: The journey

**Who is travelling.** The parent, around 42, in Dhaka. The 16-year-old preparing for HSC may do the looking. The parent decides and pays, so the journey follows the parent. Sub-15,000 taka Android, evening, home Wi-Fi or slow 4G during the day.

**Where it starts.** Outside the product. Someone sends a link, or the parent searches for a tutor for one subject.

1. **Decides the child needs a tutor.** For one named subject, HSC Physics, not "tutoring".
2. **Looks for tutors who teach it.** Wants a shortlist small enough to compare.
3. **Judges whether the tutor is real.** Looking for who checked the qualifications. **Decision point:** convinced, and continues. Not convinced, and leaves to ask a neighbour for a recommendation instead.
4. **Works out what one session costs.** Wants the total in BDT, not an hourly rate to multiply.
5. **Sends the booking request.** Needs to understand this is a request, not a purchase. **Decision point:** sends, or abandons because the wording promised an instant booking.
6. **Waits for the tutor to confirm.** Wants to know the request arrived and when the answer comes. **Decision point:** the answer arrives and paying starts. Nothing arrives, and the parent gives up quietly. That is the abandon branch nobody sees.
7. **Pays.** Card through SSLCOMMERZ for the minority who have one. bKash or Nagad for everyone else: leave the site, switch app, PIN, OTP.
8. **Proves the payment.** Types the transaction ID back in by hand, then waits for verification that is not instant.
9. **Knows the session is booked.** Time, subject, and how the session will happen.

**Where it ends well.** The parent believes the money reached a person whose documents somebody checked, and the total they paid is the total they were shown.

**Other journeys, one line each.** The tutor submitting NID and qualification documents for verification, which `brief-v3-interrogated.md` puts out of scope. The student searching alone, which runs to step 3 and then hands the decision to the parent.

#### Part 2: Screen inventory, derived from the journey

- `Subject search`: tutors who teach one subject (serves step 2)
- `Search results, empty`: no tutors for that subject yet (serves step 2)
- `Tutor profile`: who this person is, and who verified them (serves step 3)
- `Booking request`: the session, the total, one CTA (serves steps 4 and 5). Built, as `booking-screen.html`.
- `Pay with bKash panel`, inside the booking request screen: collects the payment number (serves no step)
- `Payment method choice`: card or mobile money (serves step 7)
- `Mobile money handoff`: what is about to happen, and what to bring back (serves step 7)
- `Transaction ID entry`: the hand-typed TrxID (serves step 8)
- `Verification pending`: waiting, with a time on it (serves step 8)
- `Payment failed, five states`: wrong TrxID, expired OTP, insufficient balance, duplicate payment, timeout (serves step 8)
- `Booking confirmed`: the session exists (serves step 9)

**Screens that serve no step.** One. The `Pay with bKash` panel on the built booking request screen collects a payment number at step 5. Payment is step 7, after the tutor confirms, and the panel's own note says no payment is charged yet. Either the panel moves to step 7, or the journey is wrong about when money is taken. A smaller version of the same fault sits higher up the same screen, in the session details: the `Format: Online (video call)` row names a delivery channel that `brief-v3-interrogated.md` puts out of scope.

**Steps with no screen.** Three, and they are three different things.

- Step 1 has no screen and should not. It happens before the product opens.
- Step 3 is half covered. The badge exists; nothing shows who issued it. That is an open question for Rafi or Jamie, not a design gap, and the screen cannot be drawn until they answer.
- Step 6 has no screen anywhere. Not in the build, not in the brief. The CTA promises an answer in about two hours and there is nowhere to go and see it. This gap costs the most, because a parent who has paid nothing can leave at no cost.

#### Part 3: Navigation pattern

A linear stack with a back arrow. No tab bar, no drawer.

- Nothing in this flow is a place the parent returns to. A tab bar would advertise four destinations that do not exist in MVP.
- One task per screen is a stated principle in `PRODUCT.md`. A stack holds that line; tabs invite collapsing two decisions onto one screen to save a tap.
- The mobile money path leaves the app. Plan the return as a fresh entry into the transaction ID screen, with the request read back from the server, rather than as a layer that assumes the app stayed open.
- The device rules out anything that has to load several sections before the nav can be drawn.

#### Part 4: Content hierarchy per screen

`Booking request`
- Primary: the session total in BDT. It is the number being decided on.
- Secondary: the verified badge and the tutor's name.
- Tertiary: duration, format, and the note that nothing is charged yet.
- The CTA sits at the bottom, sticky. It is the exit, not the decision, so it does not compete for the eye.

`Tutor profile`
- Primary: the badge, naming the document that was checked.
- Secondary: subjects taught and the rate.
- Tertiary: the photo. Per `critique-notes.md` it costs the most on 3G and buys the least, so it sits below the decision area.

`Transaction ID entry`
- Primary: the input, with the exact format shown.
- Secondary: the amount and the number it was sent to, so the parent can check the two match.
- Tertiary: what to do when it fails.

`Verification pending`
- Primary: one sentence saying what is happening and how long it takes.
- Secondary: the amount and the reference.
- Tertiary: how to reach a person.

**What this IA cannot close.** Who issues the verified badge. Whether Nagad is in MVP, which turns the payment method choice screen from one option into two. Whether search is in the first build: `PRODUCT.md` lists it in MVP and `brief-v3-interrogated.md` puts search and discovery out. Steps 2 and 9 both depend on which of those two is true.

<!--
COURSE NOTE for the student. This is not an instruction to Claude.

Everything between here and `## YOUR TURN` is teaching material. Delete it once your own answers are in.
-->

## How you produce it

Do the Figma hygiene pass first, then, in one Claude Code session on Sonnet 5 at medium effort:

1. Run `/information-architecture` if you have not already fixed the structure. Tokens on top of a broken structure just make the mess consistent.
2. Run `/design-tokens`. It proposes a set from your brief and your Class 4 critique.
3. Edit the proposal. Delete every token you cannot point at a real use for. A token nothing uses is a token you will have to defend later.
4. Name the values in Figma to match, exactly, character for character.

The names are the contract. Values change all the way to launch; names should not.

## Example: the token set behind `booking-screen.html`

Labelled as the example. This is the real system behind the Class 6 screen, written up in full in `DESIGN.md`. It is deliberately small: eleven colors, five type steps, one accent that means one thing.

**Color.** `navy-ink` #0A2540 (header, avatar, headlines, price). `confirm-green` #00A651 (verified badge, input focus, primary CTA, and nothing else). `confirm-green-pressed` #007A3D (CTA `:active` only). `bkash-pink` #E2136E (used exactly once, as the payment-method prefix). `screen-surface` #FFFFFF. `page-surround` #F3F4F6. `border-default` #E5E7EB. `text-tertiary` #374151. `text-secondary` #6B7280. `text-muted` #9CA3AF. `placeholder` #D1D5DB.

**Type.** System stack, no webfont, because it renders instantly on 3G with no font-loading flash and it looks like the parent's own phone. `display` 22px/700 (the session price, the number being decided on). `headline` 18px/700 (tutor name). `title` 17px/600 (header title, CTA label). `body` 15px/400 (detail rows). `label` 12px/600, 0.05em tracking (section labels, verified badge). Inputs sit at 16px on purpose, larger than body, because anything smaller makes iOS zoom on focus.

**Spacing.** `xs` 8px, `sm` 12px, `md` 16px, `lg` 20px. Multiples of four, nothing off the scale.

**Radius.** `sm` 8px (inputs), `md` 12px (buttons), `full` 100px (the verified pill).

**Motion.** Nothing over 220ms, and the CTA press feedback is 80ms. On a slow device a long transition reads as a hang, not as polish.

**The named rule.** The One Confirm Color Rule. Green appears in exactly three places: the verified badge, the input focus ring, the CTA. If a new element wants to stand out, it does not get a new color. It earns green only if it means the same thing, trust confirmed or action ready. That rule is why the badge still means something on the fourth screen.

---

## YOUR TURN

Answer each question in place. Fill the tables with your own values, from your own critique.

### Color

***Which colors does your screen actually need, and what does each one mean? Give every token a use, and delete any row you cannot fill in. Keep the names; change the values.***

| Token | Value | Use for |
|---|---|---|
| `bg.surface` |  |  |
| `bg.inverse` |  |  |
| `text.primary` |  |  |
| `text.secondary` |  |  |
| `text.muted` |  |  |
| `accent.primary` |  |  |
| `accent.danger` |  |  |
| `border.default` |  |  |

### Type

***Which font family, and which five steps? For each step, what is the one thing on screen that uses it? A step with no user is not a step.***

| Token | Size | Weight | Line height | Use for |
|---|---|---|---|---|
| `text.display` |  |  |  |  |
| `text.heading` |  |  |  |  |
| `text.body` |  |  |  |  |
| `text.body.small` |  |  |  |  |
| `text.label` |  |  |  |  |

### Spacing and radius

***What is your base unit, and what is the full scale? Then your radius set. If a value in your Figma file is not on this scale, either the value is wrong or the scale is.***

| Token | Value |
|---|---|
| `space.1` |  |
| `space.2` |  |
| `space.3` |  |
| `space.4` |  |
| `space.6` |  |
| `space.8` |  |
| `radius.sm` |  |
| `radius.md` |  |
| `radius.full` |  |

### Motion

***What are your three durations, and what is your ceiling? Justify the ceiling against the device your user is actually holding.***

| Token | Duration | Easing | Use for |
|---|---|---|---|
| `motion.fast` |  |  |  |
| `motion.default` |  |  |  |
| `motion.slow` |  |  |  |

### The one rule your system has to enforce

***Write the single rule that keeps this system honest, in the shape "X appears only when it means Y." Name it. A rule with a name gets followed; a preference gets argued with.***

<!-- COURSE SCAFFOLDING: delete everything above YOUR TURN once you have filled it in. This becomes your real working file. -->
