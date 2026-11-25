---
type: cleanup
impact: low
effort: low
site: src/routes/_index/components/image-placeholder/css+page.marko › <div id="image-placeholder">
---

# Resolve the duplicate `image-placeholder` id on its docs page

Every CSS docs page wraps its content in `<div id="<component>">`. On the Image Placeholder page that id collides with the icon sprite's `<symbol id="image-placeholder">`, so the page has two elements with the same id and `#image-placeholder` resolves to whichever comes first.

Check: on `/components/image-placeholder/css`, `document.querySelectorAll('[id="image-placeholder"]').length` is 2.
