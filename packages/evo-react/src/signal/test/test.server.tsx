import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoSignal } from "../signal";
import { EvoIconPromotion12 } from "../../icon/icons/promotion-12";
import type { SignalStatus } from "../types";

describe("EvoSignal SSR", () => {
  it("renders the neutral default", () => {
    expect(
      renderToString(<EvoSignal>Price trend is stable</EvoSignal>),
    ).toMatchSnapshot();
  });

  it.each<SignalStatus>(["trustworthy", "recent", "time-sensitive"])(
    "renders the %s status",
    (status) => {
      expect(
        renderToString(
          <EvoSignal status={status} className="listing-signal">
            Listing signal
          </EvoSignal>,
        ),
      ).toMatchSnapshot();
    },
  );

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

  it("tone overrides status", () => {
    expect(
      renderToString(
        <EvoSignal status="recent" tone="warning">
          Tone wins
        </EvoSignal>,
      ),
    ).toBe('<span class="signal signal--warning">Tone wins</span>');
  });
});
