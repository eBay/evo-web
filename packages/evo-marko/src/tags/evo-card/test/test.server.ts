import { it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../card.stories"; // import all stories from the stories file

const { Default, Anchor, Button, Video, Minimum } = composeStories(stories);

describe("evo-card", () => {
  it("renders default", async () => {
    await snapshotHTML(Default);
  });

  it("renders with layout=vertical", async () => {
    await snapshotHTML(Default, { layout: "vertical" });
  });

  it("renders anchor", async () => {
    await snapshotHTML(Anchor);
  });

  it("renders button", async () => {
    await snapshotHTML(Button);
  });

  it("renders video", async () => {
    await snapshotHTML(Video);
  });

  it("renders minimum", async () => {
    await snapshotHTML(Minimum);
  });

  it("renders anchor disabled", async () => {
    await snapshotHTML(Anchor, { disabled: true });
  });

  it("renders button disabled", async () => {
    await snapshotHTML(Button, { disabled: true });
  });
});
