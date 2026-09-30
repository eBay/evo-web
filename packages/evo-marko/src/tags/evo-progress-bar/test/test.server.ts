import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../progress-bar.stories";

const { Default, Indeterminate } = composeStories(stories);

describe("evo-progress-bar SSR", () => {
  it("renders default", async () => {
    await snapshotHTML(Default);
  });

  it("renders indeterminate", async () => {
    await snapshotHTML(Indeterminate);
  });

  it("renders the default a11yText", async () => {
    await snapshotHTML(Default, { a11yText: undefined });
  });

  it("renders without aria-label when a11yText is null", async () => {
    await snapshotHTML(Default, {
      a11yText: null,
      "aria-labelledby": "upload-progress-label",
    });
  });

  it("renders fluid", async () => {
    await snapshotHTML(Default, { fluid: true });
  });
});
