import React from "react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";
import { render } from "@testing-library/react";

const { Default, InField, CustomText } = composeStories(stories);

describe("<EbayCharacterCount /> rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<Default />);
        expect(container).toMatchSnapshot();
    });

    it("renders inField story correctly", () => {
        const { container } = render(<InField />);
        expect(container).toMatchSnapshot();
    });

    it("renders customText story correctly", () => {
        const { container } = render(<CustomText />);
        expect(container).toMatchSnapshot();
    });
});
