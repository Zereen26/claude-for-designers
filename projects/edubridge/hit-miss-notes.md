---
project: EduBridge Bangladesh
status: complete
---

# EduBridge BD: One-Hit-One-Miss Note

Working-agreement compliance check, logged while running Class 3 (grill-me / brief interrogation).

---

**Hit 1:** I told Claude to keep asking until it was clear. It followed this. When confused, it asked clarifying questions instead of guessing, exactly as the contract says under "Ask me."

**Hit 2:** The client brief (`brief-v1-client.md`) describes a web platform, but the working contract only mentioned Android users. Claude picked up on this gap, so desktop was added as a secondary user in the contract.

**Miss 1:** When the brief mixed Bangla and English, Claude got confused about how the two languages should combine on screen. New rule added to the contract: don't mix both languages in one line of UI copy, use a language toggle button instead.

**Miss 2:** The brief already stated the bKash payment method, but Claude blended it with a generic guess about what a "typical" BD MVP scope includes, instead of just following the brief. New rule added: follow the client brief's stated MVP scope and payment method exactly, don't blend it with outside assumptions.
