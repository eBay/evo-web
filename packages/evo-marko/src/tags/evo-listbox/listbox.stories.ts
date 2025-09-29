import { buildExtensionTemplate } from "../../common/storybook/utils";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import WithDescriptionTemplate from "./examples/with-description.marko";
import WithDescriptionTemplateCode from "./examples/with-description.marko?raw";
import type { Input } from "./component";

export default {
  title: "building blocks/evo-listbox",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    name: {
      control: { type: "text" },
      description: "used for the `name` attribute of the native `<select>`",
    },
    listSelection: {
      table: {
        defaultValue: {
          summary: "manual",
        },
      },
      description:
        "If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down",
      option: ["manual", "auto"],
      type: "select",
    },
    selected: {
      description: "allows you to set the selected index option to `selected`",
    },
    a11ySelectedText: {
      type: "text",
      control: { type: "text" },
      description:
        "Localized text to be read by screen readers when an option is selected",
      table: {
        defaultValue: {
          summary: "selected",
        },
      },
    },
    option: {
      name: "@option",
      table: {
        category: "@attribute tags",
      },
    },
    text: {
      control: { type: "text" },
      table: {
        category: "@option attributes",
      },
    },
    value: {
      control: { type: "text" },
      table: {
        category: "@option attributes",
      },
    },
    disabled: {
      control: { type: "boolean" },
      table: {
        category: "@option attributes",
      },
    },
    onChange: {
      action: "on-change",
      description: "Triggered on item clicked",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ el, index, selected, wasClicked }",
        },
      },
    },
  },
};

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const withDescription = buildExtensionTemplate(
  WithDescriptionTemplate,
  WithDescriptionTemplateCode,
);
