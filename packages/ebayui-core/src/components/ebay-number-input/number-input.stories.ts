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
    title: "form input/ebay-number-input",
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
        "on-change": {
            action: "on-change",
            description: "Triggered whenever the value of the input changes",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        "on-input-change": {
            action: "on-input-change",
            description: "Triggered when the value of the input is changed",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        "on-focus": {
            action: "on-focus",
            description: "Triggered on focus",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        "on-blur": {
            action: "on-blur",
            description: "Triggered on blur",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        "on-keypress": {
            action: "on-keypress",
            description: "Triggered on keypress",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        "on-keyup": {
            action: "on-keyup",
            description: "Triggered on keup",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },

        "on-keydown": {
            action: "on-keydown",
            description: "Triggered on keydown",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        onIncrement: {
            action: "on-increment",
            description: "Triggered when increment button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onDecrement: {
            action: "on-decrement",
            description: "Triggered when decrement button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onDelete: {
            action: "on-delete",
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

export const Default: Story<Input> = (args: Input) => ({
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

export const withDelete: Story<Input> = (args: Input) => ({
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

export const withLabel: Story<Input> = (args: Input) => ({
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
