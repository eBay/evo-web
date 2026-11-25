---
source: observed-failure
disposition: open
---

# Before calling a count difference "not a gap", check which element is missing

While comparing old docs demos with the stories that replaced them, the agent counted accessibility attributes by name and marked the Avatar `variations` story "Not a gap: the story shows 7 avatars where the old docs showed 8." It never checked which avatar was missing. It was pink, a color the page prose lists, so the docs lost an example they describe. An independent review caught it, and the story was fixed. A smaller count is a proxy: it says something is missing, not that what is missing does not matter. Name the missing item and check it against the prose before ruling it out.

Disposition: open, Arthur Khachatryan, raised 2026-11-25: decide whether the comparison script should report the missing items by value instead of by count.
