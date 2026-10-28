---
type: cleanup
impact: low
effort: low
site: src/sass/typography.module.scss › .giant3, .giant2, .giant1, .large2, .large2Secondary, .large1, .large1Secondary, .mediumBold, .medium, .mediumSecondary, .regularBold, .regular, .regularSecondary, .smallBold, .small, .smallSecondary
---

# Remove now-unused CSS-module classes from typography.module.scss

Issue #935 fixed `src/routes/_index/components/typography/css+page.marko` to stop applying `typography.module.scss`'s hashed classnames directly to the type-ramp demo elements (they now use the plain Skin classnames as strings instead, matching the `flag`/`utility` docs pages' convention of only using module classes for layout wrappers). That leaves 16 module classes with no remaining consumer anywhere in `src/`: `.giant3`, `.giant2`, `.giant1`, `.large2`, `.large2Secondary`, `.large1`, `.large1Secondary`, `.mediumBold`, `.medium`, `.mediumSecondary`, `.regularBold`, `.regular`, `.regularSecondary`, `.smallBold`, `.small`, `.smallSecondary`. Only `.list` (layout) and the `*ScreenLarge`/`*ScreenSmall` title exports (still used by `src/routes/_index/components/sass/+page.marko`) remain live. Package affected: docs site only (`src/sass/`), not any published `@ebay/*`/`@evo-web/*` package.

Check: `grep -rn "styles\.\(giant3\|giant2\|giant1\|large2\|large1\|mediumBold\|medium\b\|mediumSecondary\|regularBold\|regular\b\|regularSecondary\|smallBold\|small\b\|smallSecondary\)" src --include="*.marko"` returns no results, while the corresponding rules still exist in `src/sass/typography.module.scss` lines 13–75.
