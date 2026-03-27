import React from "react";
import { EbaySignal } from "../index";

export default {
    component: EbaySignal,
    title: "graphics & icons/ebay-signal",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Description

Signals are data-backed recommendations to help customers make more informed decisions. There are four signal statuses, each corresponding to a specific color: \`trustworthy\`, \`recent\`, \`time-sensitive\` & \`neutral\`. Defaults to \`neutral\` if none specified.

## Usage

### Import

\`\`\`jsx harmony
import { EbaySignal } from "@ebay/ui-core-react/ebay-signal";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/signal";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/signal.css";
\`\`\`

### Basic

\`\`\`jsx
<EbaySignal status="trustworthy">Top Rated</EbaySignal>
\`\`\``,
            },
        },
    },
    argTypes: {
        status: {
            description:
                "Status of signal; determines color. Possible values: `trustworthy`, `recent`, `time-sensitive` & `neutral` (default)",
            options: ["trustworthy", "recent", "time-sensitive", "neutral"],
            control: { type: "select" },
        },
    },
};

export const DefaultCase = () => (
    <>
        <EbaySignal>Default</EbaySignal>
    </>
);

export const Trustworthy = () => (
    <>
        <EbaySignal status="trustworthy">Trustworthy</EbaySignal>
    </>
);

export const Recent = () => (
    <>
        <EbaySignal status="recent">Recent</EbaySignal>
    </>
);

export const TimeSensitive = () => (
    <>
        <EbaySignal status="time-sensitive">Time-Sensitive</EbaySignal>
    </>
);

export const Neutral = () => (
    <>
        <EbaySignal status="neutral">Neutral</EbaySignal>
    </>
);
