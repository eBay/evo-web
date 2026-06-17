import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../ccd.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

describe("ccd", () => {
  it("renders default ccd", async () => {
    await snapshotHTML(Default);
  });

  it("renders ccd with charger included", async () => {
    await snapshotHTML(Default, { chargerIcon: "included" });
  });

  it("renders ccd with charger not included", async () => {
    await snapshotHTML(Default, { chargerIcon: "not-included" });
  });

  it("renders ccd with usbpd included", async () => {
    await snapshotHTML(Default, { secondaryType: "usbpd" });
  });

  it("renders ccd with charger included and usbpd", async () => {
    await snapshotHTML(Default, {
      chargerIcon: "included",
      secondaryType: "usbpd",
    });
  });

  it("renders ccd with custom a11y", async () => {
    await snapshotHTML(Default, {
      chargerIcon: "included",
      secondaryType: "usbpd",
      a11yText: "custom text",
    });
  });

  it("renders with no min and max", async () => {
    await snapshotHTML(Default, { min: null, max: null });
  });

  it("renders with no min and max but with charger included", async () => {
    await snapshotHTML(Default, {
      min: null,
      max: null,
      chargerIcon: "included",
    });
  });

  it("renders with custom units", async () => {
    await snapshotHTML(Default, { units: "V" });
  });

  it("renders with no min and max but with no charger included", async () => {
    await snapshotHTML(Default, {
      min: null,
      max: null,
      chargerIcon: "not-included",
    });
  });
});
