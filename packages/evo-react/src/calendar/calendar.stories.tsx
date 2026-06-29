import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";
import { EvoCalendar } from "./calendar";
import type { EvoCalendarProps } from "./types";

const meta: Meta<EvoCalendarProps> = {
  title: "building blocks/evo-calendar",
  component: EvoCalendar as ComponentType<EvoCalendarProps>,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A calendar component for displaying and selecting dates or date ranges.

## Usage

\`\`\`tsx
import { EvoCalendar } from "@evo-web/react/calendar";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    selectMode: {
      control: "select",
      options: ["day", "range"],
      description:
        'When set, day cells render as `<button>` elements for date selection. `"day"` selects a single date; `"range"` selects a start/end range. Omit for a non-interactive calendar.',
    },
    visibleMonthCount: {
      type: "number",
      control: "number",
      description: "Number of months to display simultaneously.",
      table: { defaultValue: { summary: "1" } },
    },
    locale: {
      type: "string",
      control: "text",
      description: "BCP 47 locale string used for month and weekday labels.",
      table: { defaultValue: { summary: "navigator.language || 'en-US'" } },
    },
    today: {
      type: "string",
      control: "text",
      description:
        "Override the date the calendar treats as today (`YYYY-MM-DD`). Defaults to the current local date.",
    },
    selected: {
      control: "object",
      description:
        "The selected date. Accepts a single `DayISO` string in day mode or a `{ from: DayISO; to: DayISO }` range object in range mode.",
    },
    defaultSelected: {
      control: "object",
      description:
        "Initial uncontrolled selected value. Accepts a single `DayISO` string in day mode or a `{ from: DayISO; to: DayISO }` range object in range mode.",
    },
    visibleMonth: {
      type: "string",
      control: "text",
      description:
        "Controlled first displayed month (`YYYY-MM`). Defaults to the month containing `today`.",
    },
    defaultVisibleMonth: {
      type: "string",
      control: "text",
      description: "Initial uncontrolled first displayed month (`YYYY-MM`).",
    },
    disable: {
      control: "object",
      description:
        "Config for disabling dates: `{ before?: DayISO, after?: DayISO, weekdays?: number[], list?: DayISO[], callback?: (iso) => boolean }`. Weekdays: 0=Sun … 6=Sat.",
    },
    getDayHref: {
      control: false,
      description:
        "Function `(iso: DayISO) => string | false | null | undefined` that marks native anchor days when `selectMode` is not set. A falsy return renders a `<span>`; omit `getDayHref` if `dayLinkAs` should render every non-disabled day.",
    },
    dayLinkAs: {
      control: false,
      description:
        "Custom component for static day links. Receives `{ iso, href, className, children }`, so routing links can derive their destination from `iso` or use `href` from `getDayHref`. When paired with `getDayHref`, only days with a truthy `getDayHref` result use `dayLinkAs`.",
    },
    a11yNavigateText: {
      control: false,
      description:
        "Function `(monthName: string, dir: 'next' | 'prev') => string` returning an accessible label for the prev/next navigation buttons. Its presence enables the navigation header.",
    },
    a11yTodayText: {
      type: "string",
      control: "text",
      description:
        "Clipped text appended to today's cell for screen readers in non-interactive calendars.",
    },
    a11yDisabledText: {
      type: "string",
      control: "text",
      description:
        "Clipped text appended to disabled cells for screen readers in non-interactive calendars.",
    },
    a11ySelectedText: {
      type: "string",
      control: "text",
      description:
        "Clipped text appended to selected cells for screen readers in non-interactive calendars.",
    },
    a11yRangeText: {
      control: "object",
      description:
        "Clipped text for range cells. Object with `start`, `end`, and `in` keys. Required when a range is or will be selected.",
    },
    onSelectedChange: {
      action: "onSelectedChange",
      description:
        "Triggered when an interactive calendar selects a day or range.",
      table: { category: "Events" },
    },
    onVisibleMonthChange: {
      action: "onVisibleMonthChange",
      description:
        "Triggered when month navigation changes the first displayed month.",
      table: { category: "Events" },
    },
  },
  args: {
    selectMode: "day",
    today: "2025-01-15",
    visibleMonthCount: 2,
    a11yNavigateText: (month, dir) =>
      `${dir === "prev" ? "Previous" : "Next"}: ${month}`,
    a11yRangeText: {
      start: "start of range",
      end: "end of range",
      in: "in range",
    },
  },
};

export default meta;
type Story = StoryObj<EvoCalendarProps>;

export const Default: Story = {};
