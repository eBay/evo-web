---
source: observed-failure
disposition: declined
---

# Account for page module timing and native reset timing in demonstrations

The website comparison initially waited for DOMContentLoaded after the event had already fired, leaving the controls unmounted. A reset listener then rendered before the native select reset completed, leaving the displayed value stale even though submission state was correct. The demonstration now handles modules loaded after DOMContentLoaded and defers its reset rendering until the native reset has completed; browser checks compare the displayed value with the native value.

Disposition: declined as a global instruction, because the correct lifecycle hook depends on the host. Both corrections are implemented in this demonstration and recorded here to explain the observed failures.
