import { tagToString } from "../../common/storybook/storybook-code-source";
import {
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import button, { type Input } from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import WithIconsTemplate from "./examples/with-icons.marko";
import WithIconsTemplateCode from "./examples/with-icons.marko?raw";
import { Story } from "@storybook/marko";

export default {
    title: "buttons/evo-segmented-buttons",
    component: button,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        button: {
            description: "Each button in the segmented button",
            name: "@button",
            table: {
                category: "@Attribute Tags",
            },
        },
        selected: {
            description: "If true, this will be the selected button",
            table: {
                category: "@button attribute",
            },
        },
        size: {
            options: ["large", "regular"],
            description: "",
            table: {
                defaultValue: {
                    summary: "none",
                },
            },
            type: { category: "Options" },
        },
        icon: {
            description: "The icon to show before the text",
            name: "@icon",
            table: {
                category: "@button attribute",
            },
        },
    },
};

export const Default = buildExtensionTemplate(
    DefaultTemplate,
    DefaultTemplateCode
);

export const WithIcons = buildExtensionTemplate(
    WithIconsTemplate,
    WithIconsTemplateCode,
);
