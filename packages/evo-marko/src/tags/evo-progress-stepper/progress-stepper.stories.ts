import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import ProgressStepper, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
  title: "progress/evo-progress-stepper",
  component: ProgressStepper,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    direction: {
      type: "string",
      options: ["row (default)", "column"],
      control: "inline-radio",
      description:
        'Will display stepper as a vertical column or horizontal row. Default is "row"',
    },
    step: {
      description:
        "A step on the progress stepper. Multiple should be included.",
      "@": {
        current: {
          type: "string",
          control: "text",
          description:
            "The current step. Only first step that has this attribute will be considered current. All steps before will be rendered as complete, and all after will render as upcoming. If not present on any item, then will render based on `default-state` attribute",
        },
        a11yText: {
          type: "string",
          control: "text",
          description:
            "The accessibility text for the icon. Defaults to either complete, upcoming, current, or blocked depending on type or current",
        },
        title: {
          description: "The title of the step, `<h4>` by default",
          "@": {
            as: {
              type: "string",
              options: ["h1", "h2", "h3", "h4", "h5", "h6", "span"],
              control: "select",
              description: "Overrides the tag used to wrap the title",
              table: { defaultValue: { summary: "h4" } },
            },
            ["<h4> attributes" as any]: {
              description:
                "All attributes and event handlers from [the native `<h4>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) will be passed through to `<@title>`.",
            },
          },
        },
      },
    },
    defaultState: {
      type: "string",
      options: ["active (default)", "complete", "upcoming", "attention"],
      control: "inline-radio",
      description:
        "If complete, then all items will be in complete state by default. If upcoming, all items will be in upcoming state. If attention, then the current item will show as blocked. Otherwise, the default (active), will change items based on the `current` item (current defaults to first step if not set).",
    },
    headingAs: {
      type: "string",
      control: "text",
      description:
        "Tag to use to wrap `a11yHeadingText` for screen readers. Defaults to `<h2>`",
      table: { defaultValue: { summary: "h2" } },
    },
    a11yHeadingText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "Heading text for screen readers & assistive technology. Will be clipped from view.",
    },
    stepContentAs: {
      type: "string",
      control: "text",
      description: "Tag to wrap the content of each step in. Defaults to `<p>`",
      table: { defaultValue: { summary: "p" } },
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);
