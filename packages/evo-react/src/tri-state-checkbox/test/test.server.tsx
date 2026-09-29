import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoTriStateCheckbox } from "../tri-state-checkbox";

describe("EvoTriStateCheckbox SSR", () => {
  it("renders unchecked by default", () => {
    expect(
      renderToString(<EvoTriStateCheckbox aria-label="Select all items" />),
    ).toMatchSnapshot();
  });

  it("renders a mixed large checkbox", () => {
    expect(
      renderToString(
        <EvoTriStateCheckbox
          aria-label="Select all items"
          checked="mixed"
          size="large"
        />,
      ),
    ).toMatchSnapshot();
  });

  it("derives checked state from a selected group", () => {
    expect(
      renderToString(
        <EvoTriStateCheckbox
          aria-label="Select inventory"
          values={["Camera", "Lens"]}
          checkedValues={["Camera", "Lens"]}
        />,
      ),
    ).toMatchSnapshot();
  });
});
