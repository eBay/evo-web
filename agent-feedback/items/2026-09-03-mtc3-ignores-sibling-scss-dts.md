---
type: dx
impact: med
effort: med
site: vite.config.js › patchCssModules
---

# @marko/type-check 3 ignores generated sibling .d.ts for scss module imports

vite-css-modules generates `style.module.scss.d.ts` files (generateSourceTypes) that declare the named exports, and plain tsc resolves them for `import { x } from "./style.module.scss"` under every moduleResolution mode. @marko/type-check 3's resolver does not consult them for imports inside .marko files and falls back to vite/client's default-only `*.module.scss` wildcard, reporting TS2614 on named imports. The docs site works around it with default imports plus `exportMode: "both"`, and `generateSourceTypes` is disabled since nothing in the toolchain reads the generated files; when the type-checker is fixed, re-enable it and return to named imports with `exportMode: "named"`. Checked: root docs site only; the packages type-check scss via their own wildcard declarations.

Check: revert one site file to `import { table } from "../../../../sass/table.module.scss"`, regenerate the sibling d.ts (re-enable `generateSourceTypes` and run `npx marko-run build`), and run `npx mtc` at the root — TS2614 despite the sibling file exporting `table`; the same import in a plain .ts file passes `tsc --noEmit`.
