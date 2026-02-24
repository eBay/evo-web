import "./custom-styles.css";
import "@ebay/skin/dist/tokens/evo-core.css";
import "@ebay/skin/dist/tokens/evo-light.css";
import "@ebay/skin/dist/tokens/evo-dark.css";
import "@ebay/skin/dist/global/global.css";
import "@ebay/skin/dist/utility/utility.css";
import "@ebay/skin/marketsans";

import type { Preview } from "@storybook/marko";
import theme from "./theme";

export default {
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: { expanded: true, sort: "requiredFirst" },
    docs: { theme, controls: { sort: "requiredFirst" } },
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
