import React from "react";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";

const { Expressive } = composeStories(stories);

describe("<EbayLightboxDialog /> render", () => {
    it("should render the expressive dialog when passing bannerImgSrc", () => {
        const { container } = render(<Expressive />);

        expect(container.querySelector(".lightbox-dialog--expressive")).toBeInTheDocument();

        const imageContainer = container.querySelector(".lightbox-dialog__image");
        expect(imageContainer).toBeInTheDocument();
        expect(imageContainer).toHaveStyle(
            "background-image: url(http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg)",
        );
    });
});
