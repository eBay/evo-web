import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Tabs, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledTemplateCode from "./examples/controlled.marko?raw";

export default {
  title: "navigation & disclosure/evo-tabs",
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    index: {
      controllable: true,
      type: "number",
      control: "number",
      description: "Zero-based index of the selected tab/panel",
    },
    activation: {
      type: "string",
      options: ["manual", "auto"],
      control: "inline-radio",
      description:
        "whether to use automatic or manual activation when navigating by keyboard",
      table: { defaultValue: { summary: "auto" } },
    },
    tab: {
      description: "A tab in the tab bar.",
      "@": {
        panel: {
          description: "The contents of the tab.",
          "@": {
            ["<div> attributes" as any]: {
              description:
                "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@panel>`",
            },
          },
        },
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@tab>`",
        },
      },
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledTemplateCode,
);
