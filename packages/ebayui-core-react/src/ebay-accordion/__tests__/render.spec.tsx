import React from "react";
import { composeStories } from "@storybook/react-vite";

import * as stories from "./index.stories";
import { render } from "@testing-library/react";

const { Default, Large, Open, AutoCollapse } = composeStories(stories);

describe("<EbayAccordion /> rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<Default />);
        expect(container).toMatchSnapshot();
    });

    it("renders large size story correctly", () => {
        const { container } = render(<Large />);
        expect(container).toMatchSnapshot();
    });

    it("renders open story correctly", () => {
        const { container } = render(<Open />);
        expect(container).toMatchSnapshot();
    });

    it("renders autoCollapse story correctly", () => {
        const { container } = render(<AutoCollapse />);
        expect(container).toMatchSnapshot();
    });
});
