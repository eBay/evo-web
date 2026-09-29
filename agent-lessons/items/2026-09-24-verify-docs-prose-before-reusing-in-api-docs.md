---
source: correction
disposition: open
---

# Verify reused docs prose against the implementation before putting it in API docs

While rewording a component's JSDoc, the agent copied a sentence from the docs site stating that a switch "is not a true form control" and does not store form data sent to the server. The component renders a native checkbox that does submit with a form, so the JSDoc stated false behavior. The reviewer caught it: "this actually true? Like if rendered in a form, will not send to the server?" That cost an extra review round and a second rewrite. Design-guidance prose describes intended usage, so check it against the rendered markup before restating it as a behavioral fact.

Disposition: open — repo maintainers (decide whether this becomes an AGENTS.md line), raised 2026-09-24
