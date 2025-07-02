import React from "react";
import { composeStories } from "@storybook/react-vite";

import * as stories from "./index.stories";
import { render } from "@testing-library/react";
import EbayFilter from "../filter";

const { Default } = composeStories(stories);

describe("<EbayFilter /> rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<Default />);
        expect(container).toMatchSnapshot();
    });

    it("renders with pressed attribute", () => {
        const { container } = render(
            <EbayFilter selected useAriaPressed>
                text
            </EbayFilter>,
        );
        expect(container).toMatchSnapshot();
    });

    it("renders without pressed attribute", async () => {
        const { container } = render(
            <EbayFilter selected useAriaPressed={false}>
                text
            </EbayFilter>,
        );
        expect(container).toMatchSnapshot();
    });

    it("renders with disabled attribute", async () => {
        const { container } = render(<EbayFilter disabled>text</EbayFilter>);
        expect(container).toMatchSnapshot();
    });

    it("renders with link", async () => {
        const { container } = render(<EbayFilter href="#link">text</EbayFilter>);
        expect(container).toMatchSnapshot();
    });

    it("renders with link and disabled attribute", async () => {
        const { container } = render(
            <EbayFilter href="#link" disabled>
                text
            </EbayFilter>,
        );
        expect(container).toMatchSnapshot();
    });
});
