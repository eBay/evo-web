import React from "react";
import { Meta } from "@storybook/react-vite";

import { EbayFakeTabs, EbayFakeTab as Tab } from "../index";

const meta: Meta<typeof EbayFakeTabs> = {
    title: "navigation & disclosure/ebay-fake-tabs",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Import

\`\`\`jsx harmony
import { EbayFakeTabs, EbayFakeTab } from "@ebay/ui-core-react/ebay-fake-tabs";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/tabs";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/tabs.css";
\`\`\``,
            },
        },
    },
    argTypes: {
        selectedIndex: { description: "0-based index of selected tab heading", control: "number" },
        size: { description: "Sets the size of the tabs. Can be either regular (Default) or large", control: "text" },
        tabMatchesCurrentUrl: {
            description:
                'Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true").',
            control: "boolean",
        },
        href: { description: "The link to take the user to for each tab", control: "text" },
    },
};

export default meta;

export const DefaultTabs = () => (
    <>
        <EbayFakeTabs>
            <Tab href="http://ebay.com">eBay.com</Tab>
            <Tab href="http://ebay.de">eBay.de</Tab>
            <Tab href="http://ebay.co.uk">eBay.co.uk</Tab>
            <h3>eBay.com Content</h3>
            <p>Some US content...</p>
        </EbayFakeTabs>
    </>
);

export const PreSelectedTab = {
    render: () => (
        <>
            <EbayFakeTabs selectedIndex={1}>
                <Tab href="http://ebay.com">eBay.com</Tab>
                <Tab href="http://ebay.de">eBay.de</Tab>
                <Tab href="http://ebay.co.uk">eBay.co.uk</Tab>
                <h3>eBay.de Content</h3>
                <p>Some German content...</p>
            </EbayFakeTabs>
        </>
    ),

    name: "Pre-selected Tab",
};

export const Disabled = () => (
    <>
        <EbayFakeTabs>
            <Tab href="http://ebay.com">eBay.com</Tab>
            <Tab>eBay.de</Tab>
            <Tab href="http://ebay.co.uk">eBay.co.uk</Tab>
            <h3>eBay.com Content</h3>
            <p>Some US content...</p>
        </EbayFakeTabs>
    </>
);

export const TabMatchesCurrentUrlFalse = {
    render: () => (
        <>
            <EbayFakeTabs tabMatchesCurrentUrl={false} selectedIndex={2}>
                <Tab href="http://ebay.com">eBay.com</Tab>
                <Tab href="http://ebay.de">eBay.de</Tab>
                <Tab href="http://ebay.co.uk">eBay.co.uk</Tab>
                <h3>eBay.co.uk Content</h3>
                <p>Some British content...</p>
            </EbayFakeTabs>
        </>
    ),

    name: "tabMatchesCurrentUrl: false",
};
