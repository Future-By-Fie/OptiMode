# OptiMode — prototype engineering review

## Verified scope
The repository README describes a **notification/attention policy** prototype, with Focus, Balanced and Open modes. It explicitly does not manage real operating-system notifications.

## Product-definition decision required
Future-by-Fie has also described **OptiMode** as an optional creator/community-credit mechanism with a 70% creator / 30% platform split. That is a materially different product. Do not silently combine the two or imply they are the same implementation. Decide whether to rename, split, or replace this repository before adding feature code.

## Quality criteria for the existing attention prototype
- Focus mode must always preserve priority-contact delivery.
- Balanced mode applies category policy to non-priority contacts.
- Open mode bypasses category suppression for synthetic demo items.
- Muted, scheduled and immediate classifications must be deterministic.
- Invalid persisted settings must be handled safely.
- Reset must restore documented defaults.
- Tests should cover each policy combination and invalid input.

## Limitations
No OS integration, real notification interception, enforcement of quiet hours, or real attention metrics are claimed. CI is a starting point; passing results must be verified separately.
