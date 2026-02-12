import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import defaultTemplate from "./examples/default.marko";
import defaultCode from "./examples/default.marko?raw";
import mixedImplementationTemplate from "./examples/mixed-implementation.marko";
import mixedImplementationCode from "./examples/mixed-implementation.marko?raw";
import WithLabelTemplate from "./examples/with-label.marko";
import DisabledTemplate from "./examples/disabled-with-label.marko";
import WithLabelCode from "./examples/with-label.marko?raw";
import DisabledCode from "./examples/disabled-with-label.marko?raw";

export default {
  title: "form input/evo-tri-state-checkbox",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    checked: {
      options: ["false", "mixed", "true"],
      type: { category: "Options" },
      description:
        'Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depdending on the checked state.',
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    skipMixed: {
      type: "boolean",
      control: { type: "boolean" },
      description:
        "If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none.",
    },
    size: {
      options: ["regular", "large"],
      type: { category: "Options" },
      description:
        'Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',
      table: {
        defaultValue: {
          summary: "regular",
        },
      },
    },
    onChange: {
      action: "on-change",
      description: "Triggered on change",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ originalEvent, value, checked }",
        },
      },
    },
    onFocus: {
      action: "on-focus",
      description: "Triggered on focus",
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
);

export const Disabled = buildExtensionTemplate(DisabledTemplate, DisabledCode);

export const mixedImplementation = buildExtensionTemplate(
  mixedImplementationTemplate,
  mixedImplementationCode,
);

export const Isolated = buildExtensionTemplate(defaultTemplate, defaultCode);
