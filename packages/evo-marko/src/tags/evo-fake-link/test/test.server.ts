import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../fake-link.stories";

const { Default } = composeStories(stories);

describe("evo-fake-link SSR", () => {
  it("renders default", async () => {
    await snapshotHTML(Default);
  });

  it("renders disabled", async () => {
    await snapshotHTML(Default, { disabled: true });
  });

  it("renders standalone", async () => {
    await snapshotHTML(Default, { variant: "standalone" });
  });

  it("renders with a custom type and class", async () => {
    await snapshotHTML(Default, { type: "submit", class: "seller-details" });
  });
});
