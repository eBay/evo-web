import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EbayToggleButton } from "..";

export default {
    title: "Buttons/ebay-toggle-button",
    component: EbayToggleButton,
    argTypes: {
        title: {
            control: {
                type: "text",
            },
            description: "Title attribute for the button",
            table: {
                type: { summary: "string" },
            },
        },
        subtitle: {
            control: {
                type: "text",
            },
            description: "Subtitle attribute for the button",
            table: {
                type: { summary: "string" },
            },
        },
        pressed: {
            control: {
                type: "boolean",
            },
            description: "Pressed state of the button",
            type: "boolean",
            table: {
                type: { summary: "boolean" },
                defaultValue: {
                    summary: "false",
                },
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
            description: "Pressed state of the button",
            type: "boolean",
            table: {
                type: { summary: "boolean" },
            },
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
            },
            description:
                "Enforced layout type of all buttons. May be `minimal` (default), `list`, or `gallery`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may not be used when there is an icon or an image",
        },
        icon: {
            description: "Name of EbayIcon for the component",
            table: {
                type: { summary: "EbayIcon" },
            },
        },
        img: {
            description: "Image for the component",
            table: {
                type: {
                    summary: `ToggleButtonImge = {src: string; alt: string; fillPlacement?: string}`,
                },
            },
        },
    },
} as Meta<typeof EbayToggleButton>;

export const Default: StoryObj<typeof EbayToggleButton> = {
    render: (args) => {
        const [isPressed, setIsPressed] = useState(false);
        return (
            <EbayToggleButton
                className="toggle-button--custom-modifier"
                pressed={isPressed}
                onToggle={() => setIsPressed(!isPressed)}
                title={"Button 1"}
                subtitle={"subtitle"}
                {...args}
            ></EbayToggleButton>
        );
    },
};

export const WithChildren = () => (
    <EbayToggleButton pressed={false} onToggle={action("togle")}>
        <p>Button 1</p>
    </EbayToggleButton>
);

export const IconButton = () => (
    <EbayToggleButton
        pressed={false}
        title={"Button 1"}
        subtitle={"Some context here"}
        onToggle={action("togle")}
        icon="settings24"
    ></EbayToggleButton>
);

export const ImageButton = () => (
    <EbayToggleButton
        pressed={false}
        title={"Button 1"}
        subtitle={"Some context here"}
        onToggle={action("togle")}
        img={{
            src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
            alt: "image alt",
        }}
    ></EbayToggleButton>
);

export const ImageButtonWithPlacement = () => (
    <EbayToggleButton
        pressed={false}
        title={"Button 1"}
        subtitle={"Some context here"}
        onToggle={action("togle")}
        layoutType="gallery"
        img={{
            src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
            alt: "image alt",
            fillPlacement: "top",
        }}
    ></EbayToggleButton>
);
