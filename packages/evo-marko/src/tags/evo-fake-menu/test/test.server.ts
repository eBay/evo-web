import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../fake-menu.stories";

const { Default, Separator } = composeStories(stories);

describe("evo-fake-menu SSR", () => {
  it("renders default", async () => {
    await snapshotHTML(Default);
  });

  it("renders with separators", async () => {
    await snapshotHTML(Separator);
  });

  it("renders with reverse", async () => {
    await snapshotHTML(Default, { reverse: true });
  });

  it("renders with fixWidth", async () => {
    await snapshotHTML(Default, { fixWidth: true });
  });
});
