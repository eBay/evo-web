import * as React from "react";
import { vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { EbayDialogHeader } from "../../ebay-dialog-base";
import { EbayToast } from "../index";

vi.mock("../../common/random-id");

describe("<EbayToast>", () => {
    const closeToastHandler = vi.fn();

    beforeEach(() => {
        render(
            <EbayToast open onClose={closeToastHandler}>
                <EbayDialogHeader>Heading</EbayDialogHeader>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <input placeholder="Enter a value" />
            </EbayToast>,
        );
    });

    it("should have close button", () => {
        expect(document.querySelector("button.toast-dialog__close")).toBeInTheDocument();
    });

    it("should not focus on close button", () => {
        expect(document.querySelector("button.toast-dialog__close")).not.toHaveFocus();
    });

    it("should trigger onClose when close button is clicked", () => {
        fireEvent.click(document.querySelector("button.toast-dialog__close"));
        expect(closeToastHandler).toHaveBeenCalled();
    });
});
