import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { DefaultTabs, PreSelectedTab, TabMatchesCurrentUrlFalse } from "./index.stories";

const DefaultTabsInstance = composeStory(DefaultTabs, Meta);
const PreSelectedTabInstance = composeStory(PreSelectedTab, Meta);
const TabMatchesCurrentUrlFalseInstance = composeStory(TabMatchesCurrentUrlFalse, Meta);

describe("ebay-fake-tabs rendering", () => {
    it("DefaultTabs instance", () => {
        render(<DefaultTabsInstance />);
        const tabs = screen.getAllByRole("listitem");
        expect(tabs[0]).toHaveTextContent("eBay.com");
        expect(tabs[0].querySelector("a")).toHaveAttribute("href", "http://ebay.com");
        expect(screen.getByText("eBay.com Content")).toBeInTheDocument();
    });

    it("PreSelectedTab instance", () => {
        render(<PreSelectedTabInstance />);
        const tabs = screen.getAllByRole("listitem");
        expect(tabs[1]).toHaveTextContent("eBay.de");
        expect(tabs[1].querySelector("a")).toHaveAttribute("href", "http://ebay.de");
        expect(screen.getByText("eBay.de Content")).toBeInTheDocument();
    });

    it("TabMatchesCurrentUrlFalse instance", () => {
        render(<TabMatchesCurrentUrlFalseInstance />);
        const tabs = screen.getAllByRole("listitem");
        expect(tabs[2]).toHaveTextContent("eBay.co.uk");
        expect(tabs[2].querySelector("a")).toHaveAttribute("href", "http://ebay.co.uk");
        expect(tabs[2].querySelector("a")).toHaveAttribute("aria-current", "true");
        expect(screen.getByText("eBay.co.uk Content")).toBeInTheDocument();
    });
});
