import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControllableTemplate from "./examples/controllable.marko";
import ControllableCode from "./examples/controllable.marko?raw";
import AsyncFilteringTemplate from "./examples/async-filtering.marko";
import AsyncFilteringCode from "./examples/async-filtering.marko?raw";

export default {
  title: "form input/evo-combobox",
  component: Component,
  parameters: {
    docs: {
      description: { component: Readme },
    },
  },
  argTypes: {
    autocomplete: {
      type: "string",
      options: ["none", "list"],
      control: "inline-radio",
      description:
        "`list` filters displayed options to those matching the typed text. `none` always shows all options.",
    },
    listSelection: {
      type: "string",
      options: ["automatic", "manual"],
      control: "inline-radio",
      description:
        "Whether arrow-key navigation writes the highlighted option text into the input automatically.",
    },
    floatingLabel: {
      type: "string",
      control: "text",
      description:
        "Floating label text shown above the input when focused or filled.",
    },
    borderless: {
      type: "boolean",
      control: "boolean",
      description: "Removes the control border.",
    },
    fluid: {
      type: "boolean",
      control: "boolean",
      description: "Stretches the component to fill its container.",
    },
    strategy: {
      type: "string",
      options: ["absolute", "fixed"],
      control: "select",
      description: "Listbox CSS position strategy (`absolute` by default).",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Disables the input.",
    },
    value: {
      controllable: true,
      type: "string",
      control: "text",
      description: "Current input value. Two-way bindable via `:=`.",
    },
    open: {
      controllable: true,
      type: "boolean",
      control: "boolean",
      description: "Controls listbox visibility. Two-way bindable via `:=`.",
    },
    option: {
      description: "Repeatable `@option` attribute tag.",
      "@": {
        text: {
          type: { name: "string", required: true },
          control: "text",
          description: "Display text for the option.",
        },
        value: {
          type: "string",
          control: "text",
          description: "Optional value; defaults to `text`.",
        },
        sticky: {
          type: "boolean",
          control: "boolean",
          description: "Always shown regardless of `autocomplete` filter.",
        },
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) will be passed through to `<@option>`.",
        },
      },
    },
    button: {
      description:
        "Optional `@button` attr tag — renders an icon button inside the control.",
      "@": {
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) will be passed through to `<@button>`.",
        },
      },
    },
    ["<input> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) will be passed through.",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode, {
  "aria-label": "Campaign",
  placeholder: "Choose a campaign",
});

export const Controllable = buildExtensionTemplate(
  ControllableTemplate,
  ControllableCode,
  { "aria-label": "Campaign", placeholder: "Choose a campaign" },
);

export const AsyncFiltering = buildExtensionTemplate(
  AsyncFilteringTemplate,
  AsyncFilteringCode,
  { placeholder: "Type a country name..." },
);
