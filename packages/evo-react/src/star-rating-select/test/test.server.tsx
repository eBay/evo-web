import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoStarRatingSelect } from "../star-rating-select";

describe("EvoStarRatingSelect SSR", () => {
  it("renders five labeled radios with a selected value", () => {
    expect(
      renderToString(
        <EvoStarRatingSelect
          a11yText="Rate your purchase"
          name="purchase-rating"
          defaultValue={3}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders disabled radios with an external legend", () => {
    expect(
      renderToString(
        <fieldset>
          <legend id="rating-legend">Rate your purchase</legend>
          <EvoStarRatingSelect
            a11yText={null}
            aria-labelledby="rating-legend"
            disabled
            value={2}
          />
        </fieldset>,
      ),
    ).toMatchSnapshot();
  });
});
