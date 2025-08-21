import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import NoPanelTemplate from "./examples/no-panel-content.marko";
import NoPanelTemplateCode from "./examples/no-panel-content.marko?raw";

export default {
  title: "navigation & disclosure/evo-fake-tabs",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    selectedIndex: {
      control: { type: "number" },
      description: "0-based index of selected tab tab and panel",
    },
    tabMatchesCurrentUrl: {
      control: { type: "boolean" },
      description:
        'Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true").',
    },
    tab: {
      name: "@tab",
      table: {
        category: "@attribute tags",
      },
      description:
        "The tab element. This takes the same attributes as an anchor tag which navigates the user to a new page. ",
    },
  },
};

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const NoPanel = buildExtensionTemplate(
  NoPanelTemplate,
  NoPanelTemplateCode,
);

