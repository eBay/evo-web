import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import IndeterminateTemplate from "./examples/indeterminate.marko";
import IndeterminateCode from "./examples/indeterminate.marko?raw";

export default {
  title: "progress/evo-progress-bar",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    value: {
      type: "number",
      control: { type: "number", min: 0 },
      description: "Current progress value. Omit for indeterminate progress.",
    },
    max: {
      type: "number",
      control: { type: "number", min: 1 },
      description: "Maximum progress value",
      table: { defaultValue: { summary: "100" } },
    },
    fluid: {
      type: "boolean",
      control: "boolean",
      description: "Fills the width of the container",
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'Localized accessibility label for the progress bar, describing the task in progress, such as "Upload progress". May be set to `null` only if accessibility is provided through other means, such as `aria-labelledby`.',
      table: { defaultValue: { summary: '"Progress"' } },
    },
    ["<progress> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<progress>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const Indeterminate = buildExtensionTemplate(
  IndeterminateTemplate,
  IndeterminateCode,
);
