import "./custom-styles.css";
import "@ebay/skin/dist/global/global.css";
import "@ebay/skin/dist/utility/utility.css";
import "@ebay/skin/marketsans";

import type { Preview } from "@storybook/marko";

export default {
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: { expanded: true, sort: "requiredFirst" },
    docs: { controls: { sort: "requiredFirst" } },
    options: {
      storySort: {
        order: [
          "Welcome",
          "Getting Started",
          "Contributing",
          "buttons",
          "charts",
          "data-display",
          "dialogs",
          "form input",
          "graphics & icons",
          "layout",
          "media",
          "navigation & disclosure",
          "notices & tips",
          "progress",
          "building blocks",
          "deprecated",
        ],
      },
    },
  },
} satisfies Preview;
