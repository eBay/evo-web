import React from "react";
import { composeStories } from "@storybook/react-vite";
import { fireEvent, render } from "@testing-library/react";

import * as stories from "./index.stories";
import EbayAvatar from "../avatar";
import { EbayAvatarImage } from "..";

const { Default, SignedOut, WithCustomBody, WithImage } = composeStories(stories);

describe("<EbayAvatar /> rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<Default />);
        expect(container).toMatchSnapshot();
    });

    it("renders a different color for different users", () => {
        const { container } = render(<Default username="robert" />);
        expect(container).toMatchSnapshot();

        const { container: container2 } = render(<Default username="test" />);
        expect(container2).toMatchSnapshot();

        const { container: container3 } = render(<Default username="john" />);
        expect(container3).toMatchSnapshot();
    });

    it("renders signed out story correctly", () => {
        const { container } = render(<SignedOut />);
        expect(container).toMatchSnapshot();
    });

    it("renders with custom body story correctly", () => {
        const { container } = render(<WithCustomBody />);
        expect(container).toMatchSnapshot();
    });

    it("renders with image story correctly", () => {
        const { container } = render(<WithImage />);
        expect(container).toMatchSnapshot();
    });

    it("renders the image-fit correctly", () => {
        const { container } = render(
            <EbayAvatar knownAspectRatio={0.5}>
                <EbayAvatarImage src="http://example.com/picture.jpg" />
            </EbayAvatar>,
        );

        expect(container).toMatchSnapshot();
    });

    it("should automatically define image-fit on image load", () => {
        const { container } = render(
            <EbayAvatar>
                <EbayAvatarImage src="http://example.com/picture.jpg" />
            </EbayAvatar>,
        );

        const img = container.querySelector("img") as HTMLImageElement;
        Object.defineProperty(img, "naturalWidth", { value: 3 });
        Object.defineProperty(img, "naturalHeight", { value: 5 });
        fireEvent.load(img);

        expect(container).toMatchSnapshot();
    });
});
