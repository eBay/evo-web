import React from "react";
import { composeStories } from "@storybook/react-vite";

import * as stories from "./index.stories";
import { render } from "@testing-library/react";

const { Default } = composeStories(stories);

describe("<EbayFakeLink /> rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<Default />);
        expect(container).toMatchSnapshot();
    });

    it("renders disabled button correctly", () => {
        const { container } = render(<Default disabled />);
        expect(container).toMatchSnapshot();
    });
});
