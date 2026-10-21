---
source: observed-failure
disposition: declined
---

# Preserve consumer-facing story descriptions during comment audits

The education notice comment audit deleted a `CustomIcon` Storybook description as code narration. I had to restore it and rerun the build because the component migration instructions require each story to describe its API choice. The audit brief already protected story descriptions, so this was a judgment error rather than a missing rule.

Disposition: declined, because `.agents/skills/evo-migrate-react/SKILL.md` already requires story descriptions and the audit brief already named the exception. Repeating either instruction would not prevent the same misclassification.
