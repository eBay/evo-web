import { describe, it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../icon-button.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

interface Properties {
  [key: string]: string[];
}

const properties: Properties = {
  priority: ["primary", "secondary", "delete"],
  size: ["large", "small"],
};

describe("evo-icon-button", () => {
  it("Renders defaults", async () => {
    await snapshotHTML(Default);
  });

  Object.keys(properties).forEach((property) => {
    const values = properties[property];
    values.forEach((value) => {
      it(`renders button with ${property}=${value}`, async () => {
        await snapshotHTML(Default, { [property]: value });
      });
    });
  });
  it("renders fake version", async () => {
    await snapshotHTML(Default, {
      href: "#",
      ariaLabel: "fake button",
    });
  });

  it("renders disabled version", async () => {
    await snapshotHTML(Default, {
      disabled: true,
    });
  });

  it("renders partially disabled version", async () => {
    await snapshotHTML(Default, {
      partiallyDisabled: true,
    });
  });

  it("renders icon", async () => {
    await snapshotHTML(Default, {
      ariaLabel: "icon button",
    });
  });

  it("renders badged icon variant", async () => {
    await snapshotHTML(Default, {
      badgeNumber: 5,
      badgeAriaLabel: "5 Items",
      ariaLabel: "Badged button",
    });
  });
});
