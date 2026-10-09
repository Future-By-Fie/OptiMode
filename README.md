# OptiMode — Your attention. Your rules.

OptiMode is an early-stage, mobile-first prototype exploring a user-controlled attention layer: a calmer way to decide which digital interruptions arrive now, which are grouped for later, and which are muted.

> **Status:** Concept / MVP prototype. All inbox items and attention statistics are synthetic demo data. OptiMode does not currently control notifications from your operating system or third-party apps.

## The idea

Digital services compete for attention by default. OptiMode explores a different default: the user sets the policy.

### Three modes
- **Focus** — only priority contacts are delivered immediately; other items wait.
- **Balanced** — priority contacts come through, while categories follow the user's delivery rules.
- **Open** — demo notifications are allowed through immediately.

### Prototype features
- Home dashboard and daily reflection using clearly illustrative metrics.
- Attention inbox with demo notifications; mark handled or snooze.
- Editable delivery rules for People, Work, Social, Shopping, and News.
- Priority contacts and quiet hours.
- Local browser persistence and a reset-to-demo action.
- Responsive layout with mobile navigation.

## Run locally

This project was generated in Lovable and uses TypeScript, React, Vite, TanStack Router, Tailwind CSS, and shadcn/ui components.

1. Install [Bun](https://bun.sh/) or use a compatible package manager.
2. Install dependencies: `bun install`
3. Start the development server: `bun run dev`
4. Run tests: `bun run test`
5. Build: `bun run build`

Check `package.json` for the exact scripts available in the current project.

## Product principles

1. **User agency first:** people decide when to be interrupted.
2. **Calm by default:** batch low-priority signals instead of creating more urgency.
3. **Transparent rules:** explain why an item is delivered now, scheduled, or muted.
4. **Privacy by design:** start with local, synthetic demo data; avoid collecting personal data without a clear need.
5. **Honest capability boundaries:** OS-level and third-party notification control requires future platform integrations and permissions.

## Suggested roadmap

- [x] Interactive front-end concept with synthetic data
- [x] Focus / Balanced / Open modes
- [x] Category rules and priority contacts
- [x] Local persistence for prototype preferences
- [ ] Validate the interaction model with users
- [ ] Define feasible integrations for each target platform
- [ ] Threat-model privacy and permissions before handling real notifications
- [ ] Add real integrations only after technical and product validation

## Contributing

This repository is an open concept in progress. Issues, critique, and implementation ideas are welcome. Please avoid submitting real personal notification data.

## Project links

- Lovable editor: https://lovable.dev/projects/e11c2198-131e-483e-bb0f-bf2d2666f3aa
- Prototype preview: https://id-preview--e11c2198-131e-483e-bb0f-bf2d2666f3aa.lovable.app
