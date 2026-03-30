import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Select, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import WithLabelTemplate from "./examples/external-label.marko";
import WithLabelCode from "./examples/external-label.marko?raw";
import InFormTemplate from "./examples/in-form.marko";
import InFormCode from "./examples/in-form.marko?raw";
import DisabledTemplate from "./examples/disabled-with-label.marko";
import DisabledCode from "./examples/disabled-with-label.marko?raw";

export default {
  title: "form input/evo-select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    option: {
      description: "An option in the `<select>`.",
      "@": {
        optgroup: {
          type: "string",
          control: "text",
          description:
            "If present, this option will be placed inside an `<optgroup>` tag.",
        },
        ["<option> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<option>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option) will be passed through",
        },
      },
    },
    floatingLabel: {
      type: "string",
      control: "text",
      description:
        "Adds a floating label. For it to float down, the first option must have a nullable value.",
    },
    size: {
      type: "string",
      options: ["regular (default)", "large"],
      control: "text",
      description: "Optionally change size of the component.",
    },
    borderless: {
      type: "boolean",
      control: "boolean",
      description: "Removes borders of the button",
    },
    fluid: {
      type: "boolean",
      control: "boolean",
      description: "Select takes 100% of the container width",
    },
    value: {
      controllable: true,
      type: "string",
      control: "text",
      description:
        "Marko [adds `value` to the native `<select>` tag](https://markojs.com/docs/reference/native-tag#select).",
    },
    ["<select> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<select>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const WithLabel = buildExtensionTemplate(
  WithLabelTemplate,
  WithLabelCode,
);
export const InForm = buildExtensionTemplate(InFormTemplate, InFormCode);
export const Disabled = buildExtensionTemplate(DisabledTemplate, DisabledCode);
