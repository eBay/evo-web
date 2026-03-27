import React, { useState } from "react";
import { Meta } from "@storybook/react-vite";
import { EbayFullscreenDialogDeprecated } from "../index";
import { EbayDialogFooter, EbayDialogHeader } from "../../ebay-dialog-base";
import { action } from "storybook/actions";

const story: Meta<typeof EbayFullscreenDialogDeprecated> = {
    component: EbayFullscreenDialogDeprecated,
    title: "deprecated/ebay-fullscreen-dialog-deprecated",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `**Deprecated will be removed next major** (Use \`EbayLightboxDialog\` instead)

## Usage

### Import

\`\`\`jsx harmony
import { EbayFullscreenDialogDeprecated } from "@ebay/ui-core-react/ebay-fullscreen-dialog-deprecated";
import { EbayDialogHeader, EbayDialogFooter } from "@ebay/ui-core-react/ebay-dialog-base";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/fullscreen-dialog";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/fullscreen-dialog.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
\`\`\``,
            },
        },
    },
    argTypes: {
        open: { description: "Whether dialog is open.", control: "boolean" },
        focus: {
            description:
                "An id for an element which will receive focus when the drawer opens (defaults to close button).",
            control: "text",
        },
        a11yCloseText: { description: "A11y text for close button and mask.", control: "text" },
        animated: {
            description: "Renders the dialog with an animation. Note that the dialog will always be present in the DOM",
            control: "boolean",
        },
        onClose: { description: "Triggered when the dialog is closed", action: "onClose" },
        onOpen: { description: "Triggered when the dialog is opened", action: "onOpen" },
    },
};

export const Default = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayFullscreenDialogDeprecated
                open={open}
                onOpen={() => action("onOpen")()}
                onClose={() => {
                    action("onClose")();
                    setOpen(false);
                }}
                a11yCloseText="Close"
            >
                <EbayDialogHeader>Heading</EbayDialogHeader>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayFullscreenDialogDeprecated>
        </div>
    );
};

export const AlwaysOpened = () => (
    <div>
        <p>Some outside content...</p>
        <EbayFullscreenDialogDeprecated open a11yCloseText="Close dialog">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
            <EbayDialogFooter>©2021 eBay</EbayDialogFooter>
        </EbayFullscreenDialogDeprecated>
    </div>
);

export const WithAnimation = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayFullscreenDialogDeprecated open={open} onClose={() => setOpen(false)} animated a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayFullscreenDialogDeprecated>
        </div>
    );
};

export default story;
