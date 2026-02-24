import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import FakeTabs, { type Input } from "./index.marko";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import NoPanelTemplate from "./examples/no-panel-content.marko";
import NoPanelTemplateCode from "./examples/no-panel-content.marko?raw";

export default {
  title: "navigation & disclosure/evo-fake-tabs",
  component: FakeTabs,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    selectedIndex: {
      type: "number",
      control: "number",
      description: "Zero-based index of selected tab tab and panel",
    },
    tabMatchesCurrentUrl: {
      type: "boolean",
      control: "boolean",
      description:
        'Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true").',
    },
    tab: {
      description:
        "The tab element. This takes the same attributes as an anchor tag which navigates the user to a new page. ",
      "@": {
        ["<a> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through",
        },
      },
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const NoPanel = buildExtensionTemplate(
  NoPanelTemplate,
  NoPanelTemplateCode,
);
