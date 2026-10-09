# OptiMode — Your attention. Your rules.

OptiMode is an early-stage, mobile-first prototype exploring a user-controlled attention layer: a calmer way to decide which digital interruptions arrive now, which are grouped for later, and which are muted.

> **Status: concept / MVP prototype.** Inbox items and attention statistics are synthetic demo data. OptiMode does not currently control notifications from your operating system or third-party apps.

## Product hypothesis
Digital services compete for attention independently. OptiMode explores a different default: users set a simple policy for how interruptions should be handled.

## Three modes
- **Focus:** priority contacts arrive now; all other items wait for a scheduled check-in. Category rules are paused.
- **Balanced:** priority contacts arrive now; everyone else follows category rules (Now, Scheduled, or Muted).
- **Open:** all demo notifications arrive now. Category rules are paused.

## Prototype features
- Responsive dashboard and illustrative daily reflection.
- Attention inbox with synthetic notifications; mark items handled or snoozed.
- Category rules for People, Work, Social, Shopping, and News.
- Priority contacts and quiet-hours preferences.
- Browser-local persistence and a reset-to-demo action.

## Important limitations
This is an interaction prototype, not a system-level notification manager. It does not intercept, delay, mute, or read real OS/app notifications. Quiet hours are saved as a preference but are not enforced. Metrics are illustrative, not measured user behavior. These boundaries are intentional and should not be represented as production capabilities.

## Tech stack
TypeScript, React, Vite, TanStack Router, Tailwind CSS, shadcn/ui, Vitest.

## Run locally
Requires Bun and a recent Node.js runtime compatible with the dependencies.

```bash
bun install
bun run dev
bun run test
bun run lint
bun run build
```

See `package.json` for the canonical scripts. Type checking can be run with `bunx tsc --noEmit` if TypeScript is installed.

## Privacy
The prototype uses synthetic demo content and stores its settings in the browser's local storage. No account, cloud database, or external notification integration is configured. Do not enter sensitive personal information into the demo.

## Roadmap
- [x] Interactive concept with synthetic data
- [x] Focus / Balanced / Open mode model
- [x] Category rules and priority contacts
- [x] Local persistence for demo preferences
- [ ] Validate usability and user understanding
- [ ] Compare against existing focus modes, notification summaries, and digital wellbeing tools
- [ ] Choose a target platform and validate API/permission constraints
- [ ] Review privacy and security before any real notification integration

## Contributing
Feedback, issues, and implementation ideas are welcome. Please keep reports reproducible and avoid including real personal notification data. Product direction and platform feasibility are still being validated.

## Project links
- [Lovable editor](https://lovable.dev/projects/e11c2198-131e-483e-bb0f-bf2d2666f3aa)
- [Prototype preview](https://id-preview--e11c2198-131e-483e-bb0f-bf2d2666f3aa.lovable.app)
