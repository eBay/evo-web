import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoDateInput, EvoDateInputCalendarPopover } from "./index";
import type {
  EvoDateInputCalendarPopoverProps,
  EvoDateInputProps,
} from "./types";

type DateInputStoryArgs = EvoDateInputProps & {
  calendarPopover?: Omit<
    EvoDateInputCalendarPopoverProps,
    "a11yNavigateText" | "strategy"
  >;
  popoverStrategy?: EvoDateInputCalendarPopoverProps["strategy"];
};

const meta: Meta<DateInputStoryArgs> = {
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
import {
  EvoDateInput,
  EvoDateInputCalendarPopover,
} from "@evo-web/react/date-input";
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
    popoverStrategy: {
      control: "select",
      options: ["absolute", "fixed"],
      table: { category: "Calendar popover" },
    },
    disabled: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
    a11yOpenPopoverText: {
      control: "text",
    },
    floatingLabel: {
      control: "text",
    },
    calendarPopover: {
      control: "object",
      table: { category: "Calendar popover" },
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
    a11yOpenPopoverText: "Open calendar",
    floatingLabel: "Date",
    calendarPopover: {
      today: "2024-01-05",
    },
    popoverStrategy: "absolute",
  },
};

export default meta;
type Story = StoryObj<DateInputStoryArgs>;

export const Default: Story = {
  render: ({ calendarPopover, popoverStrategy, ...args }) => (
    <EvoDateInput {...args}>
      <EvoDateInputCalendarPopover
        {...calendarPopover}
        strategy={popoverStrategy}
        a11yNavigateText={(month, direction) =>
          `${direction === "prev" ? "Previous" : "Next"} ${month}`
        }
      />
    </EvoDateInput>
  ),
};
