import React from "react";
import { composeStories } from "@storybook/react-vite";

import * as stories from "./index.stories";
import { render } from "@testing-library/react";

const { Default, ColumnSorting, ColumnSortingWithLinks, ColumnSortingClientSide, TableWithAction } =
    composeStories(stories);

describe("<EbayTable /> rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<Default />);
        expect(container).toMatchSnapshot();
    });

    it("renders column sorting story correctly", () => {
        const { container } = render(<ColumnSorting />);
        expect(container).toMatchSnapshot();
    });

    it("renders column sorting with links story correctly", () => {
        const { container } = render(<ColumnSortingWithLinks />);
        expect(container).toMatchSnapshot();
    });

    it("renders column sorting client side story correctly", () => {
        const { container } = render(<ColumnSortingClientSide />);
        expect(container).toMatchSnapshot();
    });

    it("renders table with action story correctly", () => {
        const { container } = render(<TableWithAction />);
        expect(container).toMatchSnapshot();
    });

    it("renders with frozen header", () => {
        const { container } = render(<Default frozenHeader />);
        expect(container).toMatchSnapshot();
    });
});
