import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import { EbayAlertDialog } from "../index";

jest.mock("../../common/random-id");

const closeSpy = jest.fn();
const openSpy = jest.fn();

describe("<EbayAlertDialog>", () => {
    beforeEach(() => {
        render(
            <EbayAlertDialog confirmText="Confirm" open onOpen={openSpy} onConfirm={closeSpy} a11yCloseText="Close">
                <p>Lorem ipsum dolor</p>
            </EbayAlertDialog>,
        );
    });
    it("should trigger onOpen when dialog appears", () => {
        expect(openSpy).toHaveBeenCalled();
    });

    it("should have close button", () => {
        expect(screen.getByText("Confirm")).toBeInTheDocument();
    });

    it("should trigger onClose when close button is clicked", () => {
        fireEvent.click(screen.getByText("Confirm"));
        expect(closeSpy).toHaveBeenCalled();
    });
});
