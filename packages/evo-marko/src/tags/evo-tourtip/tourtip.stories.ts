import { buildExtensionTemplate } from "../../common/storybook/utils";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import WithFooterTemplate from "./examples/with-footer.marko";
import WithFooterTemplateCode from "./examples/with-footer.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledTemplateCode from "./examples/controlled.marko?raw";
import PlacementsTemplate from "./examples/placements.marko";
import PlacementsTemplateCode from "./examples/placements.marko?raw";
import Component from "./index.marko";

export default {
  title: "notices & tips/evo-tourtip",
  component: Component,
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
      type: "boolean",
      control: { type: "boolean" },
      description: "Whether the tourtip is open (defaults to true)",
      table: {
        defaultValue: {
          summary: "true",
        },
      },
    },
    openChange: {
      description:
        "Used to hoist `open` value with the [controllable](https://markojs.com/docs/explanation/controllable-components) pattern",
      table: {
        category: "Events",
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
          summary: "top",
        },
      },
    },
    offset: {
      control: { type: "number" },
      description: "Offset distance from the host element in pixels",
      table: {
        defaultValue: {
          summary: "6",
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
          summary: "false",
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
    a11yCloseText: {
      control: { type: "text" },
      description: "Localized, accessibility label for the close button",
      table: {
        defaultValue: {
          summary: "Dismiss tourtip",
        },
      },
    },
    host: {
      name: "@host",
      description:
        "The host element that the tourtip is attached to. Supports `as` attribute for custom element.",
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
    footer: {
      name: "@footer",
      description:
        "Optional footer content. Supports `index` attribute for pagination display (e.g., '1 of 3').",
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
