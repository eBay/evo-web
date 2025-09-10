import { tagToString } from "../../common/storybook/storybook-code-source";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import WithIconTemplate from "./examples/with-icon.marko";
import WithIconCode from "./examples/with-icon.marko?raw";
import WithImageTemplate from "./examples/with-image.marko";
import WithImageCode from "./examples/with-image.marko?raw";
import MultilineSubtitleTemplate from "./examples/multiline-subtitle.marko";
import MultilineSubtitleCode from "./examples/multiline-subtitle.marko?raw";
import { Story } from "@storybook/marko";

export default {
  title: "buttons/evo-toggle-button",
  component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    renderBody: {
      control: { type: "text" },
    },
    layoutType: {
      type: "string",
      control: { type: "select" },
      options: ["minimal", "list", "gallery"],
      description:
        'Enforced layout type of the button. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image.',
    },
    pressed: {
      type: "boolean",
      control: { type: "boolean" },
      description: "Pressed state of the button",
    },
    title: {
      type: "string",
      control: { type: "text" },
      description: "Title attribute for the button",
    },
    subtitle: {
      type: "string|@subtitle",
      control: { type: "text" },
      description: "Subtitle attribute for the button",
    },
    icon: {
      name: "@icon",
      description: "An `<evo-[name]-icon>` to show as the button's icon",
      table: {
        category: "@attribute tags",
      },
    },
    img: {
      name: "@img",
      description: "An `<img>` to show as the button's image",
      table: {
        category: "@attribute tags",
      },
    },
    subtitleTag: {
      name: "@subtitle",
      description:
        "May be used instead of the `subtitle` attribute for more control. Should contain no more than two brief lines of text",
      table: {
        category: "@attribute tags",
      },
    },
    src: {
      table: {
        category: "@img attributes",
      },
      control: { type: "text" },
      description: "Link to the image source",
    },
    alt: {
      table: {
        category: "@img attributes",
      },
      control: { type: "text" },
      description: "Alt text for the image",
    },
    fillPlacement: {
      table: {
        category: "@img attributes",
      },
      control: { type: "text" },
      description:
        "Placement of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position). Using this property will switch the image fit from `contain` to `cover`",
    },
  },
};

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
