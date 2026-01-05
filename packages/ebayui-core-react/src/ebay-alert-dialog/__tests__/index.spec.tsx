import React from "react";
import { vi } from "vitest";
import { screen, fireEvent, render } from "@testing-library/react";
import { EbayAlertDialog } from "../index";

vi.mock("../../common/random-id");

const closeSpy = vi.fn();
const openSpy = vi.fn();

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
