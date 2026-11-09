import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../star-rating-select.stories";

const { Default, Fieldset } = composeStories(stories);

describe("evo-star-rating-select SSR", () => {
  it("renders default", async () => {
    await snapshotHTML(Default);
  });

  it("renders a selected, disabled rating", async () => {
    await snapshotHTML(Default, {
      value: 3,
      name: "purchase-rating",
      disabled: true,
    });
  });

  it("renders an external accessible label", async () => {
    await snapshotHTML(Fieldset);
  });
});
