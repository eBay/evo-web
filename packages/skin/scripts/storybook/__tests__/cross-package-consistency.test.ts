import path from "path";

import { describe, expect, it } from "vitest";

import {
  deriveStorybookId as cliDeriveStorybookId,
  extractStoryMarkup,
} from "../extract-story-markup";

/**
 * `extract-story-markup.ts` (this package's own, used by the CLI and this
 * test suite) and `src/data/story-markup.ts` (the root site's, used by the
 * live site via Vite's `import.meta.glob`) are two independently-maintained
 * copies of the same extraction logic — `slugify`, `resolveComponentKey`,
 * `variantKey`, `deriveStorybookId`, `stripScriptTags`, the duplicate-title
 * and colliding-variant-key guards, the nondeterministic-render guard — all
 * duplicated, not shared, because the site's tsconfig can't import from a
 * sibling workspace package. See the module-level comments on both files for
 * the full reason it has to be this way.
 *
 * This file is the enforcement for the half of that situation that isn't
 * self-checking: that the two copies keep behaving identically. Without it,
 * one copy can be fixed or changed and the other silently left behind, which
 * is exactly what happened here once already, before this file existed.
 */
describe("extraction logic cross-package consistency", () => {
  it("deriveStorybookId matches the independently-maintained copy in src/data/story-markup.ts", async () => {
    const site = await import("../../../../../src/data/story-markup");

    const cases: Array<[string, string]> = [
      ["Skin/Badge", "empty"],
      ["Skin/Badge", "threeDigits"],
      ["Skin/CTA Button", "base"],
      ["Skin/Accordion", "closed"],
      ["Skin/Accordion", "autoCollapse"],
      ["Skin/Dialog", "baseWithLongHeader"],
      ["Skin/Dialog", "expressiveScrolling"],
      ["Skin/RTL Large", "base"],
      ["Skin/_1024 Container", "base"],
    ];

    for (const [title, exportName] of cases) {
      expect(site.deriveStorybookId(title, exportName)).toBe(
        cliDeriveStorybookId(title, exportName),
      );
    }
  });

  it("produces identical html and storybookId for every real story in the repo", async () => {
    const site = await import("../../../../../src/data/story-markup");
    const cli = await extractStoryMarkup(
      path.join(__dirname, "..", "..", "..", "src", "sass"),
    );

    expect(Object.keys(site.storyMarkup).sort()).toEqual(
      Object.keys(cli).sort(),
    );

    for (const componentKey of Object.keys(cli)) {
      expect(Object.keys(site.storyMarkup[componentKey]).sort()).toEqual(
        Object.keys(cli[componentKey]).sort(),
      );

      for (const variantKey of Object.keys(cli[componentKey])) {
        expect(site.storyMarkup[componentKey][variantKey]).toEqual(
          cli[componentKey][variantKey],
        );
      }
    }
  });
});
