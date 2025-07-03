import React, { ComponentProps, useEffect, useState } from "react";
import {
    EbaySkeleton,
    EbaySkeletonAvatar,
    EbaySkeletonButton,
    EbaySkeletonImage,
    EbaySkeletonText,
    EbaySkeletonTextbox,
} from "../";
import { EbayButton } from "../../ebay-button";
import { Meta, StoryFn } from "@storybook/react-vite";

export type EbaySkeletonStoriesProps = ComponentProps<typeof EbaySkeleton> &
    ComponentProps<typeof EbaySkeletonButton> &
    ComponentProps<typeof EbaySkeletonText>;

const meta: Meta<EbaySkeletonStoriesProps> = {
    component: EbaySkeleton,
    title: "building blocks/ebay-skeleton",
    argTypes: {
        color: {
            description: "Color of the skeleton",
            options: ["", "purple", "green", "blue"],
            control: { type: "select" },
        },
        as: {
            description: "Element type to render",
            table: {
                defaultValue: {
                    summary: "div",
                },
            },
            options: ["div", "span"],
            control: { type: "select" },
        },
        size: {
            description: "Size of the EbaySkeletonButton or EbaySkeletonText",
            options: ["", "small", "large"],
            control: { type: "select" },
        },
        multiline: {
            description: "Render multiple lines of text on EbaySkeletonText",
            control: { type: "boolean" },
        },
    },
};

export default meta;

export const Default: StoryFn<EbaySkeletonStoriesProps> = ({ color, as }) => (
    <EbaySkeleton color={color} style={{ width: "220px" }} aria-label="Loading...">
        <EbaySkeletonTextbox as={as} />
    </EbaySkeleton>
);

export const Avatar: StoryFn<EbaySkeletonStoriesProps> = ({ color, as }) => (
    <EbaySkeleton color={color} aria-label="Loading...">
        <EbaySkeletonAvatar as={as} />
    </EbaySkeleton>
);

export const Button: StoryFn<EbaySkeletonStoriesProps> = ({ color, as, size }) => (
    <EbaySkeleton color={color} style={{ width: "220px" }} aria-label="Loading...">
        <EbaySkeletonButton as={as} size={size} />
    </EbaySkeleton>
);

export const Text: StoryFn<EbaySkeletonStoriesProps> = ({ color, as, multiline, size }) => (
    <EbaySkeleton color={color} style={{ width: "220px" }} aria-label="Loading...">
        <EbaySkeletonText as={as} multiline={multiline} size={size} />
    </EbaySkeleton>
);

export const TextBox: StoryFn<EbaySkeletonStoriesProps> = ({ color, as }) => (
    <EbaySkeleton color={color} style={{ width: "220px" }} aria-label="Loading...">
        <EbaySkeletonTextbox as={as} />
    </EbaySkeleton>
);

export const Image: StoryFn<EbaySkeletonStoriesProps> = ({ color, as }) => (
    <EbaySkeleton color={color} aria-label="Loading...">
        <EbaySkeletonImage style={{ width: "220px", height: "220px" }} as={as} />
    </EbaySkeleton>
);

export const Tile: StoryFn<EbaySkeletonStoriesProps> = ({ color, multiline = true, size = "large" }) => (
    <EbaySkeleton color={color} style={{ width: "220px" }} aria-label="Loading...">
        <EbaySkeletonImage style={{ width: "220px", height: "220px" }} />
        <EbaySkeletonText multiline={multiline} size={size} />
    </EbaySkeleton>
);

export const Composite: StoryFn<EbaySkeletonStoriesProps> = ({ color, size, multiline = true }) => (
    <EbaySkeleton color={color} style={{ width: "300px" }} aria-label="Loading...">
        <div>
            <EbaySkeletonAvatar as="span" />
            <EbaySkeletonText
                multiline={multiline}
                as="span"
                size={size}
                style={{ width: "220px", verticalAlign: "top" }}
            />
        </div>
        <EbaySkeletonButton size={size} />
    </EbaySkeleton>
);

export const WithContent = ({ color, as }) => {
    // TODO: Replace this example with "use()" hook and Suspense when upgrading to React 19
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div style={{ width: "88px" }}>
            {isLoading ? (
                <EbaySkeleton color={color} aria-label="Loading...">
                    <EbaySkeletonButton as={as} />
                </EbaySkeleton>
            ) : (
                <div>
                    <EbayButton>Button</EbayButton>
                </div>
            )}
        </div>
    );
};
