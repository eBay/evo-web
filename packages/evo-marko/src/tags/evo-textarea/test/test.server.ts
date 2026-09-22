import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../textarea.stories";

const { Default } = composeStories(stories);

describe("evo-textarea", () => {
  it("renders default textarea", async () => {
    await snapshotHTML(Default);
  });

  it("renders default textarea with an id", async () => {
    await snapshotHTML(Default, { id: "textarea-id" });
  });

  it("renders fluid textarea", async () => {
    await snapshotHTML(Default, { fluid: true });
  });

  it("renders a disabled textarea", async () => {
    await snapshotHTML(Default, { disabled: true });
  });

  it("renders a textarea with invalid/error state", async () => {
    await snapshotHTML(Default, { invalid: true });
  });
});
