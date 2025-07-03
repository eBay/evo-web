import React from "react";
import { render } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { Default, CustomMax, Fluid } from "./index.stories";

const DefaultStory = composeStory(Default, Meta);
const CustomMaxStory = composeStory(CustomMax, Meta);
const FluidStory = composeStory(Fluid, Meta);

describe("ebay-progress-bar rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<DefaultStory />);
        const [progressNone, progressHalf, progressFull] = container.querySelectorAll("progress");
        expect(progressNone).toHaveAttribute("value", "0");
        expect(progressNone).toHaveAttribute("max", "100");
        expect(progressNone).toHaveClass("progress-bar");
        expect(progressHalf).toHaveAttribute("value", "50");
        expect(progressHalf).toHaveAttribute("max", "100");
        expect(progressHalf).toHaveClass("progress-bar");
        expect(progressFull).toHaveAttribute("value", "100");
        expect(progressFull).toHaveAttribute("max", "100");
        expect(progressFull).toHaveClass("progress-bar");
    });

    it("renders custom max story correctly", () => {
        const { container } = render(<CustomMaxStory />);
        const [progressHalf, progressFull] = container.querySelectorAll("progress");
        expect(progressHalf).toHaveAttribute("value", "50");
        expect(progressHalf).toHaveAttribute("max", "200");
        expect(progressFull).toHaveAttribute("value", "100");
        expect(progressFull).toHaveAttribute("max", "200");
    });

    it("renders fluid story correctly", () => {
        const { container } = render(<FluidStory />);
        const progress = container.querySelector("progress");
        expect(progress).toHaveAttribute("value", "50");
        expect(progress).toHaveAttribute("max", "100");
        expect(progress).toHaveClass("progress-bar--fluid");
    });
});
