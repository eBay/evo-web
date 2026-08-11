import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoEek } from "../eek";

const requiredProps = {
  a11yText: "Energy rating B. Range A+++ to D.",
  max: "A+++",
  min: "D",
  rating: "B",
};

describe("evo-eek", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders an accessible energy rating graphic", async () => {
    const screen = await render(<EvoEek {...requiredProps} />);
    const graphic = screen.getByRole("img", { name: requiredProps.a11yText });

    await expect.element(graphic).toHaveClass("eek");
    await expect.element(graphic).toHaveClass("eek--rating-5");
    await expect
      .element(graphic)
      .toHaveAttribute("aria-label", requiredProps.a11yText);
  });

  it("supports an alternative accessible name when a11yText is null", async () => {
    const screen = await render(
      <>
        <span id="eek-label">Appliance energy rating</span>
        <EvoEek
          {...requiredProps}
          a11yText={null}
          aria-labelledby="eek-label"
        />
      </>,
    );
    const graphic = screen.getByRole("img", {
      name: "Appliance energy rating",
    });

    await expect.element(graphic).not.toHaveAttribute("aria-label");
    await expect
      .element(graphic)
      .toHaveAttribute("aria-labelledby", "eek-label");
  });

  it.each<{ rating: string; position: number }>([
    { rating: "A++", position: 1 },
    { rating: "A+", position: 2 },
    { rating: "A", position: 3 },
    { rating: "B", position: 4 },
    { rating: "C", position: 5 },
    { rating: "D", position: 6 },
    { rating: "E", position: 7 },
  ])(
    "maps rating $rating to position $position",
    async ({ rating, position }) => {
      const screen = await render(
        <EvoEek
          a11yText={`Energy rating ${rating}`}
          max="A++"
          min="E"
          rating={rating}
        />,
      );

      await expect
        .element(screen.getByRole("img", { name: `Energy rating ${rating}` }))
        .toHaveClass(`eek--rating-${position}`);
    },
  );

  it.each(["F", "G"])("caps rating %s at position 7", async (rating) => {
    const screen = await render(
      <EvoEek
        a11yText={`Energy rating ${rating}`}
        max="A++"
        min="G"
        rating={rating}
      />,
    );

    await expect
      .element(screen.getByRole("img", { name: `Energy rating ${rating}` }))
      .toHaveClass("eek--rating-7");
  });

  it.each([
    ["unsupported range", "A", "D", "B"],
    ["rating outside range", "A+", "F", "A++"],
  ])(
    "does not add a rating modifier for an %s",
    async (_case, max, min, rating) => {
      const screen = await render(
        <EvoEek
          a11yText={`Energy rating ${rating}`}
          max={max}
          min={min}
          rating={rating}
        />,
      );
      const graphic = screen.getByRole("img", {
        name: `Energy rating ${rating}`,
      });

      await expect.element(graphic).toHaveClass("eek");
      expect(graphic.element().className).not.toMatch(/eek--rating-/);
    },
  );

  it("applies only the large size modifier", async () => {
    const regularScreen = await render(
      <EvoEek
        {...requiredProps}
        a11yText="Regular energy rating"
        size="regular"
      />,
    );
    const largeScreen = await render(
      <EvoEek {...requiredProps} a11yText="Large energy rating" size="large" />,
    );

    await expect
      .element(
        regularScreen.getByRole("img", { name: "Regular energy rating" }),
      )
      .not.toHaveClass("eek--large");
    await expect
      .element(largeScreen.getByRole("img", { name: "Large energy rating" }))
      .toHaveClass("eek--large");
  });

  it("passes className, native attributes, events, and ref to the root div", async () => {
    const onClick = vi.fn();
    const ref = createRef<HTMLDivElement>();
    const screen = await render(
      <EvoEek
        {...requiredProps}
        className="custom-eek"
        data-testid="energy-rating"
        onClick={onClick}
        ref={ref}
      />,
    );
    const graphic = screen.getByRole("img", {
      name: requiredProps.a11yText,
    });

    await expect.element(graphic).toHaveClass("custom-eek");
    await expect
      .element(graphic)
      .toHaveAttribute("data-testid", "energy-rating");
    expect(ref.current).toBe(graphic.element());

    await user.click(graphic);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders the fixed Skin structure and EEK icons", async () => {
    const screen = await render(<EvoEek {...requiredProps} />);
    const graphic = screen
      .getByRole("img", { name: requiredProps.a11yText })
      .element();

    // The visual content is aria-hidden; direct DOM queries verify its fixed Skin structure.
    const container = graphic.querySelector(":scope > .eek__container");
    const range = container?.querySelector(":scope > .eek__rating-range");
    const rating = container?.querySelector(":scope > .eek__rating");

    expect(container).toHaveAttribute("aria-hidden", "true");
    expect(range?.textContent).toBe("A+++D");
    expect(range?.querySelector("svg.icon--eek-range-arrow")).not.toBeNull();
    expect(rating).toHaveTextContent("B");
    expect(
      graphic.querySelector(":scope > svg.icon--eek-arrow"),
    ).not.toBeNull();
  });
});
