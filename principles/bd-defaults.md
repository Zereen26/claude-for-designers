# BD Context Block

Paste this block at the top of any prompt where the output is for a Bangladeshi user. It tells Claude what your default user looks like so you do not have to describe them from scratch every time.

```
Context for every output:
- Users are 18-45, mobile-first, often on 3G or 4G.
- Default device is a sub-15,000 taka Android with under 4GB RAM.
- Users expect bKash-style payment flows. Green is the trust color.
- Bangla and English mix is normal. Numbers are mostly English digits.
- Animations over 150ms feel laggy on common devices. Avoid them.
- Trust signals matter more than aesthetics. Show the policeman, not the gradient.
```

## How to extend it

These six lines cover the average BD user. For specific products, add lines:

- **Fintech**: payment-method preferences, KYC sensitivity, fraud awareness
- **Edtech**: parental decision-makers, after-school timing, Bengali-medium expectations
- **Commerce**: cash-on-delivery as default, return-on-doorstep workflows
- **Ride-share**: pillion seating, helmet stigma, weather assumptions

The point is to give Claude something specific to anchor on. Generic prompts produce generic output. The size of your context block is the size of your moat.

## When to skip the block

When the output is not for a BD user. If your client is German, the BD assumptions are wrong. Write a different context block for that client and reuse it.
