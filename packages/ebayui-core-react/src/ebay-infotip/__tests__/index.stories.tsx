import React from "react";
import { EbayInfotip, EbayInfotipContent, EbayInfotipHeading, EbayInfotipHost } from "../index";
import { PointerDirection } from "../../ebay-tooltip";
import { EbayIconSettings16 } from "../../ebay-icon/icons/ebay-icon-settings-16";

const allPointers: PointerDirection[] = [
    "top",
    "top-left",
    "top-right",
    "right",
    "right-bottom",
    "right-top",
    "bottom",
    "bottom-left",
    "bottom-right",
    "left",
    "left-bottom",
    "left-top",
];

export default {
    title: "buttons/ebay-infotip",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayInfotip, EbayInfotipHost, EbayInfotipContent, EbayInfotipHeading } from "@ebay/ui-core-react/ebay-infotip";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/infotip";

// When using variant="modal"
import "@ebay/skin/lightbox-dialog"
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/infotip.css";

/* When using variant="modal" */
@import "@ebay/skin/lightbox-dialog.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayInfotip>
    <EbayInfotipHeading>Heading</EbayInfotipHeading>
    <EbayInfotipContent>
        <p>Here's a tip to help you be successful at your task.</p>
    </EbayInfotipContent>
</EbayInfotip>
\`\`\``,
            },
        },
    },
    argTypes: {
        variant: {
            description: "Either modal or default. If modal will show the mobile version of infotip",
            control: "text",
        },
        pointer: {
            description:
                "options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`",
            options: [
                "top-left",
                "top",
                "top-right",
                "right",
                "right-bottom",
                "right-top",
                "bottom-left",
                "bottom-right",
                "bottom",
                "left",
                "left-bottom",
                "left-top",
            ],
            control: { type: "select" },
        },
        icon: {
            description:
                "Different icon to be used than `information-small`. Full list [here](https://ebay.github.io/skin/index.html#icon)",
            control: "text",
        },
        disabled: { description: "Define if the infotip is disabled or not", control: "boolean" },
        overlayStyle: {
            description:
                "Style object to customize default values for the overlay. It can be used all CSS properties like `top`, `left`, `bottom`, `right`.",
            options: ["top", "left", "bottom", "right"],
            control: { type: "select" },
        },
        initialExpanded: { description: "Open the tooltip on the initial render", control: "boolean" },
        a11yCloseText: { description: "A11y text for close button and mask.", control: "text" },
        "aria-label": {
            description: 'A descriptive label of what the infotip button represents (e.g. "Important information")',
            control: "text",
        },
        offset: { description: "Numeric offset for floating-ui positioning", control: { type: "number" } },
        noFlip: { description: "Disable automatic flip behavior", control: "boolean" },
        noShift: { description: "Disable automatic shift behavior", control: "boolean" },
        notInline: { description: "Opt out of inline display", control: "boolean" },
        onExpand: { description: "overlay has been expanded", action: "onExpand", table: { category: "Events" } },
        onCollapse: { description: "overlay has been collapsed", action: "onCollapse", table: { category: "Events" } },
        EbayInfotipHost: { description: "The custom host-button (trigger) for the Infotip", control: "text" },
        EbayInfotipHeading: { description: "The heading to be displayed in the infotip", control: "text" },
        EbayInfotipContent: { description: "The content to be displayed in the infotip", control: "text" },
    },
};

export const Default = () => (
    <div style={{ display: "flex", margin: 200 }}>
        <EbayInfotip a11yCloseText="Close" aria-label="Infotip">
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>Content</p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>
);

export const CustomIcon = {
    render: () => (
        <div style={{ width: "100%", margin: 200 }}>
            <EbayInfotip icon={<EbayIconSettings16 />} aria-label="Infotip" a11yCloseText="Close">
                <EbayInfotipContent>
                    <EbayInfotipHeading>Title</EbayInfotipHeading>
                    <p>Content</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>
    ),

    name: "Custom icon",
};

export const Disabled = () => (
    <div style={{ display: "flex", margin: 200 }}>
        <EbayInfotip disabled a11yCloseText="Close" aria-label="Infotip">
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>Content</p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>
);

export const InParagraph = {
    render: () => (
        <div style={{ width: "100%", margin: 100 }}>
            <em>
                NOTE: No block elements can be nested in p elements, like div, h1-6, or other p elements. Any content
                with that will break
            </em>
            <p>
                Some paragraph content{" "}
                <EbayInfotip a11yCloseText="Dismiss infotip" aria-label="Important information">
                    <EbayInfotipHeading>Important</EbayInfotipHeading>
                    <EbayInfotipContent>
                        <span>This is some important info</span>
                    </EbayInfotipContent>
                </EbayInfotip>{" "}
                More paragraph content
            </p>
        </div>
    ),

    name: "In paragraph",
};

export const Modal = (args) => (
    <div style={{ width: "100%", margin: 100 }}>
        <EbayInfotip variant="modal" a11yCloseText="Close" aria-label="Infotip" {...args}>
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>
);

export const _PointerDirection = {
    render: (args) => (
        <div style={{ width: "100%", marginLeft: 300 }}>
            {allPointers.map((pointerType, index) => (
                <div key={index} style={{ margin: "100px 0" }}>
                    {pointerType}{" "}
                    <EbayInfotip pointer={pointerType} a11yCloseText="Close" aria-label="Infotip" {...args}>
                        <EbayInfotipHeading>Title</EbayInfotipHeading>
                        <EbayInfotipContent>
                            <p>Use Access Key &apos;S&apos; to display settings.</p>
                        </EbayInfotipContent>
                    </EbayInfotip>
                </div>
            ))}
        </div>
    ),

    name: "Pointer direction",
};

export const PointerWithCustomLocation = {
    render: () => (
        <div style={{ width: "100%", margin: 200 }}>
            <EbayInfotip
                pointer="top-left"
                overlayStyle={{ top: 40, left: -16 }}
                a11yCloseText="Close"
                aria-label="Infotip"
            >
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>
    ),

    name: "Pointer with custom location",
};

export const TextInsteadOfIcon = {
    render: () => (
        <div style={{ width: "100%", margin: 200 }}>
            <EbayInfotip pointer="top-left" a11yCloseText="Close">
                <EbayInfotipHost>Click for infotip</EbayInfotipHost>
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>
    ),

    name: "Text instead of icon",
};

export const CustomButtonContentWithRenderProp = {
    render: () => (
        <div style={{ width: "100%", margin: 200 }}>
            <EbayInfotip pointer="top-left" a11yCloseText="Close" aria-label="Wrong aria-label, should be overwritten">
                <EbayInfotipHost aria-label="Click to open infotip" style={{ height: "auto", width: "auto" }}>
                    {({ icon }) => (
                        <span style={{ display: "inline-flex", alignItems: "center" }}>
                            {icon}
                            <span style={{ marginLeft: 5 }}>Click me</span>
                        </span>
                    )}
                </EbayInfotipHost>
                <EbayInfotipContent>
                    <EbayInfotipHeading>Title</EbayInfotipHeading>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>
    ),

    name: "Custom button content (With render prop)",
};

export const ExpandedByDefault = {
    render: () => (
        <div style={{ width: "100%", margin: 200 }}>
            <EbayInfotip pointer="top-left" initialExpanded a11yCloseText="Close" aria-label="Infotip">
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>
    ),

    name: "Expanded by default",
};
