import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import * as testUtils from "../../../common/test-utils/server";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../menu.stories"; // import all stories from the stories file

const { Default, Typeahead, Badged, Sprites, Separator, Filter, Footer } =
  composeStories(stories);

describe("menu", () => {
  it("renders basic version", async () => {
    await snapshotHTML(Default);
  });

  it("renders with aria-label", async () => {
    await snapshotHTML(Default, { ariaLabel: "test" });
  });

  it("renders with aria-labelledby", async () => {
    await snapshotHTML(Default, { ariaLabelledBy: "test" });
  });

  it("renders with reverse=true", async () => {
    await snapshotHTML(Default, { reverse: true });
  });

  it("renders with fix-width=true", async () => {
    await snapshotHTML(Default, { fixWidth: true });
  });

  it("renders with separators", async () => {
    await snapshotHTML(Separator);
  });

  it("renders with typeahead", async () => {
    await snapshotHTML(Typeahead);
  });

  it("renders with badged version", async () => {
    await snapshotHTML(Badged);
  });
  it("renders with sprites version", async () => {
    await snapshotHTML(Sprites);
  });
  it("renders with filter version", async () => {
    await snapshotHTML(Filter);
  });
  it("renders with footer version", async () => {
    await snapshotHTML(Footer);
  });
  ["radio", "checkbox"].forEach((type) => {
    [true, false].forEach((checked) => {
      it(`renders with type=${type} and checked=${checked}`, async () => {
        await snapshotHTML(Default, { type, item: [{ checked }] });
      });
      it(`renders with type=${type} and checked=${checked} and with filter`, async () => {
        await snapshotHTML(Filter, { type, item: [{ checked }] });
      });
    });
  });

  testUtils.testPassThroughAttributes(Default);
  testUtils.testPassThroughAttributes(Default, {
    child: {
      name: "item",
      multiple: true,
    },
  });
});
