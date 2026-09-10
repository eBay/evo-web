import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoProgressBarExpressive } from "./progress-bar-expressive";

const meta: Meta<typeof EvoProgressBarExpressive> = {
  title: "Progress/EvoProgressBarExpressive",
  component: EvoProgressBarExpressive,
  argTypes: {
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
    },
    size: {
      control: "select",
      options: ["medium", "large"],
    },
    messages: {
      control: "object",
    },
  },
  args: {
    a11yText: "Processing your order",
    messages: [
      { content: "Checking payment details" },
      { content: "Confirming inventory" },
      { content: "Preparing your order" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof EvoProgressBarExpressive>;

/** The default expressive progress bar rotates through several status messages. */
export const Default: Story = {};

/** A single message remains visible while progress continues. */
export const SingleMessage: Story = {
  args: {
    messages: [{ content: "Processing your order" }],
  },
};

/** Custom durations control how long each message remains visible. */
export const CustomTiming: Story = {
  args: {
    messages: [
      { content: "Checking payment details", duration: 2000 },
      { content: "Confirming inventory", duration: 3000 },
      { content: "Preparing your order", duration: 4000 },
    ],
  },
};
