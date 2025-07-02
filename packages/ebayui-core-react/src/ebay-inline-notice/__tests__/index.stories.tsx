import React, { useState } from "react";
import { action } from "storybook/actions";
import { EbayButton } from "../../ebay-button";
import { EbayInlineNotice, EbayNoticeContent } from "../index";

export default {
    title: "notices & tips/ebay-inline-notice",
};

export const Default = () => (
    <>
        <EbayInlineNotice aria-label="General">
            <EbayNoticeContent>
                <p>text message</p>
            </EbayNoticeContent>
        </EbayInlineNotice>
    </>
);

export const ConfirmationMessage = {
    render: () => (
        <>
            <EbayInlineNotice status="confirmation" aria-label="Confirmation">
                <EbayNoticeContent>
                    <p>Delivered on May 1, 2017</p>
                    <p>
                        Tracking number: <a href="http://www.ebay.com">93878473859376898908657567</a>
                    </p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>
    ),

    name: "Confirmation message",
};

export const InformationMessage = {
    render: () => (
        <>
            <EbayInlineNotice status="information" aria-label="Information">
                <EbayNoticeContent>
                    <p>Global Shipping Program transaction.</p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>
    ),

    name: "Information message",
};

export const AttentionMessage = {
    render: () => (
        <>
            <EbayInlineNotice status="attention" aria-label="Attention">
                <EbayNoticeContent>
                    <p>Update your credit card.</p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>
    ),

    name: "Attention message",
};

export const NoticeToggle = {
    render: () => (
        <>
            <NoticeToggleStory />
        </>
    ),

    name: "Notice toggle",
};

function NoticeToggleStory() {
    const [hidden, setHidden] = useState(false);
    return (
        <>
            <EbayButton onClick={() => setHidden(!hidden)}>{hidden ? "Show" : "Hide"} Notice</EbayButton>
            <EbayInlineNotice
                status="confirmation"
                hidden={hidden}
                onNoticeShow={action("Showing")}
                aria-label="Toggle notice"
            >
                <EbayNoticeContent>
                    <p>Delivered on May 1, 2017</p>
                    <p>
                        Tracking number: <a href="http://www.ebay.com">93878473859376898908657567</a>
                    </p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>
    );
}
