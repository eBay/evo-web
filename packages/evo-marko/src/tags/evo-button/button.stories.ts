import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Button, { type Input } from "./index.marko";
import Readme from "./README.md";
import ButtonTemplate from "./examples/button.marko";
import ButtonTemplateCode from "./examples/button.marko?raw";
import ExpandButtonTemplate from "./examples/expand-button.marko";
import ExpandButtonTemplateCode from "./examples/expand-button.marko?raw";

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
    priority: {
      type: "string",
      options: ["primary", "secondary", "tertiary", "none"],
      control: "inline-radio",
      description: "Button priority",
      table: { defaultValue: { summary: "secondary" } },
    },
    fluid: {
      type: "boolean",
      description: "If `true`, button will fill 100% of the container width.",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    borderless: {
      type: "boolean",
      description: "If `true`, border is removed.",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    bodyState: {
      type: "string",
      description:
        "when state is loading, adds progress spinner. when user interacts with button, reset should be called to reset aria-live state. default is none",
      options: ["none", "loading", "reset", "expand"],
      control: "inline-radio",
      table: { defaultValue: { summary: "none" } },
    },
    a11yLoadingText: {
      type: "string",
      description:
        "Localized aria label for button when `bodyState` is `loading`",
      control: "text",
    },
    disabled: {
      type: "boolean",
      description: "Disabled state",
      table: { defaultValue: { summary: "false" } },
    },
    variant: {
      type: "string",
      options: ["standard (default)", "destructive", "form"],
      control: "inline-radio",
      description: "Additional style transformations beyond `priority`.",
    },
    partiallyDisabled: {
      type: "boolean",
      description: "programmatically disabled, but remains keyboard focusable",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    transparent: {
      type: "boolean",
      description: "transparent background color (overrides `priority`).",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    fixedHeight: {
      type: "boolean",
      description: "fixes the height based on `size`",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    truncate: {
      type: "boolean",
      description:
        "used in conjunction with `fixedHeight`; truncates text to single line with ellipsis when text overflows",
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

export const ExpandButton = buildExtensionTemplate(
  ExpandButtonTemplate,
  ExpandButtonTemplateCode,
);
