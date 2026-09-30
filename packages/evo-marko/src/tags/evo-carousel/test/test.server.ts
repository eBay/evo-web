import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../carousel.stories";
const { Continuous, Discrete, Autoplay } = composeStories(stories);

describe("evo-carousel", () => {
  it("renders a continuous carousel", async () => {
    await snapshotHTML(Continuous);
  });

  it("renders a discrete carousel", async () => {
    await snapshotHTML(Discrete);
  });

  it("renders an autoplaying carousel", async () => {
    await snapshotHTML(Autoplay);
  });

  it("sizes and spaces items with custom properties", async () => {
    const { container } = await render(Discrete, { gap: 32 });
    const root = container.querySelector(".carousel") as HTMLElement;

    expect(root.getAttribute("style")).toBe(
      "--carousel-gap: 32px;--carousel-items-in-view: 3.1",
    );
    expect(root.className).toContain("carousel--peek");
  });

  it("peeks at a fraction it is given, or none", async () => {
    const style = async (input: Record<string, unknown>) =>
      (await render(Discrete, input)).container
        .querySelector(".carousel")
        ?.getAttribute("style");

    expect(await style({ itemsPerSlide: 2.5 })).toContain(
      "--carousel-items-in-view: 2.5",
    );
    expect(await style({ noPeek: true })).toContain(
      "--carousel-items-in-view: 3",
    );
  });

  it("maps its options onto skin classes", async () => {
    const { container } = await render(Continuous, {
      imageTreatment: "large",
      hiddenScrollbar: true,
    });

    expect(container.querySelector(".carousel")?.className).toContain(
      "carousel--hidden-scrollbar",
    );
    expect(container.querySelector(".carousel__list")?.className).toContain(
      "carousel__list--image-treatment-large",
    );
    expect(container.querySelector(".carousel__viewport--mask")).not.toBeNull();
  });
});
