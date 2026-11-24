import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoSignal } from "../signal";
import { EvoIconPromotion12 } from "../../icon/icons/promotion-12";
import type { SignalTone } from "../types";

describe("EvoSignal SSR", () => {
  it("renders the neutral default", () => {
    expect(
      renderToString(<EvoSignal>Price trend is stable</EvoSignal>),
    ).toMatchSnapshot();
  });

  it.each<SignalTone>([
    "neutral",
    "information",
    "positive",
    "warning",
    "attention",
  ])("renders the %s tone", (tone) => {
    expect(
      renderToString(
        <EvoSignal tone={tone} className="listing-signal">
          Listing signal
        </EvoSignal>,
      ),
    ).toMatchSnapshot();
  });

  it("renders tone, emphasis and icon", () => {
    const html = renderToString(
      <EvoSignal
        tone="positive"
        emphasis="strong"
        icon={<EvoIconPromotion12 />}
      >
        Listed today
      </EvoSignal>,
    );

    expect(html).toMatch(
      /^<span class="signal signal--positive signal--strong"><svg/,
    );
    expect(html.indexOf("<svg")).toBeLessThan(html.indexOf("Listed today"));
  });
});
