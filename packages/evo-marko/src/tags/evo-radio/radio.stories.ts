import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Radio, { type Input } from "./index.marko";
import GroupTemplate from "./examples/grouped-radio.marko";
import GroupCode from "./examples/grouped-radio.marko?raw";
import WithLabelTemplate from "./examples/with-label.marko";
import WithLabelCode from "./examples/with-label.marko?raw";
import DisabledTemplate from "./examples/disabled-with-label.marko";
import DisabledCode from "./examples/disabled-with-label.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledCode from "./examples/controlled.marko?raw";

export default {
  title: "form input/evo-radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    size: {
      options: ["regular (default)", "large"],
      description:
        "Icon size. (Note: The dimensions of the radio will not change, but only the icon)",
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
export const Group = buildExtensionTemplate(GroupTemplate, GroupCode);
export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledCode,
);

export const Isolated = {};
