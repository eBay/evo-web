import React from "react";
import { action } from "storybook/actions";
import { EbaySectionNotice, EbayNoticeContent, EbaySectionNoticeTitle, EbaySectionNoticeFooter } from "../index";

export default {
    title: "notices & tips/ebay-section-notice",
};

export const DefaultMessageWithNoAction = {
    render: () => (
        <>
            <EbaySectionNotice>
                <EbayNoticeContent>
                    <p>
                        Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                        section of this page.
                    </p>
                </EbayNoticeContent>
            </EbaySectionNotice>
        </>
    ),

    name: "Default message (with no action)",
};

export const DefaultMessageWithAction = {
    render: () => (
        <>
            <EbaySectionNotice>
                <EbayNoticeContent>
                    <p>
                        Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                        section of this page.
                    </p>
                </EbayNoticeContent>
                <EbaySectionNoticeFooter>
                    <button onClick={action("Action Button Clicked")} className="fake-link">
                        Do something
                    </button>
                </EbaySectionNoticeFooter>
            </EbaySectionNotice>
        </>
    ),

    name: "Default message (with action)",
};

export const ConfirmationMessage = {
    render: () => (
        <>
            <EbaySectionNotice status="confirmation">
                <EbayNoticeContent>
                    <EbaySectionNoticeTitle>
                        This successfully finished! <a href="http://www.ebay.com">next page</a>
                    </EbaySectionNoticeTitle>
                </EbayNoticeContent>
                <EbaySectionNoticeFooter>
                    <button onClick={action("Action Button Clicked")} className="fake-link">
                        Take a look
                    </button>
                </EbaySectionNoticeFooter>
            </EbaySectionNotice>
        </>
    ),

    name: "Confirmation message",
};

export const InformationMessageDismissable = {
    render: () => (
        <>
            <EbaySectionNotice status="information" a11yDismissText="Dismiss" onDismiss={(e) => action("onDismiss")(e)}>
                <EbayNoticeContent>
                    <EbaySectionNoticeTitle>
                        <strong>Good news!</strong> You get free shipping on your next pair of shoes!&nbsp;
                        <a href="http://www.ebay.com">Learn more</a>.
                    </EbaySectionNoticeTitle>
                </EbayNoticeContent>
                <p className="section-notice__cta">
                    <a href="https://www.ebay.com">Opt in</a>
                </p>
            </EbaySectionNotice>
        </>
    ),

    name: "Information message (dismissable)",
};

export const AttentionMessage = {
    render: () => (
        <>
            <EbaySectionNotice status="attention">
                <EbayNoticeContent>
                    <p>
                        <strong>Error.</strong> Please take another look at the following:
                        <br />
                        <a href="http://www.ebay.com">Card number</a>,<a href="http://www.ebay.com">Expiration date</a>{" "}
                        &amp;
                        <a href="http://www.ebay.com">Security code</a>.
                    </p>
                </EbayNoticeContent>
                <EbaySectionNoticeFooter>
                    <button onClick={action("Action Button Clicked")} className="fake-link">
                        Show more
                    </button>
                </EbaySectionNoticeFooter>
            </EbaySectionNotice>
        </>
    ),

    name: "Attention message",
};

export const SectionWithTitle = {
    render: () => (
        <>
            <EbaySectionNotice>
                <EbayNoticeContent>
                    <EbaySectionNoticeTitle>Title</EbaySectionNoticeTitle>
                    <p>
                        Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                        section of this page.
                    </p>
                </EbayNoticeContent>
            </EbaySectionNotice>
        </>
    ),

    name: "Section with title",
};

export const SectionWithLink = {
    render: () => (
        <>
            <EbaySectionNotice>
                <EbayNoticeContent>
                    <EbaySectionNoticeTitle>Title</EbaySectionNoticeTitle>
                    <p>
                        Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                        section of this page.
                    </p>
                </EbayNoticeContent>
                <EbaySectionNoticeFooter>
                    <a href="https://www.ebay.com">Go see details</a>
                </EbaySectionNoticeFooter>
            </EbaySectionNotice>
        </>
    ),

    name: "Section with link",
};

export const EducationalSectionNotice = () => (
    <>
        <EbaySectionNotice status="education">
            <EbayNoticeContent>
                <p>
                    Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                    section of this page.
                </p>
            </EbayNoticeContent>
        </EbaySectionNotice>
    </>
);

export const EducationalSectionNoticeProminent = () => (
    <>
        <EbaySectionNotice status="education" prominent>
            <EbayNoticeContent>
                <p>
                    Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                    section of this page.
                </p>
            </EbayNoticeContent>
        </EbaySectionNotice>
    </>
);

export const EducationalSectionNoticeCustomIcon = () => (
    <>
        <EbaySectionNotice status="education" prominent educationIcon="lightningBolt24">
            <EbayNoticeContent>
                <p>
                    Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                    section of this page.
                </p>
            </EbayNoticeContent>
        </EbaySectionNotice>
    </>
);
