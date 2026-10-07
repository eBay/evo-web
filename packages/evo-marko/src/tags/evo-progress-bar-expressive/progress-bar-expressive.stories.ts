import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import ProgressBarExpressive, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import CustomTimingTemplate from "./examples/custom-timing.marko";
import CustomTimingTemplateCode from "./examples/custom-timing.marko?raw";

export default {
  title: "progress/evo-progress-bar-expressive",
  component: ProgressBarExpressive,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
    layout: "fullscreen",
  },

  argTypes: {
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description: "Localized, accessible label for the progress bar",
      table: { defaultValue: { summary: "Loading..." } },
    },
    size: {
      type: "string",
      options: ["large", "medium"],
      control: "inline-radio",
      description: "Message text size",
      table: { defaultValue: { summary: "large" } },
    },
    message: {
      description:
        "Short messages to display above the progress bar, shown in order and repeated while progress continues. When the user prefers reduced motion, each message displays for 1.5 times its duration.",
      "@": {
        duration: {
          type: "number",
          description: "Time in milliseconds that the message remains visible",
          table: { defaultValue: { summary: "1500" } },
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

export const CustomTiming = buildExtensionTemplate(
  CustomTimingTemplate,
  CustomTimingTemplateCode,
);
