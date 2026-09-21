import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControllableTemplate from "./examples/controllable.marko";
import ControllableCode from "./examples/controllable.marko?raw";

export default {
  title: "form input/evo-chips-combobox",
  component: Component,
  parameters: {
    docs: {
      description: { component: Readme },
    },
  },
  argTypes: {
    fluid: {
      type: "boolean",
      control: "boolean",
      description: "Stretches the component to fill its container",
    },
    invalid: {
      type: "boolean",
      control: "boolean",
      description: "Indicates a field-level error with red border",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Disables the input and the chip delete buttons",
    },
    selected: {
      controllable: true,
      control: "object",
      description: "The selected chip values",
    },
    a11yDeleteButtonText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "Prefix for the `aria-label` of each chip's delete button; the chip text is appended to it",
      table: { defaultValue: { summary: "Remove" } },
    },
    option: {
      description: "Attribute tag representing a suggestion in the listbox",
      "@": {
        text: {
          type: { name: "string", required: true },
          control: "text",
          description: "Display text for the option",
        },
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
        },
      },
    },
    ["<input> attributes" as any]: {
      description:
        "All other attributes and event handlers are passed through the inner `<evo-combobox>` to [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input)",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode, {
  "aria-label": "Items",
  placeholder: "Add item",
});

export const Controllable = buildExtensionTemplate(
  ControllableTemplate,
  ControllableCode,
  { "aria-label": "Items", placeholder: "Add item" },
);
