---
source: observed-failure
disposition: open
---

# Run a new regression test against the pre-fix code before trusting it

The ResizeObserver test added for the ebayui-core carousel reflow fix (#964) passed against both the old and new `component.ts`: the old implementation re-measured on a late `document.fonts.ready` (and on window resize once the container overflowed the 414px vitest viewport), so the test proved nothing. It only surfaced because the old file was swapped back in and the test re-run; fixing it took two more rounds (narrower widths, then waiting for font loading to settle). A test written to cover a behaviour change is unverified until it has been seen failing on the code it replaces. It recurred on 2026-11-09 in the evo-react `EvoSelect` form-reset tests, where deleting the line under test and re-running exposed one assertion the browser satisfied natively and one matcher that passed on an empty selection.

Disposition: open — maintainers (evo-web), raised 2026-10-28; candidate for a CLAUDE.md "Testing Requirements" line or a skill step in evo-testing.
