import Readme from "./README.md";
import Component from "./index.marko";
import { Story } from "@storybook/marko";
import type { Input } from "./component";
import defaultTemplate from "./examples/default.marko";
import defaultTemplateCode from "./examples/default.marko?raw";
import withDeleteTemplate from "./examples/with-delete.marko";
import withDeleteTemplateCode from "./examples/with-delete.marko?raw";
import withLabelTemplate from "./examples/with-label.marko";
import withLabelTemplateCode from "./examples/with-label.marko?raw";

export default {
    title: "form input/evo-number-input",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        fluid: {
            type: "boolean",
            control: { type: "boolean" },
        },
        inputSize: {
            options: ["regular", "large"],
            type: { category: "Options" },
            description:
                'either "regular" or "large". If large, then renders larger sized textbox',
            table: {
                defaultValue: {
                    summary: "regular",
                },
            },
        },
        multiline: {
            type: "boolean",
            control: { type: "boolean" },
            description: "renders a multi-line texbox if true",
        },
        invalid: {
            type: "boolean",
            control: { type: "boolean" },
            description:
                "indicates a field-level error with red border if true",
        },
        "aria-label": {
            type: "string",
            control: { type: "Options" },
            description:
                "Either this or @label is required. Renders text for screen readers",
        },
        label: {
            description:
                "Either this or aria-label is required. Renders label inside input if set",
            control: { type: "text" },
            table: {
                category: "@attribute tag",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onIncrement: {
            action: "onIncrement",
            description: "Triggered when increment button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onDecrement: {
            action: "onDecrement",
            description: "Triggered when decrement button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onDelete: {
            action: "onDelete",
            description: "Triggered when delete button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
    },
};

export const Default: Story<Input> = (args) => ({
    input: args,
    component: defaultTemplate,
});
Default.args = {};
Default.parameters = {
    docs: {
        source: {
            code: defaultTemplateCode,
        },
    },
};

export const withDelete: Story<Input> = (args) => ({
    input: args,
    component: withDeleteTemplate,
});
withDelete.args = {};
withDelete.parameters = {
    docs: {
        source: {
            code: withDeleteTemplateCode,
        },
    },
};

export const withLabel: Story<Input> = (args) => ({
    input: args,
    component: withLabelTemplate,
});
withLabel.args = {};
withLabel.parameters = {
    docs: {
        source: {
            code: withLabelTemplateCode,
        },
    },
};
