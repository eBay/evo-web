import React from "react";
import { composeStories } from "@storybook/react-vite";

import * as stories from "./index.stories";
import { render } from "@testing-library/react";

const { Default, Resized } = composeStories(stories);

describe("<EbayImagePlaceholder /> rendering", () => {
    it("renders default image placeholder", () => {
        const { container } = render(<Default />);
        expect(container).toMatchSnapshot();
    });

    it("renders resized image placeholder", () => {
        const { container } = render(<Resized />);
        expect(container).toMatchSnapshot();
    });
});
