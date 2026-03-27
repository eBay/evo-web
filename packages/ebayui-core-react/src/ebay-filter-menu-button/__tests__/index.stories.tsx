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

    return (
        <EbayFilterMenuButton
            {...args}
            text={args.text || "Country"}
            searchHeaderPlaceholderText={args.searchHeaderPlaceholderText || "Search"}
            a11ySearchHeaderClearText={args.a11ySearchHeaderClearText || "Clear"}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
            searchHeaderValue={searchTerm}
        >
            {data
                .filter((item) => item.name.toLowerCase().includes(searchTerm))
                .map((item) => (
                    <EbayFilterMenuItem key={item.code} value={item.code} checked={item.code === searchTerm}>
                        {item.name}
                    </EbayFilterMenuItem>
                ))}
        </EbayFilterMenuButton>
    );
};
