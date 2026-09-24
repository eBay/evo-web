import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoSectionTitle,
  EvoSectionTitleCta,
  EvoSectionTitleInfo,
  EvoSectionTitleOverflow,
  EvoSectionTitleSubtitle,
  EvoSectionTitleTitle,
  EvoSectionTitleTitleContainer,
} from "../index";

describe("evo-section-title", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("preserves the title wrapper, heading, subtitle, and native attributes", async () => {
    const sectionRef = createRef<HTMLDivElement>();
    const headingRef = createRef<HTMLHeadingElement>();
    const screen = await render(
      <EvoSectionTitle
        ref={sectionRef}
        data-testid="saved-searches"
        className="custom-section"
        dir="rtl"
      >
        <EvoSectionTitleTitleContainer data-testid="title-wrapper">
          <EvoSectionTitleTitle as="h3" ref={headingRef} id="search-heading">
            Saved searches
          </EvoSectionTitleTitle>
          <EvoSectionTitleSubtitle>New listings</EvoSectionTitleSubtitle>
        </EvoSectionTitleTitleContainer>
      </EvoSectionTitle>,
    );

    const heading = screen.getByRole("heading", {
      level: 3,
      name: "Saved searches",
    });
    await expect.element(heading).toHaveClass("section-title__title");
    await expect
      .element(screen.getByText("New listings"))
      .toHaveClass("section-title__subtitle");
    await expect
      .element(screen.getByTestId("title-wrapper"))
      .toHaveClass("section-title__title-container");
    await expect
      .element(screen.getByTestId("saved-searches"))
      .toHaveClass("section-title", "custom-section");
    await expect
      .element(screen.getByTestId("saved-searches"))
      .toHaveAttribute("dir", "rtl");
    expect(headingRef.current).toBe(heading.element());
    expect(sectionRef.current).toBe(
      screen.getByTestId("saved-searches").element(),
    );
  });

  it("keeps the action link keyboard accessible", async () => {
    const onClick = vi.fn((event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
    });
    const screen = await render(
      <EvoSectionTitle>
        <EvoSectionTitleTitleContainer>
          <EvoSectionTitleTitle>Recently viewed</EvoSectionTitleTitle>
        </EvoSectionTitleTitleContainer>
        <EvoSectionTitleCta href="/recent" onClick={onClick}>
          See all recently viewed items
        </EvoSectionTitleCta>
      </EvoSectionTitle>,
    );

    const link = screen.getByRole("link", {
      name: "See all recently viewed items",
    });
    await expect.element(link).toHaveAttribute("href", "/recent");
    await expect.element(link).toHaveClass("section-title__cta");
    await user.tab();
    await expect.element(link).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("keeps info and overflow in their Skin wrappers", async () => {
    const screen = await render(
      <EvoSectionTitle>
        <EvoSectionTitleTitleContainer>
          <EvoSectionTitleTitle>Seller feedback</EvoSectionTitleTitle>
        </EvoSectionTitleTitleContainer>
        <EvoSectionTitleInfo>
          <span>Updated today</span>
        </EvoSectionTitleInfo>
        <EvoSectionTitleOverflow>
          <button type="button" aria-label="More seller feedback options" />
        </EvoSectionTitleOverflow>
      </EvoSectionTitle>,
    );

    expect(
      screen
        .getByText("Updated today")
        .element()
        .closest(".section-title__info"),
    ).not.toBeNull();
    expect(
      screen
        .getByRole("button", { name: "More seller feedback options" })
        .element()
        .closest(".section-title__overflow"),
    ).not.toBeNull();
  });
});
