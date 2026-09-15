import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";

import { snapshotHTML } from "../../../common/test-utils/snapshots";
import template from "../index.marko";

const iconName = "mic";
const progrmaBadgeIcon = "program-badge-authenticity-guaranteed";

describe("icon", () => {
  it("renders icon inline type with title text", async () => {
    const input = {
      _name: iconName,
      _type: "icon",
      _symbol: () => {},
      a11yText: "inline icon",
    };
    await snapshotHTML(template, input);
  });

  it("renders icon inline type without title text", async () => {
    const input = {
      _name: iconName,
      _type: "icon",
      _symbol: () => {},
    };
    await snapshotHTML(template, input);
  });

  it("renders icon no-skin-classes", async () => {
    const input = {
      _name: iconName,
      _type: "icon",
      class: "custom-class",
      _symbol: () => {},
    };
    await snapshotHTML(template, input);
  });

  it("renders filled status icon with no color modifier class", async () => {
    const input = {
      _name: "attention-filled-16",
      _size: "16",
      _type: "icon",
      _symbol: () => {},
    };
    const { container } = await render(template, input);
    const icon = container.querySelector("svg");
    expect(icon?.classList.contains("icon--16")).toBe(true);
    expect(icon?.classList.contains("icon--attention-filled")).toBe(false);
  });
});
