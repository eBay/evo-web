import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { EvoIconProvider } from "../../icon";
import { EvoRadio, type EvoRadioProps } from "../index";

function renderRadio(props: EvoRadioProps) {
  return renderToString(
    <EvoIconProvider>
      <EvoRadio {...props} />
    </EvoIconProvider>,
  );
}

describe("EvoRadio SSR", () => {
  it("renders the default radio", () => {
    expect(renderRadio({ "aria-label": "Option" })).toMatchSnapshot();
  });

  it("renders a large radio", () => {
    expect(
      renderRadio({ "aria-label": "Option", size: "large" }),
    ).toMatchSnapshot();
  });

  it("renders a checked radio", () => {
    expect(
      renderRadio({ "aria-label": "Option", defaultChecked: true }),
    ).toMatchSnapshot();
  });

  it("renders a disabled radio", () => {
    expect(
      renderRadio({ "aria-label": "Option", disabled: true }),
    ).toMatchSnapshot();
  });

  it("passes native input attributes and wrapper attributes", () => {
    expect(
      renderRadio({
        "aria-label": "Option",
        className: "custom-radio",
        id: "option",
        name: "options",
        style: { alignSelf: "center" },
        value: "123",
      }),
    ).toMatchSnapshot();
  });
});
