import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbaySignal } from "../../ebay-signal";
import {
    EbayItemTile,
    EbayItemTileSupertitle,
    EbayItemTileTitle,
    EbayItemTileSubtitle,
    EbayItemTileDescription,
    EbayItemTileAction,
} from "../../ebay-item-tile";
import { EbayItemTileGroup } from "..";

const meta: Meta<typeof EbayItemTileGroup> = {
    title: "layout/ebay-item-tile-group",
    component: EbayItemTileGroup,
    argTypes: {
        layout: {
            control: { type: "select" },
            options: ["gallery", "list"],
            defaultValue: {
                summary: "gallery",
            },
            description:
                "The layout of the item-tile. The default is gallery. The list layout takes more horizontal space and is better for displaying more information.",
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

export const Default: StoryFn<typeof EbayItemTileGroup> = (args) => {
    const tiles = Array.from({ length: 5 });

    return (
        <EbayItemTileGroup {...args}>
            {tiles.map((_, idx) => (
                <EbayItemTile
                    key={idx}
                    file={{
                        name: "file-name.jpg",
                        type: "image",
                        src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                    }}
                >
                    <EbayItemTileAction aria-label="action label" icon="heart16" />
                    <EbayItemTileSupertitle>
                        <EbaySignal status="time-sensitive">Time Sensitive</EbaySignal>
                    </EbayItemTileSupertitle>
                    <EbayItemTileTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileTitle>
                    <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
                    <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
                    <EbayItemTileDescription as="div">
                        <a href="https://ebay.com">Buy it now</a>
                    </EbayItemTileDescription>
                    <EbayItemTileDescription>Free shipping</EbayItemTileDescription>
                </EbayItemTile>
            ))}
        </EbayItemTileGroup>
    );
};
