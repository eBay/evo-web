import { buildExtensionTemplate } from "../../common/storybook/utils";

import Readme from "./README.md";
import Component from "./examples/all.marko";

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
    a11yText: {
      control: { type: "text" },
      description:
        "text for non-decorative inline icon; icon is assumed to be decorative if this is not passed",
    },
  },
};

export const Default = buildExtensionTemplate(Component, "");
