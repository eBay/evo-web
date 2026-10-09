import {
  buildStoryMarkup,
  type DiscoveredStoryModule,
} from "../../packages/skin/scripts/storybook/story-markup-core";

import { urls } from "./common";

/**
 * Eagerly imports every Skin `.stories.js` file at build time via Vite's static
 * glob import — the same mechanism `components.ts`/`accessibility.ts` already use
 * to eagerly pull in route templates. Vite needs a statically-analyzable glob
 * pattern, not a runtime-constructed path, which is why this file can't reuse the
 * Node/fs-based discovery in `packages/skin/scripts/storybook/extract-story-
 * markup.ts` (used by that package's own CLI and test suite): the two discovery
 * mechanisms are necessarily different, but everything downstream of discovery —
 * `buildStoryMarkup` — is one shared function in `story-markup-core.ts`, imported
 * by both, not duplicated between them. The glob's object keys are each module's
 * resolved path relative to this file, e.g.
 * "../../packages/skin/src/sass/button/stories/fake-button/base.stories.js".
 *
 * Runs once per build (this module is evaluated once, at import time), not per
 * request — the site is a static build (`marko-run build`), so there is no
 * per-request server this would need to avoid re-running for.
 */
const storyModules = import.meta.glob<Record<string, unknown>>(
  "../../packages/skin/src/sass/**/*.stories.js",
  { eager: true },
);

/**
 * The glob key up to and including "src/sass/", stripped, leaving the same
 * shape `extract-story-markup.ts` works from — e.g.
 * "button/stories/fake-button/base.stories.js".
 */
function relativePathFromGlobKey(globKey: string): string {
  const marker = "src/sass/";
  const index = globKey.indexOf(marker);
  return index === -1 ? globKey : globKey.slice(index + marker.length);
}

const modules: DiscoveredStoryModule[] = Object.entries(storyModules).map(
  ([globKey, mod]) => ({
    relativePath: relativePathFromGlobKey(globKey),
    mod,
  }),
);

/**
 * Exported only so `packages/skin/scripts/storybook/__tests__/cross-package-
 * consistency.test.ts` can assert this matches what the Node/fs discovery in
 * `extract-story-markup.ts` produces for the same real story files — the two
 * discovery mechanisms above feed the same shared `buildStoryMarkup`, so this
 * is a check on `relativePathFromGlobKey`/the glob adaptation above, not on
 * extraction logic (which can no longer drift between the two files, since
 * there's only one copy of it); not meant for use outside this module otherwise.
 */
export const storyMarkup = buildStoryMarkup(modules);

/**
 * Looks up a component's variant map, throwing if no story file produced an
 * entry for it. Throwing here (rather than returning undefined) turns a
 * stale/mistyped `component` reference into an immediate build failure instead
 * of a silently blank demo on the docs site.
 */
function getComponentEntry(component: string) {
  const componentEntry = storyMarkup[component];

  if (!componentEntry) {
    throw new Error(
      `No Skin stories found for component="${component}". Check for a matching ` +
        `.stories.js title, or fix the typo in this page's reference.`,
    );
  }

  return componentEntry;
}

/** Same fail-fast behavior as {@link getComponentEntry}, scoped to one variant. */
function getVariantEntry(component: string, variant: string) {
  const variantEntry = getComponentEntry(component)[variant];

  if (!variantEntry) {
    throw new Error(
      `No Skin story found for component="${component}" variant="${variant}". Check for a ` +
        `matching .stories.js export, or fix the typo in this page's reference.`,
    );
  }

  return variantEntry;
}

/**
 * Returns the rendered HTML for one component's variant, e.g.
 * `getStoryHtml("badge", "empty")` is the raw HTML string for Badge's "empty"
 * story. Used by `<component-demo>` to render live Storybook markup on docs
 * pages without hand-duplicating it.
 *
 * @param component - Component key, i.e. the directory name under
 *   `packages/skin/src/sass` (e.g. `"badge"`).
 * @param variant - Variant name within that component (e.g. `"empty"`).
 * @returns That story's rendered HTML string.
 * @throws If `component`/`variant` has no matching Skin story — the same
 *   fail-fast behavior {@link getStorybookUrl} already relies on, so a stale
 *   or mistyped `variant` fails the site build immediately instead of
 *   rendering a silently blank demo.
 */
export function getStoryHtml(component: string, variant: string): string {
  return getVariantEntry(component, variant).html;
}

/**
 * Returns the full clickable URL to `component`'s `variant` story in Storybook —
 * the pinned local dev port in development, the deployed static Storybook path in
 * production (see `skinStorybookUrl` in `./common`).
 *
 * @param component - Component key, i.e. the directory name under
 *   `packages/skin/src/sass` (e.g. `"badge"`).
 * @param variant - Variant name within that component (e.g. `"empty"`).
 * @returns The absolute Storybook URL for that exact story.
 * @throws If `component`/`variant` has no matching Skin story.
 */
export function getStorybookUrl(component: string, variant: string): string {
  const { storybookId } = getVariantEntry(component, variant);
  return `${urls.skinStorybook}/?path=/story/${storybookId}`;
}
