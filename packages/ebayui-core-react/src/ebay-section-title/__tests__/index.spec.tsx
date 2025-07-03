import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { Default, WithSubtitle, WithInfo, WithCta } from "./index.stories";

const DefaultStory = composeStory(Default, Meta);
const WithSubtitleStory = composeStory(WithSubtitle, Meta);
const WithInfoStory = composeStory(WithInfo, Meta);
const WithCtaStory = composeStory(WithCta, Meta);

describe("ebay-section-title rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<DefaultStory />);

        const sectionTitle = container.querySelector(".section-title");
        expect(sectionTitle).toBeInTheDocument();
        const sectionTitleContainer = container.querySelector(".section-title__title-container");
        expect(sectionTitleContainer).toBeInTheDocument();
        const header = container.querySelector("h2");
        expect(header).toHaveClass("section-title__title");
        expect(header.textContent).toEqual("Default Section Title");
    });

    it("renders with subtitle story correctly", () => {
        const { container } = render(<WithSubtitleStory />);

        const header = container.querySelector("h2");
        expect(header).toHaveClass("section-title__title");
        expect(header.textContent).toEqual("Today’s Deals – All With Free Shipping");
        const subtitle = container.querySelector(".section-title__subtitle");
        expect(subtitle).toHaveClass("section-title__subtitle");
        expect(subtitle.textContent).toEqual("Plus, guaranteed best prices.");
    });

    it("renders with info story correctly", () => {
        const { container } = render(<WithInfoStory />);

        const header = container.querySelector("h2");
        expect(header).toHaveClass("section-title__title");
        expect(header.textContent).toEqual("Today’s Deals – All With Free Shipping"); // Adjusted expected value
        const subtitle = container.querySelector(".section-title__subtitle");
        expect(subtitle).toHaveClass("section-title__subtitle");
        expect(subtitle.textContent).toEqual("Plus, guaranteed best prices.");
        const info = container.querySelector(".section-title__info");
        expect(info.querySelector(".infotip")).toBeInTheDocument();
    });

    it("renders with cta story correctly", () => {
        const { container } = render(<WithCtaStory />);

        const header = container.querySelector("h2");
        expect(header).toHaveClass("section-title__title");
        expect(header.textContent).toEqual("Today’s Deals – All With Free Shipping"); // Adjusted expected value
        const subtitle = container.querySelector(".section-title__subtitle");
        expect(subtitle).toHaveClass("section-title__subtitle");
        expect(subtitle.textContent).toEqual("Plus, guaranteed best prices.");
        const cta = screen.getByRole("link");
        expect(cta).toHaveAttribute("href", "https://www.ebay.com");
        expect(cta).toHaveClass("section-title__cta");
        expect(cta.textContent).toEqual("See All");
    });
});
