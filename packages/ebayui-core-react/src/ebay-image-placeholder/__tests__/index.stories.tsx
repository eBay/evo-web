import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayImagePlaceholder } from "../index";

const meta: Meta<typeof EbayImagePlaceholder> = {
    title: "graphics & icons/ebay-image-placeholder",
    component: EbayImagePlaceholder,

    argTypes: {
        a11yText: {
            control: { type: "text" },
            description: "text for non-decorative inline icon; icon is assumed to be decorative if this is not passed",
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayImagePlaceholder> = (args) => <EbayImagePlaceholder {...args} />;

export const Resized: StoryFn<typeof EbayImagePlaceholder> = (args) => (
    <EbayImagePlaceholder {...args} style={{ height: 100, width: 100, border: `1px solid black` }} />
);
