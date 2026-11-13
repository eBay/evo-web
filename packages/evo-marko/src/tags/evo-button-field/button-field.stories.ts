import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import ButtonField, { type Input } from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
  title: "buttons/evo-button-field",
  component: ButtonField,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    size: {
      type: "string",
      options: ["regular (default)", "large", "small"],
      control: "inline-radio",
      description: "The size of the button",
    },
    transparent: {
      type: "boolean",
      description: "Removes the border",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    truncate: {
      type: "boolean",
      description:
        "truncates text to single line with ellipsis when text overflows",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      type: "boolean",
      description: "Disabled state",
      table: { defaultValue: { summary: "false" } },
    },
    ["<button> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);
