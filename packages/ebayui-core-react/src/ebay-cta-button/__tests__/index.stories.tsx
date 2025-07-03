import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import { EbayCtaButton } from "../index";

const meta: Meta<typeof EbayCtaButton> = {
    component: EbayCtaButton,
    title: "buttons/ebay-cta-button",
};

export default meta;

export const Default: StoryFn<typeof EbayCtaButton> = () => (
    <>
        <p>
            <EbayCtaButton href="https://ebay.com">Take Action Now!</EbayCtaButton>
        </p>
    </>
);

export const Large: StoryFn<typeof EbayCtaButton> = () => (
    <>
        <p>
            <EbayCtaButton href="https://ebay.com" size="large">
                Large Button
            </EbayCtaButton>
        </p>
    </>
);

export const Fluid: StoryFn<typeof EbayCtaButton> = () => (
    <>
        <p>
            <EbayCtaButton href="https://ebay.com" fluid>
                100%
            </EbayCtaButton>
        </p>
        <p>
            <EbayCtaButton href="https://ebay.com" size="large" fluid>
                Large!
            </EbayCtaButton>
        </p>
    </>
);

export const Truncated: StoryFn<typeof EbayCtaButton> = () => (
    <div style={{ maxWidth: "200px" }}>
        <p>
            <EbayCtaButton href="https://ebay.com" truncate>
                Wide Long Call To Action!
            </EbayCtaButton>
        </p>
        <p>
            <EbayCtaButton href="https://ebay.com" size="large" truncate>
                Go Big with Call To Action!
            </EbayCtaButton>
        </p>
    </div>
);
