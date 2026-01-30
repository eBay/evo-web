import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
  title: "graphics & icons/evo-signal",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    status: {
      type: "enum",
      control: { type: "select" },
      options: ["trustworthy", "recent", "time-sensitive", "neutral"],
    },
  },
};
export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);
