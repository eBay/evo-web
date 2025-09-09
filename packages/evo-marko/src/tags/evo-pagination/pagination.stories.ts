import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import basicLinksTemplate from "./examples/basic-links.marko";
import basicLinksTemplateCode from "./examples/basic-links.marko?raw";
import buttonsTemplate from "./examples/buttons.marko";
import buttonsTemplateCode from "./examples/buttons.marko?raw";
import interactiveTemplate from "./examples/buttons-interactive.marko";
import interactiveTemplateCode from "./examples/buttons-interactive.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./temp";

export default {
  title: "navigation & disclosure/evo-pagination",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    a11yCurrentText: {
      control: { type: "text" },
      description: "Description for the current page (e.g. Results of Page 1)",
    },
    variant: {
      control: { type: "select" },

      table: {
        defaultValue: {
          summary: "show-range",
        },
      },

      options: ["show-last", "show-range", "overflow"],
      description:
        "Either `show-last`, or `show-range`. If `show-last` then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible.",
    },
    disabled: {
      name: "disabled",
      table: {
        category: "@item attribute tags",
      },
      description: "Previous/next button is disabled or not",
    },
    href: {
      name: "href",
      table: {
        category: "@item attribute tags",
      },
      description:
        "for link that looks like a menu-item; omitting the href will switch to a button",
    },
    item: {
      name: "@item",
      table: {
        category: "@attribute tags",
      },
    },
    "@item variant": {
      name: "variant",
      table: {
        category: "@item attribute tags",
      },
      description:
        '"button" or "link". Will force an item to be a link if href is omitted. Defaults to button. If not specified, tag type will still be controlled by `href`',
    },
    prev: {
      name: "@prev",
      table: {
        category: "@attribute tags",
      },
    },
    "@prev variant": {
      name: "variant",
      table: {
        category: "@prev attribute tags",
      },
      description:
        '"button" or "link". Will force an item to be a link if href is omitted. Defaults to button. If not specified, tag type will still be controlled by `href`',
    },
    "@prev aria-label": {
      name: "variant",
      table: {
        category: "@prev attribute tags",
      },
      description:
        'The aria-label for the prev button. This is required. Defaults to "Previous page"',
    },
    next: {
      name: "@next",
      table: {
        category: "@attribute tags",
      },
    },
    "@next variant": {
      name: "variant",
      table: {
        category: "@next attribute tags",
      },
      description:
        '"button" or "link". Will force an item to be a link if href is omitted. Defaults to button. If not specified, tag type will still be controlled by `href`',
    },
    "@next aria-label": {
      name: "variant",
      table: {
        category: "@next attribute tags",
      },
      description:
        'The aria-label for the next button. This is required. Defaults to "Next page"',
    },

    current: {
      name: "current",
      table: {
        category: "@item attribute tags",
      },
      description: "the current page",
    },
    type: {
      name: "type",
      table: {
        category: "@item attribute tags",
      },
      description: `"previous", "next" or "page"(default). To specify if the information entered is for the previous or next arrrow button or a page. If the type='previous  | next' isn't provided the previous/next arrow buttons will be taken as'disabled'`,
    },
  },
};

export const Links = buildExtensionTemplate(
  basicLinksTemplate,
  basicLinksTemplateCode,
  {
    a11yPreviousText: "previous",
    a11yNextText: "next",
    a11yCurrentText: "Current page",
  },
);

export const Buttons = buildExtensionTemplate(
  buttonsTemplate,
  buttonsTemplateCode,
  {
    a11yPreviousText: "previous",
    a11yNextText: "next",
    a11yCurrentText: "Current page",
  },
);

export const Interactive = buildExtensionTemplate(
  interactiveTemplate,
  interactiveTemplateCode,
  {
    a11yPreviousText: "previous",
    a11yNextText: "next",
    a11yCurrentText: "Current page",
  },
);
