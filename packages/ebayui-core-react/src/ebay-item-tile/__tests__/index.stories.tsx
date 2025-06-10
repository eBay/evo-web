import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
    EbayItemTileAction,
    EbayItemTile,
    EbayItemTileSectionSuperTitle,
    EbayItemTileSectionTitle,
    EbayItemTileSectionSubTitle,
    EbayItemTileSectionDescription,
} from "..";
import { EbaySignal } from "../../ebay-signal";

const meta: Meta<typeof EbayItemTile> = {
    title: "layout/ebay-item-tile",
    component: EbayItemTile,
    argTypes: {
        file: {
            description:
                "File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",
            table: {
                category: "File",
            },
        },
        layout: {
            control: { type: "select" },
            options: ["gallery", "list"],
            defaultValue: {
                summary: "gallery",
            },
            description:
                "The layout of the item-tile. The default is gallery. The list layout takes more horizontal space and is better for displaying more information.",
        },
        href: {
            control: { type: "text" },
            description:
                "The URL to navigate to when the item-tile is clicked. If not provided, the item will not be clickable.",
        },
        onAction: {
            action: "onAction",
            description: "Triggered when the action button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
    },
};
export default meta;

export const Default: StoryFn<typeof EbayItemTile> = (args) => (
    <EbayItemTile
        file={{
            name: "file-name.jpg",
            type: "image",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        }}
        {...args}
    >
        <EbayItemTileAction aria-label="action label" icon="heart16" />
        <EbayItemTileSectionSuperTitle>
            <EbaySignal status="time-sensitive">Time Sensitive</EbaySignal>
        </EbayItemTileSectionSuperTitle>
        <EbayItemTileSectionTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileSectionTitle>
        <EbayItemTileSectionSubTitle>256GB Space Gray</EbayItemTileSectionSubTitle>
        <EbayItemTileSectionDescription className="price">$29.99</EbayItemTileSectionDescription>
        <EbayItemTileSectionDescription as="div">
            <a href="https://ebay.com">Buy it now</a>
        </EbayItemTileSectionDescription>
        <EbayItemTileSectionDescription>Free shipping</EbayItemTileSectionDescription>
    </EbayItemTile>
);

export const NoAction: StoryFn<typeof EbayItemTile> = (args) => (
    <EbayItemTile
        file={{
            name: "file-name.jpg",
            type: "image",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        }}
        {...args}
    >
        <EbayItemTileSectionSuperTitle>
            <EbaySignal status="time-sensitive">Time Sensitive</EbaySignal>
        </EbayItemTileSectionSuperTitle>
        <EbayItemTileSectionTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileSectionTitle>
        <EbayItemTileSectionSubTitle>256GB Space Gray</EbayItemTileSectionSubTitle>
        <EbayItemTileSectionDescription className="price">$29.99</EbayItemTileSectionDescription>
        <EbayItemTileSectionDescription as="div">
            <a href="https://ebay.com">Buy it now</a>
        </EbayItemTileSectionDescription>
        <EbayItemTileSectionDescription>Free shipping</EbayItemTileSectionDescription>
    </EbayItemTile>
);

export const WithoutSecondarySection: StoryFn<typeof EbayItemTile> = (args) => (
    <EbayItemTile
        file={{
            name: "file-name.jpg",
            type: "image",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        }}
        {...args}
    >
        <EbayItemTileAction aria-label="action label" icon="heart16" />
        <EbayItemTileSectionSuperTitle>
            <EbaySignal status="time-sensitive">Time Sensitive</EbaySignal>
        </EbayItemTileSectionSuperTitle>
        <EbayItemTileSectionDescription className="price">$29.99</EbayItemTileSectionDescription>
        <EbayItemTileSectionDescription as="div">
            <a href="https://ebay.com">Buy it now</a>
        </EbayItemTileSectionDescription>
        <EbayItemTileSectionDescription>Free shipping</EbayItemTileSectionDescription>
    </EbayItemTile>
);
