---
type: bug
impact: high
effort: med
site: packages/evo-marko/src/tags/evo-infotip/index.marko › <evo-infotip>
---

# Fix nested EvoInfotip rendering in Marko

Rendering EvoInfotip inside another element crashes Marko's DOM setup before component behavior runs. The same failure occurs when the story's `<p>` is changed to `<div>`, while a root-level EvoInfotip renders, so the issue is nested rendering rather than invalid paragraph HTML. Create a minimal reproduction and verify whether the repository's current Marko release still exhibits the DOM-walking failure before changing component structure.

Check: Open the `notices-tips-evo-infotip--in-paragraph` story from `npm start -w packages/evo-marko`.
