import { Story } from "@storybook/marko";
import {
  buildExtensionTemplate,
} from "../../common/storybook/utils";
import Readme from "./README.md";
import Details, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
  title: "navigation & disclosure/evo-details",
  component: Details,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    content: {},
    summary: {
      name: "@summary",
      description: "The body which will be wrapped as the details summary",
      table: {
        category: "@attribute tags",
      },
    },
    alignment: {
      type: "options",
      description: "The position of the details",
      table: {
        defaultValue: {
          summary: "regular",
        },
      },
      options: ["regular", "center"],
    },
    size: {
      type: "options",
      description: "Size of the details",
      table: {
        defaultValue: {
          summary: "regular",
        },
      },
      options: ["regular", "small"],
    },
    open: {
      type: "boolean",
      description: "Whether details is open",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    as: {
      description: "The root element.",
      table: {
        defaultValue: {
          summary: "div",
        },
      },
    },
    onToggle: {
      action: "on-toggle",
      description: "Triggered on toggle",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ originalEvent, open }",
        },
      },
    },
    onClick: {
      action: "onClick",
      description: "Triggered on click",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ originalEvent }",
        },
      },
    },
  },
};

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);
