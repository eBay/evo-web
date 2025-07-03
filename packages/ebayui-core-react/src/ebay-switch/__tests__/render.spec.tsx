import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { DefaultSwitchButton, SelectedSwitchButton, DisabledSwitchButton } from "./index.stories";

const DefaultSwitchButtonStory = composeStory(DefaultSwitchButton, Meta);
const SelectedSwitchButtonStory = composeStory(SelectedSwitchButton, Meta);
const DisabledSwitchButtonStory = composeStory(DisabledSwitchButton, Meta);

describe("<EbaySwitch>", () => {
    describe("DefaultSwitchButton story", () => {
        it("renders correctly", () => {
            render(<DefaultSwitchButtonStory />);
            const switchButton = screen.getAllByRole("switch")[0];
            expect(switchButton).toHaveClass("switch__control");
            expect(switchButton).toHaveAttribute("value", "123");
        });
    });

    describe("SelectedSwitchButton story", () => {
        it("renders correctly", () => {
            render(<SelectedSwitchButtonStory />);
            const switchButton = screen.getAllByRole("switch")[0];
            expect(switchButton).toHaveClass("switch__control");
            expect(switchButton).toHaveAttribute("checked");
        });
    });

    describe("DisabledSwitchButton story", () => {
        it("renders correctly", () => {
            render(<DisabledSwitchButtonStory />);
            const switchButton = screen.getAllByRole("switch")[0];
            expect(switchButton).toHaveClass("switch__control");
            expect(switchButton).toHaveAttribute("disabled");
        });
    });
});
