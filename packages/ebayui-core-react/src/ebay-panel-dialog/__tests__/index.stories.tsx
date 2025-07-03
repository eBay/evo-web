import React, { useState } from "react";
import { EbayPanelDialog } from "../index";
import { EbayDialogCloseButton, EbayDialogHeader } from "../../ebay-dialog-base";
import { action } from "storybook/actions";
import { Meta } from "@storybook/react-vite";

const story: Meta<typeof EbayPanelDialog> = {
    component: EbayPanelDialog,
    title: "dialogs/ebay-panel-dialog",
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
