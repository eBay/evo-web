import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import SeparatorTemplate from "./examples/separator.marko";
import SeparatorCode from "./examples/separator.marko?raw";

export default {
  title: "building blocks/evo-fake-menu",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    classPrefix: {
      type: "string",
      control: "text",
      description:
        "A prefix to be added to all classes (used by parent components like menu-button)",
    },
    reverse: {
      type: "boolean",
      control: "boolean",
      description: "Whether menu displays in reverse order",
    },
    fixed: {
      type: "boolean",
      control: "boolean",
      description: "Whether the menu uses fixed positioning",
    },
    fixWidth: {
      type: "boolean",
      control: "boolean",
      description: "Constrain items to the width of the button",
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
        itemMatchesUrl: {
          type: "boolean",
          control: "boolean",
          description:
            'Used with `current`. When `false`, `aria-current` is set to `"true"` instead of `"page"`.',
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
export const Separator = buildExtensionTemplate(
  SeparatorTemplate,
  SeparatorCode,
);
