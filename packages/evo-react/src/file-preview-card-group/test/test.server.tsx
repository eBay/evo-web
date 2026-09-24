import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoFilePreviewCardGroup } from "../index";

const cards = Array.from({ length: 17 }, (_, index) => ({
  file: { name: `file-${index + 1}.csv`, type: "text/csv" },
}));

describe("EvoFilePreviewCardGroup SSR", () => {
  it("renders the first 15 cards and a see-more preview", () => {
    expect(
      renderToString(
        <EvoFilePreviewCardGroup cards={cards} a11ySeeMoreText="More files" />,
      ),
    ).toMatchSnapshot();
  });

  it("renders a controlled subset and its remaining count", () => {
    expect(
      renderToString(
        <EvoFilePreviewCardGroup cards={cards} visibleCardCount={2} />,
      ),
    ).toMatchSnapshot();
  });
});
