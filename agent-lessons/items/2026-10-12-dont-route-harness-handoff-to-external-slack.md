---
source: observed-failure
disposition: open
---

# Treat harness handoffs as harness operations, not external messaging

A request to create and send a handoff to Bora referred to the coding harness, but I interpreted it as Slack outreach. I attempted `agent-browser connect 9222`, which was refused, opened `https://app.slack.com` to its public sign-in page, then closed the browser; I did not sign in or send a message. This caused external browser navigation and an avoidable detour. Confirm the available harness handoff mechanism before treating a named collaborator as authorization to contact an external service.

Disposition: open — maintainer, raised 2026-10-12
