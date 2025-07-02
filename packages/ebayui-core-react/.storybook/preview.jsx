import React, { StrictMode } from "react";
import { EbaySvg } from "../src/ebay-svg";
import "@ebay/skin";
import "@ebay/skin/dist/tokens/evo-core.css";
import "@ebay/skin/dist/tokens/evo-light.css";
import "@ebay/skin/dist/marketsans/marketsans.css";

export default {
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <StrictMode>
                <EbaySvg />
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
