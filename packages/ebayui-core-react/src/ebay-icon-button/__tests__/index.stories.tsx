import React from "react";
import { action } from "storybook/actions";
import { EbayIconButton } from "../index";
import { EbayIconMenu20 } from "../../ebay-icon/icons/ebay-icon-menu-20";
import { EbayIconSettings16 } from "../../ebay-icon/icons/ebay-icon-settings-16";
import { EbayIconCart16 } from "../../ebay-icon/icons/ebay-icon-cart-16";
import { EbayIconChat16 } from "../../ebay-icon/icons/ebay-icon-chat-16";

export default {
    title: "buttons/ebay-icon-button",
};

export const Default = () => (
    <>
        <p>
            <EbayIconButton
                onClick={(e: React.MouseEvent) => action("onClick")(e)}
                onFocus={(e: React.FocusEvent) => action("onFocus")(e)}
                onBlur={(e: React.FocusEvent) => action("onBlur")(e)}
                onEscape={(e: React.KeyboardEvent) => action("onEscape")(e)}
                icon={<EbayIconMenu20 />}
                aria-label="Menu"
            />
        </p>
        <p>
            <EbayIconButton href="https://ebay.com" icon={<EbayIconSettings16 />} aria-label="Settings" />
        </p>
    </>
);

export const WithBadges = () => (
    <>
        <p>
            <EbayIconButton
                icon={<EbayIconMenu20 />}
                aria-label="Menu"
                badgeNumber={1}
                badgeAriaLabel="new feature available"
            />
        </p>
        <p>
            <EbayIconButton
                href="https://ebay.com"
                icon={<EbayIconCart16 />}
                badgeNumber={3}
                badgeAriaLabel="3 items in your cart"
                aria-label="Cart"
            />
        </p>
        <p>
            <EbayIconButton
                href="https://ebay.com"
                icon={<EbayIconChat16 />}
                badgeNumber={99}
                badgeAriaLabel="99 unread messages"
                aria-label="Chat"
            />
        </p>
    </>
);

export const Transparent = () => (
    <>
        <p>
            <EbayIconButton onClick={action("clicked")} icon={<EbayIconMenu20 />} transparent aria-label="Menu" />
        </p>
    </>
);

export const WithPriority = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <EbayIconButton onClick={action("clicked")} icon="menu20" aria-label="Menu" />
        <EbayIconButton onClick={action("clicked")} priority="primary" icon="menu20" aria-label="Menu" />
        <EbayIconButton onClick={action("clicked")} priority="secondary" icon="menu20" aria-label="Menu" />
        <EbayIconButton onClick={action("clicked")} priority="tertiary" icon="menu20" aria-label="Menu" />
    </div>
);
