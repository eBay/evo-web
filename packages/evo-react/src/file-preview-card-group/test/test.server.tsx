import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoFilePreviewCardGroup, EvoFilePreviewCardGroupItem } from "../index";

describe("EvoFilePreviewCardGroup SSR", () => {
  it("renders a native list and its supplied items", () => {
    expect(
      renderToString(
        <EvoFilePreviewCardGroup aria-label="Photos">
          <EvoFilePreviewCardGroupItem
            file={{ name: "photo.jpg", type: "image/jpeg", src: "/photo.jpg" }}
          />
        </EvoFilePreviewCardGroup>,
      ),
    ).toMatchSnapshot();
  });
});
