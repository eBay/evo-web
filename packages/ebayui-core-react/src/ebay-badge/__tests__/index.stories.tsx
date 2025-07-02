import { Meta, StoryObj } from "@storybook/react-vite";
import { EbayBadge } from "../index";
import { EbayBadgeProps } from "../badge";

const meta: Meta<typeof EbayBadge> = {
    component: EbayBadge,
    title: "graphics & icons/ebay-badge",
};

export default meta;

export const Default: StoryObj<EbayBadgeProps> = {
    args: {
        "aria-label": "1 unread item",
        number: 1,
    },
};

export const Zero: StoryObj<EbayBadgeProps> = {
    args: {
        "aria-label": "0 unread items",
        number: 0,
    },
};

export const BigNumbers: StoryObj<EbayBadgeProps> = {
    args: {
        "aria-label": "120 unread items",
        number: 120,
    },
};
