import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../carousel-autoplay.stories";
const { Default } = composeStories(stories);

describe("evo-carousel-autoplay", () => {
  it("renders the slides three times over, only the middle run exposed", async () => {
    await snapshotHTML(Default);
  });

  it("shows the first slide before the component starts up", async () => {
    const { container } = await render(Default);
    const slides = container.querySelectorAll(".carousel-autoplay__item");

    // Offset zero is where the server leaves it, and every run opens with the
    // same slide, so it still reads correctly without JavaScript.
    expect(slides).toHaveLength(12);
    expect(slides[0].textContent?.trim()).toBe("Slide 1");
  });
});
