import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, {
    Default,
    WithoutTickIcon,
    WithSeparator,
    WithDisabledItem,
    MixedWithButtons,
    WithBadges,
} from "./index.stories";

const DefaultInstance = composeStory(Default, Meta);
const WithoutTickIconInstance = composeStory(WithoutTickIcon, Meta);
const WithSeparatorInstance = composeStory(WithSeparator, Meta);
const WithDisabledItemInstance = composeStory(WithDisabledItem, Meta);
const MixedWithButtonsInstance = composeStory(MixedWithButtons, Meta);
const WithBadgesInstance = composeStory(WithBadges, Meta);

describe("EbayFakeMenu rendering", () => {
    describe("Default", () => {
        it("should render correctly", () => {
            render(<DefaultInstance />);
            const item = screen.getByText("Item 1 that has very long text");
            expect(item.closest("a")).toHaveAttribute("href", "#");
        });
    });

    describe("WithoutTickIcon", () => {
        it("should render correctly", () => {
            render(<WithoutTickIconInstance />);
            const item = screen.getByText("Item 1 that has very long text");
            expect(item.closest("a")).toHaveAttribute("href", "#");
        });
    });

    describe("WithSeparator", () => {
        it("should render correctly", () => {
            render(<WithSeparatorInstance />);
            const separator = screen.getByRole("separator");
            expect(separator).toBeInTheDocument();
        });
    });

    describe("WithDisabledItem", () => {
        it("should render correctly", () => {
            render(<WithDisabledItemInstance />);
            const disabledItem = screen.getByText("Disabled Item");
            expect(disabledItem.closest("a")).toHaveAttribute("aria-disabled", "true");
        });
    });

    describe("MixedWithButtons", () => {
        it("should render correctly", () => {
            render(<MixedWithButtonsInstance />);
            const button = screen.getByRole("button", { name: "Button" });
            expect(button).toBeInTheDocument();
        });
    });

    describe("WithBadges", () => {
        it("should render correctly", () => {
            render(<WithBadgesInstance />);
            const badge = screen.getByText("item 1");
            expect(badge).toBeInTheDocument();
            const badgeNumber = screen.getByText("5");
            expect(badgeNumber).toBeInTheDocument();
        });
    });
});
