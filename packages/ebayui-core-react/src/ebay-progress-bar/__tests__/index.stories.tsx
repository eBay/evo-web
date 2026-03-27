import React from "react";
import { EbayProgressBar } from "../index";

export default {
    title: "progress/ebay-progress-bar",
    component: EbayProgressBar,

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `The progress bar gives an immediate, real-time visualisation of the current task completion status.

## Usage

### Import

\`\`\`jsx harmony
import { EbayProgressBar } from "@ebay/ui-core-react/ebay-progress-bar";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/progress-bar";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/progress-bar.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayProgressBar value={50} />
\`\`\``,
            },
        },
    },
    argTypes: {
        value: { description: "Current value (<= Max)", control: "text" },
        max: { description: "Maximal value, default: 100", control: "text" },
        fluid: { description: "Fills the full width of its container", control: "boolean" },
    },
};

export const Default = () => (
    <>
        <p>
            0%
            <br />
            <EbayProgressBar />
        </p>
        <p>
            50%
            <br />
            <EbayProgressBar value={50} />
        </p>
        <p>
            100%
            <br />
            <EbayProgressBar value={100} />
        </p>
    </>
);

export const CustomMax = () => (
    <>
        <p>
            50/200
            <br />
            <EbayProgressBar value={50} max={200} />
        </p>
        <p>
            100/200
            <br />
            <EbayProgressBar value={100} max={200} />
        </p>
    </>
);

export const Fluid = () => (
    <>
        <p>
            <EbayProgressBar fluid value={50} />
        </p>
    </>
);
