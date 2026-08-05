import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoTextarea } from "../textarea";

describe("EvoTextarea SSR", () => {
  it("renders defaults", () => {
    expect(
      renderToString(<EvoTextarea aria-label="Description" />),
    ).toMatchSnapshot();
  });

  it("renders textarea states", () => {
    expect(
      renderToString(
        <EvoTextarea
          aria-label="Description"
          fluid
          inputSize="large"
          invalid
          readOnly
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders a floating label", () => {
    expect(
      renderToString(<EvoTextarea floatingLabel="Description" opaqueLabel />),
    ).toMatchSnapshot();
  });

  it("renders a controlled value", () => {
    expect(
      renderToString(
        <EvoTextarea aria-label="Description" value="Details" readOnly />,
      ),
    ).toMatchSnapshot();
  });
});
