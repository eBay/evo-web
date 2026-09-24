import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoSectionTitle,
  EvoSectionTitleCta,
  EvoSectionTitleContent,
  EvoSectionTitleHeading,
  EvoSectionTitleInfo,
  EvoSectionTitleOverflow,
  EvoSectionTitleSubtitle,
  EvoSectionTitleTitle,
  EvoSectionTitleTitleContainer,
} from "../index";

describe("EvoSectionTitle SSR", () => {
  it("keeps the former component names as aliases", () => {
    expect(EvoSectionTitleTitle).toBe(EvoSectionTitleHeading);
    expect(EvoSectionTitleTitleContainer).toBe(EvoSectionTitleContent);
  });

  it("renders the basic heading structure", () => {
    expect(
      renderToString(
        <EvoSectionTitle>
          <EvoSectionTitleContent>
            <EvoSectionTitleHeading>Recently viewed</EvoSectionTitleHeading>
          </EvoSectionTitleContent>
        </EvoSectionTitle>,
      ),
    ).toMatchSnapshot();
  });

  it("renders subtitle, action, info, and overflow in consumer order", () => {
    expect(
      renderToString(
        <EvoSectionTitle dir="rtl">
          <EvoSectionTitleContent>
            <EvoSectionTitleHeading as="h3">
              Saved searches
            </EvoSectionTitleHeading>
            <EvoSectionTitleSubtitle>New listings</EvoSectionTitleSubtitle>
          </EvoSectionTitleContent>
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
