---
created: 2026-07-27
type: reference
status: complete
tags: [edubridge, class-5, class-6, reference, design-system, answer-key]
name: EduBridge BD
description: Tutor booking flow for the Bangladesh launch of a UK/Australia tutoring marketplace
colors:
  navy-ink: "#0A2540"
  confirm-green: "#00A651"
  confirm-green-pressed: "#007A3D"
  bkash-pink: "#E2136E"
  screen-surface: "#FFFFFF"
  page-surround: "#F3F4F6"
  border-default: "#E5E7EB"
  text-secondary: "#6B7280"
  text-muted: "#9CA3AF"
  text-tertiary: "#374151"
  placeholder: "#D1D5DB"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 600
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.05em"
rounded:
  sm: "8px"
  md: "12px"
  full: "100px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
components:
  button-primary:
    backgroundColor: "{colors.confirm-green}"
    textColor: "{colors.screen-surface}"
    rounded: "{rounded.md}"
    height: "52px"
  button-primary-active:
    backgroundColor: "{colors.confirm-green-pressed}"
  input-field:
    backgroundColor: "{colors.screen-surface}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.sm}"
    height: "40px"
  badge-verified:
    backgroundColor: "{colors.confirm-green}"
    textColor: "{colors.screen-surface}"
    rounded: "{rounded.full}"
    padding: "3px 8px"
---

# Design System: EduBridge BD

**Reference, not homework.** This is the finished design system behind `booking-screen.html`, written up after the screen was built. It is the answer key for Class 5, not the exercise. Read it to see what a system looks like when every value is load-bearing, then write your own in `tokens.md`.

You read this file. You do not fill it in. If you read it before you have done `tokens.md` yourself, you will copy it, and copying it teaches you nothing.

## 1. Overview

**Creative North Star: "The Verified Ledger"**

Everything on screen reads like a receipt the parent can trust before they hand over money: plain numbers, a checkmark that means something specific (a verified tutor, not a decoration), no gradient or flourish standing between the reader and the facts. The system is built for a parent on a sub-15K taka Android over 3G, checking this screen carefully because a stranger is about to receive their child's tuition fee. Confidence here comes from clarity, not polish.

This system explicitly rejects generic fintech/SaaS visual language: no cream or sand backgrounds, no hero-metric tiles, no gradient text, no decorative uppercase eyebrows scattered above every section, no numbered-step scaffolding invented for effect. The client's own framing, "LinkedIn meets Airbnb," is the actual reference: professional credibility (LinkedIn) plus a transactional booking flow you can complete without anxiety (Airbnb), not a category default.

**Key Characteristics:**
- Flat, bordered surfaces; zero shadows anywhere in the built screen
- One accent color (green) does all the "this is safe to proceed" signaling
- A second, market-specific accent (bKash pink) exists only to make the payment method instantly recognizable, never for decoration
- System font stack, no custom webfont loaded yet
- Every color and shape is load-bearing: nothing exists purely to look designed

## 2. Colors

A restrained palette: one dark neutral doing double duty as brand and ink, one saturated green carrying all "confirm" actions, one borrowed brand color (bKash) used exactly once for payment-method recognition.

