import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoProgressBar } from "./progress-bar";

const meta: Meta<typeof EvoProgressBar> = {
  title: "progress/evo-progress-bar",
  component: EvoProgressBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The progress bar gives an immediate, real-time visualisation of the current task completion status.

## Usage

\`\`\`tsx
import { EvoProgressBar } from "@evo-web/react/progress-bar";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: "number",
      description: "Current progress value. Omit for indeterminate progress.",
    },
    max: {
      control: "number",
      description: "Maximum progress value. Defaults to 100.",
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

export const Default: Story = {};
