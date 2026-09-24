---
type: dx
impact: med
effort: med
site: src/data/common.ts › urls
---

# Link the deployed evo-marko and evo-react storybooks from the site

`deploy:copy-site` (root `package.json`) publishes the evo-marko storybook to
`_site/public/marko` and the evo-react one to `_site/public/react`, but nothing
on the site points at either: `urls.markoStorybook` / `urls.reactStorybook`
resolve to the legacy `ebayui-core` and `ebayui-core-react` builds, and those
are also what `src/data/components.ts › getComponentUrls` composes
`markoStorybookPath` / `reactStorybookPath` against. So a component that exists
only in the new packages has no storybook tab at all — `video` is the current
example, since `evo-video` lives at `/marko/?path=/docs/media-evo-video--documentation`.
A fix means `urls` entries for both new builds, metadata fields beside the
existing `*StorybookPath` (add them to `scripts/codegen/update-component-metadata.ts`
too), and tabs in `src/tags/component-tabs/index.marko`.

Check: `grep -rn "markoStorybook\|reactStorybook" src/data/common.ts src/data/components.ts`
shows only the legacy bases, and the "Evo Marko Components" landing page
(`src/routes/_index/evo-marko-components+page.marko`) links `urls.markoStorybook`,
which serves the Marko 5 storybook.
