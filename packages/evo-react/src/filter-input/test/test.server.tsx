import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoFilterInput } from "../filter-input";

describe("EvoFilterInput SSR", () => {
  it("renders an accessible search box without a clear button", () => {
    expect(
      renderToString(
        <EvoFilterInput
          a11yControlsId="results"
          aria-label="Filter products"
          placeholder="Filter products"
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders the large treatment with a clear button", () => {
    expect(
      renderToString(
        <EvoFilterInput
          a11yControlsId="results"
          a11yClearButtonText="Clear filter"
          aria-label="Filter products"
          defaultValue="Camera"
          placeholder="Filter products"
          size="large"
        />,
      ),
    ).toMatchSnapshot();
  });
});
