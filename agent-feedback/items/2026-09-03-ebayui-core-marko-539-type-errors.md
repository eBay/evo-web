---
type: bug
impact: med
effort: med
site: packages/ebayui-core/package.json › marko dependency range
---

# Marko 5.39 type changes break ebayui-core's type-check but the range allows it

ebayui-core pins `marko: ^5.38.38`, and marko 5.39.x changes template types (`Marko.AriaAttributes` members, content on svg tags, stricter TS2353 on `<ebay-radio>`/`<ebay-checkbox>`/`<ebay-tri-state-checkbox>` attributes), producing ~26 mtc errors. The lockfile currently holds 5.38.38, so any fresh resolution (lockfile regeneration, renovate, a new workspace) can float to 5.39 and fail type-check without any change in this repo. Either fix the templates for 5.39's types or tighten the range to `~5.38.38` until they are fixed. Checked: ebayui-core only; evo-marko uses marko 6 and is unaffected.

Check: in packages/ebayui-core, install marko@5.39.38 into the workspace and run `npx mtc` — it reports TS2353/TS2694 errors; with marko@5.38.38 it is clean.
