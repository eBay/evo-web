import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EbayFilePreviewCardGroup } from "..";
import { EbayFilePreviewCardProps, EbayFilePreviewCard, EbayFilePreviewCardAction } from "../../ebay-file-preview-card";

const meta: Meta<typeof EbayFilePreviewCardGroup> = {
    title: "media/ebay-file-preview-card-group",
    component: EbayFilePreviewCardGroup,
    argTypes: {
        a11ySeeMoreText: {
            type: "string",
            control: { type: "text" },
            description: "a11y text for see more button, applied to all cards",
        },
        onDelete: {
            action: "onDelete",
            description: "Triggered when the delete button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onCancel: {
            action: "onCancel",
            description: "Triggered when the cancel button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onAction: {
            action: "onAction",
            description: "Triggered when the actiion button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onMenuAction: {
            action: "onMenuAction",
            description: "Triggered when an action is selected from the menu. ",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "name, event /* from ebay-menu-button */",
                },
            },
        },
    },
};
export default meta;

export const Default: StoryFn<typeof EbayFilePreviewCardGroup> = (args) => {
    const cards: EbayFilePreviewCardProps[] = Array.from({ length: 3 }, () => ({
        file: {
            name: "file-name.jpg",
            type: "image",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        },
        deleteText: "Delete text",
    }));
    return (
        <EbayFilePreviewCardGroup {...args}>
            {cards.map((cardFile, index) => (
                <EbayFilePreviewCard key={index} {...cardFile} />
            ))}
        </EbayFilePreviewCardGroup>
    );
};

export const WithCustomAction: StoryFn<typeof EbayFilePreviewCardGroup> = (args) => {
    const cards: EbayFilePreviewCardProps[] = Array.from({ length: 3 }, () => ({
        file: {
            name: "file-name.jpg",
            type: "image",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        },
    }));
    return (
        <EbayFilePreviewCardGroup {...args}>
            {cards.map((cardFile, index) => (
                <EbayFilePreviewCard key={index} {...cardFile}>
                    <EbayFilePreviewCardAction icon="heart16" aria-label="icon label" />
                </EbayFilePreviewCard>
            ))}
        </EbayFilePreviewCardGroup>
    );
};

export const ManyCards: StoryFn<typeof EbayFilePreviewCardGroup> = (args) => {
    const cards: EbayFilePreviewCardProps[] = Array.from({ length: 50 }, () => ({
        menuActions: [
            {
                event: "action1",
                label: "Action 1",
            },
            {
                event: "action2",
                label: "Action 2",
            },
        ],
        file: {
            name: "file-name.jpg",
            type: "image",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        },
        deleteText: "Delete",
        onMenuAction: action("onMenuAction"),
        onDelete: action("onDelete"),
        as: "div",
    }));

    return (
        <EbayFilePreviewCardGroup a11ySeeMoreText="see more text" {...args}>
            {cards.map((cardFile, index) => (
                <EbayFilePreviewCard key={index} {...cardFile} />
            ))}
        </EbayFilePreviewCardGroup>
    );
};
export const CardsUploading: StoryFn<typeof EbayFilePreviewCardGroup> = (args) => {
    const cards: EbayFilePreviewCardProps[] = Array.from({ length: 5 }, () => ({
        status: "uploading",
        file: {
            name: "file-name.jpg",
            type: "image",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        },
        a11yCancelUploadText: "cancel upload text",
        onCancel: action("onCancel"),
    }));

    return (
        <EbayFilePreviewCardGroup {...args}>
            {cards.map((cardFile, index) => (
                <EbayFilePreviewCard key={index} {...cardFile} />
            ))}
        </EbayFilePreviewCardGroup>
    );
};
