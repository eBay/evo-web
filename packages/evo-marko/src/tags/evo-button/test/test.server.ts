import { it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../button.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

interface Properties {
  [key: string]: string[];
}

const properties: Properties = {
  appearance: ["primary", "secondary", "tertiary", "borderless", "form"],
  size: ["large"],
};

Object.keys(properties).forEach((property) => {
  const values = properties[property];
  values.forEach((value) => {
    it(`renders button with ${property}=${value}`, async () => {
      await snapshotHTML(Default, { [property]: value });
    });
  });
});

[false, true].forEach((fluid) => {
  it(`renders button with fluid=${fluid}`, async () => {
    await snapshotHTML(Default, { fluid });
  });
});

it("renders defaults", async () => {
  await snapshotHTML(Default);
});

it("renders with id override", async () => {
  await snapshotHTML(Default, { id: "test" });
});

it("renders with type override", async () => {
  await snapshotHTML(Default, { type: "submit" });
});

it("renders fake version", async () => {
  await snapshotHTML(Default, {
    href: "#",
    size: "large",
    appearance: "primary",
    ariaLabel: "fake button",
  });
});

it("renders disabled version", async () => {
  await snapshotHTML(Default, { disabled: true });
});

it("renders partially disabled version", async () => {
  await snapshotHTML(Default, { partiallyDisabled: true });
});

it("renders truncated button", async () => {
  await snapshotHTML(Default, {
    truncate: true,
  });
});

it("renders small button", async () => {
  await snapshotHTML(Default, {
    size: "small",
  });
});

it("renders small truncated button", async () => {
  await snapshotHTML(Default, {
    truncate: true,
    size: "small",
  });
});

it("renders large truncated button", async () => {
  await snapshotHTML(Default, {
    truncate: true,
    size: "large",
  });
});

it("renders destructive button", async () => {
  await snapshotHTML(Default, { appearance: "primary", destructive: true });
});

it("renders loading state when a11yLoadingText is set", async () => {
  await snapshotHTML(Default, {
    appearance: "primary",
    a11yLoadingText: "loading text",
  });
});
