import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoEek } from "../eek";

describe("EvoEek SSR", () => {
  it("renders a valid regular rating", () => {
    expect(
      renderToString(
        <EvoEek
          a11yText="Energy rating B. Range A+++ to D."
          max="A+++"
          min="D"
          rating="B"
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders a large rating capped at position 7", () => {
    expect(
      renderToString(
        <EvoEek
          a11yText="Energy rating G. Range A++ to G."
          max="A++"
          min="G"
          rating="G"
          size="large"
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders an invalid range without a rating modifier", () => {
    expect(
      renderToString(
        <EvoEek
          a11yText="Energy rating B. Range A to D."
          max="A"
          min="D"
          rating="B"
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders without aria-label when an alternative label is supplied", () => {
    expect(
      renderToString(
        <>
          <span id="eek-label">Appliance energy rating</span>
          <EvoEek
            a11yText={null}
            aria-labelledby="eek-label"
            className="custom-eek"
            data-testid="energy-rating"
            max="A"
            min="G"
            rating="C"
          />
        </>,
      ),
    ).toMatchSnapshot();
  });
});
