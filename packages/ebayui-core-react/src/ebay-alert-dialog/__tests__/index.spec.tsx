import React from "react";
import { vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EbayAlertDialog } from "../index";
import { EbayDialogHeader } from "../../ebay-dialog-base";

vi.mock("../../common/random-id");

const onConfirmSpy = vi.fn();
const onOpenSpy = vi.fn();
const onCloseSpy = vi.fn();

function renderOpenDialog() {
    return render(
        <EbayAlertDialog
            open
            confirmText="OK"
            onOpen={onOpenSpy}
            onConfirm={onConfirmSpy}
            onClose={onCloseSpy}
            a11yCloseText="Close Dialog"
        >
            <EbayDialogHeader>Alert Title</EbayDialogHeader>
            <p>You must acknowledge this alert to continue.</p>
        </EbayAlertDialog>,
    );
}

describe("<EbayAlertDialog />", () => {
    describe("given an open dialog", () => {
        beforeEach(() => {
            vi.clearAllMocks();
            renderOpenDialog();
        });

        it("then it should emit the open event", () => {
            expect(onOpenSpy).toHaveBeenCalled();
        });

        it("then it should render the confirm button", () => {
            expect(screen.getByText("OK")).toBeInTheDocument();
        });

        describe("when the confirm button is clicked", () => {
            it("then it should call onConfirm", async () => {
                const button = screen.getByRole("button", { name: "OK" });
                await userEvent.click(button);
                expect(onConfirmSpy).toHaveBeenCalledTimes(1);
            });
        });

        describe("when Enter key is pressed on the confirm button", () => {
            it("then it should call onConfirm", async () => {
                const user = userEvent.setup();
                const button = screen.getByRole("button", { name: "OK" });
                button.focus();
                await user.keyboard("{Enter}");
                expect(onConfirmSpy).toHaveBeenCalledTimes(1);
            });
        });

        describe("when Space key is pressed on the confirm button", () => {
            it("then it should call onConfirm", async () => {
                const user = userEvent.setup();
                const button = screen.getByRole("button", { name: "OK" });
                button.focus();
                await user.keyboard(" ");
                expect(onConfirmSpy).toHaveBeenCalledTimes(1);
            });
        });

        describe("when Escape key is pressed", () => {
            it("then it should not close the dialog", async () => {
                const user = userEvent.setup();
                const button = screen.getByRole("button", { name: "OK" });
                button.focus();
                await user.keyboard("{Escape}");
                expect(onCloseSpy).not.toHaveBeenCalled();
                expect(screen.getByRole("alertdialog")).toBeInTheDocument();
            });
        });

        describe("accessibility", () => {
            it.todo("when the dialog opens, then it should focus on the confirm button");

            it("then it should have role alertdialog", () => {
                const dialog = screen.getByRole("alertdialog");
                expect(dialog).toHaveAttribute("role", "alertdialog");
            });

            it("then it should have aria-modal set to true", () => {
                const dialog = screen.getByRole("alertdialog");
                expect(dialog).toHaveAttribute("aria-modal", "true");
            });

            it("then it should have aria-labelledby referencing the header", () => {
                const dialog = screen.getByRole("alertdialog");
                const labelledBy = dialog.getAttribute("aria-labelledby");
                expect(labelledBy).toBeTruthy();
                const labelEl = document.getElementById(labelledBy!);
                expect(labelEl).toBeTruthy();
                expect(labelEl?.textContent).toContain("Alert Title");
            });

            it("then it should have aria-describedby on the confirm button referencing main content", () => {
                const button = screen.getByRole("button", { name: "OK" });
                const describedBy = button.getAttribute("aria-describedby");
                expect(describedBy).toBe("alert-dialog-main");
                const mainEl = document.getElementById(describedBy!);
                expect(mainEl).toBeTruthy();
                expect(mainEl?.textContent).toContain("You must acknowledge this alert to continue.");
            });
        });
    });
});
