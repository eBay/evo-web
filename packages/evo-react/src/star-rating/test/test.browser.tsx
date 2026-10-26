import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { EvoStarRating } from "../star-rating";

describe("evo-star-rating", () => {
  it("names five decorative stars as one image and forwards div attributes", async () => {
    const ref = createRef<HTMLDivElement>();
    const screen = await render(
      <EvoStarRating
        ref={ref}
        value={3.5}
        a11yText="Seller rating: 3.5 out of 5"
        className="seller-rating"
        dir="rtl"
        data-testid="seller-rating"
      />,
    );
    const rating = screen.getByRole("img", {
      name: "Seller rating: 3.5 out of 5",
    });

    await expect.element(rating).toHaveAttribute("data-stars", "3-5");
    await expect.element(rating).toHaveClass("star-rating", "seller-rating");
    await expect.element(rating).toHaveAttribute("dir", "rtl");
    expect(
      rating.element().querySelectorAll("svg.star-rating__icon"),
    ).toHaveLength(5);
    expect(
      rating.element().querySelectorAll('svg[aria-hidden="true"]'),
    ).toHaveLength(5);
    expect(ref.current).toBe(rating.element());
  });

  it("clamps and rounds values to supported half-star visuals", async () => {
    const screen = await render(
      <>
        <EvoStarRating value={-1} a11yText="0 stars" data-testid="low-rating" />
        <EvoStarRating
          value={2.74}
          a11yText="2.5 stars"
          data-testid="middle-rating"
        />
        <EvoStarRating value={7} a11yText="5 stars" data-testid="high-rating" />
      </>,
    );

    await expect
      .element(screen.getByTestId("low-rating"))
      .toHaveAttribute("data-stars", "0");
    await expect
      .element(screen.getByTestId("middle-rating"))
      .toHaveAttribute("data-stars", "2-5");
    await expect
      .element(screen.getByTestId("high-rating"))
      .toHaveAttribute("data-stars", "5");
  });

  it("supports a context-specific name or an external label", async () => {
    const screen = await render(
      <>
        <EvoStarRating value={5} a11yText="Five-star seller rating" />
        <span id="item-rating-label">Item rating: 4 out of 5</span>
        <EvoStarRating
          value={4}
          a11yText={null}
          aria-labelledby="item-rating-label"
        />
      </>,
    );

    await expect
      .element(screen.getByRole("img", { name: "Five-star seller rating" }))
      .toBeInTheDocument();
    await expect
      .element(screen.getByRole("img", { name: "Item rating: 4 out of 5" }))
      .toBeInTheDocument();
  });
});
