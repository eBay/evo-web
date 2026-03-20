import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "./button";
import { EvoButtonCell } from "./button-cell";

const meta: Meta<typeof EvoButton> = {
  title: "buttons/evo-button",
  component: EvoButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A flexible button component that can render as either a \`<button>\` or \`<a>\` element based on the \`href\` prop.

## Usage

\`\`\`tsx
import { EvoButton } from "@evo-web/react";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    priority: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "none"],
      description: "Button priority level",
    },
    variant: {
      control: "select",
      options: ["standard", "destructive", "form"],
      description: "Button variant style",
    },
    size: {
      control: "select",
      options: ["small", "large"],
      description: "Button size",
    },
    bodyState: {
      control: "select",
      options: ["loading", "expand", "reset", "none"],
      description: "Button body state",
    },
    split: {
      control: "select",
      options: ["start", "end"],
      description: "Split button position",
    },
    fluid: {
      control: "boolean",
      description: "Full width button",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    partiallyDisabled: {
      control: "boolean",
      description: "Partially disabled (aria-disabled)",
    },
    transparent: {
      control: "boolean",
      description: "Transparent background",
    },
    borderless: {
      control: "boolean",
      description: "No border",
    },
    fixedHeight: {
      control: "boolean",
      description: "Fixed height",
    },
    truncate: {
      control: "boolean",
      description: "Truncate text with ellipsis",
    },
    href: {
      control: "text",
      description: "Link URL (renders as anchor)",
    },
    children: {
      control: "text",
      description: "Button text content",
    },
  },
  args: {
    priority: "primary",
    variant: "standard",
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof EvoButton>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const WithButtonCell: Story = {
  render: (args) => (
    <EvoButton {...args}>
      <EvoButtonCell style={{ justifyContent: "space-between" }}>
        <span>Select</span>
        <span>Any</span>
      </EvoButtonCell>
    </EvoButton>
  ),
};
