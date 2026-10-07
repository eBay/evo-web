import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import SaveSeeAllTemplate from "./examples/save-see-all.marko";
import SaveSeeAllCode from "./examples/save-see-all.marko?raw";
import OverflowTemplate from "./examples/overflow.marko";
import OverflowCode from "./examples/overflow.marko?raw";

export default {
  title: "navigation & disclosure/evo-section-title",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    cta: {
      description:
        "The call to action, rendered as an `<a>`. All attributes of [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) are passed through",
      "@": {},
    },
    title: {
      description: "The main title content, rendered in an `<h2>` by default",
      "@": {
        as: {
          type: "string",
          options: ["h1", "h2", "h3", "h4", "h5", "h6"],
          control: "select",
          description:
            "Overrides the tag used for the title, to match the heading level of the page",
          table: { defaultValue: { summary: "h2" } },
        },
        ["<h2> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<h2>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) will be passed through to `<@title>`",
        },
      },
    },
    subtitle: {
      description: "The subtitle content to be displayed",
      "@": {},
    },
    info: {
      description: "Placeholder for an `<evo-infotip>` or `<evo-icon-button>`",
      "@": {},
    },
    overflow: {
      description: "Placeholder for the `<evo-menu-button>` component",
      "@": {},
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const IconAndSeeAll = buildExtensionTemplate(
  SaveSeeAllTemplate,
  SaveSeeAllCode,
);
export const WithOverflow = buildExtensionTemplate(
  OverflowTemplate,
  OverflowCode,
);
