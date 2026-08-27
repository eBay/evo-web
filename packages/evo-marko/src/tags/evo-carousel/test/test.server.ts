import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../carousel.stories";
const { Continuous } = composeStories(stories);

describe("evo-carousel", () => {
  it("renders the skin carousel structure", async () => {
    await snapshotHTML(Continuous);
  });

  it("maps its options onto skin classes", async () => {
    const { container } = await render(Continuous, {
      itemsPerSlide: 4,
      gap: 32,
      imageTreatment: "matte",
      scrollbar: true,
      mask: true,
    });
    const root = container.querySelector(".carousel") as HTMLElement;

    expect(root.className).not.toContain("carousel--hidden-scrollbar");
    expect(root.getAttribute("style")).toBe(
      "--carousel-gap: 32px;--carousel-items-per-slide: 4",
    );
    expect(container.querySelector(".carousel__list")?.className).toContain(
      "carousel__list--slides",
    );
    expect(container.querySelector(".carousel__list")?.className).toContain(
      "carousel__list--image-treatment",
    );
    expect(container.querySelector(".carousel__viewport")?.className).toContain(
      "carousel__viewport--mask",
    );
  });
});
