import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayCCD } from "../";

const meta: Meta<typeof EbayCCD> = {
    title: "graphics & icons/ebay-ccd",
    component: EbayCCD,
    argTypes: {
        max: {
            control: { type: "text" },
            description: "The maximum range. If min and max are both not set, then will not show the charger label.",
        },
        min: {
            control: { type: "text" },
            description: "The minimum range. If min and max are both not set, then will not show the charger label.",
        },
        chargerIcon: {
            control: { type: "select" },
            options: ["none", "included", "not-included"],
            description: "Toggles the charger icon visible or if its included or not",
            table: {
                defaultValue: {
                    summary: "none",
                },
            },
        },
        units: {
            control: { type: "text" },
            description: "The units of the rating.",
            table: {
                defaultValue: {
                    summary: "w",
                },
            },
        },
        secondaryType: {
            control: { type: "select" },
            options: ["none", "usbpd"],
            description: "Toggles the usbpd secondary text",
            table: {
                defaultValue: {
                    summary: "none",
                },
            },
        },
        secondaryText: {
            control: { type: "text" },
            description: "The text used for secondary text. Will also be used in aria-label",
            table: {
                defaultValue: {
                    summary: "usbpd",
                },
            },
        },
        a11yUnits: {
            control: { type: "text" },
            description: "The units for the rating used for a11y",
            table: {
                defaultValue: {
                    summary: "watts",
                },
            },
        },
        a11yText: {
            control: { type: "text" },
            description: "Overrides the default aria-label text",
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayCCD> = (args) => <EbayCCD {...args} />;

Default.args = {
    max: "2000",
    min: "1000",
};
