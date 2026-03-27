import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import NumberInput, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledCode from "./examples/controlled.marko?raw";
import WithLabelTemplate from "./examples/with-label.marko";
import WithLabelCode from "./examples/with-label.marko?raw";
import { buildExtensionTemplate } from "../../common/storybook/utils";

export default {
  title: "form input/evo-number-input",
  component: NumberInput,
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
      type: "number",
      control: "number",
      description: "The value of the input.",
    },
    min: {
      type: "number",
      control: "number",
      description: "The minimum value.",
    },
    max: {
      type: "number",
      control: "number",
      description: "The maximum value.",
    },
    a11yDeleteText: {
      type: "string",
      control: "text",
      description:
        "The accessibility text for the delete button. Required for a delete button to render",
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "Either this or `<@label>` is required. Renders text for screen readers",
    },
    label: {
      description:
        "Either this or `a11yText` is required. Renders label inside input if set",
      "@": {
        ["<label> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<label>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label) will be passed through",
        },
      },
    },
    onIncrement: {
      action: "onIncrement",
      description: "Triggered when increment button is clicked",
      table: { category: "Events" },
    },
    onDecrement: {
      action: "onDecrement",
      description: "Triggered when decrement button is clicked",
      table: { category: "Events" },
    },
    onDelete: {
      action: "onDelete",
      description: "Triggered when delete button is clicked",
      table: { category: "Events" },
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledCode,
);
export const WithLabel = buildExtensionTemplate(
  WithLabelTemplate,
  WithLabelCode,
);
