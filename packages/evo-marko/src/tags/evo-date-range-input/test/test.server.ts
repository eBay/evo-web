import { afterAll, beforeAll, describe, it, vi } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../date-range-input.stories";

const { Default } = composeStories(stories);

describe("evo-date-range-input SSR", () => {
  beforeAll(() => {
    vi.useFakeTimers({
      now: new Date("2026-06-15T12:00:00Z"),
      toFake: ["Date"],
    });
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("renders default", async () => {
    await snapshotHTML(Default, { locale: "en-US" });
  });
});
