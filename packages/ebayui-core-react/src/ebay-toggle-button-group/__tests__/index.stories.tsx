import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { EbayToggleButtonGroup } from "..";
import { EbayToggleButton } from "../../ebay-toggle-button";

export default {
    title: "Buttons/ebay-toggle-button-group",
    component: EbayToggleButtonGroup,
    argTypes: {
        a11yText: {
            control: {
                type: "text",
            },
            table: {
                type: { summary: "string" },
            },
            description: "Accessibility text for the group. Cannot be used together with `a11yLabelId`",
        },
        a11yLabelId: {
            control: {
                type: "text",
            },
            table: {
                type: { summary: "string" },
            },
            description:
                "Id of the element that labels the group. Required for a11y compliance. Cannot be used together with `a11yText`",
        },
        variant: {
            options: ["checkbox", "radio", "radio-toggle"],
            control: {
                type: "select",
            },
            table: {
                defaultValue: {
                    summary: "checkbox",
                },
                type: { summary: "string" },
            },
            description:
                'Selection type for the buttons in the group. May be "checkbox" (default), "radio", or "radio-toggle" (same as radio but with the option to deselect)',
        },
        layoutType: {
            options: ["minimal", "list", "gallery"],
            control: {
                type: "select",
            },
            table: {
                defaultValue: {
                    summary: "minimal",
                },
                type: { summary: ["minimal", "list", "gallery"] },
            },
            description:
                "Enforced layout type of all buttons. May be `minimal` (default), `list`, or `gallery`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may not be used when there is an icon or an image",
        },
        onChange: {
            action: "changed",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "originalEvent,  pressedButtons",
                },
            },
            description: "Triggered when the pressed state changes",
        },
        columnsMin: {
            control: { type: "number" },
            type: { name: "number", required: false },
            name: "columnsMin",
            table: {
                type: { summary: "number" },
            },
            description:
                "Preferred minimum number of columns for smallest container/screen (1-3). If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
        },
        columnsXS: {
            control: { type: "number" },
            type: { name: "number", required: false },
            name: "columnsXS",
            table: {
                type: { summary: "number" },
            },
            description:
                "Preferred minimum number of columns within extra small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
        },
        columnsSM: {
            control: { type: "number" },
            type: { name: "number", required: false },
            name: "columnsSM",
            table: {
                type: { summary: "number" },
            },
            description:
                "Preferred minimum number of columns within small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
        },
        columnsMD: {
            control: { type: "number" },
            type: { name: "number", required: false },
            name: "columnsMD",
            table: {
                type: { summary: "number" },
            },
            description:
                "Preferred minimum number of columns within medium containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
        },
        columnsXL: {
            control: { type: "number" },
            type: { name: "number", required: false },
            name: "columnsXL",
            table: {
                type: { summary: "number" },
            },
            description:
                "Preferred minimum number of columns within extra large containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
        },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: "3rem" }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: "left",
        controls: { expanded: true },

        options: {
            storySort: {
                order: [
                    "buttons",
                    "dialogs",
                    "form input",
                    "graphics & icons",
                    "media",
                    "navigation & disclosure",
                    "notices & tips",
                    "progress",
                    "building blocks",
                ],
            },
        },
    },
} as Meta<typeof EbayToggleButtonGroup>;

export const Default: StoryObj<typeof EbayToggleButtonGroup> = {
    render: (args) => {
        return (
            <EbayToggleButtonGroup {...args}>
                <EbayToggleButton pressed title="Button1" />
                <EbayToggleButton>Child Button</EbayToggleButton>
                <EbayToggleButton title="Button2" subtitle={"subtitle"} />
                <EbayToggleButton icon="settings24" title="Button3" subtitle="subtitle"></EbayToggleButton>
                <EbayToggleButton
                    title="Button4"
                    subtitle="subtitle"
                    img={{
                        src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
                        alt: "image alt",
                    }}
                ></EbayToggleButton>
            </EbayToggleButtonGroup>
        );
    },
};
