import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoCCD } from "./ccd";

const meta: Meta<typeof EvoCCD> = {
    title: "graphics & icons/evo-ccd",
    component: EvoCCD,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `
A Charging Capability Display (CCD) component that visualises charger power range and USB PD support.

## Usage

\`\`\`tsx
import { EvoCCD } from "@evo-web/react/ccd";
\`\`\`
                `,
            },
        },
    },
    argTypes: {
        max: {
            control: "text",
        },
        min: {
            control: "text",
        },
        chargerIcon: {
            control: "select",
            options: ["included", "not-included"],
        },
        units: {
            control: "text",
            table: { defaultValue: { summary: "W" } },
        },
        secondaryType: {
            control: "select",
            options: ["usbpd"],
        },
        a11yText: {
            control: "text",
            type: { name: "string", required: true },
        },
    },
    args: {
        max: "2000",
        min: "1000",
        a11yText: "Charger included. 1000 - 2000 Watts. USB PD",
    },
};

export default meta;
type Story = StoryObj<typeof EvoCCD>;

export const Default: Story = {
    args: {
        chargerIcon: "included",
        secondaryType: "usbpd",
    },
};
