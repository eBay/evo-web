import React, { useState } from "react";
import { EbayButton } from "../../ebay-button";
import { EbayTextbox } from "../../ebay-textbox";
import { EbayTooltip, EbayTooltipContent, EbayTooltipHost, PointerDirection } from "../index";

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
    title: "notices & tips/ebay-tooltip",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayTooltip, EbayTooltipHost, EbayTooltipContent } from "@ebay/ui-core-react/ebay-tooltip";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon-button";
import "@ebay/skin/tooltip";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/tooltip.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayTooltip pointer="bottom-left">
    <EbayTooltipHost>
        <EbayButton>Info</EbayButton>
    </EbayTooltipHost>
    <EbayTooltipContent>
        <span>Here's a tip to help you be successful at your task.</span>
    </EbayTooltipContent>
</EbayTooltip>
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
            control: { type: "object" },
        },
        noHover: { description: "disable hover (and only use focus) to open the tooltip", control: "boolean" },
        open: { description: "Control the visibility of the tooltip from the parent", control: "boolean" },
        onExpand: { description: "overlay has been expanded", action: "onExpand", table: { category: "Events" } },
        onCollapse: { description: "overlay has been collapsed", action: "onCollapse", table: { category: "Events" } },
        EbayTooltipHost: { description: "Wrapper for trigger that shows the tooltip", control: "text" },
        EbayTooltipContent: { description: "The content to be displayed in the tooltip", control: "text" },
        offset: { description: "Numeric offset for positioning", control: { type: "number" } },
        noFlip: { description: "Disable automatic flip behavior", control: "boolean" },
        noShift: { description: "Disable automatic shift behavior", control: "boolean" },
        notInline: { description: "Opt out of inline display", control: "boolean" },
    },
};

export const DefaultTooltip = () => (
    <div style={{ width: "100%", textAlign: "center", marginTop: 100 }}>
        <EbayTooltip>
            <EbayTooltipHost>
                <EbayButton>Info</EbayButton>
            </EbayTooltipHost>

            <EbayTooltipContent>
                <p>Content</p>
            </EbayTooltipContent>
        </EbayTooltip>
    </div>
);

export const AnchorHost = () => (
    <div style={{ width: "100%", textAlign: "center", marginTop: 100 }}>
        <EbayTooltip>
            <EbayTooltipHost>
                <a href="https://www.ebay.com">View options</a>
            </EbayTooltipHost>

            <EbayTooltipContent>
                <p>Use Access Key &apos;S&apos; to display settings.</p>
            </EbayTooltipContent>
        </EbayTooltip>
    </div>
);

export const PointersWithAllDirections = () => (
    <div>
        {allPointers.map((pointerType, index) => (
            <div
                key={index}
                style={{
                    margin: "100px 0",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <EbayTooltip pointer={pointerType}>
                    <EbayTooltipHost>
                        <a href="https://www.ebay.com">{pointerType}</a>
                    </EbayTooltipHost>

                    <EbayTooltipContent>
                        <p>Use Access Key &apos;S&apos; to display settings.</p>
                    </EbayTooltipContent>
                </EbayTooltip>
            </div>
        ))}
    </div>
);

export const PointerWithCustomLocation = () => (
    <div style={{ width: "100%", textAlign: "center", marginTop: 100 }}>
        <EbayTooltip pointer="top-left" overlayStyle={{ top: 40, left: -16 }}>
            <EbayTooltipHost>
                <a href="https://www.ebay.com">View options</a>
            </EbayTooltipHost>

            <EbayTooltipContent>
                <p>Use Access Key &apos;S&apos; to display settings.</p>
            </EbayTooltipContent>
        </EbayTooltip>
    </div>
);

export const NoHover = () => (
    <div style={{ width: "100%", textAlign: "center", marginTop: 100 }}>
        <EbayTooltip noHover pointer="bottom">
            <EbayTooltipHost>
                <EbayTextbox placeholder="Email address" />
            </EbayTooltipHost>

            <EbayTooltipContent>
                <p>Use Access Key &apos;S&apos; to display settings.</p>
            </EbayTooltipContent>
        </EbayTooltip>
    </div>
);

export const Controlled = {
    render: () => {
        const items = ["First tooltip", "Second tooltip", "Third tooltip"];
        const Component = () => {
            const [openIndex, setOpenIndex] = useState<number | null>(null);

            return (
                <div style={{ display: "flex", gap: 24, justifyContent: "center", marginTop: 100 }}>
                    {items.map((label, i) => (
                        <EbayTooltip
                            key={i}
                            open={openIndex === i}
                            onExpand={() => setOpenIndex(i)}
                            onCollapse={() => setOpenIndex(null)}
                            pointer="bottom"
                        >
                            <EbayTooltipHost>
                                <EbayButton>{label}</EbayButton>
                            </EbayTooltipHost>
                            <EbayTooltipContent>
                                <p>Tooltip {i + 1} content</p>
                            </EbayTooltipContent>
                        </EbayTooltip>
                    ))}
                </div>
            );
        };

        return <Component />;
    },

    name: "Controlled (mutual exclusivity)",
};
