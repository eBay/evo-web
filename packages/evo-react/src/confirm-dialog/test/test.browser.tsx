import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import React from "react";
import { EvoConfirmDialog } from "../confirm-dialog";
import { EvoConfirmDialogHeader } from "../confirm-dialog-header";
import { EvoConfirmDialogMain } from "../confirm-dialog-main";
import { EvoConfirmDialogFooter } from "../confirm-dialog-footer";
import { EvoConfirmDialogReject } from "../confirm-dialog-reject";
import { EvoConfirmDialogConfirm } from "../confirm-dialog-confirm";

function renderOpenDialog(options?: {
  onConfirmClick?: () => void;
  onRejectClick?: () => void;
  onOpenChange?: (open: boolean) => void;
}) {
  return render(
    <EvoConfirmDialog open onOpenChange={options?.onOpenChange}>
      <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
      <EvoConfirmDialogMain>
        <p>You will permanently lose this address.</p>
      </EvoConfirmDialogMain>
      <EvoConfirmDialogFooter>
        <EvoConfirmDialogReject onClick={options?.onRejectClick}>
          Cancel
        </EvoConfirmDialogReject>
        <EvoConfirmDialogConfirm onClick={options?.onConfirmClick}>
          Delete
        </EvoConfirmDialogConfirm>
      </EvoConfirmDialogFooter>
    </EvoConfirmDialog>,
  );
}

