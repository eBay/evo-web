import React, { useState } from "react";
import { EbayConfirmDialog } from "../index";
import { EbayDialogHeader } from "../../ebay-dialog-base";
import { action } from "storybook/actions";
import { StoryFn, Meta } from "@storybook/react-vite";

const story: Meta<typeof EbayConfirmDialog> = {
    component: EbayConfirmDialog,
    title: "dialogs/ebay-confirm-dialog",
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

export default story;
