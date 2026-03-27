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

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import EbayChip from "@ebay/ui-core-react/ebay-chip";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/chip";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/chip.css";
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayChip a11yDeleteButtonText="Remove item" onDelete={handleDelete} disabled={false}>
    Chip Content
</EbayChip>
\`\`\``,
            },
        },
    },
};

export default meta;

export const Default: StoryFn<EbayChipProps> = (args) => <EbayChip {...args}>Chip Content</EbayChip>;
