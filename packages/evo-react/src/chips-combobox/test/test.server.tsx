import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoChipsCombobox, EvoChipsComboboxOption } from "../index";

describe("EvoChipsCombobox SSR", () => {
  it("renders selected chips and only available options", () => {
    expect(
      renderToString(
        <EvoChipsCombobox
          aria-label="Item features"
          defaultSelected={["Free shipping"]}
        >
          <EvoChipsComboboxOption text="Free shipping" />
          <EvoChipsComboboxOption text="Local pickup" />
        </EvoChipsCombobox>,
      ),
    ).toMatchSnapshot();
  });
});
