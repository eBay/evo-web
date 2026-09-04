import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoInfotip } from "./infotip";
import { EvoInfotipHeading } from "./infotip-heading";

const meta: Meta<typeof EvoInfotip> = {
  title: "notices & tips/evo-infotip",
  component: EvoInfotip,
  subcomponents: { EvoInfotipHeading },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
An infotip provides additional information through a clickable information icon.

## Usage

\`\`\`tsx
import { EvoInfotip, EvoInfotipHeading } from "@evo-web/react/infotip";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
    },
    defaultOpen: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    onOpenChange: {
      action: "onOpenChange",
      table: { category: "Events" },
    },
    placement: {
      control: "select",
      options: [
        "top",
        "top-start",
        "top-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
      ],
      table: { defaultValue: { summary: "bottom" } },
    },
    offset: {
      control: "number",
      table: { defaultValue: { summary: "8" } },
    },
    flip: {
      control: "boolean",
      table: { defaultValue: { summary: "true" } },
    },
    shift: {
      control: "boolean",
      table: { defaultValue: { summary: "true" } },
    },
    disabled: {
      control: "boolean",
    },
    icon: {
      control: false,
    },
    a11yIconText: {
      control: "text",
      type: { name: "string", required: true },
      table: { defaultValue: { summary: "Help" } },
    },
    a11yCloseText: {
      control: "text",
      type: { name: "string", required: true },
      table: { defaultValue: { summary: "Dismiss infotip" } },
    },
  },
  args: {
    a11yIconText: "Important information",
    a11yCloseText: "Dismiss infotip",
  },
};

export default meta;
type Story = StoryObj<typeof EvoInfotip>;

export const Default: Story = {
  render: (args) => (
    <EvoInfotip {...args}>
      <EvoInfotipHeading>Heading</EvoInfotipHeading>
      <p>Content</p>
    </EvoInfotip>
  ),
};

export const WrappedParagraph: Story = {
  render: (args) => (
    <div style={{ width: 240 }}>
      <p>
        This paragraph wraps around the infotip button{" "}
        <EvoInfotip {...args} defaultOpen placement="bottom">
          <EvoInfotipHeading>Positioning check</EvoInfotipHeading>
          The infotip should remain aligned with its icon button as the
          paragraph wraps.
        </EvoInfotip>{" "}
        while the button itself remains a single box.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Resize the canvas and confirm that the infotip remains aligned with its icon button while the surrounding paragraph wraps.",
      },
    },
  },
};
