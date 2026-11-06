import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import ControllableTemplate from "./examples/controllable.marko";
import ControllableCode from "./examples/controllable.marko?raw";
import FieldsetTemplate from "./examples/fieldset.marko";
import FieldsetCode from "./examples/fieldset.marko?raw";

export default {
  title: "form input/evo-star-rating-select",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    value: {
      controllable: true,
      type: "number",
      control: { type: "range", min: 0, max: 5, step: 1 },
      description:
        "The selected rating from 1 to 5. No star is selected when it is `0`.",
      table: { defaultValue: { summary: "0" } },
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Disables all five stars",
    },
    name: {
      type: "string",
      control: "text",
      description:
        "The `name` shared by the radio buttons, used when the rating is submitted with a form. A unique name is generated when omitted.",
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'Localized accessibility label for the radio group, describing what is being rated, such as "Rate your purchase". May be set to `null` only if accessibility is provided through other means, such as `aria-labelledby`.',
      table: { defaultValue: { summary: '"Rating"' } },
    },
    a11yStarText: {
      type: { name: "array", value: { name: "string" }, required: true },
      control: "object",
      description:
        "Localized accessibility labels for the five stars, in order from 1 to 5",
      table: {
        defaultValue: {
          summary: '["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]',
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
export const Controllable = buildExtensionTemplate(
  ControllableTemplate,
  ControllableCode,
);
export const Fieldset = buildExtensionTemplate(FieldsetTemplate, FieldsetCode);
