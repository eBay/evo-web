---
type: cleanup
impact: low
effort: low
site: src/routes/_index/components/section-title/css+page.marko › Linked Section Title
---

# Align the linked section title code sample with its demo

The "Linked Section Title" demo renders the call to action as "See all", but the `highlight-code` sample directly below it shows the same `<a class="section-title__cta">` with the text "Link". Copying the sample gives different text than the demo displays. Use the same text in both. Only the docs page was checked; the Skin stories already use "See all".

Check: `grep -n 'section-title__cta' -A2 src/routes/_index/components/section-title/css+page.marko` shows "See all" in the demo and "Link" in the sample.
