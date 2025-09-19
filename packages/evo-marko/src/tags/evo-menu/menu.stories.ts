import {
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import RadioTemplate from "./examples/radio.marko";
import RadioTemplateCode from "./examples/radio.marko?raw";
import CheckboxTemplate from "./examples/checkbox.marko";
import CheckboxTemplateCode from "./examples/checkbox.marko?raw";
import BadgedTemplate from "./examples/badged.marko";
import BadgedTemplateCode from "./examples/badged.marko?raw";
import FilterTemplate from "./examples/filter.marko";
import FilterTemplateCode from "./examples/filter.marko?raw";
import SpritesTemplate from "./examples/sprites.marko";
import SpritesTemplateCode from "./examples/sprites.marko?raw";
import TypeaheadTemplate from "./examples/typeahead.marko";
import TypeaheadTemplateCode from "./examples/typeahead.marko?raw";
import SeparatorTemplate from "./examples/separator.marko";
import SeparatorTemplateCode from "./examples/separator.marko?raw";
import FooterTemplate from "./examples/footer.marko";
import FooterTemplateCode from "./examples/footer.marko?raw";

export default {
    title: "building blocks/evo-menu",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        type: {
            control: { type: "select" },
            options: ["radio", "checkbox", "none"],
            description: 'Can be "radio" / "checkbox"',
        },
        variant: {
            control: { type: "select" },
            options: ["filter", "none"],
            description:
                'Either "none" for default menu or "filter" for filter variant',
        },

        priority: {
            control: { type: "select" },
            options: ["primary", "secondary", "none"],
            description:
                'button priority, "primary" / "secondary" (default) / "none"',
        },
        checked: {
            description:
                "will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup",
        },
        item: {
            name: "@item",
            table: {
                category: "@attribute tags",
            },
        },
        value: {
            control: { type: "text" },
            table: {
                category: "@item attributes",
            },
            description:
                "the value to use with event responses for for the `checked` array",
        },
        badgeNumber: {
            controls: { hideNoControlsWarning: true },
            table: {
                category: "@item attributes",
            },
            description: "used as the number to be placed in the badge",
        },
        "aria-label": {
            controls: { hideNoControlsWarning: true },
            table: {
                category: "@item attributes",
            },
            description:
                "Passed as the `aria-label` directly to the badge. Required only if badge number is provided",
        },
        footerButton: {
            name: "@footer-button",
            table: {
                category: "@attribute tags",
            },
            description:
                "The footer content. Renders an ebay-button. Used for filter type generally.",
        },
        "onFooter-button-click": {
            action: "on-footer-button-click",
            description: "Triggered on click of footer button",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ }",
                },
            },
        },
        onKeydown: {
            action: "on-keydown",
            description: "Triggered on keydown",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ el, index, checked }",
                },
            },
        },
        onChange: {
            action: "on-change",
            description:
                "Triggered on item checked change, (checkbox/radio type only)",
            table: {
                category: "Events",
                defaultValue: {
                    summary:
                        "radio: { el, index, checked } | checkbox: { el, [indexes], [checked] }",
                },
            },
        },

        onSelect: {
            action: "on-select",
            description: "Triggered on item clicked (non radio/checkbox)",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ el, index, checked }",
                },
            },
        },
    },
};

export const Default = buildExtensionTemplate(
    DefaultTemplate,
    DefaultTemplateCode,
);

export const Radio = buildExtensionTemplate(
    RadioTemplate,
    RadioTemplateCode,
);

export const Checkbox = buildExtensionTemplate(
    CheckboxTemplate,
    CheckboxTemplateCode,
);

export const Typeahead = buildExtensionTemplate(
    TypeaheadTemplate,
    TypeaheadTemplateCode,
);
export const Badged = buildExtensionTemplate(
    BadgedTemplate,
    BadgedTemplateCode,
);
export const Filter = buildExtensionTemplate(
    FilterTemplate,
    FilterTemplateCode,
);
export const Sprites = buildExtensionTemplate(
    SpritesTemplate,
    SpritesTemplateCode,
);
export const Separator = buildExtensionTemplate(
    SeparatorTemplate,
    SeparatorTemplateCode,
);
export const Footer = buildExtensionTemplate(
    FooterTemplate,
    FooterTemplateCode,
);
