import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { DefaultSmallLarge } from "./index.stories";

const DefaultStory = composeStory(DefaultSmallLarge, Meta);

describe("ebay-progress-spinner rendering", () => {
    it("renders", () => {
        render(<DefaultStory />);
        const [spinner, smallSpinner, largeSpinner] = screen.getAllByRole("img");
        expect(spinner).toHaveAttribute("aria-label", "Busy");
        expect(spinner).toHaveClass("progress-spinner");
        expect(smallSpinner).toHaveAttribute("aria-label", "Stand by...");
        expect(smallSpinner).toHaveClass("progress-spinner progress-spinner--small");
        expect(largeSpinner).toHaveAttribute("aria-label", "Stand by...");
        expect(largeSpinner).toHaveClass("progress-spinner progress-spinner--large");
    });
});
