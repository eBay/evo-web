import React from "react";
import { EbayPageNotice, EbayNoticeContent, EbayPageNoticeTitle, EbayPageNoticeFooter, EbayPageNoticeCTA } from "..";
import { action } from "storybook/actions";

export default {
    title: "notices & tips/ebay-page-notice",
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
