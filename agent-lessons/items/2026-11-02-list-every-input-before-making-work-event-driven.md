---
source: observed-failure
disposition: open
---

# Before replacing always-run work with an event-driven trigger, list every input the old path covered

The carousel reflow fix (#964, PR #1096) replaced measurement that ran on every full render, every window resize and `document.fonts.ready` with a ResizeObserver that only fires when an observed `contentRect` width changes. It did not first list what the old path had recovered from. Copilot and a human reviewer then found four gaps: the cached scroll mode went stale when autoplay was toggled, a restored non-zero `scrollLeft` was assumed to be 0, a resize during the autoplay loop measured transformed items, and padding or border changes were missed. Fixing them took another implementation and review round. Before making work event-driven, write down every input or state change that the old code handled, even by accident, and map each one to an explicit trigger or a test.

Disposition: open — maintainers (evo-web), raised 2026-11-02; candidate for a step in `evo-safe-coding` or a CLAUDE.md line about refactors that change when work runs.
