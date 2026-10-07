import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import WithCtaTemplate from "./examples/with-cta.marko";
import WithCtaCode from "./examples/with-cta.marko?raw";
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
      description: 'A call to action link, such as "See all"',
      "@": {
        ["<a> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through to `<@cta>`",
        },
      },
    },
    title: {
      description: "The main title content, `<h2>` by default",
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
      description: "Optional subtitle content, displayed below the title",
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@subtitle>`",
        },
      },
    },
    overflow: {
      description: "Optional overflow content, such as an `<evo-menu-button>`",
      "@": {
        ["<div> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@overflow>`",
        },
      },
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const WithCta = buildExtensionTemplate(WithCtaTemplate, WithCtaCode);
export const WithOverflow = buildExtensionTemplate(
  OverflowTemplate,
  OverflowCode,
);
