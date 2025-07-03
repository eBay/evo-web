import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayList, EbayListItem } from "../index";
import EbayListItemLeading from "../list-item-leading";
import EbayListItemTrailing from "../list-item-trailing";
import { EbayIcon } from "../../ebay-icon";
import { EbaySwitch } from "../../ebay-switch";

const meta: Meta<typeof EbayList> = {
    component: EbayList,
    title: "building blocks/ebay-list",
    argTypes: {
        onButtonClick: {
            action: "onButtonClick",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ index }",
                },
            },
            description: "Triggered on item click when the item is rendered as a button",
        },
    },
};

export default meta;

export const Static: StoryFn<typeof EbayList> = (args) => (
    <EbayList {...args}>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIcon name="folder16" />
            </EbayListItemLeading>
            Item 1
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIcon name="lamp16" />
            </EbayListItemLeading>
            Item 2
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIcon name="file16" />
            </EbayListItemLeading>
            Item 3
        </EbayListItem>
    </EbayList>
);

export const Interactive: StoryFn<typeof EbayList> = (args) => (
    <EbayList {...args}>
        <EbayListItem as="button">Item 1</EbayListItem>
        <EbayListItem as="a" href="https://www.ebay.com">
            Item 2
            <EbayListItemTrailing>
                <EbayIcon name="chevronRight16" />
            </EbayListItemTrailing>
        </EbayListItem>
        <EbayListItem id="switch-item">
            Item 3
            <EbayListItemTrailing>
                <EbaySwitch aria-labelledby="switch-item" />
            </EbayListItemTrailing>
        </EbayListItem>
    </EbayList>
);

export const WithSeparator: StoryFn<typeof EbayList> = (args) => (
    <EbayList {...args}>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIcon name="folder16" />
            </EbayListItemLeading>
            Item 1
        </EbayListItem>
        <EbayListItem separator />
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIcon name="lamp16" />
            </EbayListItemLeading>
            Item 2
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIcon name="file16" />
            </EbayListItemLeading>
            Item 3
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIcon name="file16" />
            </EbayListItemLeading>
            Item 4
        </EbayListItem>
        <EbayListItem separator />
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIcon name="lightbulb16" />
            </EbayListItemLeading>
            Item 5
        </EbayListItem>
    </EbayList>
);
