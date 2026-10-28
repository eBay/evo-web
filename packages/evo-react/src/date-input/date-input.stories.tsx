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
  title: "Form Input/EvoDateInput",
  component: EvoDateInput,
  subcomponents: {
    EvoDateInputCalendarPopover,
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
    a11yOpenPopoverText: "Choose purchase date",
    floatingLabel: "Purchase date",
    calendarPopover: {
      today: "2024-01-05",
    },
    popoverStrategy: "absolute",
  },
};

export default meta;
type Story = StoryObj<DateInputStoryArgs>;

/** Accepts localized date entry and synchronizes calendar selection. */
export const Default: Story = {
  render: ({ calendarPopover, popoverStrategy, ...args }) => (
    <EvoDateInput {...args}>
      <EvoDateInputCalendarPopover
        {...calendarPopover}
        strategy={popoverStrategy}
        a11yNavigateText={(month, direction) =>
          `${direction === "prev" ? "Previous" : "Next"} month, ${month}`
        }
      />
    </EvoDateInput>
  ),
};
