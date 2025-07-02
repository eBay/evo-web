import React, { ComponentProps, createRef, useState } from "react";
import { EbayButton } from "../../ebay-button";
import { action } from "storybook/actions";
import { EbayDialogFooter, EbayDialogHeader } from "../../ebay-dialog-base";
import { EbayDrawerDialogDeprecated } from "../index";
import { StoryFn, Meta } from "@storybook/react-vite";

const story: Meta<typeof EbayDrawerDialogDeprecated> = {
    component: EbayDrawerDialogDeprecated,
    title: "deprecated/ebay-drawer-dialog-deprecated",
};

const numbers = Array(100)
    .fill(1)
    .map((x, i) => <p key={i}>{i + 1}</p>);

export const _Default: StoryFn<typeof EbayDrawerDialogDeprecated> = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialogDeprecated
                open={open}
                onOpen={action("onOpen")}
                onClose={() => {
                    action("onClose")();
                    setOpen(false);
                }}
                onExpanded={action("onExpanded")}
                onCollapsed={action("onCollapsed")}
                a11yCloseText="Close"
                a11yMaximizeText="Maximize"
                a11yMinimizeText="Minimize"
            >
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
            </EbayDrawerDialogDeprecated>
        </>
    );
};

export const _Opened: StoryFn<typeof EbayDrawerDialogDeprecated> = () => (
    <>
        <EbayDrawerDialogDeprecated
            open
            onClose={action("Close button clicked.")}
            a11yCloseText="Close drawer"
            a11yMaximizeText="Maximize"
            a11yMinimizeText="Minimize"
        >
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
        </EbayDrawerDialogDeprecated>
    </>
);

export const _WithoutHandle: StoryFn<typeof EbayDrawerDialogDeprecated> = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialogDeprecated
                noHandle
                open={open}
                onClose={() => setOpen(false)}
                a11yMaximizeText="Maximize"
                a11yMinimizeText="Minimize"
                a11yCloseText="Close"
            >
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
            </EbayDrawerDialogDeprecated>
        </>
    );
};

export const _WithoutHandleAndCloseButton: StoryFn<typeof EbayDrawerDialogDeprecated> = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialogDeprecated noHandle buttonPosition="hidden" open={open} onClose={() => setOpen(false)}>
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
            </EbayDrawerDialogDeprecated>
        </>
    );
};

export const _LotsOfContent: StoryFn<typeof EbayDrawerDialogDeprecated> = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            {numbers}
            <EbayDrawerDialogDeprecated
                open={open}
                onClose={() => setOpen(false)}
                a11yMaximizeText="Maximize"
                a11yMinimizeText="Minimize"
                a11yCloseText="Close"
            >
                <EbayDialogHeader>Scrollable content</EbayDialogHeader>
                {numbers}
                <EbayDialogFooter>
                    <EbayButton onClick={() => setOpen(false)}>Close</EbayButton>
                </EbayDialogFooter>
            </EbayDrawerDialogDeprecated>
        </>
    );
};

export const _CustomFocus: StoryFn<typeof EbayDrawerDialogDeprecated> = () => {
    const [open, setOpen] = useState(false);
    const focusRef = createRef<HTMLButtonElement>();

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialogDeprecated
                open={open}
                focus={focusRef as unknown as ComponentProps<typeof EbayDrawerDialogDeprecated>["focus"]}
                onClose={() => setOpen(false)}
                a11yMaximizeText="Maximize"
                a11yMinimizeText="Minimize"
                a11yCloseText="Close"
            >
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
                <EbayDialogFooter>
                    <EbayButton
                        ref={focusRef as unknown as ComponentProps<typeof EbayButton>["ref"]}
                        onClick={() => setOpen(false)}
                    >
                        Close
                    </EbayButton>
                </EbayDialogFooter>
            </EbayDrawerDialogDeprecated>
        </>
    );
};

export const _WithoutAnimation: StoryFn<typeof EbayDrawerDialogDeprecated> = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialogDeprecated
                open={open}
                onClose={() => setOpen(false)}
                animated={false}
                a11yMaximizeText="Maximize"
                a11yMinimizeText="Minimize"
                a11yCloseText="Close"
            >
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
            </EbayDrawerDialogDeprecated>
        </>
    );
};

export const _TriggerExpanded: StoryFn<typeof EbayDrawerDialogDeprecated> = () => {
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialogDeprecated
                open={open}
                onClose={() => setOpen(false)}
                expanded={expanded}
                a11yMaximizeText="Maximize"
                a11yMinimizeText="Minimize"
                a11yCloseText="Close"
            >
                <p>Trigger Dialog Expanded programmatically.</p>

                <EbayButton onClick={() => setExpanded(!expanded)} priority="secondary">
                    {expanded ? "Collapse Drawer" : "Expand Drawer"}
                </EbayButton>
            </EbayDrawerDialogDeprecated>
        </>
    );
};

export default story;
