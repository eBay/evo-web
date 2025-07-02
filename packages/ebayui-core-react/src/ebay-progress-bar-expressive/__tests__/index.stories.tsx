import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayProgressBarExpressive, EbayProgressBarExpressiveMessage } from "../index";

const meta: Meta<typeof EbayProgressBarExpressive> = {
    component: EbayProgressBarExpressive,
    title: "progress/ebay-progress-bar-expressive",
    argTypes: {
        "aria-label": {
            control: {
                type: "text",
            },
            description: "Localized, accessible label for the progress bar",
            table: {
                defaultValue: {
                    summary: "Loading...",
                },
            },
        },
        size: {
            type: "string",
            control: {
                type: "select",
            },
            options: ["large", "medium"],
            description: "Message text size",
            table: {
                defaultValue: {
                    summary: "large",
                },
            },
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayProgressBarExpressive> = (args) => <EbayProgressBarExpressive {...args} />;

export const WithMessages: StoryFn<typeof EbayProgressBarExpressive> = (args) => (
    <EbayProgressBarExpressive {...args}>
        <EbayProgressBarExpressiveMessage>Hang tight</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage>We&apos;re processing your order</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage>Just a moment longer</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>
);

export const WithSingleMessage: StoryFn<typeof EbayProgressBarExpressive> = (args) => (
    <EbayProgressBarExpressive {...args}>
        <EbayProgressBarExpressiveMessage>Single Message</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>
);

export const WithLongMessage: StoryFn<typeof EbayProgressBarExpressive> = (args) => (
    <EbayProgressBarExpressive {...args}>
        <EbayProgressBarExpressiveMessage>Messages should be one line...</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage duration={2500}>
            Sometimes that&apos;s hard to guarantee, though.
        </EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage>That&apos;s okay!</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>
);

export const WithCustomTiming: StoryFn<typeof EbayProgressBarExpressive> = (args) => (
    <EbayProgressBarExpressive {...args}>
        <EbayProgressBarExpressiveMessage duration={2000}>Message with 2s duration</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage duration={3000}>Message with 3s duration</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage duration={4000}>Message with 4s duration</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>
);

export const WithMediumSize: StoryFn<typeof EbayProgressBarExpressive> = (args) => (
    <EbayProgressBarExpressive {...args} size="medium">
        <EbayProgressBarExpressiveMessage>Medium Size Message</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>
);
