import React, { useState } from "react";
import { action } from "storybook/actions";
import { EbayButton } from "../../ebay-button";
import { EbayInlineNotice, EbayNoticeContent } from "../index";

export default {
    title: "notices & tips/ebay-inline-notice",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayInlineNotice, EbayNoticeContent } from "@ebay/ui-core-react/ebay-inline-notice";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/inline-notice";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/inline-notice.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayInlineNotice status="confirmation" aria-label="Confirmation">
    <EbayNoticeContent>
        <p>Delivered on May 1, 2017</p>
    </EbayNoticeContent>
</EbayInlineNotice>
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
        hidden: { description: "Determines whether the notice is hidden or not.", control: "boolean" },
        onNoticeShow: {
            description: "A function that is called when the notice is displayed",
            action: "onNoticeShow",
            table: { category: "Events" },
        },
        children: {
            description:
                "The content to be displayed within the notice. **Must have the EbayNoticeContent within the children!**",
            control: "text",
        },
    },
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
