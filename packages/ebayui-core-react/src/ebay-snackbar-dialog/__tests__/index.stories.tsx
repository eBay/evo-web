/* eslint-disable jsx-a11y/no-access-key */
import React, { useState } from "react";
import { EbayButton } from "../../ebay-button";
import { EbaySnackbarDialog, EbaySnackbarDialogAction } from "../index";

export default {
    title: "dialogs/ebay-snackbar-dialog",
};

export const Default = () => {
    const TestComponent = () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <EbayButton onClick={() => setOpen(!open)}>Open Snackbar</EbayButton>
                <EbaySnackbarDialog open={open} onClose={() => setOpen(false)}>
                    <p>1 item deleted from watch list.</p>
                </EbaySnackbarDialog>
            </>
        );
    };

    return (
        <>
            <TestComponent />
        </>
    );
};

export const WithAction = {
    render: () => {
        const TestComponent = () => {
            const [open, setOpen] = useState(false);

            return (
                <>
                    <EbayButton onClick={() => setOpen(!open)}>Open Snackbar</EbayButton>
                    <EbaySnackbarDialog open={open} onClose={() => setOpen(false)}>
                        <p>1 item deleted from watch list.</p>
                        <EbaySnackbarDialogAction accessKey="U">Undo</EbaySnackbarDialogAction>
                    </EbaySnackbarDialog>
                </>
            );
        };

        return (
            <>
                <TestComponent />
            </>
        );
    },

    name: "With action",
};

export const WithColumnLayout = {
    render: () => {
        const TestComponent = () => {
            const [open, setOpen] = useState(false);

            return (
                <>
                    <EbayButton onClick={() => setOpen(!open)}>Open Snackbar</EbayButton>
                    <EbaySnackbarDialog open={open} onClose={() => setOpen(false)} layout="column">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <EbaySnackbarDialogAction accessKey="U">Undo</EbaySnackbarDialogAction>
                    </EbaySnackbarDialog>
                </>
            );
        };

        return (
            <>
                <TestComponent />
            </>
        );
    },

    name: "With column layout",
};
