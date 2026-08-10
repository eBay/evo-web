import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { EvoProgressSpinner } from "../progress-spinner";

function getHiddenIcon(spinner: Element) {
  // The decorative spinner icon is hidden from the accessibility tree.
  return spinner.querySelector("svg");
}

describe("evo-progress-spinner", () => {
  it("renders the default spinner", async () => {
    const screen = await render(<EvoProgressSpinner a11yText="Loading" />);
    const spinner = screen.getByRole("img", { name: "Loading" });

    await expect.element(spinner).toHaveClass("progress-spinner");
    expect(getHiddenIcon(spinner.element())).toHaveClass("icon--24");
  });

  it("renders the small spinner without a size modifier", async () => {
    const screen = await render(
      <EvoProgressSpinner a11yText="Loading" size="small" />,
    );
    const spinner = screen.getByRole("img", { name: "Loading" });

    await expect.element(spinner).not.toHaveClass("progress-spinner--small");
    expect(getHiddenIcon(spinner.element())).toHaveClass("icon--20");
  });

  it("renders the large spinner with its size modifier", async () => {
    const screen = await render(
      <EvoProgressSpinner a11yText="Loading" size="large" />,
    );
    const spinner = screen.getByRole("img", { name: "Loading" });

    await expect.element(spinner).toHaveClass("progress-spinner--large");
    expect(getHiddenIcon(spinner.element())).toHaveClass("icon--30");
  });

  it("omits aria-label when a11yText is null", async () => {
    const screen = await render(
      <EvoProgressSpinner a11yText={null} data-testid="spinner" />,
    );
    const spinner = screen.getByTestId("spinner");

    await expect.element(spinner).not.toHaveAttribute("aria-label");
  });

  it("passes through span attributes and ref", async () => {
    const ref = createRef<HTMLSpanElement>();
    const screen = await render(
      <EvoProgressSpinner
        a11yText="Loading"
        className="custom-class"
        data-testid="spinner"
        ref={ref}
      />,
    );
    const spinner = screen.getByTestId("spinner");

    await expect.element(spinner).toHaveClass("custom-class");
    expect(ref.current).toBe(spinner.element());
  });
});
