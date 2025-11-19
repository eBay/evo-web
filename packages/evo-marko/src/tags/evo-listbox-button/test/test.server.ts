import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../listbox-button.stories";

const { Default, withDescription, withError } = composeStories(stories);

describe("listbox button", () => {
  it("renders basic version", async () => {
    await snapshotHTML(Default);
  });

  it("renders fluid layout", async () => {
    await snapshotHTML(Default, { fluid: true });
  });

  it("renders truncated layout", async () => {
    await snapshotHTML(Default, { truncate: true });
  });

  it("renders with strategy=fixed", async () => {
    await snapshotHTML(Default, { strategy: "fixed" });
  });

  it("renders with second item selected", async () => {
    await snapshotHTML(Default, { selected: 1 });
  });

  it("renders with prefix label", async () => {
    await snapshotHTML(Default, { prefixLabel: "Selected: " });
  });

  it("renders with prefix id", async () => {
    await snapshotHTML(Default, { prefixId: "prefixId" });
  });

  it("renders with floating label", async () => {
    await snapshotHTML(Default, { floatingLabel: "floating label" });
  });

  it("renders with form", async () => {
    await snapshotHTML(Default, { variant: "form" });
  });

  it("renders with description", async () => {
    await snapshotHTML(withDescription);
  });

  it("renders with error", async () => {
    await snapshotHTML(withError);
  });
});
