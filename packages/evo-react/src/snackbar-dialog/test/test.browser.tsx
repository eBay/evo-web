/* eslint-disable jsx-a11y/no-access-key -- Optional access keys are supported by the legacy snackbar action. */
import { act, createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import {
  EvoSnackbarDialog,
  EvoSnackbarDialogAction,
  EvoSnackbarDialogActions,
  EvoSnackbarDialogMain,
} from "../index";

describe("evo-snackbar-dialog", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the nonmodal dialog and legacy layout", async () => {
    const ref = createRef<HTMLElement>();
    const screen = await render(
      <EvoSnackbarDialog
        open
        ref={ref}
        className="custom-snackbar"
        layout="column"
      >
        <EvoSnackbarDialogMain>
          <p>Item removed from your watchlist.</p>
        </EvoSnackbarDialogMain>
        <EvoSnackbarDialogActions>
          <EvoSnackbarDialogAction>Undo</EvoSnackbarDialogAction>
        </EvoSnackbarDialogActions>
      </EvoSnackbarDialog>,
    );
    const dialog = screen.getByRole("dialog", { name: "Notification" });
    expect(ref.current).toBe(dialog.element());
    expect(dialog.element().tagName).toBe("ASIDE");
    await expect.element(dialog).toHaveAttribute("aria-modal", "false");
    await expect.element(dialog).toHaveAttribute("aria-live", "polite");
    await expect.element(dialog).toHaveClass("custom-snackbar");
    expect(
      dialog
        .element()
        .querySelector(
          ".snackbar-dialog__window--column > .snackbar-dialog__main + .snackbar-dialog__actions",
        ),
    ).not.toBeNull();
  });

  it("closes after six seconds without interaction", async () => {
    const onOpen = vi.fn();
    const onClose = vi.fn();
    const screen = await render(
      <EvoSnackbarDialog open onOpen={onOpen} onClose={onClose}>
        <EvoSnackbarDialogMain>Item removed.</EvoSnackbarDialogMain>
      </EvoSnackbarDialog>,
    );
    expect(onOpen).toHaveBeenCalledTimes(1);
    await act(async () => {
      await vi.advanceTimersByTimeAsync(5999);
    });
    await expect.element(screen.getByRole("dialog")).toBeInTheDocument();
    await act(async () => {
      await vi.advanceTimersByTimeAsync(1);
    });
    expect(screen.getByRole("dialog").query()).toBeNull();
    expect(onClose).toHaveBeenCalledTimes(1);
    const closingDialog = screen.container.querySelector("aside");
    expect(closingDialog).toHaveAttribute("aria-hidden", "true");
    await act(async () => {
      await vi.advanceTimersByTimeAsync(250);
    });
    expect(closingDialog).toHaveAttribute("hidden");
  });

  it("pauses dismissal while focused and restarts on blur", async () => {
    const screen = await render(
      <EvoSnackbarDialog open>
        <EvoSnackbarDialogMain>Item removed.</EvoSnackbarDialogMain>
        <EvoSnackbarDialogActions>
          <EvoSnackbarDialogAction>Undo</EvoSnackbarDialogAction>
        </EvoSnackbarDialogActions>
      </EvoSnackbarDialog>,
    );
    const action = screen.getByRole("button", { name: "Undo" });
    await act(async () => {
      action
        .element()
        .dispatchEvent(new FocusEvent("focusin", { bubbles: true }));
    });
    await act(async () => {
      await vi.advanceTimersByTimeAsync(7000);
    });
    await expect.element(screen.getByRole("dialog")).toBeInTheDocument();
    await act(async () => {
      action
        .element()
        .dispatchEvent(
          new FocusEvent("focusout", { bubbles: true, relatedTarget: null }),
        );
    });
    await act(async () => {
      await vi.advanceTimersByTimeAsync(6000);
    });
    expect(screen.getByRole("dialog").query()).toBeNull();
  });

  it("pauses dismissal while hovered and restarts on mouse leave", async () => {
    const screen = await render(
      <EvoSnackbarDialog open>
        <EvoSnackbarDialogMain>Item removed.</EvoSnackbarDialogMain>
      </EvoSnackbarDialog>,
    );
    const dialog = screen.getByRole("dialog");
    await act(async () => {
      dialog
        .element()
        .dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
    });
    await act(async () => {
      await vi.advanceTimersByTimeAsync(7000);
    });
    await expect.element(dialog).toBeInTheDocument();
    await act(async () => {
      dialog
        .element()
        .dispatchEvent(new MouseEvent("mouseout", { bubbles: true }));
    });
    await act(async () => {
      await vi.advanceTimersByTimeAsync(6000);
    });
    expect(screen.getByRole("dialog").query()).toBeNull();
  });

  it("runs both action callbacks and closes", async () => {
    const onAction = vi.fn();
    const onClick = vi.fn();
    const onClose = vi.fn();
    const screen = await render(
      <EvoSnackbarDialog open onAction={onAction} onClose={onClose}>
        <EvoSnackbarDialogMain>Item removed.</EvoSnackbarDialogMain>
        <EvoSnackbarDialogActions>
          <EvoSnackbarDialogAction onClick={onClick} accessKey="u">
            Undo
          </EvoSnackbarDialogAction>
        </EvoSnackbarDialogActions>
      </EvoSnackbarDialog>,
    );
    const action = screen.getByRole("button", { name: /Undo/ });
    await action.click();
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onAction).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("dialog").query()).toBeNull();
  });

  it("keeps a closed root hidden from the accessibility tree", async () => {
    const screen = await render(
      <EvoSnackbarDialog>
        <EvoSnackbarDialogMain>Item removed.</EvoSnackbarDialogMain>
      </EvoSnackbarDialog>,
    );
    // The closed dialog is hidden from the accessibility tree; querySelector is intentional here.
    const dialog = screen.container.querySelector("aside");
    expect(dialog).toHaveAttribute("hidden");
    expect(screen.getByRole("dialog").query()).toBeNull();
  });
});
