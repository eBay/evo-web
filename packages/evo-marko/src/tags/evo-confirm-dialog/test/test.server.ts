import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../confirm-dialog.stories";

const { Default } = composeStories(stories);

describe("evo-confirm-dialog SSR", () => {
  it("renders default (closed)", async () => {
    await snapshotHTML(Default);
  });

  it("renders in open state", async () => {
    await snapshotHTML(Default, { open: true });
  });
});
