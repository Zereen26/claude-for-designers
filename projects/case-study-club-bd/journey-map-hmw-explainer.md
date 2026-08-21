# User Journey Map ও HMW Question — Oshudh Shesh প্রজেক্ট, A to Z ব্যাখ্যা

Ei document tomar Figma board-e থাকা Atique-এর User Journey Map আর HMW-to-Feature mapping table-টা ধাপে ধাপে ব্যাখ্যা করে। Pore পরে ভুলে গেলে এটাই reference হিসেবে ব্যবহার করতে পারবে।

---

## ১. User Journey Map আসলে কী, কেন বানাই

User Journey Map হলো একটা ভিজ্যুয়াল টাইমলাইন, যেখানে একজন real user (এখানে Atique) তার সমস্যাটা প্রথম টের পাওয়া থেকে শুরু করে সমাধান পর্যন্ত পুরো পথে কী করেন, কী ভাবেন, কোথায় আটকে যান, আর কোথায় সুযোগ আছে, সেটা স্টেজ ধরে ধরে দেখানো হয়।

কেন বানাই: শুধু একটা ফিচার লিস্ট বানালে বোঝা যায় না ফিচারটা user-এর জীবনের ঠিক কোন মুহূর্তে দরকার। Journey Map সেই context-টা দেখায় — কোন মুহূর্তে user কষ্ট পাচ্ছেন (pain point), আর সেই কষ্টের জায়গাতেই design intervention (opportunity) বসানো উচিত।

## ২. Journey Map-এর গঠন

তোমার board-এ ৫টা stage আর প্রতিটা stage-এর নিচে ৪টা row আছে।

**৫টা Stage** (Atique-এর journey অনুযায়ী):
1. Realize Need — ওষুধ শেষ হচ্ছে সেটা টের পাওয়া
2. Prepare for Purchase — অর্ডার করার আগের প্রস্তুতি
3. Purchase — আসলে অর্ডার করা
4. Receive — ডেলিভারি হাতে পাওয়া
5. Manage Medication — ওষুধ ব্যবহার ও ট্র্যাক করা

**৪টা Row:**
- **What They Do** — user আসলে কী action নেন (behavior)
- **What They Think** — সেই মুহূর্তে user-এর মনে কী চলে (thought, quote-এর মতো লেখা)
- **Pain Points** — কোথায় কষ্ট/বাধা পাচ্ছেন
- **Opportunities** — সেই কষ্টটা ঠিক করার জন্য কী বানানো যেতে পারে (এখান থেকেই feature আইডিয়া বের হয়)

## ৩. Pain Point vs Opportunity vs Frustration — পার্থক্য

- **Pain Point** = user-এর journey-তে ঘটা একটা নির্দিষ্ট বাধা বা সমস্যা (fact-based, "কী ঘটছে")
- **Frustration** = সেই pain point-এর ফলে user-এর ভেতরের emotional reaction ("কেমন লাগছে") — এটা "What They Think" row-এ emoji/quote দিয়ে ধরা হয়
- **Opportunity** = সেই pain point + frustration মিলিয়ে, design/feature দিয়ে ঠিক কী করা যেতে পারে তার প্রস্তাব

তিনটা একে অপরের সাথে সরাসরি যুক্ত: Pain Point ঘটে → Frustration তৈরি হয় → Opportunity সেটার উত্তর দেয়।

---

## ৪. তোমার Journey Map, স্টেজ ধরে ধরে ব্যাখ্যা

### Stage 1 — Realize Need

**What They Do:** Check Strips (ওষুধের পাতা চেক করা), Notice Low Stock (স্টক কমে যাওয়া খেয়াল করা)

**What They Think:** "ওষুধ শেষ হয়ে আসছে, নতুন করে কেনা দরকার।" / "আবার নিয়মিত হিসাব রাখা কঠিন।"

