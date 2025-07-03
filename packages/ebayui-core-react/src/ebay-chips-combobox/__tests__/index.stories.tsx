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
        onExpand: { action: "onExpand" },
        onCollapse: { action: "onCollapse" },
        onChange: { action: "onChange" },
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
