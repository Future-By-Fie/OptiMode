# OptiMode — Product brief

## Problem
Notification systems tend to let individual services compete for attention independently. Users must repeatedly manage interruption across apps, creating cognitive overhead and fragmented control.

## Hypothesis
A user-controlled policy layer that expresses intent once — Focus, Balanced, or Open — could make digital interruptions more predictable and less demanding.

## MVP scope
This first prototype tests the interaction model, not system-level notification interception. It uses fictional notifications and browser-local state to demonstrate:
- A simple mode switch.
- Category-level delivery rules.
- Priority contacts.
- A consolidated attention inbox.
- Lightweight daily reflection.

## Core rules
- **Focus:** priority contacts are immediate; other items are scheduled.
- **Balanced:** priority contacts are immediate; other items follow category settings.
- **Open:** all demo items are immediate.
- Category rules: Now, Scheduled, Muted.
- State is stored locally in the browser for demonstration only.

## Non-goals for this prototype
- No real notification access.
- No account system or cloud sync.
- No claims of compatibility with third-party apps or operating-system APIs.
- No real user analytics.

## Key questions to validate
1. Do people understand the three modes without onboarding?
2. Are category rules sufficient, or do people need context-based rules?
3. What should qualify as a priority contact or truly urgent message?
4. How much control should remain with the source apps versus the user's policy layer?
5. Which platform integrations are technically feasible and permission-compliant?

## Commercial direction
Potential future models include a consumer subscription, employer-supported focus tooling, or platform licensing. These are hypotheses only; willingness to pay and distribution need validation before committing to a business model.

## Next milestones
1. Usability test the prototype.
2. Compare the concept against existing focus modes, notification summaries, inbox tools, and digital wellbeing features.
3. Select one target platform and map its actual APIs and constraints.
4. Prototype one real, permissioned integration only after feasibility review.
5. Measure user-reported interruption quality, not just time spent in the product.
