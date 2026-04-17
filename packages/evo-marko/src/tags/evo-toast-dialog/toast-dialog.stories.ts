import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";

export default {
  title: "navigation & disclosure/evo-toast-dialog",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    open: {
      type: "boolean",
      controllable: true,
      description: "Whether the toast dialog is open",
      table: { defaultValue: { summary: "false" } },
    },
    closedby: {
      type: "string",
      options: ["any", "closerequest", "none"],
      control: "inline-radio",
      description:
        'The [`closedby=` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#closedby) from the native `<dialog>` component. Defaults to `"closerequest"` if not specified',
      table: { defaultValue: { summary: "closerequest" } },
    },
    header: {
      description:
        "The header content rendered inside the toast dialog title (required)",
      "@": {
        as: {
          type: "string",
          description:
            "The heading element to use for the title. Defaults to `h2`",
        },
        ["<h2> attributes" as any]: {
          description:
            "All attributes and event handlers from the heading element will be passed through",
        },
      },
    },
    footer: {
      description:
        "Optional footer content rendered below the toast dialog main content area",
      "@": {
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
        },
      },
    },
    close: {
      description:
        "Close button rendered in the toast dialog header (required). Pass `a11yText` for the accessible label",
      "@": {
        a11yText: {
          type: { name: "string", required: true },
          description: "Accessible label for the close button",
        },
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
        },
      },
    },
    ["<dialog> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
