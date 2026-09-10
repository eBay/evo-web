import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoProgressBar } from "./progress-bar";

const meta: Meta<typeof EvoProgressBar> = {
  title: "Progress/EvoProgressBar",
  component: EvoProgressBar,
  argTypes: {
    value: {
      control: "number",
      description: "Current progress value. Omit for indeterminate progress.",
    },
    max: {
      control: "number",
      description: "Maximum progress value. Defaults to `100`.",
    },
    fluid: {
      control: "boolean",
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
    },
  },
  args: {
    a11yText: "Task progress",
    value: 50,
    max: 100,
    fluid: false,
  },
};

export default meta;

type Story = StoryObj<typeof EvoProgressBar>;

/** A determinate progress bar shows the task halfway to completion. */
export const Default: Story = {};

/** An indeterminate progress bar indicates activity without a completion percentage. */
export const Indeterminate: Story = {
  args: {
    value: undefined,
  },
};
