import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayFilterMenu, EbayFilterMenuFooterButton, EbayFilterMenuItem } from "../index";
import data from "./data.json";

const meta: Meta<typeof EbayFilterMenu> = {
    component: EbayFilterMenu,
    title: "building blocks/ebay-filter-menu",
    argTypes: {
        type: {
            options: ["radio", "checkbox"],
            control: { type: "select" },
            description: 'Can be "radio" / "checkbox"',
        },
        variant: {
            options: ["default", "form"],
            control: { type: "select" },
            description: '"" (default) / "form"',
        },
        classPrefix: {
            control: { type: "text" },
            description: '"filter-menu" (default) / modifies the base prefix for all Skin classes in the menu',
        },
        formName: {
            control: { type: "text" },
            description: "forms `name` attribute",
        },
        formAction: {
            control: { type: "text" },
            description: "forms `action` attribute",
        },
        formMethod: {
            control: { type: "text" },
            description: "forms `method` attribute",
        },
        searchHeaderValue: {
            control: { type: "text" },
            description: "optional value override for the input in the search header",
        },
        searchHeaderPlaceholderText: {
            control: { type: "text" },
            description:
                "enables the search header and populates placeholder text. `a11y-search-header-clear-text` is required if this is enabled.",
        },
        a11ySearchHeaderClearText: {
            control: { type: "text" },
            description: "a11y text for the search header clear button",
        },
        onChange: {
            action: "onChange",
            description: "Triggered on item clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { checked, checkedIndex, currentChecked, index }",
                },
            },
        },
        onFooterClick: {
            action: "onFooterClick",
            description: "Triggered on footer clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { checked, checkedIndex, currentChecked, index }",
                },
            },
        },
        onFormSubmit: {
            action: "onFormSubmit",
            description: 'Triggered when using `variant="form"`, and form is submitted (emits current checked state)',
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { checked, checkedIndex, currentChecked, index }",
                },
            },
        },
        onSearchChange: {
            action: "onSearchChange",
            description: "Triggered when the search input updates",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { searchTerm }",
                },
            },
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayFilterMenu> = (args) => (
    <EbayFilterMenu {...args}>
        <EbayFilterMenuItem value="item 1">item 1</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 2">item 2</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 3">item 3</EbayFilterMenuItem>
    </EbayFilterMenu>
);

export const WithSearch: StoryFn<typeof EbayFilterMenu> = (args) => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleSearchChange = (event, props) => {
        setSearchTerm(props?.searchTerm || "");
    };

    const filteredItems = data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <EbayFilterMenu
            {...args}
            searchHeaderPlaceholderText="Search"
            a11ySearchHeaderClearText="Clear"
            onSearchChange={handleSearchChange}
        >
            {filteredItems.map((item) => (
                <EbayFilterMenuItem key={item.code} value={item.code}>
                    {item.name}
                </EbayFilterMenuItem>
            ))}
            <EbayFilterMenuFooterButton>Apply</EbayFilterMenuFooterButton>
        </EbayFilterMenu>
    );
};

export const WithFooterButton: StoryFn<typeof EbayFilterMenu> = (args) => (
    <EbayFilterMenu {...args}>
        <EbayFilterMenuItem value="item 1">item 1</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 2">item 2</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 3">item 3</EbayFilterMenuItem>
        <EbayFilterMenuFooterButton>Apply</EbayFilterMenuFooterButton>
    </EbayFilterMenu>
);

export const WithDisabledItem: StoryFn<typeof EbayFilterMenu> = (args) => (
    <EbayFilterMenu variant="form" {...args}>
        <EbayFilterMenuItem value="item 1">item 1</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 2">item 2</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 3" disabled>
            item 3
        </EbayFilterMenuItem>
    </EbayFilterMenu>
);
