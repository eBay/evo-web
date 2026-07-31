import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoBadge } from "./badge";

const meta: Meta<typeof EvoBadge> = {
  title: "graphics & icons/evo-badge",
  component: EvoBadge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A badge component that displays a numeric count.

## Usage

\`\`\`tsx
import { EvoBadge } from "@evo-web/react/badge";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    number: {
      control: "number",
    },
    type: {
      control: "inline-radio",
      options: ["menu", "icon"],
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
    },
  },
  args: {
    number: 5,
    a11yText: "5 unread items",
  },
};

export default meta;

type Story = StoryObj<typeof EvoBadge>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    number: undefined,
    a11yText: "new",
  },
};
