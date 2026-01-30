import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
  title: "navigation & disclosure/evo-tabs",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    index: {
      control: { type: "text" },
      description: "0-based index of selected tab tab and panel",
    },
    activation: {
      control: { type: "select" },

      options: ["manual", "auto"],
      description:
        'whether to use automatic or manual activation when navigating by keyboard, "auto" (default) / "manual"',
    },
    tab: {
      name: "@tab",
      table: {
        category: "@attribute tags",
      },
    },
    panel: {
      name: "@panel",
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
