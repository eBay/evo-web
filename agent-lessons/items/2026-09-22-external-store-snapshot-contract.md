---
source: observed-failure
disposition: open
---

# Check the external-store contract before introducing useSyncExternalStore

A custom media-time store was implemented and validated before review exposed that its `getSnapshot` read a continuously changing browser value without a matching notification. The implementation then had to be removed. Before choosing `useSyncExternalStore`, verify that snapshots remain referentially stable between publications and compare the custom adapter against ordinary React state.

Disposition: open, project maintainers need to choose the shared engineering guidance where this rule belongs, raised 2026-09-22.
