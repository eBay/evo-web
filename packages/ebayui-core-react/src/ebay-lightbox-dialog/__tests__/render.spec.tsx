import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";
import userEvent from "@testing-library/user-event";

const { Expressive, LazyContent } = composeStories(stories);

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

    describe("a11y", () => {
        it("should trap the focus on the dialog", async () => {
            render(<LazyContent />);

            const button = screen.getByText("Open Dialog");

            await userEvent.click(button);

            await waitFor(() => screen.getByText(/Lorem ipsum/), {
                interval: 2000,
            });

            // TODO: Enable when using vitest browser mode, as makeup-focusables needs element offsets
            // const closeButton = screen.getByLabelText('Close')
            // const link = screen.getByText('www.ebay.com')
            // const primaryButton = screen.getByText('OK')
            // const secondaryButton = screen.getByText('Cancel')
            //
            // expect(document.activeElement).toBe(closeButton)
            //
            // await userEvent.tab()
            // expect(document.activeElement).toBe(link)
            //
            // await userEvent.tab()
            // expect(document.activeElement).toBe(primaryButton)
            //
            // await userEvent.tab()
            // expect(document.activeElement).toBe(secondaryButton)
            //
            // await userEvent.tab()
            // expect(document.activeElement).toBe(closeButton)
        });
    });
});
