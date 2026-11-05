---
type: perf
impact: low
effort: low
site: packages/evo-react/src/utils/use-expander.ts › useExpander
---

# Run Floating UI autoUpdate only while the expander is open

`useExpander` always passes `whileElementsMounted: autoUpdate`, so every caller that keeps its popup mounted and hides it with CSS (tooltip, infotip, combobox, date-input popover, menu button) keeps scroll and resize listeners and recomputes position while closed. A page with many closed popups pays that cost for nothing. Passing `whileElementsMounted: currentOpen ? autoUpdate : undefined` should fix it in one place: `@floating-ui/react-dom` lists `hasWhileElementsMounted` in its mount-effect deps, so toggling it starts and stops `autoUpdate`. Checked evo-react only; verify `isPositioned` and the first-open position in each caller's browser tests.

Check: `grep -n "whileElementsMounted" packages/evo-react/src/utils/use-expander.ts` shows an unconditional `autoUpdate`; `grep -n "hasWhileElementsMounted" node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs` shows it in the mount-effect deps; `grep -n "setFloating" packages/evo-react/src/{tooltip/tooltip,infotip/infotip,combobox/combobox,date-input/date-input-popover}.tsx` shows each caller attaches the popup without an open check.
