import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoSelect, EvoSelectOption, EvoSelectOptionGroup } from "../index";

describe("EvoSelect SSR", () => {
  it("renders the native select and arrow icon", () => {
    expect(
      renderToString(
        <EvoSelect aria-label="Shipping method" defaultValue="standard">
          <EvoSelectOption value="standard">Standard</EvoSelectOption>
          <EvoSelectOption value="express">Express</EvoSelectOption>
        </EvoSelect>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a floating label, native option group, and large treatment", () => {
    expect(
      renderToString(
        <EvoSelect
          floatingLabel="Shipping method"
          size="large"
          aria-invalid="true"
        >
          <EvoSelectOption value="">Choose</EvoSelectOption>
          <EvoSelectOptionGroup label="Domestic">
            <EvoSelectOption value="express">Express</EvoSelectOption>
          </EvoSelectOptionGroup>
        </EvoSelect>,
      ),
    ).toMatchSnapshot();
  });
});
