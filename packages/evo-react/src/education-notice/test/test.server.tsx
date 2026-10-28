import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoIconLightningBolt24 } from "../../icon/icons/lightning-bolt-24";
import {
  EvoEducationNotice,
  EvoEducationNoticeFooter,
  EvoEducationNoticeHeader,
  EvoEducationNoticeIcon,
  EvoEducationNoticeMain,
  EvoEducationNoticeTitle,
} from "../index";

describe("EvoEducationNotice SSR", () => {
  it("renders default structure with an explicit icon component", () => {
    expect(
      renderToString(
        <EvoEducationNotice a11yText="Listing guidance">
          <EvoEducationNoticeHeader>
            <EvoEducationNoticeIcon />
            <EvoEducationNoticeTitle>
              Write a clear title
            </EvoEducationNoticeTitle>
          </EvoEducationNoticeHeader>
          <EvoEducationNoticeMain>
            Describe the item condition.
          </EvoEducationNoticeMain>
          <EvoEducationNoticeFooter>More advice</EvoEducationNoticeFooter>
        </EvoEducationNotice>,
      ),
    ).toMatchSnapshot();
  });

  it("renders nothing when dismissed", () => {
    expect(
      renderToString(
        <EvoEducationNotice a11yText="Listing guidance" dismissed>
          <EvoEducationNoticeMain>Describe the item.</EvoEducationNoticeMain>
        </EvoEducationNotice>,
      ),
    ).toBe("");
  });

  it("renders a custom icon supplied through the icon component", () => {
    expect(
      renderToString(
        <EvoEducationNotice a11yText="Listing guidance">
          <EvoEducationNoticeHeader>
            <EvoEducationNoticeIcon
              icon={
                <EvoIconLightningBolt24
                  a11yText="Listing insight"
                  a11yVariant="label"
                  prominent
                />
              }
            />
            <EvoEducationNoticeTitle>
              Improve your listing
            </EvoEducationNoticeTitle>
          </EvoEducationNoticeHeader>
        </EvoEducationNotice>,
      ),
    ).toMatchSnapshot();
  });

  it("renders no icon when the icon component is omitted", () => {
    expect(
      renderToString(
        <EvoEducationNotice
          a11yText="Seller notice"
          a11yDismissText="Dismiss guidance"
        >
          <EvoEducationNoticeHeader>
            <EvoEducationNoticeTitle>Seller update</EvoEducationNoticeTitle>
          </EvoEducationNoticeHeader>
        </EvoEducationNotice>,
      ),
    ).toMatchSnapshot();
  });
});
