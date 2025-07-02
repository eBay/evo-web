import React, { useState } from "react";
import { Meta } from "@storybook/react-vite";
import { EbayFullscreenDialogDeprecated } from "../index";
import { EbayDialogFooter, EbayDialogHeader } from "../../ebay-dialog-base";
import { action } from "storybook/actions";

const story: Meta<typeof EbayFullscreenDialogDeprecated> = {
    component: EbayFullscreenDialogDeprecated,
    title: "deprecated/ebay-fullscreen-dialog-deprecated",
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
