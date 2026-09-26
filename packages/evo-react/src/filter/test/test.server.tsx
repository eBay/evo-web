import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoFilter } from "../filter";

describe("EvoFilter SSR", () => {
  it("renders the default button markup", () => {
    expect(
      renderToString(<EvoFilter>Free shipping</EvoFilter>),
    ).toMatchSnapshot();
  });

  it("renders selected and disabled buttons", () => {
    expect(
      renderToString(
        <EvoFilter selected disabled>
          Sold listings
        </EvoFilter>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a selected link with clipped text", () => {
    expect(
      renderToString(
        <EvoFilter href="/search" selected a11ySelectedText="Ausgewählt">
          Free shipping
        </EvoFilter>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a disabled link without a destination", () => {
    expect(
      renderToString(
        <EvoFilter href="/search" disabled>
          Free shipping
        </EvoFilter>,
      ),
    ).toMatchSnapshot();
  });
});
