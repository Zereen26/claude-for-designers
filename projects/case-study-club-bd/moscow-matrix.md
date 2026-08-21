# Oshudh Shesh — Feature Prioritization Matrix (MoSCoW Framework, FINAL)

North star: "Oshudh Shesh" ব্রিফের Tanvir/Salma Begum story আর challenge statement ("Design a refill system that begins after checkout, calculate when each medicine will run out, remind before supply ends, provide a ready-made cart for reorder") — সব prioritization এই brief-এর সাথে মিলিয়ে করা হয়েছে, তারপর নিজের real research (interview, survey, competitive analysis) দিয়ে সমর্থন/সম্প্রসারণ করা হয়েছে।

| ক্যাটেগরি | ফিচার | কেন এই priority |
|---|---|---|
| **Must Have** (MVP) | Medication & Refill Tracker | ব্রিফ সরাসরি বলছে: "calculate when each medicine will run out based on quantity and dosage" |
| **Must Have** (MVP) | Predictive Refill Reminders and call | ব্রিফ সরাসরি বলছে: "remind the patient or a family caregiver before the supply ends" |
| **Must Have** (MVP) | One-Click Automated Cart Refill | ব্রিফ সরাসরি বলছে: "provide a ready made cart containing the medicines that need to be reordered" |
| **Must Have** (MVP) | Prescription & Dosage Update | ব্রিফের গল্পেই আছে: "a basic calendar alert... does not know that her doctor changed the dosage" — dose বদলালে যদি সিস্টেম না জানে, পুরো refill hisab ভুল হয়ে যায়। Survey-তেও ৭৯% respondent dose-change ট্র্যাক করা কঠিন মনে করেন |
| **Should Have** (Phase 2) | Generic Stock-Out Alternatives | ব্রিফের গল্পেই আছে: "the local pharmacy does not stock that particular brand" — এটাই Salma Begum-এর dose miss হওয়ার একটা সরাসরি কারণ, তাই ব্রিফ নিজেই এটা প্রমাণ করে |
| **Should Have** (Phase 2) | Direct Support Team Call System | ব্রিফে সরাসরি নেই, কিন্তু নিজের research থেকে: Jakir Hossain-এর মতো low-tech-comfort ইউজার নিজে অ্যাপ ব্যবহার করতে পারেন না ("আমার মেয়েই অর্ডার করে দেয়")। এটা ছাড়া secondary-user segment পুরোপুরি বাদ পড়ে যায় |
| **Should Have** (Phase 2) | Multi-Patient Profile & Tagging | ব্রিফে single caregiver-single parent (Tanvir-Salma), কিন্তু professional caregiver interview-এ পাওয়া গেছে একসাথে ২০-২৫টা মেডিসিন সামলাতে হয় একাধিক রোগীর জন্য — বাস্তব প্রয়োজন আছে, কিন্তু MVP-blocking না |
| **Could Have** (Phase 3) | Everyday Medicine Reminder (Alarm) | Real research-এ পাওয়া শক্তিশালী insight (antibiotic dose miss হওয়ার ভয়ে multiple alarm ব্যবহার), কিন্তু এটা ব্রিফের core challenge (refill prediction) থেকে আলাদা একটা সমস্যা (daily dose adherence) — তাই valuable কিন্তু scope-adjacent |
| **Could Have** (Phase 3) | AI Automatic Prescription Read & Refill | ৫টা প্রতিযোগী অ্যাপের কেউই এটা করে না, technically জটিল ও ভুল হলে health risk — future R&D হিসেবে রাখা ঠিক |
| **Could Have** (Phase 3) | Flexible Partial Purchase | কোনো নির্দিষ্ট interview/survey finding সরাসরি এটাকে সমর্থন করে না, evidence দুর্বল |
| **Could Have** (Phase 3) | Discount/Point for Every Reorder | Customer Care-এর সাজেশন ছিল, valid growth idea কিন্তু core সমস্যা সমাধানের জন্য জরুরি না |
| **Won't Have** (এখনের জন্য না) | Prescription Management System (Doctor App Direct Referral, Doctime-এর মতো) | বাইরের doctor-app-এর সাথে partnership লাগবে, Arogga একা এটা control করতে পারবে না |

## এই ভার্সনে আগের থেকে যা বদলাল

- **Generic Stock-Out Alternatives**: Could → **Should** (ব্রিফের নিজের গল্প এটা প্রমাণ করে)
- **Everyday Medicine Reminder (Alarm)**: আগে ভুলভাবে Should-এ তোলার সাজেশন দেওয়া হয়েছিল, সংশোধন করে **Could-এই রাখা হলো** — ব্রিফের core challenge থেকে আলাদা সমস্যা বলে
- বাকি সব আগের যুক্তি অনুযায়ীই আছে (Direct Support Call System ও Multi-Patient Profile Should-এ, Flexible Partial Purchase ও Discount/Point Could-এ, Doctor Referral Won't-এ)
