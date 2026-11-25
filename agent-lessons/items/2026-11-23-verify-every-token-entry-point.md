---
source: observed-failure
disposition: open
---

# When adding local tokens to Skin, check every token entry point that consumers load

New Signal tokens went only into `evo-light.scss` / `evo-dark.scss`. Storybook looked right, but the docs site loads the `*-class.scss` theme files, so every Signal there rendered as plain text. The agent had flagged the class files as a risk and then dropped the check after "don't bother about evo-theme, that is already setup" instead of verifying what those files include. The fix (a shared `_subtle-tokens.scss` mixin) cost an extra round of debugging and review. Before declaring token work done, find all files that include the design-tokens mixins and confirm the output in each consumer (Storybook and the docs site).

Disposition: open — evo-web maintainers, raised 2026-11-23
