import React from "react";
import { EbayInfotip, EbayInfotipContent, EbayInfotipHeading } from "../../ebay-infotip";
import {
    EbaySectionTitle,
    EbaySectionTitleTitle as Title,
    EbaySectionTitleSubtitle as Subtitle,
    EbaySectionTitleInfo as Info,
} from "../index";
import { EbayIconInformation16 } from "../../ebay-icon/icons/ebay-icon-information-16";

export default {
    title: "navigation & disclosure/ebay-section-title",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import {
    EbaySectionTitle,
    EbaySectionTitleTitle as Title,
    EbaySectionTitleSubtitle as Subtitle
} from "@ebay/ui-core-react/ebay-section-title";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/section-title";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/section-title.css";
\`\`\`

### Basic

\`\`\`jsx
<EbaySectionTitle href="https://www.ebay.com" ctaText="See All">
    <Title>Today's Deals</Title>
    <Subtitle>Plus, guaranteed best prices.</Subtitle>
</EbaySectionTitle>
\`\`\``,
            },
        },
    },
    argTypes: {
        ctaText: {
            description:
                "URL text. Optional content to be displayed next to title. `href` is required when using this attribute.",
            control: "text",
        },
        href: {
            description:
                "URL. Title content and optional CTA content will link to this. Populating `cta-text` is optional.",
            control: "text",
        },
        title: {
            description: "The main title content to be displayed. Title tag is required when using other sub-tags.",
            control: "text",
        },
        subtitle: { description: "The subtitle content to be displayed", control: "text" },
        info: { description: "Placeholder for `<EbayInfotip>` component", control: "text" },
        overflow: { description: "Placeholder for `<EbayMenuButton>` component", control: "text" },
    },
};

export const Default = () => (
    <>
        <EbaySectionTitle>Default Section Title</EbaySectionTitle>
    </>
);

export const WithSubtitle = () => (
    <>
        <EbaySectionTitle>
            <Title>Today’s Deals – All With Free Shipping</Title>
            <Subtitle>Plus, guaranteed best prices.</Subtitle>
        </EbaySectionTitle>
    </>
);

export const WithTitleButWOSubtitle = {
    render: () => (
        <>
            <EbaySectionTitle>
                <Title>Missing subtitle shouldn&apos;t throw</Title>
            </EbaySectionTitle>
        </>
    ),

    name: "With Title But W/O Subtitle",
};

export const WithCta = {
    render: () => (
        <>
            <EbaySectionTitle href="https://www.ebay.com">
                <Title>Today’s Deals – All With Free Shipping</Title>
                <Subtitle>Plus, guaranteed best prices.</Subtitle>
            </EbaySectionTitle>

            <EbaySectionTitle href="https://www.ebay.com" ctaText="See All">
                <Title>Today’s Deals – All With Free Shipping</Title>
                <Subtitle>Plus, guaranteed best prices.</Subtitle>
            </EbaySectionTitle>
        </>
    ),

    name: "With CTA",
};

export const WithInfo = () => (
    <>
        <EbaySectionTitle>
            <Title>Today’s Deals – All With Free Shipping</Title>
            <Subtitle>Plus, guaranteed best prices.</Subtitle>
            <Info>
                <EbayInfotip
                    a11yCloseText="Dismiss infotip"
                    aria-label="Important information"
                    pointer="top-left"
                    icon={<EbayIconInformation16 />}
                >
                    <EbayInfotipHeading>Important</EbayInfotipHeading>
                    <EbayInfotipContent>
                        <p>This is some important info</p>
                    </EbayInfotipContent>
                </EbayInfotip>
            </Info>
        </EbaySectionTitle>
    </>
);
