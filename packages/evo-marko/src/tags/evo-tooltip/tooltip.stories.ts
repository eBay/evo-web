import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Tooltip, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import NoHoverTemplate from "./examples/no-hover.marko";
import NoHoverTemplateCode from "./examples/no-hover.marko?raw";
import PlacementsTemplate from "./examples/placements.marko";
import PlacementsTemplateCode from "./examples/placements.marko?raw";
import IconButtonHostTemplate from "./examples/icon-button-host.marko";
import IconButtonHostTemplateCode from "./examples/icon-button-host.marko?raw";

export default {
  title: "notices & tips/evo-tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          "A tooltip provides brief, supplementary information on hover or focus.",
      },
    },
  },

  argTypes: {
    open: {
      controllable: true,
      type: "boolean",
      control: "boolean",
      description: "Visibility of the tooltip.",
    },
    placement: {
      type: "string",
      control: "select",
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
      description: "Position of the overlay relative to the host element",
      table: { defaultValue: { summary: "bottom" } },
    },
    offset: {
      type: "number",
      control: "number",
      description: "Offset distance from the host element in pixels",
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
    noHover: {
      type: "boolean",
      control: "boolean",
      description: "Disable hover behavior (only focus will open the tooltip)",
      table: { defaultValue: { summary: "false" } },
    },
    host: {
      type: { name: "object", value: {}, required: true },
      description: "The host element that triggers the tooltip.",
      table: { type: { summary: undefined } },
      "@": {
        as: {
          type: "string",
          control: "text",
          description:
            "Override the element that the item is rendered as, instead of `<span>`",
          table: { defaultValue: { summary: "span" } },
        },
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    heading: {
      description: "Optional heading content, rendered as a styled `<span>`.",
      "@": {
        as: {
          type: "string",
          control: "text",
          description:
            "Override the element that the item is rendered as, instead of `<span>`",
          table: { defaultValue: { summary: "span" } },
        },
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
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

export const NoHover = buildExtensionTemplate(
  NoHoverTemplate,
  NoHoverTemplateCode,
);

export const IconButtonHost = buildExtensionTemplate(
  IconButtonHostTemplate,
  IconButtonHostTemplateCode,
);

export const Placements = buildExtensionTemplate(
  PlacementsTemplate,
  PlacementsTemplateCode,
);
