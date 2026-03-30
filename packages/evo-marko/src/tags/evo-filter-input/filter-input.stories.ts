import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import FilterInput, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ControlsTemplate from "./examples/controls.marko";
import ControlsTemplateCode from "./examples/controls.marko?raw";

export default {
  title: "form input/evo-filter-input",
  component: FilterInput,
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
      options: ["regular (default)", "small", "large"],
      control: "inline-radio",
      description: "Size variants. Controls the height of the component.",
    },
    a11yClearButtonText: {
      type: "string",
      control: "text",
      description:
        "Localized, text for the clear button. If not provided, then no clear button is rendered",
    },
    a11yControlsId: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "Required. This is the id of the element that this input controls, such as the list of filtered items.",
    },
    placeholder: {
      type: { name: "string", required: true },
      control: "text",
      table: {
        defaultValue: {
          summary: "Filter",
        },
      },
      description:
        "Required. Text to show when input is empty. This is not a label",
    },
    ["<evo-textbox> attributes" as any]: {
      description:
        "All attributes and event handlers from [the `<evo-textbox>` tag](?path=/docs/form-input-evo-textbox--docs) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    a11yClearButton: "Clear filter input",
    "aria-label": "Filter input",
  },
);

export const Controls = buildExtensionTemplate(
  ControlsTemplate,
  ControlsTemplateCode,
  {
    a11yClearButton: "Clear filter input",
    "aria-label": "Filter input",
    a11yControlsId: "filter-input-controls",
  },
);
