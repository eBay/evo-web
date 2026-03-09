import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Infotip, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import InParagraphTemplate from "./examples/in-paragraph.marko";
import InParagraphTemplateCode from "./examples/in-paragraph.marko?raw";
import DisabledTemplate from "./examples/disabled.marko";
import DisabledTemplateCode from "./examples/disabled.marko?raw";
import CustomIconTemplate from "./examples/custom-icon.marko";
import CustomIconTemplateCode from "./examples/custom-icon.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledTemplateCode from "./examples/controlled.marko?raw";

export default {
  title: "notices & tips/evo-infotip",
  component: Infotip,
  parameters: {
    docs: {
      description: {
        component:
          "An infotip provides additional information via a clickable info icon button.",
      },
    },
  },

  argTypes: {
    open: {
      controllable: true,
      type: "boolean",
      control: "boolean",
      description: "Whether the infotip is open.",
    },
    placement: {
      type: "string",
      options: [
        "top",
        "top-start",
        "top-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
      ],
      control: "select",
      description: "Position of the overlay relative to the trigger button",
      table: { defaultValue: { summary: "bottom" } },
    },
    offset: {
      type: "number",
      control: "number",
      description: "Offset distance from the trigger button in pixels",
      table: { defaultValue: { summary: "8" } },
    },
    flip: {
      type: "boolean",
      control: "boolean",
      description: "Enable automatic flipping when near viewport edge",
      table: { defaultValue: { summary: "true" } },
    },
    shift: {
      type: "boolean",
      control: "boolean",
      description: "Enable automatic shifting when near viewport edge",
      table: { defaultValue: { summary: "true" } },
    },
    inline: {
      type: "boolean",
      control: "boolean",
      description: "Enable inline positioning middleware",
      table: { defaultValue: { summary: "true" } },
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Disable the trigger button",
      table: { defaultValue: { summary: "false" } },
    },
    a11yIconText: {
      type: { name: "string", required: true },
      control: "text",
      description: "Localized accessibility label for the trigger button",
      table: { defaultValue: { summary: "Help" } },
    },
    a11yCloseText: {
      type: { name: "string", required: true },
      control: "text",
      description: "Localized accessibility label for the close button",
      table: { defaultValue: { summary: "Dismiss infotip" } },
    },
    icon: {
      description: "Custom icon to replace the default info icon.",
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@icon>`",
        },
      },
    },
    heading: {
      name: "@heading",
      description:
        "Optional heading content. Defaults to `<span>`, but can be overridden",
      "@": {
        as: {
          type: "string",
          options: ["span", "h1", "h2", "s", "h4", "h5", "h6"],
          control: "select",
          description: "Overrides the tag used for the header text",
        },
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@title>`.",
        },
      },
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const InParagraph = buildExtensionTemplate(
  InParagraphTemplate,
  InParagraphTemplateCode,
);

export const Disabled = buildExtensionTemplate(
  DisabledTemplate,
  DisabledTemplateCode,
);

export const CustomIcon = buildExtensionTemplate(
  CustomIconTemplate,
  CustomIconTemplateCode,
);

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledTemplateCode,
);
