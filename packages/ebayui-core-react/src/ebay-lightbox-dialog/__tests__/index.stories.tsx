import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EbayDialogFooter, EbayDialogHeader, EbayDialogPreviousButton } from "../../ebay-dialog-base";
import { EbayButton } from "../../ebay-button";
import { EbayCheckbox } from "../../ebay-checkbox";
import { EbayLabel } from "../../ebay-field";
import { EbayLightboxDialog } from "../index";

const story: Meta<typeof EbayLightboxDialog> = {
    title: "dialogs/ebay-lightbox-dialog",
    component: EbayLightboxDialog,

    argTypes: {
        open: {
            type: "boolean",
            control: { type: "boolean" },
            description: "Whether dialog is open.",
        },
        focus: {
            control: { type: "text" },
            description:
                "An id for an element which will receive focus when the dialog opens (defaults to close button).",
        },
        a11yCloseText: {
            control: { type: "text" },
            description: "A11y text for close button and mask.",
        },
        bannerImgSrc: {
            control: { type: "text" },
            description: "Image source for the expressive variant",
        },
        bannerImgPosition: {
            control: { type: "text" },
            description:
                "Position of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)",
        },
        size: {
            options: ["regular", "wide", "narrow", "large"],
            description: "The size of the dialog",
            table: {
                defaultValue: {
                    summary: "regular",
                },
            },
            type: { category: "Options" },
        },
        onOpen: {
            action: "onOpen",
            description: "Triggered on dialog opened",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onClose: {
            action: "onClose",
            description: "Triggered on dialog closed.",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
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

export const Default: StoryFn<typeof EbayLightboxDialog> = (args) => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog
                {...args}
                open={open}
                onOpen={() => action("onOpen")()}
                onClose={() => {
                    action("onClose")();
                    close();
                }}
                a11yCloseText="Close"
            >
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>
                        OK
                    </EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>
    );
};

export const AlwaysOpened: StoryFn<typeof EbayLightboxDialog> = (args) => (
    <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>
);

export const ScrollingContent: StoryFn<typeof EbayLightboxDialog> = (args) => (
    <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>
);

export const MiniDialog: StoryFn<typeof EbayLightboxDialog> = (args) => (
    <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} mode="mini" open a11yCloseText="Close">
            <EbayDialogHeader />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
        </EbayLightboxDialog>
    </div>
);

export const DisableDialogClose: StoryFn<typeof EbayLightboxDialog> = (args) => {
    const [showDialog, setShowDialog] = useState(false);
    const [dialogCloseable, setDialogCloseable] = useState(true);
    const closeDialog = () => {
        if (dialogCloseable) {
            setShowDialog(false);
        }
    };

    return (
        <div>
            <EbayButton onClick={() => setShowDialog(!showDialog)}>Show Dialog</EbayButton>

            <EbayLightboxDialog {...args} open={showDialog} onClose={closeDialog} a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>

                <p>Unselect the following checkbox to prevent user to close the dialog</p>
                <EbayCheckbox
                    id="checkbox-closeable"
                    checked={dialogCloseable}
                    onChange={() => setDialogCloseable(!dialogCloseable)}
                >
                    <EbayLabel>Enable closing dialog</EbayLabel>
                </EbayCheckbox>

                <p>
                    Normally, the dialog can be closed by either:
                    <ul>
                        <li>clicking [X] icon on top of the dialog</li>
                        <li>clicking OK button</li>
                        <li>clicking the overlay or area outside the dialog</li>
                        <li>Press Esc key on keyboard</li>
                    </ul>
                </p>

                <EbayDialogFooter>
                    <EbayButton onClick={closeDialog}>OK</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>
    );
};

export const WithAnimation: StoryFn<typeof EbayLightboxDialog> = (args) => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog {...args} open={open} onClose={close} animated a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>
                        OK
                    </EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>
    );
};
export const WithNoBackgroundClick: StoryFn<typeof EbayLightboxDialog> = (args) => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog {...args} open={open} onClose={close} buttonPosition="hidden" a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>
                        OK
                    </EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>
    );
};

export const WithPreviousButton: StoryFn<typeof EbayLightboxDialog> = (args) => (
    <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>
);

export const WithWideSize: StoryFn<typeof EbayLightboxDialog> = (args) => (
    <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="wide">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>
);

export const WithNarrowSize: StoryFn<typeof EbayLightboxDialog> = (args) => (
    <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="narrow">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>
);

export const WithFullscreenSize: StoryFn<typeof EbayLightboxDialog> = (args) => (
    <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="fullscreen">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>
);

export const WithLargeSize: StoryFn<typeof EbayLightboxDialog> = (args) => (
    <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="large">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>
);

export const Expressive: StoryFn<typeof EbayLightboxDialog> = (args) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <EbayLightboxDialog
                {...args}
                bannerImgSrc="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg"
                bannerImgPosition="top"
                open={open}
                onOpen={() => action("onOpen")()}
                onClose={() => {
                    action("onClose")();
                    setOpen(false);
                }}
                a11yCloseText="Close"
            >
                <EbayDialogHeader>Heading Text</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayLightboxDialog>
        </div>
    );
};

export default story;
