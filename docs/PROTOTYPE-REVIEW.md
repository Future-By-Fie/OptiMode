# OptiMode — Engineering review

## Canonical concept
Optional Community Credits (ON/OFF); proposed allocation **70% user / 30% platform**.

## Runnable demo
- `index.html` and `src/main.mjs`: synthetic opt-in UI.
- `src/credits.mjs`: pure calculation functions.
- `test/credits.test.mjs`: Node built-in test runner.
- `npm test` and `npm run build`: local verification commands.

## Invariants
1. Default participation is OFF.
2. Opting out generates zero credits.
3. Integer allocation preserves the total with no fractional credit loss.
4. Invalid inputs are rejected.
5. All displayed values are fictional; no balance is persisted.

## Open questions
- What constitutes eligible activity and who validates it?
- How are credits funded and what, if anything, are they redeemable for?
- How are fraud, bots, collusion, moderation, reversals and disputes handled?
- What regulatory, tax and consumer obligations apply to the eventual implementation?

## Security and privacy
No authentication, backend, payment rails or real personal data. A production system must calculate balances server-side and cannot trust client-side credit amounts.

## Migration note
The previous notification-manager files and documentation were an unrelated concept mistakenly placed in this repository. They are deliberately replaced rather than maintained as a competing OptiMode definition.
