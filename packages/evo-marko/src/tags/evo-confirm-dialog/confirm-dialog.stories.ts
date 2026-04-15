import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";

export default {
  title: "navigation & disclosure/evo-confirm-dialog",
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
      description: "Whether the confirm dialog is open",
      table: { defaultValue: { summary: "false" } },
    },
    header: {
      description:
        "The header content rendered inside the dialog title (required)",
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
    confirm: {
      description:
        "The confirm button (required). Render body is the button label text",
      "@": {
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
        },
      },
    },
    reject: {
      description:
        "The reject/cancel button (required). Render body is the button label text. Also triggered by Escape key",
      "@": {
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
    onCancel: {
      action: "onCancel",
      description:
        "Triggered when the dialog's cancel event fires, via `esc` or the cancel button",
      table: { category: "Events" },
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
