import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import {
  addContent,
  buildExtensionTemplate,
} from "../../common/storybook/utils";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import { type Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
  input: addContent(args),
});

export default {
  title: "graphics & icons/evo-badge",
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    number: {
      type: "number",
      description: "Used as the number to be placed in the badge",
    },
    "aria-label": {
      description:
        'A descriptive label of what the badge represents (e.g. "5 unread items")',
    },
  },
};

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    number: 5,
    "aria-label": "5 unread items",
  },
);
