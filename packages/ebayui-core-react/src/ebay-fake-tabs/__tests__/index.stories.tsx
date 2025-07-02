import React from "react";
import { Meta } from "@storybook/react-vite";

import { EbayFakeTabs, EbayFakeTab as Tab } from "../index";

const meta: Meta<typeof EbayFakeTabs> = {
    title: "navigation & disclosure/ebay-fake-tabs",
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
