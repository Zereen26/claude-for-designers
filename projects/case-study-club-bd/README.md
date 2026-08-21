# Case Study Club BD — Oshudh Shesh (Arogga) Full Session Archive

Batch 8.0-এ Arogga/Oshudh Shesh প্রজেক্ট নিয়ে এই পুরো chat session-এ যা যা কাজ হয়েছে, সব এক জায়গায়। Account log-out হলেও local-এ থেকে যাবে।

মূল design work (brief, tokens, IA): `../arogga-redesign/`
Interview question bank + marketing post archive (general): `../../case-study-club/`

---

## ১. Project context

**নাম:** Oshudh Shesh — The Arogga Prescription Refill Reminder
**সমস্যা:** Chronic-illness/elderly patient-রা নিয়মিত ওষুধ সময়মতো রিঅর্ডার করতে ভুলে যান, কারণ reordering manual, patient-এর মনে রাখার উপর নির্ভরশীল। ফলে ওষুধ ফুরিয়ে যায়, dose miss হয়, মাঝে মাঝে health emergency হয়।
**Challenge:** শুধু "checkout date + X দিন" হিসেব করলেই হবে না, কারণ dosage change হতে পারে, medicine left-over accurately track করতে হয়, patient ভুলে skip করতে পারেন। Reminder date = medicine-শেষ-হওয়ার-date − delivery time − buffer, এবং dose change হলে recalculate হতে হবে।

---

## ২. Secondary Research — মূল findings

পুরো PDF: `../arogga-redesign/oshudh-shesh-secondary-research.pdf`

- WHO: বিশ্বব্যাপী প্রায় ৫০% মানুষ prescribed medicine ঠিকমতো খান না (Adherence to Long-Term Therapies, 2003)
- BD study: হাইপারটেনশন রোগীদের ৫৫.৯%-এর medication adherence খারাপ (Research Square, 2025)
- BD-তে ৬০+ বয়সীদের হার ২০০১-এ ৬.৪% থেকে ২০২২-এ ৯.৩%, ২০৩০-এ ১১.৫% (~২.১৫ কোটি) হবে বলে projection
- অনলাইন ফার্মেসি মার্কেট এখনো সামগ্রিক market-এর ১%-এর কম, কিন্তু দ্রুত বাড়ছে (TBS News)
- Dhaka Tribune-এর real quote: এক ব্যবহারকারী বলেছেন, অনলাইনে medicine order করা তার বয়স্ক বাবা-মায়ের ওষুধ ব্যবস্থাপনার জন্য অপরিহার্য হয়ে উঠেছে, বিশেষত emergency-তে
- Forbes (2024): Arogga-র মূল mission counterfeit medicine ঠেকানো, BD-তে ২০-৩০% ওষুধ ভেজাল বলে দাবি

---

## ৩. Competitive Analysis — মূল findings

পুরো PDF: `../arogga-redesign/oshudh-shesh-competitive-analysis.pdf`

৫টা BD app সরাসরি install করে test করা হয়েছে (Arogga, Osudhpotro, Dhaka Pharmacy, ePharma, MedEasy) + ১টা global benchmark (Amazon Subscribe & Save)।

**সবচেয়ে বড় discovery:** Arogga-র নিজের checkout flow-তে "I want to buy these items every month" নামে একটা checkbox already আছে (checkout-এর একদম নিচে, easily miss হয়ে যায়)। Check করলে ২৮ দিন পর নিজে থেকে নতুন order generate হয়, pharmacist কল করে confirm করেন। কিন্তু এটা static ২৮-দিনের timer (dosage-aware না), discoverability কম, আর pharmacist call-এর উপর পুরোপুরি নির্ভরশীল (backup reminder নেই)।

**Gap analysis summary:**
- কোনো app-এই "purchase quantity + dosage থেকে auto-calculate করা reminder যা নিজে থেকে ready cart বানায়" এই combination নেই
- ePharma সবচেয়ে কাছে গেছে (আলাদা Pill Reminder + Refill Request feature আছে) কিন্তু দুটো সংযুক্ত না
- কোনো app-ই uploaded prescription থেকে auto medicine extract করে না, এবং prescription-required medicine actually enforce করে না

---

## ৪. Interview Questions + Simulated Answers

পুরো detail: `../../case-study-club/interview-questions-final.md`

৪টা persona-র জন্য methodology-tested question bank তৈরি হয়েছে (NNGroup + Smashing Magazine principle অনুযায়ী — open-ended, non-leading, non-stacked, non-hypothetical):

- **Actual End-User (Chronic Patient)** — 19 questions
- **Family Member (Remote Caregiver)** — 9 questions (+ professional paid-caregiver alternate framing)
- **Customer Support Team** — 17 questions (⚠️ simulated answers)
- **Pharmacy/Ops Team** — 11 questions (⚠️ simulated answers)

Key methodology lessons (এই session-এ শেখা):
- Confirmatory question (existing hypothesis validate করা) আর exploratory question (unknown discover করা) আলাদা রাখতে হয়
- Co-design/exploratory question সবসময় নিজের solution-idea reveal করার আগে জিজ্ঞেস করতে হয়, নাহলে anchoring bias হয়
- Presupposition/leading framing ("did you forget") বাদ দিয়ে neutral past-incident framing ("tell me about a time...") ব্যবহার করতে হয়
- Internal stakeholder (support/ops) থেকে hypothetical/predictive question নেওয়া ঠিক আছে (এটা তাদের expertise), কিন্তু end-user-কে না

---

## ৫. Marketing Posts

পুরো collection: `../../case-study-club/marketing-posts.md`

৫টা post তৈরি হয়েছে এই session-এ:
1. Problem-validation post (secondary research data দিয়ে, দাদির গল্প)
2. Rejection-based journey post (Arogga checkbox discovery, "already exists" twist)
3. Pharmacy interview story post (⚠️ পরে invalid target-user হিসেবে চিহ্নিত, reuse করা হয়নি)
4. AI-এর সীমাবদ্ধতা vs real interview reflection post
5. Week 2 Marketing Task — Case Study Club-এ ১ সপ্তাহের journey retrospective (FINAL, submitted version)

---

## ৬. Important lessons/corrections learned this session

- Target user persona precisely define করা জরুরি: pharmacy salesman business-insight দিতে পারে কিন্তু patient pain-point validate করতে পারে না, কারণ সে actual target user (20-45 primary, 45-70 secondary Android user) না
- Simulated/AI-generated answer কখনো real interview data হিসেবে treat করা যাবে না, সবসময় ⚠️ label দিয়ে রাখতে হবে
- Marketing post লেখার সময় reference post থেকে STYLE নেওয়া যায়, কিন্তু exact line/structure কপি করা যাবে না (এই session-এ একবার ভুল করে near-copy হয়ে গিয়েছিল, ধরা পড়ার পর ঠিক করা হয়)
- Real, citable data/quote (WHO, Kettering, primary research definition) ব্যবহারের আগে verify করে নেওয়া ভালো
