import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayFilterMenuButton, EbayFilterMenuFooterButton, EbayFilterMenuItem } from "../";
import filterMenuMeta from "../../ebay-filter-menu/__tests__/index.stories";
import data from "./data.json";

const meta: Meta<typeof EbayFilterMenuButton> = {
    component: EbayFilterMenuButton,
    title: "buttons/ebay-filter-menu-button",
    argTypes: {
        ...filterMenuMeta.argTypes,
        text: {
            control: "text",
            description: "Button text",
        },
        countText: {
            control: "text",
            description:
                'Text rendered in a badge after the button text, e.g. "(+3)". Caller is responsible for formatting.',
        },
        selected: {
            control: "boolean",
            description:
                "Overrides derived selected state. Use when managing selection externally (e.g. with search filtering).",
        },
        a11yFilterAppliedText: {
            control: "text",
            description:
                'Clipped text announced by screen readers when at least one item is selected. English default is "Filter Applied"',
            type: { name: "string", required: false },
        },
        onExpand: { action: "onExpand" },
        onCollapse: { action: "onCollapse" },
    },

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayFilterMenuButton, EbayFilterMenuItem } from "@ebay/ui-core-react/ebay-filter-menu-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/button";
import "@ebay/skin/checkbox";
import "@ebay/skin/filter-menu";
import "@ebay/skin/filter-menu-button";
import "@ebay/skin/icon";
import "@ebay/skin/radio";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/button.css";
@import "@ebay/skin/checkbox.css";
@import "@ebay/skin/filter-menu.css";
@import "@ebay/skin/filter-menu-button.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/radio.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayFilterMenuButton>
    <EbayFilterMenuItem value="item1">Item 1</EbayFilterMenuItem>
    <EbayFilterMenuItem value="item2">Item 2</EbayFilterMenuItem>
</EbayFilterMenuButton>
\`\`\``,
            },
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayFilterMenuButton> = (args) => (
    <EbayFilterMenuButton {...args} text={args.text || "Filter Menu Button"}>
        <EbayFilterMenuItem value="item 1">item 1</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 2">item 2</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 3">item 3</EbayFilterMenuItem>
    </EbayFilterMenuButton>
);

export const WithFooter: StoryFn<typeof EbayFilterMenuButton> = (args) => (
    <EbayFilterMenuButton {...args} text={args.text || "Country"}>
        <EbayFilterMenuItem value="item 1">item 1</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 2">item 2</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 3">item 3</EbayFilterMenuItem>
        <EbayFilterMenuFooterButton>Apply</EbayFilterMenuFooterButton>
    </EbayFilterMenuButton>
);

export const WithSearch: StoryFn<typeof EbayFilterMenuButton> = (args) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [checkedCodes, setCheckedCodes] = useState<string[]>([]);

    const visibleItems = data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <EbayFilterMenuButton
            {...args}
            text={args.text || "Country"}
            searchHeaderPlaceholderText={args.searchHeaderPlaceholderText || "Search"}
            a11ySearchHeaderClearText={args.a11ySearchHeaderClearText || "Clear"}
            onSearchChange={(value) => setSearchTerm(value)}
            searchHeaderValue={searchTerm}
            selected={checkedCodes.length > 0}
            countText={checkedCodes.length > 0 ? `(+${checkedCodes.length})` : undefined}
            onChange={(_, { checked }) => setCheckedCodes(checked ?? [])}
        >
            {visibleItems.map((item) => (
                <EbayFilterMenuItem key={item.code} value={item.code} checked={checkedCodes.includes(item.code)}>
                    {item.name}
                </EbayFilterMenuItem>
            ))}
        </EbayFilterMenuButton>
    );
};
