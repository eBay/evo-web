import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoIconDelete16 } from "../../icon/icons/delete-16";
import {
  EvoFilePreviewCard,
  EvoFilePreviewCardAction,
  EvoFilePreviewCardCancelAction,
  EvoPreviewCardSeeMore,
} from "../index";

describe("EvoFilePreviewCard SSR", () => {
  it("renders a linked image and delete action", () => {
    expect(
      renderToString(
        <EvoFilePreviewCard
          file={{ name: "photo.jpg", type: "image/jpeg", src: "/photo.jpg" }}
          href="/photo"
          a11yExternalLinkText="opens in a new tab"
          footerTitle="photo.jpg"
          footerSubtitle="JPEG image"
        >
          <EvoFilePreviewCardAction a11yText="Delete photo">
            <EvoIconDelete16 />
          </EvoFilePreviewCardAction>
        </EvoFilePreviewCard>,
      ),
    ).toMatchSnapshot();
  });

  it("renders an uploading document with a cancel action", () => {
    expect(
      renderToString(
        <EvoFilePreviewCard
          file={{ name: "report.csv", type: "text/csv" }}
          status="uploading"
          a11yUploadingText="Uploading report"
        >
          <EvoFilePreviewCardCancelAction a11yText="Cancel" />
        </EvoFilePreviewCard>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a see-more overlay and faded asset", () => {
    expect(
      renderToString(
        <EvoFilePreviewCard
          file={{ name: "photo.jpg", type: "image/jpeg", src: "/photo.jpg" }}
        >
          <EvoPreviewCardSeeMore count={8} a11yText="See 8 more photos" />
        </EvoFilePreviewCard>,
      ),
    ).toMatchSnapshot();
  });
});
