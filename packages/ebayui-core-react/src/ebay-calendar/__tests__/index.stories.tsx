import { Meta, StoryObj } from "@storybook/react-vite";
import { EbayCalendar } from "../index";
import { EbayCalendarProps } from "../calendar";

const story: Meta<typeof EbayCalendar> = {
    component: EbayCalendar,
    title: "building blocks/ebay-calendar",
};

export const Default: StoryObj<EbayCalendarProps> = {};

export const Interactive: StoryObj<EbayCalendarProps> = {
    args: {
        interactive: true,
        selected: "2024-01-03",
    },
};

export const MultipleMonths: StoryObj<EbayCalendarProps> = {
    args: {
        interactive: true,
        numMonths: 2,
        selected: "2024-01-03",
    },
};

export const Navigable: StoryObj<EbayCalendarProps> = {
    args: {
        interactive: true,
        navigable: true,
        numMonths: 2,
        selected: "2024-01-03",
    },
};

export const RangeSelected: StoryObj<EbayCalendarProps> = {
    args: {
        interactive: true,
        range: true,
        numMonths: 2,
        selected: ["2024-01-03", "2025-02-01"],
    },
};

export const DisableBeforeAndAfter: StoryObj<EbayCalendarProps> = {
    args: {
        interactive: true,
        navigable: true,
        range: true,
        numMonths: 2,
        selected: ["2024-01-03", "2025-02-01"],
        disableBefore: "2024-01-03",
        disableAfter: "2025-02-01",
    },
};

export const DisableWeekdays: StoryObj<EbayCalendarProps> = {
    args: {
        interactive: true,
        numMonths: 2,
        disableWeekdays: [0, 6],
    },
};

export default story;
