import React from "react";
import { render, screen, within } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";

const { BasicLinks, ArrowsDisabled, Buttons, Fluid } = composeStories(stories);

describe("ebay-pagination rendering", () => {
    it("renders basic links story correctly", () => {
        const { container } = render(<BasicLinks />);

        const pagination = screen.getByRole("navigation");
        expect(pagination).toHaveClass("pagination");
        expect(pagination).toHaveAttribute("aria-labelledby", "ebay-pagination-pagination-heading");

        const status = screen.getByRole("status");
        expect(status).toHaveAttribute("aria-live", "polite");

        const h2 = within(status).getByRole("heading", { level: 2 });
        expect(h2).toHaveAttribute("id", "ebay-pagination-pagination-heading");
        expect(h2).toHaveTextContent("Results Pagination - Page 1");

        const linkPrev = container.querySelector(".pagination__previous");
        expect(linkPrev).toHaveClass("icon-link");
        expect(linkPrev).toHaveStyle({ minWidth: "40px" });
        expect(linkPrev).toHaveAttribute("aria-label", "Previous page");
        expect(linkPrev).toHaveAttribute("aria-disabled", "true");
        expect(linkPrev.querySelector("svg")).toMatchSnapshot();

        const linkNext = (container as Element).querySelector(".pagination__next");
        expect(linkNext).toHaveClass("icon-link");
        expect(linkNext).toHaveStyle({ minWidth: "40px" });
        expect(linkNext).toHaveAttribute("aria-label", "Next page");
        expect(linkNext).not.toHaveAttribute("aria-disabled");
        expect(linkNext).toHaveAttribute(
            "href",
            "https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=10",
        );
        expect(linkNext.querySelector("svg")).toMatchSnapshot();

        const items = screen.getByRole("list");
        expect(items).toHaveClass("pagination__items");

        const pages = items.querySelectorAll("li a");
        expect(pages).toHaveLength(9);

        expect(pages[0]).toHaveClass("pagination__item");
        expect(pages[0]).toHaveAttribute("aria-current", "page");
        expect(pages[0]).toHaveAttribute(
            "href",
            "https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=1",
        );
        expect(pages[0]).toHaveTextContent("1");

        expect(pages[1]).toHaveClass("pagination__item");
        expect(pages[1]).not.toHaveAttribute("aria-current");
        expect(pages[1]).toHaveAttribute(
            "href",
            "https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=2",
        );
        expect(pages[1]).toHaveTextContent("2");

        // skip pages 2-8

        expect(pages[8]).toHaveClass("pagination__item");
        expect(pages[8]).not.toHaveAttribute("aria-current");
        expect(pages[8]).toHaveAttribute(
            "href",
            "https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=9",
        );
        expect(pages[8]).toHaveTextContent("9");
    });

    it("renders arrows disabled story correctly", () => {
        const { container } = render(<ArrowsDisabled />);

        const linkPrev = container.querySelector(".pagination__previous");
        expect(linkPrev).toHaveAttribute("aria-label", "Previous page");
        expect(linkPrev).toHaveAttribute("aria-disabled", "true");

        const linkNext = container.querySelector(".pagination__next");
        expect(linkNext).toHaveAttribute("aria-label", "Next page");
        expect(linkNext).toHaveAttribute("aria-disabled", "true");
    });

    it("renders buttons story correctly", () => {
        const { container } = render(<Buttons />);

        const pagination = screen.getByRole("navigation");
        expect(pagination).toHaveClass("pagination");
        expect(pagination).toHaveAttribute("aria-labelledby", "ebay-pagination-pagination-heading");

        const status = screen.getByRole("status");
        expect(status).toHaveAttribute("aria-live", "polite");

        const h2 = within(status).getByRole("heading", { level: 2 });
        expect(h2).toHaveAttribute("id", "ebay-pagination-pagination-heading");
        expect(h2).toHaveTextContent("Pagination - Current Page");

        const linkPrev = container.querySelector(".pagination__previous");
        expect(linkPrev).toHaveClass("icon-btn");
        expect(linkPrev).toHaveStyle({ minWidth: "40px" });
        expect(linkPrev).toHaveAttribute("aria-label", "Previous page");
        expect(linkPrev).not.toHaveAttribute("aria-disabled");
        expect(linkPrev.querySelector("svg")).toMatchSnapshot();

        const linkNext = container.querySelector(".pagination__next");
        expect(linkNext).toHaveClass("icon-btn");
        expect(linkNext).toHaveStyle({ minWidth: "40px" });
        expect(linkNext).toHaveAttribute("aria-label", "Next page");
        expect(linkNext).not.toHaveAttribute("aria-disabled");
        expect(linkNext.querySelector("svg")).toMatchSnapshot();

        const items = screen.getByRole("list");
        expect(items).toHaveClass("pagination__items");

        const pages = items.querySelectorAll("li button");
        expect(pages).toHaveLength(9);

        expect(pages[0]).toHaveClass("pagination__item");
        expect(pages[0]).not.toHaveAttribute("aria-current");
        expect(pages[0]).toHaveTextContent("1");

        expect(pages[1]).toHaveClass("pagination__item");
        expect(pages[1]).toHaveAttribute("aria-current", "page");
        expect(pages[1]).toHaveTextContent("2");

        // skip pages 2-8

        expect(pages[8]).toHaveClass("pagination__item");
        expect(pages[8]).not.toHaveAttribute("aria-current");
        expect(pages[8]).toHaveTextContent("9");
    });

    it("renders fluid story correctly", () => {
        render(<Fluid />);

        const pagination = screen.getAllByRole("navigation")[0];
        expect(pagination).toHaveClass("pagination pagination--fluid");
    });
});
