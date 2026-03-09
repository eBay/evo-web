import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import ToggleButtonGroup, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import withIconsTemplate from "./examples/icons.marko";
import withIconsCode from "./examples/icons.marko?raw";
import withDefaultTemplate from "./examples/withDefault.marko";
import withDefaultCode from "./examples/withDefault.marko?raw";
import controlledTemplate from "./examples/controlled.marko";
import controlledCode from "./examples/controlled.marko?raw";
import externalLabelTemplate from "./examples/externalLabel.marko";
import externalLabelCode from "./examples/externalLabel.marko?raw";
import columnsTemplate from "./examples/columns.marko";
import columnsCode from "./examples/columns.marko?raw";

export default {
  title: "buttons/evo-toggle-button-group",
  component: ToggleButtonGroup,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    button: {
      description: "Represents a toggle button to be used as part of the group",
      "@": {
        name: {
          type: "string",
          control: "string",
          description:
            "Used instead of `id` to check for equality with `pressed` with more consistency.",
        },
        ["<evo-toggle-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-toggle-button>` tag](?path=/docs/buttons-evo-toggle-button--docs) will be passed through to `<@button>`, except `pressed` since it is handled in the parent",
        },
      },
    },
    pressed: {
      controllable: true,
      control: "text",
      description:
        "Values that are currently selected. Use a string or number for single select, or an array for multiselect",
      table: { type: { summary: "string | number | (string | number)[]" } },
    },
    required: {
      type: "boolean",
      control: "boolean",
      description: "At least one button must be pressed at all times",
    },
    columnsMin: {
      type: "number",
      control: "number",
      description:
        "Preferred minimum number of columns for smallest container/screen (1-3). If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
    },
    columnsXS: {
      type: "number",
      control: "number",
      description:
        "Preferred minimum number of columns within extra small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
    },
    columnsSM: {
      type: "number",
      control: "number",
      description:
        "Preferred minimum number of columns within small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
    },
    columnsMD: {
      type: "number",
      control: "number",
      description:
        "Preferred minimum number of columns within medium containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
    },
    columnsXL: {
      type: "number",
      control: "number",
      description:
        "Preferred minimum number of columns within extra large containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
    },
    a11yText: {
      type: "string",
      control: "text",
      description:
        "Localized, accessibility text for the group. Cannot be used together with `a11yLabelId`",
    },
    a11yLabelId: {
      type: "string",
      control: "text",
      description:
        "Id of the element that labels the group. Required for a11y compliance. Cannot be used together with `a11yText`",
    },
    layoutType: {
      type: "string",
      control: "inline-radio",
      options: ["minimal", "list", "gallery"],
      description:
        "Enforced layout type of all buttons. Gallery layout may only be used when there is also an icon or an image, and minimal layout may **not** be used when there is an icon or an image",
      table: { defaultValue: { summary: "undefined" } },
    },
  },
} satisfies Meta<Input<any>>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);

export const WithIcons = buildExtensionTemplate(
  withIconsTemplate,
  withIconsCode,
);

export const WithDefaultSelected = buildExtensionTemplate(
  withDefaultTemplate,
  withDefaultCode,
);

export const externalLabel = buildExtensionTemplate(
  externalLabelTemplate,
  externalLabelCode,
);

export const Controlled = buildExtensionTemplate(
  controlledTemplate,
  controlledCode,
);

export const PreferredColumns = buildExtensionTemplate(
  columnsTemplate,
  columnsCode,
  {
    columnsMin: 1,
    columnsSM: 3,
    columnsXS: 2,
    columnsMD: 6,
    columnsXL: 8,
  },
);
