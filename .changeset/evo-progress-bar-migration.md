---
"@evo-web/marko": patch
---

Add `evo-progress-bar`, the Marko 6 migration of `ebay-progress-bar`, matching the evo-react API: a required `a11yText` (default `"Progress"`, `null` only when another label is supplied) sets the accessible name, a `fluid` prop fills the container width, and `max` defaults to `100`. Unlike `ebay-progress-bar`, omitting `value` now renders an indeterminate progress bar instead of defaulting to `0`.
