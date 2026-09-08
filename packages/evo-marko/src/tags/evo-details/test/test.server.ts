import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../details.stories"; // import all stories from the stories file
const { Default, WithLeading } = composeStories(stories);

describe("details", () => {
  it("renders basic version", async () => {
    await snapshotHTML(Default);
  });

  it("renders as div version", async () => {
    await snapshotHTML(Default, { as: "div" });
  });

  it("renders in open state", async () => {
    await snapshotHTML(Default, { open: true });
  });

  it("renders small version", async () => {
    await snapshotHTML(Default, { size: "small" });
  });

  it("renders center version", async () => {
    await snapshotHTML(Default, { alignment: "center" });
  });

  it("renders with leading element", async () => {
    await snapshotHTML(WithLeading);
  });
});
