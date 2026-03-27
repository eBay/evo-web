import React from "react";
import EbaySvg from "../svg";
import { EbayIcon } from "../../ebay-icon";

export default {
    component: EbaySvg,
    title: "graphics & icons/ebay-svg",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `This is a helper component which holds all the SVG icons for your other \`@ebay/ui-core-react\` components.

## Usage

### Import

\`\`\`jsx harmony
import { EbaySvg, EbayFlagsSvg } from "@ebay/ui-core-react/ebay-svg";
\`\`\`

Import it and place at the end of your HTML. Make sure this component is only rendered on the server and never imported on the client side.

### Basic

\`\`\`jsx harmony
<Html>
    <Component1 />
    <Component2 />
    <EbaySvg />
    <EbayFlagsSvg />
</Html>
\`\`\`

### Use only necessary icons

To reduce the size of the HTML and processing time, use only the necessary icons via the \`icons\` attribute.

\`\`\`jsx harmony
<EbaySvg icons={["attention16", "information16"]} />
\`\`\``,
            },
        },
    },
    argTypes: {
        icons: { description: "Yes", control: "text" },
    },
};

export const FilteredIcons = () => (
    <>
        <EbaySvg icons={["notification16", "attention16"]} />
        <EbayIcon name="notification16" />
        <EbayIcon name="attention16" />
    </>
);
