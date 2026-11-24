import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Signal, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import WithIconTemplate from "./examples/with-icon.marko";
import WithIconTemplateCode from "./examples/with-icon.marko?raw";

export default {
  title: "graphics & icons/evo-signal",
  component: Signal,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    status: {
      type: "string",
      options: ["neutral", "trustworthy", "recent", "time-sensitive"],
      control: "radio",
      description:
        "Deprecated: use `tone`. trustworthy → information, recent → positive, time-sensitive → attention, neutral → neutral",
      table: { defaultValue: { summary: "neutral" } },
    },
    tone: {
      type: "string",
      options: ["neutral", "information", "positive", "warning", "attention"],
      control: "select",
      description: "Color tone of the signal. Takes precedence over `status`",
    },
    emphasis: {
      type: "string",
      options: ["default", "strong", "subtle"],
      control: "radio",
      description: "Visual emphasis of the signal",
      table: { defaultValue: { summary: "default" } },
    },
    icon: {
      description:
        "Optional leading 12px icon, rendered before the label. See the WithIcon story",
      "@": {},
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

export const WithIcon = buildExtensionTemplate(
  WithIconTemplate,
  WithIconTemplateCode,
);
