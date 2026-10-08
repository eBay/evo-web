import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoListboxButton } from "../listbox-button";

describe("EvoListboxButton SSR", () => {
  it("renders the default button and hidden form select", () => {
    expect(
      renderToString(
        <EvoListboxButton
          prefixLabel="Shipping region"
          a11ySelectedText="selected"
          name="region"
          options={[
            { value: "US", text: "United States" },
            { value: "CA", text: "Canada", description: "International" },
          ]}
          defaultSelected="CA"
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders an open form variant with an external label", () => {
    expect(
      renderToString(
        <EvoListboxButton
          prefixId="shipping-label"
          a11ySelectedText="selected"
          options={[{ value: 1, text: "Standard delivery" }]}
          open
          variant="form"
          fluid
          aria-invalid
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders a div wrapper when truncated and not fluid", () => {
    expect(
      renderToString(
        <EvoListboxButton
          a11yText="Shipping region"
          a11ySelectedText="selected"
          options={[{ value: "US", text: "United States" }]}
          truncate
        />,
      ),
    ).toMatchSnapshot();
  });
});
