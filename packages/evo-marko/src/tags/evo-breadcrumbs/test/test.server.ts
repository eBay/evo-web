import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../breadcrumbs.stories";

const { Default, Buttons, WithHeading, Overflow } = composeStories(stories);

describe("evo-breadcrumbs SSR", () => {
  it("renders default with links", async () => {
    await snapshotHTML(Default);
  });

  it("renders buttons when no hrefs", async () => {
    await snapshotHTML(Buttons);
  });

  it("renders custom heading tag", async () => {
    await snapshotHTML(WithHeading);
  });

  it("renders overflow with many items", async () => {
    await snapshotHTML(Overflow);
  });
});
