import { tagToString } from "../../common/storybook/storybook-code-source";
import {
  buildExtensionTemplate,
  addContent,
} from "../../common/storybook/utils";

import Readme from "./README.md";
import Checkbox from "./index.marko";
import GroupTemplate from "./examples/group.marko";
import WithLabelTemplate from "./examples/WithLabel.marko";
import DisabledTemplate from "./examples/DisabledWithLabel.marko";
import GroupCode from "./examples/group.marko?raw";
import WithLabelCode from "./examples/WithLabel.marko?raw";
import DisabledCode from "./examples/DisabledWithLabel.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./index.marko";

const Template: Story<Input> = (args) => addContent(args);

export default {
  title: "form input/evo-checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    checked: {
      description: "if checked or not",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
      type: "boolean",
    },
    size: {
      options: ["regular", "large"],

      description:
        "Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)",
      table: {
        defaultValue: {
          summary: "regular",
        },
      },
      type: { category: "Options" },
    },
    onChange: {
      action: "onChange",
      description: "Triggered on change",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ originalEvent, value, checked }",
        },
      },
    },
    onFocus: {
      action: "onFocus",
      description: "Triggered on focus",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ originalEvent, value }",
        },
      },
    },
    onKeydown: {
      action: "onKeydown",
      description: "Triggered on keydown",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ originalEvent, value }",
        },
      },
    },
  },
};

export const WithLabel = buildExtensionTemplate(
  WithLabelTemplate,
  WithLabelCode,
  {
    checked: false,
  },
);

export const Disabled = buildExtensionTemplate(DisabledTemplate, DisabledCode, {
  checked: false,
});

export const Group = buildExtensionTemplate(GroupTemplate, GroupCode);

export const Isolated = Template.bind({});
Isolated.args = {
  checked: false,
};

Isolated.parameters = {
  docs: {
    source: {
      code: tagToString("evo-checkbox", Isolated.args),
    },
  },
};
