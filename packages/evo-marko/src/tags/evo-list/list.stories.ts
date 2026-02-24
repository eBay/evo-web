import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import Component, { type Input } from "./index.marko";
import StaticTemplate from "./examples/static.marko";
import StaticTemplateCode from "./examples/static.marko?raw";
import InteractiveTemplate from "./examples/interactive.marko";
import InteractiveTemplateCode from "./examples/interactive.marko?raw";
import WithSeparatorTemplate from "./examples/with-separator.marko";
import WithSeparatorTemplateCode from "./examples/with-separator.marko?raw";
import type { StoryFn } from "@storybook/marko";

export default {
  title: "building blocks/evo-list",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    item: {
      description: "Item to render in the list",
      "@": {
        as: {
          type: "string",
          control: "text",
          description:
            "Override the element that the item is rendered as, instead of `<div>`",
          table: { defaultValue: { summary: "div" } },
        },
        separator: {
          type: "boolean",
          control: { type: "boolean" },
          description: "Render a separator instead of a regular list item",
        },
        leading: {
          description: "Optional leading content, rendered as a `<div>`",
          "@": {
            ["<div> attributes" as any]: {
              description:
                "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@leading>`",
            },
          },
        },
        trailing: {
          description: "Optional trailing content, rendered as a `<div>`",
          "@": {
            ["<div> attributes" as any]: {
              description:
                "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@trailing>`",
            },
          },
        },
      },
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Static: StoryFn<Input> = (args) => ({
  input: args,
  component: StaticTemplate,
});
Static.args = {};
Static.parameters = {
  docs: {
    source: {
      code: StaticTemplateCode,
    },
  },
};

export const Interactive: StoryFn<Input> = (args) => ({
  input: args,
  component: InteractiveTemplate,
});
Interactive.args = {};
Interactive.parameters = {
  docs: {
    source: {
      code: InteractiveTemplateCode,
    },
  },
};

export const WithSeparator: StoryFn<Input> = (args) => ({
  input: args,
  component: WithSeparatorTemplate,
});
WithSeparator.args = {};
WithSeparator.parameters = {
  docs: {
    source: {
      code: WithSeparatorTemplateCode,
    },
  },
};
