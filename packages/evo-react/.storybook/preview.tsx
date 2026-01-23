import React, { StrictMode } from "react";

import "@ebay/skin/dist/tokens/evo-core.css";
import "@ebay/skin/dist/tokens/evo-light.css";
import "@ebay/skin/dist/tokens/evo-dark.css";
import "@ebay/skin/dist/global/global.css";
import "@ebay/skin/dist/utility/utility.css";
import "@ebay/skin/marketsans";

export default {
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <StrictMode>
        {/* EvoIconProvider will be added when icon components are created */}
        <Story />
      </StrictMode>
    ),
  ],
  globals: {
    a11y: {
      // Disable automatic a11y runs as it impacts performance of storybook.
      // This started after a change introduced in v8.5.0 that runs the axe-core tests
      // in sequence instead of parallel.
      manual: true,
    },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      codePanel: true,
    },
    options: {
      storySort: {
        order: [
          "buttons",
          "data display",
          "dialogs",
          "form input",
          "graphics & icons",
          "media",
          "navigation & disclosure",
          "notices & tips",
          "progress",
          "building blocks",
        ],
      },
    },
  },
};
