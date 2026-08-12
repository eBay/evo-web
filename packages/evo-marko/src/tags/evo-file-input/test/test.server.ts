import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../file-input.stories";

const { Default } = composeStories(stories);

describe("evo-file-input SSR", () => {
  it("renders Default story", async () => {
    await snapshotHTML(Default);
  });
});
