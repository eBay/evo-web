---
source: correction
disposition: declined
---

# Reconcile equivalent occurrences when applying accepted review feedback

The correction was: “there is still the if condition in onClick on evo-marko, make sure you update all the places.” I followed the submitted line list too literally and left an equivalent delete-handler guard behind, costing another review round; once the user asks to apply a validated pattern across implementations, search for every equivalent occurrence before declaring it complete.

Disposition: declined, because the global instruction to fully understand a change and its surrounding architecture already covers this behavior, and another configuration rule would duplicate it.
