import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../filter-input.stories";

const { Default, Controls } = composeStories(stories);

describe("evo-filter-input", () => {
  it("renders default input", async () => {
    await snapshotHTML(Default);
  });

  it("renders small", async () => {
    await snapshotHTML(Default, { size: "small" });
  });

  it("renders large", async () => {
    await snapshotHTML(Default, { size: "large" });
  });

  it("renders with aria-controls", async () => {
    await snapshotHTML(Controls);
  });

  it("renders without clear button and no placeholder", async () => {
    await snapshotHTML(Default, { a11yClearButton: "", placeholder: "" });
  });

  it("renders with custom placeholder and aria label", async () => {
    await snapshotHTML(Default, {
      placeholder: "Custom placeholder",
      "aria-label": "Custom aria label",
      a11yClearButton: "Clear the text",
    });
  });
});
