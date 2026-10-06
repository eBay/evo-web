import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../flag.stories";

const { Default, WithText } = composeStories(stories);

afterEach(cleanup);

describe("evo-flag", () => {
  it("exposes the flag as an image named by a11yText", async () => {
    const component = await render(Default);
    const flag = component.getByRole("img", { name: "United States" });
    expect(flag).toHaveClass("fflag", "fflag--us");
  });

  it("hides a decorative flag from assistive technology", async () => {
    const component = await render(WithText);
    expect(component.queryByRole("img")).toBeNull();
    expect(component.container.querySelector(".fflag")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });
});
