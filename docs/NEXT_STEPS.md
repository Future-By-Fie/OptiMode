# Prototype verification and next milestones

## What the repository claims
A Vite-based, synthetic Community Credits demonstration. No real payments, attribution, tracking or cash-outs.

## Local verification checklist
- Install Node.js 20+.
- Run `npm install`.
- Run `npm test`.
- Run `npm run build`.
- Run `npm run dev` and manually test OFF by default, opt-in and 70/30 allocation.
- Record the actual command outputs before marking any checks as passed.

## Next technical tasks
1. Expand allocation tests to cover zero, large and invalid inputs, rounding and repeated toggles.
2. Define a server-verifiable event and anti-fraud model before discussing real rewards.
3. Add keyboard and screen-reader smoke checks.
4. Keep all credits explicitly fictional until financial, legal and tax questions are assessed.

## Good first issue
Add a deterministic edge-case test table for credit allocation and document the intended rounding rule.
