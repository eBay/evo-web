import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ControlsTemplate from "./examples/controls.marko";
import ControlsTemplateCode from "./examples/controls.marko?raw";



export default {
    title: "form input/ebay-filter-input",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        size: {
            options: ["regular", "small", "large"],
            type: { category: "Options" },
            description:
                'either "regular" "small" or "large". If large, then renders larger sized textbox',
            table: {
                defaultValue: {
                    summary: "regular",
                },
            },
        },
        a11yClearButton: {
            type: "string",
            control: { type: "text" },
            description:
                "Text for the clear button. If not provided, then no clear button is rendered",
        },
        "aria-label": {
            type: "string",
            control: { type: "text" },
            description:
                "Either this or <label> is required. Renders text for screen readers",
        },
        a11yControlsId: {
            type: "string",
            control: { type: "text" },
            description:
                "Requied. This is the id of the element that this input controls, such as the list of filtered items.",
        },
        placeholder: {
            type: "string",
            control: { type: "text" },
            table: {
                defaultValue: {
                    summary: "Filter",
                },
            },
            description:
                "Reqired. Text to show when input is empty. This is not a label",
        },
        value: {
            type: "string",
            control: { type: "text" },
            table: {
                defaultValue: {
                    summary: "",
                },
            },
            description:
                "The value of the input. This is not a label. This is not required",
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
        onClear: {
            action: "on-clear",
            description: "Triggered when clear button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
    },
};

export const Default = buildExtensionTemplate(
    DefaultTemplate,
    DefaultTemplateCode,
    {
        a11yClearButton: "Clear filter input",
        "aria-label":"Filter input"

    },
);

export const Controls = buildExtensionTemplate(
    ControlsTemplate,
    ControlsTemplateCode,
    {
        a11yClearButton: "Clear filter input",
        "aria-label":"Filter input",
        a11yControlsId: "filter-input-controls"
    },
);
