import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../date-input.stories";

const { Default } = composeStories(stories);

describe("evo-date-input SSR", () => {
  it("renders default", async () => {
    await snapshotHTML(Default, { locale: "en-US" });
  });

  it("renders with a value", async () => {
    await snapshotHTML(Default, { locale: "en-US", value: "2024-05-06" });
  });
});
