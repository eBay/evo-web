import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoListbox } from "../listbox";

describe("EvoListbox SSR", () => {
  it("renders the listbox and native select", () => {
    expect(
      renderToString(
        <EvoListbox
          a11yText="Shipping destination"
          a11ySelectedText="selected"
          name="destination"
          options={[
            { value: "US", text: "United States" },
            { value: "CA", text: "Canada", description: "International" },
          ]}
          defaultSelected="CA"
        />,
      ),
    ).toMatchSnapshot();
  });
});
