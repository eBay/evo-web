import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControllableTemplate from "./examples/controllable.marko";
import ControllableCode from "./examples/controllable.marko?raw";
import WithLinksTemplate from "./examples/with-links.marko";
import WithLinksCode from "./examples/with-links.marko?raw";

export default {
  title: "building blocks/evo-calendar",
  component: Component,
  parameters: {
    docs: {
      description: { component: Readme },
    },
  },
  argTypes: {
    selectMode: {
      control: "select",
      options: [undefined, "day", "range"],
      description:
        'When set, day cells render as `<button>` elements for date selection. `"day"` selects a single date; `"range"` selects a start/end range. Omit for a non-interactive calendar.',
    },
    numMonths: {
      type: "number",
      control: "number",
      description: "Number of months to display simultaneously.",
      table: { defaultValue: { summary: "1" } },
    },
    locale: {
      type: "string",
      control: "text",
      description:
        "BCP 47 locale string used for month/weekday labels and first day of week.",
      table: { defaultValue: { summary: "navigator.language || 'en-US'" } },
    },
    today: {
      type: "string",
      control: "text",
      description:
        "Override the date the calendar treats as today (`YYYY-MM-DD`). Defaults to the current local date.",
    },
    selected: {
      controllable: true,
      control: "object",
      description:
        "The selected date(s). Accepts a single `DayISO` string or a `{ from: DayISO; to: DayISO }` range object.",
    },
    viewStart: {
      controllable: true,
      type: "string",
      control: "text",
      description:
        "The first displayed month (`YYYY-MM`). Defaults to the month containing `today`.",
    },
    disable: {
      control: "object",
      description:
        "Config for disabling dates: `{ before?: DayISO, after?: DayISO, weekdays?: number[], list?: DayISO[], callback?: (iso) => boolean }`. Weekdays: 0=Sun … 6=Sat.",
    },
    linkBuilder: {
      control: false,
      description:
        "Function `(iso: DayISO) => string | false | null | undefined` that returns an href for each day when `selectMode` is not set. A falsy return renders a `<span>`.",
    },
    a11yNavigateText: {
      control: false,
      description:
        "Function `(monthName: string, dir: 'next' | 'prev') => string` returning an accessible label for the prev/next navigation buttons. **Its presence enables the navigation header.**",
    },
    a11yTodayText: {
      type: "string",
      control: "text",
      description:
        "Clipped text appended to today's cell for screen readers (non-interactive calendars).",
      table: { defaultValue: { summary: "today" } },
    },
    a11yDisabledText: {
      type: "string",
      control: "text",
      description:
        "Clipped text appended to disabled cells for screen readers (non-interactive calendars).",
      table: { defaultValue: { summary: "disabled" } },
    },
    a11ySelectedText: {
      type: "string",
      control: "text",
      description:
        "Clipped text appended to selected cells for screen readers (non-interactive calendars).",
      table: { defaultValue: { summary: "selected" } },
    },
    a11yRangeText: {
      control: "object",
      description:
        "Clipped text for range cells. Object with `start`, `end`, and `in` keys. Required when a range is or will be selected.",
      table: {
        defaultValue: {
          summary:
            '{ start: "start of range", end: "end of range", in: "in range" }',
        },
      },
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to the calendar root element.",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const Controllable = buildExtensionTemplate(
  ControllableTemplate,
  ControllableCode,
);
export const WithLinks = buildExtensionTemplate(
  WithLinksTemplate,
  WithLinksCode,
);
