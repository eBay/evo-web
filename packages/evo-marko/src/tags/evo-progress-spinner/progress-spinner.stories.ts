import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import ProgressSpinner, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import Readme from "./README.md";

export default {
  title: "progress/evo-progress-spinner",
  component: ProgressSpinner,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    size: {
      options: ["normal (default)", "small", "large"],
      control: "inline-radio",
      description:
        'size of spinner. Default is `24`, can be "small" (`20`) or "large" (`30`).',
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'Localized, the accessibility label for the progress spinner. This is for internationalization. It should describe the purpose of the spinner, such as "Loading". May be set to `null` only if accessibility is provided through other means.',
    },
    ["<span> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);
