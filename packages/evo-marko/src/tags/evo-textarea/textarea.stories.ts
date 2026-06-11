import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Textarea, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledCode from "./examples/controlled.marko?raw";

export default {
  title: "form input/evo-textarea",
  component: Textarea,
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
      description: "The value of the textarea",
    },
    size: {
      type: "string",
      options: ["regular (default)", "large"],
      control: "inline-radio",
      description: "If large, renders larger sized textarea.",
    },
    fluid: {
      type: "boolean",
      control: "boolean",
      description: "Textarea fills 100% of its container width.",
    },
    opaqueLabel: {
      type: "boolean",
      control: "boolean",
      description:
        "Only works with floating label. If set, then background is obscured of the floating label. Used to prevent label overlap",
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
    invalid: {
      type: "boolean",
      control: "boolean",
      description: "Indicates a field-level error with red border",
    },
    ["<textarea> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<textarea>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#textarea-valuechange)",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledCode,
);
