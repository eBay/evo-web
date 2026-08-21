import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../number-input.stories";

const { Default, WithLabel } = composeStories(stories);

describe("evo-number-input", () => {
  it("renders default number input", async () => {
    await snapshotHTML(Default);
  });

  it("renders number input with label", async () => {
    await snapshotHTML(WithLabel);
  });
});
