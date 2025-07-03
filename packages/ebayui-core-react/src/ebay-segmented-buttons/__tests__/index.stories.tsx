import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EbaySegmentedButtons, EbaySegmentedButton as Button } from "..";
import { EbayIcon } from "../../ebay-icon";

export default {
    title: "Buttons/ebay-segmented-buttons",
    component: EbaySegmentedButtons,
    argTypes: {
        size: {
            options: ["large", "regular"],
            control: {
                type: "select",
            },
            table: {
                defaultValue: {
                    summary: "regular",
                },
            },
        },
        onChange: {
            action: "changed",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "originalEvent, { index, value }",
                },
            },
        },
    },
} as Meta<typeof EbaySegmentedButtons>;

export const Default: StoryObj<typeof EbaySegmentedButtons> = {
    render: (args) => (
        <EbaySegmentedButtons onChange={action("change")} {...args}>
            <Button selected value="quarter1">
                Q1
            </Button>
            <Button value="quarter2">Q2</Button>
            <Button value="quarter3">Q3</Button>
            <Button value="quarter4">Q4</Button>
        </EbaySegmentedButtons>
    ),
};

export const WithIcons: StoryObj<typeof EbaySegmentedButtons> = {
    render: (args) => (
        <EbaySegmentedButtons onChange={action("change")} {...args}>
            <Button selected>
                <EbayIcon name="fullView24" /> Desktop
            </Button>
            <Button>
                <EbayIcon name="mobile24" /> Mobile
            </Button>
        </EbaySegmentedButtons>
    ),
};
