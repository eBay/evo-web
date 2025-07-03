import React from "react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";
import { render } from "@testing-library/react";

const { Default, WithMessages, WithSingleMessage, WithLongMessage, WithCustomTiming, WithMediumSize } =
    composeStories(stories);

jest.mock("../../common/random-id");

describe("<EbayProgressBarExpressive /> rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<Default />);
        expect(container).toMatchSnapshot();
    });

    it("renders with messages story correctly", () => {
        const { container } = render(<WithMessages />);
        expect(container).toMatchSnapshot();
    });

    it("renders with single message story correctly", () => {
        const { container } = render(<WithSingleMessage />);
        expect(container).toMatchSnapshot();
    });

    it("renders with long message story correctly", () => {
        const { container } = render(<WithLongMessage />);
        expect(container).toMatchSnapshot();
    });

    it("renders with custom timing story correctly", () => {
        const { container } = render(<WithCustomTiming />);
        expect(container).toMatchSnapshot();
    });

    it("renders with medium size story correctly", () => {
        const { container } = render(<WithMediumSize />);
        expect(container).toMatchSnapshot();
    });
});
