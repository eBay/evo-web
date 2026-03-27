import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Tourtip, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import WithFooterTemplate from "./examples/with-footer.marko";
import WithFooterTemplateCode from "./examples/with-footer.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledTemplateCode from "./examples/controlled.marko?raw";
import PlacementsTemplate from "./examples/placements.marko";
import PlacementsTemplateCode from "./examples/placements.marko?raw";

export default {
  title: "notices & tips/evo-tourtip",
  component: Tourtip,
  parameters: {
    docs: {
      description: {
        component:
          "A tourtip is used to highlight new features or guide users through an experience.",
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
      table: { defaultValue: { summary: "top" } },
    },
    offset: {
      type: "number",
      control: "number",
      description: "Offset distance from the host element in pixels",
      table: { defaultValue: { summary: "6" } },
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
      table: { defaultValue: { summary: "false" } },
    },
    inline: {
      type: "boolean",
      control: "boolean",
      description: "Enable inline positioning middleware",
      table: { defaultValue: { summary: "true" } },
    },
    a11yCloseText: {
      type: { name: "string", required: true },
      control: "text",
      description: "Localized accessibility label for the close button",
      table: { defaultValue: { summary: "Dismiss tourtip" } },
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
      description:
        "Optional heading content, rendered as an `<h2>` by default.",
      "@": {
        as: {
          type: "string",
          control: "text",
          description:
            "Override the element that the item is rendered as, instead of `<h2>`",
          table: { defaultValue: { summary: "h2" } },
        },
        ["<h2> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<h2>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) will be passed through",
        },
      },
    },
    footer: {
      description: "Optional footer content, rendered as a styled `<span>`.",
      "@": {
        index: {
          type: "string",
          control: "text",
          description: "Text for pagination display`",
          table: { defaultValue: { summary: "h2" } },
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

export const WithFooter = buildExtensionTemplate(
  WithFooterTemplate,
  WithFooterTemplateCode,
);

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledTemplateCode,
);

export const Placements = buildExtensionTemplate(
  PlacementsTemplate,
  PlacementsTemplateCode,
);
