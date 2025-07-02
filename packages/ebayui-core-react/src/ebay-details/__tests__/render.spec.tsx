import React from "react";
import { composeStories } from "@storybook/react-vite";

import * as stories from "./index.stories";
import { render } from "@testing-library/react";

const { Default, CenterAlignment, SmallSize } = composeStories(stories);

describe("<EbayDetails> rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<Default />);

        const details = container.querySelector("details") as HTMLDetailsElement;

        expect(details).toMatchSnapshot();
    });

    it("renders center alignment story correctly", () => {
        const { container } = render(<CenterAlignment />);

        const details = container.querySelector("details") as HTMLDetailsElement;

        expect(details).toMatchSnapshot();
    });

    it("renders small size story correctly", () => {
        const { container } = render(<SmallSize />);

        const details = container.querySelector("details") as HTMLDetailsElement;

        expect(details).toMatchSnapshot();
    });
});
