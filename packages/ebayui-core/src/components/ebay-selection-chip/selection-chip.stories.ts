import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "form input/ebay-selection-chip",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        renderBody: {
            control: { type: "text" },
            description: "Text to be displayed in the chip",
        },
        selected: {
            control: { type: "boolean" },
            description: "True/false if the chip is selected or not",
        },
        onClick: {
            action: "on-click",
            description: "Triggered when selection chip is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, selected }",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    renderBody: "Selection Chip" as any,
};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-selection-chip", Default.args),
        },
    },
};
