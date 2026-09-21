import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControllableTemplate from "./examples/controllable.marko";
import ControllableCode from "./examples/controllable.marko?raw";

export default {
  title: "form input/evo-date-input",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    value: {
      controllable: true,
      type: "string",
      control: "text",
      description:
        'The committed date as `YYYY-MM-DD`, or `""` when the field is empty',
    },
    open: {
      controllable: true,
      type: "boolean",
      control: "boolean",
      description: "Whether the calendar popover is showing",
    },
    locale: {
      type: "string",
      control: "text",
      description:
        "BCP 47 language tag used to parse, format, and label dates. Defaults to `navigator.language`.",
    },
    a11yOpenPopoverText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "Accessible label for the button that opens the calendar popover",
      table: { defaultValue: { summary: "open calendar" } },
    },
    collapseOnSelect: {
      type: "boolean",
      control: "boolean",
      description: "Closes the calendar after a selection",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Disables the input and the calendar button",
    },
    readonly: {
      type: "boolean",
      control: "boolean",
      description: "Prevents typing and calendar selection",
    },
    invalid: {
      type: "boolean",
      control: "boolean",
      description: "Indicates a field-level error with red border",
    },
    strategy: {
      type: "string",
      options: ["absolute (default)", "fixed"],
      control: "inline-radio",
      description: "Positioning strategy for the calendar popover",
    },
    onInvalidDate: {
      description:
        "Called with `(event, target, value, index)` when the field blurs with text that cannot be parsed as a date",
    },
    input: {
      description: "Attributes forwarded to the internal `evo-input` field",
      "@": {},
    },
    calendar: {
      description: "Attributes forwarded to the internal `evo-calendar`",
      "@": {},
    },
    ["<span> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to the root element",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const Controllable = buildExtensionTemplate(
  ControllableTemplate,
  ControllableCode,
  {
    a11yOpenPopoverText: "Open calendar",
  },
);
