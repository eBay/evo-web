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
import { EbayIconHeart16 } from "../../ebay-icon/icons/ebay-icon-heart-16";

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

        EbayItemTile: { description: "Tile component that will be rendered in the group", control: "text" },
    },

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayItemTileGroup } from "@ebay/ui-core-react/ebay-item-tile-group";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/badge";
import "@ebay/skin/button";
import "@ebay/skin/file-preview-card";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/item-tile";
import "@ebay/skin/item-tile-group";
import "@ebay/skin/layout-grid";
import "@ebay/skin/menu";
import "@ebay/skin/menu-button";
import "@ebay/skin/progress-spinner";
import "@ebay/skin/signal";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/badge.css";
@import "@ebay/skin/button.css";
@import "@ebay/skin/file-preview-card.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/item-tile.css";
@import "@ebay/skin/item-tile-group.css";
@import "@ebay/skin/layout-grid.css";
@import "@ebay/skin/menu.css";
@import "@ebay/skin/menu-button.css";
@import "@ebay/skin/progress-spinner.css";
@import "@ebay/skin/signal.css";
\`\`\``,
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
                    <EbayItemTileAction aria-label="action label" icon={<EbayIconHeart16 />} />
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
