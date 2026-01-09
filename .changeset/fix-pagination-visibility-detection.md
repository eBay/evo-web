---
"@ebay/ui-core-react": patch
---

fix(pagination): add visibility detection for pagination inside hidden containers

Fixed issue where EbayPagination would miscalculate visible pages when rendered inside EbayTab or other hidden containers. The component now uses IntersectionObserver to detect when it becomes visible and automatically recalculates the page layout. Also fixed a memory leak in the resize event listener cleanup.
