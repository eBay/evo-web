import { describe, expect, it } from "vitest";
import { render } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../dialog.stories";
import BannerStyle from "./banner-style.marko";
const { Default } = composeStories(stories);

describe("evo-dialog", () => {
  it("renders default version", async () => {
    await snapshotHTML(Default);
  });

  it("renders in open state", async () => {
    await snapshotHTML(Default, { open: true });
  });

  it("renders with size wide", async () => {
    await snapshotHTML(Default, { size: "wide" });
  });

  it("renders with size narrow", async () => {
    await snapshotHTML(Default, { size: "narrow" });
  });

  it("renders with size large", async () => {
    await snapshotHTML(Default, { size: "large" });
  });

  it("keeps a banner style given as a string", async () => {
    const { container } = await render(BannerStyle);
    const banner = container.querySelector<HTMLElement>(".dialog__image")!;
    expect(banner.style.opacity).toBe("0.5");
    expect(banner.style.backgroundImage).toBe('url("banner.png")');
  });
});
