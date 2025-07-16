import {
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import Readme from "./README.md";
import Component  from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ExpressiveTemplate from "./examples/expressive.marko";
import ExpressiveTemplateCode from "./examples/expressive.marko?raw";
import MenuButtonTemplate from "./examples/menu-button.marko";
import MenuButtonTemplateCode from "./examples/menu-button.marko?raw";

export default {
    title: "form input/ebay-filter-chip",
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
        variant: {
            options: ["default", "expressive", "menu"],
            description:
                "The variant of the filter. Default and expressive are toggle buttons, while menu turns it into a dropdown.",
            control: { type: "select" },
        },
        icon: {
            name: "@icon",
            description: "The leading icon. Only used for default variant",
            table: {
                category: "@attribute tags",
            },
        },
        image: {
            name: "@image",
            description: "The leading image. Only used for expressive variant",
            table: {
                category: "@attribute tags",
            },
        },
        expanded: {
            control: { type: "boolean" },
            description:
                "Only used for menu variant. True/false if the menu is in expanded state or not",
        },
        a11ySelectedText: {
            control: { type: "string" },
            description:
                "For anchor variant: The clipped text to show when the filter is set. Defaults to \"- filter applied\"",
        },
        onClick: {
            action: "on-click",
            description: "Triggered when selection chip is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, selected, expanded }",
                },
            },
        },
    },
};

export const Default = buildExtensionTemplate(
    DefaultTemplate,
    DefaultTemplateCode,
);

export const MenuButton = buildExtensionTemplate(
    MenuButtonTemplate,
    MenuButtonTemplateCode,
);

export const Expressive = buildExtensionTemplate(
    ExpressiveTemplate,
    ExpressiveTemplateCode,
);
