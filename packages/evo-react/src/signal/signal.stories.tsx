import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoSignal } from "./signal";

const meta: Meta<typeof EvoSignal> = {
  title: "Graphics & Icons/EvoSignal",
  component: EvoSignal,
  argTypes: {
    status: {
      control: "select",
      options: ["neutral", "trustworthy", "recent", "time-sensitive"],
    },
    children: {
      control: "text",
    },
  },
  args: {
    children: "Price trend is stable",
    status: "neutral",
  },
};

export default meta;

type Story = StoryObj<typeof EvoSignal>;

/** The visible text communicates the recommendation when color is unavailable. */
export const Default: Story = {};
