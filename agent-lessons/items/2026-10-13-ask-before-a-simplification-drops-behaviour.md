---
source: observed-failure
disposition: open
---

# Ask before a simplification drops behaviour people can see

Asked to "remove as much JS as you possibly can" from a carousel, the agent
deleted the code behind two visible behaviours: autoplay wrapping from the last
slide to the first, and paddle presses adding up during a scroll. It listed
both under "behaviour changes to review" at the end of a long summary and moved
on. Two weeks later the reviewer rediscovered them as regressions ("when you
simplified the component earlier you also lost wrap-around"), and restoring
them cost another round of implementation and cross-browser testing. A request
to cut code is not a request to cut features: when a simplification would
remove something a user can see, stop and ask for that trade explicitly, with
the cost of keeping it, before making the change.

Disposition: open — repo maintainers, raised 2026-10-13
