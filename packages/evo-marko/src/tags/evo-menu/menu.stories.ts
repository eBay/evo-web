import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Menu, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import RadioTemplate from "./examples/radio.marko";
import RadioTemplateCode from "./examples/radio.marko?raw";
import CheckboxTemplate from "./examples/checkbox.marko";
import CheckboxTemplateCode from "./examples/checkbox.marko?raw";
import BadgedTemplate from "./examples/badged.marko";
import BadgedTemplateCode from "./examples/badged.marko?raw";
import FilterTemplate from "./examples/filter.marko";
import FilterTemplateCode from "./examples/filter.marko?raw";
import SpritesTemplate from "./examples/sprites.marko";
import SpritesTemplateCode from "./examples/sprites.marko?raw";
import TypeaheadTemplate from "./examples/typeahead.marko";
import TypeaheadTemplateCode from "./examples/typeahead.marko?raw";
import SeparatorTemplate from "./examples/separator.marko";
import SeparatorTemplateCode from "./examples/separator.marko?raw";
import FooterTemplate from "./examples/footer.marko";
import FooterTemplateCode from "./examples/footer.marko?raw";

export default {
  title: "building blocks/evo-menu",
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    selected: {
      controllable: true,
      description:
        "If present, indicates the selected item(s) in the menu and automatically updates them on click. Use a single value for single-select, or an array for multi-select. Compares with `value` is present in `@option`, otherwise index.",
      table: { type: { summary: "number | string | (number | string)[]" } },
    },
    item: {
      description: "Attribute tag representing a menu item",
      "@": {
        value: {
          type: "string",
          control: "text",
          description: "Used for tracking the selected item",
        },
        separator: {
          type: "boolean",
          control: "boolean",
          description: "Render as a separator instead of an item",
        },
        badgeNumber: {
          type: "number",
          control: "number",
          description:
            "Displays [an `<evo-badge>` component](?path=/docs/graphics-icons-evo-badge--docs) after the content containing this number.",
        },
        disabled: {
          type: "boolean",
          control: "boolean",
          description:
            "Item will not be clickable, and keyboard navigation will skip over it",
        },
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@item>`",
        },
      },
    },
    variant: {
      type: "string",
      options: ["none (default)", "filter"],
      control: "inline-radio",
      description:
        'Setting to "filter" changes styles to align with filter components',
    },
    classPrefix: {
      type: "string",
      control: "text",
      description: "Prefix built-in class names",
    },
    typeaheadTimeoutLength: {
      type: "number",
      control: "number",
      description:
        "Time (ms) that users need to wait between typing characters for typeahead to reset",
    },
    reverse: {
      type: "boolean",
      control: "boolean",
      description: "Show elements right-to-left instead of left-to-right",
    },
    fixed: {
      type: "boolean",
      control: "boolean",
      description: "Fixes menu in place",
    },
    fixWidth: {
      type: "boolean",
      control: "boolean",
      description: "Fix the dropdown width to match the button width",
    },
    footerButton: {
      description:
        'The footer content, rendered [an `<evo-button>` component](?path=/docs/buttons-evo-button--docs). Generally used only when `variant="filter"`.',
      "@": {
        ["<evo-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-button>` component](?path=/docs/buttons-evo-button--docs) will be passed through to `<@footerButton>`",
        },
      },
    },
    ["<span> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
    },
  },
} satisfies Meta<Input<any>>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const SingleSelect = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    selected: 0,
  },
);
export const MultiSelect = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    selected: [0],
  },
);

export const Typeahead = buildExtensionTemplate(
  TypeaheadTemplate,
  TypeaheadTemplateCode,
);

export const Badged = buildExtensionTemplate(
  BadgedTemplate,
  BadgedTemplateCode,
);

export const Sprites = buildExtensionTemplate(
  SpritesTemplate,
  SpritesTemplateCode,
);

export const Footer = buildExtensionTemplate(
  FooterTemplate,
  FooterTemplateCode,
);
