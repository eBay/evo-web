import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";

export default {
  title: "buttons/evo-fake-link",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    variant: {
      type: "string",
      options: ["inline", "standalone"],
      control: "inline-radio",
      description:
        "Adds the `standalone-link` class when `standalone`. Only use `standalone` where it is clear from context that this is a link",
      table: { defaultValue: { summary: "inline" } },
    },
    type: {
      type: "string",
      options: ["button", "submit", "reset"],
      control: "inline-radio",
      description: "The button type",
      table: { defaultValue: { summary: "button" } },
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Disabled state",
      table: { defaultValue: { summary: "false" } },
    },
    ["<button> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
