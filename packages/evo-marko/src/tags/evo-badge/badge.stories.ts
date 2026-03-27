import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import Badge, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
  title: "graphics & icons/evo-badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    number: {
      type: "number",
      control: "number",
      description: "Used as the number to be placed in the badge",
    },
    type: {
      type: "string",
      options: ["menu", "icon"],
      control: "inline-radio",
      description: "The badge type",
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'A descriptive label of what the badge represents (e.g. "5 unread items"). May be set to `null` only if accessibility is provided through other means.',
    },
    ["<span> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through, except `role`.",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    number: 5,
  },
);
