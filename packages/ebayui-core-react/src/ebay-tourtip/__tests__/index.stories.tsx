import React, { useState } from "react";
import { EbayButton } from "../../ebay-button";
import {
    EbayTourtip,
    EbayTourtipHeading,
    EbayTourtipContent,
    EbayTourtipHost,
    PointerDirection,
    EbayTourtipFooter,
} from "../index";

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
    title: "notices & tips/ebay-tourtip",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayTourtip, EbayTourtipHost, EbayTourtipContent, EbayTourtipHeading } from "@ebay/ui-core-react/ebay-tourtip";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon-button";
import "@ebay/skin/tourtip";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/tourtip.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayTourtip a11yCloseText="close" pointer="bottom">
    <EbayTourtipHost>
        <EbayButton>Info</EbayButton>
    </EbayTourtipHost>
    <EbayTourtipHeading type="tourtip">Title</EbayTourtipHeading>
    <EbayTourtipContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </EbayTourtipContent>
</EbayTourtip>
\`\`\``,
            },
        },
    },
    argTypes: {
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
        overlayStyle: {
            description:
                "Style object to customize default values for the overlay. It can be used all CSS properties like `top`, `left`, `bottom`, `right`.",
            options: ["top", "left", "bottom", "right"],
            control: { type: "select" },
        },
        initialExpanded: {
            description: "Open the tooltip on the initial render, needs to be true for the case of Tourtips",
            control: "boolean",
        },
        open: { description: "Control the visibility of the tourtip from the parent", control: "boolean" },
        a11yCloseText: { description: "A11y text for close button and mask.", control: "text" },
        "aria-label": {
            description: 'A descriptive label of what the tourtip button represents (e.g. "Important information")',
            control: "text",
        },
        onExpand: { description: "overlay has been expanded", action: "onExpand", table: { category: "Events" } },
        onCollapse: { description: "overlay has been collapsed", action: "onCollapse", table: { category: "Events" } },
        EbayTourtipHost: { description: "The custom host-button (trigger) for the tourtip", control: "text" },
        EbayTourtipHeading: { description: "The heading to be displayed in the tourtip", control: "text" },
        EbayTourtipFooter: { description: "The footer to be displayed in the tourtip", control: "text" },
        EbayTourtipContent: { description: "The content to be displayed in the tourtip", control: "text" },
        index: {
            description:
                "defines the text to be displayed as index of the Tourtip if any. e.g `1 - 3` meaning Tourtip 1 of 3",
            control: "text",
        },
        offset: { description: "Numeric offset for positioning", control: { type: "number" } },
        noFlip: { description: "Disable automatic flip behavior", control: "boolean" },
        noShift: { description: "Disable automatic shift behavior", control: "boolean" },
        notInline: { description: "Opt out of inline display", control: "boolean" },
    },
};

export const DefaultTourtip = () => (
    <div style={{ width: "100%", margin: 300 }}>
        <EbayTourtip a11yCloseText="close">
            <EbayTourtipContent>
                <p>Content</p>
            </EbayTourtipContent>

            <EbayTourtipHost>
                <EbayButton>Info</EbayButton>
            </EbayTourtipHost>
        </EbayTourtip>
    </div>
);

export const PointersWithAllDirections = () => (
    <div>
        {allPointers.map((pointerType, index) => (
            <div
                key={index}
                style={{
                    width: "100%",
                    margin: 300,
                }}
            >
                <EbayTourtip pointer={pointerType} a11yCloseText="close">
                    <EbayTourtipHost>
                        <a href="https://www.ebay.com">{pointerType}</a>
                    </EbayTourtipHost>

                    <EbayTourtipContent>
                        <p>Use Access Key &apos;S&apos; to display settings.</p>
                    </EbayTourtipContent>
                </EbayTourtip>
            </div>
        ))}
    </div>
);

export const PointerWithCustomLocation = () => (
    <div style={{ width: "100%", margin: 300 }}>
        <EbayTourtip a11yCloseText="close" pointer="top-left" overlayStyle={{ top: 40, left: -16 }}>
            <EbayTourtipHost>
                <a href="https://www.ebay.com">View options</a>
            </EbayTourtipHost>

            <EbayTourtipContent>
                <p>Use Access Key &apos;S&apos; to display settings.</p>
            </EbayTourtipContent>
        </EbayTourtip>
    </div>
);

export const FooterTourtip = () => (
    <div style={{ width: "100%", margin: 300 }}>
        <EbayTourtip a11yCloseText="close" pointer="bottom">
            <EbayTourtipHost>
                <EbayButton>Info</EbayButton>
            </EbayTourtipHost>
            <EbayTourtipContent>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </EbayTourtipContent>
            <EbayTourtipFooter index="1 / 3">
                <button className="fake-link">Back</button>
                <button className="btn btn--primary">Next</button>
            </EbayTourtipFooter>
        </EbayTourtip>
    </div>
);

export const FooterAndHeadingTourtip = () => (
    <div style={{ width: "100%", margin: 300 }}>
        <EbayTourtip a11yCloseText="close" pointer="bottom">
            <EbayTourtipHost>
                <EbayButton>Info</EbayButton>
            </EbayTourtipHost>
            <EbayTourtipHeading type="tourtip">Title</EbayTourtipHeading>
            <EbayTourtipContent>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </EbayTourtipContent>
            <EbayTourtipFooter index="1 / 3">
                <button className="fake-link">Back</button>
                <button className="btn btn--primary">Next</button>
            </EbayTourtipFooter>
        </EbayTourtip>
    </div>
);

export const Controlled = {
    render: () => {
        const items = ["Step 1 content", "Step 2 content", "Step 3 content"];
        const Component = () => {
            const [openIndex, setOpenIndex] = useState<number | null>(0);

            return (
                <div style={{ display: "flex", gap: 80, margin: 300 }}>
                    {items.map((text, i) => (
                        <EbayTourtip
                            key={i}
                            open={openIndex === i}
                            onExpand={() => setOpenIndex(i)}
                            onCollapse={() => setOpenIndex(null)}
                            a11yCloseText="close"
                            pointer="bottom"
                        >
                            <EbayTourtipHost>
                                <EbayButton>Step {i + 1}</EbayButton>
                            </EbayTourtipHost>
                            <EbayTourtipHeading type="tourtip">Step {i + 1}</EbayTourtipHeading>
                            <EbayTourtipContent>
                                <p>{text}</p>
                            </EbayTourtipContent>
                            <EbayTourtipFooter index={`${i + 1} / ${items.length}`}>
                                {i > 0 && (
                                    <button className="fake-link" onClick={() => setOpenIndex(i - 1)}>
                                        Back
                                    </button>
                                )}
                                {i < items.length - 1 && (
                                    <button className="btn btn--primary" onClick={() => setOpenIndex(i + 1)}>
                                        Next
                                    </button>
                                )}
                            </EbayTourtipFooter>
                        </EbayTourtip>
                    ))}
                </div>
            );
        };

        return <Component />;
    },

    name: "Controlled (sequential steps)",
};
