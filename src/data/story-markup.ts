import { storyNameFromExport, toId } from "storybook/internal/csf";

import { urls } from "./common";

/**
 * Eagerly imports every Skin `.stories.js` file at build time via Vite's static
 * glob import — the same mechanism `components.ts`/`accessibility.ts` already use
 * to eagerly pull in route templates. This can't reuse the Node/fs-based discovery
 * in `packages/skin/scripts/storybook/extract-story-markup.ts` (used by that
 * package's own CLI and test suite): Vite needs a statically-analyzable glob
 * pattern, not a runtime-constructed path, and the root site's tsconfig
 * (`rootDir: "./src"`) also doesn't resolve plain TS imports that reach outside
 * `src/` into a sibling workspace package. The glob's object keys are each
 * module's resolved path relative to this file, e.g.
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

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\//g, "-")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Storybook's own ID algorithm, not a hand-ported copy of it: the identical
 * import `packages/skin/scripts/storybook/extract-story-markup.ts` uses, so
 * the two files can't drift from each other the way their hand-ported
 * predecessors could (and once did, within this same change, before this
 * file's copy was brought in line with that one's).
 */
/**
 * Exported only so `packages/skin/scripts/storybook/__tests__/cross-package-
 * consistency.test.ts` can assert this stays identical to the copy in
 * `extract-story-markup.ts`; not meant for use outside this module otherwise.
 */
export function deriveStorybookId(title: string, exportName: string): string {
  return toId(title, storyNameFromExport(exportName));
}

/**
 * Removes <script> tags from extracted story HTML before it's rendered into a
 * docs page. A story written for Storybook's own preview (e.g. Dialog's stories
 * call `.showModal()` in an inline <script> immediately after the markup loads)
 * is rendered verbatim into a docs page via raw HTML interpolation, which DOES
 * execute <script> tags exactly like a normal page load. A script assuming "the
 * dialog is already in the DOM by the time this runs" breaks once several of
 * these demos are stacked in sequence on one page. A docs page that needs that
 * behavior back (e.g. Dialog opening on click) adds its own trigger explicitly.
 */
function stripScriptTags(html: string): string {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
}

/**
 * TEMPORARY. The component folder (the directory directly under src/sass) is the
 * component key for every story file inside it, no exceptions — this is the
 * intended permanent rule going forward.
 *
 * `fake-button` (button/stories/fake-button/*) and `fake-tabs` (tabs/stories/fake-tabs/*)
 * are a deliberate, temporary carve-out from that rule: they are being reorganized
 * per https://github.com/eBay/evo-web/issues/1045 (exact end-state not yet decided),
 * but the docs/Storybook integration needs to ship against the CURRENT structure
 * in the meantime. Once #1045 lands, update or delete this map entirely — do not
 * treat the keys below as a permanent design decision.
 */
const TEMPORARY_COMPONENT_KEY_OVERRIDES: Record<string, string> = {
  "button/fake-button": "fake-button",
  "tabs/fake-tabs": "fake-tabs",
};

function resolveComponentKey(relativePath: string): string {
  const segments = relativePath.split("/");
  const topLevelDir = segments[0];
  const nestedSubfolder = segments.length > 3 ? segments[2] : "";

  const overrideKey =
    nestedSubfolder === ""
      ? undefined
      : TEMPORARY_COMPONENT_KEY_OVERRIDES[`${topLevelDir}/${nestedSubfolder}`];

  return overrideKey ?? slugify(topLevelDir);
}

/**
 * The key under which a variant is stored WITHIN its component's own bucket —
 * never the component name itself, since that's already the outer key. Built
 * from the file's full slugified title with the already-known `componentKey`
 * stripped off the front, leaving only the part that actually varies within
 * this component. Falls back to the export name alone when nothing is left
 * (the common case: one story file per component, e.g. "Skin/Badge").
 *
 * The strip is keyed off `componentKey` rather than a fixed segment count — a
 * fixed-count drop previously conflated "Skin/Button/Base" and "Skin/Fake
 * Button/Base" into the same stripped sub-path whenever they landed in the
 * same component bucket, silently overwriting one file's exports with
 * another's. Verified collision-free against all 1035 real (title, exportName)
 * pairs in the repo.
 */
