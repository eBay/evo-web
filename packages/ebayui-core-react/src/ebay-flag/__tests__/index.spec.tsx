import React from "react";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./index.stories";

const { AllFlags } = composeStories(stories);

jest.mock("../../common/random-id");

describe("ebay-icon rendering", () => {
    describe("AllFlags story", () => {
        it("renders icons correctly", () => {
            const { container } = render(<AllFlags />);
            const [icon] = container.querySelectorAll("svg");
            expect(icon).toHaveAttribute("aria-hidden", "true");
            expect(icon).toHaveClass("flag flag--ac");
            expect(icon).toHaveAttribute("focusable", "false");
            const useElement = icon.querySelector("use");
            expect(useElement).toHaveAttribute("xlink:href", "#flag-ac");
        });
    });
});
