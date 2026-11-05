import { storyNameFromExport, toId } from "storybook/internal/csf";

import { urls } from "./common";

export type StoryMarkupMap = Record<
  string,
  Record<string, { html: string; storybookId: string }>
>;

/**
 * One already-imported story module, keyed by its path relative to
 * `packages/skin/src/sass` (e.g. "button/stories/fake-button/base.stories.js").
 */
export interface DiscoveredStoryModule {
  relativePath: string;
  mod: Record<string, unknown>;
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
 * Storybook's own ID algorithm (`toId`/`storyNameFromExport`), not a hand-ported
 * copy of it: stays correct across a future Storybook upgrade instead of
 * silently drifting from Storybook's own rule with no build-time signal.
 * `storybook/internal/*` carries no semver guarantee, so a Storybook upgrade that
 * removes or changes this path fails the build loudly, which is the trade this
 * project already makes elsewhere (a stale `component`/`variant` reference
 * fails the build rather than rendering a silently wrong demo).
 */
function deriveStorybookId(title: string, exportName: string): string {
  return toId(title, storyNameFromExport(exportName));
}

/**
 * Removes <script> tags from extracted story HTML before it's stored.
 *
 * A story written for Storybook's own preview (e.g. Dialog's stories call
 * `.showModal()` in an inline <script> immediately after the markup loads, since
 * Storybook shows one story at a time and wants it open right away) is rendered
 * verbatim into a docs page via raw HTML interpolation, which DOES execute
 * <script> tags exactly like a normal page load (confirmed empirically — this is
 * unlike assigning to `.innerHTML` from JS, which does not execute embedded
 * scripts). A script written assuming "the dialog is already in the DOM by the
 * time this runs" breaks on a docs page where several of these demos are stacked
 * in sequence, or where the script runs during HTML parsing before its own
 * preceding sibling element exists. Stripping scripts here, once, keeps both the
 * rendered demo and its copyable code sample consistent with each other, and
 * keeps `<component-demo>` itself free of any component-specific special-casing —
 * a docs page that needs the stripped behavior back (e.g. Dialog opening on
 * click) adds its own trigger explicitly, same as it already did before this
 * project existed.
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
 * per https://github.com/eBay/evo-web/issues/1045 (exact end-state not yet decided —
 * pending a separate team decision), but the docs/Storybook integration needs to
 * ship against the CURRENT structure in the meantime. This override lets their
 * stories be addressed under their own key today, so docs pages for them aren't
 * blocked on that reorg landing first.
 *
 * Once #1045 lands, update or delete this map entirely to match whatever the real
 * structure becomes — do not treat the keys below as a permanent design decision.
 * Key is `${topLevelDir}/${nestedSubfolder}`; value is the resulting component key.
 */
const TEMPORARY_COMPONENT_KEY_OVERRIDES: Record<string, string> = {
  "button/fake-button": "fake-button",
  "tabs/fake-tabs": "fake-tabs",
};

/**
 * Derives a module's component key from its relative path, e.g.
 * "button/stories/fake-button/base.stories.js" -> topLevelDir "button",
 * nestedSubfolder "fake-button" (only consulted by TEMPORARY_COMPONENT_KEY_OVERRIDES
 * above). "cta-button/stories/cta-button.stories.js" (no further nesting) -> just
 * topLevelDir "cta-button", nestedSubfolder "".
 */
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
 * The key under which a variant is stored WITHIN its component's own bucket (the
 * `result[componentKey]` object) — never the component name itself, since that's
 * already the outer key. Built from the file's full slugified title with the
 * already-known `componentKey` stripped off the front (as an exact match or a
 * "componentKey-" prefix), leaving only the part that actually varies within this
 * component. Falls back to the export name alone when nothing is left (the common
 * case: one story file per component, e.g. "Skin/Badge" under component "badge").
 *
 * The strip is intentionally keyed off `componentKey` (already resolved per-file,
 * including the TEMPORARY_COMPONENT_KEY_OVERRIDES above) rather than a fixed
 * segment count — a fixed-count drop previously conflated "Skin/Button/Base" and
 * "Skin/Fake Button/Base" into the same stripped sub-path ("Base") whenever they
 * landed in the same component bucket, silently overwriting one file's exports
 * with another's. Stripping the resolved componentKey itself can't do that:
 * fake-button's own override gives it a different componentKey ("fake-button"),
 * so its title strips down independently of real Button's, even though both
 * title strings start with a word that looks similar once slugified.
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

/**
 * Builds the full component -> variant -> {html, storybookId} map from a list of
 * already-imported story modules. Pure/synchronous, with no module loading of its
 * own, so it can be tested with in-memory modules. Exported for that test only.
 */
export function buildStoryMarkup(
  modules: DiscoveredStoryModule[],
): StoryMarkupMap {
  const result: StoryMarkupMap = {};
  // Tracks which file declared each title, so a genuine duplicate title (Storybook
  // itself would have colliding story IDs) fails loudly instead of silently
  // overwriting one file's stories with another's.
  const fileByTitle = new Map<string, string>();
  // Tracks which (title, exportName) produced each variant key already assigned
  // within a component, so two DIFFERENT titles that happen to strip down to the
  // same key (e.g. "Skin/Button/Primary" and a stray "Skin/Primary" both filed
  // under componentKey "button") fail loudly instead of silently overwriting one
  // story's data with another's.
  const sourceByVariantKey: Record<
    string,
    Record<string, { title: string; exportName: string }>
  > = {};

  for (const { relativePath, mod } of modules) {
    const title: unknown = (mod.default as { title?: unknown } | undefined)
      ?.title;

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
 * The glob key up to and including "src/sass/", stripped, leaving the path
 * relative to the Skin sass root — e.g.
 * "button/stories/fake-button/base.stories.js".
 */
function relativePathFromGlobKey(globKey: string): string {
  const marker = "src/sass/";
  const index = globKey.indexOf(marker);
  return index === -1 ? globKey : globKey.slice(index + marker.length);
}

/**
 * Eagerly imports every Skin `.stories.js` file at build time via Vite's static
 * glob import — the same mechanism `components.ts`/`accessibility.ts` already use
 * to eagerly pull in route templates. The glob's object keys are each module's
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

const storyMarkup = buildStoryMarkup(
  Object.entries(storyModules).map(([globKey, mod]) => ({
    relativePath: relativePathFromGlobKey(globKey),
    mod,
  })),
);

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
