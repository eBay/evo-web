import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayImagePlaceholder } from "../index";

const meta: Meta<typeof EbayImagePlaceholder> = {
    title: "graphics & icons/ebay-image-placeholder",
    component: EbayImagePlaceholder,

    argTypes: {
        a11yText: {
            control: { type: "text" },
            description: "text for non-decorative inline icon; icon is assumed to be decorative if this is not passed",
        },
        noSkinClasses: {
            control: { type: "boolean" },
            description: "Suppress Skin CSS classes",
        },
        a11yVariant: {
            options: ["label"],
            control: { type: "select" },
            description: "Controls aria-label vs aria-labelledby",
        },
        prominent: {
            control: { type: "boolean" },
            description: "Adds prominent styling",
        },
    },

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayImagePlaceholder } from "@ebay/ui-core-react/ebay-image-placeholder";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
\`\`\``,
            },
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayImagePlaceholder> = (args) => <EbayImagePlaceholder {...args} />;

export const Resized: StoryFn<typeof EbayImagePlaceholder> = (args) => (
    <EbayImagePlaceholder {...args} style={{ height: 100, width: 100, border: `1px solid black` }} />
);
