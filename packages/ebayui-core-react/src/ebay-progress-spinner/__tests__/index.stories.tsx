import React from "react";
import { EbayProgressSpinner } from "../index";

export default {
    title: "progress/ebay-progress-spinner",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayProgressSpinner } from "@ebay/ui-core-react/ebay-progress-spinner";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/progress-spinner";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/progress-spinner.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayProgressSpinner />
\`\`\``,
            },
        },
    },
    argTypes: {
        size: {
            description: "`default` (default), `small`, `large`",
            options: ["default", "small", "large"],
            control: { type: "select" },
        },
        "aria-label": { description: "custom aria label instead of `Busy`", control: "text" },
    },
};

export const DefaultSmallLarge = {
    render: () => (
        <>
            <p>
                <EbayProgressSpinner />
            </p>
            <p>
                <EbayProgressSpinner size="small" aria-label="Stand by..." />
            </p>
            <p>
                <EbayProgressSpinner size="large" aria-label="Stand by..." />
            </p>
        </>
    ),

    name: "Default, Small & Large",
};
