/* eslint-disable jsx-a11y/no-access-key */
import React, { useState } from "react";
import { EbayButton } from "../../ebay-button";
import { EbayDialogFooter, EbayDialogHeader } from "../../ebay-dialog-base";
import { EbayToast } from "../index";
import { action } from "storybook/actions";

export default {
    title: "dialogs/ebay-toast-dialog",
};

export const Default = () => {
    const TestComponent = () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <EbayButton onClick={() => setOpen(!open)}>Open Toast</EbayButton>
                <EbayToast open={open} a11yCloseText="Close EbayToast" onClose={() => setOpen(false)}>
                    <EbayDialogHeader>Toast Dialog Heading</EbayDialogHeader>
                    <EbayDialogFooter>
                        <EbayButton priority="primary" onClick={() => setOpen(false)} accessKey="c">
                            Close Dialog
                        </EbayButton>
                    </EbayDialogFooter>
                    <p>Press `Control-Option-c` (Mac) to activate CTA button</p>
                    <p>
                        <a href="http://www.ebay.com">www.ebay.com</a>
                    </p>
                </EbayToast>

                <p>
                    For more info, please visit our <a href="http://pages.ebay.com/help">Help page</a>
                </p>
                <p>
                    Please check <a href="https://www.ebay.de/myb/PurchaseHistory">My eBay page</a> for more
                    details{" "}
                </p>
            </>
        );
    };

    return (
        <>
            <TestComponent />
        </>
    );
};

export const AlwaysOpened = {
    render: () => {
        const TestComponent = () => (
            <>
                <EbayToast open a11yCloseText="Close EbayToast" onClose={action("X-button clicked.")}>
                    <EbayDialogHeader>Toast Dialog Heading</EbayDialogHeader>
                    <EbayDialogFooter>
                        <EbayButton priority="primary" onClick={action("Button clicked.")} accessKey="v">
                            View Account
                        </EbayButton>
                    </EbayDialogFooter>
                    <p>Press `Control-Option-v` (Mac) to activate CTA button</p>
                    <p>
                        <a href="http://www.ebay.com">www.ebay.com</a>
                    </p>
                </EbayToast>

                <p>
                    For more info, please visit our <a href="http://pages.ebay.com/help">Help page</a>
                </p>
                <p>
                    Please check <a href="https://www.ebay.de/myb/PurchaseHistory">My eBay page</a> for more
                    details{" "}
                </p>
            </>
        );

        return (
            <>
                <TestComponent />
            </>
        );
    },

    name: "AlwaysOpened",
};

export const WithAnimation = {
    render: () => {
        const TestComponent = () => {
            const [open, setOpen] = useState(false);

            return (
                <>
                    <EbayButton onClick={() => setOpen(!open)}>Open Toast</EbayButton>
                    <EbayToast open={open} a11yCloseText="Close EbayToast" onClose={() => setOpen(false)} animated>
                        <EbayDialogHeader>Toast Dialog Heading</EbayDialogHeader>
                        <EbayDialogFooter>
                            <EbayButton priority="primary" onClick={() => setOpen(false)}>
                                View Account
                            </EbayButton>
                        </EbayDialogFooter>
                        <p>Toast dialog paragraph text.</p>
                        <p>
                            <a href="http://www.ebay.com">www.ebay.com</a>
                        </p>
                    </EbayToast>

                    <p>
                        For more info, please visit our <a href="http://pages.ebay.com/help">Help page</a>
                    </p>
                    <p>
                        Please check <a href="https://www.ebay.de/myb/PurchaseHistory">My eBay page</a> for more
                        details{" "}
                    </p>
                </>
            );
        };

        return (
            <>
                <TestComponent />
            </>
        );
    },

    name: "WithAnimation",
};
