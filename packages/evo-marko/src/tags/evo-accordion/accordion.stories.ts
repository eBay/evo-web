import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Accordion, { type Input } from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledCode from "./examples/controlled.marko?raw";

export default {
  title: "navigation & disclosure/evo-accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    size: {
      type: "string",
      options: ["regular (default)", "large"],
      control: {
        type: "inline-radio",
      },
      description: "Size of the details",
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "Localized role description to announce the component role for a11y users. May be set to `null` only if accessibility is provided through other means.",
      table: {
        defaultValue: {
          summary: "accordion",
        },
      },
    },
    details: {
      description:
        "Represents an [`<evo-details>` tag](?path=/story/navigation-disclosure-evo-details--default) to be used as part of the group.",
      "@": {
        ["<evo-details> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-details>` tag](?path=/story/navigation-disclosure-evo-details--docs) will be passed through to `<@details>`, except `open`",
        },
      },
    },
    open: {
      controllable: true,
      control: "number",
      description:
        "The index or indices of the open items. Pass a number if only one may be open at a time, or an array for multiple",
      table: { type: { summary: "number | number[]" } },
    },
    ["<ul> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<ul>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul) will be passed through",
    },
  },
} satisfies Meta<Input<any>>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledCode,
);
