import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Checkbox, { type Input } from "./index.marko";
import GroupTemplate from "./examples/group.marko";
import IsolatedTemplate from "./examples/isolated.marko";
import WithLabelTemplate from "./examples/WithLabel.marko";
import DisabledTemplate from "./examples/DisabledWithLabel.marko";
import GroupCode from "./examples/group.marko?raw";
import WithLabelCode from "./examples/WithLabel.marko?raw";
import DisabledCode from "./examples/DisabledWithLabel.marko?raw";
import IsolatedTemplateCode from "./examples/isolated.marko?raw";

export default {
  title: "form input/evo-checkbox",
  component: Checkbox,
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
      options: ["small (default)", "large"],
      control: "inline-radio",
      description:
        "Sets the checkbox icon. Default is small. (Note: The dimensions of the checkbox will not change, but only the icon)",
    },
    checked: {
      type: "boolean",
      controllable: true,
      control: "boolean",
      description: "The native `checked=` value of the `<input>`",
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
  {
    checked: false,
  },
);

export const Disabled = buildExtensionTemplate(DisabledTemplate, DisabledCode, {
  checked: false,
});

export const Group = buildExtensionTemplate(GroupTemplate, GroupCode);

export const Isolated = buildExtensionTemplate(
  IsolatedTemplate,
  IsolatedTemplateCode,
);
