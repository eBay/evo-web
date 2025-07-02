import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayFilePreviewCard, EbayFilePreviewCardAction } from "..";

const meta: Meta<typeof EbayFilePreviewCard> = {
    title: "media/ebay-file-preview-card",
    component: EbayFilePreviewCard,
    argTypes: {
        a11yCancelUploadText: {
            type: "string",
            control: { type: "text" },
            description: "a11y text for cancel upload button",
        },
        file: {
            description:
                "File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",
            table: {
                category: "File",
            },
        },
        status: {
            type: "string",
            control: { type: "text" },
            description: 'Status of the file, can be `"uploading"` or `undefined`',
        },
        infoText: {
            type: "string",
            control: { type: "text" },
            description: "Text to display info in file if not image",
        },
        menuActions: {
            description: "Array of menu actions, containing `event` and `label`",
            table: {
                category: "Menu Actions",
            },
        },
        href: {
            type: "string",
            control: { type: "text" },
            description: "href that will wrap the preview card image",
        },
        seeMore: {
            type: "number",
            control: { type: "number" },
            description: 'Passing a number here will convert the card to a "see more" card',
        },
        footerTitle: {
            type: "string",
            control: { type: "text" },
            description: "Title to display beneath the file, usually the filename",
        },
        footerSubtitle: {
            type: "string",
            control: { type: "text" },
            description: "Subtitle to display beneath the file title",
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
        onSeeMore: {
            action: "onSeeMore",
            description: "Triggered when the see more button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
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

export const Default: StoryFn<typeof EbayFilePreviewCard> = (args) => (
    <EbayFilePreviewCard status="uploading" a11yCancelUploadText="cancel upload" {...args} />
);

export const Image: StoryFn<typeof EbayFilePreviewCard> = (args) => (
    <EbayFilePreviewCard
        a11yCancelUploadText="Cancel upload"
        deleteText="Delete"
        file={{
            name: "file-name.jpg",
            type: "image",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        }}
        {...args}
    />
);

export const WithAction: StoryFn<typeof EbayFilePreviewCard> = (args) => (
    <EbayFilePreviewCard
        {...args}
        a11yCancelUploadText="Cancel upload"
        file={{
            name: "file-name.jpg",
            type: "image",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        }}
    >
        <EbayFilePreviewCardAction icon="heart16" aria-label="like picture" />
    </EbayFilePreviewCard>
);

export const NoAction: StoryFn<typeof EbayFilePreviewCard> = (args) => (
    <EbayFilePreviewCard
        a11yCancelUploadText="Cancel upload"
        file={{
            name: "file-name.jpg",
            type: "image",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        }}
        {...args}
    />
);

export const ImageFooter: StoryFn<typeof EbayFilePreviewCard> = (args) => (
    <EbayFilePreviewCard
        a11yCancelUploadText="Cancel upload"
        deleteText="Delete"
        file={{
            name: "file-name.jpg",
            type: "image",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        }}
        footerTitle="Here a footer title"
        footerSubtitle="Now a footer subtitle"
        menuActions={[
            {
                event: "edit",
                label: "Edit",
            },
            {
                event: "download",
                label: "Download",
            },
        ]}
        {...args}
    />
);

export const Video: StoryFn<typeof EbayFilePreviewCard> = (args) => (
    <EbayFilePreviewCard
        a11yCancelUploadText="Cancel upload"
        deleteText="Delete"
        file={{
            name: "file-name.mov",
            type: "video/quicktime",
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        }}
        {...args}
    />
);

export const Document: StoryFn<typeof EbayFilePreviewCard> = (args) => (
    <EbayFilePreviewCard
        a11yCancelUploadText="Cancel upload"
        deleteText="Delete"
        file={{
            name: "file-name.csv",
            type: "text/csv",
        }}
        footerTitle="file-name.csv"
        footerSubtitle="English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic"
        menuActions={[
            {
                event: "edit",
                label: "Edit",
            },
        ]}
        {...args}
    />
);

export const MultipleActions: StoryFn<typeof EbayFilePreviewCard> = (args) => (
    <EbayFilePreviewCard
        a11yCancelUploadText="Cancel upload"
        deleteText="Delete"
        file={{
            name: "file-name.jpg",
            type: "image/jpeg",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        }}
        menuActions={[
            {
                event: "edit",
                label: "Edit",
            },
            {
                event: "download",
                label: "Download",
            },
        ]}
        {...args}
    />
);

export const SeeMore: StoryFn<typeof EbayFilePreviewCard> = (args) => (
    <EbayFilePreviewCard
        a11yCancelUploadText="Cancel upload"
        deleteText="Delete"
        a11ySeeMoreText="See more"
        seeMore={15}
        file={{
            name: "file-name.jpg",
            type: "image/jpeg",
            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
        }}
        {...args}
    />
);
