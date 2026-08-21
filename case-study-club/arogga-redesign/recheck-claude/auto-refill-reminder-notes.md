# Auto Cart Refill + Reminder — Collected Notes (grill-me in progress)

Status: **Group 1 (Problem clarity) only — not a confirmed brief.** Everything under "Simulated" below is invented for practice, not real stakeholder/user data. Do not carry these into `/design-brief` until replaced with real answers. See also existing `../AI generated user interview qes.txt` for a related interview script already drafted for this feature — merge before running real interviews so questions aren't asked twice.

---

## 1. Original stakeholder story (as given)

Stakeholder wants: automatic cart refill using the user's previous purchase medicine history, plus a reminder to the user at an exact time — for a medicine delivery app in Bangladesh (Arogga / "oshudh shesh" feature).

Context given: elderly and chronic-illness patients forget to reorder medicine, run out, and this sometimes leads to health emergencies.

---

## 2. Emotional story draft (Bangla, ~128 words, for LinkedIn/marketing use)

রহিমা খালার বয়স ৬৮। ডায়াবেটিস আর প্রেশারের ওষুধ প্রতিদিন খেতে হয়। ছেলে থাকে চট্টগ্রামে, চাকরির কারণে। খালা একা থাকেন ঢাকায়, বুয়ার সাহায্যে দিন কাটে।

গত মাসে ওষুধ শেষ হয়ে গিয়েছিল, কিন্তু খালা টেরই পাননি — বয়সের সাথে সাথে ভুলে যাওয়াটা বেড়েছে। তিনদিন প্রেশারের ওষুধ ছাড়া কাটিয়ে দিলেন। চতুর্থ দিন সকালে হঠাৎ মাথা ঘুরে পড়ে গেলেন। প্রতিবেশী হাসপাতালে নিয়ে গেলেন। ছেলে চট্টগ্রাম থেকে ছুটে এলো, কিন্তু ততক্ষণে ভয়টা হয়ে গেছে বাস্তব।

এই ঘটনা কোনো একজনের গল্প না। বাংলাদেশে যাদের বাবা-মা একা থাকেন, দূরে থাকা সন্তানের ঘুম ভাঙে এই একই আতঙ্কে — ওষুধ ঠিকমতো খেলো তো?

আমরা এই ভয়টা কমাতে চাই। আগের অর্ডার দেখে অটো রিফিল, ঠিক সময়ে রিমাইন্ডার — যাতে কোনো ছেলে-মেয়ে দূরে থেকেও নিশ্চিন্ত থাকতে পারে, আর কোনো খালার জীবন একটা ভুলে যাওয়া ওষুধের জন্য ঝুঁকিতে না পড়ে।

**Note:** character (রহিমা খালা) is invented for the story, not a real user case. Do not present as a real testimonial without a real user's consent.

---

## 3. Image generation prompts (for Gemini/Nano Banana — AI-generated, not sourced stock photos, for exclusivity)

**Problem image:**
```
Documentary-style photojournalism photograph. Early afternoon outside a small local pharmacy (ওষুধের দোকান) on a narrow street in Old Dhaka, Bangladesh. An elderly Bengali man in his late 60s, wearing a faded white panjabi and worn sandals, stands in a long queue of 8-10 people waiting outside the pharmacy counter under harsh midday sun. He leans slightly on a wooden cane, one hand shielding his eyes from the sun, visible sweat on his forehead, tired and worried expression. The queue stretches along a dusty street with a rickshaw passing in the background, tin-shed shop signage partially visible, tangled overhead electric wires typical of Dhaka streets. Natural harsh sunlight, realistic skin texture and film grain, shallow depth of field focused on the old man's face, candid unposed moment, photorealistic, no text, no logos, no watermark, National Geographic style documentary photography.
```

**Optional companion "solution" image:**
```
Same documentary photorealistic style. A middle-aged Bangladeshi son, indoors, looks at his phone with visible relief — a medicine reminder notification with an "auto-refill confirmed" message on screen. Soft evening light through a window, calm domestic setting, no text overlay beyond the phone screen, candid, photorealistic, no logos, no watermark.
```

Note: web search turned up no real free-license photo matching this exact scenario (checked Unsplash/Pexels/iStock) — AI generation is also the better choice for the "exclusive, won't match anyone else's post" requirement.

---

## 4. Problem statement — PROVISIONAL, not confirmed

