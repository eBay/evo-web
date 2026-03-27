import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayFilter } from "../index";

const meta: Meta<typeof EbayFilter> = {
    title: "building blocks/ebay-filter",
    component: EbayFilter,
    argTypes: {
        href: {
            control: { type: "text" },
            description: "for link that looks like a button",
        },
        disabled: {
            control: { type: "boolean" },
        },
        selected: {
            control: { type: "boolean" },
        },
        defaultSelected: {
            control: { type: "boolean" },
        },
        useAriaPressed: {
            control: { type: "boolean" },
            description: "defaults to `true`",
        },
        a11ySelectedText: {
            control: { type: "text" },
            description: 'defaults to `"Selected"`, but should be changed based on L10N or I18N',
            table: {
                category: "when using fake filters",
            },
        },
        onClick: {
            action: "onClick",
            description: "Triggered on item clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { selected }",
                },
            },
        },
    },

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayFilter } from "@ebay/ui-core-react/ebay-filter";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/filter-button";

// When using with "href"
import "@ebay/skin/filter-link";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/filter-button.css";

/* When using with "href" */
@import "@ebay/skin/filter-link.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayFilter>Text</EbayFilter>
\`\`\``,
            },
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayFilter> = (args) => <EbayFilter {...args}>Filter</EbayFilter>;
