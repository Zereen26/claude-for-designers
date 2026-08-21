---
created: 2026-07-31
type: reference
status: template
tags: [template, design-tokens]
---

# Tokens: <client name>

**What this file is for:** the named values this client's screens are made of.

**Why Claude needs it:** whatever is vague here comes back as guesswork when it builds. This file is the difference between a system and a colour list.

<!--
Run /information-architecture FIRST, then /design-tokens, in that order, in the
same session. IA tells you which screens exist; tokens tell you what they are made of.
Reverse the order and you are naming values for screens you have not decided on.
-->

## The one rule

**Name by purpose, never by value.** `color-action`, not `color-green`. `space-card-gap`, not `space-16`.

The moment the brand colour changes, a purpose-named token survives and a value-named token becomes a lie.

## Screen inventory

<!-- From /information-architecture. Which screens exist, and what is primary on each. -->


## Tokens

<!-- Five minimum: one colour, one type size, one spacing value, one radius, one more.
     For each, say what is wired to it. A token nothing is bound to is a note, not a token. -->

| Token | Value | What uses it |
|---|---|---|
|  |  |  |

## Proof it is wired

<!-- Change one token value and every instance should repaint together.
     If they do not move together, they are not wired. Say which token you tested. -->


## The bar

`projects/edubridge/tokens.md` is a filled version.

<!-- DELETE THE SCAFFOLDING once written. Claude reads this on every task here. -->
