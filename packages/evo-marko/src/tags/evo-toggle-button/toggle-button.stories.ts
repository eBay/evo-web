import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import ToggleButton, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import WithIconTemplate from "./examples/with-icon.marko";
import WithIconCode from "./examples/with-icon.marko?raw";
import WithImageTemplate from "./examples/with-image.marko";
import WithImageCode from "./examples/with-image.marko?raw";
import MultilineSubtitleTemplate from "./examples/multiline-subtitle.marko";
import MultilineSubtitleCode from "./examples/multiline-subtitle.marko?raw";

export default {
  title: "buttons/evo-toggle-button",
  component: ToggleButton,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    pressed: {
      controllable: true,
      type: "boolean",
      control: "boolean",
      description: "Pressed state of the button",
    },
    layoutType: {
      type: "string",
      options: ["minimal", "list", "gallery"],
      control: "inline-radio",
      description:
        "Enforced layout type of the button. Gallery layout may only be used when there is also an icon or an image.",
      table: { defaultValue: { summary: "minimal" } },
    },
    icon: {
      description: "An `<evo-icon-*>` to show as the button's icon",
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    image: {
      description:
        "An optional image. May be used when `<@icon>` is _not_ present",
      "@": {
        src: {
          type: { name: "string", required: true },
          control: "text",
          description: "The image source URL",
        },
        alt: {
          type: { name: "string", required: true },
          control: "text",
          description: "Alt text for the image",
        },
        fillPlacement: {
          type: "string",
          control: "text",
          description:
            "Position of the image. May be any valid value for [the CSS `background-position` attribute](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position).",
        },
      },
    },
    subtitle: {
      description: "An optional subtitle.",
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    ["<button> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);

export const WithIcon = buildExtensionTemplate(WithIconTemplate, WithIconCode);

export const WithImage = buildExtensionTemplate(
  WithImageTemplate,
  WithImageCode,
  {
    layoutType: "gallery",
    src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
    fillPlacement: "top",
  },
);

export const MultilineSubtitle = buildExtensionTemplate(
  MultilineSubtitleTemplate,
  MultilineSubtitleCode,
);
