import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ControlsTemplate from "./examples/controls.marko";
import ControlsTemplateCode from "./examples/controls.marko?raw";

export default {
  title: "form input/evo-filter-input",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    size: {
      options: ["regular", "small", "large"],
      type: { category: "Options" },
      description:
        'either "regular" "small" or "large". If large, then renders larger sized textbox',
    },
    a11yClearButton: {
      type: {
        name: "string",
        required: true,
      },
      control: { type: "text" },
      description:
        "Localized, text for the clear button. If not provided, then no clear button is rendered",
    },
    a11yControlsId: {
      type: "string",
      control: { type: "text" },
      description:
        "Requied. This is the id of the element that this input controls, such as the list of filtered items.",
    },
    placeholder: {
      type: "string",
      control: { type: "text" },
      table: {
        defaultValue: {
          summary: "Filter",
        },
      },
      description:
        "Required. Text to show when input is empty. This is not a label",
    },
    onClear: {
      action: "onClear",
      type: "function",
      description: "Function that is called when textbox is cleared",
    },
    value: {
      control: { type: "text" },
      table: {
        category: "<input> attributes",
      },
    },
    "aria-label": {
      control: { type: "text" },
      table: {
        category: "<input> attributes",
      },
    },
    "other <input> attributes": {
      description:
        "All attributes from the [native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) may be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)",
      table: {
        category: "<input> attributes",
      },
    },
  },
};

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
