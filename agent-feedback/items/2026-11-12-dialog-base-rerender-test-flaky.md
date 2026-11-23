---
type: dx
impact: low
effort: med
site: packages/ebayui-core/src/components/components/ebay-dialog-base/test/test.browser.js › given a closed dialog › when it is rerendered to be open
---

# Stabilise the dialog-base "rerendered to be open" browser test

During a root `npm run build` on 2026-11-12 that ran while another heavy process
was downloading packages, this test failed with `expect(element).not.toHaveAttribute("hidden")`.
It passed when run alone right after, and passed again in the next full build, with
no change to `@ebay/ebayui-core`. That points to a timing assumption that breaks
under CPU load. Only `@ebay/ebayui-core` was checked.

Check: run `npx vitest run src/components/components/ebay-dialog-base/test/test.browser.js`
in `packages/ebayui-core` repeatedly while another CPU-heavy job runs.
