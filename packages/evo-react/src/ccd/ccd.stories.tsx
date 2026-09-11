import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoCCD } from "./ccd";

const meta: Meta<typeof EvoCCD> = {
  title: "Graphics & Icons/EvoCCD",
  component: EvoCCD,

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
    max: "65",
    min: "15",
    a11yText: "Charger included. 15 to 65 watts. USB Power Delivery.",
  },
};

export default meta;
type Story = StoryObj<typeof EvoCCD>;

/** The figure combines charger inclusion with a product's power range. */
export const Default: Story = {
  args: {
    chargerIcon: "included",
    secondaryType: "usbpd",
  },
};
