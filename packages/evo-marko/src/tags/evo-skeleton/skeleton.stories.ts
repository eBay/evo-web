import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Skeleton from "./index.marko";
import Readme from "./README.md";
import AllTemplate from "./examples/all.marko";
import AllCode from "./examples/all.marko?raw";

export default {
  title: "building blocks/evo-skeleton",
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'Localized accessibility text for the component. English default to be overridden is "Loading...". May be set to `null` only if accessibility is provided through other means.',
    },
    size: {
      type: "string",
      options: ["default", "small", "large"],
      control: "inline-radio",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
      description:
        "The Size of the component to render. Applicable for `evo-skeleton-button` and `evo-skeleton-text` only",
    },
    multiline: {
      type: "boolean",
      control: "boolean",
      description:
        "Boolean flag to make `evo-skeleton-text` render more than one line",
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta;

export const Default = buildExtensionTemplate(AllTemplate, AllCode);
