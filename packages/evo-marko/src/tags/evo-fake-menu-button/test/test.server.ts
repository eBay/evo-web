import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../fake-menu-button.stories";

const { Default, IconText, CustomLabel, Separator, Overflow, Disabled } =
  composeStories(stories);

describe("evo-fake-menu-button SSR", () => {
  it("renders default", async () => {
    await snapshotHTML(Default);
  });

  it("renders with reverse=true", async () => {
    await snapshotHTML(Default, { reverse: true });
  });

  it("renders with fixed strategy", async () => {
    await snapshotHTML(Default, { strategy: "fixed" });
  });

  it("renders with fixWidth=true", async () => {
    await snapshotHTML(Default, { fixWidth: true });
  });

  it("renders with borderless=true", async () => {
    await snapshotHTML(Default, { borderless: true });
  });

  it("renders with size=small", async () => {
    await snapshotHTML(Default, { size: "small" });
  });

  it("renders with icon and text", async () => {
    await snapshotHTML(IconText);
  });

  it("renders without toggle icon", async () => {
    await snapshotHTML(Default, { noToggleIcon: true });
  });

  it("renders with disabled state", async () => {
    await snapshotHTML(Disabled);
  });

  it("renders with a custom label", async () => {
    await snapshotHTML(CustomLabel);
  });

  it("renders overflow variant", async () => {
    await snapshotHTML(Overflow);
  });

  it("renders with separators", async () => {
    await snapshotHTML(Separator);
  });
});
