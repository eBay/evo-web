import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { EvoSignal } from "../signal";
import type { SignalStatus } from "../types";

describe("evo-signal", () => {
  it("renders visible text with the neutral style by default", async () => {
    const screen = await render(<EvoSignal>Price trend is stable</EvoSignal>);
    const signal = screen.getByText("Price trend is stable");

    await expect.element(signal).toHaveClass("signal", "signal--neutral");
    expect(signal.element().tagName).toBe("SPAN");
    await expect.element(signal).not.toHaveAttribute("tabindex");
  });

  it.each<SignalStatus>(["trustworthy", "recent", "time-sensitive"])(
    "applies the %s status class",
    async (status) => {
      const screen = await render(
        <EvoSignal status={status}>Listing signal</EvoSignal>,
      );

      await expect
        .element(screen.getByText("Listing signal"))
        .toHaveClass(`signal--${status}`);
    },
  );

  it("passes native span props, events, and ref through", async () => {
    const ref = createRef<HTMLSpanElement>();
    const onClick = vi.fn();
    const screen = await render(
      <EvoSignal
        className="listing-signal"
        data-testid="price-trend"
        onClick={onClick}
        ref={ref}
      >
        Price trend is stable
      </EvoSignal>,
    );
    const signal = screen.getByText("Price trend is stable");

    await expect.element(signal).toHaveClass("listing-signal");
    await expect.element(signal).toHaveAttribute("data-testid", "price-trend");
    expect(ref.current).toBe(signal.element());

    ref.current?.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
