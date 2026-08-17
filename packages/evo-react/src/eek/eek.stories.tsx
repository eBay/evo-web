import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoEek } from "./eek";

const meta: Meta<typeof EvoEek> = {
  title: "graphics & icons/evo-eek",
  component: EvoEek,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
An energy efficiency class graphic that displays a rating within its supported range.

## Usage

\`\`\`tsx
import { EvoEek } from "@evo-web/react/eek";
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

export const Default: Story = {};
