import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayChip, EbayChipProps } from "../index";

const meta: Meta<typeof EbayChip> = {
    component: EbayChip,
    title: "building blocks/ebay-chip",
    argTypes: {
        a11yDeleteButtonText: {
            control: "text",
            description: "Accessibility text for the delete button",
        },
        disabled: {
            control: "boolean",
            description: "Whether the chip is disabled",
        },
        onDelete: { action: "onDelete" },
    },
};

export default meta;

export const Default: StoryFn<EbayChipProps> = (args) => <EbayChip {...args}>Chip Content</EbayChip>;
