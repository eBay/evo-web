import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Button, { type Input } from "./index.marko";
import Readme from "./README.md";
import ButtonTemplate from "./examples/button.marko";
import ButtonTemplateCode from "./examples/button.marko?raw";

export default {
  title: "buttons/evo-button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    href: {
      description: "URL for link behavior (switches to anchor tag)",
    },
    size: {
      type: "string",
      options: ["regular (default)", "large", "small"],
      control: "inline-radio",
      description: "The size of the button",
    },
    appearance: {
      type: "string",
      options: ["primary", "secondary", "tertiary", "borderless", "form"],
      control: "inline-radio",
      description: "Button appearance",
      table: { defaultValue: { summary: "secondary" } },
    },
    fluid: {
      type: "boolean",
      description: "If `true`, button will fill 100% of the container width.",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    destructive: {
      type: "boolean",
      description: "Destructive styling",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    a11yLoadingText: {
      type: "string",
      description:
        "Localized aria label for the loading state. Setting it shows the progress spinner.",
      control: "text",
    },
    disabled: {
      type: "boolean",
      description: "Disabled state",
      table: { defaultValue: { summary: "false" } },
    },
    partiallyDisabled: {
      type: "boolean",
      description: "programmatically disabled, but remains keyboard focusable",
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
    split: {
      type: "string",
      options: ["none (default)", "start", "end"],
      control: "inline-radio",
      description: "Apply split button styles.",
    },
    ["<button> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  ButtonTemplate,
  ButtonTemplateCode,
);
