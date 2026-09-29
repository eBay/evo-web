import { afterAll, beforeAll, describe, it, vi } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../date-input.stories";

const { Default } = composeStories(stories);

describe("evo-date-input SSR", () => {
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

  it("renders with a value", async () => {
    await snapshotHTML(Default, { locale: "en-US", value: "2024-05-06" });
  });

  it("renders readonly with a disabled calendar trigger", async () => {
    await snapshotHTML(Default, { locale: "en-US", readonly: true });
  });
});
