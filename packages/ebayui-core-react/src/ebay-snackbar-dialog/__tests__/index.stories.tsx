/* eslint-disable jsx-a11y/no-access-key */
import React, { useState } from "react";
import { EbayButton } from "../../ebay-button";
import { EbaySnackbarDialog, EbaySnackbarDialogAction } from "../index";

export default {
    title: "dialogs/ebay-snackbar-dialog",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `A snackbar is a non-modal dialog that appears in response to a lightweight user action. It disappears automatically after a minimum of 6 seconds.

The user usually will want to manage the state of the snackbar, and so should provide the open state as a boolean as well as a function to synchronize the app state with the snackbar state when the on-close event occurs.

In the case where the application developer only wants to manage the initial state of the snackbar, the dev can choose to provide only the open state as a boolean. This is useful when a dev wants the snackbar to appear only once on initial render and then disappear.

## Import

\`\`\`jsx harmony
import { EbaySnackbarDialog, EbaySnackbarDialogAction } from "@ebay/ui-core-react/ebay-snackbar-dialog";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/snackbar-dialog";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/snackbar-dialog.css";
\`\`\``,
            },
        },
    },
    argTypes: {
        open: { description: "Whether snackbar is open or not.", control: "boolean" },
        layout: {
            description:
                "Direction of row or column for the text and the action button. Default is 'row'. Options are 'row' and 'column'.",
            control: "text",
        },
        animated: {
            description: "Renders the dialog with an animation. Note that the dialog will always be present in the DOM",
            control: "boolean",
        },
        accessKey: {
            description:
                "[`accesskey`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey) HTML attribute that generated a keyboard shortcut for the action element. Use together with `aria-label` to give more information to the user.",
            options: ["accesskey", "aria-label"],
            control: { type: "select" },
        },
        onOpen: {
            description: "Called when the snackbar is opened",
            action: "onOpen",
            table: { category: "Events", defaultValue: { summary: "(Event)" } },
        },
        onClose: {
            description: "Called when the snackbar is closed",
            action: "onClose",
            table: { category: "Events", defaultValue: { summary: "(Event)" } },
        },
        onAction: {
            description: "Called when the snackbar action button is clicked",
            action: "onAction",
            table: { category: "Events", defaultValue: { summary: "(Event)" } },
        },
    },
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
