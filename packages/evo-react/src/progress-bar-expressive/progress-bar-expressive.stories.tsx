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
    a11yText: "Loading...",
    messages: [
      { content: "Hang tight" },
      { content: "We're processing your order" },
      { content: "Just a moment longer" },
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
    messages: [{ content: "We're processing your order" }],
  },
};

/** Custom durations control how long each message remains visible. */
export const CustomTiming: Story = {
  args: {
    messages: [
      { content: "Display for 2 seconds", duration: 2000 },
      { content: "Display for 3 seconds", duration: 3000 },
      { content: "Display for 4 seconds", duration: 4000 },
    ],
  },
};