**Pain Point:** ম্যানুয়ালি পাতায় হিসাব রাখা কষ্টকর, কাজের চাপে মনে থাকে না।
→ এটা তোমার real research-এ সরাসরি প্রমাণিত: survey-তে ৫৩% বলেছেন "কখন শেষ হবে মনে থাকে না"-ই তাদের আসল সমস্যা, আর Atique নিজেই বলেছিলেন "অফিসের চাপে ভুলে গেছিলাম"।

**Opportunity:** প্রতিদিনের ডোজের উপর ভিত্তি করে অটোমেটিক স্টক ট্র্যাকিং ও অ্যালার্ট।

### Stage 2 — Prepare for Purchase

**What They Do:** Prescription Check (প্রেসক্রিপশন মেলানো), List down Needs (ওষুধের লিস্ট তৈরি করা)

**Pain Point:** হাতে লেখা প্রেসক্রিপশন পড়া কঠিন, ভুল ওষুধ সিলেক্ট করার ভয়।
→ এটা তোমার competitive analysis-এর ফাইন্ডিংয়ের সাথে মেলে — কোনো প্রতিযোগী অ্যাপই প্রেসক্রিপশন থেকে automatic ওষুধ read করে না, সব জায়গায় manual verification (call/pharmacist-based)।

**Opportunity:** প্রেসক্রিপশন স্ক্যান বা টেক্সট করে দিলে স্মার্ট অপশন সাজেস্ট করা।

### Stage 3 — Purchase

**What They Do:** Search Pharmacy/App, Visit/Open App, Search Medicine by Prescription or List, Order/Add to Cart, Order Confirmation

**Pain Point:** আলাদা প্রোডাক্ট সার্চ করার ঝামেলা, দোকানভেদে স্টক না পাওয়া।
→ MedEasy-র competitive analysis-এ পাওয়া গিয়েছিল, সার্চ ফাংশন generic/drug-class বুঝে গ্রুপ করে না, ভুল ওষুধ কার্টে চলে আসার ঝুঁকি থাকে। এটা একই সমস্যার আরেকটা রূপ।

**Opportunity:** সেভ থাকা প্রেসক্রিপশন থেকে অটোমেটিক 1-Tap Reorder Cart সুবিধা।

### Stage 4 — Receive

**What They Do:** Collect/Receive Medicine, Verify/Check Medicine & Quantity, Payment

**Pain Point:** ভুল ডেলিভারি সময়, প্যাকেটে অসংগতি।
→ Survey-তে অনলাইনে ওষুধ কেনার প্রধান ভয় হিসেবে "দেরিতে ডেলিভারি পাওয়ার ভয়" আর "নকল/মেয়াদ-উত্তীর্ণ ওষুধের ভয়" দুটোই সমান (প্রতিটা ৩২%) উঠে এসেছিল — এই pain point ঠিক সেই ভয়টাকেই represent করছে।

**Opportunity:** প্যাকেটে ওষুধ সহজে চেনার জন্য ডিজিটাল ভেরিফিকেশন সুবিধা।

### Stage 5 — Manage Medication

**What They Do:** Store & Use (ওষুধ সংরক্ষণ ও ব্যবহার করা)

**Pain Point:** কেয়ারগিভার দূরে থাকায় বাবা-মার প্রতিদিন ওষুধ খাওয়ার আলাদা রিমাইন্ডার লাগে, চিন্তায় থাকতে হয়।
→ এটা সরাসরি Atique-এর নিজের quote: "খুব খারাপ লাগছিল, মনে হচ্ছিল আমি দূরে থাকি দেখেই এমন হলো।" Survey-তেও ৭৪% caregiver বলেছেন এটা "বেশ ঝামেলার", কেউই "না" বলেননি।

**Opportunity:** দূরে থাকা caregiver-এর জন্য ভিজ্যুয়াল রিমাইন্ডার ও Caregiver Dashboard।

---

