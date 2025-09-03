import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import {
  addContent,
  buildExtensionTemplate,
} from "../../common/storybook/utils";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

import Readme from "./README.md";
import Component, { type Input } from "./index.marko";

export default {
  title: "form input/evo-selection-chip",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    selected: {
      control: { type: "boolean" },
      description: "True/false if the chip is selected or not",
    },
  },
};

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);
