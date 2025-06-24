import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Cta, { type Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
  input: {
    ...args,
    content: function (out: any) {
      out.html(args.content);
    } as any,
  },
});

export default {
  title: "buttons/evo-cta-button",
  component: Cta,
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

export const Standard = Template.bind({});
Standard.args = {
  content: "CTA button",
  href: "http://www.ebay.com",
  size: "regular",
} as any;

Standard.parameters = {
  docs: {
    source: {
      code: tagToString("evo-cta-button", Standard.args),
    },
  },
};
