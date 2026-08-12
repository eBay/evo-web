import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { EvoIconProvider } from "../../icon";
import { EvoCheckbox, type EvoCheckboxProps } from "../index";

function renderCheckbox(props: EvoCheckboxProps) {
  return renderToString(
    <EvoIconProvider>
      <EvoCheckbox {...props} />
    </EvoIconProvider>,
  );
}

describe("EvoCheckbox SSR", () => {
  it("renders the default checkbox", () => {
    expect(renderCheckbox({ "aria-label": "Option" })).toMatchSnapshot();
  });

  it("renders a large checkbox", () => {
    expect(
      renderCheckbox({ "aria-label": "Option", size: "large" }),
    ).toMatchSnapshot();
  });

  it("renders a checked checkbox", () => {
    expect(
      renderCheckbox({ "aria-label": "Option", defaultChecked: true }),
    ).toMatchSnapshot();
  });

  it("renders a disabled checkbox", () => {
    expect(
      renderCheckbox({ "aria-label": "Option", disabled: true }),
    ).toMatchSnapshot();
  });

  it("passes native input attributes and wrapper attributes", () => {
    expect(
      renderCheckbox({
        "aria-label": "Option",
        className: "custom-checkbox",
        id: "option",
        name: "options",
        style: { alignSelf: "center" },
        value: "123",
      }),
    ).toMatchSnapshot();
  });
});
