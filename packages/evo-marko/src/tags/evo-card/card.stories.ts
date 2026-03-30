import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Card, { type Input } from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import AnchorTemplate from "./examples/anchor.marko";
import AnchorTemplateCode from "./examples/anchor.marko?raw";
import ButtonTemplate from "./examples/button.marko";
import ButtonTemplateCode from "./examples/button.marko?raw";
import MinimumTemplate from "./examples/minimum.marko";
import MinimumTemplateCode from "./examples/minimum.marko?raw";

export default {
  title: "layout/evo-card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    layout: {
      type: "string",
      options: ["vertical (default)", "horizontal"],
      control: "inline-radio",
      description:
        "The layout of the card. The default is vertical. The horizontal option takes up more horizontal space and is better for displaying more information.",
    },
    href: {
      type: "string",
      control: "text",
      description:
        "The URL to navigate to when the card is clicked. This can only be used _without_ an action element",
    },
    aspectRatio: {
      type: "string",
      options: ["default", "16:9", "5:4"],
      control: "inline-radio",
      description: "The aspect ratio applied to the image.",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Disables the interactive elements of the card.",
    },
    image: {
      type: { name: "object", value: {}, required: true },
      description:
        "The top image tag. Will be passed as attributes to the `<img>` tag.",
      "@": {
        ["<img> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<img>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) will be passed through to `<@image>`.",
        },
      },
    },
    title: {
      description: "The title element of the card, `<h3>` by default",
      "@": {
        as: {
          type: "string",
          options: ["h1", "h2", "h3", "h4", "h5", "h6", "span"],
          control: "select",
          description: "Overrides the tag used to wrap the title",
          table: { defaultValue: { summary: "h3" } },
        },
        ["<h3> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<h3>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) will be passed through to `<@title>`.",
        },
      },
    },
    action: {
      description:
        "The action element of the card. When present, the whole card is no longer clickable. Should contain an interactive element.",
      "@": {
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@action>`.",
        },
      },
    },
    overline: {
      description:
        "The overline element of the card. Generally used for signals rendered above the title.",
      "@": {
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@overline>`.",
        },
      },
    },
    description: {
      description:
        'The description element of the card. This is to render a description below the title in tertiary element. Defaults to <p> tag (use "as" attribute to change).',
      "@": {
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@description>`.",
        },
      },
    },
    ["<span>, <a>, <button> attributes" as any]: {
      description:
        "All attributes are passed through to an HTML element. It will be a `<span>` if `action` is present, `<a>` if `href` is present, and `<button>` otherwise.",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const Anchor = buildExtensionTemplate(
  AnchorTemplate,
  AnchorTemplateCode,
);

export const Button = buildExtensionTemplate(
  ButtonTemplate,
  ButtonTemplateCode,
);

export const Minimum = buildExtensionTemplate(
  MinimumTemplate,
  MinimumTemplateCode,
);
