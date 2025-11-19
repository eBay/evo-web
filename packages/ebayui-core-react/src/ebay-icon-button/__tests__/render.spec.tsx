import React from "react";
import { render, getAllByRole } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { Default, WithBadges, Transparent, WithPriority } from "./index.stories";

const DefaultStory = composeStory(Default, Meta);
const WithBadgesStory = composeStory(WithBadges, Meta);
const TransparentStory = composeStory(Transparent, Meta);
const WithPriorityStory = composeStory(WithPriority, Meta);

describe("EbayIconButton rendering", () => {
    describe("Default", () => {
        it("should render correctly", () => {
            const { container } = render(<DefaultStory />);
            const buttons = getAllByRole(container, "button");
            const firstButton = buttons[0] as Element;

            expect(firstButton).toHaveClass("icon-btn");
            expect(firstButton).toHaveAttribute("type", "button");
            const svg = firstButton.querySelector("svg");
            expect(svg).toHaveClass("icon icon--20");
            expect(svg).toHaveAttribute("aria-hidden", "true");
            expect(svg).toHaveAttribute("focusable", "false");
        });
    });

    describe("WithBadges", () => {
        it("should render correctly", () => {
            const { container } = render(<WithBadgesStory />);
            const buttons = getAllByRole(container, "button");
            const firstButton = buttons[0] as Element;

            expect(firstButton).toHaveClass("icon-btn");
            expect(firstButton).toHaveAttribute("type", "button");

            const svg = firstButton.querySelector("svg");
            expect(svg).toHaveClass("icon icon--20");
            expect(svg).toHaveAttribute("aria-hidden", "true");
            expect(svg).toHaveAttribute("focusable", "false");

            const badge = firstButton.querySelector(".badge");
            expect(badge).not.toBeNull();
            expect(badge.textContent).toBe("1");
        });
    });

    describe("Transparent", () => {
        it("should render correctly", () => {
            const { container } = render(<TransparentStory />);
            const buttons = getAllByRole(container, "button");
            const firstButton = buttons[0] as Element;

            expect(firstButton).toHaveClass("icon-btn icon-btn--transparent");
            expect(firstButton).toHaveAttribute("type", "button");

            const svg = firstButton.querySelector("svg");
            expect(svg).toHaveClass("icon icon--20");
            expect(svg).toHaveAttribute("aria-hidden", "true");
            expect(svg).toHaveAttribute("focusable", "false");
        });
    });

    describe("With Priority", () => {
        it("should render correctly", () => {
            const { container } = render(<WithPriorityStory />);
            const buttons = getAllByRole(container, "button");

            expect(buttons[0]).toHaveClass("icon-btn");
            expect(buttons[1]).toHaveClass("icon-btn icon-btn--primary");
            expect(buttons[2]).toHaveClass("icon-btn icon-btn--secondary");
            expect(buttons[3]).toHaveClass("icon-btn icon-btn--tertiary");
        });
    });
});
