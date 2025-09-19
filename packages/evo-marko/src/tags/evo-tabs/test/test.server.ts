import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../tabs.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

describe("tabs", () => {
  it("renders basic version with 3 tabs and 3 panels", async () => {
    await snapshotHTML(Default);
  });

  it("renders basic version with 3 tabs and 3 panels on the second panel", async () => {
    await snapshotHTML(Default, { index: 2 });
  });
});
