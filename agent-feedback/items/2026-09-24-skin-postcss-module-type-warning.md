---
type: dx
impact: low
effort: low
site: packages/skin/postcss.config.js › default export
---

# Declare the Skin PostCSS config module type

Skin's PostCSS config uses ES module syntax in a `.js` file while the package has no module type declaration. Node reparses it during the CSS build and emits `MODULE_TYPELESS_PACKAGE_JSON`, adding warning noise and a small startup cost. Use an explicit module file extension or a scoped module declaration without changing the package's CommonJS entry points. This was observed in `skin`; other packages were not checked for the same warning.

Check: Run `npm run build:css -w packages/skin` and look for `MODULE_TYPELESS_PACKAGE_JSON` referencing `packages/skin/postcss.config.js`.
