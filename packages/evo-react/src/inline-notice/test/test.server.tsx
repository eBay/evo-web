import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoInlineNotice, EvoInlineNoticeMain } from "../index";

describe("EvoInlineNotice SSR", () => {
  it("renders an attention notice by default", () => {
    expect(
      renderToString(
        <EvoInlineNotice>
          <EvoInlineNoticeMain>Update your payment method.</EvoInlineNoticeMain>
        </EvoInlineNotice>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a labeled information notice", () => {
    expect(
      renderToString(
        <EvoInlineNotice status="information" a11yText="Shipping information">
          <EvoInlineNoticeMain>
            Delivery dates have changed.
          </EvoInlineNoticeMain>
        </EvoInlineNotice>,
      ),
    ).toMatchSnapshot();
  });

  it("renders nothing while hidden", () => {
    expect(
      renderToString(
        <EvoInlineNotice hidden>
          <EvoInlineNoticeMain>Hidden update</EvoInlineNoticeMain>
        </EvoInlineNotice>,
      ),
    ).toMatchSnapshot();
  });
});
