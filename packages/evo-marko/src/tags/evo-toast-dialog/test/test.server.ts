import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../toast-dialog.stories";

const { Default } = composeStories(stories);

describe("evo-toast-dialog SSR", () => {
  it("renders default", async () => {
    await snapshotHTML(Default);
  });

  it("renders in open state", async () => {
    await snapshotHTML(Default, { open: true });
  });
});
