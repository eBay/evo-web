import React from "react";
import { action } from "storybook/actions";
import { EbayIconButton } from "../index";
import { EbayIconMenu20 } from "../../ebay-icon/icons/ebay-icon-menu-20";
import { EbayIconSettings16 } from "../../ebay-icon/icons/ebay-icon-settings-16";
import { EbayIconCart16 } from "../../ebay-icon/icons/ebay-icon-cart-16";
import { EbayIconChat16 } from "../../ebay-icon/icons/ebay-icon-chat-16";

export default {
    title: "buttons/ebay-icon-button",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `This is a circular button with an icon only.

## Usage

### Import

\`\`\`jsx harmony
import { EbayIconButton } from "@ebay/ui-core-react/ebay-icon-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/badge";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";

// When using with "href"
import "@ebay/skin/link";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/badge.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";

/* When using with "href" */
@import "@ebay/skin/link.css";
\`\`\`
### Icon button

### Basic

\`\`\`jsx harmony
<EbayIconButton icon={<EbayIconSettings16 />} aria-label="settings" />
\`\`\`

### With badge

\`\`\`jsx harmony
<EbayIconButton icon={<EbayMenu16Icon />} badgeNumber={1} badgeAriaLabel="new feature available" />
\`\`\``,
            },
        },
    },
    argTypes: {
        icon: { description: "icon name", control: "text" },
        href: { description: "for link that looks like a button", control: "text" },
        badgeAriaLabel: { description: "aria label of the badge", control: "text" },
        badgeNumber: { description: "number on the badge", control: "number" },
        disabled: { description: "Whether the button is disabled", control: { type: "boolean" } },
        transparent: { description: "for transparent background", control: "boolean" },
        size: { description: "alternative size for the icon button, 'large' or 'small'", control: "text" },
        priority: {
            description: "`primary`, `secondary`, `tertiary`, `none` (default)",
            options: ["primary", "secondary", "tertiary", "none"],
            control: { type: "select" },
        },
        onClick: {
            description: "triggered on click",
            action: "onClick",
            table: { category: "Events", defaultValue: { summary: "`(MouseEvent)`" } },
        },
        onEscape: {
            description: "triggered on Esc key press",
            action: "onEscape",
            table: { category: "Events", defaultValue: { summary: "`(KeyboardEvent)`" } },
        },
        onFocus: {
            description: "triggered on keyboard focus",
            action: "onFocus",
            table: { category: "Events", defaultValue: { summary: "`(FocusEvent)`" } },
        },
        onBlur: {
            description: "triggered on focus lost",
            action: "onBlur",
            table: { category: "Events", defaultValue: { summary: "`(FocusEvent)`" } },
        },
    },
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
