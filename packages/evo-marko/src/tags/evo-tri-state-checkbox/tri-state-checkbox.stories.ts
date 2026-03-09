import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledCode from "./examples/controlled.marko?raw";
import ControlledCheckedValuesTemplate from "./examples/controlled-checked-values.marko";
import ControlledCheckedValuesCode from "./examples/controlled-checked-values.marko?raw";
import WithLabelTemplate from "./examples/with-label.marko";
import DisabledTemplate from "./examples/disabled-with-label.marko";
import WithLabelCode from "./examples/with-label.marko?raw";
import DisabledCode from "./examples/disabled-with-label.marko?raw";

export default {
  title: "form input/evo-tri-state-checkbox",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    checked: {
      controllable: true,
      type: "string",
      options: ["false", "mixed", "true"],
      control: "inline-radio",
      description: "String enumeration of checkbox state.",
      table: { defaultValue: { summary: "false" } },
    },
    skipMixed: {
      type: "boolean",
      control: "boolean",
      description:
        "If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none.",
    },
    size: {
      type: "string",
      options: ["regular (default)", "large"],
      control: "inline-radio",
      description:
        "Sets the checkbox icon. Default is regular. (Note: The dimensions of the checkbox will not change, but only the icon)",
    },
    values: {
      description:
        'Used alongside `checkedValues` for a [controllable](https://markojs.com/docs/explanation/controllable-components) pattern that aligns with [Marko\'s `checkedValue` checkbox pattern](https://markojs.com/docs/reference/native-tag#input-typeradio-and-input-typecheckbox). List of _all_ "child" checkbox values',
      table: { type: { summary: "string[]" } },
    },
    checkedValues: {
      controllable: true,
      description:
        '**Must** be accompanied by `values` and `checkedValuesChange` (usually via [the `:=` bind syntax](https://markojs.com/docs/reference/language#shorthand-change-handlers-two-way-binding)). Leverages [Marko\'s `checkedValue` checkbox pattern](https://markojs.com/docs/reference/native-tag#input-typeradio-and-input-typecheckbox) for "select/deselect all" behavior',
      table: { type: { summary: "string[]" } },
    },
    ["<input> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)",
    },
  },
} satisfies Meta<Input>;

export const WithLabel = buildExtensionTemplate(
  WithLabelTemplate,
  WithLabelCode,
);

export const Disabled = buildExtensionTemplate(DisabledTemplate, DisabledCode);

export const ControlledCheckedValues = buildExtensionTemplate(
  ControlledCheckedValuesTemplate,
  ControlledCheckedValuesCode,
);

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledCode,
);

export const Isolated = buildExtensionTemplate(DefaultTemplate, DefaultCode);
