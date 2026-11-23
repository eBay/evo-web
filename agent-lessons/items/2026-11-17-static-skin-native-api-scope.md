---
source: correction
disposition: declined
---

# Keep compatibility advice within the confirmed implementation layer

Arthur corrected the assessment of native popover support: "our work is only on the static Skin side". The response had expanded an HTML/CSS compatibility question into plans for interaction controllers, focus management and state synchronization, which required another scope correction. For this work, native API compatibility concerns static markup, CSS state selectors, browser defaults and replaceable positioning rules; it does not authorize behavior or framework implementation.

The follow-up explanation still used abstract technical terms, prompting Arthur to ask for plain language and a concrete recommendation. Explain the small check needed and its effect on the current work before discussing implementation details.

Disposition: declined as a permanent repository-wide scope rule, because Skin-only is the explicit boundary of this task rather than every future task. Arthur's current instructions remain the governing scope.
