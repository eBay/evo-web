import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoSectionNotice,
  EvoSectionNoticeCTA,
  EvoSectionNoticeFooter,
  EvoSectionNoticeMain,
  EvoSectionNoticeTitle,
} from "../index";
import type { SectionNoticeStatus } from "../types";

describe("EvoSectionNotice SSR", () => {
  it.each<SectionNoticeStatus>(["attention", "confirmation", "information"])(
    "renders %s status with the section structure",
    (status) => {
      expect(
        renderToString(
          <EvoSectionNotice status={status} a11yText={`${status} notice`}>
            <EvoSectionNoticeMain>
              <EvoSectionNoticeTitle>Order update</EvoSectionNoticeTitle>
              Payment received.
            </EvoSectionNoticeMain>
          </EvoSectionNotice>,
        ),
      ).toMatchSnapshot();
    },
  );

  it("renders an iconless notice", () => {
    expect(
      renderToString(
        <EvoSectionNotice a11yText="Order update">
          <EvoSectionNoticeMain>Payment received.</EvoSectionNoticeMain>
        </EvoSectionNotice>,
      ),
    ).toMatchSnapshot();
  });

  it("renders CTA and footer regions", () => {
    expect(
      renderToString(
        <EvoSectionNotice>
          <EvoSectionNoticeMain>Payment received.</EvoSectionNoticeMain>
          <EvoSectionNoticeCTA>
            <a href="/orders">View orders</a>
          </EvoSectionNoticeCTA>
          <EvoSectionNoticeFooter>Order details</EvoSectionNoticeFooter>
        </EvoSectionNotice>,
      ),
    ).toMatchSnapshot();
  });

  it("renders the dismiss button after the main region", () => {
    expect(
      renderToString(
        <EvoSectionNotice a11yDismissText="Close notice">
          <EvoSectionNoticeMain>Payment received.</EvoSectionNoticeMain>
        </EvoSectionNotice>,
      ),
    ).toMatchSnapshot();
  });
});
