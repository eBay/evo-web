---
type: dx
impact: med
effort: low
site: packages/evo-react/eslint.config.js › plugins["react-hooks"]
---

# Enable the react-hooks lint rules in evo-react

`packages/evo-react/eslint.config.js` registers `eslint-plugin-react-hooks` but turns on none of its rules, so `rules-of-hooks` and `exhaustive-deps` never run on evo-react components. Missing or stale dependencies in `useCallback`, `useMemo` and `useEffect` reach review unflagged, and a deliberate extra dependency gets no lint signal either way. Spread the plugin's recommended rules into the config, then fix or explicitly disable the findings. Checked in `evo-react` only.

Check: `cd packages/evo-react && npx eslint --print-config src/select/select.tsx | grep -c '"react-hooks/'` prints `0`.
