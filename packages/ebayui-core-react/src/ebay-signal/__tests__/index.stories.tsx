import React from "react";
import { EbaySignal } from "../index";
import { EbayIconPromotion12 } from "../../ebay-icon/icons/ebay-icon-promotion-12";

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
<EbaySignal tone="information">Top rated</EbaySignal>
\`\`\`

### Emphasis and icon

\`\`\`jsx
<EbaySignal tone="positive" emphasis="strong" icon={<EbayIconPromotion12 />}>
    Promoted
</EbaySignal>
\`\`\`

\`status\` is deprecated; use \`tone\` (trustworthy → information, recent → positive, time-sensitive → attention).`,
            },
        },
    },
    argTypes: {
        tone: {
            description:
                "Color tone. Takes precedence over `status`. Possible values: `neutral`, `information`, `positive`, `warning` & `attention`",
            options: ["neutral", "information", "positive", "warning", "attention"],
            control: { type: "select" },
        },
        emphasis: {
            description: "Visual emphasis. Possible values: `default`, `strong` & `subtle`",
            options: ["default", "strong", "subtle"],
            control: { type: "select" },
        },
        icon: {
            description: "Optional leading 12px icon, rendered before the label. See the WithIcon story",
            control: false,
        },
        status: {
            description:
                "Deprecated: use `tone`. Possible values: `trustworthy` (information), `recent` (positive), `time-sensitive` (attention) & `neutral` (default)",
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

export const WithIcon = (args) => (
    <>
        <EbaySignal {...args} icon={<EbayIconPromotion12 />}>
            With icon
        </EbaySignal>
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
