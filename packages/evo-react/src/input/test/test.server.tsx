import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoIconClear16 } from "../../icon/icons/clear-16";
import { EvoInput } from "../input";

describe("EvoInput SSR", () => {
  it("renders defaults", () => {
    expect(renderToString(<EvoInput aria-label="Input" />)).toMatchSnapshot();
  });

  it("renders input states", () => {
    expect(
      renderToString(
        <EvoInput
          aria-label="Input"
          fluid
          inputSize="large"
          invalid
          readOnly
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders and associates affix content", () => {
    expect(
      renderToString(
        <EvoInput
          aria-label="Amount"
          aria-describedby="error-id"
          prefix={{ content: "$", id: "prefix-id" }}
          postfix={{ content: "USD", id: "postfix-id" }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders an actionable postfix icon", () => {
    expect(
      renderToString(
        <EvoInput
          aria-label="Search"
          postfix={{
            icon: <EvoIconClear16 />,
            buttonProps: { a11yText: "Clear search" },
          }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders a floating label", () => {
    expect(
      renderToString(<EvoInput floatingLabel="Email address" />),
    ).toMatchSnapshot();
  });
});
