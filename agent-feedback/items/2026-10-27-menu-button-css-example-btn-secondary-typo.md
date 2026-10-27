---
type: bug
impact: low
effort: low
site: src/routes/_index/components/menu-button/css+page.marko › highlight-code example near line 586
---

# Fix the `btn-secondary` class in the menu-button CSS page example

The code sample at line 586 shows `class="button btn-secondary"`. `btn-secondary` uses a single dash, so it matches no Skin rule: the sample teaches markup that renders without the secondary styling. On `main` the same line read `class="btn btn-secondary"`, so the typo predates PR #1070, which only renamed `btn` to `button`. The intended class is `button--secondary`.

Check: `rg -n 'btn-secondary' src/routes` returns nothing.