### Primary
- **Navy Ink** (#0A2540): Header background, tutor avatar background, all primary headline and price text. This is the brand-authority color from the original client brief and functions as both a surface color (header, avatar) and the default ink for anything that needs to read as "official."

### Secondary
- **Confirm Green** (#00A651): The verified-tutor badge, the input focus border, and the primary CTA button. This is the one color in the system that means "proceed", used nowhere else, so its appearance is always meaningful.
- **Confirm Green, Pressed** (#007A3D): `:active` state on the CTA button only.

### Tertiary
- **bKash Pink** (#E2136E): Used exactly once, as the "b|" prefix inside the payment input. Its only job is instant brand recognition for the country's dominant mobile payment method. A parent should recognize this is bKash before reading a single word.

### Neutral
- **Screen Surface** (#FFFFFF): The card-width screen itself, buttons' text color, input backgrounds.
- **Page Surround** (#F3F4F6): The area behind the 400px-max screen on wider viewports; also reused as the innermost row divider color inside session details, which is intentionally quieter than the section-level divider.
- **Border Default** (#E5E7EB): Section dividers, input borders, CTA bar top border.
- **Text Secondary** (#6B7280): Detail-row labels (Subject, Duration, Format).
- **Text Muted** (#9CA3AF): Section labels, price captions, CTA response-time note, the quietest text in the system.
- **Text Tertiary** (#374151): Tutor's subject line, one step darker than Text Secondary.
- **Placeholder** (#D1D5DB): Input placeholder text only.

### Named Rules
**The One Confirm Color Rule.** Green appears in exactly three places: the verified badge, the input focus ring, and the CTA button. If a new element wants to "pop," it does not get a new color; it earns green only if it means the same thing: trust confirmed or action ready.

## 3. Typography

**Body/Display Font:** `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` (system stack; no custom webfont currently loaded)

**Character:** Plain, native-feeling system type. No display flourish. The system font stack itself is the point: it renders instantly on a 3G connection with no font-loading flash, and it looks like the parent's own phone OS, not an imported "app" aesthetic.

### Hierarchy
- **Display** (700, 22px, 1.2): The session price (৳800). The single largest, boldest number on screen. It is the number the parent is actually deciding on.
- **Headline** (700, 18px, 1.2): Tutor name. Second-largest weight; the person being trusted.
- **Title** (600 to 700, 17px): Header bar title and CTA button label. Navigational and action-level text.
- **Body** (400 to 500, 15px, 1.4): Detail-row labels and values, tutor subject line. Max content here is a few words; no line-length concern at this width.
- **Label** (600, 12px, 0.05em tracking, uppercase where used): Section labels ("Session details") and the verified badge. The smallest, most functional text in the system.

### Named Rules
**The No-Decoration-At-Size Rule.** Nothing above 22px exists in this screen, and nothing needs to. A booking-confirmation flow is not a place to compete for attention with typographic scale; it is a place to remove doubt with clarity.

## 4. Elevation

Flat by design. There is no `box-shadow` anywhere in the built screen. Depth and grouping come entirely from 1px/1.5px borders and background contrast (the white 400px-wide screen sitting on a light-gray page surround). This is a deliberate fit for the register: a transactional receipt-like flow reads as more trustworthy when it looks like a form, not a floating card stack.

### Named Rules
**The Flat-By-Default Rule.** No shadow is added to imply hierarchy. If two elements need visual separation, use a border or a background-color step from the Neutral ramp, never a drop shadow.

## 5. Components

Plain and load-bearing: no decorative flourish anywhere. Every color and shape signals something real: green means confirmed or actionable, pink means bKash, the badge means an actual verification happened. Nothing on this screen exists to "look designed."

### Buttons
- **Shape:** 12px radius (`{rounded.md}`), full width, 52px height, the single largest tap target on screen, sized for a rushed thumb.
- **Primary:** Confirm Green (#00A651) background, white text, 700 weight, 17px. This is the only button in the current build.
- **Active:** Background steps to #007A3D on `:active`. No hover state defined (touch-first surface; no persistent hover).

### Badges
- **Verified badge:** Pill shape (100px radius), Confirm Green background, white 12px/600 text, a literal `✓` prefix. Always paired with the tutor's name; never shown alone.

### Inputs
- **Style:** 8px radius (`{rounded.sm}`), 1.5px Border Default stroke, 40px height, 16px text (deliberately larger than the 15px body text to prevent iOS auto-zoom on focus).
- **Focus:** Border color shifts to Confirm Green. No glow, no shadow, border-color change only.
- **Prefix:** The bKash-pink "b|" glyph sits inside the input as a fixed-position prefix, not a separate label.

### Containers
- **No card component exists in this build.** Sections (tutor summary, session details, payment) are separated by full-width 1px borders inside a single white screen surface, not by nested cards. This is a deliberate anti-pattern avoidance: a booking receipt should read as one continuous document, not a stack of cards.

### Navigation
- **Style:** Single fixed header bar, Navy Ink background, white text, back-chevron + title only. No tabs, no secondary nav; this is a single-purpose booking screen, not a shell.

## 6. Do's and Don'ts

### Do:
- **Do** keep green (#00A651) reserved for verified/confirm/proceed signals only: the badge, the input focus ring, the CTA.
- **Do** use the bKash pink (#E2136E) exactly once per screen, as brand recognition for the payment method, never as a general accent.
- **Do** separate sections with a 1px border on a single continuous white surface, not with nested cards.
- **Do** size interactive elements (buttons, inputs) for a rushed thumb on a cheap touchscreen: 52px CTA, 40px input, both full-width.
- **Do** keep the display-weight number (price) the largest, boldest text on the screen, it's the thing being decided.

### Don't:
- **Don't** introduce a cream/sand/paper body background. The current #F3F4F6 page surround is a neutral gray, not a warm tint, and should stay that way.
- **Don't** add a drop shadow anywhere. Depth comes from borders and surface contrast only (see Elevation).
- **Don't** wrap sections in individual cards with their own radius and shadow. One continuous surface, bordered dividers.
- **Don't** add a second saturated accent color beyond green and the single-use bKash pink. A third "pop" color would dilute what green currently guarantees.
- **Don't** add a tiny uppercase tracked eyebrow above a section purely for decoration. The one uppercase label in this system ("Session details") is functional wayfinding, not a stylistic tic to repeat elsewhere.
- **Don't** gate the verified badge's meaning on color alone. It must always carry the checkmark glyph and the word "Verified," never just a colored dot.
