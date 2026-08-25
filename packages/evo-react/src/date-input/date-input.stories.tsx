import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoDateInput } from "./date-input";

const meta: Meta<typeof EvoDateInput> = {
  title: "form input/evo-date-input",
  component: EvoDateInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A date field that formats typed values by locale and opens a calendar popover.

## Usage

\`\`\`tsx
import { EvoDateInput } from "@evo-web/react/date-input";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    locale: {
      control: "text",
    },
    collapseOnSelect: {
      control: "boolean",
    },
    strategy: {
      control: "select",
      options: ["absolute", "fixed"],
    },
    disabled: {
      control: "boolean",
    },
    a11yOpenPopoverText: {
      control: "text",
    },
    floatingLabel: {
      control: "text",
    },
    calendar: {
      control: "object",
    },
    onChange: {
      action: "change",
      table: { category: "Events" },
    },
    onInvalidDate: {
      action: "invalid-date",
      table: { category: "Events" },
    },
    onOpenChange: {
      action: "open-change",
      table: { category: "Events" },
    },
  },
  args: {
    locale: "en-US",
    a11yOpenPopoverText: "open calendar",
    floatingLabel: "Date",
  },
};

export default meta;
type Story = StoryObj<typeof EvoDateInput>;

export const Default: Story = {};
