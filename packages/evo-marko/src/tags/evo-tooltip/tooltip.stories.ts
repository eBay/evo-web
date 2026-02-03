import { buildExtensionTemplate } from "../../common/storybook/utils";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import NoHoverTemplate from "./examples/no-hover.marko";
import NoHoverTemplateCode from "./examples/no-hover.marko?raw";
import PlacementsTemplate from "./examples/placements.marko";
import PlacementsTemplateCode from "./examples/placements.marko?raw";
import IconButtonHostTemplate from "./examples/icon-button-host.marko";
import IconButtonHostTemplateCode from "./examples/icon-button-host.marko?raw";
import Component from "./index.marko";

export default {
  title: "notices & tips/evo-tooltip",
  component: Component,
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
      type: "boolean",
      control: { type: "boolean" },
      description: "Whether the tooltip is open",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    openChange: {
      description:
        "Used to hoist `open` value with the [controllable](https://markojs.com/docs/explanation/controllable-components) pattern",
      table: {
        defaultValue: {
          summary: "(open: boolean) => void",
        },
      },
    },
    placement: {
      control: { type: "select" },
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
      table: {
        defaultValue: {
          summary: "bottom",
        },
      },
    },
    offset: {
      control: { type: "number" },
      description: "Offset distance from the host element in pixels",
      table: {
        defaultValue: {
          summary: "8",
        },
      },
    },
    flip: {
      type: "boolean",
      control: { type: "boolean" },
      description: "Enable automatic flipping when near viewport edge",
      table: {
        defaultValue: {
          summary: "true",
        },
      },
    },
    shift: {
      type: "boolean",
      control: { type: "boolean" },
      description: "Enable automatic shifting when near viewport edge",
      table: {
        defaultValue: {
          summary: "true",
        },
      },
    },
    inline: {
      type: "boolean",
      control: { type: "boolean" },
      description: "Enable inline positioning middleware",
      table: {
        defaultValue: {
          summary: "true",
        },
      },
    },
    noHover: {
      type: "boolean",
      control: { type: "boolean" },
      description: "Disable hover behavior (focus-only)",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    host: {
      name: "@host",
      description:
        "The host element that triggers the tooltip. Supports `as` attribute for custom element.",
      table: {
        category: "@attribute tags",
      },
    },
    heading: {
      name: "@heading",
      description:
        "Optional heading content. Supports `as` attribute for custom heading element.",
      table: {
        category: "@attribute tags",
      },
    },
  },
};

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
