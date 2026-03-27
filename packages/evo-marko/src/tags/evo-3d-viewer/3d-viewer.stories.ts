import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
  title: "media/evo-3d-viewer",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    src: {
      control: "text",
      description: "The asset to load",
    },
    a11yLoadingText: {
      type: { name: "string", required: true },
      control: { type: "text" },
      table: {
        category: "Accessibility",
        defaultValue: {
          summary: "Loading",
        },
      },
      description: "Localized text for loading icon loading viewer",
    },
    errorText: {
      type: { name: "string", required: true },
      control: "text",
      description: "Localized text to show error message",
    },
    onLoadError: {
      description: "Triggered when there is an error during loading",
      table: {
        category: "Events",
      },
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);
