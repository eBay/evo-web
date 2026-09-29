import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoSignal } from "../signal";
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
});
