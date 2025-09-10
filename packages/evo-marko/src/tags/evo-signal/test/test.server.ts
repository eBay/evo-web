import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import { composeStories } from "@storybook/marko";
import * as stories from "../signal.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

describe("signal", () => {
  it("renders neutral version when no type is specified", async () => {
    await snapshotHTML(Default);
  });

  it("renders recent version", async () => {
    await snapshotHTML(Default, { status: "recent" });
  });

  it("renders time sensitive version", async () => {
    await snapshotHTML(Default, { status: "time-sensitive" });
  });

  it("renders trustworthy version", async () => {
    await snapshotHTML(Default, { status: "trustworthy" });
  });

  it("renders neutral version", async () => {
    await snapshotHTML(Default, { status: "neutral" });
  });
});
