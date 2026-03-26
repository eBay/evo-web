import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Listbox, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledTemplateCode from "./examples/controlled.marko?raw";
import WithDescriptionTemplate from "./examples/with-description.marko";
import WithDescriptionTemplateCode from "./examples/with-description.marko?raw";

export default {
  title: "building blocks/evo-listbox",
  component: Listbox,
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
    listSelection: {
      type: "string",
      options: ["manual (default)", "auto"],
      control: "inline-radio",
      description:
        "If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down",
    },
    name: {
      type: "string",
      control: "text",
      description: "Used for the `name` attribute of the native `<select>`",
    },
    a11ySelectedText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "Localized text to be read by screen readers when an option is selected",
      table: {
        defaultValue: {
          summary: "selected",
        },
      },
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
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
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
