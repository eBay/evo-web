import { tagToString } from "../../common/storybook/storybook-code-source";
import { buildExtensionTemplate } from "../../common/storybook/utils";

import Readme from "./README.md";
import Checkbox from "./index.marko";
import GroupTemplate from "./examples/group.marko";
import IsolatedTemplate from "./examples/isolated.marko";
import WithLabelTemplate from "./examples/WithLabel.marko";
import DisabledTemplate from "./examples/DisabledWithLabel.marko";
import GroupCode from "./examples/group.marko?raw";
import WithLabelCode from "./examples/WithLabel.marko?raw";
import DisabledCode from "./examples/DisabledWithLabel.marko?raw";
import IsolatedTemplateCode from "./examples/isolated.marko?raw";
import type { Input } from "./index.marko";

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
    size: {
      options: ["small (default)", "large"],

      description:
        "Sets the checkbox icon. Default is small. (Note: The dimensions of the checkbox will not change, but only the icon)",
      table: {
        defaultValue: {
          summary: "regular",
        },
      },
      type: { category: "Options" },
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

export const Isolated = buildExtensionTemplate(
  IsolatedTemplate,
  IsolatedTemplateCode,
);
