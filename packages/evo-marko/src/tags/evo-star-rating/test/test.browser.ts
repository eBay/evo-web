import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../star-rating.stories";

const { Default } = composeStories(stories);

afterEach(cleanup);

describe("evo-star-rating", () => {
  let component: Awaited<ReturnType<typeof render>>;

  beforeEach(async () => {
    component = await render(Default);
  });

  it("should render with role img", () => {
    expect(component.getByRole("img")).toBeTruthy();
  });

  it("should have correct data-stars attribute", () => {
    const el = component.getByRole("img");
    expect(el.getAttribute("data-stars")).toBe("3-5");
  });

  it.skip("should have default aria-label", () => {
    // aria-label text differs between Marko 5 and Marko 6.
    const el = component.getByRole("img");
    expect(el.getAttribute("aria-label")).toBe("3.5 out of 5 stars");
  });

  it("should render 5 star icons", () => {
    const el = component.getByRole("img");
    const svgs = el.querySelectorAll("svg");
    expect(svgs.length).toBe(5);
  });
});
