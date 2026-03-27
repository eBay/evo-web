import React from "react";
import { StoryObj, StoryFn, Meta } from "@storybook/react-vite";
import { action } from "storybook/actions";

import { EbayBreadcrumbs, EbayBreadcrumbItem as Item } from "../index";

const meta: Meta<typeof EbayBreadcrumbs> = {
    component: EbayBreadcrumbs,
    title: "navigation & disclosure/ebay-breadcrumbs",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayBreadcrumbs, EbayBreadcrumbItem } from "@ebay/ui-core-react/ebay-breadcrumbs";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/breadcrumbs";
import "@ebay/skin/icon";
import "@ebay/skin/utility";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/breadcrumbs.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/utility.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayBreadcrumbs a11yHeadingText="Page navigation">
    <EbayBreadcrumbItem href="https://ebay.com">eBay</EbayBreadcrumbItem>
    <EbayBreadcrumbItem href="https://ebay.com/cars">Auto Parts</EbayBreadcrumbItem>
    <EbayBreadcrumbItem>Motors Parts</EbayBreadcrumbItem>
</EbayBreadcrumbs>
\`\`\``,
            },
        },
    },
    argTypes: {
        a11yHeadingText: {
            description: "heading for breadcrumb which will be clipped (default: 'Page navigation')",
            control: "text",
        },
        a11yHeadingTag: { description: "heading tag for breadcrumb (default: `h2`)", control: "text" },
        onSelect: {
            description: "click breadcrumb items",
            action: "onSelect",
            table: { category: "Events", defaultValue: { summary: "`(event: MouseEvent" } },
        },
        href: { description: "anchor href; omitting the href will switch to a button", control: "text" },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayBreadcrumbs> = () => (
    <>
        <EbayBreadcrumbs onSelect={(e, { el }) => action("select")(e, { el })}>
            <Item href="https://www.ebay.com/">eBay</Item>
            <Item href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches & Accessories</Item>
            <Item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">
                Smart Watch Accessories
            </Item>
            <Item>Smart Watch Bands</Item>
        </EbayBreadcrumbs>
    </>
);

export const AllLinks: StoryObj<typeof EbayBreadcrumbs> = {
    render: () => (
        <>
            <EbayBreadcrumbs a11yHeadingText="Custom page navigation" a11yHeadingTag="h3">
                <Item href="https://www.ebay.com/">eBay</Item>
                <Item href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches & Accessories</Item>
                <Item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">
                    Smart Watch Accessories
                </Item>
                <Item href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906">Smart Watch Bands</Item>
            </EbayBreadcrumbs>
        </>
    ),

    name: "all links",
};

export const CustomProps = () => (
    <>
        <EbayBreadcrumbs className="custom-breadcrumbs" custom-attr="value">
            <Item href="http://www.ebay.com/" navsrc="{}" _sp="p2345.m909.l34" data-track="123">
                eBay
            </Item>
            <Item href="https://www.ebay.com/rpp/cell-phone-pda" navsrc="{}" _sp="p2345.m909.l34" data-track="456">
                Cell Phones, Smart Watches & Accessories
            </Item>
            <Item
                href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905"
                navsrc="{}"
                _sp="p2345.m909.l34"
                data-track="789"
            >
                Smart Watch Accessories
            </Item>
            <Item>Smart Watch Bands</Item>
        </EbayBreadcrumbs>
    </>
);

export const AllButtons: StoryFn<typeof EbayBreadcrumbs> = () => (
    <>
        <EbayBreadcrumbs a11yHeadingText="Custom page navigation" a11yHeadingTag="h3" onSelect={action("select")}>
            {["eBay", "Cell Phones, Smart Watches & Accessories", "Smart Watch Accessories", "Smart Watch Bands"].map(
                (item, index) => (
                    <Item key={index}>{item}</Item>
                ),
            )}
        </EbayBreadcrumbs>
    </>
);
