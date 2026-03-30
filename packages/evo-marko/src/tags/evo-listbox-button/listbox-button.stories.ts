import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import ListboxButton, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledTemplateCode from "./examples/controlled.marko?raw";
import WithDescriptionTemplate from "./examples/with-description.marko";
import WithDescriptionTemplateCode from "./examples/with-description.marko?raw";
import WithErrorTemplate from "./examples/with-error.marko";
import WithErrorTemplateCode from "./examples/with-error.marko?raw";

export default {
  title: "buttons/evo-listbox-button",
  component: ListboxButton,
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
      type: "string",
      control: "text",
      description:
        "The selected item in the list. Checks for equality with `value` in each `@option`",
    },
    open: {
      controllable: true,
      type: "boolean",
      control: "boolean",
      description: "Allows control over the open state of the listbox",
    },
    option: {
      description: "Attribute tag representing a list option",
      "@": {
        value: {
          type: { name: "string", required: true },
          control: "text",
          description:
            "Passed through to `value` of the underlying [HTML `<option>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option)",
        },
        disabled: {
          type: "boolean",
          control: "boolean",
          description:
            "Option will not be clickable, and keyboard navigation will skip over it",
        },
        description: {
          description:
            "An optional description, rendered beneath the tag content as a `<span>`",
          "@": {
            ["<span> attributes" as any]: {
              description:
                "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@description>`",
            },
          },
        },
        icon: {
          description: "An optional icon rendered at the start of the item",
          "@": {},
        },
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@option>`",
        },
      },
    },
    name: {
      type: "string",
      control: "text",
      description: "Used for the `name` attribute of the native `<select>`",
    },
    listSelection: {
      type: "string",
      options: ["manual (default)", "auto"],
      control: "inline-radio",
      description:
        "If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down",
    },
    prefixId: {
      type: "string",
      control: "text",
      description:
        "Id of an external element to use as the prefix label for the listbox button. Should not be used with `prefixLabel`",
    },
    unselectedText: {
      type: "string",
      control: "text",
      description:
        'The text to be shown when no options are selected. Default is "-". Cannot be used with `floating-label`',
      table: { defaultValue: { summary: "-" } },
    },
    variant: {
      type: "string",
      option: ["standard (default)", "form"],
      control: "inline-radio",
      description:
        "If `form`, changes appearance to match other form-specific components for visual consistency.",
    },
    truncate: {
      type: "boolean",
      control: "boolean",
      description:
        "Will truncate the text of the button onto a single line, and adds an ellipsis, when the buttons text overflows",
    },
    fluid: {
      type: "boolean",
      control: "boolean",
      description: "Expands the button to 100% width.",
    },
    strategy: {
      type: "string",
      options: ["absolute", "fixed"],
      control: "inline-radio",
      description:
        "Use fixed when dropdown is in contained in an overflow and needs to be visible as you scroll the screen.",
      table: { defaultValue: { summary: "absolute" } },
    },
    borderless: {
      type: "boolean",
      control: "boolean",
      description: "Removes button borders.",
    },
    floatingLabel: {
      type: "string",
      control: "text",
      description:
        "The label to add that floats to the top when item is selected. Cannot be used with `prefixLabel`",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Disables the button.",
    },
    buttonName: {
      type: "string",
      control: "text",
      description: "used for the `name` attribute of the native `<button>`.",
    },
    split: {
      type: "string",
      options: ["none (default)", "start", "end"],
      control: "inline-radio",
      description: "Applies split button styles to the component.",
    },
    invalid: {
      type: "boolean",
      control: "boolean",
      description:
        'Applies `aria-invalid="true"` to the button, which also adjusts styles.',
    },
    hasError: {
      type: "boolean",
      control: "boolean",
      description:
        "Indicates error state _without_ a11y. Prefer `invalid` unless other accessible elements of the UI also indicate an error state",
    },
    a11ySelectedText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "Localized text to be read by screen readers when an option is selected",
      table: { defaultValue: { summary: "selected" } },
    },
    a11yDescribedBy: {
      type: "string",
      control: "text",
      description:
        "The id of an element that describes the listbox button, applied as `aria-describedby` on the button.",
    },
    prefixLabel: {
      type: "string",
      control: "text",
      description:
        "The label to add before each selected item on the button. Cannot be used with `prefixId`",
    },
    postfixLabel: {
      type: "string",
      control: "text",
      description: "The label to add after each selected item on the button.",
    },
    collapseOnSelect: {
      type: "boolean",
      control: "boolean",
      description: "When an option is selected, `open` is toggled to `false`.",
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@option>`",
    },
  },
} satisfies Meta<Input<any>>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledTemplateCode,
);

export const withDescription = buildExtensionTemplate(
  WithDescriptionTemplate,
  WithDescriptionTemplateCode,
);

export const withError = buildExtensionTemplate(
  WithErrorTemplate,
  WithErrorTemplateCode,
);
