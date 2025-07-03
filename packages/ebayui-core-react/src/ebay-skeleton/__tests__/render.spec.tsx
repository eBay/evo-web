/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";

const { Default, Avatar, Button, Text, Composite, Image, Tile, TextBox } = composeStories(stories);

describe("Render <EbaySkeleton /> component", () => {
    it.each([
        ["EbaySkeleton", Default, {}],
        ["EbaySkeleton color purple", Default, { color: "purple" }],
        ["EbaySkeleton color green", Default, { color: "green" }],
        ["EbaySkeleton color blue", Default, { color: "blue" }],
        ["EbaySkeletonAvatar", Avatar, {}],
        ['EbaySkeletonAvatar with "as" prop', Avatar, { as: "span" }],
        ["EbaySkeletonButton", Button, {}],
        ["EbaySkeletonButton with size prop large", Button, { size: "large" }],
        ["EbaySkeletonButton with size prop small", Button, { size: "small" }],
        ['EbaySkeletonButton with "as" prop', Button, { as: "span" }],
        ["EbaySkeletonText", Text, {}],
        ["EbaySkeletonText with multiline prop", Text, { multiline: true }],
        ["EbaySkeletonText with size prop", Text, { size: "large" }],
        ['EbaySkeletonText with "as" prop', Text, { as: "span" }],
        ["EbaySkeleton composite", Composite, {}],
        ["EbaySkeletonImage", Image, {}],
        ['EbaySkeletonImage with "as" prop', Image, { as: "span" }],
        ["EbaySkeleton tile", Tile, {}],
        ["EbaySkeletonTextBox", TextBox, {}],
        ['EbaySkeletonTextBox with "as" prop', TextBox, { as: "span" }],
    ])(`should render the %s component`, (_, Component, props) => {
        render(<Component {...(props as stories.EbaySkeletonStoriesProps)} />);
        expect(screen.getByLabelText("Loading...")).toMatchSnapshot();
    });
});
