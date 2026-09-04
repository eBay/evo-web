import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoProgressBarExpressive } from "./progress-bar-expressive";

const meta: Meta<typeof EvoProgressBarExpressive> = {
  title: "progress/evo-progress-bar-expressive",
  component: EvoProgressBarExpressive,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
An expressive progress bar that communicates ongoing work with animated messages.

## Usage

\`\`\`tsx
import { EvoProgressBarExpressive } from "@evo-web/react/progress-bar-expressive";
\`\`\`
        `,
      },
    },
  },
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

export const Default: Story = {};

export const SingleMessage: Story = {
  args: {
    messages: [{ content: "We're processing your order" }],
  },
};

export const CustomTiming: Story = {
  args: {
    messages: [
      { content: "Display for 2 seconds", duration: 2000 },
      { content: "Display for 3 seconds", duration: 3000 },
      { content: "Display for 4 seconds", duration: 4000 },
    ],
  },
};
