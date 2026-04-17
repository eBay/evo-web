import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import WithDeleteTemplate from "./examples/with-delete.marko";
import WithDeleteCode from "./examples/with-delete.marko?raw";

export default {
  title: "building blocks/evo-chip",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    delete: {
      description:
        "Attribute tag for the delete button. When present, a delete button with a close icon is rendered.",
      "@": {
        a11yText: {
          type: "string",
          description:
            "Accessible label for the delete button (required for a11y)",
        },
        disabled: {
          type: "boolean",
          description: "Whether the delete button is disabled",
        },
      },
    },
    ["<span> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const WithDelete = buildExtensionTemplate(
  WithDeleteTemplate,
  WithDeleteCode,
);
