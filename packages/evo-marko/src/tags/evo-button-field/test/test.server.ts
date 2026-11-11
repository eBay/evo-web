import { it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../button-field.stories";
const { Default } = composeStories(stories);

it("renders defaults", async () => {
  await snapshotHTML(Default);
});

it("renders borderless", async () => {
  await snapshotHTML(Default, { borderless: true });
});

it("renders large truncated", async () => {
  await snapshotHTML(Default, { size: "large", truncate: true });
});

it("renders expanded", async () => {
  await snapshotHTML(Default, { "aria-expanded": "true" });
});
