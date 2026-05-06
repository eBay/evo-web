import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../textarea.stories";

const { Isolated, Invalid, Disabled } = composeStories(stories);

describe("evo-textarea", () => {
  it("renders default textarea", async () => {
    await snapshotHTML(Isolated);
  });

  it("renders default textarea with an id", async () => {
    await snapshotHTML(Isolated, { id: "textarea-id" });
  });

  it("renders fluid textarea", async () => {
    await snapshotHTML(Isolated, { fluid: true });
  });

  it("renders a disabled textarea", async () => {
    await snapshotHTML(Disabled);
  });

  it("renders a textarea with invalid/error state", async () => {
    await snapshotHTML(Invalid);
  });
});
