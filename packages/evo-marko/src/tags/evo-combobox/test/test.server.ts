import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../combobox.stories";

const { Default } = composeStories(stories);

describe("evo-combobox SSR", () => {
  it("renders default", async () => {
    await snapshotHTML(Default);
  });

  it("renders disabled", async () => {
    await snapshotHTML(Default, { disabled: true });
  });

  it("renders borderless", async () => {
    await snapshotHTML(Default, { borderless: true });
  });

  it("renders fluid", async () => {
    await snapshotHTML(Default, { fluid: true });
  });

  it("renders with pre-selected value", async () => {
    await snapshotHTML(Default, { value: "Basic Offer" });
  });

  it("renders auto filtering for a nonmatching prefilled value", async () => {
    await snapshotHTML(Default, { filterMethod: "auto", value: "missing" });
  });

  it("renders supplied suggestions in manual mode", async () => {
    await snapshotHTML(Default, {
      filterMethod: "manual",
      value: "missing",
    });
  });

  it("renders input-independent suggestions in none mode", async () => {
    await snapshotHTML(Default, { filterMethod: "none", value: "missing" });
  });

  it("renders with fixed strategy", async () => {
    await snapshotHTML(Default, { strategy: "fixed" });
  });
});
