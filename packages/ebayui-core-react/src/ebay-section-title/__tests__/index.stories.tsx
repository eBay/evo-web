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
