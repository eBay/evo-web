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
      description: "Used as the number to be placed in the badge",
    },
    type: {
      control: "inline-radio",
      options: ["menu", "icon"],
      description:
        "The badge type. Omit for the default image badge (role='img').",
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'A descriptive label of what the badge represents (e.g. "5 unread items"). Pass `null` explicitly _only_ if alternative accessibility information is present.',
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
