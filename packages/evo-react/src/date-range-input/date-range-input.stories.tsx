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
  title: "Form Input/EvoDateRangeInputGroup",
  component: EvoDateRangeInputGroup,
  subcomponents: {
    EvoDateRangeInput,
    EvoDateRangeInputCalendarPopover,
  },
  argTypes: {
    locale: {
      control: "text",
      table: { defaultValue: { summary: 'navigator.language || "en-US"' } },
    },
    collapseOnSelect: {
      control: "boolean",
    },
    open: {
      control: "boolean",
    },
    defaultOpen: {
      control: "boolean",
    },
    popoverStrategy: {
      control: "select",
      options: ["absolute", "fixed"],
      table: {
        category: "Calendar popover",
        defaultValue: { summary: "absolute" },
      },
    },
    disabled: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
    a11yOpenPopoverText: {
      type: { name: "string", required: true },
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
    a11yOpenPopoverText: "Choose purchase date range",
    startFloatingLabel: "Purchase date from",
    endFloatingLabel: "Purchase date to",
    calendarPopover: {
      today: "2024-01-05",
    },
    popoverStrategy: "absolute",
  },
};

export default meta;
type Story = StoryObj<DateRangeInputStoryArgs>;

/** Coordinates localized start and end fields with a shared range calendar. */
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
          start: "Start of purchase date range",
          in: "Within purchase date range",
          end: "End of purchase date range",
        }}
      />
    </EvoDateRangeInputGroup>
  ),
};
