import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { Default, Large, Fluid, Truncated } from "./index.stories";

const DefaultStory = composeStory(Default, Meta);
const LargeStory = composeStory(Large, Meta);
const FluidStory = composeStory(Fluid, Meta);
const TruncatedStory = composeStory(Truncated, Meta);

describe("<EbayCtaButton>", () => {
    describe("Default story", () => {
        it("renders correctly", () => {
            render(<DefaultStory />);
            const button = screen.getByRole("link");
            expect(button).toHaveClass("cta-btn");
            expect(button).toHaveAttribute("href", "https://ebay.com");
            expect(button.textContent).toContain("Take Action Now!");
        });
    });

    describe("Large story", () => {
        it("renders correctly", () => {
            render(<LargeStory />);
            const button = screen.getByRole("link");
            expect(button).toHaveClass("cta-btn cta-btn--large");
            expect(button.textContent).toContain("Large Button");
        });
    });

    describe("Fluid story", () => {
        it("renders correctly", () => {
            render(<FluidStory />);
            const [button] = screen.getAllByRole("link");
            expect(button).toHaveClass("cta-btn cta-btn--fluid");
            expect(button.textContent).toContain("100%");
        });
    });

    describe("Truncated story", () => {
        it("renders correctly", () => {
            render(<TruncatedStory />);
            const [button] = screen.getAllByRole("link");
            expect(button).toHaveClass("cta-btn cta-btn--truncated");
            expect(button.textContent).toContain("Wide Long Call To Action!");
        });
    });
});
