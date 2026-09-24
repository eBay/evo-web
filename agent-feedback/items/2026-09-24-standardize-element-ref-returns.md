---
type: cleanup
impact: med
effort: low
site: packages/evo-marko/src/tags/evo-menu/index.marko › <return>
---

# Migrate bare element `<return>`s to the accessor-object convention

`evo-chip` and `evo-combobox` now expose child elements as `<return=() => ({ deleteBtn })>` so consumers write `$els().deleteBtn()` and new elements can be added without breaking callers. `evo-menu`, `evo-fake-menu`, and `evo-listbox` still return a bare element accessor (`<return=$el>` / `<return=$root>`), so the tag-variable shape differs per component and adding a second exposed element to any of them would be a breaking change. Convert the bare returns to the accessor-object form (e.g. `() => ({ root })`) and update their consumers.

Check: `grep -rn "<return=\$" packages/evo-marko/src/tags` lists the bare element returns; compare with `<return=() => ({` in evo-chip/evo-combobox.
