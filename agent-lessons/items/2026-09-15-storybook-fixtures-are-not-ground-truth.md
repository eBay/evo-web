---
source: correction
disposition: applied
---

# Don't treat Storybook/CSF2 story fixtures as canonical without cross-checking real usage

While deciding whether `section-notice`'s status icon should be colored, I relied on Skin's own
CSF2 story fixtures (`packages/skin/src/sass/section-notice/stories/*.js`), which showed
uncolored icons, and treated that as authoritative. I never cross-checked the docs site's own
hand-authored markup (`css+page.marko`) against `origin/main`, which already showed the color
modifier present — the real signal. The user corrected this with a production screenshot: "I was
reviewing the section notice. It looks like you did that completely incorrectly... I've attached
a screenshot of production. This is how things ought to look. You completely stripped out the
colors from the icons." The story fixtures were the stale artifact, not the ground truth. Cost: a
fully wrong conclusion shipped past two rounds of my own review before the user caught it. General
rule: story/fixture files can drift from production; when a design decision is being verified,
check the framework's actual rendered docs pages or component source against the live product
screenshot, not just the isolated story fixture.

Disposition: applied — noted as a verification step to prefer live rendered output (docs pages,
`chrome-devtools-mcp` screenshots against a running server) over story fixtures when confirming
visual/design behavior, which is now the default approach used in this session going forward.
