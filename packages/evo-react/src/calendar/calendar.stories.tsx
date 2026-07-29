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
    },
    locale: {
      type: "string",
      control: "text",
      table: { defaultValue: { summary: "navigator.language || 'en-US'" } },
    },
    today: {
      type: "string",
      control: "text",
    },
    selected: {
      control: "object",
    },
    defaultSelected: {
      control: "object",
    },
    visibleMonthCount: {
      type: "number",
      control: "number",
      table: { defaultValue: { summary: "1" } },
    },
    visibleMonth: {
      type: "string",
      control: "text",
    },
    defaultVisibleMonth: {
      type: "string",
      control: "text",
    },
    disable: {
      control: "object",
    },
    getDayHref: {
      control: false,
    },
    dayLinkAs: {
      control: false,
    },
    a11yNavigateText: {
      control: false,
    },
    a11yTodayText: {
      type: "string",
      control: "text",
    },
    a11yDisabledText: {
      type: "string",
      control: "text",
    },
    a11ySelectedText: {
      type: "string",
      control: "text",
    },
    a11yRangeText: {
      control: "object",
    },
    onSelectedChange: {
      action: "onSelectedChange",
      table: { category: "Events" },
    },
    onVisibleMonthChange: {
      action: "onVisibleMonthChange",
      table: { category: "Events" },
    },
  },
  args: {
    selectMode: "day",
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
