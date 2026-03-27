import React from "react";
import type { Meta } from "@storybook/react-vite";
import { EbayFlag, EbayFlagIcon } from "../index";
import { icons } from "./constants";

export default {
    component: EbayFlagIcon,
    title: "graphics & icons/ebay-flag",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `The component will include the actual SVG markup in the HTML and then reference the chosen flag.

## Usage

\`\`\`jsx
import { EbayFlag } from "@ebay/ui-core-react/ebay-flag";
import "@ebay/skin/icon";
import "@ebay/skin/flag";

<EbayFlag name="us" />;
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/flag";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/flag.css";
@import "@ebay/skin/icon.css";
\`\`\`
### Notes

Make sure you use \`<EbayFlagsSvg />\` in your code (ideally on server side only), so that actual SVG icons exist inside HTML.`,
            },
        },
    },
    argTypes: {
        name: { description: "name of the flags from [Skin](./types.ts)", control: "text" },
        a11yText: {
            description: "text for non-decorative inline flag; flag is assumed to be decorative if this is not passed",
            control: "text",
        },
    },
} as Meta;

export const AllSVGFlags = () => (
    <table>
        <tbody>
            {icons.map((icon, i) => (
                <tr key={i}>
                    <td>{icon}</td>
                    <td key={icon}>
                        <EbayFlagIcon name={icon} />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export const AllFlagsSpan = () => (
    <table>
        <tbody>
            {icons.map((icon, i) => (
                <tr key={i}>
                    <td>{icon}</td>
                    <td key={icon}>
                        <EbayFlag flag={icon} style={{ height: 18, width: 24 }} />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);
