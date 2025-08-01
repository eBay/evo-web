import React from "react";
import { render, screen, within } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";

const {
    SimpleUsage,
    SimpleUsageWithId,
    AttentionMessage,
    ConfirmationMessage,
    DismissibleMessageWithCta,
    MessageWithFooter,
    InformationMessage,
    DismissibleNotice,
} = composeStories(stories);

describe("ebay-page-notice rendering", () => {
    it("renders simple usage story correctly", () => {
        render(<SimpleUsage />);

        const pageNotice = screen.getByRole("region");
        expect(pageNotice).toHaveClass("page-notice");
        expect(pageNotice).toHaveAttribute("aria-labelledby", "general-status");
        expect(pageNotice.querySelector(".page-notice__main")).toHaveTextContent("text message");
    });

    it("renders simple usage with id story correctly", () => {
        render(<SimpleUsageWithId />);

        const pageNotice = screen.getByRole("region");
        expect(pageNotice).toHaveClass("page-notice page-notice--confirmation");
        expect(pageNotice).toHaveAttribute("aria-labelledby", "main-page-notice");

        const header = pageNotice.querySelector(".page-notice__header");
        expect(header).toHaveAttribute("id", "main-page-notice");

        const svg = header.querySelector("svg");
        expect(svg).toMatchSnapshot();

        expect(pageNotice.querySelector(".page-notice__main")).toHaveTextContent("text message");
    });

    it("renders attention message story correctly", () => {
        render(<AttentionMessage />);

        const pageNotice = screen.getByRole("region");
        expect(pageNotice).toHaveClass("page-notice page-notice--attention");
        expect(pageNotice).toHaveAttribute("aria-labelledby", "attention-status");

        const pageNoticeHeader = pageNotice.querySelector(".page-notice__header");
        expect(pageNoticeHeader).toHaveAttribute("id", "attention-status");

        const svg = pageNoticeHeader.querySelector("svg");
        expect(svg).toMatchSnapshot();

        const main: HTMLElement = pageNotice.querySelector(".page-notice__main");
        const header = within(main).getByRole("heading", { level: 2 });
        expect(header).toHaveClass("page-notice__title");
        expect(header).toHaveTextContent("Error.");
        expect(main.querySelector("p")).toHaveTextContent(
            "Please take another look at the following:Card number, Expiration date & Security code.",
        );
    });

    it("renders confirmation message story correctly", () => {
        render(<ConfirmationMessage />);

        const pageNotice = screen.getByRole("region");
        expect(pageNotice).toHaveClass("page-notice page-notice--confirmation");
        expect(pageNotice).toHaveAttribute("aria-labelledby", "confirmation-status");

        const pageNoticeHeader = pageNotice.querySelector(".page-notice__header");
        expect(pageNoticeHeader).toHaveAttribute("id", "confirmation-status");

        const svg = pageNoticeHeader.querySelector("svg");
        expect(svg).toMatchSnapshot();

        const main: HTMLElement = pageNotice.querySelector(".page-notice__main");
        const header = within(main).getByRole("heading", { level: 2 });
        expect(header).toHaveClass("page-notice__title");
        expect(header).toHaveTextContent("Congrats!");
        expect(main.querySelector("p")).toHaveTextContent(
            "You just listed Spam and Eggs From the Cows Perspective (paperback).",
        );
    });

    it("renders information message story correctly", () => {
        render(<InformationMessage />);

        const pageNotice = screen.getByRole("region");
        expect(pageNotice).toHaveClass("page-notice page-notice--information");
        expect(pageNotice).toHaveAttribute("aria-labelledby", "information-status");

        const pageNoticeHeader = pageNotice.querySelector(".page-notice__header");
        expect(pageNoticeHeader).toHaveAttribute("id", "information-status");

        const svg = pageNoticeHeader.querySelector("svg");
        expect(svg).toMatchSnapshot();

        const main: HTMLElement = pageNotice.querySelector(".page-notice__main");
        const header = within(main).getByRole("heading", { level: 2 });
        expect(header).toHaveClass("page-notice__title");
        expect(header).toHaveTextContent("Good news!");
        expect(main.querySelector("p")).toHaveTextContent(
            "You get free shipping on your next pair of shoes! Learn more.",
        );
    });

    it("renders dismissible message with cta story correctly", () => {
        render(<DismissibleMessageWithCta />);

        const pageNotice = screen.getByRole("region");
        expect(pageNotice).toHaveClass("page-notice page-notice--information");
        expect(pageNotice).toHaveAttribute("aria-labelledby", "information-status");

        const pageNoticeHeader = pageNotice.querySelector(".page-notice__header");
        expect(pageNoticeHeader).toHaveAttribute("id", "information-status");

        const svg = pageNoticeHeader.querySelector("svg");
        expect(svg).toMatchSnapshot();

        const main: HTMLElement = pageNotice.querySelector(".page-notice__main");
        const header = within(main).getByRole("heading", { level: 2 });
        expect(header).toHaveClass("page-notice__title");
        expect(header).toHaveTextContent("Your order's in!");
        expect(main.querySelector("p")).toHaveTextContent(
            "We'll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.",
        );

        const cta: HTMLElement = pageNotice.querySelector(".page-notice__cta");
        expect(within(cta).getByRole("link")).toHaveAttribute("href", "https://ebay.com");
        expect(cta).toHaveTextContent("Action");

        const footer: HTMLElement = pageNotice.querySelector(".page-notice__footer");
        const buttonClose = within(footer).getByRole("button", { name: "Close" });
        expect(buttonClose).toHaveClass("fake-link page-notice__dismiss");
        expect(buttonClose.querySelector("svg")).toMatchSnapshot();
    });

    it("renders message with footer story correctly", () => {
        render(<MessageWithFooter />);

        const pageNotice = screen.getByRole("region");
        expect(pageNotice).toHaveClass("page-notice page-notice--confirmation");
        expect(pageNotice).toHaveAttribute("aria-labelledby", "confirmation-status");

        const pageNoticeHeader = pageNotice.querySelector(".page-notice__header");
        expect(pageNoticeHeader).toHaveAttribute("id", "confirmation-status");

        const svg = pageNoticeHeader.querySelector("svg");
        expect(svg).toMatchSnapshot();

        const main: HTMLElement = pageNotice.querySelector(".page-notice__main");
        const header = within(main).getByRole("heading", { level: 2 });
        expect(header).toHaveClass("page-notice__title");
        expect(header).toHaveTextContent("Your order's in!");
        expect(main.querySelector("p")).toHaveTextContent(
            "We'll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.",
        );

        const footer: HTMLElement = pageNotice.querySelector(".page-notice__footer");
        const link = within(footer).getByRole("link", { name: "Action" });
        expect(link).toHaveAttribute("href", "https://ebay.com");
    });

    it("renders dismissible notice story correctly", () => {
        render(<DismissibleNotice />);

        const pageNotice = screen.getByRole("region");
        expect(pageNotice).toHaveClass("page-notice page-notice--information");
        expect(pageNotice).toHaveAttribute("aria-labelledby", "information-status");

        const pageNoticeHeader = pageNotice.querySelector(".page-notice__header");
        expect(pageNoticeHeader).toHaveAttribute("id", "information-status");

        const svg = pageNoticeHeader.querySelector("svg");
        expect(svg).toMatchSnapshot();

        const main: HTMLElement = pageNotice.querySelector(".page-notice__main");
        const header = within(main).getByRole("heading", { level: 2 });
        expect(header).toHaveClass("page-notice__title");
        expect(header).toHaveTextContent("Good news!");
        expect(main.querySelector("p")).toHaveTextContent(
            "You get free shipping on your next pair of shoes! Learn more.",
        );
    });
});
