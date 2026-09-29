import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../chips-combobox.stories";

const { Default, Controllable } = composeStories(stories);

describe("evo-chips-combobox SSR", () => {
  it("renders default", async () => {
    await snapshotHTML(Default);
  });

  it("renders with selected chips, disabled", async () => {
    await snapshotHTML(Controllable, { disabled: true });
  });
});
