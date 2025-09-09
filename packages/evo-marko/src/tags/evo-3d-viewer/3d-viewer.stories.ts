import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import { addContent } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
  input: addContent(args),
});
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
      control: { type: "text" },
      description: "The asset to load",
    },
    a11yText: {
      control: { type: "text" },
      table: {
        category: "Accessibility",
        defaultValue: {
          summary: "",
        },
      },
      description:
        "The text for screen readers to read out when interacting with the 3d player.",
    },
    a11yStartText: {
      control: { type: "text" },
      table: {
        category: "Accessibility",
        defaultValue: {
          summary: "Click to start",
        },
      },
      description: "Text for start icon to load viewer",
    },
    a11yLoadingText: {
      control: { type: "text" },
      table: {
        category: "Accessibility",
        defaultValue: {
          summary: "Loading",
        },
      },
      description: "Text for loading icon loading viewer",
    },
    errorText: {
      control: { type: "text" },
      table: {
        category: "Accessibility",
        defaultValue: {
          summary: "An error has occurred",
        },
      },
      description: "Text to show error message",
    },
    onAction: {
      action: "onAction",
      description: "Triggered when interacting with player",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ }",
        },
      },
    },
    onProgress: {
      action: "onProgress",
      description: "Triggered ",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ }",
        },
      },
    },
    onLoad: {
      action: "onLoad",
      description: "Triggered when loading is complete",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ }",
        },
      },
    },
    "onLoad-error": {
      action: "onLoad-error",
      description: "Triggered when loading error happens",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ }",
        },
      },
    },
    "onModel-visibility": {
      action: "onModel-visibility",
      description: "Triggered when model is visible",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ }",
        },
      },
    },
    "onRender-scale": {
      action: "onRender-scale",
      description: "Triggered when model scales",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ }",
        },
      },
    },
    "onPoster-dismissed": {
      action: "onPoster-dismissed",
      description:
        "Triggered when there's a placeholder image and it is removed",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ }",
        },
      },
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  src: "https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb",
  alt: "View these shoes for sale.",
  errorText: "An error has occurred",
  a11yLoadingText: "Loading 3d model",
};
Default.parameters = {
  docs: {
    source: {
      code: tagToString("evo-3d-viewer", Default.args),
    },
  },
};
