import { buildExtensionTemplate } from "../../common/storybook/utils";
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
import Component from "./index.marko";

export default {
  title: "notices & tips/evo-infotip",
  component: Component,
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
      type: "boolean",
      control: { type: "boolean" },
      description: "Whether the infotip is open",
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
      description: "Position of the overlay relative to the trigger button",
      table: {
        defaultValue: {
          summary: "bottom",
        },
      },
    },
    offset: {
      control: { type: "number" },
      description: "Offset distance from the trigger button in pixels",
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
    disabled: {
      type: "boolean",
      control: { type: "boolean" },
      description: "Disable the trigger button",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    a11yIconText: {
      control: { type: "text" },
      description: "Accessibility label for the trigger button",
      table: {
        defaultValue: {
          summary: "Help",
        },
      },
    },
    a11yCloseText: {
      control: { type: "text" },
      description: "Accessibility label for the close button",
      table: {
        defaultValue: {
          summary: "Dismiss infotip",
        },
      },
    },
    icon: {
      name: "@icon",
      description: "Custom icon to replace the default info icon.",
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
