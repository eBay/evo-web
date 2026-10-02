import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoPageNotice,
  EvoPageNoticeCTA,
  EvoPageNoticeFooter,
  EvoPageNoticeMain,
  EvoPageNoticeTitle,
} from "../index";
import type { PageNoticeStatus } from "../types";

describe("EvoPageNotice SSR", () => {
  it.each<PageNoticeStatus>(["attention", "confirmation", "information"])(
    "renders %s status with the legacy structure",
    (status) => {
      expect(
        renderToString(
          <EvoPageNotice status={status} a11yText={`${status} notice`}>
            <EvoPageNoticeMain>
              <EvoPageNoticeTitle>Order update</EvoPageNoticeTitle>
              <p>Payment received.</p>
            </EvoPageNoticeMain>
          </EvoPageNotice>,
        ),
      ).toMatchSnapshot();
    },
  );

  it("renders an iconless notice", () => {
    expect(
      renderToString(
        <EvoPageNotice icon="none" a11yText="Order update">
          <EvoPageNoticeMain>Payment received.</EvoPageNoticeMain>
        </EvoPageNotice>,
      ),
    ).toMatchSnapshot();
  });

  it("renders CTA and footer regions", () => {
    expect(
      renderToString(
        <EvoPageNotice>
          <EvoPageNoticeMain>Payment received.</EvoPageNoticeMain>
          <EvoPageNoticeCTA>
            <a href="/orders">View orders</a>
          </EvoPageNoticeCTA>
          <EvoPageNoticeFooter>Order details</EvoPageNoticeFooter>
        </EvoPageNotice>,
      ),
    ).toMatchSnapshot();
  });

  it("renders the dismiss button after the main region", () => {
    expect(
      renderToString(
        <EvoPageNotice a11yDismissText="Close notice">
          <EvoPageNoticeMain>Payment received.</EvoPageNoticeMain>
        </EvoPageNotice>,
      ),
    ).toMatchSnapshot();
  });
});