## ৫. HMW Question আসলে কী

HMW মানে **"How Might We"** (আমরা কীভাবে পারি...)। এটা একটা pain point-কে সরাসরি "সমস্যা" হিসেবে না রেখে, একটা open-ended, solution-খোঁজার প্রশ্নে বদলে দেয়।

যেমন: Pain point "ম্যানুয়ালি হিসাব রাখা কষ্টকর" থেকে HMW হয় — **"ওষুধ শেষ হওয়ার আগেই কীভাবে ব্যবহারকারীকে জানানো যায়?"**

এই প্রশ্নের ভালো দিক হলো, এটা কোনো একটা নির্দিষ্ট সমাধানে আটকে রাখে না, বরং অনেকগুলো সম্ভাব্য সমাধানের দরজা খুলে রাখে — তারপর সেখান থেকে একটা নির্দিষ্ট feature বেছে নেওয়া হয়।

## ৬. তোমার HMW → Feature Mapping ব্যাখ্যা

| HMW Question | কোন Pain Point থেকে এলো | Feature | Feature কী করে |
|---|---|---|---|
| ১. ওষুধ শেষ হওয়ার আগেই কীভাবে জানানো যায়? | Stage 1 pain point (মনে না থাকা) | Predictive Refill Reminders | দৈনিক ডোজ হিসাব করে ৩-৪ দিন আগেই রিমাইন্ডার পাঠাবে |
| ২. ঘরে কতগুলো ওষুধ বাকি আছে সহজে কীভাবে দেখা যাবে? | Stage 1-এর একই pain point-এর আরেকটা দিক | Digital Pill Box Dashboard | অ্যাপের ড্যাশবোর্ডে ঠিক কতটা ওষুধ বাকি তা পরিষ্কার দেখাবে |
| ৩. ব্যস্ততার মাঝে দ্রুত কীভাবে আবার অর্ডার করা যাবে? | Stage 3 pain point (সার্চ/অর্ডারের ঝামেলা) | One-Click Automated Cart Refill | আগের অর্ডার থেকে ১ ক্লিকে পুরো কার্ট রিফিল |
| ৪. বয়স্ক মানুষরা যেন অ্যাপে আটকে না যান? | Jakir Hossain-এর মতো low-tech-comfort user | Direct Support Team Call System | সমস্যা হলে এক বাটনে সরাসরি সাপোর্ট টিমের কলে যাওয়া যাবে |
| ৫. পরিবারের একাধিক মানুষের ওষুধ কীভাবে আলাদা করে সামলানো যাবে? | Stage 5 pain point + professional caregiver interview finding ("অনেক রোগীর একসাথে ২০-২৫টা মেডিসিন") | Multi-Patient Profile & Tagging | বাবা, মা বা অন্য সদস্যদের নাম দিয়ে আলাদা প্রোফাইল খোলা যাবে, কার কোন ওষুধ তা সহজে বোঝা যাবে |
| ৬. সব ওষুধ একবারে না কিনে ভেঙে ভেঙে কেনার সুযোগ রাখা যায় কীভাবে? | Purchase stage-এর affordability/flexibility angle | Flexible Partial Purchase | পুরো বক্স কেনার বাধ্যবাধকতা নেই, প্রয়োজনমতো কয়েকটা পাতা/স্ট্রিপ সিলেক্ট করে কেনা যাবে |
| ৭. ডাক্তার ওষুধ বদলে দিলে অ্যাপে কীভাবে আপডেট হবে? | Stage 5 pain point + survey-র ৭৯% dose-change difficulty | Prescription & Dosage Update Flow | নতুন প্রেসক্রিপশনের ছবি তুলে আপলোড করলেই ওষুধ/সময় বদলে যাবে |
| ৮. পছন্দের ব্র্যান্ড না পাওয়া গেলে কী করা যায়? | Stage 3 pain point (স্টক না পাওয়া) | Generic Stock-Out Alternatives | একই উপাদানের বিকল্প ব্র্যান্ড অ্যাপ নিজে থেকে দেখাবে |
| ৯. রোগী সময়মতো ওষুধ খাচ্ছেন কি না নিশ্চিত হওয়া যাবে কীভাবে? | Stage 5 pain point (caregiver-এর দুশ্চিন্তা) | Medication & Refill Tracker | রোগীর ডোজ-নেওয়ার অবস্থা ও পরবর্তী refill date লাইভ দেখা যাবে |

