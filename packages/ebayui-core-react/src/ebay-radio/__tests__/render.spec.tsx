import React from "react";
import { composeStory } from "@storybook/react-vite";
import { render } from "@testing-library/react";
import Meta, {
    UsingCustomLabelHtml,
    SelectedRadioButton,
    DisabledRadioButton,
    GroupedRadioButtons,
    ControlledComponent,
} from "./index.stories";

const UsingCustomLabelHtmlStory = composeStory(UsingCustomLabelHtml, Meta);
const SelectedRadioButtonStory = composeStory(SelectedRadioButton, Meta);
const DisabledRadioButtonStory = composeStory(DisabledRadioButton, Meta);
const GroupedRadioButtonsStory = composeStory(GroupedRadioButtons, Meta);
const ControlledComponentStory = composeStory(ControlledComponent, Meta);

describe("EbayRadio rendering", () => {
    describe("UsingCustomLabelHtml story", () => {
        it("renders radio button correctly", () => {
            const { container } = render(<UsingCustomLabelHtmlStory />);
            const radio = container.querySelector('input[type="radio"]');
            expect(radio).toHaveClass("radio__control");
            expect(radio).toHaveAttribute("value", "123");
        });
    });

    describe("SelectedRadioButton story", () => {
        it("renders selected radio button correctly", () => {
            const { container } = render(<SelectedRadioButtonStory />);
            const radio = container.querySelector('input[type="radio"]');
            expect(radio).toHaveClass("radio__control");
            expect(radio).toHaveAttribute("checked");
        });
    });

    describe("DisabledRadioButton story", () => {
        it("renders disabled radio button correctly", () => {
            const { container } = render(<DisabledRadioButtonStory />);
            const radio = container.querySelector('input[type="radio"]');
            expect(radio).toHaveClass("radio__control");
            expect(radio).toHaveAttribute("disabled");
        });
    });

    describe("GroupedRadioButtons story", () => {
        it("renders grouped radio buttons correctly", () => {
            const { getAllByRole } = render(<GroupedRadioButtonsStory />);
            const radios = getAllByRole("radio");
            expect(radios[0]).toHaveClass("radio__control");
            expect(radios[0]).toHaveAttribute("value", "1");
        });
    });

    describe("ControlledComponent story", () => {
        it("renders controlled radio button correctly", () => {
            const { container } = render(<ControlledComponentStory />);
            const radio = container.querySelector('input[type="radio"]');
            expect(radio).toHaveClass("radio__control");
            expect(radio).toHaveAttribute("value", "Regular");
        });
    });
});
