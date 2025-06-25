import { Story } from "@storybook/marko";
import {
  addContent,
  buildExtensionTemplate,
} from "../../common/storybook/utils";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import { type Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
  input: addContent(args),
});

export default {
  title: "buttons/evo-cta-button",
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    content: {},
    size: {
      type: "options",
      description: 'Can be "large"',
      table: {
        defaultValue: {
          summary: "default",
        },
      },
      options: ["default", "large"],
    },
    href: {
      description: "link target",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
  },
};

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    href: "http://www.ebay.com",
    size: "regular",
  },
);
