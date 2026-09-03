---
type: bug
impact: low
effort: low
site: packages/evo-react/src/badge/badge.tsx › EvoBadge
---

# Decide whether evo badge should round decimal counts like the legacy badges

Legacy `EbayBadge` (`ebayui-core-react` › badge.tsx, `ebayui-core` › ebay-badge/index.marko) renders `Math.round(+number)`, so `5.6` displays as `6`. The evo implementations (`evo-react` › EvoBadge, `evo-marko` › evo-badge) render the raw value, so `5.6` displays as `5.6`. The evo-react browser tests were previously named "truncates decimal values" but passed vacuously via substring text matching; they now assert the as-is behavior to match evo-marko. If rounding is the intended design, add it to both evo implementations; if not, a short intent comment at each evo badge render site would stop re-filing. Checked: evo-react, evo-marko, ebayui-core-react, ebayui-core; skin not applicable (CSS only).

Check: `npx vitest run --browser.headless src/badge` in packages/evo-react renders `5.6` for `number={5.6}`; the same input in ebayui-core-react's badge spec renders `6`.
