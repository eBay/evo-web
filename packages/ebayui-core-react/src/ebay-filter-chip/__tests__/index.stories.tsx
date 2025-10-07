import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayFilterChip } from "../index";
import { EbayIconSneaker16 } from "../../ebay-icon/icons/ebay-icon-sneaker-16";

const meta: Meta<typeof EbayFilterChip> = {
    component: EbayFilterChip,
    title: "form input/ebay-filter-chip",
    argTypes: {
        variant: {
            description: "Filter chip variant",
            table: {
                defaultValue: {
                    summary: "default",
                },
            },
            options: ["default", "expressive", "menu"],
            control: { type: "select" },
        },
        defaultSelected: {
            type: "boolean",
            description: "Whether the chip is selected initially (uncontrolled)",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        selected: {
            type: "boolean",
            description: "Whether the chip is selected (controlled)",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        defaultExpanded: {
            type: "boolean",
            description: "Whether the menu chip is expanded initially (uncontrolled)",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        expanded: {
            type: "boolean",
            description: "Whether the menu chip is expanded (controlled)",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        disabled: {
            type: "boolean",
            description: "Whether the chip is disabled",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        href: {
            type: "string",
            description: "URL for anchor variant",
        },
        a11ySelectedText: {
            type: "string",
            description: "Accessibility text for selected state",
            table: {
                defaultValue: {
                    summary: "Filter Applied",
                },
            },
        },
        onClick: {
            action: "onClick",
            description: "Triggered on click",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { selected, expanded, originalEvent }",
                },
            },
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayFilterChip> = (args) => (
    <EbayFilterChip {...args}>Default Filter</EbayFilterChip>
);

export const Selected: StoryFn<typeof EbayFilterChip> = (args) => (
    <EbayFilterChip {...args} selected>
        Selected Filter
    </EbayFilterChip>
);

export const WithIcon: StoryFn<typeof EbayFilterChip> = (args) => (
    <EbayFilterChip {...args} icon={<EbayIconSneaker16 />}>
        Filter with Icon
    </EbayFilterChip>
);

export const Expressive: StoryFn<typeof EbayFilterChip> = (args) => (
    <EbayFilterChip
        {...args}
        variant="expressive"
        image={<img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png" alt="Category" />}
    >
        Expressive Filter
    </EbayFilterChip>
);

export const ExpressiveSelected: StoryFn<typeof EbayFilterChip> = (args) => (
    <EbayFilterChip
        {...args}
        variant="expressive"
        selected
        image={<img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png" alt="Category" />}
    >
        Expressive Selected
    </EbayFilterChip>
);

export const Menu: StoryFn<typeof EbayFilterChip> = (args) => (
    <EbayFilterChip {...args} variant="menu">
        Menu Filter
    </EbayFilterChip>
);

export const MenuExpanded: StoryFn<typeof EbayFilterChip> = (args) => (
    <EbayFilterChip {...args} variant="menu" expanded>
        Menu Expanded
    </EbayFilterChip>
);

export const Anchor: StoryFn<typeof EbayFilterChip> = (args) => (
    <EbayFilterChip {...args} href="https://ebay.com">
        Link Filter
    </EbayFilterChip>
);

export const AnchorSelected: StoryFn<typeof EbayFilterChip> = (args) => (
    <EbayFilterChip {...args} href="https://ebay.com" selected>
        Selected Link
    </EbayFilterChip>
);

export const Disabled: StoryFn<typeof EbayFilterChip> = (args) => (
    <EbayFilterChip {...args} disabled>
        Disabled Filter
    </EbayFilterChip>
);

export const Collection: StoryFn<typeof EbayFilterChip> = (args) => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <EbayFilterChip {...args}>Brand</EbayFilterChip>
        <EbayFilterChip {...args} selected>
            Color
        </EbayFilterChip>
        <EbayFilterChip {...args}>Size</EbayFilterChip>
        <EbayFilterChip {...args} variant="menu">
            Price Range
        </EbayFilterChip>
        <EbayFilterChip {...args} disabled>
            Out of Stock
        </EbayFilterChip>
    </div>
);
