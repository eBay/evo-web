import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoEek } from "./eek";

const meta: Meta<typeof EvoEek> = {
  title: "Graphics & Icons/EvoEek",
  component: EvoEek,

  argTypes: {
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
    },
    max: {
      control: "text",
    },
    min: {
      control: "text",
    },
    rating: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["regular", "large"],
    },
  },
  args: {
    a11yText: "Energy rating C. Range A+++ to E.",
    max: "A+++",
    min: "E",
    rating: "C",
  },
};

export default meta;

type Story = StoryObj<typeof EvoEek>;

/** The current energy rating appears against its supported range. */
export const Default: Story = {};
