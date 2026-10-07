import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import HeadingLevel from "./heading-level.marko";
import * as stories from "../section-title.stories";

const { Default, IconAndSeeAll, WithOverflow } = composeStories(stories);

describe("evo-section-title SSR", () => {
  it("renders defaults", async () => {
    await snapshotHTML(Default);
  });

  it("renders with a custom heading level", async () => {
    await snapshotHTML(HeadingLevel);
  });

  it("renders with no subtitle", async () => {
    await snapshotHTML(Default, { subtitle: null });
  });

  it("renders icon and see all", async () => {
    await snapshotHTML(IconAndSeeAll);
  });

  it("renders with overflow", async () => {
    await snapshotHTML(WithOverflow);
  });
});
