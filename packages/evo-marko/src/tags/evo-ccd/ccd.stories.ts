import Readme from "./README.md";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import ccd from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
  title: "graphics & icons/evo-ccd",
  component: ccd,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    max: {
      control: { type: "text" },
      description:
        "The maximum range. If min and max are both not set, then will not show the charger label.",
    },
    min: {
      control: { type: "text" },
      description:
        "The minimum range. If min and max are both not set, then will not show the charger label.",
    },
    chargerIcon: {
      control: { type: "select" },
      options: ["none", "included", "not-included"],
      description: "Toggles the charger icon visible or if its included or not",
      table: {
        defaultValue: {
          summary: "none",
        },
      },
    },
    a11yText: {
      control: { type: "text" },
      description: "Required: The aria-label accessibility label for the ccd component. This is for internationalization. It should use min, max, and charger included or not included, and secondaryText in the label in order to demonstrate to screen readers the content on the component. Expected value `Charger included. ${min} - ${max} Watts. USB PD`",
    },
    secondaryType: {
      control: { type: "select" },
      options: ["none", "usbpd"],
      description: "Toggles the usbpd secondary text",
      table: {
        defaultValue: {
          summary: "none",
        },
      },
    },
  },
};

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    max: "2000",
    min: "1000",
  },
);
