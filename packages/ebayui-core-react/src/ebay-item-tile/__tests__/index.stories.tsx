import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import {
    EbayItemTileAction,
    EbayItemTile,
    EbayItemTileSupertitle,
    EbayItemTileTitle,
    EbayItemTileSubtitle,
    EbayItemTileDescription,
} from "..";
import { EbaySignal } from "../../ebay-signal";
import { EbayIconHeart16 } from "../../ebay-icon/icons/ebay-icon-heart-16";

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

        EbayItemTileAction: {
            description:
                "Action component that will be used to render EbayIconButton and needs to have an `icon` and `aria-label` to be render.",
            options: ["icon", "aria-label"],
            control: { type: "select" },
        },
    },

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayItemTile } from "@ebay/ui-core-react/ebay-item-tile";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/badge";
import "@ebay/skin/button";
import "@ebay/skin/file-preview-card";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/item-tile";
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

export const Default: StoryFn<typeof EbayItemTile> = (args) => (
    <EbayItemTile
        file={{
            name: "file-name.jpg",
            type: "image",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        }}
        {...args}
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
        <EbayItemTileAction aria-label="action label" icon={<EbayIconHeart16 />} />
        <EbayItemTileSupertitle>
            <EbaySignal status="time-sensitive">Time Sensitive</EbaySignal>
        </EbayItemTileSupertitle>
        <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
        <EbayItemTileDescription as="div">
            <a href="https://ebay.com">Buy it now</a>
        </EbayItemTileDescription>
        <EbayItemTileDescription>Free shipping</EbayItemTileDescription>
    </EbayItemTile>
);
