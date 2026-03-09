import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
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
      options: ["false", "mixed", "true"],
      type: { category: "Options" },
      description:
        'Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depending on the checked state.',
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    checkedChange: {
      description:
        "Used to hoist `checked` with the [controllable](https://markojs.com/docs/explanation/controllable-components) pattern. Typically added implicitly by [`:=` bind syntax](https://markojs.com/docs/reference/language#shorthand-change-handlers-two-way-binding).",
      table: {
        defaultValue: {
          summary: "(open: boolean) => void",
        },
      },
    },
    skipMixed: {
      type: "boolean",
      control: { type: "boolean" },
      description:
        "If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none.",
    },
    size: {
      options: ["regular (default)", "large"],
      type: { category: "Options" },
      description:
        "Sets the checkbox icon. Default is regular. (Note: The dimensions of the checkbox will not change, but only the icon)",
      table: {
        defaultValue: {
          summary: "regular",
        },
      },
    },
    values: {
      description:
        'Used alongside `checkedValues` for a [controllable](https://markojs.com/docs/explanation/controllable-components) pattern that aligns with [Marko\'s `checkedValue` checkbox pattern](https://markojs.com/docs/reference/native-tag#input-typeradio-and-input-typecheckbox). List of _all_ "child" checkbox values',
      table: {
        type: { summary: "string[]" },
      },
    },
    checkedValues: {
      description:
        '**Must** be accompanied by `values` and `checkedValuesChange` (usually via [`:=` bind syntax](https://markojs.com/docs/reference/language#shorthand-change-handlers-two-way-binding)). Leverages [Marko\'s `checkedValue` checkbox pattern](https://markojs.com/docs/reference/native-tag#input-typeradio-and-input-typecheckbox) for "select/deselect all" behavior',
      table: {
        type: { summary: "string[]" },
      },
    },
    checkedValuesChange: {
      description:
        "Used to hoist `checkedValues` with the [controllable](https://markojs.com/docs/explanation/controllable-components) pattern. Typically added implicitly by [`:=` bind syntax](https://markojs.com/docs/reference/language#shorthand-change-handlers-two-way-binding).",
      table: {
        defaultValue: {
          summary: "(checkedValues: string[]) => void",
        },
      },
    },
    "all <input> attributes": {
      description:
        "All attributes and event handlers from the [native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) may be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)",
      table: {
        category: "<input> attributes",
      },
    },
  },
};

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
