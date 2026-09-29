import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoStarRating } from "../star-rating";

describe("EvoStarRating SSR", () => {
  it.each([0, 0.5, 2.5, 5])("renders value %s", (value) => {
    expect(
      renderToString(
        <EvoStarRating value={value} a11yText={`${value} stars`} />,
      ),
    ).toMatchSnapshot();
  });

  it("renders an external accessible label", () => {
    expect(
      renderToString(
        <EvoStarRating value={4} a11yText={null} aria-labelledby="rating" />,
      ),
    ).toMatchSnapshot();
  });
});
