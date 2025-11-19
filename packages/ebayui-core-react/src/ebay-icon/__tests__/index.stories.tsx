import React from "react";
import { Meta } from "@storybook/react-vite";
import { EbayIconNotification16 } from "../icons/ebay-icon-notification-16";
import { EbayIconAttentionFilled16 } from "../icons/ebay-icon-attention-filled-16";
import { EbayIconConfirmation16 } from "../icons/ebay-icon-confirmation-16";
import { EbayIconAttention16 } from "../icons/ebay-icon-attention-16";
import EbayIcon from "../icon";

export default {
    component: EbayIcon,
    title: "graphics & icons/ebay-icon",
} as Meta;

export const CustomColor = () => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: `.demo3 {color: blue;}` }} />
        <p>
            default <EbayIconNotification16 />
        </p>
        <p>
            with className <EbayIconNotification16 className="demo3" />
        </p>
        <p>
            with style <EbayIconNotification16 style={{ color: "green" }} />
        </p>
        <p>
            with style <EbayIconAttentionFilled16 style={{ color: "purple" }} />
        </p>
    </div>
);

export const NonDecorative = () => (
    <div>
        <EbayIconConfirmation16 a11yText="Confirmation" />
        <EbayIconAttention16 a11yText="Attention" a11yVariant="label" />
    </div>
);
