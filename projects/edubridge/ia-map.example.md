---
created: 2026-08-20
type: reference
status: complete
tags: [edubridge, class-6, reference, information-architecture, answer-key]
project: EduBridge Bangladesh
---

# EduBridge BD: Information Architecture (worked example)

This is the instructor's `/information-architecture` output for the booking flow, kept as the
worked version of the Class 6 deliverable. Your own goes in `ia-map.md` beside this file, with
the diagram in `ia-map.html`. The diagram for this one is `ia-map.example.html`.

Sources: `PRODUCT.md`, `brief-v3-interrogated.md`, `critique-notes.md`, `booking-screen.html`.

## Part 1: The journey

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

## Part 2: Screen inventory, derived from the journey

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

## Part 3: Navigation pattern

A linear stack with a back arrow. No tab bar, no drawer.

- Nothing in this flow is a place the parent returns to. A tab bar would advertise four destinations that do not exist in MVP.
- One task per screen is a stated principle in `PRODUCT.md`. A stack holds that line; tabs invite collapsing two decisions onto one screen to save a tap.
- The mobile money path leaves the app. Plan the return as a fresh entry into the transaction ID screen, with the request read back from the server, rather than as a layer that assumes the app stayed open.
- The device rules out anything that has to load several sections before the nav can be drawn.

## Part 4: Content hierarchy per screen

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
