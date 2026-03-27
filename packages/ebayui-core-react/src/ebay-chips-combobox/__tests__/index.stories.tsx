import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import EbayChipsCombobox, { EbayChipsComboboxProps } from "../chips-combobox";
import { EbayComboboxOption } from "../../ebay-combobox";
import { EbayButton } from "../../ebay-button";
import { ChipsComboboxChangeHandler } from "../types";

const meta: Meta<typeof EbayChipsCombobox> = {
    component: EbayChipsCombobox,
    title: "form input/ebay-chips-combobox",
    argTypes: {
        expanded: {
            control: "boolean",
            description: "Whether the combobox is expanded",
        },
        fluid: {
            control: "boolean",
            description: "Whether the combobox should take full width",
        },
        error: {
            control: "boolean",
            description: "Whether the combobox is in an error state",
        },
        listSelection: {
            control: "select",
            options: ["manual", "automatic"],
            description: "Selection mode for the list",
        },
        defaultSelected: {
            control: "array",
            description: "Initial selected options. Use it for uncontrolled components",
        },
        selected: {
            control: "array",
            description: "Currently selected option. Use it for controlled components",
        },
        disabled: {
            control: "boolean",
            description: "Whether the combobox is disabled",
        },
        a11yDeleteButtonText: {
            control: "text",
            description: "Accessibility text for the delete button",
        },
        borderless: {
            control: "boolean",
            description: "Removes input borders",
        },
        floatingLabel: {
            control: "text",
            description: "Floating label text",
        },
        autocomplete: {
            control: "select",
            options: ["list", "none"],
            description: "Auto-filtering mode",
        },
        onExpand: { action: "onExpand" },
        onCollapse: { action: "onCollapse" },
        onChange: { action: "onChange" },
    },

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayChipsCombobox, EbayComboboxOption } from "@ebay/ui-core-react/ebay-chips-combobox";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/chip";
import "@ebay/skin/chips-combobox";
import "@ebay/skin/combobox";
import "@ebay/skin/floating-label";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/chip.css";
@import "@ebay/skin/chips-combobox.css";
@import "@ebay/skin/combobox.css";
@import "@ebay/skin/floating-label.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayChipsCombobox onChange={handleChange}>
    <EbayComboboxOption value="option1">Option 1</EbayComboboxOption>
    <EbayComboboxOption value="option2">Option 2</EbayComboboxOption>
    <EbayComboboxOption value="option3">Option 3</EbayComboboxOption>
</EbayChipsCombobox>
\`\`\``,
            },
        },
    },
};

export default meta;

export const Default: StoryFn<EbayChipsComboboxProps> = (args) => (
    <EbayChipsCombobox placeholder="Add item" {...args}>
        <EbayComboboxOption text="Chip 1" />
        <EbayComboboxOption text="Chip 2" />
        <EbayComboboxOption text="Chip 3" />
    </EbayChipsCombobox>
);

export const ControlledCombobox: StoryFn<EbayChipsComboboxProps> = (args) => {
    const [selected, setSelected] = useState<string[]>([]);

    const handleChange: ChipsComboboxChangeHandler = (event, data) => {
        setSelected(data?.selected || []);
    };

    return (
        <>
            <EbayChipsCombobox placeholder="Add item" {...args} selected={selected} onChange={handleChange}>
                <EbayComboboxOption text="Chip 1" />
                <EbayComboboxOption text="Chip 2" />
                <EbayComboboxOption text="Chip 3" />
            </EbayChipsCombobox>

            <div style={{ marginTop: 16 }}>
                <EbayButton onClick={() => setSelected(["Chip 2"])}>Update with Chip 2</EbayButton>
            </div>
        </>
    );
};
