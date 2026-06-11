import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Input, { type Input as InputType } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import WithLabelTemplate from "./examples/external-label.marko";
import WithLabelCode from "./examples/external-label.marko?raw";
import DisabledTemplate from "./examples/external-label-disabled.marko";
import DisabledCode from "./examples/external-label-disabled.marko?raw";
import FloatingLabelTemplate from "./examples/floating-label.marko";
import FloatingLabelCode from "./examples/floating-label.marko?raw";
import FloatingLabelAutocompleteTemplate from "./examples/floating-label-autocomplete.marko";
import FloatingLabelAutocompleteCode from "./examples/floating-label-autocomplete.marko?raw";
import WithBothIconsTemplate from "./examples/both-icons.marko";
import WithBothIconsCode from "./examples/both-icons.marko?raw";
import WithPostfixIconTemplate from "./examples/postfix-icon.marko";
import WithPostfixIconCode from "./examples/postfix-icon.marko?raw";
import WithPrefixIconTemplate from "./examples/prefix-icon.marko";
import WithPrefixIconCode from "./examples/prefix-icon.marko?raw";
import FullyDecoratedTemplate from "./examples/fully-decorated.marko";
import FullyDecoratedCode from "./examples/fully-decorated.marko?raw";

export default {
  title: "form input/evo-input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    value: {
      controllable: true,
      type: "string",
      control: "text",
      description: "The value of the input",
    },
    inputSize: {
      type: "string",
      options: ["regular (default)", "large"],
      control: "inline-radio",
      description: "If large, renders larger sized input.",
    },
    fluid: {
      type: "boolean",
      control: "boolean",
      description: "Input fills 100% of its container width.",
    },
    floatingLabel: {
      type: "string",
      control: "text",
      description: "If set then shows this text as the floating label.",
    },
    floatingLabelStatic: {
      type: "boolean",
      control: "boolean",
      description: 'Floating label will _always_ stay in the "up" position',
    },
    prefixIcon: {
      description:
        "An `<evo-icon-*>` to show before the input. Cannot be used with floatingLabel.",
      "@": {},
    },
    prefixText: {
      description: "Text to show before the input.",
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    postfixText: {
      description: "Text to show after the input.",
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    postfixIcon: {
      description:
        "An `<evo-icon-*>` to show after the input. Cannot be used with floatingLabel.",
      "@": {
        a11yText: {
          type: "string",
          control: "text",
          description:
            "A descriptive label for the postfix icon button. If set, the icon becomes clickable and wrapped with a `<button>` tag.",
        },
        "aria-label": {
          type: "string",
          control: "text",
          description:
            "If present, the icon will be clickable and wrapped with a `<button>` tag",
        },
        ["<button> attributes" as any]: {
          description:
            "If `aria-label` is present, all attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
        },
      },
    },
    invalid: {
      type: "boolean",
      control: "boolean",
      description: "Indicates a field-level error with red border",
    },
    ["<input> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)",
    },
  },
} satisfies Meta<InputType>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const WithLabel = buildExtensionTemplate(
  WithLabelTemplate,
  WithLabelCode,
);
export const Disabled = buildExtensionTemplate(DisabledTemplate, DisabledCode);
export const FloatingLabel = buildExtensionTemplate(
  FloatingLabelTemplate,
  FloatingLabelCode,
);
export const FloatingLabelAutocomplete = buildExtensionTemplate(
  FloatingLabelAutocompleteTemplate,
  FloatingLabelAutocompleteCode,
);
export const WithPrefixIcon = buildExtensionTemplate(
  WithPrefixIconTemplate,
  WithPrefixIconCode,
);
export const WithPostfixIcon = buildExtensionTemplate(
  WithPostfixIconTemplate,
  WithPostfixIconCode,
);
export const WithBothIcons = buildExtensionTemplate(
  WithBothIconsTemplate,
  WithBothIconsCode,
);
export const FullyDecorated = buildExtensionTemplate(
  FullyDecoratedTemplate,
  FullyDecoratedCode,
);