describe("evo-confirm-dialog", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  describe("given an open controlled dialog", () => {
    it("should render a dialog element", async () => {
      const screen = await renderOpenDialog();
      const dialog = screen.getByRole("alertdialog");
      await expect.element(dialog).toBeInTheDocument();
    });

    it("should not have dialog--close class when open", async () => {
      const screen = await renderOpenDialog();
      const dialog = screen.getByRole("alertdialog");
      await expect.element(dialog).not.toHaveClass("dialog--close");
    });

    it("should have role alertdialog", async () => {
      const screen = await renderOpenDialog();
      await expect.element(screen.getByRole("alertdialog")).toBeInTheDocument();
    });

    it("should have aria-modal set to true", async () => {
      const screen = await renderOpenDialog();
      await expect
        .element(screen.getByRole("alertdialog"))
        .toHaveAttribute("aria-modal", "true");
    });

    it("should have closedby set to closerequest", async () => {
      const screen = await renderOpenDialog();
      await expect
        .element(screen.getByRole("alertdialog"))
        .toHaveAttribute("closedby", "closerequest");
    });

    it("should render the header with dialog__title class", async () => {
      const screen = await renderOpenDialog();
      const heading = screen.getByRole("heading", { name: "Delete Address?" });
      await expect.element(heading).toBeInTheDocument();
      expect(heading.element().tagName.toLowerCase()).toBe("h2");
      expect(heading.element().closest(".dialog__title")).not.toBeNull();
    });

    it("should link the dialog to the header via aria-labelledby", async () => {
      const screen = await renderOpenDialog();
      const dialog = screen.getByRole("alertdialog");
      const heading = screen.getByRole("heading", { name: "Delete Address?" });
      const titleId = heading.element().id;
      expect(titleId).toBeTruthy();
      await expect.element(dialog).toHaveAttribute("aria-labelledby", titleId);
    });

    it("should render the main content area with dialog__main class", async () => {
      const screen = await renderOpenDialog();
      const content = screen.getByText("You will permanently lose this address.");
      expect(content.element().closest(".dialog__main")).not.toBeNull();
    });

    it("should render the footer with dialog__footer class", async () => {
      const screen = await renderOpenDialog();
      const confirmBtn = screen.getByRole("button", { name: "Delete" });
      expect(confirmBtn.element().closest(".dialog__footer")).not.toBeNull();
    });

    it("should render the footer with a custom className", async () => {
      const screen = await render(
        <EvoConfirmDialog open>
          <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
          <EvoConfirmDialogMain><p>Content</p></EvoConfirmDialogMain>
          <EvoConfirmDialogFooter className="my-footer">
            <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
            <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
          </EvoConfirmDialogFooter>
        </EvoConfirmDialog>,
      );
      const confirmBtn = screen.getByRole("button", { name: "Delete" });
      const footer = confirmBtn.element().closest(".dialog__footer");
      expect(footer?.classList.contains("my-footer")).toBe(true);
    });

    it("should render both reject and confirm buttons", async () => {
      const screen = await renderOpenDialog();
      await expect
        .element(screen.getByRole("button", { name: "Cancel" }))
        .toBeInTheDocument();
      await expect
        .element(screen.getByRole("button", { name: "Delete" }))
        .toBeInTheDocument();
    });

    it("should have aria-describedby on the confirm button referencing main content", async () => {
      const screen = await renderOpenDialog();
      const button = screen.getByRole("button", { name: "Delete" });
      const describedBy = button.element().getAttribute("aria-describedby")!;
      expect(describedBy).toBeTruthy();
      const mainEl = document.getElementById(describedBy);
      expect(mainEl?.textContent).toContain("You will permanently lose this address.");
    });

    it("should use a custom id on EvoConfirmDialogHeader and update aria-labelledby to match", async () => {
      const screen = await render(
        <EvoConfirmDialog open>
          <EvoConfirmDialogHeader id="my-header-id">Delete Address?</EvoConfirmDialogHeader>
          <EvoConfirmDialogMain><p>Content</p></EvoConfirmDialogMain>
          <EvoConfirmDialogFooter>
            <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
            <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
          </EvoConfirmDialogFooter>
        </EvoConfirmDialog>,
      );
      const dialog = screen.getByRole("alertdialog");
      const heading = screen.getByRole("heading", { name: "Delete Address?" });
      expect(heading.element().id).toBe("my-header-id");
      await expect.element(dialog).toHaveAttribute("aria-labelledby", "my-header-id");
    });

    it("should use a custom id on EvoConfirmDialogMain and update aria-describedby to match", async () => {
      const screen = await render(
        <EvoConfirmDialog open>
          <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
          <EvoConfirmDialogMain id="my-main-id"><p>Content</p></EvoConfirmDialogMain>
          <EvoConfirmDialogFooter>
            <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
            <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
          </EvoConfirmDialogFooter>
        </EvoConfirmDialog>,
      );
      const button = screen.getByRole("button", { name: "Delete" });
      await expect.element(button).toHaveAttribute("aria-describedby", "my-main-id");
    });
  });

  describe("given a closed controlled dialog", () => {
    it("should have dialog--close class", async () => {
      const { container } = await render(
        <EvoConfirmDialog open={false}>
          <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
          <EvoConfirmDialogMain><p>Content</p></EvoConfirmDialogMain>
          <EvoConfirmDialogFooter>
            <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
            <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
          </EvoConfirmDialogFooter>
        </EvoConfirmDialog>,
      );
      // dialog is closed and hidden from the a11y tree; querySelector is intentional here
      const dialog = container.querySelector("dialog");
      await expect.element(dialog!).toHaveClass("dialog--close");
    });
  });

  describe("given an uncontrolled dialog", () => {
    it("should have dialog--close class when defaultOpen is not set", async () => {
      const { container } = await render(
        <EvoConfirmDialog>
          <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
          <EvoConfirmDialogMain><p>Content</p></EvoConfirmDialogMain>
          <EvoConfirmDialogFooter>
            <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
            <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
          </EvoConfirmDialogFooter>
        </EvoConfirmDialog>,
      );
      // dialog is closed and hidden from the a11y tree; querySelector is intentional here
      const dialog = container.querySelector("dialog");
      await expect.element(dialog!).toHaveClass("dialog--close");
    });

    it("should not have dialog--close class when defaultOpen is true", async () => {
      const screen = await render(
        <EvoConfirmDialog defaultOpen>
          <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
          <EvoConfirmDialogMain><p>Content</p></EvoConfirmDialogMain>
          <EvoConfirmDialogFooter>
            <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
            <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
          </EvoConfirmDialogFooter>
        </EvoConfirmDialog>,
      );
      await expect
        .element(screen.getByRole("alertdialog"))
        .not.toHaveClass("dialog--close");
    });

    it("should close when confirm is clicked without needing external state", async () => {
      const screen = await render(
        <EvoConfirmDialog defaultOpen>
          <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
          <EvoConfirmDialogMain><p>Content</p></EvoConfirmDialogMain>
          <EvoConfirmDialogFooter>
            <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
            <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
          </EvoConfirmDialogFooter>
        </EvoConfirmDialog>,
      );
      const dialog = screen.getByRole("alertdialog");
      await expect.element(dialog).not.toHaveClass("dialog--close");
      await user.click(screen.getByRole("button", { name: "Delete" }));
      await expect.element(dialog).toHaveClass("dialog--close");
    });

    it("should close when reject is clicked without needing external state", async () => {
      const screen = await render(
        <EvoConfirmDialog defaultOpen>
          <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
          <EvoConfirmDialogMain><p>Content</p></EvoConfirmDialogMain>
          <EvoConfirmDialogFooter>
            <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
            <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
          </EvoConfirmDialogFooter>
        </EvoConfirmDialog>,
      );
      const dialog = screen.getByRole("alertdialog");
      await expect.element(dialog).not.toHaveClass("dialog--close");
      await user.click(screen.getByRole("button", { name: "Cancel" }));
      await expect.element(dialog).toHaveClass("dialog--close");
    });

    it("should close when Escape is pressed without needing external state", async () => {
      const screen = await render(
        <EvoConfirmDialog defaultOpen>
          <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
          <EvoConfirmDialogMain><p>Content</p></EvoConfirmDialogMain>
          <EvoConfirmDialogFooter>
            <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
            <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
          </EvoConfirmDialogFooter>
        </EvoConfirmDialog>,
      );
      const dialog = screen.getByRole("alertdialog");
      await expect.element(dialog).not.toHaveClass("dialog--close");
      await user.keyboard("{Escape}");
      await expect.element(dialog).toHaveClass("dialog--close");
    });

    it("should NOT call the reject onClick handler when Escape is pressed", async () => {
      const onRejectClick = vi.fn();
      await render(
        <EvoConfirmDialog defaultOpen>
          <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
          <EvoConfirmDialogMain><p>Content</p></EvoConfirmDialogMain>
          <EvoConfirmDialogFooter>
            <EvoConfirmDialogReject onClick={onRejectClick}>Cancel</EvoConfirmDialogReject>
            <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
          </EvoConfirmDialogFooter>
        </EvoConfirmDialog>,
      );
      await user.keyboard("{Escape}");
      expect(onRejectClick).not.toHaveBeenCalled();
    });
  });

  describe("when the confirm button is clicked (controlled)", () => {
    it("should call onOpenChange with false", async () => {
      const onOpenChange = vi.fn();
      const screen = await renderOpenDialog({ onOpenChange });
      await user.click(screen.getByRole("button", { name: "Delete" }));
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });

    it("should call the onClick handler passed to EvoConfirmDialogConfirm", async () => {
      const onConfirmClick = vi.fn();
      const screen = await renderOpenDialog({ onConfirmClick });
      await user.click(screen.getByRole("button", { name: "Delete" }));
      expect(onConfirmClick).toHaveBeenCalledTimes(1);
    });

    it("should call both onOpenChange and confirm onClick", async () => {
      const onConfirmClick = vi.fn();
      const onOpenChange = vi.fn();
      const screen = await renderOpenDialog({ onConfirmClick, onOpenChange });
      await user.click(screen.getByRole("button", { name: "Delete" }));
      expect(onOpenChange).toHaveBeenCalledWith(false);
      expect(onConfirmClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("when Escape is pressed (controlled)", () => {
    it("should call onOpenChange with false", async () => {
      const onOpenChange = vi.fn();
      await renderOpenDialog({ onOpenChange });
      // The confirm button receives focus automatically via autoFocus + showModal()
      await user.keyboard("{Escape}");
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });

    it("should NOT call the reject onClick handler", async () => {
      const onRejectClick = vi.fn();
      await renderOpenDialog({ onRejectClick });
      await user.keyboard("{Escape}");
      expect(onRejectClick).not.toHaveBeenCalled();
    });
  });

  describe("when the reject button is clicked (controlled)", () => {
    it("should call onOpenChange with false", async () => {
      const onOpenChange = vi.fn();
      const screen = await renderOpenDialog({ onOpenChange });
      await user.click(screen.getByRole("button", { name: "Cancel" }));
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });

    it("should call the onClick handler passed to EvoConfirmDialogReject", async () => {
      const onRejectClick = vi.fn();
      const screen = await renderOpenDialog({ onRejectClick });
      await user.click(screen.getByRole("button", { name: "Cancel" }));
      expect(onRejectClick).toHaveBeenCalledTimes(1);
    });

    it("should call both onOpenChange and reject onClick", async () => {
      const onRejectClick = vi.fn();
      const onOpenChange = vi.fn();
      const screen = await renderOpenDialog({ onRejectClick, onOpenChange });
      await user.click(screen.getByRole("button", { name: "Cancel" }));
      expect(onOpenChange).toHaveBeenCalledWith(false);
      expect(onRejectClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("accessibility", () => {
    it("should have dialog and dialog--narrow classes", async () => {
      const screen = await renderOpenDialog();
      const dialog = screen.getByRole("alertdialog");
      await expect.element(dialog).toHaveClass("dialog");
      await expect.element(dialog).toHaveClass("dialog--narrow");
    });

    it("should forward ref to the dialog element", async () => {
      const ref = React.createRef<HTMLDialogElement>();
      await render(
        <EvoConfirmDialog open ref={ref}>
          <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
          <EvoConfirmDialogMain><p>Content</p></EvoConfirmDialogMain>
          <EvoConfirmDialogFooter>
            <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
            <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
          </EvoConfirmDialogFooter>
        </EvoConfirmDialog>,
      );
      expect(ref.current).toBeInstanceOf(HTMLDialogElement);
    });

    it("should allow a custom heading element via `as` on EvoConfirmDialogHeader", async () => {
      const screen = await render(
        <EvoConfirmDialog open>
          <EvoConfirmDialogHeader as="h1">Delete Address?</EvoConfirmDialogHeader>
          <EvoConfirmDialogMain><p>Content</p></EvoConfirmDialogMain>
          <EvoConfirmDialogFooter>
            <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
            <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
          </EvoConfirmDialogFooter>
        </EvoConfirmDialog>,
      );
      const heading = screen.getByRole("heading", { name: "Delete Address?" });
      expect(heading.element().tagName.toLowerCase()).toBe("h1");
    });
  });
});
