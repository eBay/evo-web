import React from "react";
import { Meta } from "@storybook/react-vite";
import { EbayIconNotification16 } from "../icons/ebay-icon-notification-16";
import { EbayIconAttentionFilled16 } from "../icons/ebay-icon-attention-filled-16";
import { EbayIconConfirmation16 } from "../icons/ebay-icon-confirmation-16";
import { EbayIconAttention16 } from "../icons/ebay-icon-attention-16";
import EbayIcon from "../icon";

export default {
    component: EbayIcon,
    title: "graphics & icons/ebay-icon",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `The \`EbayIcon\` component will include the actual SVG markup in the HTML and then reference the chosen icon.
Each icon has its own component and all the available icons are listed in the [icons](./icons) folder

## Usage

\`\`\`jsx
import { EbayIconArrowLeft16 } from "@ebay/ui-core-react/icons/ebay-icon-arrow-left-16";
import "@ebay/skin/icon";

<EbayIconArrowLeft16 />;
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
\`\`\`
### Add the \`EbayIconProvider\`

In the root of your app, add the \`EbayIconProvider\` component to avoid loading the SVG markup multiple times for a better server and client performance.

\`\`\`jsx
import { EbayIconProvider } from "@ebay/ui-core-react/ebay-icon";

<EbayIconProvider>
    <App />
</EbayIconProvider>;
\`\`\``,
            },
        },
    },
    argTypes: {
        name: {
            description:
                "name of the icon from [Skin](./types.ts), transparent versions of colored icons has `-transparent` suffix",
            control: "text",
        },
        noSkinClasses: {
            description: "Used for special cases where `icon` classes from Skin should not be applied",
            control: "boolean",
        },
        a11yText: {
            description: "text for non-decorative inline icon; icon is assumed to be decorative if this is not passed",
            control: "text",
        },
        type: {
            description: "'icon' or 'program-badge' default 'icon' (DEPRECATED, use <EbayProgramBadge /> instead)",
            control: "text",
        },
        a11yVariant: {
            description: "Controls aria-label vs aria-labelledby",
            options: ["label"],
            control: { type: "select" },
        },
        prominent: { description: "Adds icon--prominent CSS class", control: "boolean" },
    },
} as Meta;

export const CustomColor = () => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: `.demo3 {color: blue;}` }} />
        <p>
            default <EbayIconNotification16 />
        </p>
        <p>
            with className <EbayIconNotification16 className="demo3" />
        </p>
        <p>
            with style <EbayIconNotification16 style={{ color: "green" }} />
        </p>
        <p>
            with style <EbayIconAttentionFilled16 style={{ color: "purple" }} />
        </p>
    </div>
);

export const NonDecorative = () => (
    <div>
        <EbayIconConfirmation16 a11yText="Confirmation" />
        <EbayIconAttention16 a11yText="Attention" a11yVariant="label" />
    </div>
);
