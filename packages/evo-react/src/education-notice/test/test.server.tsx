import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoIconLightningBolt24 } from "../../icon/icons/lightning-bolt-24";
import {
  EvoEducationNotice,
  EvoEducationNoticeCTA,
  EvoEducationNoticeFooter,
  EvoEducationNoticeHeader,
  EvoEducationNoticeMain,
  EvoEducationNoticeTitle,
} from "../index";
import type { EducationNoticeStatus } from "../types";

describe("EvoEducationNotice SSR", () => {
  it("renders default structure", () => {
    expect(
      renderToString(
        <EvoEducationNotice>
          <EvoEducationNoticeHeader>
            <EvoEducationNoticeTitle>Listing guidance</EvoEducationNoticeTitle>
          </EvoEducationNoticeHeader>
          <EvoEducationNoticeMain>
            Describe the item condition.
          </EvoEducationNoticeMain>
          <EvoEducationNoticeFooter>More advice</EvoEducationNoticeFooter>
        </EvoEducationNotice>,
      ),
    ).toMatchSnapshot();
  });

  it.each<EducationNoticeStatus>(["attention", "confirmation", "information"])(
    "renders %s status",
    (status) => {
      expect(
        renderToString(
          <EvoEducationNotice status={status} variant="prominent">
            <EvoEducationNoticeHeader>
              <EvoEducationNoticeTitle>Seller update</EvoEducationNoticeTitle>
            </EvoEducationNoticeHeader>
            <EvoEducationNoticeMain>Review the update.</EvoEducationNoticeMain>
          </EvoEducationNotice>,
        ),
      ).toMatchSnapshot();
    },
  );

  it("renders custom icon and CTA", () => {
    expect(
      renderToString(
        <EvoEducationNotice
          educationIcon={
            <EvoIconLightningBolt24
              a11yText="Listing insight"
              a11yVariant="label"
            />
          }
        >
          <EvoEducationNoticeHeader>
            <EvoEducationNoticeTitle>
              Improve your listing
            </EvoEducationNoticeTitle>
          </EvoEducationNoticeHeader>
          <EvoEducationNoticeCTA>
            <a href="/seller-center">Read listing tips</a>
          </EvoEducationNoticeCTA>
        </EvoEducationNotice>,
      ),
    ).toMatchSnapshot();
  });

  it("renders iconless notice with a dismiss button", () => {
    expect(
      renderToString(
        <EvoEducationNotice icon="none" a11yDismissText="Dismiss guidance">
          <EvoEducationNoticeHeader>
            <EvoEducationNoticeTitle>Seller update</EvoEducationNoticeTitle>
          </EvoEducationNoticeHeader>
        </EvoEducationNotice>,
      ),
    ).toMatchSnapshot();
  });
});
