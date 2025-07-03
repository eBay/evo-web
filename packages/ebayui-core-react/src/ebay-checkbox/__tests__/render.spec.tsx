import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, {
    DefaultCheckboxButton,
    SelectedCheckboxButton,
    DisabledCheckboxButton,
    GroupedCheckboxButtons,
} from "./index.stories";

const DefaultCheckboxButtonInstance = composeStory(DefaultCheckboxButton, Meta);
const SelectedCheckboxButtonInstance = composeStory(SelectedCheckboxButton, Meta);
const DisabledCheckboxButtonInstance = composeStory(DisabledCheckboxButton, Meta);
const GroupedCheckboxButtonsInstance = composeStory(GroupedCheckboxButtons, Meta);

describe("ebay-checkbox rendering", () => {
    it("DefaultCheckboxButton instance", () => {
        render(<DefaultCheckboxButtonInstance />);
        const checkbox = screen.getAllByRole("checkbox")[0];
        expect(checkbox).toHaveClass("checkbox__control");
    });

    it("SelectedCheckboxButton instance", () => {
        render(<SelectedCheckboxButtonInstance />);
        const checkbox = screen.getAllByRole("checkbox")[0];
        expect(checkbox).toHaveClass("checkbox__control");
        expect(checkbox).toHaveAttribute("checked");
    });

    it("DisabledCheckboxButton instance", () => {
        render(<DisabledCheckboxButtonInstance />);
        const checkbox = screen.getAllByRole("checkbox")[0];
        expect(checkbox).toHaveClass("checkbox__control");
        expect(checkbox).toHaveAttribute("disabled");
    });

    it("GroupedCheckboxButtons instance", () => {
        render(<GroupedCheckboxButtonsInstance />);
        const checkboxes = screen.getAllByRole("checkbox");
        checkboxes.forEach((checkbox) => {
            expect(checkbox).toHaveClass("checkbox__control");
        });
    });
});
