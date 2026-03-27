import React, { useState } from "react";
import { EbayConfirmDialog } from "../index";
import { EbayDialogHeader } from "../../ebay-dialog-base";
import { action } from "storybook/actions";
import { StoryFn, Meta } from "@storybook/react-vite";
import { EbayButton } from "../../ebay-button";

const story: Meta<typeof EbayConfirmDialog> = {
    component: EbayConfirmDialog,
    title: "dialogs/ebay-confirm-dialog",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayConfirmDialog } from "@ebay/ui-core-react/ebay-confirm-dialog";
import { EbayDialogHeader, EbayDialogFooter } from "@ebay/ui-core-react/ebay-dialog-base";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/button";
import "@ebay/skin/confirm-dialog";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/button.css";
@import "@ebay/skin/confirm-dialog.css";
@import "@ebay/skin/icon.css";
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
        confirmText: { description: "Text for confirm button", control: "text" },
        rejectText: { description: "Text for reject button", control: "text" },
        confirm: { description: "Custom confirm button (if you need to pass additional props)", control: "text" },
        reject: { description: "Custom reject button (if you need to pass additional props)", control: "text" },
        animated: {
            description: "Renders the dialog with an animation. Note that the dialog will always be present in the DOM",
            control: "boolean",
        },
        onConfirm: { action: "onConfirm", description: "Called when the confirm button is clicked" },
        onReject: { action: "onReject", description: "Called when the reject button is clicked" },
    },
};

export const Default: StoryFn<typeof EbayConfirmDialog> = (args) => {
    const [open, setOpen] = useState(true);
    const close = () => setOpen(false);

    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayConfirmDialog
                open={open}
                onOpen={() => action("onOpen")()}
                onConfirm={() => {
                    action("onConfirm")();
                    close();
                }}
                onReject={() => {
                    action("onReject")();
                    close();
                }}
                confirmText="Okay"
                rejectText="Cancel"
                {...args}
            >
                <EbayDialogHeader>Delete Address?</EbayDialogHeader>
                <p>You will permanently lose this address.</p>
            </EbayConfirmDialog>
        </div>
    );
};

export const WithAnimation: StoryFn<typeof EbayConfirmDialog> = () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayConfirmDialog
                open={open}
                onConfirm={close}
                onReject={close}
                confirmText="Cancel"
                rejectText="Delete"
                animated
                a11yCloseText="Close"
            >
                <EbayDialogHeader>Delete Address?</EbayDialogHeader>
                <p>You will permanently lose this address.</p>
            </EbayConfirmDialog>
        </div>
    );
};

export const WithExtraButtonProps: StoryFn<typeof EbayConfirmDialog> = () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayConfirmDialog
                open={open}
                onConfirm={close}
                onReject={close}
                confirm={<EbayButton variant="destructive">Cancel</EbayButton>}
                reject={
                    <EbayButton priority="tertiary" className="custom-class">
                        Delete
                    </EbayButton>
                }
                a11yCloseText="Close"
            >
                <EbayDialogHeader>Delete Address?</EbayDialogHeader>
                <p>You will permanently lose this address.</p>
            </EbayConfirmDialog>
        </div>
    );
};

export default story;
