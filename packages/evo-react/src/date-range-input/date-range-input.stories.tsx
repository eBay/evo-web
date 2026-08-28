import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  EvoDateRangeInput,
  EvoDateRangeInputCalendarPopover,
  EvoDateRangeInputGroup,
} from "./index";
import type {
  EvoDateRangeInputCalendarPopoverProps,
  EvoDateRangeInputGroupProps,
} from "./types";

type DateRangeInputStoryArgs = EvoDateRangeInputGroupProps & {
  startFloatingLabel?: string;
  endFloatingLabel?: string;
  calendarPopover?: Omit<
    EvoDateRangeInputCalendarPopoverProps,
    "a11yRangeText" | "a11yNavigateText" | "strategy"
  >;
  popoverStrategy?: EvoDateRangeInputCalendarPopoverProps["strategy"];
};

const meta: Meta<DateRangeInputStoryArgs> = {
  title: "form input/evo-date-range-input",
  component: EvoDateRangeInputGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A start and end date field that formats typed values by locale and opens a range calendar popover.

The children must be ordered as start field, end field, and calendar popover.

## Usage

\`\`\`tsx
import {
  EvoDateRangeInput,
  EvoDateRangeInputCalendarPopover,
  EvoDateRangeInputGroup,
} from "@evo-web/react/date-range-input";
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
    startFloatingLabel: {
      control: "text",
    },
    endFloatingLabel: {
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
    startFloatingLabel: "Start date",
    endFloatingLabel: "End date",
    calendarPopover: {
      today: "2024-01-05",
    },
    popoverStrategy: "absolute",
  },
};

export default meta;
type Story = StoryObj<DateRangeInputStoryArgs>;

export const Default: Story = {
  render: ({
    startFloatingLabel,
    endFloatingLabel,
    calendarPopover,
    popoverStrategy,
    ...args
  }) => (
    <EvoDateRangeInputGroup {...args}>
      <EvoDateRangeInput type="start" floatingLabel={startFloatingLabel} />
      <EvoDateRangeInput type="end" floatingLabel={endFloatingLabel} />
      <EvoDateRangeInputCalendarPopover
        {...calendarPopover}
        strategy={popoverStrategy}
        a11yNavigateText={(month, direction) =>
          `${direction === "prev" ? "Previous" : "Next"} ${month}`
        }
        a11yRangeText={{
          start: "Start of range",
          in: "In range",
          end: "End of range",
        }}
      />
    </EvoDateRangeInputGroup>
  ),
};
