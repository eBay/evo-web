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
};

export default meta;

export const Default: StoryFn<typeof EbayFilter> = (args) => <EbayFilter {...args}>Filter</EbayFilter>;
