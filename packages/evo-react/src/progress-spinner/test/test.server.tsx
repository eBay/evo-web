import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoProgressSpinner } from "../progress-spinner";
import type { SpinnerSize } from "../types";

describe("EvoProgressSpinner SSR", () => {
  it("renders the default spinner", () => {
    expect(
      renderToString(<EvoProgressSpinner a11yText="Loading" />),
    ).toMatchSnapshot();
  });

  it.each<SpinnerSize>(["small", "large"])("renders with size=%s", (size) => {
    expect(
      renderToString(<EvoProgressSpinner a11yText="Loading" size={size} />),
    ).toMatchSnapshot();
  });

  it("renders without an aria-label when a11yText is null", () => {
    expect(
      renderToString(<EvoProgressSpinner a11yText={null} />),
    ).toMatchSnapshot();
  });

  it("renders with additional span attributes", () => {
    expect(
      renderToString(
        <EvoProgressSpinner
          a11yText="Loading"
          className="custom-class"
          data-testid="spinner"
        />,
      ),
    ).toMatchSnapshot();
  });
});
