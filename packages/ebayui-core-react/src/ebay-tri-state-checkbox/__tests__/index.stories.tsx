import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import { EbayField, EbayLabel } from "../../ebay-field";
import { EbayTriStateCheckbox } from "../index";

const meta: Meta<typeof EbayTriStateCheckbox> = {
    component: EbayTriStateCheckbox,
    title: "form input/ebay-tri-state-checkbox",
    argTypes: {
        checked: {
            options: ["false", "mixed", "true"],
            control: { type: "select" },
            description:
                'Either "true", "false" or "mixed". Changes the checkbox state to the given one depdending on the checked state.',
        },
        skipMixed: {
            type: "boolean",
            control: { type: "boolean" },
            description:
                "If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none.",
        },
        size: {
            options: ["default", "large"],
            control: { type: "select" },
            description:
                'Either "large" or "default". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',
            table: {
                defaultValue: {
                    summary: "default",
                },
            },
        },
        onChange: {
            action: "onChange",
            description: "Triggered on change",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "originalEvent, { value, checked }",
                },
            },
        },
        onFocus: {
            action: "onFocus",
            description: "Triggered on focus",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "originalEvent, { value, checked }",
                },
            },
        },
        onKeyDown: {
            action: "onKeydown",
            description: "Triggered on key down",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "originalEvent, { value, checked }",
                },
            },
        },

        disabled: { control: "boolean" },
        defaultChecked: {
            options: ["true", "false", "mixed"],
            control: { type: "select" },
            description: "Initial uncontrolled checked state",
        },
    },

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayTriStateCheckbox } from "@ebay/ui-core-react/ebay-tri-state-checkbox";
import { EbayLabel } from "@ebay/ui-core-react/ebay-field";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/checkbox";
import "@ebay/skin/field";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/checkbox.css";
@import "@ebay/skin/field.css";
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayTriStateCheckbox id="tri-checkbox-1">
    <EbayLabel>Select all</EbayLabel>
</EbayTriStateCheckbox>
\`\`\``,
            },
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayTriStateCheckbox> = (args) => (
    <EbayTriStateCheckbox {...args} value="123" id="checkbox-11" />
);

export const MixedCheckbox: StoryFn<typeof EbayTriStateCheckbox> = (args) => (
    <EbayTriStateCheckbox {...args} checked="mixed" value="123" id="checkbox-11" />
);
MixedCheckbox.argTypes = {
    checked: { table: { disable: true } }, // Disabling `checked` in controls panel for controlled component
};

export const WithLabel: StoryFn<typeof EbayTriStateCheckbox> = (args) => (
    <EbayField>
        <EbayTriStateCheckbox {...args} value="123" id="checkbox-11" />
        <EbayLabel className="field__label field__label--end" htmlFor="checkbox-11">
            Label
        </EbayLabel>
    </EbayField>
);

export const Disabled: StoryFn<typeof EbayTriStateCheckbox> = (args) => (
    <EbayField>
        <EbayTriStateCheckbox {...args} value="123" disabled id="checkbox-11" />
        <EbayLabel className="field__label--disabled" style={{ marginLeft: "8px" }} htmlFor="checkbox-11">
            Label
        </EbayLabel>
    </EbayField>
);
