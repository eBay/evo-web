---
type: dx
impact: low
effort: low
site: packages/evo-react/src/icon/icon.tsx › EvoIcon
---

# Align React build types with the icon's Node globals

The React package type check passes, but its Vite build prints Rollup TypeScript warnings for `setImmediate` and `process` used by `EvoIcon`. The different type environments make the build noisy and could hide new diagnostic warnings. Align the build plugin's types with the package type check. This was observed in `evo-react`; other packages were not checked for the same warnings.

Check: Run `npm run build -w packages/evo-react` and look for `TS2304: Cannot find name 'setImmediate'` and `TS2591: Cannot find name 'process'` during the Vite build.
