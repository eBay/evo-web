import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import {
  addContent,
  buildExtensionTemplate,
} from "../../common/storybook/utils";

import Readme from "./README.md";
import Component from "./examples/all.marko";
import type { Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
  input: addContent(args),
});

export default {
  title: "graphics & icons/evo-icon",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    noSkinClasses: {
      control: { type: "boolean" },
      description:
        "Used for special cases where `icon` classes from Skin should not be applied",
    },
    a11yText: {
      control: { type: "text" },
      description:
        "text for non-decorative inline icon; icon is assumed to be decorative if this is not passed",
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  a11yText: "icon description here",
};
Default.parameters = {
  docs: {
    source: {
      code: tagToString("evo-icon", Default.args),
    },
  },
};
