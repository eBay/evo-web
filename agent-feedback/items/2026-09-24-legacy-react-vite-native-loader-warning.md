---
type: dx
impact: low
effort: low
site: packages/ebayui-core-react/vite.config.mjs › componentEntries
---

# Make the legacy React Vite config compatible with native loading

The legacy React Vite config uses `__dirname` in an ES module. Vite warns that this is unsupported by its planned native config loader, so a future loader change could interrupt builds. Resolve entry paths from `import.meta.dirname` or an equivalent module URL. This was observed in `ebayui-core-react`; other packages were not checked for the same warning.

Check: Run `npm run build -w packages/ebayui-core-react` and look for Vite's `configLoader: 'native'` warning naming `__dirname` in `vite.config.mjs`.
