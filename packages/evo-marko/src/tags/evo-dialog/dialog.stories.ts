import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Dialog, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import BannerTemplate from "./examples/banner.marko";
import BannerTemplateCode from "./examples/banner.marko?raw";
import CustomBannerTemplate from "./examples/custom-banner.marko";
import CustomBannerTemplateCode from "./examples/custom-banner.marko?raw";

export default {
  title: "navigation & disclosure/evo-dialog",
  component: Dialog,
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
      description: "Whether the dialog is open",
      table: { defaultValue: { summary: "false" } },
    },
    size: {
      type: "string",
      options: ["regular (default)", "wide", "narrow", "large"],
      control: "inline-radio",
      description: "Size variant of the dialog",
    },
    closedby: {
      type: "string",
      options: ["any", "closerequest", "none"],
      control: "inline-radio",
      description:
        'The [`closedby=` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#closedby) from the native `<dialog>` component. Defaults to `"any"` if not specified',
      table: { defaultValue: { summary: "any" } },
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
    footer: {
      description:
        "The footer content rendered below the dialog main content area",
      "@": {
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
        },
      },
    },
    close: {
      description:
        "Close button rendered in the dialog header (required). Pass `a11yText` for the accessible label",
      "@": {
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
        },
      },
    },
    previous: {
      description: "Optional previous/back button rendered in the header",
      "@": {
        a11yText: {
          type: "string",
          description: "Accessible label for the previous button",
        },
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
        },
      },
    },
    banner: {
      description: "Optional banner image displayed at the top of the dialog",
      "@": {
        src: {
          type: "string",
          description: "URL of the banner image",
        },
        position: {
          type: "string",
          description:
            "Position of the image within the banner area using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)",
        },
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
        },
      },
    },
    ["<dialog> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const Banner = buildExtensionTemplate(
  BannerTemplate,
  BannerTemplateCode,
);

export const CustomBanner = buildExtensionTemplate(
  CustomBannerTemplate,
  CustomBannerTemplateCode,
);
