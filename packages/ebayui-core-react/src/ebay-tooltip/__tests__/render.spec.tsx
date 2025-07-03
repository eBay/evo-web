import React from "react";
import { screen, render } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, {
    DefaultTooltip,
    AnchorHost,
    PointersWithAllDirections,
    PointerWithCustomLocation,
    NoHover,
} from "./index.stories";

const DefaultTooltipStory = composeStory(DefaultTooltip, Meta);
const AnchorHostStory = composeStory(AnchorHost, Meta);
const PointerDirectionStory = composeStory(PointersWithAllDirections, Meta);
const PointerWithCustomLocationStory = composeStory(PointerWithCustomLocation, Meta);
const NoHoverStory = composeStory(NoHover, Meta);

describe("ebay-tooltip rendering", () => {
    describe("DefaultTooltip story", () => {
        beforeEach(() => {
            render(<DefaultTooltipStory />);
        });

        it("renders tooltip correctly", () => {
            const tooltips = screen.getAllByRole("tooltip");
            const tooltip = tooltips[0];
            expect(tooltip).toHaveClass("tooltip__overlay");
            expect(tooltip).toHaveTextContent("Content");
            const button = screen.getByRole("button");
            expect(button).toHaveClass("btn tooltip__host btn--secondary");
        });
    });

    describe("AnchorHost story", () => {
        beforeEach(() => {
            render(<AnchorHostStory />);
        });

        it("renders tooltip correctly", () => {
            const tooltips = screen.getAllByRole("tooltip");
            const tooltip = tooltips[0];
            expect(tooltip).toHaveClass("tooltip__overlay");
            expect(tooltip).toHaveTextContent("Use Access Key 'S' to display settings.");
        });
    });

    describe("PointerDirection story", () => {
        beforeEach(() => {
            render(<PointerDirectionStory />);
        });

        it("renders tooltip correctly", () => {
            const tooltips = screen.getAllByRole("tooltip");
            const tooltip = tooltips[0];
            expect(tooltip).toHaveClass("tooltip__overlay");
            expect(tooltip).toHaveTextContent("Use Access Key 'S' to display settings.");
        });
    });

    describe("PointerWithCustomLocation story", () => {
        beforeEach(() => {
            render(<PointerWithCustomLocationStory />);
        });

        it("renders tooltip correctly", () => {
            const tooltips = screen.getAllByRole("tooltip");
            const tooltip = tooltips[0];
            expect(tooltip).toHaveClass("tooltip__overlay");
            expect(tooltip).toHaveTextContent("Use Access Key 'S' to display settings.");
        });
    });

    describe("NoHover story", () => {
        beforeEach(() => {
            render(<NoHoverStory />);
        });

        it("renders tooltip correctly", () => {
            const tooltips = screen.getAllByRole("tooltip");
            const tooltip = tooltips[0];
            expect(tooltip).toHaveClass("tooltip__overlay");
            expect(tooltip).toHaveTextContent("Use Access Key 'S' to display settings.");
        });
    });
});
