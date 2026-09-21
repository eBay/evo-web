import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../date-range-input.stories";

const { Default, Controllable } = composeStories(stories);

describe("evo-date-range-input SSR", () => {
  it("renders default", async () => {
    await snapshotHTML(Default, { locale: "en-US" });
  });

  it("renders with a value", async () => {
    await snapshotHTML(Default, {
      locale: "en-US",
      value: { from: "2024-05-06", to: "2024-05-20" },
    });
  });

  it("renders disabled", async () => {
    await snapshotHTML(Default, { locale: "en-US", disabled: true });
  });

  it("renders controllable example", async () => {
    await snapshotHTML(Controllable, { locale: "en-US" });
  });
});
