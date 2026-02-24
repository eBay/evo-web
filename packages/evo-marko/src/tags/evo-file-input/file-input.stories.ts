import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import FileInput, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import WithPreviewCardsTemplate from "./examples/with-preview-cards.marko";
import WithPreviewCardsCode from "./examples/with-preview-cards.marko?raw";
import WithMockUploadsTemplate from "./examples/with-mock-uploads.marko";
import WithMockUploadsCode from "./examples/with-mock-uploads.marko?raw";
import type { StoryFn } from "@storybook/marko";

export default {
  title: "form input/evo-file-input",
  component: FileInput,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    multiple: {
      type: "boolean",
      control: "boolean",
      description: "Whether multiple files can be uploaded",
    },
    subheader: {
      description: "an optional subheading",
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    header: {
      description: "The header text",
      "@": {
        as: {
          type: "string",
          options: ["h1", "h2", "h3", "h4", "h5", "h6", "span"],
          control: "select",
          description: "Overrides the tag used for the header text",
        },
        ["<h3> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<h3>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) will be passed through to `<@title>`.",
        },
      },
    },
    ["<input> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)",
    },
  },
} satisfies Meta<Input>;

export const Default: StoryFn<Input> = (args) => ({
  input: args,
  component: DefaultTemplate,
});
Default.args = {};
Default.parameters = {
  docs: {
    description: {
      story:
        "In this story you can trigger the native file input picker only. Uploading files will have no effect.",
    },
    source: {
      code: DefaultCode,
    },
  },
};

export const WithPreviewCards: StoryFn<Input> = (args) => ({
  input: args,
  component: WithPreviewCardsTemplate,
});
WithPreviewCards.args = {};
WithPreviewCards.parameters = {
  docs: {
    description: {
      story:
        " In this story you can trigger the native file input picker. Uploading files will render each evo-file-preview-card component in preview status.",
    },
    source: {
      code: WithPreviewCardsCode,
    },
  },
};

export const WithMockUploads: StoryFn<Input> = (args) => ({
  input: args,
  component: WithMockUploadsTemplate,
});
WithMockUploads.args = {};
WithMockUploads.parameters = {
  docs: {
    description: {
      story:
        "In this story you can trigger the native file input picker. Uploading files will render each evo-file-preview-card component in uploading status.",
    },
    source: {
      code: WithMockUploadsCode,
    },
  },
};
