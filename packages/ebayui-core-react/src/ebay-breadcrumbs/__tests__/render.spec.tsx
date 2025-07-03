import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { Default, AllLinks, CustomProps, AllButtons } from "./index.stories";

const DefaultInstance = composeStory(Default, Meta);
const AllLinksInstance = composeStory(AllLinks, Meta);
const CustomPropsInstance = composeStory(CustomProps, Meta);
const AllButtonsInstance = composeStory(AllButtons, Meta);

describe("EbayBreadcrumbs rendering", () => {
    it("Default instance", () => {
        render(<DefaultInstance />);

        const h2 = screen.getByRole("heading", { level: 2 });
        expect(h2.textContent).toBe("Page navigation");

        const listItems = screen.getAllByRole("listitem");
        expect(listItems.length).toBe(4);

        const links = screen.getAllByRole("link");
        expect(links.length).toBe(3);

        expect(links[0].textContent).toBe("eBay");
        expect(links[0]).toHaveAttribute("href", "https://www.ebay.com/");
    });

    it("AllLinks instance", () => {
        render(<AllLinksInstance />);
        const h3 = screen.getByRole("heading", { level: 3 });
        expect(h3.textContent).toBe("Custom page navigation");

        const listItems = screen.getAllByRole("listitem");
        expect(listItems.length).toBe(4);

        const links = screen.getAllByRole("link");
        expect(links.length).toBe(4);

        expect(links[0].textContent).toBe("eBay");
        expect(links[0]).toHaveAttribute("href", "https://www.ebay.com/");
    });

    it("CustomProps instance", () => {
        render(<CustomPropsInstance />);
        const links = screen.getAllByRole("link");

        expect(links[0]).toHaveAttribute("_sp", "p2345.m909.l34");
        expect(links[0]).toHaveAttribute("data-track", "123");
        expect(links[0]).toHaveAttribute("navsrc", "{}");
    });

    it("AllButtons instance", () => {
        render(<AllButtonsInstance />);
        const buttons = screen.getAllByRole("button");

        expect(buttons.length).toBe(4);
        expect(buttons[0].textContent).toBe("eBay");
    });
});
