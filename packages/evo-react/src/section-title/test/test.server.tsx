import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoSectionTitle,
  EvoSectionTitleCta,
  EvoSectionTitleInfo,
  EvoSectionTitleOverflow,
  EvoSectionTitleSubtitle,
  EvoSectionTitleTitle,
  EvoSectionTitleTitleContainer,
} from "../index";

describe("EvoSectionTitle SSR", () => {
  it("renders the basic heading structure", () => {
    expect(
      renderToString(
        <EvoSectionTitle>
          <EvoSectionTitleTitleContainer>
            <EvoSectionTitleTitle>Recently viewed</EvoSectionTitleTitle>
          </EvoSectionTitleTitleContainer>
        </EvoSectionTitle>,
      ),
    ).toMatchSnapshot();
  });

  it("renders subtitle, action, info, and overflow in consumer order", () => {
    expect(
      renderToString(
        <EvoSectionTitle dir="rtl">
          <EvoSectionTitleTitleContainer>
            <EvoSectionTitleTitle as="h3">Saved searches</EvoSectionTitleTitle>
            <EvoSectionTitleSubtitle>New listings</EvoSectionTitleSubtitle>
          </EvoSectionTitleTitleContainer>
          <EvoSectionTitleInfo>Updated today</EvoSectionTitleInfo>
          <EvoSectionTitleCta href="/saved-searches">
            See all saved searches
          </EvoSectionTitleCta>
          <EvoSectionTitleOverflow>More actions</EvoSectionTitleOverflow>
        </EvoSectionTitle>,
      ),
    ).toMatchSnapshot();
  });
});
