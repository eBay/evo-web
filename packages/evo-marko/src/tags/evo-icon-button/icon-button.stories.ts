import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import IconButton, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import Readme from "./README.md";

export default {
  title: "buttons/evo-icon-button",
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    badge: {
      description: "An optional badge attached to the button",
      "@": {
        ["<evo-badge> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-badge>` tag](?path=/docs/graphics-icons-evo-badge--docs) will be passed through to `<@badge>`, _except_ `a11yText`. The a11y label for the badge should be included in `a11yText` for the button.",
        },
      },
    },
    href: {
      type: "string",
      control: "text",
      description: "URL for link behavior (switches to `<a>` tag)",
    },
    transparent: {
      type: "boolean",
      control: "boolean",
      description: "Uses transparent styles for the button.",
    },
    size: {
      options: ["regular (default)", "small", "large"],
      control: "inline-radio",
      description: "Alternative size for the icon button",
    },
    priority: {
      options: ["none (default)", "primary", "secondary", "tertiary"],
      control: "inline-radio",
      description: "Priority of the button. Changes color and border.",
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "A descriptive label of what the icon button represents. May be set to `null` only if accessibility is provided through other means.",
    },
    partiallyDisabled: {
      type: "boolean",
      control: "boolean",
      description: "programmatically disabled, but remains keyboard focusable",
    },
    onEscape: {
      action: "onEscape",
      description: "Triggered on escape key",
      table: { category: "Events" },
    },
    ["<button> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) for anchor variants)",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);
