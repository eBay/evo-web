import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../progress-bar-expressive.stories";
import ProgressBarExpressive from "../index.marko";
import Messages from "./messages.marko";

const { Default } = composeStories(stories);

describe("evo-progress-bar-expressive SSR", () => {
  it("renders without messages", async () => {
    await snapshotHTML(ProgressBarExpressive, { a11yText: "Loading..." });
  });

  it("renders messages", async () => {
    await snapshotHTML(Default);
  });

  it("renders a single message", async () => {
    await snapshotHTML(Messages, { messages: [{ text: "Processing" }] });
  });

  it("renders medium text", async () => {
    await snapshotHTML(Default, { size: "medium" });
  });
});
