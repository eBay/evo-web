import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import EvoMenuButton, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import BadgedTemplate from "./examples/badged-items.marko";
import BadgedTemplateCode from "./examples/badged-items.marko?raw";
import IconTemplate from "./examples/icon-with-text.marko";
import IconTemplateCode from "./examples/icon-with-text.marko?raw";
import TypeaheadTemplate from "./examples/typeahead.marko";
import TypeaheadTemplateCode from "./examples/typeahead.marko?raw";
import SeparatorTemplate from "./examples/separator.marko";
import SeparatorTemplateCode from "./examples/separator.marko?raw";
import PrefixLabelTemplate from "./examples/prefix-label.marko";
import PrefixLabelTemplateCode from "./examples/prefix-label.marko?raw";
import FilterTemplate from "./examples/filter.marko";
import FilterTemplateCode from "./examples/filter.marko?raw";
import FooterTemplate from "./examples/footer.marko";
import FooterTemplateCode from "./examples/footer.marko?raw";

export default {
  title: "buttons/evo-menu-button",
  component: EvoMenuButton,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    open: {
      controllable: true,
      type: "boolean",
      control: "boolean",
      description: "Allows control over the open state of the menu",
    },
    collapseOnSelect: {
      type: "boolean",
      control: "boolean",
      description: "When an option is selected, `open` is toggled to `false`.",
    },
    prefixId: {
      type: "string",
      control: "text",
      description:
        "Id of an external element to use as the prefix label for the listbox button. Should not be used with `prefixLabel`",
    },
    variant: {
      type: "string",
      options: ["button (default)", "overflow", "form", "icon", "filter"],
      control: "select",
      table: { defaultValue: { summary: "button" } },
      description: "Controls the button style",
    },
    borderless: {
      type: "boolean",
      control: "boolean",
      description: 'whether button has borders. Forces `variant="button"`',
    },
    partiallyDisabled: {
      type: "boolean",
      control: "boolean",
      description: "programmatically disabled, but remains keyboard focusable",
    },
    priority: {
      type: "string",
      options: ["none (default)", "primary", "secondary", "delete", "tertiary"],
      control: "select",
      description: 'button priority, only used when `variant="button"`',
    },
    size: {
      type: "string",
      options: ["regular (default)", "large", "small"],
      control: "inline-radio",
      description: "The size of the button",
    },
    transparent: {
      type: "boolean",
      control: "boolean",
      description: "Removes the background color of the button",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description:
        "Will disable the entire dropdown (also disables the `evo-button` label) if set to true",
    },
    split: {
      type: "string",
      options: ["none (default)", "start", "end"],
      control: "inline-radio",
      description: "Apply split button styles.",
    },
    noToggleIcon: {
      type: "boolean",
      control: "boolean",
      description: "Hides the chevron toggle icon.",
    },
    label: {
      description: "The prefix label. Cannot be used in conjunction with text.",
      "@": {
        ["<span> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through",
        },
      },
    },
    footerButton: {
      description:
        'The footer content, rendered [an `<evo-button>` component](?path=/docs/buttons-evo-button--docs). Generally used only when `variant="filter"`.',
      "@": {
        ["<evo-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-button>` component](?path=/docs/buttons-evo-button--docs) will be passed through to `<@footerButton>`",
        },
      },
    },
    reverse: {
      type: "boolean",
      control: "boolean",
      description: "Expand the menu flyout to the left",
    },
    strategy: {
      type: "string",
      options: ["absolute", "fixed"],
      control: "inline-radio",
      table: { defaultValue: { summary: "absolute" } },
      description:
        "Positioning strategy for the dropdown. Use fixed when dropdown is in contained in an overflow and needs to be visible as you scroll the screen.",
    },
    ["<evo-menu> attributes" as any]: {
      description:
        "All attributes and event handlers from [the `<evo-menu>` component](?path=/docs/building-blocks-evo-menu--docs) will be passed through",
    },
  },
} satisfies Meta<Input<any>>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);
export const IconText = buildExtensionTemplate(IconTemplate, IconTemplateCode);
export const Separator = buildExtensionTemplate(
  SeparatorTemplate,
  SeparatorTemplateCode,
);
export const Typeahead = buildExtensionTemplate(
  TypeaheadTemplate,
  TypeaheadTemplateCode,
);
export const Badged = buildExtensionTemplate(
  BadgedTemplate,
  BadgedTemplateCode,
);

export const Filter = buildExtensionTemplate(
  FilterTemplate,
  FilterTemplateCode,
);

export const Footer = buildExtensionTemplate(
  FooterTemplate,
  FooterTemplateCode,
);

export const PrefixLabel = buildExtensionTemplate(
  PrefixLabelTemplate,
  PrefixLabelTemplateCode,
);
