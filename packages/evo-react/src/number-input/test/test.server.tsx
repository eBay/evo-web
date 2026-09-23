import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoNumberInput } from "../number-input";

describe("EvoNumberInput SSR", () => {
  it("renders defaults", () => {
    expect(
      renderToString(<EvoNumberInput a11yText="Item quantity" />),
    ).toMatchSnapshot();
  });

  it("renders a visible label with a supplied ID", () => {
    expect(
      renderToString(
        <EvoNumberInput
          id="item-quantity"
          label="Item quantity"
          a11yText={null}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders the delete variant", () => {
    expect(
      renderToString(
        <EvoNumberInput
          a11yDeleteText="Remove item"
          a11yText="Item quantity"
          defaultValue={1}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders fluid, large, and invalid presentation", () => {
    expect(
      renderToString(
        <EvoNumberInput
          a11yText="Item quantity"
          fluid
          inputSize="large"
          invalid
        />,
      ),
    ).toMatchSnapshot();
  });
});
