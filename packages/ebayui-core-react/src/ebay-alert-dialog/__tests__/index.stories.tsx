import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EbayAlertDialog } from "../index";
import { EbayDialogHeader } from "../../ebay-dialog-base";
import { EbayButton } from "../../ebay-button";

const story = {
    component: EbayAlertDialog,
    title: "dialogs/ebay-alert-dialog",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayAlertDialog } from "@ebay/ui-core-react/ebay-alert-dialog";
import { EbayDialogHeader, EbayDialogFooter } from "@ebay/ui-core-react/ebay-dialog-base";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/alert-dialog";
import "@ebay/skin/button";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/alert-dialog.css";
@import "@ebay/skin/button.css";
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
        confirm: { description: "Custom confirm button (if you need to pass additional props)", control: "text" },
        animated: {
            description: "Renders the dialog with an animation. Note that the dialog will always be present in the DOM",
            control: "boolean",
        },
        onConfirm: { action: "onConfirm", description: "Called when the confirm button is clicked" },
        onOpen: { action: "onOpen", description: "Called when the dialog is opened" },
    },
} satisfies Meta<typeof EbayAlertDialog>;

const textParagraph = (
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </p>
);

export const Default: StoryFn<typeof EbayAlertDialog> = (args) => {
    const [open, setOpen] = useState(true);
    const close = () => setOpen(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Alert Dialog
            </button>
            <p>Some outside content...</p>
            <EbayAlertDialog
                {...args}
                open={open}
                onOpen={() => action("onOpen")()}
                onConfirm={() => {
                    action("onConfirm")();
                    close();
                }}
                confirmText="OK"
                a11yCloseText="Close"
            >
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayAlertDialog>
        </div>
    );
};

export const WithAnimation: StoryFn<typeof EbayAlertDialog> = (args) => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayAlertDialog
                {...args}
                open={open}
                onConfirm={close}
                confirmText="Confirm"
                animated
                a11yCloseText="Close"
            >
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayAlertDialog>
        </div>
    );
};

export const WithCustomConfirmButton: StoryFn<typeof EbayAlertDialog> = (args) => {
    const [open, setOpen] = useState(true);
    const close = () => setOpen(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayAlertDialog
                {...args}
                open={open}
                confirm={
                    <EbayButton
                        variant="destructive"
                        onClick={() => {
                            action("onConfirm")();
                            close();
                        }}
                    >
                        Custom Confirm
                    </EbayButton>
                }
                a11yCloseText="Close"
            >
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayAlertDialog>
        </div>
    );
};

export default story;
