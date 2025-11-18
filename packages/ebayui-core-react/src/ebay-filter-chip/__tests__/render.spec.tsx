import React from "react";
import { composeStories } from "@storybook/react-vite";

import * as stories from "./index.stories";
import { render } from "@testing-library/react";

const {
    Default,
    Selected,
    WithIcon,
    Expressive,
    ExpressiveSelected,
    Menu,
    MenuExpanded,
    Anchor,
    AnchorSelected,
    Disabled,
    Collection,
} = composeStories(stories);

describe("<EbayFilterChip /> rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<Default />);
        expect(container).toMatchSnapshot();
    });

    it("renders selected story correctly", () => {
        const { container } = render(<Selected />);
        expect(container).toMatchSnapshot();
    });

    it("renders with icon story correctly", () => {
        const { container } = render(<WithIcon />);
        expect(container).toMatchSnapshot();
    });

    it("renders expressive story correctly", () => {
        const { container } = render(<Expressive />);
        expect(container).toMatchSnapshot();
    });

    it("renders expressive selected story correctly", () => {
        const { container } = render(<ExpressiveSelected />);
        expect(container).toMatchSnapshot();
    });

    it("renders menu story correctly", () => {
        const { container } = render(<Menu />);
        expect(container).toMatchSnapshot();
    });

    it("renders menu expanded story correctly", () => {
        const { container } = render(<MenuExpanded />);
        expect(container).toMatchSnapshot();
    });

    it("renders anchor story correctly", () => {
        const { container } = render(<Anchor />);
        expect(container).toMatchSnapshot();
    });

    it("renders anchor selected story correctly", () => {
        const { container } = render(<AnchorSelected />);
        expect(container).toMatchSnapshot();
    });

    it("renders disabled story correctly", () => {
        const { container } = render(<Disabled />);
        expect(container).toMatchSnapshot();
    });

    it("renders collection story correctly", () => {
        const { container } = render(<Collection />);
        expect(container).toMatchSnapshot();
    });
});
