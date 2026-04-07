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

export const DefaultCase = (args) => (
    <>
        <EbaySignal {...args}>Default</EbaySignal>
    </>
);

export const Trustworthy = (args) => (
    <>
        <EbaySignal {...args} status="trustworthy">
            Trustworthy
        </EbaySignal>
    </>
);

export const Recent = (args) => (
    <>
        <EbaySignal {...args} status="recent">
            Recent
        </EbaySignal>
    </>
);

export const TimeSensitive = (args) => (
    <>
        <EbaySignal {...args} status="time-sensitive">
            Time-Sensitive
        </EbaySignal>
    </>
);

export const Neutral = (args) => (
    <>
        <EbaySignal {...args} status="neutral">
            Neutral
        </EbaySignal>
    </>
);
