import React, { ComponentProps, createRef, useState } from "react";
import { EbayButton } from "../../ebay-button";
import { action } from "storybook/actions";
import { EbayDialogFooter, EbayDialogHeader } from "../../ebay-dialog-base";
import { EbayDrawerDialogDeprecated } from "../index";
import { StoryFn, Meta } from "@storybook/react-vite";

const story: Meta<typeof EbayDrawerDialogDeprecated> = {
    component: EbayDrawerDialogDeprecated,
    title: "deprecated/ebay-drawer-dialog-deprecated",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `**Deprecated will be removed next major** (Use \`EbayLightboxDialog\` instead)

## Usage

### Import

\`\`\`jsx harmony
import { EbayDrawerDialogDeprecated } from "@ebay/ui-core-react/ebay-drawer-dialog-deprecated";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/drawer-dialog";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/drawer-dialog.css";
@import "@ebay/skin/icon.css";
\`\`\`
### Simple opened dialog

### Basic

\`\`\`jsx
<EbayDrawerDialogDeprecated open a11yClosetext="Close Drawer">
    Hello World
</EbayDrawerDialogDeprecated>
\`\`\`

## Child components

### EbayDialogHeader

Will render a header content for the dialog. Will always render the header element even if this is not present

### EbayDialogFooter

Will render the footer content for the dialog. If not present then will not have any footer.

\`\`\`jsx
<EbayDrawerDialogDeprecated>
    <EbayDialogHeader>Title</EbayDialogHeader>
    Some text
    <EbayDialogFooter>(c)2021 eBay Inc.</EbayDialogFooter>
</EbayDrawerDialogDeprecated>
\`\`\``,
            },
        },
    },
    argTypes: {
        expanded: {
            description: "Whether the drawer is expanded to full height or max 50%. Controlled.",
            control: "boolean",
        },
        open: { description: "Whether drawer is open. Controlled.", control: "boolean" },
        noHandle: { description: "Whether handle will be shown or not.", control: "boolean" },
        focus: {
            description:
                "An id for an element which will receive focus when the drawer opens (defaults to close button).",
            control: "text",
        },
        a11yCloseText: {
            description: "A11y text for close button and mask. Required only when close button exists.",
            control: "text",
        },
        a11yMinimizeText: {
            description:
                "A11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer. Required only when draggable handle exists.",
            control: "text",
        },
        a11yMaximizeText: {
            description:
                "A11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer. Required only when draggable handle exists.",
            control: "text",
        },
        animated: {
            description: "Renders the dialog with an animation. Note that the dialog will always be present in the DOM",
            control: "boolean",
        },
        onClose: {
            description: "Triggered when the drawer is closed",
            action: "onClose",
            table: { category: "Events" },
        },
        onExpanded: {
            description: "Triggered when the drawer is expanded to full height",
            action: "onExpanded",
            table: { category: "Events" },
        },
        onCollapsed: {
            description: "Triggered when the drawer is collapsed",
            action: "onCollapsed",
            table: { category: "Events" },
        },
    },
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
