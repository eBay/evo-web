import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { EvoSignal } from "../signal";
import { EvoIconPromotion12 } from "../../icon/icons/promotion-12";
import type { SignalTone } from "../types";

describe("evo-signal", () => {
  it("renders visible text with the neutral style by default", async () => {
    const screen = await render(<EvoSignal>Price trend is stable</EvoSignal>);
    const signal = screen.getByText("Price trend is stable");

    await expect.element(signal).toHaveClass("signal", "signal--neutral");
    expect(signal.element().tagName).toBe("SPAN");
    await expect.element(signal).not.toHaveAttribute("tabindex");
  });

  it.each<SignalTone>([
    "neutral",
    "information",
    "positive",
    "warning",
    "attention",
  ])("applies the %s tone class", async (tone) => {
    const screen = await render(
      <EvoSignal tone={tone}>Listing signal</EvoSignal>,
    );

    expect(screen.getByText("Listing signal").element().className).toBe(
      `signal signal--${tone}`,
    );
  });

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

  it("sets the tone class", async () => {
    const screen = await render(<EvoSignal tone="positive">Tone</EvoSignal>);

    expect(screen.getByText("Tone").element().className).toBe(
      "signal signal--positive",
    );
  });

  it("adds strong and subtle emphasis classes and none for default", async () => {
    const screen = await render(
      <>
        <EvoSignal emphasis="strong">Strong</EvoSignal>
        <EvoSignal emphasis="subtle">Subtle</EvoSignal>
        <EvoSignal emphasis="default">Plain</EvoSignal>
      </>,
    );

    expect(screen.getByText("Strong").element().className).toBe(
      "signal signal--neutral signal--strong",
    );
    expect(screen.getByText("Subtle").element().className).toBe(
      "signal signal--neutral signal--subtle",
    );
    expect(screen.getByText("Plain").element().className).toBe(
      "signal signal--neutral",
    );
  });

  it("combines emphasis with tone and a custom class", async () => {
    const screen = await render(
      <EvoSignal tone="information" emphasis="strong" className="custom">
        Combined
      </EvoSignal>,
    );

    expect(screen.getByText("Combined").element().className).toBe(
      "signal signal--information signal--strong custom",
    );
  });

  it("renders the icon as the first child before the label", async () => {
    const screen = await render(
      <EvoSignal tone="information" icon={<EvoIconPromotion12 />}>
        Label
      </EvoSignal>,
    );
    const signal = screen.getByText("Label").element();
    const icon = signal.firstElementChild;

    expect(icon?.tagName.toLowerCase()).toBe("svg");
    expect(icon?.getAttribute("aria-hidden")).toBe("true");
    expect(icon?.classList.contains("icon--12")).toBe(true);
    expect(signal.firstChild).toBe(icon);
    expect(signal.lastChild?.textContent).toBe("Label");
  });
});
