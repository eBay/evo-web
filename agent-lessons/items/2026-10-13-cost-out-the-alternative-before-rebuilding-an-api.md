---
source: observed-failure
disposition: open
---

# Cost out the alternative before rebuilding an API on a tentative objection

A carousel exposed its scroll-edge state as a bindable pair. The reviewer
floated "probably it shouldn't be fully controlled right?", and the agent
rebuilt it as output-only handlers without saying what that would cost. In
Marko the cost was a second copy of the state in the consumer plus effects to
sync it, which the reviewer then called "kind of a messed up pattern". Two more
designs followed (a slot, a helper tag) and were rejected before the work
returned to the binding it started with: three rebuilds, each with docs and
tests in three browsers. When a reviewer questions an API shape, first say what
the framework allows instead and what each option gives up; rebuild once they
have chosen with that in view.

Disposition: open — repo maintainers, raised 2026-10-13