সব ৯টা HMW question এখন টেবিলে আছে, কোনো গ্যাপ নেই।

---

## ৭. পুরো চেইনটা একসাথে দেখলে

এই পুরো process-টা একটা লজিক্যাল চেইন:

**Real interview/survey evidence → Journey Map-এ Pain Point হিসেবে বসানো → সেই Pain Point-কে HMW প্রশ্নে রূপান্তর → HMW-এর উত্তর হিসেবে একটা নির্দিষ্ট Feature**

এই চেইনটাই প্রমাণ করে যে প্রতিটা feature কল্পনা থেকে আসেনি, বরং একটা নির্দিষ্ট real pain point থেকে সরাসরি বের হয়ে এসেছে। এটাই একটা ভালো case study-র মূল কাঠামো — এবং এটাই মেন্টররা judge করেন যখন তারা জিজ্ঞেস করেন, "এই ফিচারটা কেন বানালে?"

---

## ৮. আজকের ক্লাসের জন্য প্রস্তুতি — মেন্টর কী কী জিজ্ঞেস করতে পারেন

মেন্টর মূলত টেস্ট করবেন তুমি জিনিসগুলো মুখস্থ করেছ, নাকি সত্যিই বুঝেছ। এর জন্য সাধারণত directly definition জিজ্ঞেস না করে, তোমার নিজের board থেকে উদাহরণ দিয়ে জিজ্ঞেস করবেন। নিচে category ধরে সম্ভাব্য প্রশ্ন আর কীভাবে উত্তর দেবে তার guide দেওয়া হলো।

### ক) Definition ধরে আটকানো
- "User Journey Map আর Feature list-এর মধ্যে পার্থক্য কী? Journey Map না বানিয়ে সরাসরি feature বানালে কী সমস্যা হতো?"
  → উত্তরের মূল পয়েন্ট: Journey Map context দেখায় (কখন, কেন দরকার), শুধু feature list সেটা দেখায় না।
- "HMW question-কে statement-এ না লিখে question আকারে লেখা হয় কেন?"
  → উত্তরের মূল পয়েন্ট: Statement একটা নির্দিষ্ট সমাধানে আটকে ফেলে, question বহু সমাধানের দরজা খোলা রাখে।

### খ) তোমার board-এর নির্দিষ্ট অংশ ধরে জিজ্ঞেস করতে পারেন
- "এই যে 'Pain Points' row-এ লিখেছ, এটা কি assumption নাকি real user বলেছেন? কে বলেছেন, কোথায় প্রমাণ আছে?"
  → প্রতিটা pain point-এর জন্য প্রস্তুত থাকো বলতে এটা Jakir Hossain-এর interview থেকে, Atique-এর interview থেকে, নাকি survey-র সংখ্যা থেকে এসেছে (এই document-এর ৪ নম্বর অংশে সব লিংক করা আছে, ঝালিয়ে নাও)।
- "এই Journey Map কি শুধু Atique-এর (primary user) জন্য, নাকি Jakir Hossain-এর (secondary user) জন্যও এক রকম হবে?"
  → সৎ উত্তর: এটা মূলত Atique-এর journey, কারণ সে নিজে অ্যাপ ব্যবহার করে; Jakir Hossain-এর journey আলাদা হবে কারণ তিনি নিজে কিছু "Do" করেন না, বেশিরভাগ ধাপ মেয়ের মাধ্যমে ঘটে — এটা একটা gap হিসেবে খোলাখুলি স্বীকার করা ভালো, লুকানোর দরকার নেই।
