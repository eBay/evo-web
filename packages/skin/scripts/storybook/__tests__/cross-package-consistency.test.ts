import path from "path";

import { describe, expect, it } from "vitest";

import { extractStoryMarkup } from "../extract-story-markup";

/**
 * `extract-story-markup.ts` (Node/fs discovery) and `src/data/story-markup.ts`
 * (the live site's Vite-glob discovery) both feed the one shared
 * `buildStoryMarkup` in `story-markup-core.ts` — the extraction logic itself
 * can no longer drift between them, since there is only one copy of it.
 *
 * What each file still owns independently is its own *discovery* step: walking
 * the filesystem versus Vite's static glob, and (for the site) the
 * `relativePathFromGlobKey` adaptation that turns a glob key into the same
 * `relativePath` shape the fs-based walk produces. That adaptation has no test
 * of its own anywhere else, so this test drives both discovery mechanisms
 * against the same real story files and asserts they agree, catching a bug in
 * either one's adaptation logic rather than in the (now-shared) logic beyond it.
 */
describe("story discovery cross-package consistency", () => {
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
