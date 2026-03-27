import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import CCD, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
  title: "graphics & icons/evo-ccd",
  component: CCD,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    max: {
      type: "string",
      control: "text",
      description:
        "The maximum range. If min and max are both not set, then will not show the charger label.",
    },
    min: {
      type: "string",
      control: "text",
      description:
        "The minimum range. If min and max are both not set, then will not show the charger label.",
    },
    chargerIcon: {
      type: "string",
      options: ["none (default)", "included", "not-included"],
      control: "inline-radio",
      description: "Toggles the charger icon visible or if its included or not",
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "Localized, the accessibility label for the ccd component. This is for internationalization. It should use min, max, and charger included or not included, and secondaryText in the label in order to demonstrate to screen readers the content on the component. Expected value `Charger included. ${min} - ${max} Watts. USB PD`. May be set to `null` only if accessibility is provided through other means.",
    },
    secondaryType: {
      type: "string",
      options: ["none (default)", "usbpd"],
      control: "select",
      description: "Toggles the usbpd secondary text",
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@action>`.",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    max: "2000",
    min: "1000",
  },
);
