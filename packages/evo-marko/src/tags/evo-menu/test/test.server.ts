import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import * as testUtils from "../../../common/test-utils/server";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../menu.stories"; // import all stories from the stories file

const { Default, Groups, Controlled, Typeahead, Badged, Sprites, Footer } =
  composeStories(stories);

describe("menu", () => {
  it("renders basic version", async () => {
    await snapshotHTML(Default);
  });

  it("renders with a11yText", async () => {
    await snapshotHTML(Default, { a11yText: "test" });
  });

  it("renders with a11yLabelId", async () => {
    await snapshotHTML(Default, { a11yLabelId: "test" });
  });

  it("renders with reverse=true", async () => {
    await snapshotHTML(Default, { reverse: true });
  });

  it("renders with fix-width=true", async () => {
    await snapshotHTML(Default, { fixWidth: true });
  });

  it("renders as radio with no selection when selected=null", async () => {
    await snapshotHTML(Default, { selected: null });
  });

  it("renders with groups", async () => {
    await snapshotHTML(Groups);
  });

  it("renders with controlled selection shared across groups", async () => {
    await snapshotHTML(Controlled);
  });

  it("renders with top-level items before groups", async () => {
    await snapshotHTML(Default, {
      selected: 0,
      group: [
        {
          selected: ["b"],
          item: [{ value: "a" }, { value: "b" }],
        },
      ],
    });
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
  it("renders with footer version", async () => {
    await snapshotHTML(Footer);
  });
  ["radio", "checkbox"].forEach((type) => {
    [true, false].forEach((checked) => {
      it(`renders with type=${type} and checked=${checked}`, async () => {
        await snapshotHTML(Default, { type, item: [{ checked }] });
      });
    });
  });

  testUtils.testPassThroughAttributes(Default);
});
