import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayFakeLink } from "../index";

const meta: Meta<typeof EbayFakeLink> = {
    component: EbayFakeLink,
    title: "buttons/ebay-fake-link",
    argTypes: {
        disabled: {
            description: "",
            control: { type: "boolean" },
            table: {
                category: "Toggles",
                defaultValue: {
                    summary: "false",
                },
            },
        },
        variant: {
            description:
                "Should only be standalone when it is clear contextually that this is a link, regardless of styles",
            options: ["inline", "standalone"],
            control: { type: "select" },
            table: {
                defaultValue: {
                    summary: "inline",
                },
            },
        },
        onClick: {
            action: "on-click",
            description: "Triggered on click",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event",
                },
            },
        },
        onEscape: {
            action: "on-escape",
            description: "Triggered on escape key",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event",
                },
            },
        },
        onFocus: {
            action: "on-focus",
            description: "Triggered on focus",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event",
                },
            },
        },
        onBlur: {
            action: "on-blur",
            description: "Triggered on blur",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event",
                },
            },
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayFakeLink> = (args) => <EbayFakeLink {...args}>Fake-Link</EbayFakeLink>;
