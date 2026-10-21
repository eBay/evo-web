---
source: correction
disposition: open
---

# Verify a migrated sub-component against Skin and the docs, not only the legacy tag schema

The evo-react education notice migration added `EvoEducationNoticeCTA` and `onCtaClick` because `@cta` appears in the Marko `marko-tag.json`. The user corrected in review: "We shouldn't have the onCtaClicked() it doesn't make sense. Do we have a skin education-notice__cta class? The web page just show the footer usage". Skin had no such class and the attribute was inherited from `ebay-notice-base`, so the component, story, tests, and migration-guide rows had to be removed. Before carrying an API across, confirm the element has a Skin rule and a documented usage.

Disposition: open — repo maintainers should decide whether this belongs in the evo-migrate-react skill checklist, raised 2026-09-29
