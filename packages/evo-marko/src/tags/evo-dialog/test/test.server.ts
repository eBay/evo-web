import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../dialog.stories";
const { Default } = composeStories(stories);

describe("evo-dialog", () => {
  it("renders default version", async () => {
    await snapshotHTML(Default);
  });

  it("renders in open state", async () => {
    await snapshotHTML(Default, { open: true });
  });

  it("renders with size wide", async () => {
    await snapshotHTML(Default, { size: "wide" });
  });

  it("renders with size narrow", async () => {
    await snapshotHTML(Default, { size: "narrow" });
  });

  it("renders with size large", async () => {
    await snapshotHTML(Default, { size: "large" });
  });
});