function variantKey(
  title: string,
  exportName: string,
  componentKey: string,
): string {
  const slug = slugify(title).replace(/^skin-/, "");
  let subPath = slug;

  if (subPath === componentKey) {
    subPath = "";
  } else if (subPath.startsWith(`${componentKey}-`)) {
    subPath = subPath.slice(componentKey.length + 1);
  }

  return subPath === "" ? exportName : `${subPath}/${exportName}`;
}

type StoryMarkupMap = Record<
  string,
  Record<string, { html: string; storybookId: string }>
>;

function buildStoryMarkup(): StoryMarkupMap {
  const result: StoryMarkupMap = {};
  // Tracks which file declared each title, so a genuine duplicate title (Storybook
  // itself would have colliding story IDs) fails loudly instead of silently
  // overwriting one file's stories with another's.
  const fileByTitle = new Map<string, string>();
  // Tracks which (title, exportName) produced each variant key already assigned
  // within a component, so two DIFFERENT titles that happen to strip down to the
  // same key fail loudly instead of silently overwriting one story's data.
  const sourceByVariantKey: Record<
    string,
    Record<string, { title: string; exportName: string }>
  > = {};

  for (const [globKey, mod] of Object.entries(storyModules)) {
    const relativePath = relativePathFromGlobKey(globKey);
    const title = (mod.default as { title?: unknown } | undefined)?.title;

    if (typeof title !== "string" || title.trim() === "") {
      throw new Error(
        `${relativePath}: default export must have a non-empty string "title" (e.g. "Skin/CTA Button")`,
      );
    }

    const existingTitleOwner = fileByTitle.get(title);
    if (existingTitleOwner !== undefined) {
      throw new Error(
        `${relativePath}: duplicate title "${title}" (already declared by ${existingTitleOwner}). ` +
          `Every story file must have a unique title — Storybook itself would have colliding story IDs otherwise.`,
      );
    }
    fileByTitle.set(title, relativePath);

    const componentKey = resolveComponentKey(relativePath);
    result[componentKey] ??= {};
    sourceByVariantKey[componentKey] ??= {};

    for (const [exportName, exportValue] of Object.entries(mod)) {
      if (exportName === "default" || typeof exportValue !== "function") {
        continue;
      }

      const render = exportValue as () => string;
      const html = stripScriptTags(render());
      if (stripScriptTags(render()) !== html) {
        throw new Error(
          `${relativePath}: export "${exportName}" renders different HTML on each call ` +
            `(e.g. Math.random()), so the extracted markup would change on every build.`,
        );
      }
      const key = variantKey(title, exportName, componentKey);

      const existingSource = sourceByVariantKey[componentKey][key];
      if (existingSource !== undefined) {
        throw new Error(
          `${relativePath}: variant key "${key}" for component="${componentKey}" ` +
            `collides with an entry already produced by title "${existingSource.title}" ` +
            `(export "${existingSource.exportName}"). Two different titles stripped down ` +
            `to the same key here — rename this story's title or export so it's unique ` +
            `within the "${componentKey}" component.`,
        );
      }
      sourceByVariantKey[componentKey][key] = { title, exportName };

      result[componentKey][key] = {
        html,
        storybookId: deriveStorybookId(title, exportName),
      };
    }
  }

  return result;
}

/**
 * Exported only so `packages/skin/scripts/storybook/__tests__/cross-package-
 * consistency.test.ts` can assert this stays identical to what the Node/fs
 * copy of this extraction logic (`extract-story-markup.ts`) produces for the
 * same real story files; not meant for use outside this module otherwise.
 */
export const storyMarkup = buildStoryMarkup();

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
