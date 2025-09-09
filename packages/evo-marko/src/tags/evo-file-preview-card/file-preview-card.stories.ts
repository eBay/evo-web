import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import component from "./index.marko";
import type { Input } from "./temp";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import SeeMoreTemplate from "./examples/seeMore.marko";
import SeeMoreTemplateCode from "./examples/seeMore.marko?raw";

export default {
  title: "media/evo-file-preview-card",
  component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    cancelUpload: {
      type: "string",
      name: "@cancelUpload",
      control: { type: "object" },
      description:
        "Attribute tag for canceling upload. This requires an aria-label and an onClick event which will attach to the icon-button for canceling upload",
      table: {
        category: "@attribute tag",
      },
    },
    deleteAction: {
      type: "string",
      name: "@deleteAction",
      control: { type: "object" },
      description:
        "Attribute tag for delete. This requires an aria-label and an onClick event which will attach to the icon-button. If not present a delete button won't render.",
    },
    file: {
      type: "object",
      description:
        "File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",
      table: {
        category: "File",
      },
    },
    status: {
      type: "string",
      control: {
        type: "select",
        options: ["uploading"],
      },
      description: 'Status of the file, can be `"uploading"` or `undefined`',
    },
    labelText: {
      type: "string",
      control: { type: "text" },
      description: "Text to display in the label",
    },
    menuActions: {
      type: "array",
      description: "Array of menu actions, containing `event` and `label`",
      table: {
        category: "Menu Actions",
      },
    },
    seeMore: {
      type: "number",
      control: { type: "number" },
      description:
        'Passing a number here will convert the card to a "see more" card',
    },
    footerTitle: {
      type: "string",
      control: { type: "text" },
      description: "Title to display beneath the file, usually the filename",
    },
    footerSubtitle: {
      type: "string",
      control: { type: "text" },
      description: "Subtitle to display beneath the file title",
    },
    "onMenu-action": {
      action: "onMenuAction",
      description: "Triggered when an action is selected from the menu. ",
      table: {
        category: "Events",
        defaultValue: {
          summary: "name, event /* from evo-menu-button */",
        },
      },
    },
    "onSee-more": {
      action: "onSeeMore",
      description: "Triggered when the see more button is clicked",
      table: {
        category: "Events",
        defaultValue: {
          summary: "",
        },
      },
    },
    onDelete: {
      action: "onDelete",
      description: "Triggered when the delete button is clicked",
      table: {
        category: "Events",
        defaultValue: {
          summary: "",
        },
      },
    },
    onCancel: {
      action: "onCancel",
      description: "Triggered when the cancel button is clicked",
      table: {
        category: "Events",
        defaultValue: {
          summary: "",
        },
      },
    },
  },
};

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
