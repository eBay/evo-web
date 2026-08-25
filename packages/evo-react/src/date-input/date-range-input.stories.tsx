import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoDateRangeInput } from "./date-range-input";

const meta: Meta<typeof EvoDateRangeInput> = {
  title: "form input/evo-date-range-input",
  component: EvoDateRangeInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A start and end date field that formats typed values by locale and opens a range calendar popover.

## Usage

\`\`\`tsx
import { EvoDateRangeInput } from "@evo-web/react/date-input";
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
    startInput: {
      control: "object",
    },
    endInput: {
      control: "object",
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
    startInput: {
      floatingLabel: "Start",
    },
    endInput: {
      floatingLabel: "End",
    },
  },
};

export default meta;
type Story = StoryObj<typeof EvoDateRangeInput>;

export const Default: Story = {};
