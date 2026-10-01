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
      control: "select",
      description:
        "Should only be standalone when it is clear contextually that this is a link, regardless of styles",
      table: { defaultValue: { summary: "inline" } },
    },
    type: {
      type: "string",
      options: ["button", "submit", "reset"],
      control: "select",
      description: "The button type",
      table: { defaultValue: { summary: "button" } },
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Whether the fake link is disabled",
    },
    ["<button> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
