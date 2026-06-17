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
            description:
                "The maximum power range value. When both min and max are unset the description figure is hidden.",
        },
        min: {
            control: "text",
            description:
                "The minimum power range value. When both min and max are unset the description figure is hidden.",
        },
        chargerIcon: {
            control: "select",
            options: ["included", "not-included"],
            description: "Shows a charger icon indicating whether a charger is included or not.",
        },
        units: {
            control: "text",
            description: "The unit label displayed beneath the power range.",
            table: { defaultValue: { summary: "W" } },
        },
        secondaryType: {
            control: "select",
            options: ["usbpd"],
            description: 'When set to "usbpd", displays the "USB PD" secondary label.',
        },
        a11yText: {
            control: "text",
            description:
                'Accessible label for the figure. Pass `null` explicitly only if alternative accessibility information is present. English default: "Charger included. {min} - {max} Watts. USB PD"',
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
