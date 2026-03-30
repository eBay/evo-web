import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import FilterChip, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ExpressiveTemplate from "./examples/expressive.marko";
import ExpressiveTemplateCode from "./examples/expressive.marko?raw";
import MenuButtonTemplate from "./examples/menu-button.marko";
import MenuButtonTemplateCode from "./examples/menu-button.marko?raw";

export default {
  title: "form input/evo-filter-chip",
  component: FilterChip,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    selected: {
      controllable: true,
      type: "boolean",
      control: "boolean",
      description: "Selected state of the chip",
    },
    variant: {
      type: "string",
      options: ["default", "expressive", "menu"],
      control: "inline-radio",
      description:
        "The variant of the filter. Default and expressive are toggle buttons, while menu turns it into a dropdown.",
    },
    icon: {
      description: "The leading icon. Only used for default variant",
      "@": {},
    },
    image: {
      description: "The leading image. Only used for expressive variant",
      "@": {
        ["<img> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<img>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) will be passed through to `<@image>`",
        },
      },
    },
    expanded: {
      controllable: true,
      type: "boolean",
      control: "boolean",
      description:
        "Only used for menu variant. True/false if the menu is in expanded state or not",
    },
    a11ySelectedText: {
      type: "string",
      control: "text",
      description:
        "Localized, for anchor variant: the clipped text to show when the filter is set. This is required to switch to anchor type along with href",
    },
    ["<button> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) for anchor variants)",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const MenuButton = buildExtensionTemplate(
  MenuButtonTemplate,
  MenuButtonTemplateCode,
);

export const Expressive = buildExtensionTemplate(
  ExpressiveTemplate,
  ExpressiveTemplateCode,
);
