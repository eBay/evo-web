import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import { action } from "storybook/actions";

import { EbayDetails } from "../index";

const meta: Meta<typeof EbayDetails> = {
    component: EbayDetails,
    title: "navigation & disclosure/ebay-details",
    argTypes: {
        alignment: {
            description: "The position of the details",
            table: {
                defaultValue: {
                    summary: "regular",
                },
            },
            options: ["regular", "center"],
        },
        size: {
            description: "Size of the details",
            table: {
                defaultValue: {
                    summary: "regular",
                },
            },
            options: ["regular", "small"],
        },
        open: {
            type: "boolean",
            description: "Whether details is open",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        as: {
            description: "The root element.",
            table: {
                defaultValue: {
                    summary: "div",
                },
            },
        },
        onToggle: {
            action: "onToggle",
            description: "Triggered on toggle",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { open }",
                },
            },
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayDetails> = () => (
    <EbayDetails onToggle={action("onToggle")} text="Show me the details!" size="regular" as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </EbayDetails>
);

export const CenterAlignment: StoryFn<typeof EbayDetails> = () => (
    <EbayDetails onToggle={action("onToggle")} text="Show me the details!" size="regular" alignment="center" as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </EbayDetails>
);

export const SmallSize: StoryFn<typeof EbayDetails> = () => (
    <EbayDetails onToggle={action("onToggle")} text="Show me the details!" size="small" as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </EbayDetails>
);
