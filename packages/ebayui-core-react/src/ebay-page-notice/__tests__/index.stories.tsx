import React from "react";
import { EbayPageNotice, EbayNoticeContent, EbayPageNoticeTitle, EbayPageNoticeFooter, EbayPageNoticeCTA } from "..";
import { action } from "storybook/actions";

export default {
    title: "notices & tips/ebay-page-notice",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Import

\`\`\`jsx harmony
import {
    EbayPageNotice,
    EbayNoticeContent,
    EbayPageNoticeTitle,
    EbayPageNoticeFooter,
    EbayPageNoticeCTA,
} from "@ebay/ui-core-react/ebay-page-notice";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/page-notice";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/page-notice.css";
@import "@ebay/skin/icon.css";
\`\`\``,
            },
        },
    },
    argTypes: {
        status: { description: "Determines the style and type of notice to be displayed", control: "text" },
        "aria-label": {
            description:
                "The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context.",
            control: "text",
        },
        children: { description: "The content to be displayed within the notice", control: "text" },
        a11yDismissText: {
            description:
                "Determines if the notice will have a dismiss button. Acts as the aria-label for the dismiss button. Should not be used with a footer.",
            control: "text",
        },
        onDismiss: {
            description: "Triggered on notice dismiss",
            action: "onDismiss",
            table: { category: "Events", defaultValue: { summary: "(Event)" } },
        },
    },
};

export const SimpleUsage = () => (
    <>
        <EbayPageNotice aria-label="Default">
            <EbayNoticeContent>text message</EbayNoticeContent>
        </EbayPageNotice>
    </>
);

export const SimpleUsageWithId = () => (
    <>
        <EbayPageNotice status="confirmation" aria-label="Success" id="main-page-notice">
            <EbayNoticeContent>text message</EbayNoticeContent>
        </EbayPageNotice>
    </>
);

export const ConfirmationMessage = () => (
    <>
        <EbayPageNotice status="confirmation" aria-label="Success">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Congrats!</EbayPageNoticeTitle>
                <p>
                    You just listed <a href="#link">Spam and Eggs From the Cows Perspective</a> (paperback).
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>
);

export const InformationMessage = () => (
    <>
        <EbayPageNotice status="information" aria-label="Information">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Good news!</EbayPageNoticeTitle>
                <p>
                    You get free shipping on your next pair of shoes! <a href="#link">Learn more</a>.
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>
);

export const AttentionMessage = () => (
    <>
        <EbayPageNotice status="attention" aria-label="Attention">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Error.</EbayPageNoticeTitle>
                <p>
                    Please take another look at the following:
                    <br />
                    <a href="#link">Card number</a>, <a href="#link">Expiration date</a> &amp;{" "}
                    <a href="#link">Security code</a>.
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>
);

export const MessageWithFooter = () => (
    <>
        <EbayPageNotice status="confirmation" aria-label="Congratulations">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Your order&apos;s in!</EbayPageNoticeTitle>
                <p>We&apos;ll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.</p>
            </EbayNoticeContent>
            <EbayPageNoticeFooter>
                <a href="https://ebay.com">Action</a>
            </EbayPageNoticeFooter>
        </EbayPageNotice>
    </>
);

export const DismissibleNotice = () => (
    <>
        <EbayPageNotice
            status="information"
            aria-label="Information"
            a11yDismissText="Close"
            onDismiss={(e) => action("onDismiss")(e)}
        >
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Good news!</EbayPageNoticeTitle>
                <p>
                    You get free shipping on your next pair of shoes! <a href="#link">Learn more</a>.
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>
);

export const DismissibleMessageWithCta = () => (
    <>
        <EbayPageNotice status="information" aria-label="Congratulations" a11yDismissText="Close">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Your order&apos;s in!</EbayPageNoticeTitle>
                <p>We&apos;ll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.</p>
            </EbayNoticeContent>
            <EbayPageNoticeCTA>
                <a href="https://ebay.com">Action</a>
            </EbayPageNoticeCTA>
        </EbayPageNotice>
    </>
);