- "'What They Think' row-এ emoji/quote-গুলো কি সরাসরি interview-এর quote, নাকি তুমি নিজে অনুমান করে লিখেছ?"
  → সততার সাথে বলো কোনগুলো সরাসরি quote (documented) আর কোনগুলো তোমার synthesis/interpretation।

### গ) Pain Point vs Frustration vs Opportunity গুলিয়ে দেওয়ার চেষ্টা
- "এই row-টা কি Pain Point নাকি Frustration? পার্থক্য বলো তো।"
- "একটা Pain Point-এর জন্য একাধিক Opportunity থাকতে পারে কি? তোমার board-এ এমন কোনো উদাহরণ আছে?"
  → হ্যাঁ, উদাহরণ: Stage 1-এর একই pain point থেকে দুটো আলাদা feature বেরিয়েছে (Predictive Refill Reminders + Digital Pill Box Dashboard) — এটা নিজে থেকে বলতে পারলে ভালো ইম্প্রেশন হবে।

### ঘ) HMW → Feature যুক্তি চ্যালেঞ্জ করা
- "এই HMW প্রশ্নের উত্তরে তুমি এই feature-টাই কেন বেছে নিলে? অন্য কোনো সমাধান ভাবোনি?"
  → প্রতিটা feature-এর জন্য অন্তত একটা বিকল্প ভেবে রাখো, আর কেন সেটা বাদ দিয়ে এটাই বেছেছ তার যুক্তি রেডি রাখো।
- "সব ৯টা feature কি একসাথে MVP-তে থাকবে, নাকি priority আছে? সবচেয়ে জরুরি কোনটা, কেন?"
  → এই প্রশ্নটা প্রায় নিশ্চিত আসবে। আগে থেকে ভেবে রাখো কোন ২-৩টা feature সবচেয়ে বেশি pain point কভার করে (Predictive Refill Reminders + One-Click Cart Refill সাধারণত core মনে হচ্ছে)।

### ঙ) Edge case / practicality ধরে আটকানো
- "যদি ইউজারের smartphone না থাকে বা internet slow হয়, তাহলে Predictive Reminder কাজ করবে কীভাবে?"
- "Direct Support Team Call System scale করলে (হাজার হাজার ইউজার) এটা operationally sustainable কি না ভেবেছ?"
- "Multi-Patient Profile ফিচারে privacy/consent-এর কোনো ঝুঁকি আছে কি না (একজনের ওষুধের তথ্য আরেকজন দেখে ফেলছে)?"
  → এগুলোর perfect উত্তর না থাকলেও সমস্যা নেই, কিন্তু "হ্যাঁ এটা একটা open question, এখনো ভাবিনি" বলাটাও honest ও গ্রহণযোগ্য উত্তর — অজানাকে জানার ভান করার চেয়ে ভালো।

### চ) Success measurement
- "এই feature-গুলো কাজ করছে কি না, সেটা কীভাবে বুঝবে? কোন metric দেখবে?"
  → আগে থেকে ভেবে রাখো, যেমন: reorder checkbox ব্যবহার বাড়লো কি না (আগে যেটা invisible ছিল), stockout-জনিত emergency order কমলো কি না, ইত্যাদি।

**সবচেয়ে গুরুত্বপূর্ণ কথা:** প্রতিটা উত্তরে চেষ্টা করবে নিজের real research-এর দিকে ফিরে যেতে ("আমার interview-এ Atique বলেছিলেন...", "সার্ভেতে ৭৯% বলেছেন...")। এটাই দেখায় তুমি ধারণা থেকে না, evidence থেকে কাজ করছ, যেটা মেন্টররা সবচেয়ে বেশি মূল্য দেন।
