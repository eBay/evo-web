---
type: unclear
impact: low
effort: low
site: src/routes/_index/components/switch/+page.marko › #switch-overview
---

# Reword the switch overview's "not a true form control" claim

The overview says "a switch is not a true form control", but every switch implementation renders a native `<input type="checkbox" role="switch">` that submits its `name`/`value` with a form like any checkbox. The sentence is usage guidance (a switch is for settings applied immediately, typically via client-side JavaScript, not values collected for submission), but it reads as a technical fact and has already been copied into component API docs as one. Rephrase it as guidance, e.g. "a switch is not meant for collecting form data", and optionally note that the underlying checkbox still participates in form submission. Checked: Skin docs markup (`css+page.marko`), `evo-marko` `evo-switch`, `ebayui-core` `ebay-switch`, `ebayui-core-react` `ebay-switch`, and `evo-react` `EvoSwitch` all use a native checkbox input.

Check: render `<form><evo-switch name="alerts" checked/></form>` (or any switch variant with a `name`), submit it, and observe `alerts=on` in the request payload.
