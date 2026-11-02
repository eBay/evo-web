---
source: correction
disposition: open
---

# Do not add a runtime guard that no sibling component uses; document the contract instead

To make `EvoEducationNoticeHeader` required, a header-registration context field, a ref counter, two effects, and a development `console.warn` were added, even though the agent had already noted that dialog and alert-dialog leave their required header undetected. In review the user called it "over engineering" and asked to remove it and all `registerHeader` code, so the implementation, two tests, and a build cycle were thrown away. When a guard has no precedent in the package, recommend documenting the requirement like the sibling components do rather than offering the guard as part of the option.

Disposition: open — repo maintainers should decide whether this belongs in the evo-react composition guidance, raised 2026-09-29
