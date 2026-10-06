import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../section-title.stories";

const { Default, IconAndSeeAll, WithOverflow, WithInfotip } =
  composeStories(stories);

describe("evo-section-title SSR", () => {
  it("renders defaults", async () => {
    await snapshotHTML(Default);
  });

  it("renders with cta custom text", async () => {
    await snapshotHTML(Default, {
      href: "https://www.ebay.com",
      ctaText: "Custom Text",
    });
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

  it("renders with infotip", async () => {
    await snapshotHTML(WithInfotip);
  });
});
