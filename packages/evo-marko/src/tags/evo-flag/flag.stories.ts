import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Flag, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import WithTextTemplate from "./examples/with-text.marko";
import WithTextTemplateCode from "./examples/with-text.marko?raw";

export default {
  title: "graphics & icons/evo-flag",
  component: Flag,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    country: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'The 2 letter country code of the flag to display, e.g. `"us"`',
    },
    size: {
      type: "string",
      options: ["small", "medium", "large", "x-large"],
      control: "radio",
      description:
        "Size of the flag. When omitted, the flag takes its size from surrounding CSS",
    },
    a11yText: {
      type: "string",
      control: "text",
      description:
        "Localized name of the country, used as the flag's accessible name. The flag is decorative if this is not passed",
    },
    ["<span> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through, except `role`, `aria-label` and `aria-hidden`.",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    country: "us",
    size: "medium",
    a11yText: "United States",
  },
);

export const WithText = buildExtensionTemplate(
  WithTextTemplate,
  WithTextTemplateCode,
  {
    country: "us",
    size: "medium",
  },
);
