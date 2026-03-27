import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import { EbayCtaButton } from "../index";

const meta: Meta<typeof EbayCtaButton> = {
    component: EbayCtaButton,
    title: "buttons/ebay-cta-button",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayCtaButton } from "@ebay/ui-core-react/ebay-cta-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/cta-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/cta-button.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayCtaButton>I'm a CTA button!</EbayCtaButton>
\`\`\``,
            },
        },
    },
    argTypes: {
        size: { description: "can be only `large` or just omit it for default appearance", control: "text" },
        href: { description: "URL", control: "text" },
        fluid: { description: "takes the whole width of the parent element", control: "boolean" },
        truncate: {
            description:
                "will truncate the text of the button onto a single line, and adds an ellipsis, when the button's text overflows",
            control: "boolean",
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayCtaButton> = () => (
    <>
        <p>
            <EbayCtaButton href="https://ebay.com">Take Action Now!</EbayCtaButton>
        </p>
    </>
);

export const Large: StoryFn<typeof EbayCtaButton> = () => (
    <>
        <p>
            <EbayCtaButton href="https://ebay.com" size="large">
                Large Button
            </EbayCtaButton>
        </p>
    </>
);

export const Fluid: StoryFn<typeof EbayCtaButton> = () => (
    <>
        <p>
            <EbayCtaButton href="https://ebay.com" fluid>
                100%
            </EbayCtaButton>
        </p>
        <p>
            <EbayCtaButton href="https://ebay.com" size="large" fluid>
                Large!
            </EbayCtaButton>
        </p>
    </>
);

export const Truncated: StoryFn<typeof EbayCtaButton> = () => (
    <div style={{ maxWidth: "200px" }}>
        <p>
            <EbayCtaButton href="https://ebay.com" truncate>
                Wide Long Call To Action!
            </EbayCtaButton>
        </p>
        <p>
            <EbayCtaButton href="https://ebay.com" size="large" truncate>
                Go Big with Call To Action!
            </EbayCtaButton>
        </p>
    </div>
);
