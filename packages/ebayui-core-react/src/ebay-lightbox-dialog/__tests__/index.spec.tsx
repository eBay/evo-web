import React, { useCallback, useState } from "react";
import { vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EbayDialogFooter, EbayDialogHeader } from "../../ebay-dialog-base";
import { EbayLightboxDialog } from "../index";

vi.mock("../../common/random-id");

const closeSpy = vi.fn();
const openSpy = vi.fn();
const openDialog = (props = {}) =>
    render(
        <EbayLightboxDialog animated={false} open onOpen={openSpy} onClose={closeSpy} a11yCloseText="Close" {...props}>
            <EbayDialogHeader>Heading</EbayDialogHeader>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
            <input placeholder="Enter a value" />
            <EbayDialogFooter>Footing</EbayDialogFooter>
        </EbayLightboxDialog>,
    );

describe("<EbayLightboxDialog>", () => {
    it("should trigger onOpen when dialog appears", () => {
        openDialog();
        expect(openSpy).toHaveBeenCalled();
    });

    it("should have close button", () => {
        openDialog();
        expect(document.querySelector(`button.lightbox-dialog__close`)).toBeInTheDocument();
    });

    it("should focus on close button", () => {
        openDialog();
        expect(document.querySelector("button.lightbox-dialog__close")).toHaveFocus();
    });

    it("should trigger onClose when close button is clicked", () => {
        openDialog();
        fireEvent.click(document.querySelector(`button.lightbox-dialog__close`));
        expect(closeSpy).toHaveBeenCalled();
    });

    it("should render custom top content", () => {
        openDialog({
            top: <div className="custom-top">Top</div>,
        });
        expect(document.querySelector(".custom-top")).toBeInTheDocument();
    });
    it("should render banner image", () => {
        openDialog({
            bannerImgSrc: "http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg",
        });
        expect(document.querySelector(".lightbox-dialog__image")).toBeInTheDocument();
    });

    it("should not close the dialog when clicking an element inside that dissapears on click", async () => {
        // NOTE: This tests will be valid only when using Playwright where a real click event happens
        // instead of an event triggered by JavaScript. The reason is the way the Event Loop works
        // and how React (>18) schedules the DOM updates in the micro task. Since unit test uses JS API
        // to trigger events, all the handlers are executed in the same task, before the microtask, but
        // that is different in the browser, where each handler is a separate task, causing the React micro task
        // to be executed before the next handler.
        const onClose = vi.fn();
        const TestCase = () => {
            const [showButton, setShowButton] = useState(true);
            const handleClose = useCallback(onClose, []);

            return (
                <EbayLightboxDialog open onClose={handleClose} a11yCloseText="Close">
                    <EbayDialogHeader>Heading Text</EbayDialogHeader>
                    Dialog Content
                    <p>
                        {showButton && (
                            <button
                                onClick={() => {
                                    setShowButton(false);
                                }}
                            >
                                Hide me
                            </button>
                        )}
                    </p>
                </EbayLightboxDialog>
            );
        };

        render(<TestCase />);

        const button = screen.getByText("Hide me");

        await userEvent.click(button);

        expect(onClose).not.toHaveBeenCalled();
    });

    it("should not close the dialog when click starts inside and its dragged outside", () => {
        const onClose = vi.fn();

        const { container } = render(
            <EbayLightboxDialog open onClose={onClose} a11yCloseText="Close">
                <EbayDialogHeader>Heading Text</EbayDialogHeader>
                <p>Dialog Content</p>
            </EbayLightboxDialog>,
        );

        const content = screen.getByText("Dialog Content");
        fireEvent.mouseDown(content);
        fireEvent.click(container.querySelector(".lightbox-dialog")!);

        expect(onClose).not.toHaveBeenCalled();
    });
});
