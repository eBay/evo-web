import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../cta-button.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

describe("cta-button", () => {
  it("renders basic cta button", async () => {
    await snapshotHTML(Default);
  });

  it("renders large cta button", async () => {
    await snapshotHTML(Default, { size: "large" });
  });

  it("renders fluid cta button", async () => {
    await snapshotHTML(Default, { fluid: true });
  });

  it("renders truncated cta button", async () => {
    await snapshotHTML(Default, { truncated: true });
  });
});
