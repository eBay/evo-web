import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import groupTemplate from "./examples/grouped-radio.marko";
import WithLabelTemplate from "./examples/with-label.marko";
import DisabledTemplate from "./examples/disabled-with-label.marko";
import groupCode from "./examples/grouped-radio.marko?raw";
import WithLabelCode from "./examples/with-label.marko?raw";
import DisabledCode from "./examples/disabled-with-label.marko?raw";
import { Story } from "@storybook/marko";

export default {
  title: "form input/evo-radio",
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
      options: ["regular (default)", "large"],
      type: { category: "Options" },
      table: {
        defaultValue: {
          summary: "undefined",
        },
      },
      description:
        'Either `"large"` or `undefined` (regular size). Sets the radio icon. (Note: The dimensions of the radio will not change, but only the icon)',
    },
    "all <input> attributes": {
      description:
        "All attributes from the [native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) may be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)",
      table: {
        category: "<input> attributes",
      },
    },
  },
};

export const WithLabel: Story<Input> = (args) => ({
  input: args,
  component: WithLabelTemplate,
});

WithLabel.parameters = {
  docs: {
    source: {
      code: WithLabelCode,
    },
  },
};

export const Disabled: Story<Input> = (args) => ({
  input: args,
  component: DisabledTemplate,
});

Disabled.parameters = {
  docs: {
    source: {
      code: DisabledCode,
    },
  },
};

export const Group: Story<Input> = (args) => ({
  input: {
    ...args,
  },
  component: groupTemplate,
});
Group.parameters = {
  docs: {
    source: {
      code: groupCode,
    },
  },
};

export const Isolated: any = {};
Isolated.args = {};
Isolated.component = Component;
Isolated.parameters = {
  docs: {
    source: {
      code: tagToString("evo-radio", Isolated.args),
    },
  },
};
