import React from "react";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";

const { AllIcons, CustomColor, NonDecorative } = composeStories(stories);

jest.mock("../../common/random-id");

describe("ebay-icon rendering", () => {
    describe("AllIcons story", () => {
        it("renders icons correctly", () => {
            const { container } = render(<AllIcons />);
            const [icon] = container.querySelectorAll("svg");
            expect(icon).toHaveAttribute("aria-hidden", "true");
            expect(icon).toHaveClass("icon icon--12");
            expect(icon).toHaveAttribute("focusable", "false");
            const useElement = icon.querySelector("use");
            expect(useElement).toHaveAttribute("xlink:href", "#icon-add-12");
        });
    });

    describe("CustomColor story", () => {
        it("renders icon correctly", () => {
            const { container } = render(<CustomColor />);
            const [, iconClass, iconStyle] = container.querySelectorAll("svg");
            expect(iconClass).toHaveClass("icon demo3");
            expect(iconStyle).toHaveAttribute("style", "color: green;");
        });
    });

    describe("Non_Decorative story", () => {
        it("renders icon correctly", () => {
            const { container } = render(<NonDecorative />);
            const [iconConfirmation, iconAttention] = container.querySelectorAll("svg");

            expect(iconConfirmation).toHaveClass("icon");
            expect(iconConfirmation).toHaveAttribute("aria-labelledby", "icon-title-abc123");
            const title = iconConfirmation.querySelector("title");
            expect(title).toHaveAttribute("id", "icon-title-abc123");

            expect(iconAttention).toHaveClass("icon");
            expect(iconAttention).toHaveAttribute("aria-label", "Attention");
        });
    });
});
