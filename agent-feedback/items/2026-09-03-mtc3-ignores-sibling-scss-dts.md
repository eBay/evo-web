---
type: dx
impact: med
effort: med
site: vite.config.js › patchCssModules
---

# @marko/type-check 3 ignores generated sibling .d.ts for scss module imports

vite-css-modules generates `style.module.scss.d.ts` files (generateSourceTypes) that declare the named exports, and plain tsc resolves them for `import { x } from "./style.module.scss"` under every moduleResolution mode. @marko/type-check 3's resolver does not consult them for imports inside .marko files and falls back to vite/client's default-only `*.module.scss` wildcard, reporting TS2614 on named imports. The docs site works around it with default imports plus `exportMode: "both"`; when the type-checker is fixed, the site can return to named imports and `exportMode: "named"`. Checked: root docs site only; the packages type-check scss via their own wildcard declarations.

Check: revert one site file to `import { table } from "../../../../sass/table.module.scss"` and run `npx mtc` at the root — TS2614 despite `src/sass/table.module.scss.d.ts` exporting `table`; the same import in a plain .ts file passes `tsc --noEmit`.
