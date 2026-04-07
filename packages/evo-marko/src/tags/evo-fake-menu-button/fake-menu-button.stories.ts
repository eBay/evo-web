import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import IconTextTemplate from "./examples/icon-with-text.marko";
import IconTextCode from "./examples/icon-with-text.marko?raw";
import CustomLabelTemplate from "./examples/custom-label.marko";
import CustomLabelCode from "./examples/custom-label.marko?raw";
import SeparatorTemplate from "./examples/separator.marko";
import SeparatorCode from "./examples/separator.marko?raw";
import OverflowTemplate from "./examples/overflow.marko";
import OverflowCode from "./examples/overflow.marko?raw";

export default {
  title: "buttons/evo-fake-menu-button",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    open: {
      controllable: true,
      type: "boolean",
      control: "boolean",
      description: "Allows control over the open state of the menu",
    },
    collapseOnSelect: {
      type: "boolean",
      control: "boolean",
      description: "When an option is selected, `open` is toggled to `false`.",
    },
    variant: {
      type: "string",
      options: ["button (default)", "form", "icon"],
      control: "select",
      table: { defaultValue: { summary: "button" } },
      description: "Controls the button style",
    },
    borderless: {
      type: "boolean",
      control: "boolean",
      description: 'Whether button has borders. Forces `variant="button"`',
    },
    priority: {
      type: "string",
      options: ["none (default)", "primary", "secondary", "delete", "tertiary"],
      control: "select",
      description: 'Button priority, only used when `variant="button"`',
    },
    size: {
      type: "string",
      options: ["regular (default)", "large", "small"],
      control: "inline-radio",
      description: "The size of the button",
    },
    transparent: {
      type: "boolean",
      control: "boolean",
      description: "Removes the background color of the button",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description:
        "Will disable the entire dropdown (also disables the button trigger) if set to true",
    },
    noToggleIcon: {
      type: "boolean",
      control: "boolean",
      description: "Hides the chevron toggle icon.",
    },
    a11yText: {
      type: "string",
      control: "text",
      description:
        "Accessible label for the button, especially for cases without visible text",
    },
    label: {
      description: "The prefix label. Rendered before the main content.",
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    reverse: {
      type: "boolean",
      control: "boolean",
      description: "Expand the menu flyout to the left",
    },
    strategy: {
      type: "string",
      options: ["absolute", "fixed"],
      control: "inline-radio",
      table: { defaultValue: { summary: "absolute" } },
      description:
        "Positioning strategy for the dropdown. Use fixed when dropdown is contained in an overflow and needs to be visible as you scroll the screen.",
    },
    flip: {
      type: "boolean",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
      description:
        "Adds flip to dropdown middleware. This allows the dropdown to flip automatically if it overflows",
    },
    fixWidth: {
      type: "boolean",
      control: "boolean",
      description: "Constrain items container width to button width",
    },
    item: {
      description:
        'A menu item. Can be a link (`href`) or a button (`type="button"`).',
      "@": {
        href: {
          type: "string",
          control: "text",
          description: "URL for the link item. Omit for button items.",
        },
        type: {
          type: "string",
          control: { type: "select" },
          options: ["button", "submit"],
          description:
            'Set to `"button"` or `"submit"` to render a `<button>` instead of an `<a>`',
        },
        current: {
          type: "boolean",
          control: "boolean",
          description:
            "Whether the item represents the current page (sets `aria-current`)",
        },
        badgeNumber: {
          type: "number",
          control: "number",
          description: "Number to display in a badge",
        },
        disabled: {
          type: "boolean",
          control: "boolean",
          description: "Whether the item is disabled",
        },
        separator: {
          type: "boolean",
          control: "boolean",
          description:
            "When `true`, renders a visual separator instead of a menu item",
        },
        ["<a> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through to `<@item>`",
        },
      },
    },
    ["<span> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const IconText = buildExtensionTemplate(IconTextTemplate, IconTextCode);
export const CustomLabel = buildExtensionTemplate(
  CustomLabelTemplate,
  CustomLabelCode,
);
export const Separator = buildExtensionTemplate(
  SeparatorTemplate,
  SeparatorCode,
);
export const Overflow = buildExtensionTemplate(OverflowTemplate, OverflowCode);
