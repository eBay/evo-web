import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../fake-tabs.stories"; // import all stories from the stories file
const { Default, NoPanel } = composeStories(stories);

describe("fake-tabs", () => {
  it("renders default", async () => {
    await snapshotHTML(Default);
  });

  it("renders no panel", async () => {
    await snapshotHTML(NoPanel);
  });

  it("renders with tabMatchesCurrentUrl=false", async () => {
    await snapshotHTML(Default, {tabMatchesCurrentUrl: false});
  });

  it("renders with other selected index", async () => {
    await snapshotHTML(Default, {selectedIndex: 2});
  });
  it("renders with no selected index", async () => {
    await snapshotHTML(Default, {selectedIndex: -1});
  });

});
