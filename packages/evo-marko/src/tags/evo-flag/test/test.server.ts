import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../flag.stories";

const { Default, WithText } = composeStories(stories);

describe("evo-flag SSR", () => {
  it("renders default", async () => {
    await snapshotHTML(Default);
  });

  it("renders decorative flag next to text", async () => {
    await snapshotHTML(WithText);
  });

  it("renders no size class when size is omitted", async () => {
    await snapshotHTML(Default, { size: undefined });
  });

  it("renders small size", async () => {
    await snapshotHTML(Default, { size: "small" });
  });

  it("renders medium size", async () => {
    await snapshotHTML(Default, { size: "medium" });
  });

  it("renders large size", async () => {
    await snapshotHTML(Default, { size: "large" });
  });

  it("renders x-large size", async () => {
    await snapshotHTML(Default, { size: "x-large" });
  });

  it("renders uppercase country code in lowercase", async () => {
    await snapshotHTML(Default, {
      country: "GB",
      a11yText: "United Kingdom",
    });
  });
});
