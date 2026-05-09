import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import React from "react";
import { EvoAlertDialog } from "../alert-dialog";
import { EvoAlertDialogHeader } from "../alert-dialog-header";
import { EvoAlertDialogMain } from "../alert-dialog-main";
import { EvoAlertDialogConfirm } from "../alert-dialog-confirm";

function renderOpenDialog(
  onConfirmClick?: () => void,
  onOpenChange?: (open: boolean) => void,
) {
  return render(
    <EvoAlertDialog open onOpenChange={onOpenChange}>
      <EvoAlertDialogHeader>Alert Title</EvoAlertDialogHeader>
      <EvoAlertDialogMain>
        <p>You must acknowledge this alert to continue.</p>
      </EvoAlertDialogMain>
      <EvoAlertDialogConfirm onClick={onConfirmClick}>OK</EvoAlertDialogConfirm>
    </EvoAlertDialog>,
  );
}

describe("evo-alert-dialog", () => {
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
      const dialog = screen.container.querySelector("dialog");
      await expect.element(dialog!).toBeInTheDocument();
    });

    it("should not have dialog--close class when open", async () => {
      const screen = await renderOpenDialog();
      const dialog = screen.container.querySelector("dialog");
      await expect.element(dialog!).not.toHaveClass("dialog--close");
    });

    it("should have role alertdialog", async () => {
      const screen = await renderOpenDialog();
      const dialog = screen.getByRole("alertdialog");
      await expect.element(dialog).toBeInTheDocument();
    });

    it("should have aria-modal set to true", async () => {
      const screen = await renderOpenDialog();
      const dialog = screen.getByRole("alertdialog");
      await expect.element(dialog).toHaveAttribute("aria-modal", "true");
    });

    it("should have closedby set to none", async () => {
      const screen = await renderOpenDialog();
      const dialog = screen.container.querySelector("dialog");
      await expect.element(dialog!).toHaveAttribute("closedby", "none");
    });

    it("should render the header with dialog__title class", async () => {
      const screen = await renderOpenDialog();
      const title = screen.container.querySelector<HTMLElement>(".dialog__title");
      await expect.element(title!).toBeInTheDocument();
      expect(title?.tagName.toLowerCase()).toBe("h2");
      expect(title?.textContent).toContain("Alert Title");
    });

    it("should link the dialog to the header via aria-labelledby", async () => {
      const screen = await renderOpenDialog();
      const dialog = screen.container.querySelector("dialog")!;
      const title = screen.container.querySelector(".dialog__title")!;
      const titleId = title.id;
      expect(titleId).toBeTruthy();
      await expect.element(dialog).toHaveAttribute("aria-labelledby", titleId);
    });

    it("should use a custom id on EvoAlertDialogHeader and update aria-labelledby to match", async () => {
      const { container } = await render(
        <EvoAlertDialog open>
          <EvoAlertDialogHeader id="my-custom-id">Alert</EvoAlertDialogHeader>
          <EvoAlertDialogMain>
            <p>Content</p>
          </EvoAlertDialogMain>
          <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
        </EvoAlertDialog>,
      );
      const dialog = container.querySelector("dialog")!;
      const title = container.querySelector(".dialog__title")!;
      expect(title.id).toBe("my-custom-id");
      await expect.element(dialog).toHaveAttribute("aria-labelledby", "my-custom-id");
    });

    it("should render the confirm button", async () => {
      const screen = await renderOpenDialog();
      const button = screen.getByRole("button", { name: "OK" });
      await expect.element(button).toBeInTheDocument();
    });

    it("should render the main content area with dialog__main class", async () => {
      const screen = await renderOpenDialog();
      const main = screen.container.querySelector<HTMLElement>(".dialog__main");
      await expect.element(main!).toBeInTheDocument();
    });

    it("should have aria-describedby on the confirm button referencing the main content", async () => {
      const screen = await renderOpenDialog();
      const button = screen.getByRole("button", { name: "OK" });
      const describedBy = button.element().getAttribute("aria-describedby")!;
      expect(describedBy).toBeTruthy();
      const mainEl = document.getElementById(describedBy);
      expect(mainEl).toBeTruthy();
      expect(mainEl?.textContent).toContain(
        "You must acknowledge this alert to continue.",
      );
    });
  });

  describe("given a closed controlled dialog", () => {
    it("should have dialog--close class", async () => {
      const { container } = await render(
        <EvoAlertDialog open={false}>
          <EvoAlertDialogHeader>Alert</EvoAlertDialogHeader>
          <EvoAlertDialogMain>
            <p>Content</p>
          </EvoAlertDialogMain>
          <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
        </EvoAlertDialog>,
      );
      const dialog = container.querySelector("dialog");
      await expect.element(dialog!).toHaveClass("dialog--close");
    });
  });

  describe("given an uncontrolled dialog", () => {
    it("should have dialog--close class when defaultOpen is not set", async () => {
      const { container } = await render(
        <EvoAlertDialog>
          <EvoAlertDialogHeader>Alert</EvoAlertDialogHeader>
          <EvoAlertDialogMain>
            <p>Content</p>
          </EvoAlertDialogMain>
          <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
        </EvoAlertDialog>,
      );
      const dialog = container.querySelector("dialog");
      await expect.element(dialog!).toHaveClass("dialog--close");
    });

    it("should not have dialog--close class when defaultOpen is true", async () => {
      const { container } = await render(
        <EvoAlertDialog defaultOpen>
          <EvoAlertDialogHeader>Alert</EvoAlertDialogHeader>
          <EvoAlertDialogMain>
            <p>Content</p>
          </EvoAlertDialogMain>
          <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
        </EvoAlertDialog>,
      );
      const dialog = container.querySelector("dialog");
      await expect.element(dialog!).not.toHaveClass("dialog--close");
    });

    it("should close when confirm is clicked without needing external state", async () => {
      const { container } = await render(
        <EvoAlertDialog defaultOpen>
          <EvoAlertDialogHeader>Alert</EvoAlertDialogHeader>
          <EvoAlertDialogMain>
            <p>Content</p>
          </EvoAlertDialogMain>
          <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
        </EvoAlertDialog>,
      );
      const dialog = container.querySelector("dialog")!;
      await expect.element(dialog).not.toHaveClass("dialog--close");

      await user.click(container.querySelector<HTMLElement>("button")!);
      await expect.element(dialog).toHaveClass("dialog--close");
    });

    it("should call onOpenChange with false when confirm is clicked", async () => {
      const onOpenChange = vi.fn();
      const { container } = await render(
        <EvoAlertDialog defaultOpen onOpenChange={onOpenChange}>
          <EvoAlertDialogHeader>Alert</EvoAlertDialogHeader>
          <EvoAlertDialogMain>
            <p>Content</p>
          </EvoAlertDialogMain>
          <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
        </EvoAlertDialog>,
      );
      await user.click(container.querySelector<HTMLElement>("button")!);
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });
  });

  describe("when the confirm button is clicked (controlled)", () => {
    it("should call onOpenChange with false", async () => {
      const onOpenChange = vi.fn();
      const screen = await renderOpenDialog(undefined, onOpenChange);
      const button = screen.getByRole("button", { name: "OK" });
      await user.click(button);
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });

    it("should call the onClick handler passed to EvoAlertDialogConfirm", async () => {
      const onClick = vi.fn();
      const screen = await renderOpenDialog(onClick);
      const button = screen.getByRole("button", { name: "OK" });
      await user.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("should call both onOpenChange and onClick", async () => {
      const onClick = vi.fn();
      const onOpenChange = vi.fn();
      const screen = await renderOpenDialog(onClick, onOpenChange);
      const button = screen.getByRole("button", { name: "OK" });
      await user.click(button);
      expect(onOpenChange).toHaveBeenCalledWith(false);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("when Enter key is pressed on the confirm button", () => {
    it("should call onOpenChange with false", async () => {
      const onOpenChange = vi.fn();
      const screen = await renderOpenDialog(undefined, onOpenChange);
      const button = screen.getByRole("button", { name: "OK" });
      await user.click(button);
      await user.keyboard("{Enter}");
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });
  });

  describe("accessibility", () => {
    it("should have dialog class and dialog--narrow class", async () => {
      const screen = await renderOpenDialog();
      const dialog = screen.container.querySelector("dialog");
      await expect.element(dialog!).toHaveClass("dialog");
      await expect.element(dialog!).toHaveClass("dialog--narrow");
    });

    it("should forward ref to the dialog element", async () => {
      const ref = React.createRef<HTMLDialogElement>();
      await render(
        <EvoAlertDialog open ref={ref}>
          <EvoAlertDialogHeader>Alert</EvoAlertDialogHeader>
          <EvoAlertDialogMain>
            <p>Content</p>
          </EvoAlertDialogMain>
          <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
        </EvoAlertDialog>,
      );
      expect(ref.current).toBeInstanceOf(HTMLDialogElement);
    });

    it("should allow custom heading element via `as` prop on EvoAlertDialogHeader", async () => {
      const { container } = await render(
        <EvoAlertDialog open>
          <EvoAlertDialogHeader as="h1">Title</EvoAlertDialogHeader>
          <EvoAlertDialogMain>
            <p>Content</p>
          </EvoAlertDialogMain>
          <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
        </EvoAlertDialog>,
      );
      const title = container.querySelector(".dialog__title");
      expect(title?.tagName.toLowerCase()).toBe("h1");
    });
  });
});
