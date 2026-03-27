import React, { useState } from "react";
import { EbayPanelDialog } from "../index";
import { EbayDialogCloseButton, EbayDialogHeader } from "../../ebay-dialog-base";
import { action } from "storybook/actions";
import { Meta } from "@storybook/react-vite";

const story: Meta<typeof EbayPanelDialog> = {
    component: EbayPanelDialog,
    title: "dialogs/ebay-panel-dialog",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayPanelDialog } from "@ebay/ui-core-react/ebay-panel-dialog";
import { EbayDialogHeader, EbayDialogCloseButton } from "@ebay/ui-core-react/ebay-dialog-base";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/panel-dialog";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/panel-dialog.css";
\`\`\``,
            },
        },
    },
    argTypes: {
        open: { description: "Whether dialog is open.", control: "boolean" },
        position: {
            description:
                "`end` or `start` (default), the position of the panel, either at the start (left side) of the page, or end (right side) of the page.",
            options: ["end", "start"],
            control: { type: "select" },
        },
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
        onClose: { description: "Called when dialog is closed", action: "onClose", table: { category: "Events" } },
        onOpen: { description: "Called when dialog is opened", action: "onOpen", table: { category: "Events" } },
    },
};

const textParagraph = (
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </p>
);

export const _Default = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayPanelDialog
                open={open}
                onOpen={() => action("onOpen")()}
                onClose={() => {
                    action("onClose")();
                    setOpen(false);
                }}
                a11yCloseText="Close"
            >
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayPanelDialog>
        </div>
    );
};

export const _AlwaysOpened = () => (
    <div>
        <p>Some outside content...</p>
        <EbayPanelDialog open a11yCloseText="Close panel">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayPanelDialog>
    </div>
);

export const _FromRight = () => (
    <div>
        <p>Some outside content...</p>
        <EbayPanelDialog position="end" open a11yCloseText="Close">
            <EbayDialogHeader />
            {textParagraph}
        </EbayPanelDialog>
    </div>
);

export const _CustomCloseButton = () => (
    <div>
        <p>Some outside content...</p>
        <EbayPanelDialog open a11yCloseText="Close">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <EbayDialogCloseButton>X</EbayDialogCloseButton>
        </EbayPanelDialog>
    </div>
);

export const _WithAnimation = () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayPanelDialog animated open={open} onClose={close} a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayPanelDialog>
        </>
    );
};

export const _WithAnimationFromRight = () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayPanelDialog animated open={open} onClose={close} position="end" a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayPanelDialog>
        </>
    );
};

export default story;
