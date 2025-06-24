import { Story } from "@storybook/marko";
import {
  addContent,
  buildExtensionTemplate,
} from "../../common/storybook/utils";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import Readme from "./README.md";
import type { Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
  input: addContent(args),
});
// const Template = args =({ input: withcontent(args) })

export default {
  title: "buttons/evo-icon-button",
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    href: {
      description: "url for link behaviour (switches to anchor tag)",
    },
    disabled: {
      description: "",
      table: {
        category: "Toggles",
        defaultValue: {
          summary: "false",
        },
      },
      control: { type: "boolean" },
    },
    size: {
      description: "alternative size for the icon button",
      options: ["small", "regular", "large"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "regular",
        },
      },
    },
    priority: {
      options: ["primary", "secondary", "tertiary", "none"],
      description:
        "Priority of the button. Toggle the color and border of the button",
      table: {
        defaultValue: {
          summary: "none",
        },
      },
      type: { category: "Options" },
    },
    ariaLabel: {
      control: { type: "text" },
      name: "aria-label",
      description: "A descriptive label of what the icon button represents",
    },
    partiallyDisabled: {
      name: "partially-disabled",
      description: "programmatically disabled, but remains keyboard focusable",
      table: {
        defaultValue: {
          summary: "false",
        },
        category: "Toggles",
      },
      control: { type: "boolean" },
    },
    badgeNumber: {
      name: "badge-number",
      description: "number to show in badge",
      table: {
        category: "Badge (only with variant=icon)",
      },
      type: "number",
    },
    badgeAriaLabel: {
      name: "badge-aria-label",
      description: "`aria-label` for badge",
      table: {
        category: "Badge",
      },
    },
    transparent: {
      description: "is icon button is transparent or not",
      table: {
        defaultValue: {
          summary: "false",
        },
        category: "Toggles",
      },
      control: { type: "boolean" },
    },
    onClick: {
      action: "onClick",
      description: "Triggered on click",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ originalEvent }",
        },
      },
    },
    onEscape: {
      action: "onEscape",
      description: "Triggered on escape key",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ originalEvent }",
        },
      },
    },
    onFocus: {
      action: "onFocus",
      description: "Triggered on focus",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ originalEvent }",
        },
      },
    },
    onBlur: {
      action: "onBlur",
      description: "Triggered on blur",
      table: {
        category: "Events",
        defaultValue: {
          summary: "{ originalEvent }",
        },
      },
    },
    spread: {
      control: {
        type: "object",
      },
      description: "Additional attributes being passed to component",
      table: {
        category: "Other",
      },
    },
  },
};

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    href: "",
    disabled: false,
    partiallyDisabled: false,
    badgeNumber: 0,
    ariaLabel: "menu",
  },
);
