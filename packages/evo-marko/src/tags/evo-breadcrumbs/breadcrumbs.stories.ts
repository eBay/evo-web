import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ButtonsTemplate from "./examples/buttons.marko";
import ButtonsCode from "./examples/buttons.marko?raw";

export default {
  title: "navigation & disclosure/evo-breadcrumbs",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    a11yHeadingText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "Localized heading text for the breadcrumb nav, visually clipped",
    },
    a11yHeadingTag: {
      type: "string",
      control: "text",
      description: "HTML heading tag to use for the a11y heading",
      table: { defaultValue: { summary: "h2" } },
    },
    a11yMenuButtonText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "Localized a11y label for the overflow menu button (shown when items collapse)",
    },
    item: {
      description:
        "A breadcrumb item. Renders as `<a>` if `href` is provided, otherwise `<button>`.",
      "@": {
        href: {
          description:
            "Link URL. If omitted, the item renders as a `<button>`.",
        },
        ["<a>/<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) or [`<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through to `<@item>`",
        },
      },
    },
    ["<nav> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<nav>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const Buttons = buildExtensionTemplate(ButtonsTemplate, ButtonsCode);
