import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControllableTemplate from "./examples/controllable.marko";
import ControllableCode from "./examples/controllable.marko?raw";

export default {
  title: "form input/evo-date-range-input",
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
      control: "object",
      description:
        'The committed range as `{ from?, to? }`, each `YYYY-MM-DD` or `""` when that side is empty',
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
    },
    collapseOnSelect: {
      type: "boolean",
      control: "boolean",
      description: "Closes the calendar after a complete range selection",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Disables both date fields and the calendar button",
    },
    readonly: {
      type: "boolean",
      control: "boolean",
      description: "Prevents typing and calendar selection",
    },
    onInvalidDate: {
      description:
        "Called with `{ value, index }` when either field blurs with text that cannot be parsed as a date (`index` 0 = start, 1 = end)",
    },
    input: {
      description:
        "Repeatable. Attributes forwarded to the internal `evo-input` fields: the first `<@input>` customizes the start field, the second the end field.",
      "@": {},
    },
    calendar: {
      description:
        "Attributes forwarded to the internal `evo-calendar`, plus `strategy` (`absolute` | `fixed`) for popover positioning",
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
