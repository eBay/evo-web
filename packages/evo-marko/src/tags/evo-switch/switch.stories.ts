import { buildExtensionTemplate } from "../../common/storybook/utils";
import type { StoryFn } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import WithLabelTemplate from "./examples/with-label.marko";
import WithLabelCode from "./examples/with-label.marko?raw";
import DisabledTemplate from "./examples/disabled-with-label.marko";
import DisabledCode from "./examples/disabled-with-label.marko?raw";

const Template: StoryFn<Input> = (args) => ({ input: args });

export default {
  title: "form input/evo-switch",
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
      type: "boolean",
      control: "boolean",
      description: "The checked/selected state.",
    },
    ["<input> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const WithLabel = buildExtensionTemplate(
  WithLabelTemplate,
  WithLabelCode,
);
export const Disabled = buildExtensionTemplate(DisabledTemplate, DisabledCode);

export const Isolated = {};
