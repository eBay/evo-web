import React from "react";
import { vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import { EbayDialogHeader } from "../../ebay-dialog-base";
import { EbayConfirmDialog } from "../index";

vi.mock("../../common/random-id");

const openSpy = vi.fn();
const confirmSpy = vi.fn();
const rejectSpy = vi.fn();

const showDialog = () =>
    render(
        <EbayConfirmDialog
            open
            animated={false}
            confirmText="Confirm"
            rejectText="Reject"
            a11yCloseText="Close"
            onOpen={openSpy}
            onConfirm={confirmSpy}
            onReject={rejectSpy}
        >
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
        </EbayConfirmDialog>,
    );

describe("<EbayConfirmDialog>", () => {
    it("should focus on Confirm button", () => {
        showDialog();
        expect(screen.getByText("Confirm")).toHaveFocus();
    });

    it("should trigger onConfirm when Confirm button is clicked", () => {
        showDialog();
        fireEvent.click(screen.getByText("Confirm"));
        expect(confirmSpy).toHaveBeenCalled();
    });

    it("should trigger onOpen when dialog appears", () => {
        showDialog();
        expect(openSpy).toHaveBeenCalled();
    });

    it("should trigger onReject when Reject button is clicked", () => {
        showDialog();
        const button = screen.getByText("Reject");
        fireEvent.click(button);
        expect(button).toBeInTheDocument();
        expect(rejectSpy).toHaveBeenCalled();
    });
});
