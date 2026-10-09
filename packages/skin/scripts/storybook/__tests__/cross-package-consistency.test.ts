import { describe, expect, it } from "vitest";

import { deriveStorybookId as cliDeriveStorybookId } from "../extract-story-markup";

/**
 * `deriveStorybookId` is duplicated between this package's own
 * `extract-story-markup.ts` (used by the CLI and this test suite) and the
 * root site's `src/data/story-markup.ts` (used by the live site, via Vite's
 * `import.meta.glob`), because the latter can't import from a sibling
 * workspace package. See the module-level comments on both files for the
 * full reason.
 *
 * This test is the enforcement for the half of that comment that isn't
 * self-checking: that the two independently-maintained copies keep producing
 * identical output. Without it, one copy can be fixed or changed and the
 * other silently left behind — which is exactly what happened here once
 * already, before this test existed.
 */
describe("deriveStorybookId cross-package consistency", () => {
  it("matches the independently-maintained copy in src/data/story-markup.ts", async () => {
    const site = await import("../../../../../src/data/story-markup");
    const siteDeriveStorybookId = site.deriveStorybookId;

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
      expect(siteDeriveStorybookId(title, exportName)).toBe(
        cliDeriveStorybookId(title, exportName),
      );
    }
  });
});
