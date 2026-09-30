---
source: guardrail-fired
disposition: open
---

# A pre-push hook that runs the whole build blocks every push while main is red

The husky pre-push hook runs root `npm run build`, whose first step is
`npm run lint`. On 2026-09-30 that failed on two evo-react tourtip files that
are misformatted on `main` itself, so a rebased carousel branch with its own
checks green could not be pushed. The user approved `--no-verify` for that
push. The hook was right to exist but wrong to fire: it cannot tell a failure
the branch introduced from one it inherited, so it trains `--no-verify`.
Scoping the hook to what the push changes, or keeping `main`'s lint green in
CI, would stop it.

Disposition: open — repo maintainers, raised 2026-09-30
