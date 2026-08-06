import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoProgressSpinner } from "./progress-spinner";

const meta: Meta<typeof EvoProgressSpinner> = {
  title: "progress/evo-progress-spinner",
  component: EvoProgressSpinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A progress spinner that communicates an ongoing operation.

## Usage

\`\`\`tsx
import { EvoProgressSpinner } from "@evo-web/react/progress-spinner";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "large"],
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
    },
  },
  args: {
    a11yText: "Loading",
  },
};

export default meta;

type Story = StoryObj<typeof EvoProgressSpinner>;

export const Default: Story = {};
