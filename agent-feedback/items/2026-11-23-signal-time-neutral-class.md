---
type: bug
impact: low
effort: low
site: packages/skin/src/sass/signal/signal.scss › .signal--neutral
---

# Replace the nonexistent `signal--time-neutral` class in table stories and docs

Skin table stories and the table docs page mark the "Preparing" status with `signal signal--time-neutral`. No stylesheet defines `.signal--time-neutral`; the neutral modifier is `.signal--neutral` (or the bare `.signal`). The Signal renders neutral only because the base rule is neutral, so the class is dead markup that readers may copy. Replace it with `signal--neutral` (or drop it). Reached: skin stories and the docs site; frameworks not checked.

Check: `grep -rn "signal--time-neutral" packages/skin/src src/routes` lists table stories (`packages/skin/src/sass/table/stories/*.js`) and `src/routes/_index/components/table/css+page.marko`, while `grep -rn "time-neutral" packages/skin/src/sass/signal` returns nothing.
