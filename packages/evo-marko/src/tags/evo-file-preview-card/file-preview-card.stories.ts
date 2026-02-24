import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import FilePreviewCard, { type Input } from "./index.marko";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import SeeMoreTemplate from "./examples/seeMore.marko";
import SeeMoreTemplateCode from "./examples/seeMore.marko?raw";

export default {
  title: "media/evo-file-preview-card",
  component: FilePreviewCard,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    as: {
      type: "string",
      control: "text",
      description: "Override the tag used to wrap this component",
    },
    file: {
      type: { name: "object", value: {} },
      control: { type: "file" },
      description:
        "File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",
      table: { type: { summary: "file" } },
    },
    status: {
      type: "string",
      options: ["undefined (default)", "uploading"],
      control: "inline-radio",
      description: 'Status of the file, can be `"uploading"` or `undefined`',
    },
    href: {
      type: "string",
      control: "text",
      description: "If present, wrap the card in an `<a>` tag",
    },
    infoText: {
      type: "string",
      control: "text",
      description:
        "File information. If not present, this will default to the file extension",
    },
    deleteAction: {
      description:
        "The delete button. Requires `a11yText` and `onClick` attributes which will attach to the icon-button.",
      "@": {
        ["<evo-icon-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@deleteAction>`",
        },
      },
    },
    menuActions: {
      control: "object",
      description: "Array of menu actions, containing `event` and `label`",
      table: { type: { summary: "{ event: string, label: string }[]" } },
    },
    action: {
      description:
        "Additional action. Requires `a11yText` and `onClick` attributes, and an icon in `content`",
      "@": {
        ["<evo-icon-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@action>`",
        },
      },
    },
    seeMoreAction: {
      description:
        'The "see more" button. Requires `a11yText` and `onClick` attributes which will attach to the icon-button.',
      "@": {
        ["<evo-icon-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@seeMoreAction>`",
        },
      },
    },
    cancelAction: {
      description:
        'The "cancel upload" button. Requires `a11yText` and `onClick` attributes which will attach to the icon-button.',
      "@": {
        ["<evo-icon-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@cancelAction>`",
        },
      },
    },
    footerTitle: {
      type: "string",
      control: "text",
      description: "Title to display beneath the file, usually the filename",
    },
    footerSubtitle: {
      type: "string",
      control: "text",
      description: "Subtitle to display beneath the file title",
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Uploading = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    file: {
      name: "file-name.jpg",
      type: "image/jpeg",
    },
    status: "uploading",
  },
);
export const Image = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    file: {
      name: "file-name.jpg",
      type: "image/jpeg",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
    },
  },
);

export const Video = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    file: {
      name: "file-name.mov",
      type: "video/quicktime",
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    },
    labelText: "10:30:21",
  },
);

export const MultipleMenuActions = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    file: {
      name: "file-name.jpg",
      type: "image/jpeg",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
    },
    menuActions: [
      {
        event: "edit",
        label: "Edit",
      },
      {
        event: "download",
        label: "Download",
      },
    ],
  },
);

export const Document = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    file: {
      name: "file-name.csv",
      type: "text/csv",
    },
    footerTitle: "file-name.csv",
    footerSubtitle:
      "English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic",
    menuActions: [
      {
        event: "edit",
        label: "Edit",
      },
    ],
  },
);

export const SeeMore = buildExtensionTemplate(
  SeeMoreTemplate,
  SeeMoreTemplateCode,
);
