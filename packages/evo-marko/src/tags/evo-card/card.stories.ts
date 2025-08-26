import { buildExtensionTemplate } from "../../common/storybook/utils";
import Component from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import AnchorTemplate from "./examples/anchor.marko";
import AnchorTemplateCode from "./examples/anchor.marko?raw";
import ButtonTemplate from "./examples/button.marko";
import ButtonTemplateCode from "./examples/button.marko?raw";
import MinimumTemplate from "./examples/minimum.marko";
import MinimumTemplateCode from "./examples/minimum.marko?raw";

export default {
    title: "layout/evo-card",
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
        },
        layout: {
            control: { type: "select" },
            options: ["horizontal", "vertical"],
            description:
                "The layout of the card. The default is vertical. The horizontal option takes up more horizontal space and is better for displaying more information.",
        },
        href: {
            control: { type: "text" },
            description:
                "The URL to navigate to when the card is clicked. This can only be used in conjunction without a action element",
        },
        aspectRatio: {
            control: { type: "select" },
            options: ["16:9", "5:4", "default"],
            description: "The aspect ratio applied to the image.",
        },
        disabled: {
            control: { type: "boolean" },
            description: "True if the card is not clickable",
        },
        image: {
            name: "@image",
            table: {
                category: "@attribute tags",
            },
            description:
                "The top image tag. Will be passed as attributes to the <img> tag.",
        },
        title: {
            name: "@title",
            description: "The title element of the card",
            table: {
                category: "@attribute tags",
            },
        },
        action: {
            name: "@action",
            description: "The action element of the card",
            table: {
                category: "@attribute tags",
            },
        },
        overline: {
            name: "@overline",
            description:
                "The overline element of the card. This is generally used for signals rendered above the title.",
            table: {
                category: "@attribute tags",
            },
        },
        description: {
            name: "@description",
            description:
                'The description element of the card. This is to render a description below the title in tertiary element. Defaults to <p> tag (use "as" attribute to change).',
            table: {
                category: "@attribute tags",
            },
        },
        onClick: {
            action: "onClick",
            description: "Triggered when card is clicked",
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
);

export const Anchor = buildExtensionTemplate(
    AnchorTemplate,
    AnchorTemplateCode,
);

export const Button = buildExtensionTemplate(
    ButtonTemplate,
    ButtonTemplateCode,
);

export const Minimum = buildExtensionTemplate(
    MinimumTemplate,
    MinimumTemplateCode,
);

