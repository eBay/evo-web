---
source: observed-failure
disposition: declined
---

# Check script-free HTML against built assets

The native HTML example test initially disabled JavaScript on the Vite development site. That site hides the document until its JavaScript loads the styles, so the test timed out before exercising any popup. Native interaction tests use the working development page; the script-free check uses production assets to distinguish a website loader dependency from a component behavior dependency.

Disposition: declined as a global rule, because this depends on the development server. The native example remains plain HTML/CSS, and the audit explicitly distinguishes development-site checks from script-free production checks.