> Chronic-illness/elderly patients on the app (diabetes, pressure, thyroid, heart) often forget to reorder maintenance medicine because reordering is manual — it depends on the user remembering to reopen the app and repeat a past order. This causes medicine to run out unexpectedly, missed doses, and occasionally health emergencies. It affects both the patient and family members living elsewhere, who have no visibility into when a parent's stock is running low.

This is built from the real story + simulated stakeholder answers below — **needs real validation before it becomes the brief's problem statement.**

---

## 5. Grill-me Group 1 — simulated stakeholder answers (PRACTICE ONLY, not real)

1. **Idea source:** support complaints — users ask "where's my order," turns out they never reordered.
2. **% of users affected:** no hard data yet; support estimates a meaningful share of repeat-medicine buyers reorder late or miss.
3. **Personal observation:** yes, plus one family case.
4. **Who has the problem:** mainly chronic-illness/long-term medicine users.
5. **Who orders:** mix of elderly self-ordering and family members ordering on their behalf.
6. **Age/device:** mostly 50+, not always tech-savvy, sometimes family manages the app.
7. **Where the problem occurs:** mainly forgetting to reorder in time, not delivery delay.
8. **Cycle:** roughly 30-day medicine courses.
9. **Current workaround:** manual reorder from history, phone call to pharmacy, or simply missing it.
10. **Competitor benchmark:** not aware of a BD competitor doing this well.
11. **Feature scope wanted:** auto-add to cart + user confirmation before charging (not fully automatic payment).
12. **Reminder channel:** push notification + SMS backup.
13. **Business goal:** repeat orders/revenue plus trust/retention differentiator.
14. **Urgency:** no hard deadline, but high priority — retention + safety angle.

---

## 6. Real research questions — top 10 per audience (not yet asked)

### A. Actual end-user (chronic patient)
1. Do you order the same medicine every month?
2. In the last 6 months, has medicine run out at home? How many times?
3. What did you do then — miss the dose, or buy elsewhere?
4. Do you use any system to remember to reorder (alarm/calendar)?
5. Does your doctor change your dose/medicine sometimes? How often?
6. Do you order yourself, or does someone help you?
7. If the app auto-added your usual medicine to cart, how would that feel — helpful or confusing?
8. Do you want payment to auto-charge, or confirm every time?
9. If you no longer need a medicine (hospitalized, doctor stopped it), would it be easy to pause/cancel?
10. Would this feature make you feel safer overall?

### B. Family member (orders for a parent)
1. How often do you order medicine for your parent?
2. Do you live far from them or nearby?
3. How do you currently know their medicine stock level?
4. Has stock run out before you found out in time?
5. Did that create an emergency or stress?
6. Do you want auto-reorder without your confirmation, or with it?
7. Whose card/account should be charged — yours or your parent's?
8. Do you want a reminder (SMS/notification) when stock runs low?
9. Do you find out quickly when a doctor changes a medicine?
10. Would this feature reduce your day-to-day worry?

### C. Customer support team
1. How often do reorder/ran-out-of-medicine complaints come in (weekly/monthly)?
2. What % of complaints are from chronic-medicine users?
3. Common complaint pattern — "order never arrived" vs "I forgot to reorder"?
4. Which age group/user type complains most?
5. How many complaints are emergency-flavored (e.g. "my parent has no medicine")?
6. Does a reorder button already exist? What's its usage/complaint rate?
7. How many disputes are about payment/wrong order?
8. What workaround does support currently offer?
9. What new complaint types might auto-refill create (e.g. unwanted charges)?
10. How are medicine-change-related complaints handled today?

### D. Pharmacy/ops team
1. Is chronic-medicine stock reliably available, or does it go out of stock sometimes?
2. What's current daily/monthly order volume and capacity?
3. If many users' auto-refill dates cluster on the same day, can you handle the spike?
4. Can delivery keep up if many orders land in one area at once?
5. Can prescription-required medicine legally auto-redispense, or does it need re-verification each time?
6. How would price changes reflect in an auto-order?
7. Any expiry/batch risk with auto-refill?
8. If an order is cancelled/paused after being packed, is that a loss?
9. What extra operational resource would this feature need?
10. If a medicine is discontinued/unavailable, how would the user be told?

---

## 7. Open questions before this becomes a real brief

- Full scope decision: auto-cart-add + confirm, vs fully automatic order+payment
- Prescription medicine handling (legal/policy constraint)
- What happens when a doctor changes dose/medicine mid-cycle
- Success metric definition
- Integration constraints with existing order/payment system
- Deadline/timeline

Next step: run the Section 6 questions with real people, then return to `/grill-me` Groups 2-4 (Scope, Success, Constraints) to produce the actual Requirements Handshake.
