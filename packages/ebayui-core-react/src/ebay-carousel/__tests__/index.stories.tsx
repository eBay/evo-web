import React from "react";
import { StoryObj, Meta, StoryFn } from "@storybook/react-vite";
import { EbayCarousel, EbayCarouselItem } from "../index";

const story = {
    component: EbayCarousel,
    title: "navigation & disclosure/ebay-carousel",
    argTypes: {
        gap: {
            control: { type: "number" },
            type: { name: "number", required: false },
            defaultValue: 16,
            name: "gap",
            description: "override the margin between carousel items in pixels",
        },
        itemsPerSlide: {
            control: { type: "number" },
            type: { name: "number", required: false },
            description:
                "automatically fit a number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set.",
        },
        index: {
            control: { type: "number" },
            type: { name: "number", required: false },
            name: "index",
            description: "0-based index position",
        },
        onSlide: { action: "onSlide" },
        onPrevious: { action: "onPrevious" },
        onNext: { action: "onNext" },
        onScroll: { action: "onScroll" },

        autoplay: {
            description:
                "If true, will automatically scroll through the carousel. If a number is provided, will set the interval in milliseconds.",
            control: "text",
        },
        a11yPreviousText: { description: "A11y text for previous button and mask.", control: "text" },
        a11yNextText: { description: "A11y text for next button and mask.", control: "text" },
        a11yPauseText: { description: "A11y text for pause button.", control: "text" },
        a11yPlayText: { description: "A11y text for play button.", control: "text" },
        imageTreatment: { description: "Apply image slide styling", control: "boolean" },
        onPlay: { action: "onPlay" },
        onPause: { action: "onPause" },
    },

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayCarousel, EbayCarouselItem } from "@ebay/ui-core-react/ebay-carousel";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/carousel";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/carousel.css";
\`\`\``,
            },
        },
    },
} as Meta<typeof EbayCarousel>;

const items = Array(10)
    .fill(0)
    .map((_, i) => (
        <EbayCarouselItem
            style={{
                color: "#0a1c6b",
                background: "#c2f5ff",
                fontSize: "24px",
                fontWeight: "bold",
                width: "200px",
                height: "120px",
                lineHeight: "120px",
                textAlign: "center",
            }}
            className="demo-card"
            key={i}
        >
            Item {i + 1}
        </EbayCarouselItem>
    ));

export const Continuous: StoryObj<typeof EbayCarousel> = {
    render: (args) => <EbayCarousel {...args}>{items}</EbayCarousel>,
};

export const ItemsPerSlide: StoryObj<typeof EbayCarousel> = {
    render: (args) => (
        <EbayCarousel gap={16} {...args}>
            {items}
        </EbayCarousel>
    ),
};

export const Autoplay: StoryObj<typeof EbayCarousel> = {
    render: (args) => (
        <EbayCarousel gap={16} autoplay {...args} itemsPerSlide={args.itemsPerSlide || 1}>
            {Array(3)
                .fill(0)
                .map((_, i) => (
                    <EbayCarouselItem
                        style={{
                            color: "#cdf4fd",
                            background: "#a1208b",
                            fontSize: "36px",
                            fontWeight: "bold",
                            width: "330px",
                            height: "330px",
                            lineHeight: "330px",
                            textAlign: "center",
                        }}
                        key={i}
                    >
                        Card {i + 1}
                    </EbayCarouselItem>
                ))}
        </EbayCarousel>
    ),
};

export const PreserveTabIndex: StoryFn<typeof EbayCarousel> = (args) => {
    return (
        <EbayCarousel {...args}>
            {Array(8)
                .fill(0)
                .map((_, i) => (
                    <EbayCarouselItem key={i}>
                        <div
                            style={{
                                color: "#cdf4fd",
                                background: "#eee",
                                fontSize: 36,
                                fontWeight: "bold",
                                height: 330,
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                                Image here
                            </a>
                            <a href="https://www.ebay.com">Card {i + 1}</a>
                        </div>
                    </EbayCarouselItem>
                ))}
        </EbayCarousel>
    );
};

export default story;
