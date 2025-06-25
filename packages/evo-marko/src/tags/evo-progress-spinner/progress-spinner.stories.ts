import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import { addContent } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
  input: addContent(args),
});
export default {
  title: "progress/evo-progress-spinner",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    size: {
      options: ["small", "large", "regular"],
      control: { type: "select" },
      description:
        'size of spinner - can be "small", "large". default is regular',
    },
    a11yText: {
      control: { type: "text" },
      description: "The accessibility label for the progress spinner. This is for internationalization. It should describe the purpose of the spinner, such as \"Loading\"",
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  "aria-label": "loading",
};

Default.parameters = {
  docs: {
    source: {
      code: tagToString("evo-progress-spinner", Default.args),
    },
  },
};
