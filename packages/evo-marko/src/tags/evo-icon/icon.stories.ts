import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import { type Input } from "./index.marko";
import Readme from "./README.md";
import Component from "./examples/all.marko";

export default {
  title: "graphics & icons/evo-icon",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    a11yText: {
      type: "string",
      control: "text",
      description:
        "Localized text for non-decorative inline icon; icon is assumed to be decorative if this is not passed",
    },
    ["<svg> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<svg>` tag](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/svg) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(Component, "");
