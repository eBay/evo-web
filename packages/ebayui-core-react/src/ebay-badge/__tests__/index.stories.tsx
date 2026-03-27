import { Meta, StoryObj } from "@storybook/react-vite";
import { EbayBadge } from "../index";
import { EbayBadgeProps } from "../badge";

const meta: Meta<typeof EbayBadge> = {
    component: EbayBadge,
    title: "graphics & icons/ebay-badge",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayBadge } from "@ebay/ui-core-react/ebay-badge";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/badge";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/badge.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayBadge number={5} />
\`\`\``,
            },
        },
    },
    argTypes: {
        type: { description: "Yes", control: "text" },
        number: { description: "Yes", control: "number" },
        "aria-label": { description: "Yes", control: "text" },
    },
};

export default meta;

export const Default: StoryObj<EbayBadgeProps> = {
    args: {
        "aria-label": "1 unread item",
        number: 1,
    },
};

export const Zero: StoryObj<EbayBadgeProps> = {
    args: {
        "aria-label": "0 unread items",
        number: 0,
    },
};

export const BigNumbers: StoryObj<EbayBadgeProps> = {
    args: {
        "aria-label": "120 unread items",
        number: 120,
    },
};
