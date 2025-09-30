import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayList, EbayListItem } from "../index";
import EbayListItemLeading from "../list-item-leading";
import EbayListItemTrailing from "../list-item-trailing";
import { EbaySwitch } from "../../ebay-switch";
import { EbayIconFolder16 } from "../../ebay-icon/icons/ebay-icon-folder-16";
import { EbayIconLamp16 } from "../../ebay-icon/icons/ebay-icon-lamp-16";
import { EbayIconFile16 } from "../../ebay-icon/icons/ebay-icon-file-16";
import { EbayIconChevronRight16 } from "../../ebay-icon/icons/ebay-icon-chevron-right-16";
import { EbayIconLightbulb16 } from "../../ebay-icon/icons/ebay-icon-lightbulb-16";

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
                <EbayIconFolder16 />
            </EbayListItemLeading>
            Item 1
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconLamp16 />
            </EbayListItemLeading>
            Item 2
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconFile16 />
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
                <EbayIconChevronRight16 />
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
                <EbayIconFolder16 />
            </EbayListItemLeading>
            Item 1
        </EbayListItem>
        <EbayListItem separator />
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconLamp16 />
            </EbayListItemLeading>
            Item 2
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconFile16 />
            </EbayListItemLeading>
            Item 3
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconFile16 />
            </EbayListItemLeading>
            Item 4
        </EbayListItem>
        <EbayListItem separator />
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconLightbulb16 />
            </EbayListItemLeading>
            Item 5
        </EbayListItem>
    </EbayList>
);
